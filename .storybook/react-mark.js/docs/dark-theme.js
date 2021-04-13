import { create } from "@storybook/theming";
import LogoPNG from './logo.png'

export default create({
  base: "dark",
  brandTitle: "My custom storybook",
  brandUrl: "http://localhost:2000",
  // brandImage: "https://placekitten.com/440/200?image=4",
  brandImage: LogoPNG
});
