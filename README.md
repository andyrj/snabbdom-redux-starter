# snabbdom-redux-starter
## version 0.1.0
**WIP**
*Note* still in the process of moving over code from a refactor in another project of mine, the counter and todo reducers are going to be rewritten around redux-tcomb and an example redux-saga will be added shortly.

[![Codacy Badge](https://api.codacy.com/project/badge/grade/bfe1f76098834c8490f786e4a677e13a)](https://www.codacy.com/app/andyrjohnson82/snabbdom-redux-starter)
[![David](https://david-dm.org/andyrj/snabbdom-redux-starter.svg)](https://david-dm.org/andyrj/snabbdom-redux-starter)

Because when you start over engineering something you might as well go all the way!

Single page universal javascript application utilizing the following technologies:
* Universal Hot Reloading - Single command runs a complete hot reloading development environment server side and client side basic setup comes from [glenjamin/ultimate-hot-reloading-example](https://github.com/glenjamin/ultimate-hot-reloading-example).
* snabbdom - pure functional virtual dom view layer.
* Redux - Single state atom for applications view layer, all the view logic does is read state from redux and dispatch actions, creating the unidirectional dataflow.
* redux-tcomb (Type-safety/Immutability) - adds development type safety and immutability guarantees, which are removed in production build for performance.
* icepick - immutability helper functions, combined with redux-tcomb this provides a large part of what heavier libraries like Mori/Immutable.JS provide.
* Custom event delegation - initially used most.js but found a bug that caused missing scroll events and decided to make my own simple event delegation layer instead.
* Custom Routing - I did not find a router that suited my purpose so I decided to build my own simple html5 history router that is universal and stores it's state in redux.
* snabbdom-to-html - Used for server side render of snabbdom.
* Mocha - Test Driven Development ready (still using it only when it won't slow me down or will assist in completing a module, but I see the value in this development paradigm)
* Webpack - Bundler and build tool, also being utilized for it's Hot Module Reloading.
* Express - Being used to host universal javascript, RESTful api, and development server with HMR.
* Bourbon/Bitters/Neat - for SCSS style pre-processing.
* Custom Pre-rendering (static content) - This project can be run either with NodeJS serving the site dynamically, or using src/static/index to output the site/ directory which will be filled with pre-rendered content to hosted however you see fit (github pages, google cloud bucket site, s3 site, apache, nginx, etc...)

## Basic Usage

To begin running and debugging project run: (currently has a ~20 second delay for initial runtime to allow for everything to be compiled and run properly from one command, luckily you only ever need to run this once when you start developing)

npm start

This will start a node-inspector on localhost:9000 for debugging server side code, and the site will be hot module reloading at localhost:3000.

For the in browser test suite run the following:

npm run test:dev

This will launch the webpack in browser mocha test suite runner, it will automatically run only new or test for code you modify, which makes it really performant and nice.

For the nodejs test suite run the following:

npm test

This will create a test bundle at test/test.node.bundle.js and run it with mocha on the command-line.

For eslint run the following:

npm run lint
npm run lint:fix

This will lint your code and run auto corrections respectively.

If you want to get production ready minified output run:

npm run build:prod

If you would like to generate a static html site based on your production build from abouve run the following commands after a successful production build.

These will need to be in seperate terminals.

npm run start:prod
npm run start:static

static html will be output to site/ for all routes you have defined in src/routes.js

I will add more detailed documentation on how everything is put together eventually
