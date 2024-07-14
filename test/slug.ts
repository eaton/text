import test from 'ava';
import { toSlug } from '../src/index.js';

const sentences = 'A normal string of text. some MIGHT be Capitalized.';
const punctuated = `Now, I'm *really* pissed off...`;

test('long slug', t => { 
  t.is(toSlug(sentences), 'normal-string-text-capitalized');
});

test('no stopwords', t => { 
  t.is(toSlug(sentences, { stopwords: false }), 'a-normal-string-of-text-some-might-be-capitalized');
});

test('punctuation', t => { 
  t.is(toSlug(punctuated, { stopwords: false }), 'now-im-really-pissed-off');
  t.is(toSlug(punctuated, { stopwords: true }), 'im-really-pissed-off');
});

