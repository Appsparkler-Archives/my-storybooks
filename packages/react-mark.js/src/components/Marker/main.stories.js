import Marker from './'

const Story = {
  title: 'Mark.js/Marker',
  component: Marker,
}

const Template = (args) => <Marker {...args} />
Template.args = {
  mark: 'oo',
  children: 'Foo Boo Koo',
}

export const WithoutOtions = Template.bind({})
WithoutOtions.args = Template.args

export const WithMarkOptions = Template.bind({})
WithMarkOptions.args = {
  ...Template.args,
  mark: 'orl',
  children: (
    <div>
      <h3>Hello World</h3>
      <p>Hello World</p>
    </div>
  ),
  options: {
    exclude: ['h3'],
    accuracy: 'complementary',
  },
}

export default Story
