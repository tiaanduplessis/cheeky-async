# cheeky-async

[![package version](https://img.shields.io/npm/v/cheeky-async.svg?style=flat-square)](https://npmjs.org/package/cheeky-async)
[![package downloads](https://img.shields.io/npm/dm/cheeky-async.svg?style=flat-square)](https://npmjs.org/package/cheeky-async)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/cheeky-async.svg?style=flat-square)](https://npmjs.org/package/cheeky-async)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

>  Some cheeky async versions of Array methods like `map`, `filter` and `reduce`. With support for sequential and parallel processing.

## Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Usage](#usage)
-   [Install](#install)
-   [Contribute](#contribute)
-   [License](#License)

## Usage

```js
import {map} from "cheeky-async"

await map([1, 2, 3], async (value) => {
  return value + (await getThingy())
})
```

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install cheeky-async
$ # OR
$ yarn add cheeky-async
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [map](#map)
    -   [Parameters](#parameters)
-   [filter](#filter)
    -   [Parameters](#parameters-1)
-   [every](#every)
    -   [Parameters](#parameters-2)
-   [some](#some)
    -   [Parameters](#parameters-3)
-   [reduce](#reduce)
    -   [Parameters](#parameters-4)

### map

Invoke an async transform/mapping function on each item in an Array returning the resulting Array of transformed/mapped items.
 Async async transform/mapping function is invoked **in parallel** by default.

> This is an async version of `Array.prototype.map()`.

#### Parameters

-   `array` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Array to map over
-   `mapper` **MapperFunction** Async function, gets passed `(value, index, array)`, returns the new value.
-   `config` **Config** Configuration

### filter

Invoke an async predicate function on each item in an Array returning the resulting Array with all items passing the condition of the predicate function.
 Async async predicate function is invoked **in parallel** by default.

> This is an async version of `Array.prototype.filter()`.

#### Parameters

-   `array` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Array to map over
-   `mapper` **PredicateFunction** Async function, gets passed `(value, index, array)`, returns the new value.
-   `config` **Config** Configuration

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** resulting mapped/transformed values.

### every

Invoke an async predicate function on each item in an Array returning true/false depending on **all** items passing the condition of the predicate function.
 Async async predicate function is invoked **in parallel** by default.

> This is an async version of `Array.prototype.every()`.

#### Parameters

-   `array` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Array to map over
-   `mapper` **PredicateFunction** Async function, gets passed `(value, index, array)`, returns the new value.
-   `config` **Config** Configuration

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** resulting mapped/transformed values.

### some

Invoke an async predicate function on each item in an Array returning true/false depending on **any** items passing the condition of the predicate function.
 Async async predicate function is invoked **in parallel** by default.

> This is an async version of `Array.prototype.some()`.

#### Parameters

-   `array` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Array to map over
-   `mapper` **PredicateFunction** Async function, gets passed `(value, index, array)`, returns the new value.
-   `config` **Config** Configuration

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>** resulting mapped/transformed values.

### reduce

Invoke an async reducer function on each item in an Array returning the resulting value.
 Async async reducer function is invoked **in sequence** by default.

> This is an async version of `Array.prototype.reduce()`.

#### Parameters

-   `array` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Array to reduce.
-   `reducer` **reducerFunction** Async function, gets passed `(accumulator, value, index, array)`, returns the new accumulator.
-   `config` **Config** Configuration

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** resulting value.

## Contribute

1.  Fork it and create your feature branch: `git checkout -b my-new-feature`
2.  Commit your changes: `git commit -am "Add some feature"`
3.  Push to the branch: `git push origin my-new-feature`
4.  Submit a pull request

## License

MIT 
    