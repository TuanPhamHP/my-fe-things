<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		<NuxtLink
			to="/delivery-orders"
			class="w-10 h-10 flex items-center justify-center rounded-half hover:bg-gray-400/30"
		>
			<Icon name="solar:arrow-left-linear" size="32px" />
		</NuxtLink>
		<div v-if="detailData" class="tabs pt-8">
			<DelivertyInfomationDetail :detail-data="detailData" @force-get-detail="getDetailData" />
		</div>
	</div>
</template>
<script lang="ts">
	import { ref, reactive } from 'vue';
	import { useAppStateStore } from '../../../store/appState';
	import { DeliveryOrder } from '../../../models/DeliveryOrder';
	import DelivertyInfomationDetail from '../../../components/DeliveryOrder/DelivertyInfomationDetail.vue';
	export default {
		components: { DelivertyInfomationDetail },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const currentActiveTab = ref(1);
			const setCurrentTab = (_val: number) => {
				currentActiveTab.value = _val;
			};
			useHead({
				title: 'Chi tiết phiếu giao',
				meta: [{ name: 'description', content: 'Chi tiết phiếu giao' }],
			});
			return {
				currentActiveTab,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
				setCurrentTab,
			};
		},

		data() {
			return {
				detailData: null as DeliveryOrder | null,
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Chi tiết phiếu giao hàng');
			this.getDetailData();
		},
		methods: {
			async getDetailData() {
				await this.$api.deliveryOrders
					.getDetailData(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.delivery_order as DeliveryOrder;
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {});
			},
			onEdit() {
				this.$router.push(`/forwarders/${this.$route.params.id}/edit`);
			},
		},
	};
</script>
<style lang="scss">
	.tab-wrapper {
		.each-tab {
			position: relative;
			transition: 0.2s ease;
			&::before {
				content: '';
				transition: 0.2s ease;
				width: 60px;
				max-width: 40%;
				height: 4px;
				border-radius: 6px;
				background-color: #0b8e52;
				position: absolute;
				bottom: 0;
				left: -100%;
			}
		}
		&:nth-of-type(2n + 1) {
			.each-tab {
				&::before {
					transition: 0.15s ease;
					left: 100%;
				}
			}
		}

		.active-tab {
			&::before {
				bottom: 0;
				left: 12px !important;
			}
		}
	}
</style>
