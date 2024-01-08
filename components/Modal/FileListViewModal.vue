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
					class="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-0 max-w-[90vw] w-[500px] m-auto"
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
										class="flex items-center px-6 py-4 w-full font-semibold leading-6 bg-white text-dark text-xl font-semibold border-b-1 border-neutral-200"
										>{{ title || 'Danh sách tệp tin' }}

										<Icon
											name="carbon:close"
											class="text-neutral-400 ml-auto cursor-pointer"
											size="24px"
											@click="cancel"
										/>
									</DialogTitle>
									<div class="py-2 px-6 gap-4 pb-4">
										<div v-for="group in listFile" :key="group.group_name" class="mb-2">
											<p>{{ group.group_name }}</p>
											<FileList :list-file="group.items" @remove-file="onRemoveFile" />
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
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { CustomFileRespone, FileByGroup } from 'models';
	import { useInternalStore } from '../../store/Internal';
	import FileIcon from '../Layouts/FileIcon.vue';
	import FileList from '../Layouts/FileList.vue';
	import { storeToRefs } from 'pinia';

	export default {
		setup() {
			const { setListImagePreview, setSelectedImgIndex } = useInternalStore();
			const { fileType } = storeToRefs(useInternalStore());
			return { fileType, setListImagePreview, setSelectedImgIndex };
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
			title: {
				type: String,
				default: 'Danh sách tệp tin',
			},
			listFile: {
				type: Array as PropType<FileByGroup[]>,
				default() {
					return [];
				},
			},
		},
		components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, FileList, FileIcon },
		data(): Record<string, any> {
			return {
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
		computed: {},
		methods: {
			resetData() {
				this.flagSubmit = false;
			},
			cancel() {
				this.closeModal();
			},
			submit() {
				this.flagSubmit = true;
				if (Object.keys(this.dataErrors).length) {
					return;
				}
				const obj = {};

				this.$emit('submit', obj);
			},
			onRemoveFile(file: CustomFileRespone) {
				this.$emit('remove-file', file);
			},
			onDownloadItem(item: CustomFileRespone) {
				const a = document.createElement('a') as HTMLAnchorElement;
				a.setAttribute('href', item.url);
				a.setAttribute('target', '_blank');
				a.setAttribute('download', item.original_name);
				document.body.appendChild(a);
				a.click();
				a.remove();
			},

			handleClickFile(item: CustomFileRespone) {
				const popType = String(item.original_name.split('.').pop()).toLowerCase();
				if (this.fileType.image.includes(popType)) {
					this.setListImagePreview([item]);
					this.setSelectedImgIndex(0);
				}
			},
		},
	};
</script>
