import Router from "express";
import {
  getThingById,
  getThings,
} from "../thingsController/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThingById);

export default thingsRouter;
