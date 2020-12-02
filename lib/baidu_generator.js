module.exports = function (locals) {
    var config = this.config;
    var fs = require('fs');
    var arr = [];
    var urls = [].concat(locals.posts.toArray()).map(function (post) {
        return {
            "date": post.updated || post.date,
            "permalink": post.permalink
        }
    })
        .map(function (post) {
            return post.permalink;
        })
        .join('\n');
    return {
        path: 'baidu.txt',
        data: urls
    };
};