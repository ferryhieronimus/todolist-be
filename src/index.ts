import "express-async-errors";
import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import middlewares from "./middlewares";
import router from "./routes";
import cors from "cors"

const app: Express = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api/v1", router);

app.use(middlewares.unknownEndpoint);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

start();
