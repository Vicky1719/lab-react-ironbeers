import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function ListBeers() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://ih-beers-api2.herokuapp.com/beers"
      );
      setBeerList(response.data);
    } catch (error) {}
  };

  return (
    <div>
      <Header />
      {beerList.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <img src={eachBeer.image_url} alt="cerveza" width="100px" />
            <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
            <h3>{eachBeer.tagline}</h3>
            <p>
              <b> Created by: </b>
              {eachBeer.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
