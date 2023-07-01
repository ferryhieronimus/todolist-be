import prisma from "../configs/prisma";

const createTodo = async (data: CreateTodoParams) => {
  const { title, content, category } = data;

  const createdTodo = await prisma.todo.create({
    data: {
      title,
      content,
      category,
    },
  });

  return { createdTodo };
};

const getTodos = async (todoId: string) => {
  if (todoId) {
    await prisma.todo.findUniqueOrThrow({
      where: { id: todoId },
    });
  }

  const todos = await prisma.todo.findMany({
    where: todoId ? { id: todoId } : {},
  });

  return todos;
};

const repository = {
  getTodos,
  createTodo,
};

export default repository;
