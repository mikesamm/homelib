// create a function that saves many documents to the database
import { connect, disconnect } from 'mongoose';
import { Book } from '../models/book-model.js';
import { sampleBooks } from './sample-books.js';
import { MONGO_URI } from '../../index.js';

// connect  to db
try {
  await connect(MONGO_URI);
  console.log('Database connected!');
  await Book.deleteMany();
  console.log('Book data cleared.');
  await Book.create(sampleBooks);
  console.log('Books saved to db');
  disconnect();
  process.exit();
} catch(e) {
  console.error('Database connection failed: ', e);
  process.exit(1);
}

// I need to save the documents to the db
  // try {
  //   await Book.create(sampleBooks);
  //   console.log('Books saved to db');
  // } catch (e) {
  //   console.error('Books not saved to db', e);
  // }

//  get confirmation
//  handle errors