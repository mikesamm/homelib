import { createWebHistory, createRouter } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';

import HomeView from './pages/HomeView.vue';
import AboutView from './pages/AboutView.vue';
import LoginView from './pages/LoginView.vue';
import LibraryView from './pages/LibraryView.vue';
import CollectionView from './pages/CollectionView.vue';
import CallbackView from './pages/CallbackView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/library',
		name: 'library',
		component: LibraryView,
		beforeEnter: authGuard,
	},
	{
		path: '/library/:collectionName',
		name: 'collection',
		component: CollectionView,
		beforeEnter: authGuard,
		props: true,
	},
	{
		path: '/callback',
		name: 'callback',
		component: CallbackView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
