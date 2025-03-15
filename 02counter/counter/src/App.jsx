import './App.css'
import { useState } from 'react';
/*-----COUNTER------*/
function App() {
let [counter,setCounter]=useState(0)

 const addValue=()=>{
  setCounter(counter+1)
 }
 const removeValue=()=>{
  setCounter(counter-1)
}

  return (
    <>
    <h1>ME Myself and I</h1><br></br>
    <h1>Counter value:{counter}</h1>

    <button onClick={addValue}>Add Value</button><br></br><br></br>
    <button onClick={removeValue}>Remove Value</button>
    </>
  ) 
}

export default App

