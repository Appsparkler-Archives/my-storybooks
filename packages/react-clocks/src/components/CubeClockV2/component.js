import "./styles.css";

const CubeClock = ({ className, seconds, minutes, hours }) => (
  <figure className={className}>
    <div className="face top v2">
      <p id="s">WED</p>
      <p id="s">DEC 25</p>
      <p id="s">2021</p>
    </div>
    <div className="face front">
      <p id="m">{minutes}</p>
    </div>
    <div className="face left">
      <p id="h">{hours}</p>
    </div>
  </figure>
);

export default CubeClock;
