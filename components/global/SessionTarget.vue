<template>
	<ul class="pl-10">
		<li
			v-for="item in operators"
			:key="item.id"
			class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
		>
			<div v-html="item.content"></div>
		</li>
	</ul>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	type OpeItem = {
		id: number;
		content?: string;
	};
	export default {
		props: {
			operators: {
				type: Array as PropType<OpeItem[]>,
				default() {
					return [];
				},
			},
		},
		data() {
			return {};
		},
	};
</script>
