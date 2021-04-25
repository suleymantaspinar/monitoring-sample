## Sample Monitoring Application with node.js

This is a sample node.js application for monitoring REST endpoints. Each incoming request is handled between 0-3 seconds randomly. It immediately emits an event after random timeout finished to send logs to another service. File streams are used as sample consumer example.  

**Grafana** and **Prometheus** used for collecting data and visualization purposes.

## Libraries
**prom-client**: Prometheus node.js driver.  
**random-response**: Middleware for measuring the request times.  

## Installation
Start prometheus, grafana,, grafana-dashboards.
```
docker-compose up -d --build prometheus
docker-compose up -d --build grafana
docker-compose up -d --build grafana-dashboards
```
Start the server.  
```
docker-compose up -d --build node-server
```