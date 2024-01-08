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
							class="relative w-full transform overflow-hidden rounded-xxl bg-white p-0 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-0"
						>
							<div class="max-h-[90vh] overflow-y-scroll">
								<div class="block">
									<div class="mt-0 text-center sm:text-left">
										<DialogTitle
											as="h3"
											class="flex items-center px-6 py-4 w-full font-semibold leading-6 bg-white text-dark text-xl font-semibold border-b-1 border-gray-200"
											>Thêm mới tình trạng

											<Icon
												name="carbon:close"
												class="text-neutral-400 ml-auto cursor-pointer"
												size="24px"
												@click="cancel"
											/>
										</DialogTitle>
										<div class="mt-2 py-6 px-6 grid grid-cols-2 gap-2">
											<div class="col-span-2">
												<AutocompleteNormal
													:init-data="status_id"
													placeholder="-- Chọn tình trạng --"
													:list-items="listDeliveryStatusesComputed"
													required
													clearable
													rounded="md"
													size="xxl"
													:title="'Tình trạng'"
													@selected="changeVehicleType"
													:isError="Boolean(dataErrors.status_id) && flagSubmit"
													:errorMsg="dataErrors.status_id"
												/>
											</div>
											<div class="col-span-2">
												<BlockInputVue
													rounded="lg"
													v-model="merchandise_position"
													title="Vị trí"
													placeholder="VD: Lạng Sơn"
													container-class="mb-0 "
													input-class=""
													size="xxl"
													required
													:isError="Boolean(dataErrors.merchandise_position) && flagSubmit"
													:errorMsg="dataErrors.merchandise_position"
												/>
											</div>
											<div class="col-span-2">
												<SingleDatePickerNormal
													:init-data="''"
													title="Thời gian đến cửa khẩu"
													placeholder="-- Chọn ngày giờ --"
													input-class="rounded-md"
													container-class="mb-0 min-w-[300px]"
													size="xxl"
													required
													@date-change="changeArrivalTime"
												/>
											</div>
											<div class="col-span-2">
												<BlockInputVue
													rounded="lg"
													v-model="temperature_set"
													title="Nhiệt độ set (°C)"
													placeholder="VD: 40"
													container-class="mb-0"
													size="xxl"
													required
													:isError="Boolean(dataErrors.temperature_set) && flagSubmit"
													:errorMsg="dataErrors.temperature_set"
												/>
											</div>

											<div class="col-span-2">
												<BlockInputVue
													rounded="lg"
													v-model="temperature_supply"
													title="Nhiệt độ supply (°C)"
													placeholder="VD: 40"
													container-class="mb-0"
													size="xxl"
													required
													:isError="Boolean(dataErrors.temperature_supply) && flagSubmit"
													:errorMsg="dataErrors.temperature_supply"
												/>
											</div>
											<div class="col-span-2">
												<BlockInputVue
													rounded="lg"
													v-model="temperature_return"
													title="Nhiệt độ return (°C)"
													placeholder="VD: 40"
													container-class="mb-0"
													size="xxl"
													required
													:isError="Boolean(dataErrors.temperature_return) && flagSubmit"
													:errorMsg="dataErrors.temperature_return"
												/>
											</div>

											<div class="col-span-2">
												<FileUploaderWithPreview
													:init-data="[]"
													:title="'Tải ảnh lên'"
													:suffixIconName="'bi:upload'"
													:local-file-removed="fileRemoved"
													@on-change="onChangeLicenseFiles"
													@removeLocalFile="removeLocalFile"
												/>
											</div>
										</div>
									</div>
								</div>
								<div
									class="py-6 px-6 sm:flex justify-center mx-auto bg-white sticky bottom-0 right-0 border-t-1 border-gray-200"
								>
									<button
										type="button"
										class="sm:body-lg inline-flex w-full justify-center rounded-xl bg-white px-3 py-3 body-lg font-regular ring-1 ring-inset ring-neutral-500 hover:bg-neutral-300/25 sm:mt-0 sm:w-[100px] text-neutral-900 border-neutral-500"
										ref="cancelButtonRef"
										:disabled="loading"
										@click="cancel"
									>
										Quay lại
									</button>
									<button
										type="button"
										class="sm:body-lg inline-flex w-full justify-center rounded-xl bg-primary-500 px-3 py-3 body-lg font-regular text-white hover:bg-primary-500 sm:ml-3 sm:w-[100px]"
										:class="loading ? 'pointer-events-none' : ''"
										@click="submit"
									>
										Lưu <Icon v-if="loading" name="line-md:loading-loop" size="18px" />
									</button>
								</div>
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
	import SingleDatePickerNormal from '~~/components/Form/SingleDatePickerNormal.vue';
	import FileUploader from '~~/components/Form/FileUploader.vue';
	import FileUploaderWithPreview from '~~/components/Form/FileUploaderWithPreview.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { DeliveryLog, OrderDetail } from 'models/Order';
	import { CustomFileRespone } from 'models/index';

	export default {
		setup() {
			const { listDeliveryStatuses } = storeToRefs(useInternalStore());
			return {
				listDeliveryStatuses,
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
				type: Object as PropType<OrderDetail | null>,
				default() {
					return {};
				},
			},
			listLogs: {
				type: Array as PropType<DeliveryLog[]>,
				default() {
					return [];
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
			SingleDatePickerNormal,
			FileUploader,
			FileUploaderWithPreview,
		},
		data(): Record<string, any> {
			return {
				open: false,
				flagSubmit: false,
				merchandise_position: '' as string,
				arrival_time_at_border_gate: '' as string,
				businessLicenseFile: [] as CustomFileRespone[],

				status_id: null as string | number | null,
				temperature_set: '' as string,
				temperature_supply: '' as string,
				temperature_return: '' as string,
				fileRemoved: [] as (string | number)[],
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
					status_id: ['required'],
					merchandise_position: ['required'],
					arrival_time_at_border_gate: ['required'],
					temperature_set: ['required', 'number'],
					temperature_supply: ['required', 'number'],
					temperature_return: ['required', 'number'],
				};
			},
			dataErrors() {
				const obj = {
					status_id: this.status_id,
					merchandise_position: this.merchandise_position,
					arrival_time_at_border_gate: this.arrival_time_at_border_gate,
					temperature_set: this.temperature_set,
					temperature_supply: this.temperature_supply,
					temperature_return: this.temperature_return,
				};
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
			listDeliveryStatusesComputed() {
				return this.detailData?.is_packed
					? this.listDeliveryStatuses
					: this.listDeliveryStatuses.filter(o => o.id === 22);
			},
		},
		methods: {
			changeVehicleType(val: string | number) {
				this.status_id = val;
			},

			changePickupTime(time: string) {
				this.arrival_time_at_border_gate = time;
			},
			syncData() {
				if (!this.detailData) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể sync data' });
					return;
				}
				if (!this.listLogs.some(item => item.status && item.status.id === 22)) {
					this.status_id = 22;
				}

				// this.merchandise_position = this.detailData.merchandise_position || '';
				// this.arrival_time_at_border_gate = this.detailData.arrival_time_at_border_gate || '';
				// this.temperature_set = this.detailData.temperature_set || '';
				// this.temperature_supply = this.detailData.temperature_supply || '';
				// this.temperature_return = this.detailData.temperature_return || '';
				// this.businessLicenseFile = [...this.detailData.files] || [];
			},
			resetData() {
				this.flagSubmit = false;
				this.status_id = null;
				this.merchandise_position = '';
				this.temperature_set = '';
				this.temperature_supply = '';
				this.temperature_return = '';
				this.arrival_time_at_border_gate = '';
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
					id: this.detailData?.id,
					status_id: this.status_id,
					arrival_time_at_border_gate: this.arrival_time_at_border_gate,
					merchandise_position: this.merchandise_position || '',
					temperature_set: this.temperature_set,
					temperature_supply: this.temperature_supply,
					temperature_return: this.temperature_return,
					upload_file_ids: this.businessLicenseFile.map((o: CustomFileRespone) => o.id),
				};
				this.$emit('submit', obj);
			},

			onChangeLicenseFiles(arr: CustomFileRespone[]) {
				this.businessLicenseFile = [...arr];
			},
			changeArrivalTime(time: string) {
				this.arrival_time_at_border_gate = time;
			},
			removeLocalFile(item: CustomFileRespone) {
				if (item.id) {
					this.fileRemoved.push(item.id);
				}
			},
		},
	};
</script>
