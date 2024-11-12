<script setup lang="ts">
import { ref } from 'vue';
import CollectionList from '../components/CollectionList.vue';

const username = ref('TESTUSER');
</script>

<template>
  <h1 id="library-name">
    {{ username }}'s Library
  </h1>
  <CollectionList />
</template>

<style scoped>

</style>