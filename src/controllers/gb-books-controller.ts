import { FastifyInstance } from 'fastify';
import axios from 'axios';
// import { BookModel } from '../db/models/book-model.js';
// import { Book } from '../types/book.js';

// need google auth env var

// books controller
export const booksController = (fastify: FastifyInstance, options, done) => {
  //    headers if needed

  fastify.get('/', async (req, reply) => {
    console.log('test hello');
    return 'hello';
  })

  // Search for books on Google Books (can be by title, ISBN, or keyword)
  fastify.post('/search', /* { schema: replySchema} */ async (req, reply) => {
    const { q } = req.body;

    try {
      const { data: results } = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          // send search query as book title in q parameter
          q,
          // send fields parameter with all fieldmasks
          fields: 'items.volumeInfo.title,items.volumeInfo.subtitle,items.volumeInfo.authors,items.volumeInfo.publisher,items.volumeInfo.publishedDate,items.volumeInfo.description,items.volumeInfo.industryIdentifiers.type,items.volumeInfo.industryIdentifiers.identifier,items.volumeInfo.categories,items.volumeInfo.imageLinks.smallThumbnail,items.volumeInfo.imageLinks.thumbnail,items.volumeInfo.previewLink'
        }
      })
      return results;
    } catch (err) {
      console.error('Failed to search Google Books database', err);
    }

  })
  
  //    GET for google book search

  //    collection is based on what collection the user is currently using, needs to be included in URI
  //    POST book to user's collection
  //    GET all books from user's collection
  //    PATCH shelf, genre, borrow data
  //    DELETE book from user's collection



  done();
}