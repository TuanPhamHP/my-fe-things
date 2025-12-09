<template>
	<ul class="pl-10">
		<li
			v-for="(item, index) in docs"
			:key="index"
			class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
		>
			<div v-html="item.content"></div>

			<ul v-if="item.subList" class="pl-10">
				<li
					v-for="sub in item.subList"
					:key="sub"
					class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
				>
					<div v-html="sub"></div>
				</li>
			</ul>
		</li>
	</ul>
</template>
<script lang="ts">
	import { PropType } from 'nuxt/dist/app/compat/capi';
	type OpeItem = {
		id?: number;
		content?: string;
		subList?: string[];
	};
	export default {
		props: {
			docs: {
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
