import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id = "mainTitle">Task Manager</h1>
        <AddTaskForm/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function AddTaskForm(){

  const [input,setInput] = useState({});
  
  return (
  <form>
        <label>
          <input type = "textfield"
           name = "txfTask"
           />
        </label>
        <input type = "submit" value = "Add Task"/>
  </form>
  );

}


export default App;
