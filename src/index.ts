import fastify, { FastifyInstance, FastifyRequest, RequestGenericInterface, RouteGenericInterface } from 'fastify';

interface NameParam {
  name: string;
}

const server: FastifyInstance = fastify({ logger: true });

const options = {
  schema: {
    request: {
      params: { name: 'string' }
    },
    response : {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}

server.get('/ping', options, async (req, reply) => {
  reply.send('ponggggg poooong\n');
});

server.get('/ping/:name', options, (req: FastifyRequest<{ Params: NameParam }>, reply) => {
  return {
    hello: `${req.params.name}`
  }
})

server.get('/', options, (req, reply) => {
  return {
    hello: 'world'
  }
})

try {
  server.listen({ port: 8080 })
} catch (err) {
  server.log.error(err);
  process.exit(1);
}