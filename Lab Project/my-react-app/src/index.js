import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('sandy')).render(<p>Hello</p>);

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
//   )
// }

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value = {myCar} oncange = {handleChange}>
        <option value = "Ford">Ford</option>
        <option value = "Audi">Volvo</option>
        <option value = "Mercedes">Fiat</option>  
      </select>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);






const myElement = (
  <>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </>
);



//ReactDOM.createRoot(document.getElementById('root')).render(myElement);
//root.render(myFirstElement); //renders html page

//If we have to write HTML on multiple lines, we can put the HTML in parentheses: