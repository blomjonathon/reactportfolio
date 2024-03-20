import React from "react";
import "../App.css";
import calcpic from "../assets/jscalc.png"
import calendarjspic from "../assets/calendarimg.png"
import jsquizpic from "../assets/jsquizimg.png"
import passwordgen from "../assets/passwordgenimg.png"
// import seopic from "../assets/seoimg.png"
import weatherpic from '../assets/weatherapp.png'

export default function Project() {
  return (
    <>
    <header className="projectsHeader">
        <h2>Projects</h2>
    </header>
        <section className="projectCards">
            <section>
                <h3>Calculator JS</h3>
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
            <section>
                <h3>Calendar JS</h3>
                <a href="https://blomjonathon.github.io/calendardayjs/" target="_blank">
                    <img src={calendarjspic} alt="calendar app Image" />
                </a>
            </section>
            <section>
                <h3>Quiz JS</h3>
                <a href="https://blomjonathon.github.io/jsquiz/" target="_blank">
                    <img src={jsquizpic} alt="JS Quiz Image" />
                </a>
            </section> 
            <section>
                <h3>Password Generator</h3>
                <a href="https://blomjonathon.github.io/password-generator/" target="_blank">
                    <img src={passwordgen} alt="Password Generator Image" />
                </a>
            </section>
            <section>
                <h3>SEO Website</h3>
                <a href="https://blomjonathon.github.io/seomarketing/" target="_blank">
                    <img alt="SEO Site Image" />
                </a>
            </section>
        </section>
    </>
  );
}

