import React from 'react'
import Clock from './index'

const Template = args => {
  const [timestamp, setTimestamp] = React.useState(Date.now());
  React.useEffect(() => {
    setInterval(() => {
      setTimestamp(Date.now())
    }, 10)
  }, [])
  // alert(Date.now())
  return <Clock timestamp={timestamp} />
}

Template.args = {
  // timestamp:
}

export const clock = Template.bind({})
clock.args = Template.args

const Story = {
  title: 'Clocks/Sieko Analog 123 ',
  component: Clock
}

export default Story
