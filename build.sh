docker build -t prueba:v1 .
docker run -d --name prueba -p 9090:80 prueba:v1
