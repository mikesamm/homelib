import Fastify, { FastifyInstance, FastifyRequest, RequestGenericInterface, RouteGenericInterface } from 'fastify';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { booksController } from './controllers/gb-books-controller.js';
dotenv.config();

const fastify: FastifyInstance = Fastify({ logger: true });
export const MONGO_URI: string = process.env.MONGO_URI!;

try {
  await connect(MONGO_URI);
  console.log('Database connected!');
} catch(e) {
  console.error('Database connection failed: ', e);
}

// Route controllers
fastify.register(booksController, { prefix: '/api/v1/books' });

try {
  fastify.listen({ port: 8001 })
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}