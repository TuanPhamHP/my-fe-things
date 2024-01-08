<template>
	<div class="divide-y">
		<div class="pt-7">
			<OrderDetailGeneralInfomation :detail-data="detailData" />
			<OrderDetailCustomer :detail-data="detailData" @refresh-detail="getDetailData" />
			<OrderDetailDriver :detail-data="detailData" @refresh-detail="getDetailData" />
			<OrderDetailVehicle :detail-data="detailData" @refresh-detail="getDetailData" />
		</div>
	</div>
</template>
<script lang="ts">
	import OrderDetailGeneralInfomation from '../../Orders/Detail/OrderDetailGeneralInfomation.vue';
	import OrderDetailCustomer from '../../Orders/Detail/OrderDetailCustomer.vue';
	import OrderDetailDriver from '../../Orders/Detail/OrderDetailDriver.vue';
	import OrderDetailVehicle from '../../Orders/Detail/OrderDetailVehicle.vue';

	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { OrderDetail } from '../../../models/Order';
	export default {
		components: {
			OrderDetailGeneralInfomation,
			OrderDetailCustomer,
			OrderDetailDriver,
			OrderDetailVehicle,
		},
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
			},
		},
		computed: {
			user() {
				return {
					avatar: '',
					name: 'USER',
				};
			},
		},
		methods: {
			getDetailData() {
				this.$emit('force-get-detail');
			},
		},
	};
</script>
<style lang="scss" scoped>
	.status-badge {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0px;
			width: 20px;
			height: 20px;
			border-radius: 100%;
			background-color: #fe9705;
			z-index: 2;
			transform: translateY(-50%);
		}
		&.is-active {
			&::before {
				background-color: #22c55e;
			}
		}
	}
</style>
