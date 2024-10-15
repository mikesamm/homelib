<script setup lang="ts">
import { ref } from 'vue';
import CollectionList from './CollectionList.vue';
import ItemList from './ItemList.vue';

const username = ref('TESTUSER')
</script>

<template>
  <h1 id="library-name">
    {{ username }}'s Library
  </h1>
  <button id="add-collection">Add Collection</button>
  <CollectionList />
  <ItemList />

</template>

<style scoped>

</style>