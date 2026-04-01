import './Todo.css';

function Todo({ todo, onToggle, onDelete }) {
  const handleCheckboxChange = async (event) => {
    await onToggle(todo.id, { completed: event.target.checked });
  };

  const handleDeleteClick = async () => {
    await onDelete(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        aria-label={`Mark ${todo.text} complete`}
      />
      <p className="todo-text">{todo.text}</p>
      <button
        type="button"
        className="delete-button"
        onClick={handleDeleteClick}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;