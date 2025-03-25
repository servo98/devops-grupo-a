import { useState } from "react";

import { deleteTodoById, checkTodo } from "../services/todo.service";
import Todo from "./Todo";

export const TodoList = ({ todos, handleDelete, handleChangeDone }) => {
  const [isEditing, setIsEditing] = useState(false);

  const showSaveButton = () => {
    setIsEditing(true);
  };

  const handleTitleChange = () => {
    // save changes
    setIsEditing(false);
  };

  const handleChangeBox = async (todoId) => {
    const currentDone = todos.find((todo) => todo._id === todoId).done;
    const { error, message } = await checkTodo(todoId, !currentDone);

    if (error) {
      alert(message);
    } else {
      handleChangeDone(todoId, !currentDone);
    }
  };

  const handleDeleteButton = async (idTodo) => {
    const { error, message } = await deleteTodoById(idTodo);

    if (error) {
      alert(message);
    } else {
      handleDelete(idTodo);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          handleChangeBox={handleChangeBox}
          handleDeleteButton={handleDeleteButton}
          showSaveButton={showSaveButton}
        />
      ))}
      <button
        style={{ display: isEditing ? "inline" : "none" }}
        onClick={() => setIsEditing(false)}
      >
        Cancelar
      </button>
      <button
        style={{ display: isEditing ? "inline" : "none" }}
        onClick={handleTitleChange}
      >
        Guardar
      </button>
    </div>
  );
};
