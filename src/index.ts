import "./loadEnviroment.js";
import express from "express";

const app = express();

const port = process.env.PORT ?? 4000;

const server = app.listen(port);

app.get("/", (req, res) => {
  res.json({ pong: true });
});