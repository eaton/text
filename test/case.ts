import test from 'ava';
import { toCase } from '../src/index.js';

const sentences = 'A normal string of text. some MIGHT be Capitalized.';

test('every case', t => { 
  t.is(toCase.camel(sentences), 'aNormalStringOfTextSomeMightBeCapitalized');
  t.is(toCase.capital(sentences), 'A Normal String Of Text Some Might Be Capitalized');
  t.is(toCase.constant(sentences), 'A_NORMAL_STRING_OF_TEXT_SOME_MIGHT_BE_CAPITALIZED');
  t.is(toCase.dot(sentences), 'a.normal.string.of.text.some.might.be.capitalized');
  t.is(toCase.first(sentences), 'A normal string of text. some MIGHT be Capitalized.');
  t.is(toCase.header(sentences), 'A-Normal-String-Of-Text-Some-Might-Be-Capitalized');
  t.is(toCase.kabob(sentences), 'a-normal-string-of-text-some-might-be-capitalized');
  t.is(toCase.lower(sentences), 'a normal string of text. some might be capitalized.');
  t.is(toCase.none(sentences), 'a normal string of text some might be capitalized');
  t.is(toCase.pascal(sentences), 'ANormalStringOfTextSomeMightBeCapitalized');
  t.is(toCase.path(sentences), 'a/normal/string/of/text/some/might/be/capitalized');
  t.is(toCase.sentence(sentences), 'A normal string of text some might be capitalized');
  t.is(toCase.snake(sentences), 'a_normal_string_of_text_some_might_be_capitalized');
  t.is(toCase.swap(sentences), 'a NORMAL STRING OF TEXT. SOME might BE cAPITALIZED.');
  t.is(toCase.title(sentences), 'A Normal String of Text. Some MIGHT Be Capitalized.');
  t.is(toCase.upper(sentences), 'A NORMAL STRING OF TEXT. SOME MIGHT BE CAPITALIZED.');
})
