# iter-map

## Description

Missing map over `Iterable`, similar to Array.map.

## Install

```bash
bun add @fightingdreamer/iter-map
```

## Usage

```js
import {map} from '@fightingdreamer/iter-map'

const vector = [1,2,3][Symbol.iterator]()
const result = Array.from(map(vector, (v, i) => v * i)).at(-1)
const expect = 6
console.assert(result == expect)
```

## Usage (node / commonjs)

```js
const {map} = require('@fightingdreamer/iter-map')

const vector = [1,2,3][Symbol.iterator]()
const result = Array.from(map(vector, (v, i) => v * i)).at(-1)
const expect = 6
assert(result == expect)
```

## Functions
```js
function* map<T, R>(
  iterator: Iterable<T>,
  callbackFn: (item: T, index: number) => R,
): Generator<R>
```
Will yield converted items from `iterator` as output being consumed.
