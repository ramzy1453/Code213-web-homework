import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <div className="main-container">
        <div>
          <input type="text" />
          <button onClick={increment}>add</button>
        </div>
        <main>
          <h1>Todo List</h1>
          <button>Dark Mode</button>
          <div>Counter : {counter}</div>
          <div className="todos">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
