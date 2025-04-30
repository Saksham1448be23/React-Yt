import React, { useEffect , useState} from 'react'
function App(){
    const [card , setCard ] = useState([])


    
    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(data => setCard(data.data))
    })
    return(
        <>
        <div><ul>
            {card.map((value)=>{
                return(<li>{value.first_name}<img src={value.avatar}></img></li>)
            })}
            </ul>
        </div>
        </>
    )
}
export default App;