# snabbdom-redux-starter
## version 0.1.0
**WIP**
Use at your own peril

[![Codacy Badge](https://api.codacy.com/project/badge/grade/bfe1f76098834c8490f786e4a677e13a)](https://www.codacy.com/app/andyrjohnson82/snabbdom-redux-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/coverage/bfe1f76098834c8490f786e4a677e13a)](https://www.codacy.com/app/andyrjohnson82/snabbdom-redux-starter)
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
