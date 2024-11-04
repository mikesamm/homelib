<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import ItemList from './ItemList.vue';
import { CollectionModel } from '../db/models/collection-model';

let isFormHidden = ref(true);
let isCollectionOpen = ref(false);
let collections = ref([])

let id = 0;

const getAllUserCollections = () => {
  axios.get('http://127.0.0.1:8001/api/v1/collections')
    .then(({ data }) => {
      collections.value = data
    })
    .catch((err) => {
      console.error('Failed to get collections from database: ', err)
    })
}
getAllUserCollections();

// POST new collection to db
const newCollectionName = ref('');
const addNewCollection = () => {
  axios.post('http://127.0.0.1:8001/api/v1/collections/newCollection', {
      newCollection: {
        name: newCollectionName.value,
        createdBy: 'TESTUSER'
      }
  })
  .then(() => {
    getAllUserCollections();
    newCollectionName.value = '';
    isFormHidden.value = true;
  })
  .catch((err) => {
    console.error('Failed to create new collection: ', err);
  })
}

let selectedCollection = ref('')
const selectCollection = (e: Event) => {
  isCollectionOpen.value = !isCollectionOpen.value;
  const element = e.target as HTMLElement;
  selectedCollection.value = element.innerText;
}

</script>

<template>
  <!-- this component will now just fetch the different collections from the db and list them -->
   <!-- when collection is clicked, it navigates to CollectionView, CollectionView dynamically renders
    collection name and ItemList -->

  <h3>Collections</h3>

  <button id="add-collection" @click="isFormHidden = !isFormHidden">Add Collection</button>
  <form v-if="!isFormHidden" @submit.prevent="addNewCollection">
    <input
      v-model.trim="newCollectionName"
      placeholder="Name of new collection"
      type="text"
    >
    <button>Create Collection</button>
  </form>

  <ul>
    <li
      v-for="collection in collections" :key="collection.id"
      @click="selectCollection"
    >
      {{ collection.name }}
    </li>
  </ul>

  <ItemList :collectionName=selectedCollection v-if="isCollectionOpen"/>

</template>

<style scoped>

</style>