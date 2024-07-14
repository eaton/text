# Eaton's Text Manipulation Tools

A smorgasbord of helper functions for sanitizing, converting, and manipulating plain text.

## Case Change

The `toCase` export has a bunch of sub-functions that change a string's case. Some of the more useful ones include:

- `toCase.camel("This is a string. It's cool!") // output: thisIsAStringItsCool`
- `toCase.kabob("This is a string. It's cool!") // output: this-is-a-string-its-cool`
- `toCase.title("This is a string. It's cool!") // output: This is a String. It's Cool!`

## Sanitizing

- `undash()` and `straightenQuotes()` transform curly quotes and em dashes to simple low-ascii equivalents.
- `toSlug(input: string)` returns a URL-safe version of a string, with common english stopwords stripped out.
- `toFilename(input: string)` returns a string safe for use as a file name on Windows, MacOS, and UNIX.
- `removeStopwords(input: string)` lowercases, sanitizes, and strips common english stopwords from any string. It returns the results as an array of strings.
