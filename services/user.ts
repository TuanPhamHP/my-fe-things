import { apiResponde } from '~~/models';
const base = (API_BASE_URL: String) => {
	return {
		login(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/login`, {
				method: 'POST',
				body: payload,
			});
		},
		getUserInfo(_token?: string | null, payload?: Object): Promise<apiResponde> {
			const authCookie = useCookie('auth-token');
			return _token
				? $fetch(`${API_BASE_URL}/api/admin/me`, {
						method: 'GET',
						params: { ...payload },
						headers: {
							Authorization: `Bearer ${_token}`,
						},
				  })
				: $fetch(`${API_BASE_URL}/api/admin/me`, {
						method: 'GET',
						params: { ...payload },
						headers: {
							Authorization: `Bearer ${authCookie.value}`,
						},
				  });
		},
		getUserInfoHardCode(_token?: string | null, payload?: Object): any {
			return _token;
		},
	};
};

export default base;
