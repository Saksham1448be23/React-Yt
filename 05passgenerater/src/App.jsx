import { useState } from "react";

function Weather(){

    const [city,setCity]=useState('');
    const [temp,setTemp]=useState(null);

    const handleCity=()=>{
        const api='fe04d52ac96a40b9978155703250104';
        const url = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=no`;

        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setTemp(data))
        .catch((error)=>{
            console.log("GOT ERROR: ",error);
        });

    }

    return(
        <>
        <div>Weather here</div>
        <input type="text" value={city} onChange={(s)=>setCity(s.target.value)} />
        <button onClick={handleCity}>GET WEATHER</button>

        { temp && temp.current &&(
            <div>
                <h1>{temp.location.name}</h1>
                <h1>{temp.current.temp_c} Celsius</h1>
                <h1>{temp.current.condition.text}</h1>

            </div>

        )}

        </>
    )
}

export default Weather