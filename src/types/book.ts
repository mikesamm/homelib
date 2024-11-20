import { User } from './user';

export interface Book {
	title: string;
	subtitle: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: { type: string; identifier: string }[];
	categories: string[];
	imageLinks: object;
	previewLink: string;
	addedBy: string;
	dateAdded: Date;
	ownedBy: User;
	genre: string;
	shelfLocation: string;
	condition: string;
	borrowed: boolean;
	borrowDate: string | Date;
	borrower: string | null;
	embossed: boolean;
}
