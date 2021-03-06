import React from 'react'
import Clock from './index'

const Template = args => <Clock {...args}/>
Template.args = {
  timestamp: Date.now()
}

export const clock = Template.bind({})
clock.args = Template.args

const Story = {
  title: 'Clocks/Sieko Analog',
  component: Clock
}

export default Story
