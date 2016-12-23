'use strict';
import generators from 'yeoman-generator';
import _ from 'lodash';
import path from 'path';

/* Customize Yeoman Generator */
export class Generator extends generators.Base {
    constructor(...args) {
        super(...args);

        //ARGUMENTS & CORRESPONDING VARIABLES

        // If user did not provide app name as argument create a sensible default
        this.argument('appname', {
            type: String,
            required: false });
        this.appname = this.appname || path.basename(process.cwd());
        this.appname = _.camelCase(this.appname); // as far as I can tell the camelCase method takes care of all the details that used to require lodash's slugify and humanize methods


        //USER & APPLICATION INFO
        this.option('github-username', {
            desc: 'What is your Github username?'
            type: String,
            store: true // Will set default to whatever was used last time
        });

        this.option('name', {
            message: 'What is your project\'s name?',
            type: String,
            default: this.appname // Default's to current dirname
        });

        //CUSTOM FLAGS & CORRESPONDING FILE EXTENSIONS
        this.option('typescript', {
            desc: 'Would you like to use typescript for Angular2?',
            type: Boolean,
            store: true
        });
        this.angularExtension = (this.options.typescript ? ".ts" : ".js");

        this.option('pug', {
            desc: 'Would you like to use Pug/Jade for templating?',
            type: Boolean,
            store: true
        });
        this.templateExtension = (this.options.pug ? ".pug" : ".html");

        this.option('gulp', {
            desc: 'Would you like to use Gulp to manage your project?',
            type: Boolean,
            store: true
        });

        this.option('mocha', {
            desc: 'Would you like to use Mocha for testing?',
            type: Boolean,
            store: true
        });

        this.option('mongoose', {
            desc: 'Would you like to enable MongooseJS (allow for schemas and validation)?',
            type: Boolean,
            store: true
        });

        this.option('passport', {
            desc: 'Would you like to enable PassportJS with default local authentication strategy (allow for user authentication)?',
            type: Boolean,
            store: true
        });

        this.option('crud', {
            desc: 'Would you like to generate an ExpressJS template for basic CRUD functionality?',
            type: Boolean,
            store: true
        });
    }

    //NOTE: Using ES6 Syntax
    // get initializing() {
    //     return {
    //         init: function() {
    //             this.
    //         }
    //     }
    // }

    // Uses inquirer.js async promises
//     prompting: function() {
//         return this.prompt(
//             [
//                 {
//                     type: 'input',
//                     name: 'username',
//                     message: 'What is your Github username?',
//                     store: true // Will set default to whatever was used last time
//                 },
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: 'What is your project\'s name?',
//                     default: this.appname // Default's to current dirname
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'typescript',
//                     message: 'Would you like to use typescript for Angular2?',
//                     store: true
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'pug',
//                     message: 'Would you like to use Pug/Jade for templating?',
//                     store: true
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'gulp',
//                     message: 'Would you like to use Gulp to manage your project?',
//                     store: true
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'mocha',
//                     message: 'Would you like to use Mocha for testing?',
//                     store: true
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'mongoose',
//                     message: 'Would you like to enable MongooseJS (allow for schemas and validation)?',
//                     store: true
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'passport',
//                     message: 'Would you like to enable PassportJS with default local authentication strategy (allow for user authentication)?',
//                     store: true
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'crud',
//                     message: 'Would you like to generate an ExpressJS template for basic CRUD functionality?',
//                     store: true
//                 },
//             ]
//         ).then(function(answers) {
//             //NOTE: Use generator.log function instead of env specific methods (e.g. console.log)
//             //
//             // this.log('user name: ', answers.username);
//             // this.log('app name: ', answers.name);
//             // this.log('typescript: ', answers.typescript);
//             // this.log('pug: ', answers.pug);
//             // this.log('gulp: ', answers.gulp);
//             // this.log('mocha: ', answers.mocha);
//             // this.log('mongoose: ', answers.mongoose);
//             // this.log('passport: ', answers.passport);
//             // this.log('crud: ', answers.crud);
//
//             if (answers.name) {
//                 this.composeWith("komodo-mean:server", {
//                     options: {
//                         nested: true,
//                         appname: answers.name,
//                         mongoose: answers.mongoose,
//                         passport: answers.passport,
//                         crud: answers.crud
//                     }
//                 },
//                 {
//                     local: require.resolve("./../server")
//                 });
//
//
//                 this.composeWith("komodo-mean:client", {
//                     options: {
//                         nested: true,
//                         appname: answers.name,
//                         typescript: answers.typescript,
//                         pug: answers.pug
//                     }
//                 },
//                 {
//                     local: require.resolve("./../client")
//                 });
//             }
//
//             else {
//                 this.log('Invalid app name: ', answers.name);
//             }
//
//         }.bind(this));
//     }
// });
//     }
// }
