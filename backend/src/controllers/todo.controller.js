import Todo from "../models/Todo.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.json({
      todos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener los todos",
      error,
    });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.title,
    });
    res.json({
      todo: newTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear el todo",
      error,
    });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.idTodo);

    if (!todo) {
      return res.status(404).json({
        message: "Todo no encontrado",
      });
    } else {
      res.json({
        todo,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener el todo",
      error,
    });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const updateTodoById = async (req, res) => {
  try {
    const { idTodo } = req.params;
    const todoUpdated = await Todo.findByIdAndUpdate(
      idTodo,
      {
        done: req.body.done,
        title: req.body.title,
      },
      { new: true }
    );

    res.json({
      todo: todoUpdated,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al actualizar el todo",
      error,
    });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const deleteTodoById = async (req, res) => {
  try {
    const { idTodo } = req.params;
    await Todo.findByIdAndDelete(idTodo, {
      done: req.body.done,
      title: req.body.title,
    });

    res.json({
      message: "Ok",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al borrar el todo",
      error,
    });
  }
};

export { getAllTodos, createTodo, getTodoById, updateTodoById, deleteTodoById };
