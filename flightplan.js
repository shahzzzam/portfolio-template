var plan = require('flightplan');

var host = '108.167.189.59'
var username = 'samarthmshah';

// configuration
plan.target('production', [
  {
    host: host,
    username: username,
    port: 2222,
    agent: process.env.SSH_AUTH_SOCK
  },
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '~/www/');
});

// HIGH LEVEL ======

// var plan = require('flightplan');
//
// var appName = 'samarth.xyz';
// var host = '108.167.189.59'
// var username = 'samarthmshah';
// var startFile = 'bin/www';
//
// var tmpDir = appName+'-' + new Date().getTime();
//
// // configuration
// plan.target('staging', [
//   {
//     host: host,
//     username: username,
//     agent: process.env.SSH_AUTH_SOCK
//   }
// ]);
//
// plan.target('production', [
//   {
//     host: host,
//     username: username,
//     agent: process.env.SSH_AUTH_SOCK
//   }
// ]);
//
// // run commands on localhost
// plan.local(function(local) {
//   // uncomment these if you need to run a build on your machine first
//   // local.log('Run build');
//   // local.exec('gulp build');
//
//   local.log('Copy files to remote hosts');
//   var filesToCopy = local.exec('git ls-files', {silent: true});
//   // rsync files to all the destination's hosts
//   local.log('/tmp/' + tmpDir);
//   local.transfer(filesToCopy, '/tmp/' + tmpDir);
// });
//
// // run commands on remote hosts (destinations)
// plan.remote(function(remote) {
//   remote.log('Move folder to root');
//   remote.log('sudo cp -R /tmp/' + tmpDir + ' ~');
//   remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
//   remote.log('rm -rf /tmp/' + tmpDir);
//   remote.rm('-rf /tmp/' + tmpDir);
//
//   remote.log('Install dependencies');
//   remote.log('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir);
//   remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});
//
//   remote.log('Reload application');
//   remote.log('sudo ln -snf ~/' + tmpDir + ' ~/'+appName)
//   remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
//   remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});
//   remote.exec('forever start ~/'+appName+'/'+startFile);
// });
