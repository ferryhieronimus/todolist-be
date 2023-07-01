import { noteRepository } from "../repository";

const createNote = async (data: CreateNoteParams) => {
  const createdTodo = await noteRepository.createNote(data);
  return createdTodo;
};

const getNote = async () => {
    const gotNote = await noteRepository.getAllNote();
    return gotNote;
};

const services = {
  createNote,
  getNote
};

export default services;
