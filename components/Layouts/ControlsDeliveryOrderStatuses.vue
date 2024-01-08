<template>
	<div class="grid gap-0 items-start" :class="`grid-cols-${totalVehicles}`">
		<div
			v-for="(item, idx) in totalVehicles"
			:key="item"
			class="each-status col-span-1 gap-2 flex flex-col items-center justify-center"
		>
			<div class="flex items-center gap-2 w-full">
				<div class="left-divider" :class="`${idx ? '' : 'opacity-0'} bg-${getStepStatusBackground(idx)}`"></div>
				<div class="status-pointer" :class="`status-pointer-${getStepStatusName(idx)}`"></div>
				<div
					class="right-divider"
					:class="`${idx === totalVehicles - 1 ? 'opacity-0' : ''} bg-${getStepStatusBackground(idx)}`"
				></div>
			</div>
			<p class="text-gray-900 font-bold text-md">Chọn cặp xe {{ idx + 1 }}</p>
		</div>
	</div>
</template>
<script lang="ts">
	import { formatDateCustom } from '../../helpers/formatter';
	import { OrderDetail } from '../../models/Order';

	export default {
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
			},
			currentDataIndex: {
				type: Number,
				default: 0,
			},
		},
		setup() {
			const listOrderStatuses = reactive([
				{
					id: 1,
					name: 'Đơn hàng',
					iconName: 'solar:file-favourite-outline',
				},
				{
					id: 2,
					name: 'Điều phối',
					iconName: 'ph:gear',
				},
				{
					id: 3,
					name: 'Giao hàng',
					iconName: 'mdi:truck-fast-outline',
				},
				{
					id: 4,
					name: 'Hoàn thành',
					iconName: 'prime:check-circle',
				},
				{
					id: 5,
					name: 'Đã hủy',
					iconName: 'solar:close-circle-linear',
				},
			]);
			return {
				listOrderStatuses,
			};
		},
		computed: {
			totalVehicles() {
				return +(this.detailData?.num_of_vehicles || 1) + 1;
			},
		},
		methods: {
			formatDateCustom,

			getStepStatusName(statusId: number) {
				if (!this.detailData) {
					return '';
				}
				const currentStatusGroupId = this.currentDataIndex;

				if (statusId < currentStatusGroupId) {
					return 'done';
				}
				if (statusId === currentStatusGroupId) {
					return 'doing';
				}
				if (statusId > currentStatusGroupId) {
					return 'disabled';
				}
			},
			getStepStatusBackground(statusId: number) {
				const statusName = this.getStepStatusName(statusId);
				switch (statusName) {
					case 'done':
						return 'success';
					case 'doing':
						return 'warning';
					case 'disabled':
						return 'gray-300';
					default:
						return 'gray-300';
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
	.left-divider,
	.right-divider {
		width: 100%;
		height: 4px;
		/* background-color: #d5d5d5; */
		border-radius: 0px;
	}
	.status-pointer {
		width: 32px;
		min-width: 32px;
		height: 32px;
		border-radius: 100%;
		background-color: transparent;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 16px;
			height: 16px;
			min-width: 16px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 2;
			background-color: #8896ab;
			border-radius: 100%;
		}
		&-doing {
			background-color: #f59f0b6d;
			&::before {
				background-color: #f59f0b;
			}
		}
		&-done {
			&::before {
				background-color: #2ad168;
			}
		}
	}
</style>
