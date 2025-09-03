const awsLambdaFastify = require('@fastify/aws-lambda');
const fastify = require('./src/shared/http/server'); 

const proxy = awsLambdaFastify(fastify);

exports.handler = async (event, context) => {
  return proxy(event, context);
};
