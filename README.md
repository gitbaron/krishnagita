# krishnagita
A simple cli for Gita verses.

The text for Gita has been retrieved from sacred-texts. http://www.sacred-texts.com/hin/mbs/mbs06023.htm
It has been converted to JSON using the following regex string replacements.
1. replace \n with |
2. replace [0-9]+ with |",\n"$&":"
3. replace "<space> with "
4. cleanup, remove extra characters from beginning and add a " at the end
5. wrap entire text with { } and reformat as json.

