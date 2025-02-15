import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState("white");
  // let todos = ["Salat", "Nawm", "Akl", "R9ad"];
  const [todos, setTodos] = useState(["Salat", "Nawm", "Akl", "R9ad"]);

  function changeBgColor() {
    if (bgColor === "white") {
      setBgColor("black");
    } else if (bgColor === "black") {
      setBgColor("white");
    }
  }
  function addTodo() {
    // permet d'ajouter un element a la fin de la liste (Array) todos
    setTodos([...todos, "9raya"]);
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
          <button onClick={addTodo}>add</button>
        </div>
        <main>
          <h1>Todo List</h1>
          <button
            onClick={function () {
              let newListWithoutNawm = todos.filter(function (oneTodo) {
                return oneTodo !== "Nawm";
              });

              setTodos(newListWithoutNawm);
            }}
          >
            Remove Nawm
          </button>
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
