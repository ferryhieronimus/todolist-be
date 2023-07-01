import { todoRepository } from "../repository";

const getTodos = async (todoId: string) => {
  const todos = await todoRepository.getTodos(todoId);
  return todos;
};

const createTodo = async (data: CreateTodoParams) => {
  const createdTodo = await todoRepository.createTodo(data);
  return createdTodo;
};

const updateTodoById = async (todoId: string) => {
  const createdTodo = await todoRepository.updateTodoById(todoId);
  return createdTodo;
};

const services = {
  getTodos,
  createTodo,
  updateTodoById
};

export default services;
