#!/usr/bin/env node

// uvach in sanskrit means said or spoke

process.title = 'gita-uvach';

var gita = require('./res/gita');
var strings = require('./res/strings');

function uvach(adhyaya, shloka) {
    // adhyaya needs to be a number from 0 (for the preface) through 18
    if (parseInt(adhyaya) != NaN && adhyaya > 0 && adhyaya < 19) {
        // get the number of shloka for this adhyaya
        var numShloka = gita[adhyaya].numShloka;
        console.log("This adhyaya has " + numShloka + " shloka.");
        if (shloka == "title") {
            console.log("Gita adhyaya " + adhyaya + " title is\n" + gita[adhyaya].title);
        } else if (parseInt(shloka) != NaN && shloka > 0 && shloka <= numShloka) {
            console.log("Gita adhyaya " + adhyaya + ": shloka " + shloka + " is\n" + gita[adhyaya][shloka]);
        } else {
            console.log(strings.invalid_shloka + shloka + " for this adhyaya:" + adhyaya);
            console.log(strings.valid_shloka + numShloka);
        }
    } else {
        console.log(strings.invalid_adhyaya + adhyaya);
        showUsage();
    }
}

function showUsage() {
    //console.log(process.argv);
    console.log(strings.usage);
}

//console.log(parseInt(process.argv[2]));
switch (process.argv.length) {
    case 0:
    case 1:
    case 2:
        showUsage();
        break;
    case 3:
        // if only the adhyaya number is passed, display the title only.
        uvach(process.argv[2], "title");
        break;
    case 4:
        // if both adhyaya number and shloka number are passed, show the shloka
        uvach(process.argv[2], process.argv[3]);
        break;
    default:
        showUsage();
}
