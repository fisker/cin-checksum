# cin-checksum

> Citizen identification number(GB 11643-1999) Checksum

## Install

```sh
yarn add cin-checksum
```

## Files

```text
lib/
├─ index.js         ( UMD )
├─ index.min.js     ( UMD, compressed )
├─ index.mjs        ( ES Module )
└─ index.min.mjs    ( ES Module, compressed )
```

## Usage

### browser

```html
<!-- ES Module -->
<script type="module">
  import {generate, validate} from 'https://unpkg.com/cin-checksum?module'
</script>

<!-- UMD -->
<script src="https://unpkg.com/cin-checksum" nomodule></script>
```

`UMD` build exports a global object `CIN.checksum` contains two methods `CIN.checksum.generate` and `CIN.checksum.validate`

### node

```js
// ES Module
import {generate, validate} from 'cin-checksum'
```

```js
// UMD
const {generate, validate} from 'cin-checksum'
```

## API

### generate(parts)

generate checksum by parts

```js
generate('11010519491231002')
// -> 'X'

generate('44052418800101001')
// -> '4'
```

#### parts

first 17 digits to generate checksum

### validate(parts, checkBit?)

```js
validate('11010519491231002X')
// -> true
```

#### parts

- first 17/18 digits to validate
- type: `string`

```js
validate('11010519491231002X')
// -> true

validate('11010519491231002', 'x')
// -> true
```

#### checkBit

- checkBit to validate
- type: `string`
- default: parts[17]

```js
validate('11010519491231002X')
// -> true

validate('11010519491231002X', '0')
// -> false
```
