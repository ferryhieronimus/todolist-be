import express, { Router } from "express";
import todoRouter from "./todo";
import noteRouter from "./note";

const router: Router = express.Router();

router.use("/todo", todoRouter);
router.use("/note", noteRouter);

export default router;
