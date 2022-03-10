import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

function CountriesList() {

    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
           console.log(response) 
           setCountries(response.data)
        } 
   
       useEffect(()=>{
        getCountries()
       }, [])
    

  return (
        <div>

          <h2>Countries:</h2>

          {countries.map((eachCountry, index)=>{
             return (
                 <div key={index+eachCountry} className="countryCard">
                     <Link to={`/${eachCountry.alpha3Code}`} className="textLink" >
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} className="marginImg" />   
                        <button type="button" class="btn btn-outline-dark">{eachCountry.name.common}</button>
                     </Link>
                 </div>
             )
            })}
        </div>
   )
}

export default CountriesList