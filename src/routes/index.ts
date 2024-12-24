import { Request, Response, Router } from "express";
import { jobRouter } from "./jobs";

export const router = Router();
router.get("/ping", (_req: Request, res: Response) => {
  res.status(200).json({ code: 200, message: "pong" });
});
router.use("/", jobRouter);
