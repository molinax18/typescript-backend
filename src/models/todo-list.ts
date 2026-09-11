import { connectDatabase } from "../database.js";
import { TodoList, type TTodoList } from "../schema/todo-list.js";

await connectDatabase();

export class TodoListModel {
  static async getAll() {
    try {
      const todos = await TodoList.find();
      return todos;
    } catch (error) {
      throw new Error("Algo salió mal", { cause: error });
    }
  }

  static async create(todo: TTodoList) {
    try {
      const newTodo = await TodoList.create(todo);
      return newTodo;
    } catch (error) {
      throw new Error("Algo salió mal", { cause: error });
    }
  }

  static async updateById(id: string, updatedTodo: Partial<TTodoList>) {
    try {
      const response = await TodoList.findByIdAndUpdate(id, updatedTodo, {
        new: true,
      });
      return response;
    } catch (error) {
      throw new Error("Algo salió mal", { cause: error });
    }
  }

  static async deleteById(id: string) {
    try {
      const response = await TodoList.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw new Error("Algo salió mal", { cause: error });
    }
  }
}
