// بسم الله الرحمن الرحيم
import { useState,useEffect } from "react"
import axios from "axios"
import CountryLine from "./components/CountriesList"
const App =()=>{
  const [filter,setFilter]=useState("")
  const [countries,setCountries]=useState([])
  const fetchCountries=()=>{
    const countriesData=filter.length>0?axios.get(`https://restcountries.com/v2/name/${filter}`):axios.get("https://restcountries.com/v2/all")
    countriesData.then(res=>{
      if(res.status===200) setCountries(res.data)
    }).catch(()=>{
      setCountries([])})
  }
  useEffect(fetchCountries,[filter])
return (
  <>
  <input value={filter} onChange={e=>setFilter(e.target.value)} placeholder='Filter the countries'/>
  
<CountryLine countries={countries}/>
<footer><a href="https://github.com/naderkamelaponar/fs-countries">Repo</a> </footer>
  </>
)
}
export default App