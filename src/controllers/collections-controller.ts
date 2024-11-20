import { FastifyInstance } from 'fastify';
import { CollectionModel } from '../db/models/collection-model.js';

// user route controller
export const collectionController = (
	fastify: FastifyInstance,
	options,
	done,
) => {

	fastify.get('/:user', async (req, reply) => {
		const { user } = req.params;

		const allUserCollections = await CollectionModel.find({
			createdBy: {
				username: user
			}
		});

		return allUserCollections;
	});
	//  query 'collections' collection

	// POST new collection
	fastify.post('/newCollection', async (req, reply) => {
		const { name, createdBy } = req.body.newCollection;

		const newCollection = {
			name,
			createdBy: {
				username: createdBy,
			},
			dateCreated: 'TODO DATE GENERATION/FORMAT',
			numberOfItems: 123,
		};

		try {
			await CollectionModel.create(newCollection);
			reply.code(201);
		} catch (err) {
			console.error('Failed to create new collection: ', err);
			reply.code(500);
		}
	});

	// UPDATE collection name
	fastify.patch('/:id', async (req, reply) => {
		const { id } = req.params;
		const { newName } = req.body.collectionEdit;

		try {
			const response = await CollectionModel.updateOne(
				{ _id: id },
				{ name: newName },
			);
			return { message: `Modified ${response.modifiedCount} collection name.` };
		} catch (err) {
			console.log('Failed to edit collection name: ', err);
			reply.code(500);
		}
	});

	// DELETE collection
	fastify.delete('/:id', async (req, reply) => {
		const { id } = req.params;

		try {
			await CollectionModel.deleteOne({ _id: id });
			reply.code(204);
		} catch (err) {
			console.error('Failed to delete collection: ', err);
			reply.code(500);
		}
	});

	done();
};
