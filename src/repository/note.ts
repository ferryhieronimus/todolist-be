import prisma from "../configs/prisma";

const createNote = async (data: CreateNoteParams) => {
  const { content } = data;

  const createdNotes = await prisma.note.create({
    data: {
      content,
    },
  });

  return { createdNotes };
};

const getAllNote = async () => {
  const note = await prisma.note.findMany();
  return note
};

const repository = {
  createNote,
  getAllNote
};

export default repository;
