import test from 'ava';
import { removeStopwords } from '../src/index.js';

const sentences = 'A normal string of text. some MIGHT be Capitalized.';
const punctuated = `Now, I'm *really* pissed off...`;

test('default english', t => {
  t.is(removeStopwords(sentences).join(' '), 'normal string text capitalized');
});

test('punctuated', t => {
  t.is(removeStopwords(punctuated).join(' '), 'm really pissed off');
});