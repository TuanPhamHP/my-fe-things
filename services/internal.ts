import { useAuthHeader } from '../composables/api';
import { apiResponde } from '../models/index';

const base = (API_BASE_URL: String) => {
	const authCookie = useCookie('auth-token');
	return {
		getListProvince(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/address-management/provinces`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
		getListDistrict(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/address-management/districts`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
		getListWards(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/address-management/wards`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
		getListMerchandiseTypes(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/common-type/merchandise-types`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
		getListContainerTypes(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/common-type/container-types`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
		getListDeliveryStatuses(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/common-type/delivery-statuses`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${authCookie.value ? `Bearer ${authCookie.value}` : useAuthHeader()}`,
				},
			});
		},
		getListOrderStatuses(payload?: Record<string, any>): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/common-type/order-statuses`, {
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
