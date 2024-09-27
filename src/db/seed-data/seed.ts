// create a function that saves many documents to the database
import { connect, disconnect } from 'mongoose';
import { BookModel } from '../models/book-model.js';
import { sampleBooks } from './sample-books.js';
import { MONGO_URI } from '../../index.js';

// connect  to db
try {
  await connect(MONGO_URI);
    console.log('Database connected!');
  await BookModel.deleteMany();
    console.log('Book data cleared.');
  await BookModel.create(sampleBooks);
    console.log('Books saved to db');
  disconnect();
  process.exit();
} catch(e) {
  console.error('Database connection failed: ', e);
  process.exit(1);
}
