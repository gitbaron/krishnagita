var gita = require('../res/gita');
var strings = require('../res/strings');

String.prototype.log = function() {
  var args = Array.prototype.slice.call(arguments);
  var rep= args.slice(0, args.length);
  var i=0;
  var output = this.replace(/%s|%d|%f|%@/g, function(match,idx) {
    var subst=rep.slice(i, ++i);
    return( subst );
  });
  return output;
}

function getAdhyayaTitle(adhyaya) {
  if (isNaN(adhyaya) || adhyaya < 0 || adhyaya > 18) throw new Error(strings.errInvalidAdhyaya.log(adhyaya));
  return gita[adhyaya].title;
}

function getShloka(adhyaya, shloka) {
  if (isNaN(adhyaya) || adhyaya < 0 || adhyaya > 18 ) throw new Error(strings.errInvalidAdhyaya.log(adhyaya));
  if (isNaN(shloka) || shloka < 0 || shloka > gita[adhyaya].numShloka) throw new Error(strings.errInvalidShloka.log(shloka, adhyaya));
  return gita[adhyaya][shloka];
}