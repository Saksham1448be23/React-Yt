import { useState } from 'react'
import './App.css'

function App() {
 const[formd,setform]=useState({name:'',sex:''});
 const[table,settd]=useState([]);

 const handlename=(e)=>{
  setform({...formd,[e.target.name]:e.target.value});
 };

 const submit=(e)=>{
  e.preventDefault();
  if(formd.name && formd.sex){ 
  settd([...table,formd]);
  setform({name:'',sex:''})
  }else{
    alert('FILL');
  }
 };

  return (
   <>
   <form>
    <label htmlFor="name">Name</label><input onChange={handlename} value={formd.name} type="text" name="name" id="name" /><br></br><br></br>
    <label htmlFor="sex">sex</label><input onChange={handlename} value={formd.sex} type="text" name="sex" id="sex" /><br></br><br></br>
    <button onClick={submit}>Submit</button>
   </form>

   <table border={1}>
    <thead>
      <tr>
        <th>Sr.</th>
        <th>Name</th>
        <th>SEX</th>
      </tr>
    </thead>

    <tbody>
    {table.map((v,index)=>(
      <tr key={index}>
        <td>{index+1}</td>
        <td>{v.name}</td>
        <td>{v.sex}</td>
      </tr>
    ))}
    </tbody>
   </table>
   </>
  )
}

export default App
