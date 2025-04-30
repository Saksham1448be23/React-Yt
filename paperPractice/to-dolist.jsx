import React, { useState } from 'react'
function App(){
 
    const [add,setAdd]=useState("")
    const [arr,setArr]=useState([])
    function handler(){
        
        setArr([...arr,add])
        setAdd("")

    }
return(
    
    <>
    <input type="text" value={add} onChange={(e)=>{setAdd(e.target.value)}}/><button onClick={handler} disabled={!add}> Add</button>
    <ul>
    {
        arr.map((value,index)=>{
            return(
                <li key={index}>{value}
                <button onClick={
                    ()=>{
                        setArr(arr.filter((value , i)=>i!=index))
                    }
                }>Delete</button></li>
            )
        })
    }
    </ul>
    </>
)
}
export default App