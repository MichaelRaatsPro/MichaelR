import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import {useState} from 'react';

function App() {
  return (
    <div className="TodoWrapper">
      <header className="App-header">
        <h1 id = "mainTitle">Task Manager</h1>

        <TodoWrapper/>
      </header>
    </div>
  );
}


export default App;
