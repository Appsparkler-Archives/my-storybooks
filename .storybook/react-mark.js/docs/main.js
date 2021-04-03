module.exports = {
  stories: [
    "../../../packages/react-mark.js/src/**/*.stories.mdx",
    // "../../../multi-packages/react-mark.js/docs/",
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    "../../../packages/react-mark.js/src/**/*.stories.js",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
