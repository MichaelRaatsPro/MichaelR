import React from "react";
//import './App.css';
import FC from "./Components/FunctionalComp";
import { ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";

function App() {
  return (
    <div>
      <h1>Hello! Welcome to Simplilearn</h1>
      <h1>This is a video about components</h1>
      <FC />
      { /* <ClassComp /> */}
      <ClassComp1/>
      <Click />
      <Counter />
      <ParentComp/>
    </div>
  );
}

export default App;
