import React from "react";
import "../App.css";
import jpic from '../assets/jonathonpic.jpg'
import calcpic from "../assets/jscalc.png"
import weatherpic from '../assets/weatherapp.png'

export default function Section() {
  return (
    <>
       <section className="firstHeader">
        <div className="fheader-border">
            <h1 className="title">Jonathon Blom</h1>
            <h2 className="subtitle">Full Stack Web Developer</h2>
        </div>
    </section>

    <section className="about">
        <div className="aboutMe">
            <h2>About</h2>
            <p>I am a dedicated full-stack junior web developer based in the northeast region of the Twin Cities, Minnesota. My focus is on creating robust and user-friendly web applications, ensuring optimal performance and functionality. With a solid foundation in technologies such as HTML, CSS, JavaScript, Node.js, React.js, Bootstrap, jQuery, Express.js, as well as well as other various technologies, I have successfully developed and deployed numerous websites. I am continuously expanding my skills to stay updated with the latest industry convetions and practices. My passion for coding and web development began immediately when I was introduced to these concepts. Since then, I have immersed myself into learning the field. Below are a couple of projects that I have built from scratch, including a calculator built with mostly JavaScript, and a weather app that utilizes an API. Besides coding, I enjoy riding fast motorcycles on racetracks, disc golf, playing music, and anything coffee related.</p>    
        </div>
        <img className='jonImg' src={jpic} alt="Jonathon Image"/>
    </section>
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
