'use strict';

const plan = require('flightplan');

const appName = 'samarth-xyz'
const host = '108.167.189.59'
const username = 'samarthmshah';
const port = 2222

// configuration
plan.target('it', [{
    host: host,
    username: username,
    port: port,
    agent: process.env.SSH_AUTH_SOCK
}, ]);

if (plan.runtime.target === 'it') {
    var isReady = transport.prompt('Ready for deploying to production? [yes]');
    if (isReady.indexOf('yes') === -1) {
        plan.abort('User canceled the damn flight!');
    }
}

const tmpDir = appName;

plan.local('build', function(local) {
    local.log('Build the dist/ directory');
    local.exec('grunt build');
    local.git('add .');
    var commitMsg = local.prompt('What is the commit message?');
    local.git('commit -m "' + commitMsg + '"');
    var push = local.prompt('Do you also want to push it? [y/n]') === 'y';
    if (push) {
        local.git('push origin master');
    }
});

plan.local('deploy', function(local) {
    local.log('Copy files to remote hosts');
    const filesToCopy = local.git('ls-files');
    const destinationAddress = '/tmp/' + tmpDir;
    // rsync files to all the target's remote hosts
    local.transfer(filesToCopy, destinationAddress);
});

// TODO DOESNT WORK.
// BETTER WRITE A CRON JOB...Damn!
// run commands on the target's remote hosts
plan.remote('copy', function(remote) {
    remote.log('Move folder to web root. The User is ' + remote.hostname());
    remote.rm('-rf ~/www/'); // remove old ones
    remote.log('Removed previous www/ entries')
    remote.cp('-a /tmp/' + tmpDir + '/dist/. ~/www/'); // This is having problems
    remote.log('Copied the dist to ~/www/')
        // remote.rm('-rf /tmp/' + tmpDir);
});
