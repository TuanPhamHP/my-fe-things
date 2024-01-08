<template>
	<div>
		<div
			v-for="item in detailData.delivery_orders"
			:key="item.id"
			class="px-6 py-6 border border-1 rounded-xxl mb-6 hover:border-primary hover:shadow-lg"
		>
			<DelivertyInfomation :detail-data="item" @force-get-detail="$emit('force-get-detail')" />
		</div>
		<div v-if="!ableToViewDetailDelivery">
			<img class="block mx-auto mt-10 mb-3" src="../../assets/images/not-found.png" alt="" />
			<p class="text-center text-xl font-semibold text-gray-900">Hiện tại chưa có phiếu giao hàng nào.</p>
		</div>
	</div>
</template>
<script lang="ts">
	import { DeliveryOrder } from '../../models/DeliveryOrder';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { OrderDetail } from '../../models/Order';
	import DelivertyInfomation from './DelivertyInfomation.vue';
	export default {
		components: { DelivertyInfomation },
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
			},
		},
		setup() {},
		computed: {
			ableToViewDetailDelivery() {
				return Boolean(
					this.detailData && Array.isArray(this.detailData.delivery_orders) && this.detailData.delivery_orders.length
				);
			},
		},
		methods: {},
	};
</script>
<style lang="scss" scoped></style>
