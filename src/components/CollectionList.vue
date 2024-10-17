<script setup lang="ts">
import { ref } from 'vue';

let formHidden = ref(true);

let id = 0;
const collections = ref([
  { id: id++, collectionName: 'Books' },
  { id: id++, collectionName: 'Movies' },
  { id: id++, collectionName: 'Music' }
])

const newCollectionName = ref('');
const addNewCollection = () => {
  collections.value.push({ id: id++, collectionName: newCollectionName.value });
  newCollectionName.value = '';
  formHidden.value = true;
}

</script>

<template>
  <h3>Collections</h3>
  <button id="add-collection" @click="formHidden = !formHidden">Add Collection</button>
  <form v-if="!formHidden" @submit.prevent="addNewCollection">
    <input
      v-model.trim="newCollectionName"
      placeholder="Name of new collection"
      type="text"
    >
    <button>Create Collection</button>
  </form>
  <ul>
    <li v-for="collection in collections" :key="collection.id">
      {{ collection.collectionName }}
    </li>
  </ul>
</template>

<style scoped>

</style>