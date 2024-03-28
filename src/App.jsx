import { useState } from "react";

import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import ScrollbarHidden from "./Components/ScrollBarHidden";
import CustomScrollbar from "./Components/CustomScrollbar";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <CustomScrollbar>
        <div className="overflow-x-hidden overflow-y-hidden">
          <section id="Home">
            <Home />
          </section>
          <section id="About">
            <About />
          </section>
          <section id="Projects">
            <Project/>
          </section>
          <section id="Services">
            <Services/>
          </section>
          <section id="Contact">
            <Contact/>
          </section>
        </div>
      </CustomScrollbar>
    </>
  );
}

export default App;
