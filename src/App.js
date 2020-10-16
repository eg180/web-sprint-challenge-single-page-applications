import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <nav>
        <a href="#" class="myButton">
        Home
        </a>
        <a href="#" class="myButton">
        Help
        </a>
      </nav>
    </header>
      
    </>
  );
};
export default App;
