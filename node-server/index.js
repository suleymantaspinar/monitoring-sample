require('dotenv').config();
const app = require('./app.js');

const { NODE_PORT } = process.env

app.listen(NODE_PORT, () => {
  console.log(`Example app listening on PORT ${NODE_PORT}`);
})