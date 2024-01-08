<template>
	<TransitionRoot as="template" :show="Boolean(open)">
		<Dialog as="div" class="relative z-10" @close="open = false">
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
							class="relative w-full transform overflow-hidden rounded-lg bg-white p-0 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xxl sm:p-0"
						>
							<div class="block">
								<div class="mt-0 text-center sm:text-left">
									<DialogTitle
										as="h3"
										class="px-6 py-4 w-full font-semibold leading-6 bg-primary-500 text-white text-xl font-semibold"
										>Dialog title</DialogTitle
									>
									<div class="mt-2 py-6 px-6 grid grid-cols-2 gap-4">
										<div class="col-span-2">
											<BlockInputVue
												v-model="name"
												title="Required label"
												placeholder="Required label"
												container-class="mb-0"
												size="xxl"
												required
												:isError="Boolean(dataErrors.name) && flagSubmit"
												:errorMsg="dataErrors.name"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												v-model="name"
												title="Regular label"
												placeholder="Regular label"
												container-class="mb-0"
												size="xxl"
												:isError="Boolean(dataErrors.name) && flagSubmit"
												:errorMsg="dataErrors.name"
											/>
										</div>
										<div class="col-span-1">
											<BlockInputVue
												v-model="name"
												title="Required label"
												placeholder="Required label"
												container-class="mb-0"
												size="xxl"
												required
												:isError="Boolean(dataErrors.name) && flagSubmit"
												:errorMsg="dataErrors.name"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="py-6 px-6 sm:flex justify-end">
								<button
									type="button"
									class="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-red-300/25 sm:mt-0 sm:w-[150px] text-red-500 border-red-500"
									ref="cancelButtonRef"
								>
									Hủy
								</button>
								<button
									type="button"
									class="inline-flex w-full justify-center rounded-xl bg-primary-500 px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-[150px]"
								>
									Lưu
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
	import { ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import BlockInputVue from '~~/components/Form/BlockInput.vue';
	import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { useAuthStore } from '~/store/auth';
	import { useAppStateStore } from '@/store/appState';

	export default {
		setup() {
			const appStateStore = useAppStateStore();
			const { onLogout } = storeToRefs(appStateStore);
			const open = ref(true);

			watch(onLogout, () => {
				open.value = onLogout.value;
			});
			return {
				open,
			};
		},
		components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, BlockInputVue },
		data(): Record<string, any> {
			return {
				name: '' as string,
			};
		},
		computed: {
			dataRules(): Record<string, string[]> {
				return {
					login: ['required'],
					password: ['required'],
				};
			},
			dataErrors() {
				const obj: Record<string, string> = {};
				for (const key in this.dataRules) {
					if (Object.hasOwnProperty.call(this.dataRules, key)) {
						if (Array.isArray(this.dataRules[key]) && this.dataRules[key].includes('required')) {
							if (key && !this[key]) {
								obj[key] = 'Không được để trống trường này.';
							}
						}
					}
				}

				return obj;
			},
		},
		methods: {},
	};
</script>
