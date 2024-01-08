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
							class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
						>
							<DialogTitle
								as="h3"
								class="flex items-center text-base font-semibold leading-6 text-white bg-primary-500 py-4 px-6 rounded-t-lg"
								>Tài liệu

								<Icon
									name="carbon:close"
									class="text-white ml-auto cursor-pointer"
									size="24px"
									@click="$emit('cancel')"
								/>
							</DialogTitle>
							<div class="p-3 sm:px-3 sm:pb-4">
								<div v-if="detailData" class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<div class="flex items-center justify-between mb-3">
										<p class="text-md text-gray-900">Mã chứng từ lấy hàng</p>
										<p class="text-md text-gray-900 font-semibold text-right">{{ detailData.document_code }}</p>
									</div>
									<div class="flex items-start justify-between mb-3">
										<p class="text-md text-gray-900">Loại hàng hóa</p>
										<div>
											<p
												v-for="(item, idx) in detailData.merchandises"
												:key="idx"
												class="text-md text-gray-900 font-semibold"
											>
												{{ item.merchandise_type?.name }} - {{ item.quantity }}
											</p>
										</div>
									</div>

									<div class="flex items-start justify-between mb-3">
										<p class="text-md text-gray-900">Nội dung tài liệu</p>
										<p class="text-md text-gray-900 font-semibold text-right">{{ detailData.note }}</p>
									</div>
									<div class="mb-3">
										<p class="text-md text-gray-900">Ảnh</p>
										<div class="grid grid-cols-4 gap-2 w-full items-center gap-2 mt-4">
											<div
												v-for="(item, idx) in detailData.files.slice(0, 4)"
												:key="item.id"
												class="each-doc-img rounded relative overflow-hidden w-full h-25 border border-1 shadow col-span-1"
												@click="onViewImg(idx)"
											>
												<img
													:src="item.url"
													:alt="item.original_name"
													class="block rounded w-full h-full object-cover"
												/>
												<div
													v-if="idx === 3 && detailData.files.length > 4"
													class="absolute top-0 left-0 w-full h-full z-4 flex items-center justify-center text-xl text-white font-bold bg-gray-400/50 cursor-pointer"
													@click="onViewImg(idx)"
												>
													+ {{ detailData.files.length - 4 }}
												</div>
											</div>
										</div>
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
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import SepNormalButton from '../Buttons/SepNormalButton.vue';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { DeliveryOrderDocument } from '../../models/DeliveryOrder';
	import { useInternalStore } from '../../store/Internal';
	export default {
		setup() {
			const { setListImagePreview, setSelectedImgIndex } = useInternalStore();
			return {
				setListImagePreview,
				setSelectedImgIndex,
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
			detailData: {
				type: Object as PropType<DeliveryOrderDocument | null>,
				default: false,
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
				selectedData: [],
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					selectedData: ['array:required'],
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
				if (this.selectedData.length) {
					this.selectedData = [];
					this.flagSubmit = false;
				}
			},
			submit() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					return;
				}
				this.$emit('submit', [...this.selectedData]);
			},
			onViewImg(idx: number) {
				if (!this.detailData) {
					return;
				}
				this.setListImagePreview(this.detailData.files);
				this.setSelectedImgIndex(idx);
			},
		},
	};
</script>
