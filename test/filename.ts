import test from 'ava';
import { toFilename } from '../src/index.js';

const sentences = 'A big/bad combination: It breaks paths!';
test('long slug', t => { 
  t.is(toFilename(sentences), 'A big!bad combination! It breaks paths!');
});