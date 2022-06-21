// بسم الله الرحمن الرحيم
import CountryData from "./CountryData"
import CountryLine from "./CountryLine"
const CountriesList=({countries})=>{
    if (countries.length>10) 
    return (<div >Too many matches, specify another filter</div>)
    if (countries.length<=10 && countries.length >1) {
        return (countries.map((country,i)=>{
        return <CountryLine key={i} country={country}/>
        }))
    }
    if (countries.length===1) 
    return <div><CountryData key={0}country={countries[0]}/></div>
    if(countries.length===0)    return (<div>No matches</div>)

}
export default CountriesList