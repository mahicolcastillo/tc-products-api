export PORT=30002
export TOKEN_SECRET=tokenmuyrecontrasecreto
export TOKEN_SESION=65c32840-197d-4690-acad-e3371774df39

#MICROSERVICES
# export MS_GENERATE_TOKEN=https://tc-generate-token-ms.herokuapp.com/microservice/tc-generate-token-ms/
export MS_GENERATE_TOKEN=http://localhost:30001/microservice/tc-generate-token-ms/
# export MS_PRODUCTS=https://tc-products-ms.herokuapp.com/microservice/tc-products_ms/
export MS_PRODUCTS=http://localhost:30000/microservice/tc-products_ms/