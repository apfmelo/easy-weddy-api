import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { healthRouter } from "./routes/health";
import { guestRouter } from "./routes/guest";
import cors from 'cors';

const app: Application = express();

const allowOrigins = ['http://localhost:3000', 'https://easy-weddy-front-fim6ywqu5q-uc.a.run.app']

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: allowOrigins
}))
  
app.use("/health", healthRouter);
app.use("/guests", guestRouter)

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Welcome to Easy Weddy API." });
});



export default app;