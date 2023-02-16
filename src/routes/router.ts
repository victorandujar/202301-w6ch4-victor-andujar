import Router from "express";
import {
  addThing,
  deleteThingById,
  getThingById,
  getThings,
} from "../thingsController/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThingById);
thingsRouter.delete("/things/:id", deleteThingById);
thingsRouter.post("/things", addThing);

export default thingsRouter;
