import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Todos from './Todos';

//ReactDOM.createRoot(document.getElementById('sandy')).render(<p>Hello</p>);

// export default function Navigation(){
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>} />
//           <Route path="blogs" element = {<Blogs />} />
//           <Route path="contact" element= {<Contact/>} />
//           <Route path="*" element ={<NoPage/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  return (
    <>
      <h1 style = {myStyle}>JS Object Styling!</h1>
      <p>Style Attribute</p>
    </>
  );
}

const sandy = ReactDOM.createRoot(document.getElementById('sandy'));
sandy.render(<Header/>)

// function MissedGoal(){
//   return <h1>WHIFFED IT!</h1>;
// }

// function MadeGoal(){
//   return <h1>GOAL!</h1>
// }

// function Goal(props){
//   const isGoal = props.isGoal;
//   return (
//     <>
//       {isGoal? <MadeGoal/> : <MissedGoal/> }
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>);


// class Car extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang ",
//       color: "blue ",
//       year: 2010
//     };                                                                                                                                                                                                                                                                                                                                                                                                                      
//   }
//   changeColor = () => {
//     this.setState({color: "red "});
//   }

//   render(){
//     return (
//     <div> 
//       <h1>Car Company: {this.state.brand}</h1>
//       <p>
//         It is a {this.state.color} 
//          {this.state.model}
//         from {this.state.year}
//       </p>
//       <button 
//       type = "button"
//       onClick= {this.changeColor}>Change colour</button>
//     </div>
//     );
//   }
// }

function Car(props){
  return <li>Car Brand: {props.brand}!</li>
}

function Garage(props){
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3,brand: 'Audi'}
  ];
    return (
    <>
      <h1>What's in my garage?</h1>
      <ul>
        {cars.map((car)=> <Car key = {car.id} brand= {car.brand} />)}
      </ul>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

function MyForm(){
  const [inputs,setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit= {handleSubmit}>
      <label>Enter your name:
        <input type = "text"
        name = "username"
        value = {inputs.username || ""}
        onChange = {handleChange}
        />
      </label>
      <label>Enter your age:
        <input type= "number"
        name = "age"
        value = {inputs.age || ""}
        onChange= {handleChange}
        />
      </label>
      <input type = "submit"/>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>);



// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1","todo 2"]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   }; 

//   return (
//     <>
//       <Todos todos = {todos} />
//       <hr/>
//       <div>
//         <p>Count: {count}</p>
//         <button onClick= {increment}>Increment</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

// function Click(){
//   const mouse = (a,b) => {
//     alert(b.type);
//   }

//   return (
//     <button onClick={(event) => mouse("Nice Click!",event)}>Click Here!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Click/>);

//const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// function MyForm() {                                 //practice
//   const [textarea, setTextarea] = useState(          
//     "Enter text here..."
//   );
  
//   const handleChange = (event) => {                                     //event to setTextArea
//     setTextarea(event.target.value) 
//   }

//   return (                      
//     <form> 
//       <textarea value = {textarea} onChange = {handleChange} />        
//     </form>                                                         //change value in the textarea
// //   )
// // }

// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//   }

//   return (
//     <form>
//       <select value = {myCar} oncange = {handleChange}>
//         <option value = "Ford">Ford</option>
//         <option value = "Audi">Volvo</option>
//         <option value = "Mercedes">Fiat</option>  
//       </select>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// const myElement = (
//   <>
//     <p>Paragraph 1</p>
//     <p>Paragraph 2</p>
//   </>
// );



// //ReactDOM.createRoot(document.getElementById('root')).render(myElement);
//root.render(myFirstElement); //renders html page

//If we have to write HTML on multiple lines, we can put the HTML in parentheses: