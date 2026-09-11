import { Router } from "express";
import { TodoListController } from "../controllers/todo-list.js";

export const todoListRouter = Router();

todoListRouter.get("/", TodoListController.getAll);
todoListRouter.post("/", TodoListController.create);
todoListRouter.patch("/:id", TodoListController.updateById);
todoListRouter.delete("/:id", TodoListController.deleteById);
