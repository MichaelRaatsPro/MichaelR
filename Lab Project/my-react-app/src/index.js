import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('sandy')).render(<p>Hello</p>);

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blogs" element = {<Blogs />} />
          <Route path="contact" element= {<Contact/>} />
          <Route path="*" element ={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)










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