import React from "react";
import { Route, Link } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/' className="myButton">
        Home
        </Link>
        <Link to="/about" className="myButton">
        About
        </Link>
      </nav>
    </header>
    <section>
      <div className="hero-section">
      <p id="hero-text">Your favorite food, delivered while coding...</p>

      <Link to ='pizza'>
        <p className="pizza-button">Pizza?</p>
      </Link>
      
      </div>
    </section>
      
    </>
  );
};
export default App;
