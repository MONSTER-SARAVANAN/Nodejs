var path = require('path');

//normalization
console.log('normalization:'+normalize('/sssit/.javat/node/newfolder/tab/.'));

//join
console.log('joint path:'+path.join('/sssit:javat','node/newfolder','tab','..'));

//Resolve
console.log('resolve:'+path.resolve('Path.js'));
//Extension
console.log('ex name:'+path.extname('Path.js'));

