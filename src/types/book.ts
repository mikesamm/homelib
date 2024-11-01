import { User } from './user';

export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: { type: string, identifier: string }[]
  categories: string[];
  imageLinks: {};
  previewLink: string;
  dateAdded: string;
  ownedBy: User;
  genre: string;
  shelf_location: string;
  borrowed: boolean;
  borrow_date: any;
  borrower: string | null;
  embossed: boolean;
};