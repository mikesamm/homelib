import axios from 'axios';
import { FastifyInstance, FastifyRequest } from 'fastify';

interface FastifyRequestWithBody extends FastifyRequest {
  title: string;
  isbn: string;
}
export const booksController = (fastify: FastifyInstance, options, done) => {
  fastify.post('/', /* { schema: replySchema }, */ async (req: FastifyRequestWithBody, reply) => {
    const { title, isbn } = req;

    const result = await axios
      .get('https://openlibrary.org/search.json', {
        params: {
          isbn,
          title,
          fields: "title"
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