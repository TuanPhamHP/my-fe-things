<template>
	<TransitionRoot as="template" :show="Boolean(open)">
		<Dialog as="div" class="relative z-20">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			</TransitionChild>

			<div class="fixed inset-0 z-20 overflow-y-auto">
				<div
					class="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-0 max-w-[90vw] w-[600px] m-auto"
				>
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<DialogPanel
							class="relative w-full transform overflow-hidden rounded-xxl bg-white p-0 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xxl sm:p-0"
						>
							<div class="block">
								<div class="mt-0 text-center sm:text-left">
									<DialogTitle
										as="h3"
										class="px-6 py-4 w-full flex items-center font-semibold leading-6 bg-primary-500 text-white text-xl font-semibold"
										>Điều phối vận chuyển
										<Icon name="carbon:close" class="text-white ml-auto cursor-pointer" size="24px" @click="cancel" />
									</DialogTitle>
									<div v-if="detailData" class="mt-0 py-6 px-6">
										<div v-if="+(detailData?.num_of_vehicles || 0) > 1" class="col-span-2">
											<p class="text-center text-gray-400 text-xs">
												Bạn cần chọn thêm <b class="text-gray-700">{{ +(detailData?.num_of_vehicles || 0) }} cặp xe</b>
												để hoàn thành
											</p>
											<ControlsDeliveryOrderStatuses :detail-data="detailData" :current-data-index="currentDataIndex" />
										</div>
										<div class="mt-0 grid grid-cols-2 gap-4" v-for="(item, idx) in detailData.num_of_vehicles">
											<DeliverJobVue
												v-if="idx === currentDataIndex"
												:current-data-index="currentDataIndex"
												:key="item"
												:detail-data="detailData"
												:flag-submit="flagSubmit"
												:is-multiple-pickup-address="isMultiplePickupAddress"
												:is-multiple-deliver-address="isMultipleDeliverAddress"
												:is-multiple-vehicles="isMultipleVehicles"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="py-6 px-6 sm:flex justify-end">
								<button
									type="button"
									class="sm:text-lg inline-flex w-full justify-center rounded-xl bg-primary-500 px-3 py-3.5 text-md font-regular text-white hover:bg-red-500 sm:ml-3 sm:w-[150px]"
									:class="loading ? 'pointer-events-none' : ''"
									@click="submit"
								>
									Thêm mới <Icon v-if="loading" name="line-md:loading-loop" size="18px" />
								</button>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useInternalStore } from '../../store/Internal';
	import BlockInputVue from '~~/components/Form/BlockInput.vue';
	import DeliverJobVue from '../DeliveryOrder/DeliverJob.vue';
	import ControlsDeliveryOrderStatuses from '../Layouts/ControlsDeliveryOrderStatuses.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { OrderDetail } from '../../models/Order';

	export default {
		setup() {
			const { listDriver, allVehicles } = storeToRefs(useInternalStore());
			return {
				allVehicles,
				listDriver,
			};
		},
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
			loading: {
				type: Boolean,
				default: false,
			},
			closeModal: {
				type: Function,
				default() {},
			},
			detailData: {
				type: Object as PropType<OrderDetail>,
				default() {},
			},
		},
		components: {
			Dialog,
			DialogPanel,
			DialogTitle,
			TransitionChild,
			TransitionRoot,
			DeliverJobVue,
			BlockInputVue,
			ControlsDeliveryOrderStatuses,
		},
		data(): Record<string, any> {
			return {
				open: false,
				flagSubmit: false,
				formData: [] as any[],
				currentDataIndex: 0,
			};
		},
		watch: {
			visible() {
				this.open = this.visible;
				this.resetData();
			},
		},
		computed: {
			isMultiplePickupAddress() {
				//@ts-ignore
				return this.detailData.pickup_addresses?.length > 1;
			},
			isMultipleDeliverAddress() {
				//@ts-ignore
				return this.detailData.deliver_addresses?.length > 1;
			},
			isMultipleVehicles() {
				//@ts-ignore
				return this.detailData.num_of_vehicles > 1;
			},
		},
		methods: {
			resetData() {
				this.flagSubmit = false;
			},
			cancel() {
				this.closeModal();
			},
			submit() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					return;
				}
				const obj = {
					vehicle_id: this.vehicle_id,
					diver_id: this.diver_id,
					pickup_address_ids: this.pickup_address_ids,
					deliver_address_ids: this.deliver_address_ids,
				};
				this.$emit('submit', obj);
			},
		},
	};
</script>
