import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <nav>
        <a href="#" className="myButton">
        Home
        </a>
        <a href="#" className="myButton">
        Help
        </a>
      </nav>
    </header>
    <section>
      <div className="hero-section">
      </div>
    </section>
      
    </>
  );
};
export default App;
