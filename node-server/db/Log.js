const { client }  = require('../cassandra');


/**
 * Save logs to the database.
 * @param {*} args 
 * @returns {Promise}
 */
const createLog = function(args) {
  if(!args.type || typeof args.type === 'undefined') {
    return Promise.reject('Type is required to create log!')
  }

  if(!args.time_spent || typeof args.time_spent === 'undefined') {
    return Promise.reject('Time is required to create log!')
  }

  if(!args.timestamp || typeof args.timestamp === 'undefined') {
    return Promise.reject('Timestamp is required to create log!')
  }

  const query = 'INSERT INTO logs (method, time_spent, timestamp) VALUES (?, ?, ?)';
  const params = [args.type, args.time_spent, new Date(args.timestamp)];

  return new Promise((resolve, reject) => {
    client.execute(
      query,
      params,
      { prepare : true }
    )
    .then(result => resolve(true))
    .catch(err => reject(err))
  });
}

module.exports = {
  createLog
}