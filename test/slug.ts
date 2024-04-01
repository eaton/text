import test from 'ava';
import { toSlug } from '../src/index.js';

const sentences = 'A normal string of text. some MIGHT be Capitalized.';
test('long slug', t => { 
  t.is(toSlug(sentences), 'a-normal-string-of-text-some-might-be-capitalized');
});