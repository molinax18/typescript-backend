import type { Request, Response } from "express";
import { TodoListModel } from "../models/todo-list.js";

export class TodoListController {
  static async getAll(_req: Request, res: Response) {
    try {
      const todos = await TodoListModel.getAll();
      res.status(200).json(todos);
    } catch {
      res.status(500).json({ message: "¡Algo salió mal! No es tu culpa =)" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { title, description } = req.body;

      const data = await TodoListModel.create({ title, description });
      res.status(201).json(data);
    } catch {
      res.status(400).json({ message: "Completa los campos correctamente" });
    }
  }

  static async updateById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { done } = req.body;
      const data = await TodoListModel.updateById(id as string, { done });

      if (!data) {
        return res
          .status(400)
          .json({ message: "Completa los campos correctamente" });
      }

      return res.status(200).json(data);
    } catch {
      return res
        .status(400)
        .json({ message: "Completa los campos correctamente" });
    }
  }

  static async deleteById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await TodoListModel.deleteById(id as string);

      if (!data) {
        return res
          .status(400)
          .json({ message: "Completa los campos correctamente" });
      }

      return res.status(200).json(data);
    } catch {
      return res
        .status(400)
        .json({ message: "Completa los campos correctamente" });
    }
  }
}
