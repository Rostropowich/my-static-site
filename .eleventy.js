module.exports = function(eleventyConfig) {
  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
