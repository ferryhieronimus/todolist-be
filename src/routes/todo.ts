import express, { Router } from "express";
import { todoController } from "../controllers";

const router: Router = express.Router();

router.get("/hello", todoController.helloWorld);
router.get("/:todoId?", todoController.getTodos);
router.post("/", todoController.createTodo);
router.get("/cat/todo", todoController.getTodosByCategoryTODO);
router.get("/cat/progress", todoController.getTodosByCategoryINPROGRESS);


export default router;
