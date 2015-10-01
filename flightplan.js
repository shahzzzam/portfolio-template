const plan = require('flightplan');

const host = '108.167.189.59'
const username = 'samarthmshah';
const port = 2222

// configuration
plan.target('production', [
  {
    host: host,
    username: username,
    port: port,
    agent: process.env.SSH_AUTH_SOCK
  },
]);

// Take a Local flight
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  local.exec('cd dist/');
  const filesToCopy = local.exec('git ls-files', {silent: true});
  local.log(filesToCopy);
  const destinationAddress = '~/www/';
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, destinationAddress);
});
