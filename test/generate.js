import test from 'ava'
import {generate} from '../src/index.js'
import ids from './_fixtures.js'

test('should generate right checksum', (t) => {
  for (const id of ids) {
    t.is(generate(id), id[17])
  }
})
