<script setup lang="ts">

defineProps<{ collectionName: String }>();

// TODO: fetch items in collection, store in reactive var to iterate to render

</script>

<template>
  <h2>Items in Collection: {{ collectionName }}</h2>
  <ul>
    <!-- <li v-for="item in items" :key="item.id">
      {{ item.item.title }}, {{ item.item.author_name[0] }}
    </li> -->
    <li>item list goes here</li>
  </ul>
</template>

<style scoped>

</style>