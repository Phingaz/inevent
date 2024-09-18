import { capitalize, getWeatherIcon } from "../../lib/helpers";
import { WeatherData } from "../../types/weather";

const MainData = ({ data }: { data: WeatherData }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center relative">
        {getWeatherIcon(data.current.weather[0].icon)}
        <span className="text-5xl font-bold ml-4 text-gray-700">
          {data.current.main.temp.toFixed()}
          <span className="text-sm font-[500] absolute top-0 -right-2">°C</span>
        </span>
      </div>
      <div className="text-right">
        <p className="text-lg text-gray-600">
          {capitalize(data.current.weather[0].description)}
        </p>
        <p className="text-sm text-gray-500">
          Humidity: {data.current.main.humidity}%
        </p>
        <p className="text-sm text-gray-500">
          Wind: {data.current.wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default MainData;
