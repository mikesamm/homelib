import { User } from './user';

export interface Collection {
	name: string;
	dateCreated: string;
	numberOfItems: number;
	createdBy: User;
}
