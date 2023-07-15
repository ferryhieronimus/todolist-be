import express, { Router } from "express";
import todoRouter from "./todo";
import noteRouter from "./note";
import authRouter from "./auth";

const router: Router = express.Router();

router.use("/todo", todoRouter);
router.use("/note", noteRouter);
router.use("/auth", authRouter);

export default router;
