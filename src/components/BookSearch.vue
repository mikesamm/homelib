<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-vue';

let searchResultId = 0;
const searchResults = ref([]);
const { user } = useAuth0();

const googleBooksSearchQuery = ref('');
const searchGoogleBooksAPI = async () => {
	try {
		const rawSearchResults = await axios.post(
			'http://127.0.0.1:8001/api/v1/books/search',
			{
				q: googleBooksSearchQuery.value,
			},
		);
		console.log('searchResults: ', rawSearchResults.data);
		searchResults.value = rawSearchResults.data.items;
	} catch (err) {
		console.error('Failed to search Google Books API: ', err);
	}
};

const stringifyAuthors = (authorArr: String[]) => {
	return authorArr.reduce((string, author) => {
		return (string += `, ${author}`);
	});
};

const addBookToCollection = async (book) => {
	try {
		await axios.post('http://127.0.0.1:8001/api/v1/books/addBook', {
			newBook: book.volumeInfo,
			addedBy: user.value?.name
		});
		console.log('BOOK ADDED TO DB');
	} catch (err) {
		console.error('Failed to add book to collection: ', err);
	}
};
</script>

<template>
	<h1>Google Search</h1>

	<form @submit.prevent="searchGoogleBooksAPI">
		<input
			v-model.trim="googleBooksSearchQuery"
			placeholder="title, ISBN, author, etc..."
			type="text"
		/>
		<button>Search</button>
	</form>

	<ul>
		<li v-for="result in searchResults" :key="searchResultId++">
			<div class="book-info">
				{{ result.volumeInfo.title }} by
				{{ stringifyAuthors(result.volumeInfo.authors).trim() }}
			</div>
			<button @click="addBookToCollection(result)">Add to Collection</button>
		</li>
	</ul>
</template>

<style>
h1 {
	font-size: 1.5rem;
}
</style>
