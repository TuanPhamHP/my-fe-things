<template>
	<div class="px-3 py-2 rounded bg-neutral-100 dark:bg-neutral-200 my-3 text-slate-900 relative">
		<Icon
			v-if="textCoppy"
			:name="success ? 'solar:clipboard-check-linear' : 'solar:copy-outline'"
			class="cursor-pointer absolute top-1 right-1 text-gray-500 dark:text-gray-700"
			size="20px"
			@click="handleCopy(textCoppy)"
		/>
		<slot></slot>
	</div>
</template>
<script lang="ts">
	export default {
		props: {
			textCoppy: {
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
