import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import schema from './validation/schema'
import { Route, Link } from 'react-router-dom';
import PizzaForm from './PizzaForm';
import './App.css'

const App = () => {


  const [errors, setErrors] = useState({size: '', specialinstructions: '', sauce: '', toppings: ''});


  const handleChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setErrors({
        ...errors, [name]: "",
      })
    })
    .catch(err => {
      console.log(err.errors);
      console.log(`The following errors were found in ${name}: ${err.errors}`)
      setErrors({...errors, [name]: err.errors[0]})
    })
  }

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


    <Route path='/pizza' render={() => <PizzaForm errors={errors} change={handleChange}/> } />
      
    </>
  );
};
export default App;
