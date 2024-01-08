import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async to => {
	const authStore = useAuthStore();
	const authCookie = useCookie('auth-token');

	if (!authStore.isLogged) {
		if (to.name !== 'login') {
			if (authCookie.value) {
				// authStore.getUserInfo();
				authStore.getUserInfoHardCode();
				return;
			}
			return navigateTo('/login');
		}
	} else {
		if (to.name === 'login') {
			return navigateTo('/');
		}
	}
});
