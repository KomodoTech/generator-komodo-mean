'use strict';

/*
this.option('dev-port', {
    desc: 'Which port would you like to use for the development HTTP server?'
    type: String,
    defaults: '9000'
});
*/

var generators = module.exports = require('yeoman-generator').Base.extend({
    'prompting': function() {
        this.log('prompting server');
    },

    'writing': function() {
        this.log('passed options');
        this.log(this.options);
    }
});
