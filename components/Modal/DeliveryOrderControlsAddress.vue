<template>
	<TransitionRoot as="template" :show="Boolean(open)">
		<Dialog as="div" class="relative z-50">
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

			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
							class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
						>
							<DialogTitle
								as="h3"
								class="flex items-center text-base font-semibold leading-6 text-white bg-primary-500 py-4 px-6 rounded-t-lg"
								>{{ title }}

								<Icon
									name="carbon:close"
									class="text-white ml-auto cursor-pointer"
									size="24px"
									@click="$emit('cancel')"
								/>
							</DialogTitle>
							<div class="p-3 sm:px-3 sm:pb-4">
								<div v-if="!multiple" class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<div v-for="item in listData" :key="item.id" class="mt-1 text-sm leading-6">
										<input
											v-model="selectedData"
											:id="`address-${item.id}`"
											name="addressIds"
											type="radio"
											class="appearance-none h-0 hidden"
											:value="item.id"
										/>
										<label
											:for="`address-${item.id}`"
											class="font-medium text-gray-900 cursor-pointer flex gap-[8px] items-start bg-primary-light-hover"
										>
											<Icon
												v-show="selectedData === item.id"
												name="fluent:radio-button-20-filled"
												size="24px"
												class="rouned m-0 p-0 text-primary"
											/>
											<Icon
												v-show="selectedData !== item.id"
												name="fluent:radio-button-20-regular"
												size="24px"
												class="rouned m-0 p-0 text-gray-300"
											/>
											{{ item.merchandise_position }} - {{ getFullAddress(item.address) }}</label
										>
									</div>
								</div>
								<div v-else class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<div v-for="item in listData" :key="item.id" class="mt-1 text-sm leading-6">
										<input
											v-model="selectedDataMultiple"
											:id="`address-${item.id}`"
											name="addressIdMultiple"
											type="checkbox"
											class="appearance-none h-0 hidden"
											:value="item.id"
										/>
										<label
											:for="`address-${item.id}`"
											class="font-medium text-gray-900 cursor-pointer flex gap-[8px] items-start bg-primary-light-hover"
										>
											<Icon
												v-show="selectedDataMultiple.includes(item.id as never)"
												name="fluent:checkbox-checked-20-filled"
												size="24px"
												class="rouned m-0 p-0 text-primary"
											/>
											<Icon
												v-show="!selectedDataMultiple.includes(item.id as never)"
												name="fluent:checkbox-unchecked-20-regular"
												size="24px"
												class="rouned m-0 p-0 text-gray-300"
											/>
											{{ item.merchandise_position }} - {{ getFullAddress(item.address) }}</label
										>
									</div>
								</div>
								<div class="mt-5 sm:mt-4 sm:flex">
									<SepNormalButton
										size="xl"
										type="submit"
										:container-class="'block ml-auto rounded-xl font-semibold'"
										:loading="loading"
										:color="'gradient-button'"
										@click="submit"
									>
										Lưu
										<!-- Hủy điểm lấy -->
									</SepNormalButton>
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
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import SepNormalButton from '../Buttons/SepNormalButton.vue';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { DeliveryOrderAddress } from '../../models/DeliveryOrder';
	import { AddressComputed, AddressFull } from '../../models';

	export default {
		setup() {},
		props: {
			visible: {
				type: Boolean,
				default: false,
			},
			loading: {
				type: Boolean,
				default: false,
			},
			multiple: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '',
			},
			listData: {
				type: Array as PropType<DeliveryOrderAddress[]>,
				default() {
					return [];
				},
			},
			closeModal: {
				type: Function,
				default() {},
			},
		},
		components: { SepNormalButton, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
		data() {
			return {
				open: false,
				flagSubmit: false,
				selectedData: '',
				selectedDataMultiple: [],
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					selectedData: ['required'],
					selectedDataMultiple: ['array:required'],
				};
			},
			dataErrors() {
				return this.$globalHelpers.getDataErrors(this.dataRules, { selectedData: this.selectedData });
			},
		},
		watch: {
			visible() {
				this.open = this.visible;
				this.resetData();
			},
		},
		methods: {
			resetData() {
				this.selectedData = '';
				this.selectedDataMultiple = [];
				this.flagSubmit = false;
			},
			getFullAddress(address: AddressComputed) {
				const n = new AddressFull(address);
				return n.getFullAddress();
			},
			submit() {
				this.flagSubmit = true;
				if (this.multiple) {
					if (this.dataErrors.selectedDataMultiple) {
						return;
					}
					this.$emit('submit', this.selectedDataMultiple);
				} else {
					if (this.dataErrors.selectedData) {
						return;
					}
					this.$emit('submit', this.selectedData);
				}
			},
		},
	};
</script>
