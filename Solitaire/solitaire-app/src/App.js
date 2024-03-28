import suits from "./suits.png";
import react from 'react';
import './App.css';

function App() {
  
  const Card = ({suit,value, faceUp, onClick}) => {
    const cardColor = suit === 'Hearts' || suit === 'Diamonds' ? 'red' : 'black';
  }
  
  return (
    <>
    {/*Header and logo}*/}
    <div className = "container">
      <div>
      <h1 className="h1">Welcome to solitaire</h1>
      <h2>By Michael Raats</h2>  
      </div>
      <img src = {suits} alt = "Suits" style = {{float: 'right' ,marginLeft:'20px' ,height: '100px', width: 'auto' ,border: '2px solid black'}}/>
    </div>
    {/*Header and logo}*/}

    



    </>
    );
}

export default App;
