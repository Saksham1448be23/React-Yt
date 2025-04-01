import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({name:'',id:'',branch:''});
  const [tableData,setTableData]=useState([]);  

  const handlechange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value}); //#1 ... destructure krne k liye, wo usse us format se setFormData mein dal dega
  };

  const handleNameChange=(e)=>{ {/* This part of permists only the text not number in the Name input */}
    if(!Number.isNaN(Number(e.nativeEvent.data))) return;
    setFormData({...formData,[e.target.name]:e.target.value});

  };

  const Submit=()=>{
    if(formData.name && formData.id && formData.branch){
      setTableData([...tableData,formData]); 
      setFormData({ name:'',id:'',branch:''});
    }else{
      alert('BHAI DHANG SE BHAR');
    }
  };


  return (
    <>
     
      <h1>FORM</h1>
      <div className="form">  {/*  why is typeof and name used */}
        <label htmlFor="name">Name </label><input id="name" name="name" typeof="text" value={formData.name} onChange={handleNameChange}></input><br></br>
        <label htmlFor="id">Uni ID </label><input name="id" id="id" type="number" value={formData.id} onChange={handlechange}></input><br></br>
        <label htmlFor="branch">Branch</label><input name="branch" id="branch" type="text" value={formData.branch} onChange={handlechange}></input><br></br>
      </div>
      <br></br>
      <button onClick={Submit}>SUBMIT</button>
      <br></br><br></br>
      
      <div id="table">
        <table border={1}>
          <thead>
          <tr><th>Sr. No</th>
          <th>NAME</th>
          <th>University ID</th>
          <th>Branch</th></tr>
          </thead>
          <tbody>
            {tableData.map((v,index)=>(
              <tr key={index}> {/*<- this part*/}
                <td>{index+1}</td>
                <td>{v.name}</td>
                <td>{v.id}</td>
                <td>{v.branch}</td>
              </tr>
            ))}
          </tbody>       
        </table>
      </div>
    </>
  )
}

export default App;
