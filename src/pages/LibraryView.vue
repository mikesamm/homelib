<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import CollectionList from '@/components/CollectionList.vue';

const { user } = useAuth0();
</script>

<template>
	<h1 id="library-name" v-if="user">{{ user.nickname }}'s Library</h1>
	<h1 v-else>Your Library</h1>
	<CollectionList />
</template>

<style scoped></style>
