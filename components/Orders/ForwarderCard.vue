<template>
	<div
		v-if="forwarder"
		class="px-6 py-5 rounded-xxxl border border-1 mb-6 hover:shadow-lg transition-all"
		style="max-width: 600px"
	>
		<div class="flex items-start gap-4 mb-4">
			<img src="../../assets/images/forwarder-icon.svg" alt="" width="80px" style="min-width: 80px" />
			<div class="w-full">
				<p class="text-xl text-gray-700 font-semibold mb-4">
					{{ forwarder.representative_name }}
				</p>
				<p class="flex items-center gap-2 text-md font-semibold text-info bg-infoLight w-fit px-4 py-2 rounded-full">
					<img src="../../assets/images/icon/call.svg" alt="" style="min-width: 20px; width: 20px" />
					{{ forwarder.phone }}
				</p>
			</div>
			<div>
				<p class="whitespace-nowrap uppercase text-xs rounded-md text-white py-1 px-2" :class="forwarderStatusColors">
					{{ forwarderStatusText }}
				</p>
			</div>
		</div>
		<div class="flex items-center justify-between border-b-1 pb-4">
			<p class="text-gray-400">Phí vận chuyển:</p>
			<p class="flex items-end gap-2">
				<span class="text-gray-800 display-xs font-semibold">{{
					$globalHelpers.getCurrency(detailData.estimate_cost || '')
				}}</span>
				<span class="text-lg text-gray-400 font-semibold">VNĐ</span>
			</p>
		</div>
		<div class="btn-group pt-4">
			<SepNormalButton
				size="xxl"
				text-size="lg"
				type="submit"
				text-weight="semibold"
				:container-class="'block ml-auto rounded-xl font-normal'"
				:color="'outline-red'"
				:loading="loadingUpdate"
				:disabled="!detailData.can_be_canceled_forwarder"
				@click="cancelForwarder"
			>
				Hủy đối tác
			</SepNormalButton>
		</div>
	</div>
</template>
<script lang="ts">
	import { OrderDetail } from 'models/Order';
	import { Forwarder } from '../../models/Forwarder';
	import SepNormalButton from '../Buttons/SepNormalButton.vue';
	import { useNotificationStore } from '../../store/AppNotification';

	export default {
		components: { SepNormalButton },
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
			},
		},
		setup() {
			const notificationStore = useNotificationStore();
			return {
				notificationStore,
			};
		},
		data() {
			return {
				loadingUpdate: false,
			};
		},
		computed: {
			forwarder() {
				return this.detailData.forwarder;
			},
			forwarderStatusText() {
				return this.detailData.forwarder_confirmed_at ? 'đã xác nhận' : 'chờ xác nhận';
			},
			forwarderStatusColors() {
				return this.detailData.forwarder_confirmed_at ? 'bg-success' : 'bg-warning';
			},
		},
		methods: {
			cancelForwarder(): void {
				this.loadingUpdate = true;
				this.$api.orders
					.cancelForwarder(this.detailData.id, { forwarder_id: this.forwarder?.id })
					.then(
						res => {
							this.$emit('cancel-forwarder-success');
							this.notificationStore.setSnack({
								text: 'Hủy đối tác vận chuyển thành công',
								type: 'success',
							});
						},
						err => {
							console.log(err);
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Hủy đối tác vận chuyển thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingUpdate = false;
					});
			},
		},
	};
</script>
