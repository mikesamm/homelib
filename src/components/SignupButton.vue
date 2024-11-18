<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

const handleSignup = () => {
	loginWithRedirect({
		appState: {
			target: '/library',
		},
		authorizationParams: {
			screen_hint: 'signup',
		},
	});
};
</script>

<template>
	<button @click="handleSignup">Sign Up</button>
</template>
