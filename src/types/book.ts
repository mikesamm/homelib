export interface Book {
  author_name: string[];
  cover_edition_key: string;
  first_publish_year: number;
  isbn: string[];
  number_of_pages_median: number;
  title: string;
  genre: string;
  shelf_location: string;
  borrowed: boolean;
  borrow_date: any;
  borrower: string | null;
}[];