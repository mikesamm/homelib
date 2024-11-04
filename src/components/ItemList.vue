<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps<{ collectionName: String }>();

let itemsInCollection = ref([]);

const getAllItemsInCollection = async () => {
  try {
    let response = await axios.get('http://127.0.0.1:8001/api/v1/books')
    itemsInCollection.value = response.data;
  } catch (err) {
    console.error(`Failed to get all items in ${props.collectionName} collection: `, err)
  }
}
getAllItemsInCollection();

</script>

<template>
  <h2>List of {{ collectionName }}</h2>
  <ul>
    <li v-for="item in itemsInCollection" :key="item.id">
      {{ item.title }}, {{ item.authors[0] }}
    </li>
  </ul>
</template>

<style scoped>

</style>