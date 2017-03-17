# krishnagita
A simple cli for Gita verses.
This creates a new command 'uvach' on your machine which can be used to output a gita verse on your command line.

## Thanks to Sacred-Texts.com
The text for Gita has been retrieved from sacred-texts. http://www.sacred-texts.com/hin/mbs/mbs06023.htm
It has been converted to JSON using the following regex string replacements.
1. replace \n with |
2. replace [0-9]+ with |",\n"$&":"
3. replace "<space> with "
4. cleanup, remove extra characters from beginning and add a " at the end
5. wrap entire text with { } and reformat as json.

## Installing locally
Execute the following command on your computer.
'''
$ sudo install -g krishnagita
'''

## Simple usage
The following is a simple usage of the program.
'''
$ uvach <adhyaya number> [<shloka number>]
'''

Adhyaya in sanskrit means chapter. Srimad Bhagvat Gita has 18 adhyaya.
Shloka means verse in sanskrit. Each adhyaya has various number of shloka.

