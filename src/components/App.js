import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [name, setName] = useState("o");
  const [number, setNumber] = useState(0)
  const handleInput = (event) => {
    // use console.log
    console.log(event.target.value)


  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} value={name} onChange={handleInput} />

      <br />
      <br />

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={'number'} value={number} onChange={handleInput} />
      <br />
    </div>
  )
}


export default App;
