import React from 'react'
import PropTypes from 'prop-types'

const Clock = props =>(
  <div class={props.className}>
    <section>
      <div class="label">SEIKO</div>
      <div class="hourhand"></div>
      <div class="secondhand"></div>
      <div class="minutehand"></div>
      <div class="hour12"></div>
      <div class="hour1"></div>
      <div class="hour2"></div>
      <div class="hour3"></div>
      <div class="hour4"></div>
      <div class="hour5"></div>
    </section>
  </div>
)

Clock.propTypes = {
  className: PropTypes.string
}


export default React.memo(Clock);
