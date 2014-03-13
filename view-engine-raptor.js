var raptorTemplates = require('raptor-templates');

module.exports = function createEngine(config) {
    return {
        context: function(path, input, context) {
            raptorTemplates.render(path, input, context);
        }
    };
};