import { useEffect, useState } from "react";
import TodoCreator from "./components/TodoCreator";
import { TodoList } from "./components/TodoList";

import { getAllTodos } from "./services/todo.service";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { error, message, todos } = await getAllTodos();

      if (error) {
        alert(message);
      } else {
        setTodos(todos);
      }
    };

    getData();
  }, []);

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (idTodo) => {
    const filtered = todos.filter((todo) => todo._id !== idTodo);

    setTodos(filtered);
  };

  const handleChangeDone = (idTodo, done) => {
    const updatedTodos = [...todos].map((todo) => {
      return todo._id === idTodo ? { ...todo, done } : todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Esto es una lista de cosas v4</h1>
      <h2>esto es un subtítulo</h2>
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleChangeDone={handleChangeDone}
      />
      <TodoCreator handleAdd={handleAdd} />
    </>
  );
}

export default App;
