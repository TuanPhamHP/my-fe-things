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
										>Chỉnh sửa thông tin lái xe</DialogTitle
									>
									<div class="mt-2 py-6 px-6 grid grid-cols-2 gap-4">
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="username"
												title="Tên đăng nhập"
												placeholder="VD: nguyenvana "
												container-class="mb-0 "
												size="xxl"
												required
												:isError="Boolean(dataErrors.username) && flagSubmit"
												:errorMsg="dataErrors.username"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="name"
												title="Tên lái xe"
												placeholder="VD: Nguyễn Văn A"
												container-class="mb-0 "
												size="xxl"
												required
												:isError="Boolean(dataErrors.name) && flagSubmit"
												:errorMsg="dataErrors.name"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="phone"
												title="Số điện thoại"
												placeholder="VD: 0987654321"
												container-class="mb-0 "
												size="xxl"
												required
												:isError="Boolean(dataErrors.phone) && flagSubmit"
												:errorMsg="dataErrors.phone"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="email"
												title="Email"
												placeholder="VD: user@gmail.com"
												container-class="mb-0 "
												size="xxl"
												:isError="Boolean(dataErrors.email) && flagSubmit"
												:errorMsg="dataErrors.email"
											/>
										</div>

										<div class="col-span-2">
											<BlockInputVue
												rounded="lg"
												v-model="id_no"
												title="MST/CCCD"
												placeholder="VD: 859589688"
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
	import BlockInputVue from '~~/components/Form/BlockInput.vue';
	import AutocompleteNormal from '~~/components/Form/AutocompleteNormal.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { Driver } from '../../models/Driver';

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
			closeModal: {
				type: Function,
				default() {},
			},
			detailData: {
				type: Object as PropType<Driver | null>,
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
				name: '' as string,
				username: '' as string,
				phone: '' as string,
				email: '' as string,
				id_no: '' as string,
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
					username: ['required'],
					name: ['required'],
					phone: ['required'],
				};
			},
			dataErrors() {
				const obj = {
					username: this.username,
					name: this.name,
					phone: this.phone,
				};
				return this.$globalHelpers.getDataErrors(this.dataRules, obj);
			},
		},
		methods: {
			resetData() {
				this.flagSubmit = false;

				this.name = '';
				this.username = '';
				this.phone = '';
				this.email = '';
				this.id_no = '';
			},
			syncData() {
				if (!this.detailData) {
					this.$globalHelpers.setSnack({ type: 'error', text: 'Lỗi: không thể sync data' });
					return;
				}
				this.name = this.detailData.name || '';
				this.username = this.detailData.username || '';
				this.phone = this.detailData.phone || '';
				this.email = this.detailData.email || '';
				this.id_no = this.detailData.id_no || '';
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
					username: this.username,
					name: this.name,
					email: this.email,
					phone: this.phone,
					id_no: this.id_no,
				};
				this.$emit('submit', obj);
			},
		},
	};
</script>
