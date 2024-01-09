<template>
	<div class="py-2 mt-5 border-t text-indigo-500 dark:text-white flex w-full items-center justify-between">
		<div
			v-if="pagination.prev"
			class="text-indigo-500 dark:text-white cursor-pointer flex items-center gap-2 hover:bg-gray-100/25 w-fit px-2 rounded-lg"
			@click="$router.push(pagination.prev.link)"
		>
			<Icon name="solar:double-alt-arrow-left-bold" size="32px" />
			<span>{{ pagination.prev.title }}</span>
		</div>
		<div
			v-if="pagination.next"
			class="text-indigo-500 dark:text-white cursor-pointer flex items-center gap-2 hover:bg-gray-100/25 w-fit px-2 rounded-lg"
			@click="$router.push(pagination.next.link)"
		>
			<span>{{ pagination.next.title }}</span>
			<Icon name="solar:double-alt-arrow-right-bold" size="32px" />
		</div>
	</div>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	interface paginationItem {
		title: string;
		link: string;
		isDisabled?: boolean;
	}
	export default {
		props: {
			pagination: {
				type: Object as PropType<{
					next: paginationItem;
					prev: paginationItem;
				}>,
				default() {
					return {};
				},
			},
		},
		data() {
			return {};
		},
	};
</script>
