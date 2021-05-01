const EventEmitter = require('events');
const fs = require('fs');

const logEmitter = new EventEmitter();

const writeStream = fs.createWriteStream('./log-output');

logEmitter.on('log', (data) => {
  writeStream.write(data, { encoding: 'utf-8' });

  writeStream.on('error', (err) => {
    console.log(err);
  });
});

module.exports = { logEmitter };