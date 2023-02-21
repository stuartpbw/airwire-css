module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-responsive-classes"),
    require("postcss-sort-media-queries"),
    require("postcss-preset-env"),
    require("perfectionist")({ format: "compact" }),
    process.env.NODE_ENV === "production" && require("cssnano"),
  ],
};
