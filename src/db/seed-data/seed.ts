import { connect, disconnect } from 'mongoose';
import { MONGO_URI } from '../../index.js';
import { BookModel } from '../models/book-model.js';
import { CollectionModel } from '../models/collection-model.js';
import { UserModel } from '../models/user-model.js';
import { sampleBooks } from './gb-sample-books.js';
import { sampleCollections } from './sample-collections.js';
import { sampleUsers } from './sample-users.js';

try {
	await connect(MONGO_URI);
	console.log('Database connected!');

	await BookModel.deleteMany();
	console.log('Book data cleared.');
	await CollectionModel.deleteMany();
	console.log('Collection data cleared.');
	await UserModel.deleteMany();
	console.log('User data cleared.');

	await BookModel.create(sampleBooks);
	console.log('Books saved to db.');
	await CollectionModel.create(sampleCollections);
	console.log('Collections saved to db.');
	await UserModel.create(sampleUsers);
	console.log('Users saved to db.');

	disconnect();
	process.exit();
} catch (e) {
	console.error('Database connection failed: ', e);
	process.exit(1);
}
