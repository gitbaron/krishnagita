#!/usr/bin/env node

// uvach in sanskrit means said or spoke

process.title = 'gita-uvach';

var gita = require('./res/gita');
var strings = require('./res/strings');

function uvach(adhyaya, shloka) {
  // adhyaya needs to be a number from 0 (for the preface) through 18
  if (parseInt(adhyaya) != NaN && adhyaya > 0 && adhyaya < 19) {
    // get the number of shloka for this adhyaya
    var numShloka = parseInt(gita[adhyaya].numShloka);
    if (shloka == 'title') {
      console.log(strings.msgTitle, adhyaya, gita[adhyaya].title);
    } else if (parseInt(shloka) != NaN && shloka > 0 && shloka <= numShloka) {
      console.log(strings.msgUvach, adhyaya, shloka, gita[adhyaya][shloka]);
    } else {
      console.log(strings.errInvalidShloka, shloka, adhyaya);
    }
    console.log(strings.msgShlokaNum, numShloka);
  } else {
    console.log(strings.errInvalidAdhyaya, adhyaya);
    console.log(strings.msgAdhyayaNum);
    showUsage();
  }
}

function showUsage() {
  //console.log(process.argv);
  console.log(strings.msgUsage);
}

//console.log(parseInt(process.argv[2]));
// Main operation of this code.
switch (process.argv.length) {
  case 0:
  case 1:
  case 2:
    // if at least the adhyaya number is not passed, show the usage of program.
    showUsage();
    break;
  case 3:
    // if only the adhyaya number is passed, display only the title of the adhyaya.
    uvach(process.argv[2], 'title');
    break;
  case 4:
    // if both adhyaya number and shloka number are passed, show the shloka.
    uvach(process.argv[2], process.argv[3]);
    break;
  default:
    showUsage();
}
