import { useAuthHeader } from '~~/composables/api';
import { apiResponde } from '~~/models';

const base = (API_BASE_URL: String) => {
	const authCookie = useCookie('auth-token');
	return {
		getListData(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailData(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailDataDeliveryLogs(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/delivery-logs`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailDataJobs(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/jobs`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailDataDocs(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/documents`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailJob(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/jobs/${id}`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},

		create(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		updateDeliveryLog(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/delivery-logs/${id}`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		createOrderDeliveryLog(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/delivery-logs`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		submitOrderJob(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/jobs/${id}/submit`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		start(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/start`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		update(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},

		updateStatus(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/status`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},

		assignForwarder(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/assign-forwarder`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		accept(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/accept`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		refuse(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/refuse`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		confirm(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/confirm`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		cancelForwarder(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/cancel-forwarder`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		cancel(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/order-management/orders/${id}/cancel`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
	};
};
export default base;
