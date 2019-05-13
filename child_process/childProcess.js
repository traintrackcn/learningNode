const childProcess = require('child_process');


var exec = require('child_process').exec;
var path = require('path');

var parentDir = path.resolve(process.cwd(), '..');

console.log('parentDir ->', parentDir);
console.log('process.cwd() ->', process.cwd());

exec('pwd', {
  cwd: '/home/user/directory'
}, (error, stdout, stderr) => {
  // work with result
  console.log('stdout ->', stdout);
});

// childProcess.exec('cd /Spark/auto-deploy/scripts && ./deploy.sh', (err, stdout, stderr) => {
    
// });