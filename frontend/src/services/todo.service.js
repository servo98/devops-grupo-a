import api from "./api";

const getAllTodos = async () => {
  // try {
  // } catch (error) {
  //     console.error(error);
  //     return {
  //         message: "Error al obtener los todos",
  //         error,
  //     };
  // }
};
const getTodoById = async () => {};
const createTodo = async (title) => {
  try {
    const { data } = await api.post("/todos", {
      title,
    });

    return {
      error: null,
      message: "Todo creado correctamente",
      ...data,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error al crear el todo",
      error,
    };
  }
};
const updateTodoById = async () => {};
const deleteTodoById = async () => {};

export { getAllTodos, getTodoById, createTodo, updateTodoById, deleteTodoById };
