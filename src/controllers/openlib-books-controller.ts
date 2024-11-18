import { FastifyInstance, FastifyRequest } from 'fastify';
import axios from 'axios';
import { BookModel } from '../db/models/book-model.js';
// import { Book } from '../types/book.js';

// interface FastifyRequestWithBody extends FastifyRequest {
//   title: string;
//   isbn: string;
// }

const OPEN_LIB_ID = process.env.OPEN_LIB_ID;

export const booksController = (fastify: FastifyInstance, options, done) => {
	const headers = {
		'User-Agent': OPEN_LIB_ID,
	};

	// Search by title on Open Library API
	fastify.post(
		'/title',
		/* { schema: replySchema }, */ async (req, reply) => {
			const { title } = req.body;

			const result = await axios
				.get('https://openlibrary.org/search.json', {
					headers,
					params: {
						title,
						fields:
							'author_name,cover_edition_key,first_publish_year,isbn,number_of_pages_median,title',
					},
				})
				.then(({ data }) => {
					reply.send(data);
				})
				.catch((err) => {
					console.error('Failed to get data from openlib: ', err);
					reply.code(500);
				});
		},
	);

	// Search by ISBN on Open Library API
	fastify.post(
		'/isbn',
		/* { schema: replySchema } */ async (req, reply) => {
			const { isbn } = req.body;

			const result = await axios
				.get('https://openlibrary.org/search.json', {
					headers,
					params: {
						isbn,
						fields:
							'author_name,cover_edition_key,first_publish_year,isbn,number_of_pages_median,title',
					},
				})
				.then(({ data }) => {
					reply.send(data);
				})
				.catch((err) => {
					console.error('Failed to get data from openlib: ', err);
					reply.code(500);
				});
		},
	);

	fastify.post(
		'/addbook',
		/* { schema: replySchema } */ async (req, reply) => {
			const { book } = req.body;

			try {
				await BookModel.create(book);
				reply.code(201);
			} catch (e) {
				console.error('Failed to write book to db: ', e);
				reply.code(500);
			}
		},
	);

	fastify.get('/', async (req, reply) => {
		try {
			const allBooks = await BookModel.find({});
			reply.send(allBooks);
		} catch (e) {
			console.error('Failed to retrieve books from db: ', e);
			reply.code(500);
		}
	});

	fastify.patch('/shelf/:id', async (req, reply) => {
		const { id } = req.params;
		const { newLocation } = req.body;

		try {
			const response = await BookModel.updateOne(
				{ _id: id },
				{ shelf_location: newLocation },
			);
			reply.send(`Modified ${response.modifiedCount} shelf location`);
		} catch (e) {
			console.error('Failed to update shelf location: ', e);
			reply.code(500);
		}
	});

	fastify.delete('/:id', async (req, reply) => {
		const { id } = req.params;

		try {
			await BookModel.deleteOne({ _id: id });
			reply.code(204);
		} catch (e) {
			console.error('Failed to delete book from db: ', e);
			reply.code(500);
		}
	});

	done();
};
