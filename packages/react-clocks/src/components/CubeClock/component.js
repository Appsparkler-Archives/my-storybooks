import "./styles.css";

const CubeClock = ({ className, seconds, minutes, hours }) => (
  <figure className={className}>
    {console.log({ className, seconds, minutes, hours })}
    <div className="face top">
      <p id="s">{seconds}</p>
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
