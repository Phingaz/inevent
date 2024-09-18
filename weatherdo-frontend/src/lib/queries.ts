import axios from "axios";
import { env } from "../env";
import { TTodo } from "../types/todolist";

export const newTodoQr = (newTodo: { text: string; weatherTag: string }) =>
  axios.post(`${env.baseUrl}/todos`, newTodo);

export const toggleTodoQr = (todo: TTodo) =>
  axios.put(`${env.baseUrl}/todos/${todo.id}`, {
    ...todo,
    completed: !todo.completed,
  });

export const updateTodoQr = (todo: TTodo) =>
  axios.put(`${env.baseUrl}/todos/${todo.id}`, todo);

export const deleteTodoQr = (id: number) =>
  axios.delete(`${env.baseUrl}/todos/${id}`);
