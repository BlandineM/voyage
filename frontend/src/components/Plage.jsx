import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./style/plage.scss";

function Plage() {
  const [pays, setpays] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/plage").then(({ data }) => {
      setpays(data);
    });
  }, [setpays]);

  return (
    <div className="main">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Indie+Flower|Lobster&display=swap');
      </style>
      <h1>Let's go to the beach ! </h1>
      <NavBar />
      <div className="destinations">
        {pays.map((pays, i) => {
          return (
            <div key={i} className="cards">
              <h2>{pays.pays}</h2>
              <div className="image">
                <img
                  className="destination"
                  src={`/destinations/${pays.id}.jpg`}
                  alt={`${pays.pays}`}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plage;
