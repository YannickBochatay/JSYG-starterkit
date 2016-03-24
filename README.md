# Starter kit for single page app


### Installation

* download and extract [zip](https://github.com/YannickBochatay/JSYG-starterkit/archive/master.zip)

* move to directory JSYG-starterkit-master

* enter command
```shell
npm install
```
It can takes several minutes

* patch the *extract-text-webpack-plugin*.

Open *node_modules/extract-text-webpack-plugin/index.js* and add the following line after line 21
```javascript
if (typeof c === 'undefined') return;
```
That's pretty ugly, but we are waiting for a [new release](https://github.com/webpack/extract-text-webpack-plugin/issues/115)


### Get started
```shell
npm run start
```
Build app and launch the dev-server with hot reload.
You have to open your browser and go to *http://localhost:8080/*.


```shell
npm run test
```
Run tests with Karma and Jasmine. All files with *.test.js* or *.test.jsx* inside *src/* directory will be executed, with hot reload.




### Features

* ES6 syntax and JSX with [Babel](https://babeljs.io/)

* Code quality with [ESLint](http://eslint.org/)

* smart auto-build and reload with [WebPack](https://webpack.github.io/)

* [React](https://facebook.github.io/react/) components

* [React-router](https://github.com/reactjs/react-router/) with dynamic loading for [huge apps](https://github.com/reactjs/react-router/tree/master/examples/huge-apps)

* Testing environment with [Karma](https://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/)


