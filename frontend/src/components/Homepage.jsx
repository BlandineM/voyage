import React from "react";
import "./style/homepage.scss";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <h2>Tu ne sais pas où et quand partir en vacances</h2>
      </div>
      <div className="card">
        <div className="sun">
          <Link to="/plage">
            <h3>Soleil - Plage ?</h3>
            <img src="/plage.jpg"></img>
          </Link>
        </div>
        <div className="hiking">
          <Link to="/randonnee">
            <h3>Randonnée?</h3>
            <img src="/randonnee.jpg"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
