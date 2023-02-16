import { type Request, type Response } from "express";
import thingsIknow from "../data/data.js";
import { type ThingStructure } from "../data/types.js";

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

export const deleteThingById = (req: Request, res: Response) => {
  const { id } = req.params;

  thingsIknow.splice(+id - 1, 1);
  res.status(201).json({ thingsIknow });
};

export const addThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  const newThing = req.body;

  thingsIknow.push({ ...newThing, id: Date.now() });
  res.status(200).json({ thingsIknow });
};
