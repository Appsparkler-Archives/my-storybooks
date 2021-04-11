import React from "react";
import Marker from "./";
import useMarker from "../useMarker";
// import Mark from "mark.js";

const Story = {
  title: "Components/Marker-2",
  component: Marker,
};

export const hookStory = () => {
  const { markerRef, marker } = useMarker();
  // const ref = React.useRef();
  // const [marker, setMarker] = React.useState(null);
  // React.useEffect(() => {
  //   setMarker(() => {
  //     return new Mark(ref.current);
  //   });
  // }, []);
  const handleClick = React.useCallback(() => {
    marker.unmark();
  }, [marker]);
  const markIt = React.useCallback(() => {
    marker.mark("ea aute");
  }, [marker]);
  return (
    <div ref={markerRef}>
      Laboris voluptate nostrud sunt consequat est exercitation labore occaecat
      incididunt velit duis. Laborum duis eiusmod dolore qui duis ad Lorem nisi
      velit qui. Nostrud esse proident ullamco ad elit aliqua reprehenderit ea
      aute. Anim aute sint occaecat sint.
      <button onClick={handleClick}>Unmark {typeof markJsInstance}</button>
      <button onClick={markIt}>Mark</button>
    </div>
  );
};

const Template = (args) => <Marker {...args} />;
Template.args = {
  mark: "eu",
  children:
    "Cillum proident eu eiusmod incididunt pariatur. Ullamco qui deserunt ut reprehenderit cupidatat cupidatat nisi non occaecat non commodo. Magna incididunt eu laboris laboris labore. Sit duis ullamco qui nostrud aliqua do consectetur do incididunt eiusmod nulla consectetur.",
};

export const Example1 = Template.bind({});
Example1.args = Template.args;
Example1.storyName = "String";

export const MarkingASingleString = Template.bind({});
MarkingASingleString.args = {
  ...Template.args,
  mark: "Sit",
};

export const MarkingAnArrayOfStrings = Template.bind({});
MarkingAnArrayOfStrings.args = {
  ...Template.args,
  mark: ["Sit", "etur", "nostrud"],
};

export const WithMarkOptions = Template.bind({});
WithMarkOptions.args = {
  ...Template.args,
  mark: "orl",
  children: (
    <div>
      <h3>Hello World</h3>
      <p>Hello World</p>
    </div>
  ),
  options: {
    exclude: ["h3"],
    accuracy: "complementary",
  },
};

export default Story;
