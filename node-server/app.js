const app = require('express')();
const Prometheus = require('./middleware/prom');

app.use(Prometheus.requestCounters);
app.use(Prometheus.responseCounters);
app.use('/random', require('./routes/random.route'));
app.use('/metrics', require('./routes/metric.route'));

module.exports = app;
