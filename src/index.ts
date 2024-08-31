import Fastify, { FastifyInstance, FastifyRequest, RequestGenericInterface, RouteGenericInterface } from 'fastify';
import fastifyMongodb from '@fastify/mongodb';
import { booksController } from './books-controller.js';

const fastify: FastifyInstance = Fastify({ logger: true });

// Database connection
fastify.register(fastifyMongodb, {
  forceClose: true,
  url: 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15'
})

// Route controllers
fastify.register(booksController, { prefix: '/api/v1/books' });

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