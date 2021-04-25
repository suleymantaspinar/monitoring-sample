const app = require('./app.js');

const PORT = 5000;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`);
})