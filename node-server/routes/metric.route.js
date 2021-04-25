const express = require('express');

const router = express.Router();

const Prometheus = require('prom-client');

router.get('/', async (req, res) => {
  res.set('Content-Type', Prometheus.register.contentType);
  res.end(await Prometheus.register.metrics());
});

module.exports = router;
