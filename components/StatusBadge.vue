<template>
	<div class="absolute top-2 right-2 z-10">
		<span
			v-if="statusId === 1"
			class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
			>Mới</span
		>

		<span
			v-if="statusId === 2"
			class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
			>Đang làm</span
		>

		<span
			v-if="statusId === 3"
			class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
			>Hoàn thành</span
		>
	</div>
</template>
<script lang="ts">
	export default {
		props: {
			statusId: {
				type: Number,
				default: 1,
			},
		},
	};
</script>
