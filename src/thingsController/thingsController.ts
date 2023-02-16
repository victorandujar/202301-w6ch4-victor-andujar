import { type Request, type Response } from "express";
import thingsIknow from "../data/data.js";

export const getThings = (req: Request, res: Response) => {
  if (!thingsIknow) {
    res.status(400).json({});
    return;
  }

  res.status(200).json({ thingsIknow });
};

export const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingById = thingsIknow.find((thing) => thing.id === +id);
  res.status(200).json({ thingById });
};
