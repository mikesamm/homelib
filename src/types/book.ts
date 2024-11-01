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
  shelfLocation: string;
  borrowed: boolean;
  borrowDate: any;
  borrower: string | null;
  embossed: boolean;
};