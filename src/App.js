import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <p>
        <label>Add Item</label><input id="new-task" type="text"/><button>Add</button>
      </p>
      
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <li><input type="checkbox"/><label>Pay Bills</label><button className="delete">Delete</button></li>
        
      </ul>
      
      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li><input type="checkbox" checked/><label>See the Doctor</label><button class="delete">Delete</button></li>
      </ul>
    </div>
  );
}

export default App;
