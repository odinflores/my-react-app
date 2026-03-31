import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

const API = 'https://cse2004.us';
const KEY = 'e4d8fd-d75e94-742a89-a4791f-77e151';

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const showMessage = (text) => {
    setMessage(text);
  };

  const getTodos = async () => {
    try {
      showMessage('Loading todos...');

      const response = await fetch(`${API}/todos`, {
        headers: {
          'x-api-key': KEY
        }
      });

      if (!response.ok) {
        throw new Error('Failed to load todos');
      }

      const data = await response.json();
      setTodos(data);
      showMessage('Todos loaded.');
    } catch (error) {
      console.error(error);
      showMessage('Could not load todos.');
    }
  };

  const addTodo = async (text) => {
    try {
      showMessage('Adding todo...');

      const response = await fetch(`${API}/todos`, {
        method: 'POST',
        headers: {
          'x-api-key': KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      await getTodos();
      showMessage('Todo added.');
    } catch (error) {
      console.error(error);
      showMessage('Could not add todo.');
    }
  };

  const updateTodo = async (id, updatedFields) => {
    try {
      const response = await fetch(`${API}/todos/${id}`, {
        method: 'PUT',
        headers: {
          'x-api-key': KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedFields)
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      await getTodos();
      showMessage('Todo updated.');
    } catch (error) {
      console.error(error);
      showMessage('Could not update todo.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API}/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': KEY
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      await getTodos();
      showMessage('Todo deleted.');
    } catch (error) {
      console.error(error);
      showMessage('Could not delete todo.');
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <header className="site-header">
        <h1>ToDo App</h1>
        <h2>Odin Flores - ToDo App</h2>
        <p>Track tasks, mark them complete, and keep them saved.</p>
      </header>

      <main>
        <section className="todo-app" aria-labelledby="todo-heading">
          <h2 id="todo-heading">My ToDos</h2>

          <NewTodo onAddTodo={addTodo} />

          <p id="message" aria-live="polite">{message}</p>

          <section id="todos">
            {todos.length === 0 ? (
              <p className="empty-message">No todos yet. Add one above.</p>
            ) : (
              todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onToggle={updateTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </section>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built with React and the ToDo API.</p>
      </footer>
    </>
  );
}

export default App;