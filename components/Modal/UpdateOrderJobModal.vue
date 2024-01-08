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
								<div>
									<div class="mt-0 text-center sm:text-left">
										<DialogTitle
											as="h3"
											class="flex items-center px-6 py-4 w-full font-semibold leading-6 bg-white text-dark text-xl font-semibold border-b-1 border-gray-200"
										>
											Thêm kết quả {{ detailData?.type.name || '---' }}

											<Icon
												name="carbon:close"
												class="text-neutral-400 ml-auto cursor-pointer"
												size="24px"
												@click="cancel"
											/>
										</DialogTitle>

										<div class="block mt-2">
											<div class="tab-controls mx-6 flex gap-1 items-center border-b-2 border-neutral-200 w-fit">
												<p
													class="cursor-pointer whitespace-nowrap rounded-t-lg font-semibold py-2 px-5 mb-0 text-neutral-900 hover:bg-neutral-200"
													:class="currentTab === 1 ? 'bg-neutral-200' : ''"
													@click="currentTab = 1"
												>
													Thông tin đầu vào
												</p>
												<p
													class="cursor-pointer whitespace-nowrap rounded-t-lg font-semibold py-2 px-5 mb-0 text-neutral-900 hover:bg-neutral-200"
													:class="currentTab === 2 ? 'bg-neutral-200' : ''"
													@click="currentTab = 2"
												>
													Kết quả đầu ra
												</p>
											</div>
											<div v-show="currentTab === 1" class="mt-2 py-6 px-6 grid grid-cols-2 gap-2">
												<div v-for="item in inputData" :key="item.id" class="col-span-2">
													<Disclosure v-slot="{ open }">
														<div class="flex items-center gap-2">
															<Icon name="ph:check-circle-fill" size="22px" class="text-green-500" />
															<p class="body-md">
																{{ item.title.name
																}}<span v-if="['text', 'string', 'number'].includes(item.data_type.name)"
																	>:{{ ` ${item.value}` }}</span
																>
															</p>
															<DisclosureButton
																v-if="['files'].includes(item.data_type.name)"
																class="flex w-fit justify-center rounded-lg ml-auto"
															>
																<Icon
																	:name="open ? 'solar:folder-open-linear' : 'solar:folder-with-files-linear'"
																	size="20px"
																	class="text-info-500"
																/>
															</DisclosureButton>
														</div>
														<DisclosurePanel class="px-1 pt-2 pb-2 text-sm text-gray-500">
															<div v-if="['files'].includes(item.data_type.name)">
																<FileList :list-file="item.files" type="readOnly" />
															</div>
														</DisclosurePanel>
													</Disclosure>
												</div>
											</div>
											<div v-show="currentTab === 2" class="mt-2 py-6 px-6 grid grid-cols-2 gap-2">
												<p
													v-if="!detailData?.can_be_submitted"
													class="w-full flex items-center justify-center min-h-[180px] col-span-2"
												>
													Thông tin đầu vào hiện chưa đủ, hãy thêm thông tin đầu vào!
												</p>

												<div v-else v-for="item in formData" :key="item.id" class="col-span-2">
													<BlockInputVue
														v-if="['text', 'string', 'number'].includes(item.form_type.name)"
														rounded="lg"
														v-model="item.value"
														:title="item.field_label || item.title.name"
														:placeholder="item.field_placeholder || ''"
														container-class="mb-0 "
														input-class=""
														size="xxl"
														:required="!!item.required"
														:isError="Boolean(dataErrors[item.field_name]) && flagSubmit"
														:errorMsg="dataErrors[item.field_name]"
													/>

													<FileUploaderWithPreview
														v-if="item.form_type.name === 'files'"
														:init-data="item.value || []"
														:title="item.field_label || item.title.name"
														:suffixIconName="'bi:upload'"
														:local-file-removed="fileRemoved"
														:required="!!item.required"
														@on-change="(arr:CustomFileRespone[])=>{onChangeInputFiles(arr,item)}"
														@removeLocalFile="removeLocalFile"
														:isError="Boolean(dataErrors[item.field_name]) && flagSubmit"
														:errorMsg="dataErrors[item.field_name]"
													/>

													<SingleDatePickerNormal
														v-if="item.form_type.name === 'datetime'"
														:init-data="item.value || ''"
														:title="item.field_label || item.title.name"
														:placeholder="item.field_placeholder || ''"
														input-class="rounded-md"
														container-class="mb-0 min-w-[300px]"
														size="xxl"
														:required="!!item.required"
														@date-change="(val:number|string)=>{onChangeInputDateTime(val, item)}"
													/>

													<AutocompleteNormal
														v-if="item.form_type.name === 'combobox'"
														:init-data="item.field_default_value"
														:placeholder="item.field_placeholder || ''"
														:list-items="item.options || []"
														:required="!!item.required"
														clearable
														rounded="md"
														size="xxl"
														:title="item.field_label || item.title.name"
														@selected="(val:number|string)=>{onChangeInputCombobox(val, item)}"
														:isError="Boolean(dataErrors[item.field_name]) && flagSubmit"
														:errorMsg="dataErrors[item.field_name]"
													/>
												</div>
											</div>
										</div>
									</div>
									<div
										class="py-6 px-6 sm:flex justify-center mx-auto bg-white sticky bottom-0 right-0 border-t-1 border-gray-200"
									>
										<button
											v-if="currentTab === 1 || !detailData?.can_be_submitted"
											type="button"
											class="sm:body-lg inline-flex w-full justify-center rounded-xl bg-white px-3 py-3 body-lg font-regular ring-1 ring-inset ring-neutral-500 hover:bg-neutral-300/25 sm:mt-0 sm:w-[100px] text-neutral-900 border-neutral-500"
											ref="cancelButtonRef"
											:disabled="loading"
											@click="cancel"
										>
											Thoát
										</button>

										<button
											v-if="currentTab === 2 && detailData?.can_be_submitted"
											type="button"
											class="sm:body-lg inline-flex w-full whitespace-nowrap justify-center rounded-xl bg-primary-500 px-3 py-3 body-lg font-regular text-white hover:bg-primary-500 sm:ml-3 sm:w-[120px]"
											:class="loading ? 'pointer-events-none' : ''"
											@click="submit"
										>
											Hoàn thành <Icon v-if="loading" name="line-md:loading-loop" size="18px" />
										</button>
									</div>
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
	import FileList from '~~/components/Layouts/FileList.vue';
	import FileUploaderWithPreview from '~~/components/Form/FileUploaderWithPreview.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { DeliveryLog } from 'models/Order';
	import { CustomFileRespone } from 'models/index';
	import { Job, JobDetail, JobItem, JobFormItem } from 'models/Job';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

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
				type: Object as PropType<JobDetail | null>,
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
			SingleDatePickerNormal,
			FileUploader,
			FileUploaderWithPreview,
			FileList,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
		},
		data() {
			return {
				open: false,
				flagSubmit: false,
				formData: [] as JobFormItem[],
				inputData: [] as JobItem[],
				fileRemoved: [] as (number | string)[],
				currentTab: 1 as number,
			};
		},
		watch: {
			visible() {
				this.resetData();
				if (this.visible) {
					this.syncData();
				} else {
					this.open = this.visible;
				}
			},
		},
		computed: {
			dataRules(): Record<string, string[]> {
				const formItems = this.formData || [];
				const obj = {} as Record<string, string[]>;
				formItems.forEach((item: JobFormItem) => {
					const key = item.field_name;
					obj[key] = [];
					if (item.required) {
						if (item.form_type.name === 'files') {
							obj[key].push('array:required');
						}
						if (['string', 'number', 'text', 'combobox'].includes(item.form_type.name)) {
							obj[key].push('required');
						}
					}
					if (item.form_type.name === 'number') {
						obj[key].push('number');
					}
				});
				return obj;
			},
			dataErrors() {
				const formItems = this.formData || [];
				const obj = {} as Record<string, string[]>;
				formItems.forEach((item: JobFormItem) => {
					const key = item.field_name;
					obj[key] = item.value;
				});
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
		},
		methods: {
			syncData() {
				this.currentTab = 1;
				if (!this.detailData) {
					this.closeModal();
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể sync data' });
					return;
				}
				this.formData =
					(this.detailData?.type.form_items?.map(o => {
						const obj = { ...o };
						// if (obj.form_type.name==='string') {
						// 	 as string
						// }

						const itemMapFromOutput = this.detailData?.output_items.find((m: JobItem) => m.title.id === o.title.id);
						console.log(itemMapFromOutput);
						if (itemMapFromOutput) {
							obj.value = obj.field_default_value;
							if (['string', 'text', 'number'].includes(obj.form_type.name)) {
								obj.value = itemMapFromOutput.value ?? '';
							}
							if (['files'].includes(obj.form_type.name)) {
								obj.value = Array.isArray(itemMapFromOutput.files) ? [...itemMapFromOutput.files] : [];
							}
						} else {
							obj.value = obj.field_default_value;
							if (['string', 'text', 'number'].includes(obj.form_type.name)) {
								obj.value = obj.value ?? '';
							}
							if (['files'].includes(obj.form_type.name)) {
								obj.value = obj.value ?? [];
							}
						}

						return obj;
					}) as JobFormItem[]) || [];
				this.inputData = this.detailData?.input_items.map((o: JobItem) => {
					const obj = { ...o };
					return obj;
				}) as JobItem[];
				this.open = this.visible;
			},
			resetData() {
				this.flagSubmit = false;
				this.formData = [];
			},
			cancel() {
				this.closeModal();
			},
			submit() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Vui lòng điền đủ thông tin kết quả đầu ra' });
					return;
				}
				const formItems = this.formData || [];
				const obj = {} as Record<string, string[]>;
				formItems.forEach((item: JobFormItem) => {
					const key = item.field_name;

					if (item.form_type.name === 'files') {
						obj[key] = item.value.map((o: CustomFileRespone) => o.id);
					} else {
						obj[key] = item.value;
					}
				});
				this.$emit('submit', obj);
			},

			onChangeInputFiles(arr: CustomFileRespone[], item: JobFormItem) {
				const idx = this.formData.findIndex((o: JobFormItem) => o.id === item.id);
				if (idx === -1) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể tìm thấy trường tương ứng của job' });
					return;
				}
				const itemSpread = { ...this.formData[idx] };
				itemSpread.value = [...arr];
				this.formData.splice(idx, 1, itemSpread);
			},
			onChangeInputCombobox(value: number | string, item: JobFormItem) {
				const idx = this.formData.findIndex((o: JobFormItem) => o.id === item.id);
				if (idx === -1) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể tìm thấy trường tương ứng của job' });
					return;
				}
				const itemSpread = { ...this.formData[idx] };
				itemSpread.value = value;
				this.formData.splice(idx, 1, itemSpread);
			},
			onChangeInputDateTime(value: number | string, item: JobFormItem) {
				const idx = this.formData.findIndex((o: JobFormItem) => o.id === item.id);
				if (idx === -1) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể tìm thấy trường tương ứng của job' });
					return;
				}
				const itemSpread = { ...this.formData[idx] };
				itemSpread.value = value;
				this.formData.splice(idx, 1, itemSpread);
			},
			removeLocalFile(item: CustomFileRespone) {
				if (item.id) {
					this.fileRemoved.push(item.id);
				}
			},
		},
	};
</script>
