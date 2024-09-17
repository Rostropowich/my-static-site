module.exports = function(eleventyConfig) {
  // Pass through copy for CSS and images if needed
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images"); // If you have images

  return {
    dir: {
      input: "src",
      output: "docs" // Set output to 'docs' for GitHub Pages
    }
  };
};
