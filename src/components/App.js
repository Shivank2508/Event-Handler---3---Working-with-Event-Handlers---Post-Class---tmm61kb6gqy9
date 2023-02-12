import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) => {
    // use console.log
    console.log(event.target.value)
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={handleInput} />

      <br />
      <br />

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={handleInput} />
      <br />
    </div>
  )
}


export default App;