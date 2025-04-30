import React,{useEffect, useState} from 'react'
function App(){
    const[list,setList]=useState([])
    const[selected,setselected]=useState(null)
    const[show,setshow]=useState(false)
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setList(data)            
        })
    },[])
    let stylee={
        height:200,
        width:250,
        padding:15
    }
    function handler(card){
        setselected(card)
        setshow(true)
    }
    function closemodel(){
        setselected(null)
        setshow(false)
    }
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        {
            list.map((card,index)=>(
                <div style={stylee}>
                    <img src={card.image} height="120" width="150"></img>
                    <p>Title: {card.title}</p>
                    <p>Price: {card.price}</p>
                    <p>Category: {card.category}</p>
                    {show && selected && selected===card && (
                    <>
                    <p>Description:{selected.description}  rating: {selected.rating.count}</p>
                    <button onClick={closemodel}>close</button>
                    </>
                    )}
                    <button onClick={()=>handler(card)}>View Details</button>

                </div>
            ))
        }
        
        </div>
    )
}
export default App