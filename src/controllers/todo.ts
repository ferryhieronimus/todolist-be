import { RequestHandler } from "express";
import { todoService } from "../services";

const helloWorld: RequestHandler = async (_req, res) => {
  res.status(200).send({
    status: "success",
    message: "Hello World",
  });
};

const getTodos: RequestHandler = async (req, res) => {
  const { todoId } = req.params;

  const todo = await todoService.getTodos(todoId);

  res.status(200).send({
    status: "success",
    message: "To-dos retrieved successfully",
    data: {
      todos: todo,
    },
  });
};

const getTodosByCategoryTODO: RequestHandler = async (req, res) => {
  const todo = await todoService.getTodoByCategoryTODO();

  res.status(200).send({
    status: "success",
    message: "To-dos retrieved successfully",
    data: {
      todos: todo,
    },
  });
};

const getTodosByCategoryINPROGRESS: RequestHandler = async (req, res) => {
  const todo = await todoService.getTodoByCategoryINPROGRESS();

  res.status(200).send({
    status: "success",
    message: "To-dos retrieved successfully",
    data: {
      todos: todo,
    },
  });
};

const createTodo: RequestHandler = async (req, res) => {
  const data: CreateTodoParams = req.body;

  const todo = await todoService.createTodo(data);

  res.status(201).send({
    status: "success",
    message: "Todo created successfully",
    data: {
      todo,
    },
  });
};

const updateTodo: RequestHandler = async (req, res) => {
  const { articleId } = req.params;

  const updatedNote = await todoService.updateTodoById(
    articleId,
  );

  res.status(200).send({
    status: "success",
    message: "Todo updated successfully",
    data: {
      updatedNote,
    },
  });
};


const controllers = {
  helloWorld,
  getTodos,
  createTodo,
  getTodosByCategoryINPROGRESS,
  getTodosByCategoryTODO,
  updateTodo
};

export default controllers;
