const EventEmitter = require('events');
const fs = require('fs');
const { createLog } = require('../db/log')
const logEmitter = new EventEmitter();
const writeStream = fs.createWriteStream('./log-output');

const formatLog = function(log) {
  return `${log.type}, ${log.time_spent}, ${log.timestamp}\n`
}

logEmitter.on('log', (data) => {
  let log = formatLog(data)
  writeStream.write(log);

  writeStream.on('error', (err) => {
    console.log(err);
  });
});

logEmitter.on('log', (data) => {
  createLog(data).then(
    res => Promise.resolve(true)
  ).
  catch(err => {
    Promise.reject(err)
  })
})

module.exports = { logEmitter };