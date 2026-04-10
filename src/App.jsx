import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

function App() {
  return (
    <>
      <header className="site-header">
        <h1>ToDo App</h1>
        <h2>Odin Flores - ToDo App</h2>
      </header>

      <main>
        <NewTodo />

        <section id="todos">
          <Todo />
        </section>
      </main>
    </>
  );
}

export default App;