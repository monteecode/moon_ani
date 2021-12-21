import newMoon from "./images/new_moon.jpeg";
import waxing from "./images/waxing_crescent.jpeg";
import firstQuarter from "./images/first_quarter.jpeg";
import waxingGibb from "./images/waxing_gibb.jpeg";
import fullMoon from "./images/full_moon.jpeg";
import waningGib from "./images/waning_gib.jpeg";
import lastQuarter from "./images/last_quarter.jpeg";
import waning from "./images/waning_cres.jpeg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Moon Phase Animation</h1>
      </header>
      <div className="new moons">
        <h2>New Moon</h2>
        <img src={newMoon} alt="new moon" />
      </div>
      <div className="waxing moons">
        <h2>Waxing Cresent Moon</h2>
        <img src={waxing} alt="waxing cresent moon" />
      </div>
      <div className="first moons">
        <h2>First Quarter Moon</h2>
        <img src={firstQuarter} alt="first quarter moon" />
      </div>
      <div className="waxing moons">
        <h2>Waxing Gibbous Moon</h2>
        <img src={waxingGibb} alt="waxing gibbous moon" />
      </div>
      <div className="full moons">
        <h2>Full Moon</h2>
        <img src={fullMoon} alt="full moon" />
      </div>
      <div className="waningGib moons">
        <h2>Waning Gibbous Moon</h2>
        <img src={waningGib} alt="waning gibbous moon" />
      </div>
      <div className="last moons">
        <h2>Last Quarter Moon</h2>
        <img src={lastQuarter} alt="last quarter moon" />
      </div>
      <div className="waning">
        <h2>Waning Cresent Moon</h2>
        <img src={waning} alt="waning cresent moon" />
      </div>
    </div>
  );
}

export default App;
