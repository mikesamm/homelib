<script setup lang="ts">
import LoginButton from './LoginButton.vue';
import LogoutButton from './LogoutButton.vue';
import SignupButton from './SignupButton.vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated } = useAuth0();
</script>

<template>
	<!-- div for the background, contain the navbar -->
	<header>
		<div id="logo">
			<RouterLink :to="{ name: 'home' }">homelib</RouterLink>
		</div>
		<nav>
			<RouterLink :to="{ name: 'about' }">About</RouterLink>
			<RouterLink v-if="isAuthenticated" :to="{ name: 'library' }"
				>Library</RouterLink
			>
			<div v-if="!isAuthenticated">
				<SignupButton />
				<LoginButton />
			</div>
			<div v-if="isAuthenticated">
				<LogoutButton />
			</div>
		</nav>
		<!-- mobile: hamburger menu for menu -->
	</header>
	<!-- Collections to go to list of collections -->
	<!-- avatar for account menu -->
</template>

<style>
header {
	background-color: grey;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
}
</style>
