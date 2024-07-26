import { Router } from "express";
import conn from "../config/conn.js";
import { getOnibus } from "../controllers/onibusController.js";



const router = Router();

router.get("/", getOnibus);


export default router;