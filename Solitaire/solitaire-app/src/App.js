import react from 'react';
import suites from ".\suite.png"
import './App.css';

function App() {
  return (
    <>
    <img src = {suites} alt = "Suites" style = {{float: 'right' ,marginLeft:'20px'}}/>
    <h1>Welcome to solitaire</h1>
    <h2>By Michael Raats</h2>  
    </>
    );
}

export default App;
