<script setup lang="ts">
import ItemList from '@/components/ItemList.vue';
import BookSearch from '@/components/BookSearch.vue';

defineProps<{ collectionName: String }>();
</script>

<template>
	<h1>{{ collectionName }}</h1>

	<BookSearch />

	<ItemList :collectionName="collectionName" />
</template>

<style scoped></style>
