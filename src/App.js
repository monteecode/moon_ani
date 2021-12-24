import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import newMoon from "./images/new_moon.jpeg";
// import waxing from "./images/waxing_crescent.jpeg";
// import firstQuarter from "./images/first_quarter.jpeg";
// import waxingGibb from "./images/waxing_gibb.jpeg";
// import fullMoon from "./images/full_moon.jpeg";
// import waningGib from "./images/waning_gib.jpeg";
// import lastQuarter from "./images/last_quarter.jpeg";
// import waning from "./images/waning_cres.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [currentImage, setCurrentImage] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  function onScroll(event) {
    console.log(event);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // gsap.utils.toArray(".moons").forEach((moon, i) => {

    const element = ref.current;
    console.log(ref.current);
    gsap.fromTo(
      element.querySelector(".moons"),
      {
        opacity: 1,
        y: 0,
      },
      {
        y: 500,
        opacity: 0,
        duration: 10,
        scrollTrigger: {
          trigger: ".allMoons",
          markers: true,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Moon Phase Animation</h1>
      </header>
      <div className="allMoons" ref={ref}>
        <div className="moons">
          <h2>New Moon</h2>
          <img className="new" src={newMoon} alt="new moon" />
        </div>
      </div>
    </div>
  );
}

export default App;
