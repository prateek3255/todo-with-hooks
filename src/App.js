import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Do pushups", status: true },
    { name: "Do situps", status: false }
  ]);
  return (
    <div className="container">
      <p>
        <label>Add Item</label>
        <input id="new-task" type="text" />
        <button>Add</button>
      </p>

      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {todos
          .filter(todo => !todo.status)
          .map((todo,i) => (
            <li key={i}>
              <input type="checkbox" />
              <label>{todo.name}</label>
              <button className="delete">Delete</button>
            </li>
          ))}
      </ul>

      <h3>Completed</h3>
      <ul id="completed-tasks">
      {todos
          .filter(todo => todo.status)
          .map((todo,i) => (
            <li key={i}>
              <input type="checkbox"  checked/>
              <label>{todo.name}</label>
              <button className="delete">Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
