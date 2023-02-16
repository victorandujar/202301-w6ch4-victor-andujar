import "./loadEnviroment.js";
import express from "express";
import createDebug from "debug";
import thingsRouter from "./routes/router.js";

const debug = createDebug("index");

export const app = express();

const port = process.env.PORT ?? 4000;

app.listen(port);

app.get("/things", thingsRouter);
