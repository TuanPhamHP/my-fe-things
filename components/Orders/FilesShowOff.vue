<template>
	<div class="tab-wr fixed right-0 top-0 bottom-0 shadow-lg bg-white z-10">
		<div class="border-b-1 border-neutral-200 py-4 px-6 flex items-center justify-between">
			<p class="font-semibold title-md">Nội dung tải lên</p>
			<div
				class="px-1 py-1 flex items-center justify-center cursor-pointer hover:bg-neutral-200 rounded-half"
				@click="$emit('closing')"
			>
				<Icon name="carbon:close" size="24" class="text-neutral-400 cursor-pointer" />
			</div>
		</div>
		<div class="px-3 mt-6">
			<div v-for="item in listFileBlock" :key="item.name">
				<p class="font-semibold body-md text-neutral-900 mb-2 px-3">{{ item.name }}</p>

				<div
					v-for="mfile in item.listFile"
					:key="mfile.name"
					class="flex items-center gap-2 hover:bg-info-100/50 rounded px-3"
				>
					<FileIcon :file-name="mfile.name" />
					<div>
						<span class="flex items-start gap-2 text-info-500"> {{ mfile.sortName }}</span>
						<span>Tải lên thành công</span>
					</div>
					<div
						class="ml-auto cursor-pointer bg-neutral-100 hover:bg-red-100 w-8 h-8 rounded flex items-center justify-center"
					>
						<Icon name="solar:trash-bin-trash-linear" class="text-neutral-700" size="20px" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { CustomFile } from '../../models/index';
	import FileIcon from '../Layouts/FileIcon.vue';
	interface BlockFile {
		name: string;
		listFile: CustomFile[];
	}
	export default {
		components: { FileIcon },
		props: {
			listFileBlock: {
				type: Array as PropType<BlockFile[]>,
				default() {
					return [];
				},
			},
		},
	};
</script>
<style lang="scss" scoped>
	.tab-wr {
		width: 735px;
	}
</style>
