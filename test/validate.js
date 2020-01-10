import test from 'ava'
import {validate} from '../src'
import ids from './_fixtures'

test('should be true', t => {
  for (const id of ids) {
    t.true(validate(id))
  }
})

test('should be false', t => {
  for (const id of ids) {
    const fakeId = `${id.slice(0, 17)}Y`
    t.false(validate(fakeId))
  }
})

test('should ignore case', t => {
  for (const id of ids.filter(id => id[17].toLowerCase() === 'x')) {
    t.true(validate(id.toLowerCase()))
    t.true(validate(id.toUpperCase()))
  }
})

test('should accept check bit', t => {
  const id = ids[0]
  const checksum = id[17]

  t.true(validate(id, checksum))
  t.false(validate(id, 'y'))
})
