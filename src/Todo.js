import React from "react";

const Todo = ({ todo, handleCheckboxChange, deleteTodo }) => (
  <li key={todo.id}>
    <input
      type="checkbox"
      checked={todo.status}
      onChange={() => handleCheckboxChange(todo.id)}
    />
    <label>{todo.name}</label>
    <button className="delete" onClick={() => deleteTodo(todo.id)}>
      Delete
    </button>
  </li>
);

export default Todo;
