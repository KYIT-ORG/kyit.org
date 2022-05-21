const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"src/root/robots.txt": 'robots.txt'})

    eleventyConfig.setBrowserSyncConfig({
        extensions: ["html"],
        callbacks: {
            ready: function(err, bs) {
                bs.addMiddleware("*", function (req, res) {
                    
                    res.writeHead(302, { location: "404" })
                    res.end()
                })
            }
        }
    })

    eleventyConfig.addPlugin(syntaxHighlight)

    eleventyConfig.addGlobalData('layout', 'base.njk')
    //eleventyConfig.addGlobalData('order', '3')

    return {
        dir: {
            input: "src",
            output: "dist",
            markdownTemplateEngine: "njk",
        }
    }
}
