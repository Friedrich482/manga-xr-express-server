import { Request, Response } from "express";

const homeController = async (req: Request, res: Response) => {
  res.status(200);
  res.send("<p style='text-align:center;'>Welcome on the manga XR API</p>");
};

export default homeController;
