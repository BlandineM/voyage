import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./style/type.scss";
import { useParams } from "react-router-dom";

function Type() {
  const [pays, setpays] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/${type}`).then(({ data }) => {
      setpays(data);
    });
  }, [setpays]);

  return (
    <div className="main">
      <h1>Direction {type} </h1>

      <NavBar place={type} />
      <div className="destinations">
        {pays.map((pays, i) => {
          return (
            <div key={i} className="cards">
              <div className="image">
                <h2>{pays.pays}</h2>
                <img
                  className="destinationPicture"
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