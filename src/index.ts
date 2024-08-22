import Fastify, { FastifyInstance, FastifyRequest, RequestGenericInterface, RouteGenericInterface } from 'fastify';
import { greetingsController } from './greetings-controller.js';

const fastify: FastifyInstance = Fastify({ logger: true });

fastify.register(greetingsController, { prefix: '/greetings' });

fastify.get('/ping', async (req, reply) => {
  reply.send('ponggggg poooong\n');
});

fastify.get('/', (req, reply) => {
  return {
    hello: 'world'
  }
})

try {
  fastify.listen({ port: 8080 })
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}