import StyledUniClock from "./styled";

const UniClock = ({ timestamp }) => {
  const styledClock = React.useMemo(() => {
    const hoursDegree = new Date(timestamp).getHours() * (360 / 12);
    const minutesDegree = new Date(timestamp).getMinutes() * (360 / 60);
    const secondsDegree = new Date(timestamp).getSeconds() * (360 / 60);
    const hands = {
      hoursDegree,
      minutesDegree,
      secondsDegree,
    };
    return hands;
  }, [timestamp]);
  return (
    <div>
      <StyledUniClock {...styledClock} />
    </div>
  );
};

UniClock.propTypes = {
  timestamp: PropTypes.number,
};

export default UniClock;
