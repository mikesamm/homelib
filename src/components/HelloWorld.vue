<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>()

const comingSoon = ref('More coming soon.')

</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>This is the the first iteration of {{ msg }}'s landing page.</h3>
  <p>{{ comingSoon }}</p>
  <button @click="comingSoon += '.'">Can't wait</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>