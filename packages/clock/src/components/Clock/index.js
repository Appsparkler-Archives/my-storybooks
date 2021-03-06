import React from 'react'
import StyledClock from './styled'

const Clock = ({timestamp}) => {
  const styledClock = React.useMemo(() => {

    // alert(new Date(timestamp).getSeconds())
    return {
      hoursDegree: 120,
      minutesDegree: 120,
      secondsDegree: (new Date(timestamp).getSeconds() * 6) - 90
    }
  }, [timestamp])
  return (
    <StyledClock {...styledClock}/>
  )
}

export default Clock;
