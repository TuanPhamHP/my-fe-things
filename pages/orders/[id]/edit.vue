<template>
	<div v-if="detailData">
		<OrderUpateIndex :detail-data="detailData" />
	</div>
</template>

<script lang="ts">
	import { OrderDetail } from '../../../models/Order';
	import { useAppStateStore } from '../../../store/appState';
	import { useNotificationStore } from '../../../store/AppNotification';
	import OrderUpateIndex from '../../../components/Orders/Update/OrderUpateIndex.vue';
	export default {
		setup() {
			const { $api } = useNuxtApp();
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();

			const api = $api;
			useHead({
				title: 'Chỉnh sửa đơn hàng',
				meta: [{ name: 'description', content: 'Chỉnh sửa đơn hàng' }],
			});
			return {
				api,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: {
			OrderUpateIndex,
		},
		mounted() {
			this.getDetailData();
			this.setBreadCrumbWithHomePage({ title: 'Chỉnh sửa đơn hàng', route: '/nha-van-chuyen' });
			this.setCurrentViewTitle('Chỉnh sửa đơn hàng');
		},
		data() {
			return {
				detailData: null as OrderDetail | null,
				loading: false,
			};
		},
		watch: {},
		methods: {
			getDetailData() {
				this.api.orders
					.getDetailData(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.order as OrderDetail;
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {});
			},
		},
	};
</script>
<style lang="scss" scoped></style>
