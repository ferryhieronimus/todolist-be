import express, { Router } from "express";
import { todoController } from "../controllers";

const router: Router = express.Router();

router.get("/", todoController.helloWorld);

export default router;
