import React from "react";
import { Link } from "react-router-dom";
import "./style/navBar.scss";

export default function NavBar() {
  return (
    <div className="month">
      <ul>
        <Link to="/01">
          <li>JANV</li>
        </Link>

        <Link to="/02">
          <li>FEVR</li>
        </Link>

        <Link to="/03">
          <li>MAR</li>
        </Link>

        <Link to="/04">
          <li>AVR</li>
        </Link>

        <Link to="/05">
          <li>MAI</li>
        </Link>

        <Link to="/06">
          <li>JUIN</li>
        </Link>

        <Link to="/07">
          <li>JUIL</li>
        </Link>

        <Link to="/08">
          <li>AOU</li>
        </Link>

        <Link to="/09">
          <li>SEPT</li>
        </Link>

        <Link to="/10">
          <li>OCT</li>
        </Link>

        <Link to="/11">
          <li>NOV</li>
        </Link>

        <Link to="/12">
          <li>DEC</li>
        </Link>

        <Link to="/plage">
          <li>TOUT</li>
        </Link>
      </ul>
    </div>
  );
}
