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
					class="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-0 max-w-[90vw] w-[800px] m-auto"
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
										class="px-6 py-4 w-full font-semibold leading-6 bg-primary-500 text-white text-xl font-semibold"
										>Chỉnh sửa xe</DialogTitle
									>
									<div class="mt-2 py-6 px-6 grid grid-cols-2 gap-4">
										<div class="col-span-1">
											<AutocompleteNormal
												:init-data="vehicle_type_id"
												placeholder="-- Chọn loại xe --"
												:list-items="listVehicles"
												required
												clearable
												rounded="md"
												size="xxl"
												:title="'Loại xe'"
												@selected="changeVehicleType"
												:isError="Boolean(dataErrors.vehicle_type_id) && flagSubmit"
												:errorMsg="dataErrors.vehicle_type_id"
											/>
										</div>
										<div class="col-span-1">
											<AutocompleteNormal
												:init-data="vehicle_weight_id"
												placeholder="-- Chọn tải trọng --"
												:list-items="vehicleWeightTypes"
												required
												clearable
												rounded="md"
												size="xxl"
												:title="'Tải trọng'"
												:empty-no-search-message="'Chọn loại xe trước'"
												@selected="changeVehicleWeight"
												:isError="Boolean(dataErrors.vehicle_weight_id) && flagSubmit"
												:errorMsg="dataErrors.vehicle_weight_id"
											/>
										</div>

										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="plate_number"
												title="Biển số xe"
												placeholder="VD: 29H-12345"
												container-class="mb-0 "
												input-class="uppercase"
												size="xxl"
												required
												counter
												:max-length="15"
												:isError="Boolean(dataErrors.plate_number) && flagSubmit"
												:errorMsg="dataErrors.plate_number"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="mooc_number"
												title="Số mooc"
												placeholder="VD: 1234567"
												container-class="mb-0"
												size="xxl"
												counter
												:max-length="15"
												:isError="Boolean(dataErrors.mooc_number) && flagSubmit"
												:errorMsg="dataErrors.mooc_number"
											/>
										</div>
										<div class="col-span-2">
											<BlockInputVue
												rounded="lg"
												v-model="manufacturer"
												title="Hãng sản xuất"
												placeholder="VD: Vinfast"
												container-class="mb-0"
												size="xxl"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="py-6 px-6 sm:flex justify-end">
								<button
									type="button"
									class="sm:text-lg inline-flex w-full justify-center rounded-xl bg-white px-3 py-3.5 text-lg font-regular ring-1 ring-inset ring-red-500 hover:bg-red-300/25 sm:mt-0 sm:w-[150px] text-red-500 border-red-500"
									ref="cancelButtonRef"
									:disabled="loading"
									@click="cancel"
								>
									Hủy
								</button>
								<button
									type="button"
									class="sm:text-lg inline-flex w-full justify-center rounded-xl bg-primary-500 px-3 py-3.5 text-lg font-regular text-white hover:bg-red-500 sm:ml-3 sm:w-[150px]"
									:class="loading ? 'pointer-events-none' : ''"
									@click="submit"
								>
									Lưu <Icon v-if="loading" name="line-md:loading-loop" size="18px" />
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
	import AutocompleteNormal from '~~/components/Form/AutocompleteNormal.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { Vehicle } from '../../models/Vehicle';

	export default {
		setup() {
			const { customerStatuses, listVehicles } = storeToRefs(useInternalStore());
			return {
				listVehicles,
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
				type: Object as PropType<Vehicle | null>,
				default() {
					return {};
				},
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
		},
		data(): Record<string, any> {
			return {
				open: false,
				flagSubmit: false,
				vehicle_type_id: null as string | number | null,
				vehicle_weight_id: null as string | number | null,
				plate_number: '' as string,
				mooc_number: '' as string,
				manufacturer: '' as string,
			};
		},
		watch: {
			visible() {
				this.open = this.visible;
				this.resetData();
				if (this.visible) {
					this.syncData();
				}
			},
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					vehicle_type_id: ['required'],
					vehicle_weight_id: ['required'],
					plate_number: ['required', 'max:15'],
					mooc_number: ['max:15'],
				};
			},
			selectedVehicle() {
				return this.listVehicles.find(o => o.id === this.vehicle_type_id);
			},
			vehicleWeightTypes() {
				return this.selectedVehicle ? this.selectedVehicle.vehicle_weights || [] : [];
			},
			dataErrors() {
				const obj = {
					vehicle_type_id: this.vehicle_type_id,
					vehicle_weight_id: this.vehicle_weight_id,
					plate_number: this.plate_number || '',
					mooc_number: this.mooc_number || '',
				};
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
		},
		methods: {
			syncData() {
				if (!this.detailData) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể sync data' });
					return;
				}
				this.vehicle_weight_id = this.detailData.vehicle_weight?.id;
				this.vehicle_type_id = this.detailData.vehicle_type?.id;
				this.plate_number = this.detailData.plate_number;
				this.mooc_number = this.detailData.mooc_number;
				this.manufacturer = this.detailData.manufacturer;
			},
			changeVehicleType(val: string | number) {
				this.vehicle_type_id = val;
				this.vehicle_weight_id = null;
			},
			changeVehicleWeight(val: string | number) {
				this.vehicle_weight_id = val;
			},
			resetData() {
				this.flagSubmit = false;
				this.vehicle_weight_id = null;
				this.vehicle_type_id = null;
				this.plate_number = '';
				this.mooc_number = '';
				this.manufacturer = '';
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
					vehicle_weight_id: this.vehicle_weight_id,
					vehicle_type_id: this.vehicle_type_id,
					plate_number: this.plate_number ? String(this.plate_number).toUpperCase() : '',
					mooc_number: this.mooc_number,
					manufacturer: this.manufacturer,
				};
				this.$emit('submit', obj);
			},
		},
	};
</script>
