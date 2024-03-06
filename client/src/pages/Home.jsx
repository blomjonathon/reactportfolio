import { useEffect, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
    <nav className="nav">
        <ul>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
        </ul>
    </nav>
    </>
  );
}
