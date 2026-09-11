import express, { json } from "express";
import { todoListRouter } from "./routes/todo-list.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use("/todo-list", todoListRouter);
app.listen(PORT);
