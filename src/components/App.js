import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0)
  const handleInput = (event) => {
    // use console.log
    setName(event.target.value);



  }
  const handleNum = (event) => {
    // use console.log
    setNumber(event.target.value);



  }
  useEffect(() => {
    console.log(`Input in #text-input ${name}`)
  }, [name])
  useEffect(() => {
    console.log(number)
  }, [number])

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} />

      <br />
      <br />

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={'number'} onChange={handleNum} />
      <br />
    </div>
  )
}


export default App;
