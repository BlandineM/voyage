import React, { useState } from "react";
import "./style/addTrip.scss";
import axios from "axios";

export default function Addtrip() {
  const [pays, setPays] = useState("");
  const [month] = "01";
  const [type] = "plage";

  function sqlNameByType(type) {
    if (type === "plage") {
      return "P";
    } else {
      return "M";
    }
  }

  function addTrip(e) {
    const sqlName = sqlNameByType(type);
    axios.post(`http://localhost:5000/plage/01/newtrip`, {
      pays,
      mois_conseille_P: month
    });
  }
  return (
    <div className="formulaire">
      <form>
        <h1>Ajoute un voyage </h1>
        <p>
          <label for="pays">Pays</label>
          <input
            type="text"
            name="pays"
            id="pays"
            value={pays}
            placeholder="Ta destination"
            onChange={evt => setPays(evt.target.value)}
          ></input>
          <input
            type="radio"
            name="01"
            id="01"
            value={month}
            // onchange={evt => setMonth(evt.target.value)}
          />
          <label for="01">Janvier</label>
        </p>
        <input
          type="submit"
          value="Envoyer"
          onSubmit={e => {
            addTrip(e);
          }}
        ></input>
      </form>
    </div>
  );
}
