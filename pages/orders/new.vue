<template>
	<div>
		<OrderCreateIndex />
	</div>
</template>

<script lang="ts">
	import { useAppStateStore } from '../../store/appState';
	import { useNotificationStore } from '../../store/AppNotification';
	import OrderCreateIndex from '../../components/Orders/Create/OrderCreateIndex.vue';
	export default {
		setup() {
			const { $api } = useNuxtApp();
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();

			const api = $api;
			useHead({
				title: 'Tạo mới đơn hàng',
				meta: [{ name: 'description', content: 'Tạo mới đơn hàng' }],
			});
			return {
				api,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: {
			OrderCreateIndex,
		},
		mounted() {
			this.setBreadCrumbWithHomePage({ title: 'Tạo mới đơn hàng', route: '/nha-van-chuyen' });
			this.setCurrentViewTitle('Tạo mới đơn hàng');
		},
		data() {
			return {};
		},
		watch: {},
		methods: {},
	};
</script>
<style lang="scss" scoped></style>
