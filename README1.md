# Mannir Fullstack Server


### Docker Build
```
docker build -t manniru/mannirserver .
docker run -p 1313:1313 manniru/mannirserver

docker run --rm manniru/mannirserver

```

### Others
```
docker ps
docker run -it busybox sh

docker run --rm -it -v $PWD:/build ubuntu:16.04

```