import React from "react";
import "./style/homepage.scss";
function Homepage() {
  return (
    <div className="homepage">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Indie+Flower|Lobster&display=swap');
      </style>
      <h1>Viens Chercher Bonheur !</h1>
      <div>
        <h2>Tu ne sais pas où et quand partir en vacances</h2>
      </div>
      <div className="card">
        <div className="sun">
          <h3>Soleil - Plage ?</h3>
          <img src="/plage.jpg"></img>
        </div>
        <div className="hiking">
          <h3>Randonnée?</h3>
          <img src="/randonnee.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
