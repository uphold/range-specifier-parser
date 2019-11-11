# Range Specifier Parser

[![npm version][npm-image]][npm-url] [![build status][travis-image]][travis-url]

A parser to handle [Range Pagination Headers](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).

_Inspired by [range-parser](https://github.com/jshttp/range-parser)_.

## Installation

`yarn add range-specifier-parser`

## Usage

The parser receives a `byte-ranges-specifier` as its only argument.

```javascript
const parser = require('ranges-specifier-parser');

parser('bytes=0-499');
```

## Output

The parser outputs an object with the following properties according to the [Byte Ranges](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1) spec:

```javascript
{
  first: 0, // `first-byte-pos`.
  last: 499, // `last-byte-pos`.
  unit: 'bytes' // `bytes-unit`.
}
```

## Running tests

```sh
yarn test
```

## Release

`yarn release [major | minor | patch | <custom version number>] # default: patch`

## License

MIT

[npm-image]: https://img.shields.io/npm/v/range-specifier-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/range-specifier-parser
[travis-image]: https://img.shields.io/travis/seegno/range-specifier-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/range-specifier-parser
