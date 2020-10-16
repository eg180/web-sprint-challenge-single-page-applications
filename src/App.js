import React from "react";
import { Route, Link } from 'react-router-dom';
import PizzaForm from './PizzaForm';
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


    <Route path='/pizza' component={PizzaForm} />
      
    </>
  );
};
export default App;
