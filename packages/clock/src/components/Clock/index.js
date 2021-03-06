import React from 'react'
import StyledClock from './styled'

const Clock = props => {
  const styledClock = {
    hoursDegree: 120,
    minutesDegree: 120,
    secondsDegree: 120
  }
  return (
    <StyledClock {...styledClock}/>
  )
}

export default Clock;
