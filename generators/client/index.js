'use strict';

var generators = module.exports = require('yeoman-generator').Base.extend({
    'prompting': function() {
        this.log('prompting client');
    },

    'writing': function() {
        this.log('passed options');
        this.log(this.options);
    }
});
