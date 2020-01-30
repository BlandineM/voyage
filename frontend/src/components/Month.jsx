import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./style/plage.scss";
import { useParams } from "react-router-dom";

export default function Month() {
  const [filter, setfilter] = useState([]);
  const { month } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/plage/01`).then(({ data }) => {
      setfilter(data);
    });
  }, [setfilter, month]);
  console.log(month);

  return (
    <div className="main">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Indie+Flower|Lobster&display=swap');
      </style>
      <h1> in january! </h1>
      <NavBar />
      <div className="destinations">
        {filter.map((pays, i) => {
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
