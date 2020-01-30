import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./style/plage.scss";
import { useParams } from "react-router-dom";

function Month() {
  const [filter, setfilter] = useState([]);
  const { month, type } = useParams();
  const mois = {
    "01": "Janvier",
    "02": "Fevrier",
    "03": "Mars",
    "04": "Avril",
    "05": "Mai",
    "06": "Juin",
    "07": "Juillet",
    "08": "Aout",
    "09": "Septembre",
    "10": "Octobre",
    "11": "Novembre",
    "12": "Decembre"
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/${type}/${month}`).then(({ data }) => {
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
      <h1> En {mois[month]} ! </h1>
      <NavBar place={type} />
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
export default Month;
