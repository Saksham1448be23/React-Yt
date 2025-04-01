import './App.css'
import {useState} from 'react'

function App() {
  let [c,setc]=useState(0);

  const incr=()=>{
    setc(c+1);
  }
  const dec=()=>{
    setc(c-1);
  }
  return (
    <>
    <div>
    <button onClick={incr}>INCREASE :{c}</button><br></br><br></br>
    <button onClick={dec}>DECREASE :{c}</button>
    </div>
    </>
  )
}

export default App
