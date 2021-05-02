const express = require('express');

const router = express.Router();
const RandomService = require('../services/random.service');
const LogService = require('../services/log.service');

const timestamp = () => Math.floor(Date.now());

router.get('/', (req, res, next) => {
  RandomService.wait()
    .then((time) => {
      LogService.logEmitter.emit('log', {
        type: 'GET',
        time_spent: time,
        timestamp: timestamp()
      });
    })
    .then((resolve) => {
      res.status(200).send('OK');
      next();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post('/', (req, res, next) => {
  RandomService.wait()
    .then((time) => {
      LogService.logEmitter.emit('log', {
        type: 'POST',
        time_spent: time,
        timestamp: timestamp()
      });
    })
    .then((resolve) => {
      res.status(200).send('OK');
      next();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put('/', (req, res, next) => {
  RandomService.wait()
    .then((time) => {
      LogService.logEmitter.emit('log', {
        type: 'PUT',
        time_spent: time,
        timestamp: timestamp()
      });
    })
    .then((resolve) => {
      res.status(200).send('OK');
      next();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete('/', (req, res, next) => {
  RandomService.wait()
    .then((time) => {
      LogService.logEmitter.emit('log', {
        type: 'DELETE',
        time_spent: time,
        timestamp: timestamp()
      });
    })
    .then((resolve) => {
      res.status(200).send('OK');
      next();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
