# Starter kit for single page app.


### Installation

* download and extract [zip](https://github.com/YannickBochatay/JSYG-starterkit/archive/master.zip)

* move to directory JSYG-starterkit-master

* enter command
```shell
npm install
```
It can takes several minutes

* patch the *extract-text-webpack-plugin*.
Open *node_modules/extract-text-webpack-plugin/index.js* add the following line after line 21
```javascript
if (typeof c === 'undefined') return;
```
That's pretty ugly, but we are waiting for a [new release](https://github.com/webpack/extract-text-webpack-plugin/issues/115)


### Get started
```shell
npm run start
```
Build app and launch the dev-server.


```shell
npm run test
```
Run tests with karma




### Features

* ES6 syntax with [Babel](https://babeljs.io/)

* Code quality with [ESLint](http://eslint.org/)

* smart auto-build application with [webpack](https://webpack.github.io/)

* [React](https://facebook.github.io/react/) components

* Testing environment with [karma](https://karma-runner.github.io/)


