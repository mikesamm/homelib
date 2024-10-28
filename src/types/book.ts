export interface Book {
  title: string;
  subtitle: string | null;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: { type: string, identifier: string }[]
  categories: string[];
  imageLinks: {};
  previewLink: string;
  dateAdded: string;
  genre: string;
  shelf_location: string;
  borrowed: boolean;
  borrow_date: any;
  borrower: string | null;
  embossed: boolean;
}[];