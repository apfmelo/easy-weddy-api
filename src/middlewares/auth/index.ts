import { Request, Response, NextFunction } from "express";

export function verifyAuth (req: Request, res: Response, next: NextFunction ) {
    const { authorization } = req.headers;
    if (authorization === process.env.API_KEY){
        next()
    } else {
        res.status(401).send({
            message: "Client not allowed"
        })
    }

}