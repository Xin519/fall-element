// module.exports = {
//   "stories": [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }

module.exports = {
  stories: ['../packages/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
