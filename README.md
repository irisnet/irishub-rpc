# irishub-rpc
IRIS hub specific rpc interface

# Generate Server Code

go example

**1. Setup**

[setup](http://thrift-tutorial.readthedocs.io/en/latest/installation.html)

**2. Generating Code**

- go server

```
thrift -r -out ./codegen/server --gen go ./thrift/service_irishub.thrift
```

- js client

```
thrift -r -out ./codegen/gen-js --gen js ./thrift/service_irishub.thrift
```

- nodejs client

```
thrift -r -out ./codegen/gen-nodejs --gen js:node ./thrift/service_irishub.thrift
```

