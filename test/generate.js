import test from 'ava'
import {generateCinCheckNumber} from '../src/index.js'
import ids from './_fixtures.js'

test('should generate right checksum', (t) => {
  for (const id of ids) {
    t.is(generateCinCheckNumber(id.slice(0, 17)), id[17])
  }

  t.throws(()=> generateCinCheckNumber())
  t.throws(()=> generateCinCheckNumber(false))
  t.throws(()=> generateCinCheckNumber(ids[0]))
  t.throws(()=> generateCinCheckNumber('1'.repeat(16) + 'x'))
})
