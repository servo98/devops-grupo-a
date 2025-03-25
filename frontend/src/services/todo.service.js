import api from "./api";

const getAllTodos = async () => {
  try {
    const { data } = await api.get("/todos");
    return {
      error: null,
      message: "Todos obtenidos correctamente",
      ...data,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error al obtener los todos",
      error,
    };
  }
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
const checkTodo = async (todoId, done) => {
  try {
    const { data } = await api.put(`/todos/${todoId}`, {
      done,
    });
    return {
      error: null,
      message: "Todo actualizado correctamente",
      ...data,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error al actualizar el todo",
      error,
    };
  }
};

const deleteTodoById = async (idTodo) => {
  try {
    await api.delete(`/todos/${idTodo}`);
    return {
      error: null,
      message: "Todo eliminado correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error al eliminar el todo",
      error,
    };
  }
};

export { getAllTodos, getTodoById, createTodo, checkTodo, deleteTodoById };
