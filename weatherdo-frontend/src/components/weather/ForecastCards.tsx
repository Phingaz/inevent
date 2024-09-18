import { capitalize, getWeatherIcon } from "../../lib/helpers";
import { ForecastItem } from "../../types/weather";

const ForecastCards = ({ day }: { day: ForecastItem }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-w-[140px] flex-grow">
      <p className="text-sm font-medium text-gray-500 mb-2">
        {new Date(day.dt * 1000).toLocaleDateString(undefined, {
          weekday: "long",
        })}
      </p>
      <div className="flex items-center justify-between">
        {getWeatherIcon(day.weather[0].icon)}
        <span className="text-xl font-semibold text-gray-700">
          {day.main.temp.toFixed()}°C
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {capitalize(day.weather[0].description)}
      </p>
    </div>
  );
};

export default ForecastCards;
