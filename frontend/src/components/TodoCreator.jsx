import { useState } from "react";
import { createTodo } from "../services/todo.service";

const TodoCreator = ({ handleAdd }) => {
  const [title, setTitle] = useState("");
  const mensaje = "Hola Mundo";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, message, todo } = await createTodo(title);

    if (error) {
      alert(message);
    } else {
      setTitle("");
      handleAdd(todo);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default TodoCreator;
