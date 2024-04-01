import { removeStopwords as remove } from 'stopword';

/**
 * Given a string or an array of strings, strip out all "stop words", returning
 * an array of the remaining words. By default, words will also be scrubbed of
 * punctuation and converted to lowercase.
 */
export function removeStopwords(input: string | string[], scrub = true, stopwords?: string[]): string[] {
  let words = (Array.isArray(input)) ? input : [input];
  if (typeof input === 'string' || scrub) {
    words = words
      .join(' ')
      .toLocaleLowerCase()
      .replaceAll(/[^\w\s-]+/g, ' ')
      .replaceAll(/\s+/g, ' ')
      .trim().split(' ');
  }

  return remove(words, stopwords);
}