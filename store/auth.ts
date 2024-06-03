import { defineStore } from 'pinia';
import { AuthUser, apiResponde } from '~/models/index';
import { CookieOptions } from '~/models';
export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: { name: 'Admin', token: '123456' } as AuthUser | null,
		token: '123456' as String,
	}),
	getters: {
		isLogged: state => !!state.user && !!state.token,
	},
	actions: {
		setUser(payload: AuthUser) {
			this.user = payload;
		},
		setToken(payload: String) {
			this.token = payload;
		},

		logout() {
			const opt: CookieOptions = {
				maxAge: 1,
				sameSite: 'lax',
			};
			const authCookie = useCookie('auth-token', opt);
			const authFreshCookie = useCookie('auth-token-refresh', opt);
			authCookie.value = '';
			authFreshCookie.value = '';
			this.user = null;
			this.token = '';
		},
		getUserInfo() {
			const { $api } = useNuxtApp();
			const authCookie = useCookie('auth-token');
			const token = authCookie.value || (this.token as string);
			$api.user
				.getUserInfo(token)
				.then(res => {
					const rs = res as apiResponde;
					const user: Record<string, any> = rs.data.user;
					this.token = `${authCookie.value}`;
					this.user = { ...user, name: user.name, id: user.id, token: `${authCookie.value}` };
				})
				.catch(err => {
					console.log('failed by pinia');
					const opt: CookieOptions = {
						maxAge: 1,
						sameSite: 'lax',
					};
					const authCookie = useCookie('auth-token', opt);
					const authFreshCookie = useCookie('auth-token-refresh', opt);
					authCookie.value = '';
					authFreshCookie.value = '';
					this.user = null;
					this.token = '';
					window.location.href = '/login';
				});
		},
		getUserInfoHardCode() {
			const authCookie = useCookie('auth-token');
			const token = authCookie.value || (this.token as string);
			if (token) {
				const user = {
					avatar: 'http://xc-id-dev.maychudev.com/assets/images/user.png',
					code: 'XC-0001',
					email: 'admin@gmail.com',
					id: 1,
					is_active: true,
					name: 'Admin',
					position: {
						department: {
							children: null,
							id: 1,
							level: null,
							name: 'Phòng Công Nghệ',
							parent_id: null,
							short_code: null,
							system_code: null,
						},
						id: 1,
						level: null,
						name: 'Nhân viên lập trình',
					},
				};
				this.token = `make-up-token`;
				this.user = { ...user, name: user.name, id: user.id, token: `${authCookie.value}` };
			}
		},
	},
});
