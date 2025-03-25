import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", done: false },
    { id: 2, title: "Todo 2", done: true },
    { id: 3, title: "Todo 3", done: false },
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.done} />
          {todo.title}
          <button>Eliminar</button>
        </div>
      ))}
    </div>
  );
};
