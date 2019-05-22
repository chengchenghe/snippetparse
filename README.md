# snippetparse

## npm

```js

In project:

  npm i --dev snippetparse

In global:

  npm i -g snippetparse

Maxos or Linux:

  sudo npm i -g snippetparse

```

## Use

- import package

```js
// cmd
$ npm i --dev snippetparse

// import package
const { snippetparse } = require('snippetparse')

// basic process.cwd()
let filePath = 'test/appo.vue'

// handle function
snippetparse(filePath)

```

- CLI

```js
// npm
$ npm i -g snippetparse

$ snippetparse -f test/appo.vue
or
$ spar -f test/appo.vue

=>code:
let filePath = 'test/appo.vue'
snippetparse(filePath)
=>result-file:
/project
- /test
  --appo.vue
  ++appo.vue.snippet
  ....



$ snippetparse -f test/appo.vue -of ./mysnippet
or
$ spar -f test/appo.vue -of ./mysnippet

=>code:
let filePath = 'test/appo.vue'
let outFilePath = 'mysnippet'
snippetparse(filePath)
=>result-file:
/project
- /test
  --appo.vue
- mysnippet.snippet

```

## Bin

```js
// cmd

$ spar(short cmd) -f <filepath> -of <outfilepath>

$ snippetparse -f <filepath> -of <outfilepath>

```

## Demo

- import package

```js
// cmd
$ cd node_modules/snippetparse

$ npm run test

```

- CLI

```js
// cmd
$ npm i -g snippetparse

$ cd node_modules/snippetparse

$ spar -f test/appo.vue

```

## Feature

- [x] support CLI

## Author

[Copyright © 2018-2019 hechengcheng.com](https://hechengcheng.com)

## License(协议)

MIT
