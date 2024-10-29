<script setup lang="ts">
import { ref } from 'vue';
import ItemList from './ItemList.vue';

let isFormHidden = ref(true);
let isCollectionOpen = ref(false);

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
  isFormHidden.value = true;
}

let selectedCollection = ref('')
const selectCollection = (e: Event) => {
  isCollectionOpen.value = !isCollectionOpen.value;
  const element = e.target as HTMLElement;
  selectedCollection.value = element.innerText;
}

/**
 * on collection click,
 * take value from what is clicked (collection name)
 * pass it as prop to ItemList
 * ItemList will then list items accordingly
 */

</script>

<template>
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
      {{ collection.collectionName }}
    </li>
  </ul>
  <ItemList :collectionName=selectedCollection v-if="isCollectionOpen"/>
</template>

<style scoped>

</style>