<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import FooterNav from './components/FooterNav.vue';
</script>

<template>
	<div class="page-container">
		<NavBar id="navbar" />
		<main class="content-wrapper">
			<RouterView />
		</main>
		<FooterNav />
	</div>
</template>

<style>
.page-container {
	position: relative;
	min-height: 100vh;
}

.content-wrapper {
	padding-bottom: 2.5rem; /* Footer height */
}
</style>
