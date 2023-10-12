import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { healthRouter } from "./routes/health";
import { guestRouter } from "./routes/guest";
import cors from 'cors';

const app: Application = express();

const allowOrigins = ['http://localhost:3000']

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: allowOrigins
}))
// app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  //   errorHandler(err, req, res, next)
  // });
  // app.use(errorHandler)
  
app.use("/health", healthRouter);
app.use("/guests", guestRouter)

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});



export default app;