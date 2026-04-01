import { useState } from 'react';
import './NewTodo.css';

function NewTodo({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedText = text.trim();

    if (trimmedText === '') {
      return;
    }

    await onAddTodo(trimmedText);
    setText('');
  };

  return (
    <section id="new-todo">
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <label htmlFor="new-todo-text" className="visually-hidden">
          Add a new todo
        </label>
        <input
          id="new-todo-text"
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(event) => setText(event.target.value)}
          maxLength="200"
          required
        />
        <button id="new-todo-submit" type="submit">
          Add ToDo
        </button>
      </form>
    </section>
  );
}

export default NewTodo;