import { useAuthHeader } from '~~/composables/api';
import { apiResponde } from '~~/models';

const base = (API_BASE_URL: String) => {
	const authCookie = useCookie('auth-token');
	return {
		getListData(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/customer-management/customers`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailData(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/customer-management/customers/${id}`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		update(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/customer-management/customers/${id}`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		updateStatus(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/customer-management/customers/${id}/status`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		create(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/customer-management/customers`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
	};
};
export default base;
