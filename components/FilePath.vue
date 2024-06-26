<template>
	<span
		:class="`inline-block whitespace-nowrap px-1 mt-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900 ${containeClass}`"
	>
		<slot></slot>
	</span>
</template>
<script lang="ts">
	export default {
		props: {
			textCoppy: {
				type: String,
				default: '',
			},
			containeClass: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				success: false,
			};
		},
		watch: {
			success() {
				if (this.success) {
					setTimeout(() => {
						this.success = false;
					}, 2000);
				}
			},
		},
		methods: {
			handleCopy(_url: string) {
				// Copy the text inside the text field
				navigator.clipboard.writeText(_url);
				this.success = true;
			},
		},
	};
</script>
