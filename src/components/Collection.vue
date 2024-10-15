<script setup lang="ts">
import ItemList from './ItemList.vue';

defineProps<{ collectionType: string }>();

</script>

<template>
  <h1>{{ collectionType }}s</h1>
  <ItemList />
</template>

<style scoped>

</style>