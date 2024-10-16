<script setup lang="ts">
import { ref } from 'vue';

let id = 0;
const collections = ref([
  { id: id++, collectionName: 'Books' },
  { id: id++, collectionName: 'Movies' },
  { id: id++, collectionName: 'Music' }
])

</script>

<template>
  <h3>Collections</h3>
  <ul>
    <li v-for="collection in collections" :key="collection.id">
      <!-- add link to collection page, add prop on collection page for collection name, which would be collection.collectionName -->
      {{ collection.collectionName }}
    </li>
  </ul>
</template>

<style scoped>

</style>