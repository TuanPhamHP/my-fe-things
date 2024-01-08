import { useAuthHeader } from '~~/composables/api';
import { apiResponde } from '~~/models';

const base = (API_BASE_URL: String) => {
	const authCookie = useCookie('auth-token');

	return {
		getListData(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		getDetailData(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}`, {
				method: 'GET',
				query: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		update(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		updateStatus(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/status`, {
				method: 'PUT',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		create(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		cancelAddress(
			deliveryOrderId: number | string,
			addressId: number | string,
			payload?: Record<string, any>
		): Promise<apiResponde> {
			return $fetch(
				`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${deliveryOrderId}/order-addresses/${addressId}/cancel`,
				{
					method: 'POST',
					body: payload,
					headers: {
						authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
					},
				} as any
			);
		},
		startPickup(
			deliveryOrderId: number | string,
			addressId: number | string,
			payload?: Record<string, any>
		): Promise<apiResponde> {
			return $fetch(
				`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${deliveryOrderId}/order-addresses/${addressId}/start-pickup`,
				{
					method: 'POST',
					body: payload,
					headers: {
						authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
					},
				} as any
			);
		},
		startDeliver(deliveryOrderId: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${deliveryOrderId}/start-deliver`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		confirmSuccess(
			deliveryOrderId: number | string,
			addressId: number | string,
			payload?: Record<string, any>
		): Promise<apiResponde> {
			return $fetch(
				`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${deliveryOrderId}/order-addresses/${addressId}/confirm-success`,
				{
					method: 'POST',
					body: payload,
					headers: {
						authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
					},
				} as any
			);
		},
		confirmFailed(
			deliveryOrderId: number | string,
			addressId: number | string,
			payload?: Record<string, any>
		): Promise<apiResponde> {
			return $fetch(
				`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${deliveryOrderId}/order-addresses/${addressId}/confirm-failed`,
				{
					method: 'POST',
					body: payload,
					headers: {
						authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
					},
				} as any
			);
		},

		accept(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/accept`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		start(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/start`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		cancel(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/cancel`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		finish(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/finish`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		refuse(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/refuse`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		confirmPickedup(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/confirm-picked-up`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		confirmedPickedUpFailed(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/confirm-picked-up-failed`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},

		confirmedDelivered(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/confirm-delivered`, {
				method: 'POST',
				body: payload,
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			} as any);
		},
		rePickup(id: number | string, payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/delivery-management/delivery-orders/${id}/re-pickup`, {
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
