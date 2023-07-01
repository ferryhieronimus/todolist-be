import express, { Router } from "express";
import { noteController } from "../controllers";

const router: Router = express.Router();

router.post("/", noteController.createNote);
router.get("/getNotes", noteController.getNotes);

export default router;
