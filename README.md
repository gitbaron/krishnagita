# krishnagita
A npm package for a simple cli for Gita verses.
This creates a new command `uvach` on your machine which can be used to print a gita verse on your command line given the adhyaya, and optionally the shloka number. Adhyaya in sanskrit means chapter. Srimad Bhagvat Gita has 18 adhyaya. Shloka means verse in sanskrit. Each adhyaya has various number of shloka aslisted below.

| Adhyaya | Number of Shloka |
| ------- | ---------------: |
| 1 | 47 |
| 2 | 72 |
| 3 | 43 |
| 4 | 42 |
| 5 | 29 |
| 6 | 47 |
| 7 | 30 |
| 8 | 28 |
| 9 | 34 |
| 10 | 42 |
| 11 | 55 |
| 12 | 20 |
| 13 | 34 |
| 14 | 27 |
| 15 | 20 |
| 16 | 24 |
| 17 | 28 |
| 18 | 78 |


## Installing locally
Execute the following command on your computer. Leave out the `-g` option if you don't want this to be installed globally.

```bash
$ npm install -g krishnagita
```

## Tests

```bash
$ npm test
```

## Simple usage
The following is a simple usage of the program on the command line. The Adhyaya number is required as the first argument and has a value of 1 to 18. If the shloka number is not provided the title of the Adhyaya is returned. Providing the optional shloka number after the adhyaya number will output the particular shloka from Gita.

```bash
$ uvach <adhyaya number> [<optional shloka number>]
```

## Release History

* 1.0.6 Added unit tests
* 1.0.5 Initial Release of the uvach cli, prints the shloka in english.

## License

This code has been released under the [UNLICENSE][].

[UNLICENSE]:LICENSE
