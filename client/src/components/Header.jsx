import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
