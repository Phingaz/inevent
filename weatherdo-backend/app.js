import "dotenv/config";
import cors from "cors";
import express from "express";
import { getWeatherData } from "./middlewares/weather.js";
import { router as weather } from "./routes/weather.js";
import todo from "./routes/todo.js";
import { logger } from "./middlewares/logger.js";

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "1mb" }));
app.use(express.static("public"));
app.use(logger);

app.get("/", (_, res) => res.json("WeatherDo app running on port " + port));

app.use("/api/v1/weather", getWeatherData, weather);
app.use("/api/v1/todos", todo);

app.get("*", (req, res) =>
  res.status(404).json({
    message: `Request for url: "${req.url}" and method: "${req.method}" is invalid`,
  })
);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log("WeatherDo app started on port " + port)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
