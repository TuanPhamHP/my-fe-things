import { useAuthHeader } from '../composables/api';
import { apiResponde } from '../models/index';
const base = (API_BASE_URL: String) => {
	const authCookie = useCookie('auth-token');
	return {
		getListUsers(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/user-management/users`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
	};
};
export default base;
