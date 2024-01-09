<template>
	<div
		class="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-10px] transition h-full flex flex-col"
	>
		<div @click="$router.push(detailData.link)" class="cursor-pointer">
			<img class="rounded-t-lg w-full h-[260px]" :src="getImageUrl()" alt="" />
		</div>
		<div class="p-5 flex flex-col grow">
			<StatusBadge :status-id="detailData.status_id" />
			<div @click="$router.push(detailData.link)" class="cursor-pointer">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{{ detailData.vneseName }}
				</h5>
			</div>
			<p class="mb-3 font-normal text-gray-700 dark:text-white">
				{{ detailData.description }}
			</p>
			<!-- <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-white mb-3">
				<li class="flex items-center gap-3 py-1">
					<Icon name="solar:verified-check-line-duotone" size="24px" class="text-green-500 dark:text-green-400" />
					Cách cài đặt
				</li>
				<li class="flex items-center gap-3 py-1">
					<Icon name="solar:verified-check-line-duotone" size="24px" class="text-green-500 dark:text-green-400" />
					Một số hooks cơ bản
				</li>
				<li class="flex items-center gap-3 py-1">
					<Icon name="solar:clipboard-list-broken" size="24px" class="text-slate-700 dark:text-white" />
					Và rất nhiều tài liệu cơ sở khác ...
				</li>
			</ul> -->
			<div
				@click="$router.push(detailData.link)"
				class="w-fit mt-auto cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Read more
				<svg
					class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { DocumentItem } from '~/models/Documentation';
	import { PropType } from 'vue';
	import StatusBadge from '../StatusBadge.vue';
	export default {
		components: { StatusBadge },
		props: {
			detailData: {
				type: Object as PropType<DocumentItem>,
				default() {
					return {};
				},
			},
		},
		methods: {
			getImageUrl() {
				// @ts-ignore
				return new URL(`/assets/images/documentation/${this.detailData.previewImage}`, import.meta.url) as string;
			},
		},
	};
</script>
