import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './oop-task.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Task />
      <Task content="Complete stretch exercises"/>
      <Task content="Perform actual stretch exercises" />
      <p class="App-paragraph">Welcome to my cool new app</p>
    </div>
  );
}

export default App;
