import test from 'ava';
import { humanize } from '../src/index.js';

test('url truncation', t => {
  const u = 'https://www.times.com/2004/12/this-is-some-url.html'
  t.is(humanize.url(u), 'times.com/…this-is-some-url.html');
});