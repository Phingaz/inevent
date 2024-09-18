import axios from "axios";

const weatherApiKey = process.env.OPEN_WEATHER_API_KEY;

export const getWeatherData = async (req, res, next) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  try {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`;

    const [currentWeatherRes, forecastRes] = await Promise.all([
      axios.get(currentWeatherUrl),
      axios.get(forecastUrl),
    ]);

    req.weatherData = {
      current: currentWeatherRes.data,
      forecast: forecastRes.data,
    };
    next();
  } catch (error) {
    console.log(error.response?.data?.message);
    res.status(500).json({ error: error.response?.data?.message });
  }
};
