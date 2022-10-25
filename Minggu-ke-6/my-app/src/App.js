import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Home from './component/Home.js';
import React from 'react';

function App() {

  const [name, setName] = useState("dila");
  
  return (
    <div className="App">
      <Home name={name} />

    </div>
  );
}

export default App;
