import { Router, Request, Response } from "express";
import { findAllGuests, saveGuests, updateGuest } from "../../controllers/guest";
import { verifyAuth } from "../../middlewares/auth";
import { validateGuest, validateGuests } from "../../middlewares/validation";

const router = Router();

router.get("/:fianceId", verifyAuth, async (req: Request, res: Response): Promise<void> => {
    const {fianceId} = req.params
    const response = await findAllGuests(fianceId)
    res.status(200).send(response);
});

router.post("/:fianceId", verifyAuth, validateGuests, async (req: Request, res: Response): Promise<void> => {
    const { data } = req.body
    const { fianceId } = req.params

    const response = await saveGuests(fianceId, data)
    res.status(200).send(response);
});

router.put("/:guestId", verifyAuth, validateGuest, async (req: Request, res: Response): Promise<void> => {
    try {
        const { data } = req.body
        const { guestId } = req.params
    
        const response = await updateGuest(guestId, data)
        res.status(200).send(response);
        
    } catch (error) {
        res.status(400).send(error);        
    }
});

export { router as guestRouter }