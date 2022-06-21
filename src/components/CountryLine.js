// بسم الله الرحمن الرحيم
import CountryData from "./CountryData"
import { useState } from "react"
const CountryLine=({country})=>{
    const [show,setShow]=useState(false)
    const handleClick=()=>{
     setShow(!show)
    }
    if (show)return (<><CountryData country={country}/></>)
        
    else 
    return (<div>{country.name}
    <button onClick={handleClick}>Show</button>
    </div>)
    }
    export default CountryLine