import { Collection } from '../../types/collection';
import { sampleUsers } from './sample-users';

export const sampleCollections: Collection[] = [
	{
		name: 'Books',
		dateCreated: 'Monday, October 28, 2024',
		numberOfItems: 3,
		createdBy: sampleUsers[0],
	},
	{
		name: 'Cassettes',
		dateCreated: 'Monday, October 28, 2024',
		numberOfItems: 4,
		createdBy: sampleUsers[0],
	},
	{
		name: 'DVDs',
		dateCreated: 'Monday, October 28, 2024',
		numberOfItems: 2,
		createdBy: sampleUsers[0],
	},
];
