import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {ProductCard, HomePage} from "./components";

function App() {
  return (
      <Router>
          <div className="App">
              <HomePage/>
          </div>
      </Router>
  );
}

export default App;
