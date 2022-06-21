// بسم الله الرحمن الرحيم
import { useState ,useEffect} from "react"
import axios from "axios"
import WeatherDetails from "./WeatherDetails"
const CountryData=({country})=>{
  const [weather,setWeather]=useState([])
  
  const fetchWeather=()=>{
    
    const cCapital =country.capital?country.capital.toLowerCase():""
    const weatherData=axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cCapital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    //const weatherData=axios.get(`http://api.openweathermap.org/data/2.5/weather?q=&apiid=`)
    weatherData.then(res=>{
      setWeather(res.data)
      if(res.status===200) setWeather(res.data)
    }).catch(()=>{
      setWeather([])})
  }
  useEffect(fetchWeather,[country.capital])
  
    return (
        <>
        <h4>{country.name}</h4>
        <h5>Capital :</h5>
        <p>{country.capital}</p>
        <h5>Languages :</h5>
        <ul>
        {country.languages.map((language,i)=>{
            return <li key={i}>{language.name}</li>
        })}
        </ul>
        <h5>Flag :</h5>
        <img src={country.flag} alt={country.name} width="200"/>
        <h5>Weather :</h5>
        <WeatherDetails data={weather} />
        </>
        

    )
    }
    export default CountryData