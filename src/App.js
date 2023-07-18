import "./styles/App.css";
import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <HorizontalScroll pageLock={true} reverseScroll={true}>
        <div className="main bg" id="home">
          <div class="surface"></div>
          <div class="container">
            <div class="ufo"></div>
            <div class="star"></div>
            <p class="glitch">
              <span aria-hidden="true"></span>
              Hi, My Name is Bimo
              <span aria-hidden="true"></span>
            </p>
            <p class="glitch">
              <span aria-hidden="true"></span>
              Welcome to my portfolio space
              <span aria-hidden="true"></span>
            </p>
            <div class="blink">SCROLL UP OR DOWN TO START THE JOURNEY</div>
          </div>
          <div class="astronout"></div>
        </div>
        <div className="main bg1" id="skills">
          <h1 class="head">SKILLS</h1>
          <Skills />
        </div>
        <div className="main bg2">
          <h1 class="head">PROJECTS</h1>
          <Projects />
        </div>
        <div className="main bg3">
          <h1 class="head">EXPERIENCE</h1>
          <div class="timeline">
            <Experience />
          </div>
        </div>
        <div className="main bg4" id="contacts">
          <h1 class="last">CONTACT ME</h1>
          <div class="contact">
            <Contact />
          </div>
        </div>
      </HorizontalScroll>
    </div>
  );
}

export default App;
