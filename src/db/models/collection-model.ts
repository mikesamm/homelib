import { model, Schema } from 'mongoose';

const collectionSchema = new Schema({
	name: String,
	dateCreated: String,
	numberOfItems: Number,
	createdBy: {
		username: String,
	},
});

export const CollectionModel = model('Collection', collectionSchema);
