import axios from 'axios';
import { FastifyInstance, FastifyRequest } from 'fastify';

interface FastifyRequestWithBody extends FastifyRequest {
  title: string;
  isbn: string;
}
export const booksController = (fastify, options, done) => {
  const headers = {
    "User-Agent": "homelib sammartino.mike@gmail.com"
  };

  fastify.post('/title', /* { schema: replySchema }, */ async (req, reply) => {
    const { title } = req.body;

    const result = await axios
      .get('https://openlibrary.org/search.json', {
        headers,
        params: {
          title,
          fields: "title,author_name,first_publish_year"
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

  fastify.post('/isbn', /* { schema: replySchema } */ async (req, reply) => {
    const { isbn } = req.body;

    const result = await axios
      .get('https://openlibrary.org/search.json', {
        headers,
        params: {
          isbn,
          fields: "title,author_name,first_publish_year"
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