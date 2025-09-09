const markdownIt = require('markdown-it');
const pluginDate = require('eleventy-plugin-date');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginDate);
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addPassthroughCopy('src/blog');
    eleventyConfig.addWatchTarget('src/blog');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/projects');
    eleventyConfig.addFilter('head', (array, n) => {
        if(!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if( n < 0 ) {
            return array.slice(n);
        }
        return array.slice(0, n);
    });
    eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }));
    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });
    eleventyConfig.addCollection('projects', (collection) => {
        return collection.getFilteredByGlob('src/projects/*.md');
    });
    eleventyConfig.addCollection('blog', (collection) => {
        return collection.getFilteredByGlob('src/blog/*.md');
    });

    return {
        dir: {
            input: 'src'
        },
    };
};