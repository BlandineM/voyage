import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./style/plage.scss";
import { useParams } from "react-router-dom";

function Type() {
  const [pays, setpays] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/${type}`).then(({ data }) => {
      setpays(data);
    });
  }, [setpays]);
  console.log("type !!!");

  return (
    <div className="main">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Indie+Flower|Lobster&display=swap');
      </style>
      <h1>Direction {type} ! </h1>
      <NavBar place={type} />
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

export default Type;
