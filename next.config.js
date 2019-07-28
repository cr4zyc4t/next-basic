const flow = require("lodash/flow");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = flow(
  withCss,
  withSass,
)({
  webpack(config) {
    // Further custom configuration here
    return config;
  },
});