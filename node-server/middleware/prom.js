const { Counter } = require('prom-client');
const { Histogram } = require('prom-client');
const { Summary } = require('prom-client');
const ResponseTime = require('response-time');

/**
 * A Prometheus counter that counts the invocations of the different HTTP verbs
 * e.g. a GET and a POST call will be counted as 2 different calls
 */
module.exports.numOfRequests = numOfRequests = new Counter({
  name: 'numOfRequests',
  help: 'Number of requests made',
  labelNames: ['method', 'path', 'status'],
});

/**
 * A Prometheus histogram that observes time duration of each requests.
 */
module.exports.httpRequestDurationMs = httpRequestDurationMs = new Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'path', 'status'],
  buckets: [0.10, 5, 15, 50, 100, 500, 1000, 2000, 3000],
});

/**
 * A Prometheus summary to record the HTTP method, path, response code and response time
 */
module.exports.responses = responses = new Summary({
  name: 'http_response_summary_ms',
  help: 'Response times in milliseconds',
  labelNames: ['method', 'path', 'status'],
  buckets: [0.10, 5, 15, 50, 100, 500, 1000, 2000, 3000],
});

/**
 * This function increments the counters that are executed on the request side of an invocation
 * Currently it increments the counters for numOfPaths and pathsTaken
 */
module.exports.requestCounters = function (req, res, next) {
  if (req.path != '/metrics') {
    numOfRequests.inc({ method: req.method });
  }
  next();
};

/**
 * This function increments the counters that are executed on the response side of an invocation
 * Currently it updates the responses summary
 */
module.exports.responseCounters = ResponseTime((req, res, time) => {
  if (req.url != '/metrics') {
    responses.labels(req.method, req.route.path, res.statusCode).observe(time);
    httpRequestDurationMs.labels(req.method, req.route.path, res.statusCode).observe(time);
  }
});
