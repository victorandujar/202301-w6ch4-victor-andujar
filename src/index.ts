import "./loadEnviroment.js";
import express from "express";

const app = express();

const port = process.env.PORT ?? 4000;

app.listen(port);

app.get("/", (req, res) => {
  res.status(200).json({ pong: true });
});
