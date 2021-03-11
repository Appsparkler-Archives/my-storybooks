import { useMemo, memo } from "react";

const DisplayedTime = ({ hours, minutes, seconds }) => {
  const { displayHours, displayMinutes, displaySeconds } = useMemo(
    () => ({
      displayHours: hours < 10 ? `0${hours}` : hours,
      displayMinutes: minutes < 10 ? `0${minutes}` : minutes,
      displaySeconds: seconds < 10 ? `0${seconds}` : seconds,
    }),
    [hours, minutes, seconds]
  );
  return (
    <div className="text-overlay">
      <div>{hours}</div>
      <div>{minutes}</div>
      <div>{seconds}</div>
    </div>
  );
};

export default memo(DisplayedTime);
