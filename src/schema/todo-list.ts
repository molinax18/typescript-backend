import { model, Schema, type Document } from "mongoose";

export type TTodoList = {
  title: string;
  description: string;
  done?: boolean;
};

interface ITodoList extends TTodoList, Document {}

const todoListSchema = new Schema<ITodoList>({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export const TodoList = model<ITodoList>("todo-list", todoListSchema);
