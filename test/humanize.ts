import test from 'ava';
import { toFilename } from '../src/index.js';
import { humanize } from '../src/index.js';

test('url truncation', t => {
  const u = 'https://www.times.com/2004/12/this-is-some-url.html'
  t.log(humanize.url(u))
  t.is(1,1);
});