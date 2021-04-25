const { EventEmitter, once } = require('events');
const fs = require('fs');

const util = require('util');
const stream = require('stream');

const logEmitter = new EventEmitter();

logEmitter.on('log', async (data) => {
  await writeIterableToFile(data, './log-output');
});

const finished = util.promisify(stream.finished);

async function writeIterableToFile(iterable, filePath) {
  const writable = fs.createWriteStream(filePath, { encoding: 'utf8' });
  for await (const chunk of iterable) {
    if (!writable.write(chunk)) {
      await once(writable, 'drain');
    }
  }

  writable.end();
  await finished(writable);
}

module.exports = { logEmitter };
