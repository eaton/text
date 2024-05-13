import test from 'ava';
import { removeStopwords } from '../src/index.js';

const sentences = 'A normal string of text. some MIGHT be Capitalized.';
test('default english', t => {
  t.is(removeStopwords(sentences).join(' '), 'normal string text capitalized');
});