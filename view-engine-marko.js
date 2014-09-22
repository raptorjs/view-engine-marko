var marko = require('marko');

module.exports = function createEngine(config) {
    return {
        load: function(path) {
            return marko.load(path);
        }
    };
};