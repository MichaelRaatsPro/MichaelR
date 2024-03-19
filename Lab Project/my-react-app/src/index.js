import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('sandy')).render(<p>Hello</p>);

//const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const myElement = (
  <>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </>
);



ReactDOM.createRoot(document.getElementById('root')).render(myElement);
//root.render(myFirstElement); //renders html page

//If we have to write HTML on multiple lines, we can put the HTML in parentheses: