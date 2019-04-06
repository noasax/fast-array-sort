[![Build Status](https://travis-ci.org/noasax/fast-array-sort.svg?branch=master)](https://travis-ci.org/noasax/fast-array-sort)
[![Coverage Status](https://coveralls.io/repos/github/noasax/fast-array-sort/badge.svg?branch=master)](https://coveralls.io/github/noasax/fast-array-sort?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/noasax/fast-array-sort/badge.svg?targetFile=package.json)](https://snyk.io/test/github/noasax/fast-array-sort?targetFile=package.json)

# fast-array-sort

## Installation

```bash
npm install fast-array-sort
```

## Usage

### JavaScript

```javascript
const sort = require("../src/index");

console.log(sort([4, 2, 5, 1, 3]));
// [ 1, 2, 3, 4, 5 ]

const arr = [
  { order: 1, name: "apple" },
  { order: 5, name: "banana" },
  { order: 4, name: "candy" },
  { order: 2, name: "dollar" },
  { order: 3, name: "emit" },
];
console.log(sort(arr, (l, r) => l.order < r.order));
/*
[
  { order: 1, name: "apple" },
  { order: 2, name: "dollar" },
  { order: 3, name: "emit" },
  { order: 4, name: "candy" },
  { order: 5, name: "banana" },
]
*/
```

### TypeScript

```typescript
import sort from "../src/index";

console.log(sort([4, 2, 5, 1, 3]));
// [ 1, 2, 3, 4, 5 ]

const arr: any[] = [
  { order: 1, name: "apple" },
  { order: 5, name: "banana" },
  { order: 4, name: "candy" },
  { order: 2, name: "dollar" },
  { order: 3, name: "emit" },
];
sort(arr, (l: any, r: any) => l.order < r.order);
```
