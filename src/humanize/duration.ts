import { HumanizeDurationLanguage, HumanizeDuration } from 'humanize-duration-ts';

// Might want to provide a few defaults here, for example conversational for messages
// vs 'short string' for progress bar annotations etc.

// Also consider shimming on the 'ago' adverb option from
// https://github.com/cmldk/HumanizeDuration.js

export type { HumanizeDurationOptions } from 'humanize-duration-ts';
export const duration = new HumanizeDuration(new HumanizeDurationLanguage()).humanize

