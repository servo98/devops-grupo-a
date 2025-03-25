const Todo = ({
  todo,
  handleChangeBox,
  handleDeleteButton,
  showSaveButton,
}) => {
  const handleInputClick = (e) => {
    e.target.readOnly = false;
    showSaveButton();
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;
    // changeValue
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          handleChangeBox(todo._id);
        }}
        checked={todo.done}
      />
      <input
        type="text"
        onClick={handleInputClick}
        onChange={handleChangeInput}
        readOnly={true}
        value={todo.title}
      />
      <button
        onClick={() => {
          handleDeleteButton(todo._id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Todo;
