import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).send({
    message: "I'm alive!",
    service: 'Easy Weddy API',
    version: '1.0.0'
  });
});

export { router as healthRouter }