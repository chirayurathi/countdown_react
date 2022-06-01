import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  let [reset, setReset] = useState(false);
  
  const toggleReset = ()=>{
    setReset(!reset);
  }
  
  return (
    <div className="App">
      <Header toggleReset = {toggleReset}/>
      <h1>Countdown ends in...</h1>
      <Counter reset = {reset} toggleReset = {toggleReset}/>
    </div>
  );
}

export default App;
