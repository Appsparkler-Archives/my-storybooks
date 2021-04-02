import PropTypes from "prop-types";
import "./styles.css";

const CubeClock = ({ className, seconds, minutes, hours }) => (
  <figure className={className}>
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

CubeClock.propTypes = {
  className: PropTypes.string,
  seconds: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  minutes: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  hours: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default CubeClock;
