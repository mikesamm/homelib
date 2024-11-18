<script setup lang="ts">
import { Book } from '@/types/book';

const { book } = defineProps<{ book: Book }>();
</script>

<template>
	<div class="book-card">
		<h3>{{ book.title }}</h3>
		<ul>
			<li>Author: {{ book.authors[0] }}</li>
			<li>Published: {{ book.publishedDate }}</li>
			<li>Genre: {{ book.genre }}</li>
			<li>Added to Collection: {{ book.dateAdded }}</li>
		</ul>
	</div>
</template>

<style></style>
