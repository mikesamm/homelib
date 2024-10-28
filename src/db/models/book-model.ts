import { model, Schema } from 'mongoose';

const bookSchema = new Schema({
  title: String,
  subtitle: String,
  authors: [String],
  publisher: String,
  publishedDate: String,
  description: String,
  categories: [String],
  industryIdentifiers: [{ type: { type: String }, identifier: String }],
  imageLinks: { smallThumbnail: String, thumbnail: String },
  previewLink: String,
  genre: String,
  shelf_location: String,
  borrowed: Boolean,
  borrow_date: Date,
  borrower: String,
  dateAdded: String,
  embossed: Boolean
})

export const BookModel = model('Book', bookSchema);
