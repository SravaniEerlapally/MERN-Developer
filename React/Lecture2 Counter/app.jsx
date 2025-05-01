import { useState } from 'react'
import './App.css'

function App() {

  //   [variable, function]
  const [counter,setCounter] = useState(15)
  //let counter =15

  const addValue =  () =>{
    setCounter(counter+1)
    
    //setCounter((prevCounter) => prevCounter+1)
    //setCounter((prevCounter) => prevCounter+1)
    //setCounter((prevCounter) => prevCounter+1)
    //setCounter((prevCounter) => prevCounter+1)
     
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React Course with Hitesh {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
//Notes
// - State - changes all values reference to it.
//   It takes 2 i.e variables and functions
//   const [variable,function] = useState(initial variable/function/mostly variable or value/array/object)
//   useState are known as hooks
//   EvereyTime you update the value a new state is given
