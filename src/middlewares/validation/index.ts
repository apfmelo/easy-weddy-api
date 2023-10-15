import { Request, Response, NextFunction } from "express";


export function validateGuest (req: Request, res: Response, next: NextFunction ) {
    const requiredFields = ['email', 'isConfirmed', 'fianceId']
    const { data } = req.body;

    const {hasRequiredKeys, missingRequired} = verifyRequiredFields(data, requiredFields)
    if (hasRequiredKeys){
        next()
    } else {
        res.status(400).send({
            message: "Missing fields",
            fields: missingRequired
        })
    }
}

export function validateGuests (req: Request, res: Response, next: NextFunction ) {
    const requiredFields = ['email', 'isConfirmed']
    
    const { data } = req.body;

    const missingFields: any[] = []
    data.forEach((item: any) => {
        const { hasRequiredKeys, missingRequired } = verifyRequiredFields(item, requiredFields)
        if(!hasRequiredKeys) missingFields.push({item, missingRequired})
    })
    const hasRequiredKeys = missingFields.length === 0
    if (hasRequiredKeys){
        next()
    } else {
        res.status(400).send({
            message: "Missing fields",
            fields: missingFields
        })
    }
}

export const verifyRequiredFields = (data: Record<string,string>, requiredFields: string[]) => {
    const objKeys = Object.keys(data)

    const missingRequired = requiredFields.reduce(
        (missing: string[], key) => { 
            if (!objKeys.includes(key)) { 
            missing.push(key);
            } 
            return missing;
        }, []
    );
    const hasRequiredKeys = missingRequired.length === 0;

    return { hasRequiredKeys, missingRequired }
}