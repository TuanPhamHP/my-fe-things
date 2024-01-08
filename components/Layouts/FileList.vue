<template>
	<div>
		<div class="mb-2">
			<div
				v-for="item in listFile.slice(0, maxFile)"
				:key="item.name"
				class="flex items-center py-1 gap-2 px-0 hover:bg-info-100 rounded"
			>
				<span class="flex items-center gap-2 text-info-500 text-underline" @click="handleClickFile(item)">
					<FileIcon :file-name="item.name" />
					{{ $globalHelpers.getShortFileName(item.original_name) }}</span
				>
				<Icon
					name="solar:download-minimalistic-outline"
					size="18px"
					class="text-info-500 ml-auto cursor-pointer"
					@click="onDownloadItem(item)"
				/>
				<Icon
					v-if="type !== 'readOnly'"
					name="carbon:close"
					size="18px"
					class="text-red-500 cursor-pointer"
					@click="$emit('remove-file', item)"
				/>
			</div>
			<p
				v-if="listFile.length > 5"
				class="text-info-500 flex items-center gap-2 mt-2 justify-center text-center w-25 py-2 cursor-pointer hover:bg-info-100/50 rounded mx-auto mt-1"
				@click="collapse = !collapse"
			>
				{{ collapse ? 'Xem thêm' : 'Thu gọn' }}
				<Icon :name="collapse ? 'ph:caret-down-light' : 'ph:caret-up-light'" />
			</p>
		</div>
		<p v-if="!listFile.length" class="text-center text-md font-normal text-neutral-700 py-3">
			Chưa có file nào được tải lên
		</p>
	</div>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { CustomFileRespone, FileByGroup } from 'models';
	import { useInternalStore } from '../../store/Internal';
	import FileIcon from '../Layouts/FileIcon.vue';
	import { storeToRefs } from 'pinia';
	type fileType = 'readNmod' | 'readOnly';
	export default {
		setup() {
			const { setListImagePreview, setSelectedImgIndex } = useInternalStore();
			const { fileType } = storeToRefs(useInternalStore());
			return { fileType, setListImagePreview, setSelectedImgIndex };
		},
		props: {
			title: {
				type: String,
				default: 'Danh sách tệp tin',
			},
			listFile: {
				type: Array as PropType<CustomFileRespone[]>,
				default() {
					return [] as CustomFileRespone[];
				},
			},
			type: {
				type: String as PropType<fileType>,
				default: 'readNmod',
			},
		},
		components: { FileIcon },
		data(): Record<string, any> {
			return {
				open: false,
				flagSubmit: false,
				collapse: true,
			};
		},
		watch: {},
		computed: {
			maxFile() {
				const currentLength = this.listFile.length;
				return this.listFile.length > 3 ? (this.collapse ? 3 : currentLength) : currentLength;
			},
		},
		methods: {
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
				} else {
					this.onDownloadItem(item);
				}
			},
		},
	};
</script>
