import './NewTodo.css';

function NewTodo() {
  return (
    <section id="new-todo">
      <form id="new-todo-form">
        <input
          id="new-todo-text"
          type="text"
          placeholder="What needs to be done?"
        />
        <button id="new-todo-submit" type="submit">
          Add ToDo
        </button>
      </form>
    </section>
  );
}

export default NewTodo;