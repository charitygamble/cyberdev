// const pluginDate = require('eleventy-plugin-date');
// const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
    // eleventyConfig.addPlugin(pluginDate);
    // eleventyConfig.addFilter('head', (array, n) => {
       // if(!Array.isArray(array) || array.length === 0) {
       //     return [];
       // }
       // if( n < 0 ) {
        //    return array.slice(n);
      //  }
     //   return array.slice(0, n);
   // });

    // eleventyConfig.addPassthroughCopy('src/css');
    // eleventyConfig.addWatchTarget('src/css');
    // eleventyConfig.addPassthroughCopy('src/assets');
    // eleventyConfig.addPassthroughCopy('src/fonts');
    // eleventyConfig.addPassthroughCopy('src/projects');

   // eleventyConfig.addShortcode('year', () => {
      //  return `${new Date().getFullYear()}`;
   // });

   // eleventyConfig.addCollection('projects', (collection) => {
   //     return collection.getFilteredByGlob('src/projects/*.md');
   // });

   // eleventyConfig.addCollection('blog', (collection) => {
   //     return collection.getFilteredByGlob('src/blog/*.md');
   // });
    
    return {
        dir: {
            input: "src",
        },
    };
};