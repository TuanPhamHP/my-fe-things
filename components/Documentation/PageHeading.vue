<template>
	<h1
		:class="`page-heading-lv${lvl} text-slate-900 dark:text-white font-bold text-3xl md:text-3xl ${addOnClass || ''}`"
		:markedas="markedAs"
		:id="markedAs"
		:dataLvl="lvl"
	>
		{{ text }}
	</h1>
</template>
<script lang="ts">
	export default {
		props: {
			text: {
				type: String,
				default: '',
			},
			addOnClass: {
				type: String,
				default: '',
			},
			markedAs: {
				type: String,
				default: '',
			},
			lvl: {
				type: Number,
				default: 1,
			},
		},
	};
</script>
