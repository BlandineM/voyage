import React from "react";
import { Link } from "react-router-dom";
import "./style/navBar.scss";

export default function NavBar() {
  return (
    <div className="month">
      <ul>
        <Link to="/plage/01">
          <li>JANV</li>
        </Link>

        <Link to="/plage/02">
          <li>FEVR</li>
        </Link>

        <Link to="/plage/03">
          <li>MAR</li>
        </Link>

        <Link to="/plage/04">
          <li>AVR</li>
        </Link>

        <Link to="/plage/05">
          <li>MAI</li>
        </Link>

        <Link to="/plage/06">
          <li>JUIN</li>
        </Link>

        <Link to="/plage/07">
          <li>JUIL</li>
        </Link>

        <Link to="/plage/08">
          <li>AOU</li>
        </Link>

        <Link to="/plage/09">
          <li>SEPT</li>
        </Link>

        <Link to="/plage/10">
          <li>OCT</li>
        </Link>

        <Link to="/plage/11">
          <li>NOV</li>
        </Link>

        <Link to="/plage/12">
          <li>DEC</li>
        </Link>

        <Link to="/plage">
          <li>TOUT</li>
        </Link>
      </ul>
    </div>
  );
}
