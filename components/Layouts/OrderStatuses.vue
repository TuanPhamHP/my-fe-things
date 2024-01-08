<template>
	<div class="grid grid-cols-9 gap-0 items-center">
		<div
			v-for="(item, idx) in listOrderStatusesComputed"
			:key="item.id"
			class="each-status col-span-1 gap-2 flex flex-col items-center justify-center"
		>
			<div class="flex items-center gap-0 w-full">
				<div class="left-divider" :class="`${idx ? '' : 'opacity-0'} bg-${getStepDividerBackground(item.id)}`"></div>

				<div
					class="rounded-full step-operator flex items-center justify-center border-2"
					:class="`${
						item.id !== currentStatusGroupId
							? `bg-${getStepStatusBackground(item.id)} border-${getStepStatusBackground(item.id)}`
							: item.id === 90
							? `bg-${getStepStatusBackground(item.id)} border-${getStepStatusBackground(item.id)}`
							: 'step-wrapper-current'
					}`"
				>
					<span
						class="text-white title-lg font-semibold"
						:class="`${
							item.id !== currentStatusGroupId || item.id === 90
								? ''
								: `step-counter-current bg-${getStepStatusBackground(item.id)}`
						}`"
						>{{ item.id !== currentStatusGroupId ? idx + 1 : item.id === 90 ? '9' : '' }}</span
					>
				</div>
				<div
					class="right-divider"
					:class="`${idx === listOrderStatusesComputed.length - 1 ? 'opacity-0' : ''} bg-${getStepDividerBackground(
						item.id
					)}`"
				></div>
			</div>
			<p class="font-semibold body-lg" :class="`text-${getStepStatusBackground(item.id)}`">
				{{ item.name }}
			</p>
			<span class="text-sm text-neutral-400 h-4">{{ getStatusTime(item.id) }}</span>
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
		},
		setup() {
			const listOrderStatuses = reactive([
				{
					id: 10,
					name: 'Bản nháp',
				},
				{
					id: 20,
					name: 'Bắt đầu',
				},
				{
					id: 30,
					name: 'Đang vận chuyển',
				},
				{
					id: 40,
					name: 'Chải sầu',
				},
				{
					id: 50,
					name: 'Vào B2 & bãi XC',
				},
				{
					id: 60,
					name: 'Kiểm dịch',
				},
				{
					id: 70,
					name: 'B1',
				},
				{
					id: 80,
					name: 'Bàn giao hàng',
				},
				{
					id: 90,
					name: 'Hoàn thành',
				},
			]);
			return {
				listOrderStatuses,
			};
		},
		computed: {
			listOrderStatusesComputed() {
				return this.listOrderStatuses.filter(o => o.id);
			},
			currentStatusGroupId() {
				return +this.detailData.status.id;
			},
		},
		methods: {
			formatDateCustom,
			getStatusTime(statusId: number) {
				if (!this.detailData || !this.detailData.status_logs) {
					return '';
				}

				const log = this.detailData.status_logs.find(o => o.id === statusId);
				return log ? this.formatDateCustom(log.set_at, 'H:mm | dd/MM/yyyy') : '';
			},
			getStepStatusName(statusId: number) {
				if (!this.detailData) {
					return '';
				}

				if (statusId < this.currentStatusGroupId || statusId === 90) {
					return 'done';
				}
				if (statusId === this.currentStatusGroupId) {
					return 'doing';
				}
				if (statusId > this.currentStatusGroupId) {
					return 'disabled';
				}
				return 'cancel';
			},
			getStepStatusBackground(statusId: number) {
				const statusName = this.getStepStatusName(statusId);
				switch (statusName) {
					case 'done':
						return 'success-500';
					case 'doing':
						return 'warning-500';
					case 'disabled':
						return 'neutral-500';
					case 'cancel':
						return 'red-500';
					default:
						return 'neutral-500';
				}
			},
			getStepDividerBackground(statusId: number) {
				const statusName = this.getStepStatusName(statusId);
				switch (statusName) {
					case 'done':
						return 'success-300';
					case 'doing':
						return 'warning-300';
					case 'disabled':
						return 'neutral-300';
					case 'cancel':
						return 'red-300';
					default:
						return 'neutral-300';
				}
			},
			getStepStatusIconName(statusId: number) {
				const statusName = this.getStepStatusName(statusId);
				switch (statusName) {
					case 'done':
						return 'solar:check-circle-bold';
					case 'doing':
						return 'ion:sync-circle-sharp';
					case 'disabled':
						return 'ph:circle-fill';
					default:
						return 'ph:circle-fill';
				}
			},
		},
	};
</script>
<style lang="scss" scoped>
	.step-operator {
		height: 40px;
		width: 40px;
		min-height: 40px;
		min-width: 40px;
	}
	.left-divider,
	.right-divider {
		width: 100%;
		height: 2px;
		/* background-color: #d5d5d5; */
		border-radius: 0px;
	}
	.step-counter-current {
		width: 16px;
		min-width: 16px;
		height: 16px;
		min-height: 16px;
		border-radius: 100%;
	}
	.step-wrapper-current {
		background-color: #fff;
		border-color: #eab308 !important ;
	}
</style>
