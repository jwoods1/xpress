Xpress Design Co Client Application
===================================

### This projected used React Redux Starter kit as a foundation ###
- [stable v0.18.0 release](https://github.com/davezuko/react-redux-starter-kit/tree/v0.18.0)

Getting Started
---------------
Requirements
------------

Node `^5.0.0`



Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/jwoods1/xpress.git
$ cd xpress
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

* `npm start` - Spins up Koa server to serve your app at `localhost:3000`. HMR will be enabled in development.
* `npm run compile` - Compiles the application to disk (`~/dist` by default).
* `npm run dev:nw` - Same as `npm start`, but opens the redux devtools in a new window.
* `npm run dev:no-debug` - Same as `npm start` but disables redux devtools.
* `npm run deploy`- Runs linter, tests, and then, on success, compiles your application to disk.
* `npm run lint`- Lint all `.js` files.

### Heroku deployment
- Heroku is on a git hook listening on the master branch.
- Anything pushed to master branch will be pushed to the live heroku account.


### Configuration

Basic project configuration can be found in `~/config/_base.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the webpack build configuration**. If you need environment-specific overrides, create a file with the name of target `NODE_ENV` prefixed by an `_` in `~/config` (see `~/config/_production.js` for an example).

Common configuration options:

* `dir_src` - application source code base path
* `dir_dist` - path to build compiled application to
* `server_host` - hostname for the Koa server
* `server_port` - port for the Koa server
* `compiler_css_modules` - whether or not to enable CSS modules
* `compiler_source_maps` - whether or not to generate source maps
* `compiler_vendor` - packages to separate into to the vendor bundle
Structure
---------
The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── containers           # Components that provide context (e.g. Redux Provider)
│   ├── layouts              # Components that dictate major page structure
│   ├── redux                # Redux-specific pieces
│   │   ├── modules          # Collections of reducers/constants/actions
│   │   └── utils            # Redux-specific helpers
│   ├── routes               # Application route definitions
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── views                # Components that live at a route
│   └── main.js              # Application bootstrap and rendering
└── tests                    # Unit tests
```

Features
--------

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [Redux](https://github.com/rackt/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-devtools
    * use `npm run dev:nw` to display them in a separate window.
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^1.0.0`)
* [redux-simple-router](https://github.com/rackt/redux-simple-router) (`^1.0.0`)
* [Webpack](https://github.com/webpack/webpack)
  * [CSS modules!](https://github.com/css-modules/css-modules)
  * sass-loader
  * postcss-loader with cssnano for style autoprefixing and minification
  * Bundle splitting for app and vendor dependencies
  * CSS extraction during builts that are not using HMR (like `npm run compile`)
  * Loaders for fonts and images
* [Koa](https://github.com/koajs/koa) (`^1.0.0`)
  * webpack-dev-middleware
  * webpack-hot-middleware
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised
  * PhantomJS
  * Code coverage reports
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre) for:
    * react-transform-hmr (HMR for React components)
    * redbox-react (visible error reporting for React components)
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this!
  * Includes separate test-specific `.eslintrc` to work with Mocha and Chai
