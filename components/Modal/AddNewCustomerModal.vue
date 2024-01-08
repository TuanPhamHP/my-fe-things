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
							class="relative w-full transform overflow-hidden rounded-xl bg-white p-0 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xxl sm:p-0"
						>
							<div class="block">
								<div class="mt-0 text-center sm:text-left">
									<DialogTitle
										as="h3"
										class="px-6 py-4 w-full font-semibold leading-6 bg-primary-500 text-white text-xl font-semibold"
										>Thêm khách hàng mới</DialogTitle
									>
									<div class="pt-6 pb-4 px-6 grid grid-cols-2 gap-x-4 gap-y-2">
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="representative_name"
												title="Tên khách hàng"
												placeholder="VD: Nguyễn Văn A"
												container-class="mb-0"
												size="xxl"
												required
												counter
												:max-length="200"
												:isError="Boolean(dataErrors.representative_name) && flagSubmit"
												:errorMsg="dataErrors.representative_name"
											/>
										</div>
										<!-- <div class="col-span-1">
											<BlockInputVue rounded="lg"
												v-model="username"
												title="Tên đăng nhập"
												placeholder="VD: nguyenvana123"
												container-class="mb-0"
												size="xxl"
												required
												counter
												:max-length="50"
												:isError="Boolean(dataErrors.username) && flagSubmit"
												:errorMsg="dataErrors.username"
											/>
										</div> -->
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="id_no"
												title="MST/CCCD"
												counter
												:max-length="20"
												placeholder="VD: 036096002222"
												container-class="mb-0"
												size="xxl"
												:isError="Boolean(dataErrors.id_no) && flagSubmit"
												:errorMsg="dataErrors.id_no"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												rounded="lg"
												v-model="phone"
												title="Số điện thoại"
												placeholder="VD: 0333444555"
												container-class="mb-0"
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
												size="xxl"
												counter
												:max-length="100"
												placeholder="VD: mrabc@gmail.com"
												container-class="mb-0"
												:isError="Boolean(dataErrors.email) && flagSubmit"
												:errorMsg="dataErrors.email"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="py-6 px-6 sm:flex justify-end">
								<button
									type="button"
									class="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-3 py-3.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-red-300/25 sm:mt-0 sm:w-[150px] text-red-500 border-red-500"
									ref="cancelButtonRef"
									:disabled="loading"
									@click="cancel"
								>
									Hủy
								</button>
								<button
									type="button"
									class="inline-flex w-full justify-center rounded-xl bg-primary-500 px-3 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-[150px]"
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
	import BlockInputVue from '~~/components/Form/BlockInput.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

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
		},
		components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, BlockInputVue },
		data(): Record<string, any> {
			return {
				representative_name: '' as string,
				username: '' as string,
				id_no: '' as string,
				phone: '' as string,
				email: '' as string,
				open: false,
				flagSubmit: false,
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
					representative_name: ['required', 'max:200'],
					// username: ['required', 'max:50'],
					phone: ['required'],
					email: ['max:100'],
					id_no: ['max:20'],
				};
			},
			dataErrors() {
				const obj: Record<string, string> = {};
				for (const key in this.dataRules) {
					if (Object.hasOwnProperty.call(this.dataRules, key)) {
						if (Array.isArray(this.dataRules[key])) {
							if (this.dataRules[key].includes('required')) {
								if (key && !this[key]) {
									obj[key] = 'Không được để trống trường này.';
								}
							}
							const maxLengthRule = this.dataRules[key].find(o => o.includes('max:'));
							if (maxLengthRule) {
								const maxLength = +(maxLengthRule.split(':').pop() || 0);

								if (key && this[key].length > maxLength) {
									obj[key] = `Tối đa ${maxLength} kí tự.`;
								}
							}
						}
					}
				}
				return obj;
			},
		},
		methods: {
			resetData() {
				this.flagSubmit = false;
				this.representative_name = '';
				this.username = '';
				this.id_no = '';
				this.phone = '';
				this.email = '';
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
					representative_name: this.representative_name,
					username: this.username,
					id_no: this.id_no,
					phone: this.phone,
					email: this.email,
				};
				this.$emit('submit', obj);
			},
		},
	};
</script>
