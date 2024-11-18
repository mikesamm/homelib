import { FastifyInstance } from 'fastify';
import { UserModel } from '../db/models/user-model.js';

// user route controller
export const userController = (fastify: FastifyInstance, options, done) => {
	// GET all user collections
	//  query 'collections' collection
	// GET all user genres
	//  query genres collection
	// GET all user shelf locations
	//  query shelf_location collection

	// POST new user
	// POST new collection
	// POST new genre
	// POST new shelf location

	// UPDATE user info
	// UPDATE collection - happens in collection controller
	// UPDATE genre - eg: change name/spelling
	// UPDATE shelf location - eg: change name/spelling

	// DELETE collection
	// DELETE genre
	// DELETE shelf location
	// DELETE user

	done();
};
