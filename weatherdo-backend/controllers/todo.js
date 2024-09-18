let todos = [];

import { successHandler, errorHandler } from "../utils/res.js";

export const getTodos = (req, res) => {
  try {
    return successHandler(req, res, todos);
  } catch (error) {
    return errorHandler(req, res, "Failed to retrieve todos", 500);
  }
};

export const addTodo = (req, res) => {
  try {
    const { text, weatherTag, priority } = req.body;

    if (!text || !weatherTag) {
      return errorHandler(req, res, "Text is required", 400);
    }

    const newTodo = {
      text,
      id: Date.now(),
      completed: false,
      weatherTag: weatherTag || null,
      priority: priority || "Low",
    };

    todos.push(newTodo);
    return successHandler(req, res, newTodo, 201);
  } catch (error) {
    return errorHandler(req, res, "Failed to add todo", 500);
  }
};

export const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { text, weatherTag, completed, priority } = req.body;
    console.log(req.body);

    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));
    console.log(todoIndex);

    if (todoIndex === -1) {
      return errorHandler(req, res, "Todo not found", 404);
    }

    const updatedTodo = {
      ...todos[todoIndex],
      text: text !== undefined ? text : todos[todoIndex].text,
      weatherTag:
        weatherTag !== undefined ? weatherTag : todos[todoIndex].weatherTag,
      completed:
        completed !== undefined ? completed : todos[todoIndex].completed,
      priority: priority !== undefined ? priority : todos[todoIndex].priority,
    };

    todos[todoIndex] = updatedTodo;

    return successHandler(req, res, updatedTodo);
  } catch (error) {
    return errorHandler(req, res, "Failed to update todo", 500);
  }
};

export const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

    if (todoIndex === -1) {
      return errorHandler(req, res, "Todo not found", 404);
    }

    todos.splice(todoIndex, 1);

    return successHandler(
      req,
      res,
      { message: "Todo deleted successfully" },
      200
    );
  } catch (error) {
    return errorHandler(req, res, "Failed to delete todo", 500);
  }
};
