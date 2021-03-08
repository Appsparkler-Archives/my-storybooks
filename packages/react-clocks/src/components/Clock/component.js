import React from 'react'
import PropTypes from 'prop-types'

const Clock = props =>(
  <div className={props.className}>
    <section>
      <div className="label">SEIKO</div>
      <div className="hourhand"></div>
      <div className="secondhand"></div>
      <div className="minutehand"></div>
      <div className="hour12"></div>
      <div className="hour1"></div>
      <div className="hour2"></div>
      <div className="hour3"></div>
      <div className="hour4"></div>
      <div className="hour5"></div>
    </section>
  </div>
)

Clock.propTypes = {
  className: PropTypes.string
}


export default React.memo(Clock);
