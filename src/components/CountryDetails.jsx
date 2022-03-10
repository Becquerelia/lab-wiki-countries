import {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from "axios"

function CountryDetails() {

  const {id} = useParams()

  const [countryDetails, setCountryDetails] = useState(null)
  const [countryBorders, setCountryBorders] = useState([])

  const getCountryDetails = async () => {
    const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    //console.log(response)
    setCountryDetails(response.data)
    setCountryBorders(response.data.borders)
  }

  useEffect(()=> {
    getCountryDetails()
  }, [id])

  if (!countryDetails) {
    return <div>Loading!</div>
  }

  return (

    <div className='cardDetails'>

      <h2>Country:</h2>

      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} className="marginImg" />  
      <h3>{countryDetails.name.common.toUpperCase()}</h3>
      <p>Capital: {countryDetails.capital}</p>
      <p>Area: {countryDetails.area}</p>
      <p>Borders:</p>
          {countryBorders.map((eachBorder)=>{
            return <Link to={`/${eachBorder}`} className="countryBorders">{eachBorder}</Link>
          })}


    </div>

  )
}

export default CountryDetails