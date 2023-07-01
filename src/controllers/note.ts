import { RequestHandler } from "express";
import { noteService } from "../services";

const createNote: RequestHandler = async (req, res) => {
  const data: CreateTodoParams = req.body;

  const todo = await noteService.createNote(data);

  res.status(201).send({
    status: "success",
    message: "Todo created successfully",
    data: {
      todo,
    },
  });
};

const getNotes: RequestHandler = async (req, res) => {

  const todo = await noteService.getNote();

  res.status(201).send({
    status: "success",
    message: "Todo created successfully",
    data: {
      todo,
    },
  });
};

const controllers = {
  createNote,
  getNotes
};

export default controllers;
