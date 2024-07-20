# cin-checksum

> Citizen identification number(GB 11643-1999) Checksum

## Install

```bash
yarn add cin-checksum
```

## Files

```text
dist/
├─ index.js         ( UMD )
├─ index.min.js     ( UMD, compressed )
├─ index.mjs        ( ES Module )
├─ index.min.mjs    ( ES Module, compressed )
├─ index.cjs        ( CommonJS )
└─ index.min.cjs    ( CommonJS, compressed )
```

## Usage

### browser

```html
<!-- ES Module -->
<script type="module">
  import {
    generateCinCheckNumber,
    isInvalidCinNumber,
  } from 'https://unpkg.com/cin-checksum?module'
</script>

<!-- UMD -->
<script src="https://unpkg.com/cin-checksum" nomodule></script>
```

`UMD` build exports a global object `CIN` contains two methods `CIN.generateCinCheckNumber` and `CIN.isInvalidCinNumber`

### node

```js
// ES Module
import {generateCinCheckNumber, isInvalidCinNumber} from 'cin-checksum'
```

## API

### generateCinCheckNumber(masterNumber)

Generate check number (校验码) with master number (本体码, leading 17 digits of CIN number).

```js
generateCinCheckNumber('11010519491231002')
// -> 'X'

generateCinCheckNumber('44052418800101001')
// -> '4'
```

#### `masterNumber`

- type: `string`

Master number (本体码, leading 17 digits of CIN number) to generate check number (校验码).

### isInvalidCinNumber(cinNumber)

Check given CIN number has invalid check bit.

> [!Warning]
> This function does not check area code (地址码), birth date (出生日期码), and order code (顺序码).

```js
isInvalidCinNumber('11010519491231002X')
// -> true
```

#### cinNumber

- type: `string`

CIN number (case insensitive).

```js
isInvalidCinNumber('11010519491231002X')
// -> true

isInvalidCinNumber('11010519491231002x')
// -> true

isInvalidCinNumber('110105194912310020')
// -> true
```
