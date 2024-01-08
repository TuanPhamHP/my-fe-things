<template>
	<div
		v-if="forwarder"
		class="px-6 py-5 rounded-xxxl border border-1 hover:shadow-lg transition-all"
		style="max-width: 415px"
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
		</div>
		<div class="flex items-center justify-between border-b-1 pb-4">
			<p class="text-gray-400">Phí vận chuyển:</p>
			<p class="flex items-end gap-2">
				<span class="text-gray-800 display-xs font-semibold">{{
					$globalHelpers.getCurrency(rootData.estimate_cost || '')
				}}</span>
				<span class="text-lg text-gray-400 font-semibold">VNĐ</span>
			</p>
		</div>
		<p class="text-red-600 font-semibold text-lg mt-4 text-right">
			{{ forwarderStatusText }}
		</p>
	</div>
</template>
<script lang="ts">
	import { OrderDetail, OrderCancelledForwarder } from '../../models/Order';
	import SepNormalButton from '../Buttons/SepNormalButton.vue';
	import { useNotificationStore } from '../../store/AppNotification';

	export default {
		components: { SepNormalButton },
		props: {
			detailData: {
				type: Object as PropType<OrderCancelledForwarder>,
				default: {},
			},
			rootData: {
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
				return this.detailData;
			},

			forwarderStatusText() {
				return this.detailData.reason || '---';
			},
		},
		methods: {},
	};
</script>
