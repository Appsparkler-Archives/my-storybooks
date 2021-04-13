import React from "react";
import PropTypes from "prop-types";
import StyledClock from "./styled";
const Clock = ({ timestamp }) => {
  const styledClock = React.useMemo(() => {
    const hoursDegree = new Date(timestamp).getHours() * (360 / 12) - 90;
    const minutesDegree = new Date(timestamp).getMinutes() * (360 / 60) - 90;
    const secondsDegree = new Date(timestamp).getSeconds() * (360 / 60) - 90;
    const hands = {
      hoursDegree,
      minutesDegree,
      secondsDegree,
    };
    return hands;
  }, [timestamp]);
  return <StyledClock {...styledClock} />;
};

Clock.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default Clock;
