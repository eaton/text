import { canParse, normalize, NormalizerOptions  } from "@eatonfyi/urls";
import path from "path";

export interface HumanizeUrlOptions extends NormalizerOptions {
  tooLong?: number,
  truncate?: 'middle' | 'end'
}

const defaults: HumanizeUrlOptions = {
  tooLong: 24,
  truncate: 'middle'
}

export function url(input: string | URL, options: HumanizeUrlOptions = {}) {
  const opt = { ...defaults, ...options };
  const url = normalize(input, opt);
  if (url.subdomain === 'www') url.subdomain = undefined;

  let pathName = url.pathname.replace('/', '')
  if (url.pathname.length > (opt.tooLong ?? 24)) {
    pathName = url.pathname = '…' + url.path.pop();
  }
  return [url.hostname, pathName].join('/')
}