import { RequestHandler } from "express";

const helloWorld: RequestHandler = async (req, res) => {

  res.status(200).send({
    status: "success",
    message: "Hello World",
  });
};

const controllers = {
  helloWorld,
};

export default controllers;
