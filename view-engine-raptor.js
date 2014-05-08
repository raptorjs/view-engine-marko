var raptorTemplates = require('raptor-templates');

module.exports = function createEngine(config) {
    return {
        load: function(path) {
            return raptorTemplates.load(path);
        }
    };
};