
# 0.2

- Traffic replay/forwarding (check the POC ./replay.js)

# 0.1

- HTTP routes to manage loadbalancer
(API DRAFT!)
  POST   /bind/6000 { targets : [{host:'127.0.0.1', port : 8001}]
  DELETE /target/6000 { host: 127.0.0.1, port 8001 }
  PUT    /target/6000 { host: 127.0.0.1, port 8001 }
  POST   /target/6000/host/127.0.0.1:8001/shutdown // Stop acception connections
- Websocket upgrade management (check something like websocket-driver?)
- Test suit
- Benchmark suit
