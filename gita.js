#!/usr/bin/env node

process.title = 'gita-uvach';

var gita = require('./res/gita');
var strings = require('./res/strings');

function uvach(adhyaya, shloka) {
    console.log(gita[adhyaya][shloka]);
}

function showUsage() {
    console.log(strings["usage"]);
}

console.log(parseInt(process.argv[2]));

switch (process.argv.length) {
    case 3:
        if (parseInt(process.argv[2]) != NaN ) {
            uvach(process.argv[2], "title");
        } else {
            console.log("Invalid adhyaya number:" + process.argv[2]);
            showUsage();
        }
        break;
    case 4:
        uvach(process.argv[2], process.argv[3]);
        break;
    default:
        showUsage();
}
