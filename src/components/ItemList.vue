<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import BookCard from './BookCard.vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
const props = defineProps<{ collectionName: String }>();

let booksInCollection = ref([]);

const getAllBooksInCollection = async () => {
	try {
		let response = await axios.get(`http://127.0.0.1:8001/api/v1/books/${user.value?.name}`);
		booksInCollection.value = response.data;
	} catch (err) {
		console.error(
			`Failed to get all items in ${props.collectionName} collection: `,
			err,
		);
	}
};
getAllBooksInCollection();
</script>

<template>
	<h2>In my collection ({{ booksInCollection.length }})</h2>
	<ul>
		<li v-for="book in booksInCollection" :key="book.id">
			<BookCard :book="book" />
		</li>
	</ul>
</template>

<style scoped></style>
