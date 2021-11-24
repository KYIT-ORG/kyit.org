const { DateTime } = require('luxon')

module.exports = {

    permalink: data => {
        
        if(data.permalink) return data.permalink
        
        if(data.link) return data.page.filePathStem.replace(data.page.fileSlug, '') + 
                             data.link + 
                             '.html'

    },

    breadcrumbs: data => {   
        return data.page.url
                .split('/')
                .filter(x => x)
                .slice(0, -1)
         
    },

    collectionPage: data => {
        urlArray = data.page.url.split('/').filter(x => x)
        return data.collections.all
        .filter(i => {
            itemArray = i.url.split('/').filter(x => x)
            return i.url.startsWith(data.page.url) && 
                   itemArray.length == urlArray.length + 1
        })
        .sort((a, b) => {
            return a.data.order - b.data.order
        })
    },

    postDate: data => {
        return DateTime
               .fromJSDate(data.page.date)
               .toLocaleString(DateTime.DATE_MED)
    },

    prettyURL: data => {
        return data.page.url.endsWith('.html') ?
                data.page.url.slice(0, -5) :
                //data.page.url
                data.page.url.slice(0, -1)
    } 
}