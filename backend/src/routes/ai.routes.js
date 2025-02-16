import Router from 'express';
import { gestResult } from '../controllers/ai.controller.js';

const router = Router();

router
    .get("/", (req, res) => { 
        res.status(200).send("Hello from AI");
    })
    .get("/get-prompt", gestResult)
    .post("/get-review", gestResult);
    



export default router;
