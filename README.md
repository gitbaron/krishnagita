# krishnagita
A npm package for a simple cli for Gita verses.
This creates a new command `uvach` on your machine which can be used to print a gita verse on your command line given the adhyaya and optionally the shloka number. Adhyaya in sanskrit means chapter. Srimad Bhagvat Gita has 18 adhyaya. Shloka means verse in sanskrit. Each adhyaya has various number of shloka.

## Installing locally
Execute the following command on your computer.
```
$ sudo npm install -g krishnagita
```
Leave out the `sudo` and `-g` option if you don't want this to be installed globally.

## Simple usage
The following is a simple usage of the program. At least the Adhyaya number is required. This outputs the title of the Adhyaya. Providing the optional shloka number after the adhyaya number will output the particular shloka from Gita.
```
$ uvach <adhyaya number> [<optional shloka number>]
```
