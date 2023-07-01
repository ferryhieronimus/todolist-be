import { todoRepository } from "../repository";

const getTodos = async (todoId: string) => {
  const todos = await todoRepository.getTodos(todoId);
  return todos;
};

const createTodo = async (data: CreateTodoParams) => {
  const createdTodo = await todoRepository.createTodo(data);
  return createdTodo;
};

const services = {
  getTodos,
  createTodo
};

export default services;
