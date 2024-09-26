import { model, Schema } from 'mongoose';

const bookSchema = new Schema({
  title: String,
  author_name: String,
  conver_edition_key: String,
  first_publish_year: Number,
  ISBN: [String],
  number_of_pages_median: Number,
  genre: String,
  shelf_location: String,
  borrowed: Boolean,
  borrow_date: Date,
  borrower: String
})

export const Book = model('Book', bookSchema);
