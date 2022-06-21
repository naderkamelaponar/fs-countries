// بسم الله الرحمن الرحيم
const WeatherDetails =({data})=>{
    const imgPath=data.weather?`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`:''
    const imgAlt=data.weather?data.weather.description:''
    const tempreture =data.main? data.main.temp :``
    const wind=data.wind?data.wind.speed:''
    
return (
    <>
    <p>tempreture {tempreture} Celcius</p>
    <img src={imgPath} alt={imgAlt}/>
    <p>wind {wind} m/s</p>
    </>
)
}
export default WeatherDetails