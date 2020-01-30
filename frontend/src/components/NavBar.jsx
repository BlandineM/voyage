import React from "react";
import { Link } from "react-router-dom";
import "./style/navBar.scss";

export default function NavBar(props) {
  return (
    <div className="month">
      <ul>
        <Link to={`/${props.place}/01`}>
          <li>JANV</li>
        </Link>

        <Link to={`/${props.place}/02`}>
          <li>FEVR</li>
        </Link>

        <Link to={`/${props.place}/03`}>
          <li>MAR</li>
        </Link>

        <Link to={`/${props.place}/04`}>
          <li>AVR</li>
        </Link>

        <Link to={`/${props.place}/05`}>
          <li>MAI</li>
        </Link>

        <Link to={`/${props.place}/06`}>
          <li>JUIN</li>
        </Link>

        <Link to={`/${props.place}/07`}>
          <li>JUIL</li>
        </Link>

        <Link to={`/${props.place}/08`}>
          <li>AOU</li>
        </Link>

        <Link to={`/${props.place}/09`}>
          <li>SEPT</li>
        </Link>

        <Link to={`/${props.place}/10`}>
          <li>OCT</li>
        </Link>

        <Link to={`/${props.place}/11`}>
          <li>NOV</li>
        </Link>

        <Link to={`/${props.place}/12`}>
          <li>DEC</li>
        </Link>

        <Link to={`/${props.place}`}>
          <li>TOUT</li>
        </Link>
      </ul>
    </div>
  );
}
