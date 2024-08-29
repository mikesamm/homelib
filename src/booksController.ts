import axios from 'axios';
import { FastifyInstance, FastifyRequest } from 'fastify';

export const booksController = (fastify: FastifyInstance, options, done) => {
  fastify.get('/', /* { schema: replySchema }, */ async (req, reply) => {

    const result = await axios
      .get('https://openlibrary.org/search.json', {
        params: {
          isbn: '9781476733951',
          fields: 'title'
        }
      })
      .then(({ data }) => {
        console.log('data from openlib: ', data);
        reply.send(data);
      })
      .catch((err) => {
        console.error('Failed to get data from openlib: ', err);
        reply.code(500);
      })

  })
  done();
}