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
							class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md"
						>
							<DialogTitle
								as="h3"
								class="flex items-center text-base font-semibold leading-6 text-dark bg-white py-4 px-6 rounded-t-lg border-b-1 border-neutral-200"
								>{{ title }}

								<Icon
									name="carbon:close"
									class="text-neutral-300 ml-auto cursor-pointer"
									size="24px"
									@click="$emit('cancel')"
								/>
							</DialogTitle>
							<div class="">
								<div class="mt-0 text-center sm:mt-0 sm:text-left border-b-1 border-neutral-200">
									<div class="mt-0 py-6">
										<p class="text-sm text-neutral-700 text-center">{{ message }}</p>
									</div>
								</div>
								<div class="px-3 py-6 flex sm:flex-row-reverse gap-2 mx-auto justify-center">
									<SepNormalButton
										size="xl"
										type="submit"
										color="gradient-button"
										:container-class="'block rounded-xl font-semibold'"
										:disabled="loading"
										@click="$emit('cancel')"
									>
										{{ buttonCancelText }}
									</SepNormalButton>
									<SepNormalButton
										size="xl"
										type="submit"
										:container-class="'block rounded-xl font-semibold'"
										:loading="loading"
										color="outline-primary"
										@click="$emit('submit')"
									>
										{{ buttonConfirmText }}
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
	import SepNormalButton from '../Buttons/SepNormalButton.vue';
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
			message: {
				type: String,
				default: 'Default confirm message',
			},
			title: {
				type: String,
				default: '',
			},
			buttonConfirmText: {
				type: String,
				default: 'Đồng ý',
			},
			buttonCancelText: {
				type: String,
				default: 'Đóng',
			},
		},
		components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, SepNormalButton },
		data() {
			return { open: false };
		},

		watch: {
			visible() {
				this.open = this.visible;
			},
		},
		methods: {},
	};
</script>
