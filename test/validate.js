import test from 'ava'
import {isInvalidCinNumber} from '../src/index.js'
import ids from './_fixtures.js'

const idWithX = ids.find((id) => id.endsWith('X'))

test('Should return `false` on valid CIN numbers', (t) => {
  for (const id of ids) {
    t.false(isInvalidCinNumber(id))
  }
})

test('Should return `false` on invalid CIN numbers', (t) => {
  for (const id of ids) {
    const fakeId = `${id.slice(0, 17)}Y`
    t.true(isInvalidCinNumber(fakeId))
  }

  t.true(isInvalidCinNumber())
  t.true(isInvalidCinNumber('1'.repeat(17)))
  t.true(isInvalidCinNumber(Number('1'.repeat(18))))
  t.true(isInvalidCinNumber(idWithX.split('').reverse().join('')))
})

test('Should ignore cases', (t) => {
  t.false(isInvalidCinNumber(idWithX.toLowerCase()))
  t.false(isInvalidCinNumber(idWithX.toUpperCase()))
})

