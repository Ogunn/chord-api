import { Request, Response } from "express";
import User from "../model/User";

const authController = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration feiled" });
  }
};

export default authController;
