module.exports = function(eleventyConfig) {

  // Výchozí výstupní složka je: _site
 
  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
 
  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("*.js");
 
 
 
 
  eleventyConfig.addFilter("limit", function (arr, limit) {
   return arr.slice(0, limit);
 });
 
 
 
  return {
     // možné formáty šablon
     templateFormats: ["njk", "html", "md"],
     // jako šablonovací jazyk zvolíme Nunjucks`
     markdownTemplateEngine: "njk",
     htmlTemplateEngine: "njk",
     dataTemplateEngine: "njk",
   }
 
 };