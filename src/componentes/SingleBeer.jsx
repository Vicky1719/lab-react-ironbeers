import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from "./Header"
import {useParams} from "react-router-dom"

function SingleBeer() {
  const {beerId} = useParams()

 const [details, setDetails] = useState([])


 useEffect(() => {
  getData()
 }, [])

const getData = async() => {
  try{
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    setDetails(response.data)
  }catch(error) {

  }
}


  return (
    <div>
      <Header/>
      <div>
      <img src={details.image_url} alt="cerveza" width="100px"/>
      <h2>{details.name}</h2>
      <h2>{details.tagline}</h2>
      <h2>{details.first_brewed}</h2>
      <h2>{details.attenuation_level}</h2>
      <p>{details.description}</p>
      <h2>{details.contributed_by}</h2>


      </div>



  </div>
  )
}

export default SingleBeer