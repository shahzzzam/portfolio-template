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

var tmpDir = 'example-com-' + new Date().getTime();

// Take a Local flight
plan.local(function(local) {
  local.log('Copy files to remote hosts');
  const filesToCopy = local.exec('git ls-files', {silent: true});
  const destinationAddress = '/tmp/' + tmpDir;
  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, destinationAddress);
});

// run commands on the target's remote hosts
plan.remote(function(remote) {
  remote.log('Move folder to web root');
  remote.sudo('cp -R /tmp/' + tmpDir + '/dist ~', {user: 'www'});
  remote.rm('-rf /tmp/' + tmpDir);
  });
