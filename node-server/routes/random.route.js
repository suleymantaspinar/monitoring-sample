const express = require('express');

const router = express.Router();
const RandomService = require('../services/random.service');
const LogService = require('../services/log.service');

const timestamp = () => Math.floor(Date.now() / 1000);

router.get('/', (req, res, next) => {
  RandomService.wait()
    .then((time) => {
      LogService.logEmitter.emit('log', `PUT, ${time}, ${timestamp()}\n`);
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
      LogService.logEmitter.emit('log', `POST, ${time}, ${timestamp()}\n`);
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
      LogService.logEmitter.emit('log', `PUT, ${time}, ${timestamp()}\n`);
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
      LogService.logEmitter.emit('log', `DELETE, ${time}, ${timestamp()}\n`);
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
