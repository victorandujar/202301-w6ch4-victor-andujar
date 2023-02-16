import Router from "express";
import { getThings } from "../thingsController/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/things", getThings);

export default thingsRouter;
