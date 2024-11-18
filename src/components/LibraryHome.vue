<script setup lang="ts">
/**
 * LEGACY COMPONENT. This component is now a view: LibraryView
 */

import { ref } from 'vue';
import CollectionList from './CollectionList.vue';

const username = ref('TESTUSER');
</script>

<template>
	<h1 id="library-name">{{ username }}'s Library</h1>
	<CollectionList />
</template>

<style scoped></style>
