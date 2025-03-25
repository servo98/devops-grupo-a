import { Router } from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.route("/").get(getAllTodos).post(createTodo);

todoRouter
  .route("/:idTodo")
  .get(getTodoById)
  .put(updateTodoById)
  .delete(deleteTodoById);

export default todoRouter;
