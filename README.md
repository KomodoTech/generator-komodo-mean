INFO:

For now installation with yeoman (yo) starts at generators/app/index.js
Once the main generator gets user input, it will call other generators 
and pass them relevant user input.

At the moment it is designed to run like this:

1). yo runs generators/app/index.js and gets the following info:
        
        TODO: Decide whether to generate a basic .env file for user
        TODO: Decide whether to generate a single package.json file or one per generator that somehow get combined (e.g. npm package with nested node_modules)

        GENERAL
        appname: (can be passed in by user as argument)
        username: (github)
        
        FRONTEND
        typescript: (ts files should be used for angular)
        pug: (templating should probably be used)
        
        BACKEND
        crud: (whether or not to start user off with a basic express template)
        mongoose: (if crud is selected then build generic schema)
        passport: (using local strategy for now)
        
        DEVELOPMENT
        gulp: (dependent on everything else I assume)
        mocha: (tests should be run through gulp test or npm test)

2). Once user has given necessary info, call on corresponding generators to further customize generated project:

    1). call Server generator (generators/server/index.js):
        
        PASS IN OPTIONS:
            * appname
            * username
            * crud
            * mongoose
            * passport

        ACTIONS:
            * modify package.json to include server dependencies 
            * run npm install for server dependencies through yeoman's generator.npmInstall() method
            * build express skeleton




