import {
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
} from "lucide-react";

export const capitalize = (s?: string) =>
  s && s.charAt(0).toUpperCase() + s.slice(1);

export const getWeatherIcon = (icon: string) => {
  switch (icon) {
    case "01d":
    case "01n":
      return <Sun className="w-8 h-8 text-yellow-500" />;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <Cloud className="w-8 h-8 text-gray-400" />;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return <CloudRain className="w-8 h-8 text-blue-400" />;
    case "11d":
    case "11n":
      return <CloudLightning className="w-8 h-8 text-yellow-400" />;
    case "13d":
    case "13n":
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    case "50d":
    case "50n":
      return <Wind className="w-8 h-8 text-gray-300" />;
    default:
      return <Cloud className="w-8 h-8 text-gray-400" />;
  }
};
