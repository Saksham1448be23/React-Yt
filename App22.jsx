import {useRef,useState,useCallback, useEffect} from 'react'

// function App() {
//  const[length,setLength]=useState(8) 
//  const[numberAllowed,setnumberallowed]=useState(false)
//  const[charAllowed,setcharallowed]=useState(false)
//  const[password,setPassword]=useState("")

//  const passwordRef= useRef(null)

// const passwordGenerator=useCallback(()=>{
//   let pass=""
//   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//   if(numberAllowed) str+="0123456789"
//   if(charAllowed) str+="!@#$%^&"

//   for (let i = 1; i <= length; i++){
//     let char=Math.floor(Math.random()*str.length())
//     pass+=str.charAt(char)

//   }
//   setPassword(pass)

// },[length,charAllowed,numberAllowed,password])


// const copyPasswordToClipboard = useCallback(() => {
//   passwordRef.current?.select();
//   passwordRef.current?.setSelectionRange(0, 999);
//   window.navigator.clipboard.writeText(password)
// }, [password])


//   useEffect(()=>{
//     passwordGenerator()
//   },[length,charAllowed,numberAllowed,passwordGenerator])
//   return (
//     <div className='w-screen h-screen flex items-center justify-center bg-black'>
//       <div className='text-orange-500 text-3xl font-bold'>
//         test
//       </div>
//     </div>
//   )
  
// }

// function Weather(){
//   const [city, setcity]=useState('');
//   const [weather,setweather]=useState(null);

//   const handleSearch=()=>{
//     const apiKey = 'fe04d52ac96a40b9978155703250104';
//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

//     fetch(url).then((res)=>res.json())
//     .then((data)=>{
//       setweather(data);
//     })
//     .catch((error)=>{
//       console.log("failed",error);
  
//     });
//   }

//   return(
//     <>
//         <div>Weather</div>
//         <input type="text" value={city} onChange={(e)=> setcity(e.target.value)} />
//         <button onClick={handleSearch}>CLICK HERE !!</button>

//         {weather && weather.current &&(
//           <div>
//             <h2>{weather.location.name},{weather.location.country}</h2>
//             <p>{weather.current.temp_c} celsius</p>
//             <p>{weather.current.condition.text}</p>
//           </div>
//         )}
//     </>
//   )
// }

export default Weather
