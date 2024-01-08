import { useAppStateStore } from '~~/store/appState';
export default defineNuxtPlugin(nuxtApp => {
	const appStateStore = useAppStateStore();
	nuxtApp.hook('page:start', () => {});
	nuxtApp.hook('page:finish', () => {
		// appStateStore.setGlobalLoading(false);
		setTimeout(() => {
			appStateStore.setGlobalLoading(false);
		}, 500);
	});
});
