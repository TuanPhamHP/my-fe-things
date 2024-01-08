<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		{{ announcements }}
		<div
			class="d-block my-3"
			color="primary"
			@click="
				() => {
					refresh();
				}
			"
		>
			fetchData
		</div>
		<div class="d-block my-3" color="primary" :loading="loading" @click="tada">f2</div>
	</div>
</template>
<script lang="ts">
	import { useAuthStore } from '~/store/auth';
	import { useAppStateStore } from '~/store/appState';

	export default {
		async setup() {
			const authStore = useAuthStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const authCookie = useCookie('auth-token');
			const config = useRuntimeConfig();
			const { $api } = useNuxtApp();
			const api = $api;
			const page = ref(1);
			const lData = ref([]);
			const {
				data: announcements,
				pending,
				refresh,
				error,
			} = await useFetch(() => `/api/admin/announcements`, {
				baseURL: config.public.baseUrl,
				params: {
					page: 1,
					search: 'whahaha',
				},
				headers: {
					authorization: `Bearer ${authCookie.value}`,
				},
			});
			if (error.value) {
				const val = error.value;
				console.log(val);
				// notificationStore.setSnack({ text: val?.data.message || '', type: 'error' });
			} else {
			}
			function previous() {
				page.value--;
				refresh();
			}
			function next() {
				page.value++;
				refresh();
			}

			return {
				announcements,
				pending,
				api,
				error,
				refresh,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},

		data() {
			return {
				listData: null,
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Trang chủ');
		},
		methods: {
			async tada() {
				this.loading = true;
				await this.api.news.getListData({
					page: 1,
					search: 'whahaha',
				});
				this.loading = false;
			},
		},
	};
</script>
