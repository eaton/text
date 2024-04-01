import slugify, { Options } from '@sindresorhus/slugify';

export function toSlug(input: string, options: Options = {}) {
  return slugify(input, {
    decamelize: true,
    lowercase: true,
    separator: '-',
    ...options
  });
}
