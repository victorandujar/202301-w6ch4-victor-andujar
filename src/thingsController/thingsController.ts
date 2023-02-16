import { type Request, type Response } from "express";
import thingsIknow from "../data/data";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json(thingsIknow);
};
