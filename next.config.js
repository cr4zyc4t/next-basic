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
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    return config;
  },
});