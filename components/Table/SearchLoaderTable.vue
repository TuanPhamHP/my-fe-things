<template>
	<div class="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-400/30 flex items-center justify-center">
		<Icon :name="'mingcute:loading-line'" size="42px" class="spin" />
	</div>
</template>
<script lang="ts">
	export default {};
</script>
<style lang="scss" scoped>
	.spin {
		animation: spinner 2s infinite;
	}
	@keyframes spinner {
		from {
			transform: rotateZ(0);
		}
		to {
			transform: rotateZ(360deg);
		}
	}
</style>
