import { FastifyInstance } from 'fastify';
import axios from 'axios';
import { BookModel } from '../db/models/book-model.js';
import { Book } from '../types/book.js';

// need google auth env var

// schemas for response validation
const gbSearchReplySchema = {
	response: {
		200: {
			properties: {
				items: { type: 'array' },
			},
		},
	},
};

// books controller
export const booksController = (fastify: FastifyInstance, options, done) => {
	//    headers if needed

	// Search for books on Google Books (can be by title, ISBN, or keyword)
	fastify.post(
		'/search',
		{ schema: gbSearchReplySchema },
		async (req, reply) => {
			const { q } = req.body;

			try {
				const { data: results } = await axios.get(
					'https://www.googleapis.com/books/v1/volumes',
					{
						params: {
							// send search query as book title in q parameter
							q,
							// send fields parameter with all fieldmasks
							fields:
								'items.volumeInfo.title,items.volumeInfo.subtitle,items.volumeInfo.authors,items.volumeInfo.publisher,items.volumeInfo.publishedDate,items.volumeInfo.description,items.volumeInfo.industryIdentifiers.type,items.volumeInfo.industryIdentifiers.identifier,items.volumeInfo.categories,items.volumeInfo.imageLinks.smallThumbnail,items.volumeInfo.imageLinks.thumbnail,items.volumeInfo.previewLink',
						},
					},
				);
				return results;
			} catch (err) {
				console.error('Failed to search Google Books database', err);
				reply.code(500);
			}
		},
	);

	//    collection is based on what collection the user is currently using, needs to be included in URI
	//    POST book to user's collection
	fastify.post('/addBook', async (req, reply) => {
		const { newBook, addedBy } = req.body;

		const newBookWithUserFields: Book = {
			...newBook,
			addedBy,
			dateAdded: new Date(),
			ownedBy: 'TESTUSER',
			genre: '',
			shelfLocation: '',
			condition: '',
			borrowed: false,
			borrowDate: '',
			borrower: '',
			embossed: false,
		};

		try {
			await BookModel.create(newBookWithUserFields);
			reply.code(201);
		} catch (err) {
			console.error('Failed to add book to library: ', err);
			reply.code(500);
		}
	});

	//    GET all books from user's collection
	fastify.get('/:user', async (req, reply) => {
		const { user } = req.params;

		try {
			const allBooks = await BookModel.find({
				addedBy: user
			});
			reply.send(allBooks);
		} catch (err) {
			console.error('Failed to retrieve books from db: ', err);
			reply.code(500);
		}
	});

	//    PATCH shelf, genre, borrow data
	fastify.patch('/shelf/:id', async (req, reply) => {
		const { id } = req.params;
		const { newLocation } = req.body;

		try {
			const response = await BookModel.updateOne(
				{ _id: id },
				{ shelf_location: newLocation },
			);
			return { message: `Modified ${response.modifiedCount} shelf location` };
		} catch (err) {
			console.error('Failed to update shelf location: ', err);
			reply.code(500);
		}
	});

	//    DELETE book from user's collection
	fastify.delete('/:id', async (req, reply) => {
		const { id } = req.params;

		try {
			await BookModel.deleteOne({ _id: id });
			reply.code(204);
		} catch (err) {
			console.error('Failed to delete book from db: ', err);
			reply.code(500);
		}
	});

	done();
};
