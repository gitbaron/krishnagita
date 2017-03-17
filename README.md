# krishnagita
A simple cli for Gita verses.
This creates a new command `uvach` on your machine which can be used to print a gita verse on your command line given the adhyaya and optionally the shloka number. Adhyaya in sanskrit means chapter. Srimad Bhagvat Gita has 18 adhyaya. Shloka means verse in sanskrit. Each adhyaya has various number of shloka.

## Installing locally
Execute the following command on your computer.
```
$ sudo install -g krishnagita
```
Leave out the `sudo` and `-g` option if you don't want this to be installed globally.

## Simple usage
The following is a simple usage of the program.
```
$ uvach <adhyaya number> [<shloka number>]
```

## Thanks to Sacred-Texts.com
The text for Gita has been retrieved from sacred-texts. http://www.sacred-texts.com/hin/mbs/mbs06023.htm
It has been converted to JSON using the following regex string replacements.
0. remove all leading spaces. Select all and `<shift> <tab>` to shift indent left till there is no space in the beginning of the line,
1. replace `EOL character or \n` with `|` to demarcate the various stanzas,
2. replace `[0-9]+` with `|",\n"$&":"` to apply the right formatting and double quotes for JSON Strings,
3. replace `"<space>` with `"` to remove the extra space in the beginning of the verses,
4. cleanup, remove extra characters from beginning and add a " at the end,
5. wrap entire text with { } and reformat as json.

