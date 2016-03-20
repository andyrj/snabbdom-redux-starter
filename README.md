# snabbdom-redux-mori-starter
**WIP**
Use at your own peril

[![Codacy Badge](https://api.codacy.com/project/badge/grade/bfe1f76098834c8490f786e4a677e13a)](https://www.codacy.com/app/andyrjohnson82/snabbdom-redux-mori-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/coverage/bfe1f76098834c8490f786e4a677e13a)](https://www.codacy.com/app/andyrjohnson82/snabbdom-redux-mori-starter)
[![David](https://david-dm.org/andyrj/snabbdom-redux-mori-starter.svg)](https://david-dm.org/andyrj/snabbdom-redux-mori-starter)


Because when you start over engineering something you might as well go all the way!

Single page universal javascript application utilizing the following technologies:
* Universal Hot Reloading - Single command runs a complete hot reloading development environment server side and client side basic setup comes from [glenjamin/ultimate-hot-reloading-example](https://github.com/glenjamin/ultimate-hot-reloading-example).
* snabbdom - pure functional virtual dom view layer.
* Redux - Single state atom for applications view layer, all the view logic does is read state from redux and dispatch actions, creating the unidirectional dataflow.
* Mori - immutable datastructures from Clojure being used with Redux to more efficiently handle immutable data updates in the state atom.
* most - performant reactive library for stream processing, used for event delegation.
* when - promise library.
* rest - restful api client library works on both browser and node.
* Custom Routing - I did not find a router that suited my purpose so I decided to build my own simple html5 history router that is universal and stores it's state in redux with mori.
* snabbdom-to-html - Used for server side render of snabbdom.
* Mocha - Test Driven Development ready (still using it only when it won't slow me down on this project, but I see the value in this development paradigm)
* Webpack - Bundler and build tool, also being utilized for it's Hot Module Reloading.
* Express - Being used to host universal javascript, RESTful api, and development server with HMR.
