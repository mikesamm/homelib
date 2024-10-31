<script setup lang="ts">
import { ref } from 'vue';
import CollectionList from '../components/CollectionList.vue';

const username = ref('TESTUSER');
</script>

<template>
  <h1 id="library-name">
    {{ username }}'s Library
  </h1>
  <!-- list of collections should go here.
       CollectionList may be extra now that there's the CollectionView page
       which would have the ItemList and other components that edit/build the item list -->
  <CollectionList />
</template>

<style scoped>

</style>