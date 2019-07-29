const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withSass({
    ...withCss({
      cssModules: true,
    }),
    cssModules: true,
  })
);