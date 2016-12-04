var generators = require('yeoman-generator');
var _ = require('lodash');

/* Customize Yeoman Generator */
module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);


        //CUSTOM FLAGS & CORRESPONDING FILE EXTENSIONS
        
        this.option('typescript');
        this.angularExtension = (this.options.typescript ? ".ts" : ".js");

        this.option('pug');
        this.templateExtension = (this.options.pug ? ".pug" : ".html");

        this.option('mocha');

        this.option('mongoose');

        this.option('passport');

        this.option('crud');

        //ARGUMENTS & CORRESPONDING VARIABLES
        
        //TODO: If this is required then don't ask for it in the prompt
        this.argument('appname', { type: String, required: true });
        this.appname = _.camelCase(this.appname);
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

            this.log('user name: ', answers.username);
            this.log('app name: ', answers.name);
            this.log('typescript: ', answers.typescript);
            this.log('pug: ', answers.pug);
            this.log('mocha: ', answers.mocha);
            this.log('mongoose: ', answers.mongoose);
            this.log('passport: ', answers.passport);
            this.log('crud: ', answers.crud);
        }.bind(this));
    }
});
