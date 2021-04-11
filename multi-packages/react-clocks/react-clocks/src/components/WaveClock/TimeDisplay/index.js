import { useMemo, memo } from "react";
import PropTypes from "prop-types";
import useTimestampConverter from "react-clocks-hooks/dist/hooks/useTimestampConverter";
import "./styles.css";

const DisplayedTime = ({ timestamp, showSeconds }) => {
  const { hours, minutes, seconds } = useTimestampConverter(timestamp);
  const {
    displayHours,
    displayMinutes,
    displaySeconds,
    hoursWaveHeightPercent,
    minutesWaveHeightPercent,
    secondsWaveHeightPercent,
    hoursOpacity,
    minutesOpacity,
    secondsOpacity,
  } = useMemo(
    () => ({
      hoursOpacity: `${hours / 24}`,
      minutesOpacity: `${minutes / 60}`,
      secondsOpacity: `${seconds / 60}`,
      secondsWaveHeightPercent: `${(seconds / 60) * 100}%`,
      minutesWaveHeightPercent: `${(minutes / 60) * 100}%`,
      hoursWaveHeightPercent: `${(hours / 24) * 100}%`,
      displayHours: hours < 10 ? `0${hours}` : hours,
      displayMinutes: minutes < 10 ? `0${minutes}` : minutes,
      displaySeconds: seconds < 10 ? `0${seconds}` : seconds,
    }),
    [timestamp]
  );
  return (
    <div className="App">
      <div className="Column">
        <div
          className="Marker"
          style={{ height: hoursWaveHeightPercent, opacity: hoursOpacity }}
        ></div>
      </div>
      <div className="Column">
        <div
          className="Marker"
          style={{ height: minutesWaveHeightPercent, opacity: minutesOpacity }}
        ></div>
      </div>
      {showSeconds && (
        <div className="Column">
          <div
            className="Marker Marker--seconds"
            style={{
              height: secondsWaveHeightPercent,
              opacity: secondsOpacity,
            }}
          ></div>
        </div>
      )}
      <div className="text-overlay">
        <div>{displayHours}</div>
        <div>{displayMinutes}</div>
        {showSeconds && <div>{displaySeconds}</div>}
      </div>
    </div>
  );
};

DisplayedTime.propTypes = {
  showSeconds: PropTypes.bool,
  timestamp: PropTypes.number.isRequired,
};

export default memo(DisplayedTime);
