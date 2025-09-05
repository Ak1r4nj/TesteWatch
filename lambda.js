const awsLambdaFastify = require('@fastify/aws-lambda');

const { buildServer } = require('./src/shared/http/server');

let proxy;

exports.handler = async (event, context) => {
  if (!proxy) {
    console.log("Inicializando o servidor Fastify para a Lambda...");
    const app = await buildServer();
    proxy = awsLambdaFastify(app);
    console.log("Servidor e proxy prontos.");
  }
  return proxy(event, context);
};