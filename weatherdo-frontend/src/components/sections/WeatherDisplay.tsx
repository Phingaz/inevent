import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { useDebounce } from "../../hooks/useDebounce";
import { env } from "../../env";
import { WeatherData } from "../../types/weather";
import { capitalize } from "../../lib/helpers";
import Form from "../weather/Form";
import MainData from "../weather/MainData";
import ForecastCards from "../weather/ForecastCards";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

export default function WeatherDisplay() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");
  const debouncedCity = useDebounce(city, 1500);

  const { data, isLoading, error } = useQuery<WeatherData | null>({
    queryKey: ["weather", submittedCity || debouncedCity],
    queryFn: async () => {
      const cityToFetch = submittedCity || debouncedCity;
      if (!cityToFetch) return null;
      const response = await axios.get(
        `${env.baseUrl}/weather?city=${cityToFetch}`
      );
      return response.data;
    },
    enabled: !!(submittedCity || debouncedCity),
  });

  const errorMessage =
    error instanceof AxiosError ? error.response?.data?.error : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedCity(city);
  };

  useEffect(() => {
    if (submittedCity && city !== submittedCity) {
      setSubmittedCity("");
    }
  }, [city, submittedCity]);

  return (
    <div className="w-full mx-auto rounded-lg">
      <Form
        city={city}
        setCity={setCity}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />

      <div className="my-3 space-y-3">
        {isLoading && <Loader />}

        {errorMessage && <Error errorMessage={errorMessage} />}
      </div>

      {data && (
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Current Weather in {capitalize(submittedCity || debouncedCity)}
            </h2>
            <MainData data={data} />
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            5-Day Forecast
          </h3>
          <div className="flex flex-wrap gap-4">
            {data.forecast.list
              .filter((_, index) => index % 8 === 0)
              .map((day, index) => (
                <ForecastCards key={index} day={day} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
