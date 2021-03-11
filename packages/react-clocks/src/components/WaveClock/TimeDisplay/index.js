import { useMemo, memo } from "react";
import PropTypes from "prop-types";

const DisplayedTime = ({ hours, minutes, seconds, showSeconds }) => {
  const {
    hoursWaveHeightPercent,
    displayHours,
    displayMinutes,
    displaySeconds,
    minutesWaveHeightPercent,
    secondsWaveHeightPercent,
  } = useMemo(
    () => ({
      secondsWaveHeightPercent: `${(seconds / 60) * 100}%`,
      minutesWaveHeightPercent: `${(minutes / 60) * 100}%`,
      hoursWaveHeightPercent: `${(hours / 24) * 100}%`,
      displayHours: hours < 10 ? `0${hours}` : hours,
      displayMinutes: minutes < 10 ? `0${minutes}` : minutes,
      displaySeconds: seconds < 10 ? `0${seconds}` : seconds,
    }),
    [hours, minutes, seconds]
  );
  return (
    <div className="App">
      <div className="Column">
        <div
          className="Marker"
          style={{ height: hoursWaveHeightPercent, opacity: "abcd" }}
        ></div>
      </div>
      <div className="Column">
        <div
          className="Marker"
          style={{ height: minutesWaveHeightPercent, opacity: "abcd" }}
        ></div>
      </div>
      {showSeconds && (
        <div className="Column">
          <div
            className="Marker Marker--seconds"
            style={{ height: secondsWaveHeightPercent, opacity: "abcd" }}
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
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default memo(DisplayedTime);
