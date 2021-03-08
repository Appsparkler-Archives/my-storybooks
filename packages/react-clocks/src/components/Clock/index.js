import React from 'react'
import StyledClock from './styled'

const Clock = ({timestamp}) => {
  const styledClock = React.useMemo(() => {
    const hoursDegree = (new Date(timestamp).getHours() * (360/12)) - 90;
    const minutesDegree = (new Date(timestamp).getMinutes() * (360/60)) - 90;
    const extraHoursDegree = minutesDegree % 30;
    const secondsDegree = (new Date(timestamp).getSeconds() * (360/60)) - 90;
    const hands = {
      hoursDegree,
      minutesDegree,
      secondsDegree
    }
    return hands;
  }, [timestamp])
  return (
    <StyledClock {...styledClock}/>
  )
}

export default Clock;
