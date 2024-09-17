module.exports = function(eleventyConfig) {
  // Pass through copy for CSS or other assets if needed
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images"); // If you have images

  return {
    dir: {
      input: "src",
      output: "docs" // Change this from 'dist' to 'docs'
    }
  };
};
