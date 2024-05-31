import slugify, { Options } from '@sindresorhus/slugify';
import { removeStopwords } from './remove-stopwords.js';

export interface SlugOptions extends Options {
  /**
   * Remove stopwords from the string before slugifying it. Defaults to TRUE,
   * removing common English words. Custom stopword lists can be passed in as an array.
   * Setting this to FALSE skips stopword removal.
   */
  stopwords?: boolean | string[],
}

export function toSlug(input: string, options: SlugOptions = {}) {
  const opt: SlugOptions = {
    decamelize: true,
    lowercase: true,
    separator: '-',
    stopwords: true,
    customReplacements: [["'", ""]],
    ...options
  }
  if (opt.stopwords) {
    if (opt.stopwords === true) {
      input = removeStopwords(input, true).join(' ');
    } else {
      input = removeStopwords(input, true, opt.stopwords).join(' ');
    }
  };

  return slugify(input, opt);
}
