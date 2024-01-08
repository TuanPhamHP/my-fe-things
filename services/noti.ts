import { useAuthHeader } from '~~/composables/api';
import { apiResponde } from '~~/models';

const base = (API_BASE_URL: String) => {
	const authCookie = useCookie('auth-token');
	return {
		getListDataV2(): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/notifications`, {
				method: 'GET',
				headers: {
					authorization: `${authCookie.value || useAuthHeader()}`,
				},
			});
		},
		getListData(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/notifications`, {
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
