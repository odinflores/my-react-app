import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

function App() {
  return (
    <>
      <header className="site-header">
        <h1>ToDo App</h1>
        <h2>Odin Flores - ToDo App</h2>
        <p className="subtitle">Track tasks with your React ToDo app.</p>
      </header>

      <main className="app-shell">
        <NewTodo />
        <section id="todos" aria-label="Todo list">
          <Todo />
        </section>
      </main>
    </>
  );
}

export default App;