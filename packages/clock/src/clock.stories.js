import React from 'react'

const Clock = props =>(
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
)

const Template = args => <Clock {...args}/>
Template.args = {}

export const MyClock = Template.bind({})
MyClock.args = Template.args

const Story = {
  title: 'Clocks/Sieko Analog'
}

export default Story
