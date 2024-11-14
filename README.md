## To run the HANO application
```
npm install
npm run dev
```

```
open http://localhost:4000

open http://localhost:4000/metrics for metrics
```

## To run the metrics pipeline

```
cd docker
docker-compose up
```

- OTEL-COLLECTOR receiving the metrics at gRPC port 4317
- VictoriaMetrics running at the port 8428
- Grafana running at the port 3000


## OTEL-COLLECTOR config to scrape the metrics

```
prometheus:
    config:
      scrape_configs:
        - job_name: "hano-prometheus-metrics"
          scrape_interval: 2s
          metrics_path: "/metrics"
          static_configs:
            - targets: ["127.0.0.1:4000"]

```
