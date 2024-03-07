import React from "react";
import "../App.css";
import calcpic from "../assets/jscalc.png"
import weatherpic from '../assets/weatherapp.png'
import Header from "./Header";
import Footer from "./Footer";

export default function Project() {
  return (
    <>
    <header className="projectsHeader">
        <h2>Projects</h2>
    </header>
        <section className="projectCards">
            <section>
                <h3>JS Calculator</h3>
                <a href="https://blomjonathon.github.io/deployedjscalc/" target="_blank">
                    <img src={calcpic} alt="calculator Image" />
                </a>
            </section>
            <section>
                <h3>Weather API</h3>
                <a href="https://blomjonathon.github.io/deployedweatherapi/" target="_blank">
                    <img src={weatherpic} alt="weatherapp Image" />
                </a>
            </section>
        </section>
    </>
  );
}

