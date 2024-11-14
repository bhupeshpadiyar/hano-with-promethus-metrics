## To run the HANO application
```
npm install
npm run dev
```

```
open http://localhost:4000
```

## To run the metrics pipeline

```
cd docker
docker-compose up
```

OTEL-COLLECTOR receiving the metrics at gRPC port 4317
VictoriaMetrics running at the port 8428
Grafana running at the port 3000
