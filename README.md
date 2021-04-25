## Sample Monitoring Application with node.js

This is a sample node.js application for monitoring REST endpoints. Each incoming request is handled between 0-3 seconds randomly. It immediately emits an event after random timeout finished to send logs to another service. File streams are used as sample consumer example. It can be exported as a stream for logging tools (eg: Loki) by converting the correct log format Loki uses.

**Grafana** and **Prometheus** used for collecting data and visualization purposes.

## Libraries
**prom-client**: Prometheus node.js driver.  
**random-response**: Middleware for measuring the request times.  

## Installation
Start prometheus, grafana, grafana-dashboards, and, server.
```
docker-compose up -d
```

Generate some requests to see the logs
```
curl --location --request GET 'localhost:83/random'
curl --location --request POST 'localhost:83/random'
curl --location --request PUT 'localhost:83/random'
curl --location --request DELETE 'localhost:83/random'
```

Open grafana
```
http://localhost:3000
```

## Prometheus Metrics
Counter:
```
name: 'numOfRequests',
help: 'Number of requests made',
labelNames: ['method', 'path', 'status']
```
Histogram:
```
name: 'http_request_duration_ms',
help: 'Duration of HTTP requests in ms',
labelNames: ['method', 'path', 'status']
buckets: [0.10, 5, 15, 50, 100, 500, 1000, 2000, 3000]
```
Summary:
```
name: 'http_response_summary_ms',
help: 'Response times in milliseconds',
labelNames: ['method', 'path', 'status'],
buckets: [0.10, 5, 15, 50, 100, 500, 1000, 2000, 3000]
```
## Prometheus Queries
request duration:
```
rate(http_request_duration_ms_sum[1m]) / rate(http_request_duration_ms_count[1m])
```
total number of requests in last 24h:
```
increase(numOfRequests[24h])
```
