<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-vue';

let isFormHidden = ref(true);
let isCollectionOpen = ref(false);
let collections = ref([]);
const { user } = useAuth0();

const getAllUserCollections = async () => {
	try {
		const response = await axios.get(
			`http://127.0.0.1:8001/api/v1/collections/${user.value?.name}`,
		);
		collections.value = response.data;
	} catch (err) {
		console.error('Failed to get collections from database: ', err);
	}
};
getAllUserCollections();

// POST new collection to db
const newCollectionName = ref('');
const addNewCollection = async () => {
	try {
		await axios.post('http://127.0.0.1:8001/api/v1/collections/newCollection', {
			newCollection: {
				name: newCollectionName.value,
				createdBy: user.value?.name,
			},
		});
		getAllUserCollections();
		newCollectionName.value = '';
		isFormHidden.value = true;
	} catch (err) {
		console.error('Failed to add new collection: ', err);
	}
};

let selectedCollection = ref('');
const selectCollection = (e: Event) => {
	isCollectionOpen.value = !isCollectionOpen.value;
	const element = e.target as HTMLElement;
	selectedCollection.value = element.innerText;
};
</script>

<template>
	<h3>Collections</h3>

	<button id="add-collection" @click="isFormHidden = !isFormHidden">
		Add Collection
	</button>
	<form v-if="!isFormHidden" @submit.prevent="addNewCollection">
		<input
			v-model.trim="newCollectionName"
			placeholder="Name of new collection"
			type="text"
		/>
		<button>Create Collection</button>
	</form>

	<ul>
		<li
			v-for="collection in collections"
			:key="collection.id"
			@click="selectCollection"
		>
			<RouterLink
				:to="{
					name: 'collection',
					params: { collectionName: collection.name },
				}"
				>{{ collection.name }}</RouterLink
			>
		</li>
	</ul>
</template>

<style scoped></style>
