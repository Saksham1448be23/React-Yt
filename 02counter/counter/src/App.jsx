import './App.css'
import { useState } from 'react';
/*-----COUNTER------*/
function App() {
let [counter,setCounter]=useState(0)

 const addValue=()=>{
  setCounter(counter+1)
  // Agr mujhe sath mein kai krne ho to main prevcounter krke uski prev state ko ek variable main store krwa lunga
  setCounter(prev=>{prev+1}) // is kya hoga ki add +2 hoga ek ppehle wala aur ek prev state ko lekr usko add krega
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

