import { useAuthHeader } from '~~/composables/api';
import { apiResponde } from '~~/models';

const base = (API_BASE_URL: String) => {
	return {
		getListData(payload?: Object): Promise<apiResponde> {
			return $fetch(`${API_BASE_URL}/api/admin/announcements`, {
				method: 'GET',
				params: { ...payload },
				headers: {
					authorization: `${useAuthHeader()}`,
				},
			});
		},
	};
};
export default base;
