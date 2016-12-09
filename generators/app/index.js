'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var path = require('path');

/* Customize Yeoman Generator */
module.exports = yeoman.Base.extend({
    constructor: function() {
        yeoman.Base.apply(this, arguments);


        //CUSTOM FLAGS

        //PORTS
        this.option('dev-port', {
            desc: 'Port to be used for development',
            type: String,
            defaults: '9000'
        });
        this.option('debug-port', {
            desc: 'Port to be used for debugging',
            type: String,
            defaults: '5858'
        });
        this.option('prod-port', {
            desc: 'Port to be used for production',
            type: String,
            defaults: '8080'
        });


        //ARGUMENTS & CORRESPONDING VARIABLES

        // If user did not provide app name as argument create a sensible default
        this.argument('appname', { type: String, required: false });
        this.appname = this.appname || path.basename(process.cwd());
        this.appname = _.camelCase(this.appname); // as far as I can tell the camelCase method takes care of all the details that used to require lodash's slugify and humanize methods
    },


    // Uses inquirer.js async promises
    prompting: function() {
        return this.prompt(
            [
                {
                    type: 'input',
                    name: 'username',
                    message: 'What is your Github username?',
                    store: true // Will set default to whatever was used last time
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Please enter a description for your application',
                    default: 'MEAN application'
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your project\'s name?',
                    default: this.appname // Default's to current dirname
                },
                {
                    type: 'confirm',
                    name: 'typescript',
                    message: 'Would you like to use typescript for Angular2?',
                    store: true
                },
                {
                    type: 'confirm',
                    name: 'pug',
                    message: 'Would you like to use Pug/Jade for templating?',
                    store: true
                },
                {
                    type: 'confirm',
                    name: 'gulp',
                    message: 'Would you like to use Gulp to manage your project?',
                    store: true
                },
                {
                    type: 'confirm',
                    name: 'mocha',
                    message: 'Would you like to use Mocha for testing?',
                    store: true
                },
                {
                    type: 'confirm',
                    name: 'mongoose',
                    message: 'Would you like to enable MongooseJS (allow for schemas and validation)?',
                    store: true
                },
                {
                    type: 'confirm',
                    name: 'passport',
                    message: 'Would you like to enable PassportJS with default local authentication strategy (allow for user authentication)?',
                    store: true
                },
                {
                    type: 'confirm',
                    name: 'crud',
                    message: 'Would you like to generate an ExpressJS template for basic CRUD functionality?',
                    store: true
                },
            ]
        ).then(function(answers) {
            //NOTE: Use generator.log function instead of env specific methods (e.g. console.log)
            //
            // this.log('user name: ', answers.username);
            // this.log('app name: ', answers.name);
            // this.log('typescript: ', answers.typescript);
            // this.log('pug: ', answers.pug);
            // this.log('gulp: ', answers.gulp);
            // this.log('mocha: ', answers.mocha);
            // this.log('mongoose: ', answers.mongoose);
            // this.log('passport: ', answers.passport);
            // this.log('crud: ', answers.crud);

            if (answers.name) {
                this.composeWith("komodo-mean:server", {
                    options: {
                        nested: true,
                        appname: answers.name,
                        mongoose: answers.mongoose,
                        passport: answers.passport,
                        crud: answers.crud
                    }
                },
                {
                    local: require.resolve("./../server")
                });


                this.composeWith("komodo-mean:client", {
                    options: {
                        nested: true,
                        appname: answers.name,
                        typescript: answers.typescript,
                        pug: answers.pug
                    }
                },
                {
                    local: require.resolve("./../client")
                });
            }

            else {
                this.log('Invalid app name: ', answers.name);
            }

        }.bind(this));
    }
});
