import RegExpMarker from './'

const Story = {
  title: 'Mark.js/RangesMarker',
  component: RegExpMarker,
}

const Template = ({ children, ...args }) => (
  <RegExpMarker {...args}>{children}</RegExpMarker>
)
Template.args = {
  mark: [
    {
      start: 3,
      length: 4,
    },
  ],
  children: <h1>0123456789</h1>,
}

export const WithoutOtions = Template.bind({})
WithoutOtions.args = Template.args

export const WithMarkOptions = Template.bind({})
WithMarkOptions.args = {
  ...Template.args,
  children: (
    <div>
      <h1>0123456789</h1>
      <h3>0123456789</h3>
    </div>
  ),
  options: {
    exclude: ['h1'],
  },
}

export default Story
