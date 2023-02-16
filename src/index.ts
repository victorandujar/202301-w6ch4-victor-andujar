import "./loadEnviroment.js";
import express from "express";
import createDebug from "debug";
import thingsRouter from "./routes/router.js";
import morgan from "morgan";

export const debug = createDebug("index");

export const app = express();
app.use(express.json());

app.use(morgan("dev"));
const port = process.env.PORT ?? 4000;

app.use("/", thingsRouter);

app.listen(port);
