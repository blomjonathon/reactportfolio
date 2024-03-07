import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./components/Project";
import Footer from "./components/Footer"
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
  <ul>
    <li>
      <NavLink to="/about" activeStyle={{ color: "red", fontWeight: "bold" }}>About Me</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio" activeStyle={{ color: "red", fontWeight: "bold" }}>Portfolio</NavLink>
    </li>
    <li>
      <NavLink to="/contact" activeStyle={{ color: "red", fontWeight: "bold" }}>Contact</NavLink>
    </li>
    <li>
      <NavLink to="/resume" activeStyle={{ color: "red", fontWeight: "bold" }}>Resume</NavLink>
    </li>
  </ul>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
