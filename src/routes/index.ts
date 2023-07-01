import express, { Router } from "express";
import todoRouter from "./todo";

const router: Router = express.Router();

router.use("/todo", todoRouter);

export default router;
