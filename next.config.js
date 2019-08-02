const path = require("path");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  ...withSass({
    ...withCss({
      cssModules: true,
    }),
    cssModules: true,
  }),
  webpack(config, { webpack }) {
    // Ignore all locale files of moment.js
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["layouts"] = path.join(__dirname, "layouts");
    config.resolve.alias["pages"] = path.join(__dirname, "pages");
    config.resolve.alias["store"] = path.join(__dirname, "store");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");
    config.resolve.alias["lib"] = path.join(__dirname, "lib");
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    return config;
  },
});