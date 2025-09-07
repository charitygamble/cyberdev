module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/projects');
    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });
    eleventyConfig.addCollection('projects', (collection) => {
        return collection.getFilteredByGlob('src/projects/*.md');
    });
    return {
        dir: {
            input: "src",
        },
    };
};