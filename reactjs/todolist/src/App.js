import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState("white");
  let todos = ["Salat", "Nawm", "Akl", "R9ad"];

  function changeBgColor() {
    if (bgColor === "white") {
      setBgColor("black");
    } else if (bgColor === "black") {
      setBgColor("white");
    }
  }
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div
      className="App"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="main-container">
        <div>
          <input type="text" />
          <button onClick={increment}>add</button>
        </div>
        <main>
          <h1>Todo List</h1>
          <button onClick={changeBgColor}>Dark Mode</button>
          <div>Counter : {counter}</div>
          <div className="todos">
            {todos.map(function (oneTodo) {
              return <TodoItem title={oneTodo} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
