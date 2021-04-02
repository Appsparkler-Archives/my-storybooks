import { useMemo, memo } from "react";
import PropTypes from "prop-types";
import StyledCubeClock from "./styled";

const CubeClock = ({ timestamp }) => {
  const cubeClock = useMemo(() => {
    const date = new Date(timestamp);
    const hours = (() => {
      const hours = date.getHours();
      return hours < 10 ? `0${hours}` : hours;
    })();
    const minutes = (() => {
      const minutes = date.getMinutes();
      return minutes < 10 ? `0${minutes}` : minutes;
    })();
    const seconds = (() => {
      const seconds = date.getSeconds();
      return seconds < 10 ? `0${seconds}` : seconds;
    })();
    return {
      hours,
      minutes,
      seconds,
    };
  }, [timestamp]);
  return <StyledCubeClock {...cubeClock} />;
};

CubeClock.propTypes = {
  timestamp: PropTypes.number,
};

export default memo(CubeClock);
