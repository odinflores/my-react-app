import './Todo.css';

function Todo() {
  return (
    <article className="todo">
      <label className="todo-left">
        <input type="checkbox" />
        <span>Example ToDo</span>
      </label>

      <button type="button">Delete</button>
    </article>
  );
}

export default Todo;