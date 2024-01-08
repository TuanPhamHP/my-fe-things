<template>
	<div class="col-span-2">
		<AutocompleteNormal
			:init-data="driver_id"
			placeholder="-- Chọn tài xế --"
			:list-items="allDriverComputed"
			required
			clearable
			rounded="md"
			size="xxl"
			:title="'Chọn tài xế'"
			@selected="changeDriver"
			:isError="Boolean(dataErrors.driver_id) && flagSubmit"
			:errorMsg="dataErrors.driver_id"
		/>
	</div>
	<div class="col-span-2">
		<AutocompleteNormal
			:init-data="vehicle_id"
			placeholder="-- Chọn xe --"
			:list-items="allVehiclesComputed"
			required
			clearable
			rounded="md"
			size="xxl"
			:title="'Chọn xe'"
			@selected="changeVehicle"
			:isError="Boolean(dataErrors.vehicle_id) && flagSubmit"
			:errorMsg="dataErrors.vehicle_id"
		/>
	</div>
	<div class="col-span-2">
		<AutocompleteMultiple
			:init-data="pickup_address_ids"
			placeholder="-- Chọn điểm lấy --"
			:list-items="listPickupAddressComputed"
			required
			clearable
			direction="col"
			rounded="md"
			size="xxl"
			:title="'Chọn điểm lấy'"
			@selected="changePickupAddress"
			:isError="Boolean(dataErrors.pickup_address_ids) && flagSubmit"
			:errorMsg="dataErrors.pickup_address_ids"
		/>
	</div>
	<div class="col-span-2">
		<AutocompleteMultiple
			:init-data="deliver_address_ids"
			placeholder="-- Chọn điểm giao --"
			:list-items="listDeliverAddressComputed"
			required
			clearable
			direction="col"
			rounded="md"
			size="xxl"
			:title="'Chọn điểm giao'"
			@selected="changePickupAddress"
			:isError="Boolean(dataErrors.deliver_address_ids) && flagSubmit"
			:errorMsg="dataErrors.deliver_address_ids"
		/>
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useInternalStore } from '../../store/Internal';
	import BlockInputVue from '~~/components/Form/BlockInput.vue';
	import AutocompleteNormal from '~~/components/Form/AutocompleteNormal.vue';
	import AutocompleteMultiple from '~~/components/Form/AutocompleteMultiple.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { OrderDetail } from '../../models/Order';
	import { AddressComputed } from '../../models/index';

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
			flagSubmit: {
				type: Boolean,
				default: false,
			},
			isMultiplePickupAddress: {
				type: Boolean,
				default: false,
			},
			isMultipleDeliverAddress: {
				type: Boolean,
				default: false,
			},
			isMultipleVehicles: {
				type: Boolean,
				default: false,
			},
			currentDataIndex: {
				type: Number,
				default: 0,
			},
		},
		components: {
			Dialog,
			DialogPanel,
			DialogTitle,
			TransitionChild,
			TransitionRoot,
			BlockInputVue,
			AutocompleteNormal,
			AutocompleteMultiple,
		},
		data(): Record<string, any> {
			return {
				vehicle_id: null as string | number | null,
				driver_id: null as string | number | null,
				pickup_address_ids: [] as (string | number | null)[],
				deliver_address_ids: [] as (string | number | null)[],
			};
		},
		watch: {
			visible() {
				this.open = this.visible;
				this.resetData();
			},
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					vehicle_id: ['required'],
					driver_id: ['required'],
					pickup_address_ids: ['array:required'],
					deliver_address_ids: ['array:required'],
				};
			},
			dataErrors() {
				const obj = {
					vehicle_id: this.vehicle_id,
					driver_id: this.driver_id,
					pickup_address_ids: this.pickup_address_ids,
					deliver_address_ids: this.deliver_address_ids,
				};
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
			listPickupAddressComputed() {
				return this.detailData
					? this.detailData.pickup_addresses?.map(o => ({
							...o,
							textComputed: this.$globalHelpers.getFullAddressTruncate(o.address as AddressComputed, 30),
					  })) || []
					: [];
			},
			listDeliverAddressComputed() {
				return this.detailData
					? this.detailData.deliver_addresses?.map(o => ({
							...o,
							textComputed: this.$globalHelpers.getFullAddressTruncate(o.address as AddressComputed, 30),
					  })) || []
					: [];
			},

			allVehiclesComputed() {
				return this.allVehicles.map(o => {
					return {
						...o,
						textComputed: `${o.vehicle_type?.name} ${o.vehicle_weight?.name} - ${o.plate_number}`,
					};
				});
			},
			allDriverComputed() {
				return this.listDriver.map(o => {
					return {
						...o,
						textComputed: `${o.name} - ${o.phone}`,
					};
				});
			},
		},
		methods: {
			changeVehicle(val: string | number) {
				this.vehicle_id = val;
			},
			changeDriver(val: string | number) {
				this.driver_id = val;
			},
			resetData() {
				this.vehicle_id = null;
				this.diver_id = null;
				this.pickup_address_ids = [];
				this.deliver_address_ids = [];
			},
			cancel() {
				this.closeModal();
			},
			submit() {
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

			changePickupAddress(val: string[] | number[]) {
				this.pickup_address_ids = val;
			},
		},
	};
</script>
