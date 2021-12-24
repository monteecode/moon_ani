import React from "react";
import newMoon from "./images/new_moon.jpeg";
import waxing from "./images/waxing_crescent.jpeg";
import firstQuarter from "./images/first_quarter.jpeg";
import waxingGibb from "./images/waxing_gibb.jpeg";
import fullMoon from "./images/full_moon.jpeg";
import waningGib from "./images/waning_gib.jpeg";
import lastQuarter from "./images/last_quarter.jpeg";
import waning from "./images/waning_cres.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: "",
      currentPositon: 0,
    };
  }

  componentDidMount() {
    //window.addEventListener("scroll", this.parallaxShift);
    gsap.registerPlugin(ScrollTrigger);
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".new",
    //     start: "20px 20%",
    //     pin: true,
    //     markers: true,
    //   },
    // });

    // gsap.to(
    //   gsap.utils.toArray(".moons").forEach((moon, i) => {
    //     ScrollTrigger.create({
    //       trigger: moon,
    //       start: "top top",
    //       pin: true,
    //     });
    //   })
    // );
    gsap.utils.toArray(".moons").forEach((moon, i) => {
      gsap.to(moon, {
        x: 100,
        opacity: 0,
        duration: 5,
        scrollTrigger: {
          trigger: "#thirdCircle",
          markers: true,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
      // ScrollTrigger.create({
      //   trigger: moon,
      //   start: "top top",
      //   pin: true,
      //   markers: true,

      //   //   horizontal: true,
      // }).animate({
      //   xPercent: -20,
      //   opacity: 0,
      //   stagger: 0.2,
      //   duration: 2,
      //   scale: -1,
      //   ease: "back",
      // });
    });
  }

  componentWillUnmount() {
    //window.removeEventListener("scroll", this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Moon Phase Animation</h1>
        </header>
        <div className="allMoons">
          <div className="moons">
            <h2>New Moon</h2>
            <img className="new" src={newMoon} alt="new moon" />
          </div>
          <div className="moons">
            <h2>Waxing Cresent Moon</h2>
            <img
              className="waxingCres"
              src={waxing}
              alt="waxing cresent moon"
            />
          </div>
          <div className="moons">
            <h2>First Quarter Moon</h2>
            <img
              className="first"
              src={firstQuarter}
              alt="first quarter moon"
            />
          </div>
          <div className="moons">
            <h2>Waxing Gibbous Moon</h2>
            <img
              className="waxingGibb"
              src={waxingGibb}
              alt="waxing gibbous moon"
            />
          </div>
          <div className="moons">
            <h2>Full Moon</h2>
            <img className="full" src={fullMoon} alt="full moon" />
          </div>
          <div className="moons">
            <h2>Waning Gibbous Moon</h2>
            <img
              className="waningGib"
              src={waningGib}
              alt="waning gibbous moon"
            />
          </div>
          <div className="moons">
            <h2>Last Quarter Moon</h2>
            <img className="last" src={lastQuarter} alt="last quarter moon" />
          </div>
          <div className="moons">
            <h2>Waning Cresent Moon</h2>
            <img
              className="waningCres"
              src={waning}
              alt="waning cresent moon"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
