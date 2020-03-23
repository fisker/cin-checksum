import test from 'ava'
import {generate} from '../src'
import ids from './_fixtures'

test('should generate right checksum', (t) => {
  for (const id of ids) {
    t.is(generate(id), id[17])
  }
})
