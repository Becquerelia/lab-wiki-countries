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

    <div>

      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}/>  
      <h3>{countryDetails.name.common}</h3>
      <p>Capital:{countryDetails.capital}</p>
      <p>Area:{countryDetails.area}</p>
      <p>Borders:</p>
          {countryBorders.map((eachBorder, index)=>{
            return <Link to={`/${eachBorder}`}>{index + "." + eachBorder + " "}</Link>
          })}


    </div>

  )
}

export default CountryDetails