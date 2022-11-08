import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from "./Header"

function RandomBeer() {
const [beer, setBeer] =useState({})

useEffect (() => {
  getData()
}, [])

const getData =async () => {
  try {
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    setBeer(response.data)
  }catch(error){

  }
  }


  return (
    <div>

      <Header/>

    <div>
<img src={beer.image_url} alt="cerveza" width="100px"/>
<h2>{beer.name}</h2>
      <h2>{beer.tagline}</h2>
      <h2>{beer.first_brewed}</h2>
      <h2>{beer.attenuation_level}</h2>
      <p>{beer.description}</p>
      <h2>{beer.contributed_by}</h2>
</div>
</div>


  )
}

export default RandomBeer