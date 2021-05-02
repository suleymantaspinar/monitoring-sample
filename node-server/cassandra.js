require('dotenv').config();
const cassandra = require('cassandra-driver');
const { CONTACT_POINT, LOCAL_DATA_CENTER, KEYSPACE } = process.env

const client = new cassandra.Client({ 
  contactPoints: [CONTACT_POINT],
  localDataCenter: LOCAL_DATA_CENTER,
  keyspace: KEYSPACE

});

module.exports = { client };