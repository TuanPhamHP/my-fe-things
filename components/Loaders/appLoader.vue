<template>
	<div id="appIndicator">
		<div>
			<img src="@/assets/images/sidebar-logo-expand.svg" class="block mb-5" alt="" />
			<p>{{ appStateMessage }}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useAppStateStore } from '../../store/appState';
	export default {
		setup() {
			const { globalLoading, currentState } = storeToRefs(useAppStateStore());
			const appStateMessage = computed(() => {
				if (globalLoading.value) {
					return 'Khởi tạo hệ thống ....';
				}
				switch (currentState.value) {
					case 0:
						return 'Errors';
					case 1:
						return 'Check Auth';
					case 2:
						return 'Fetching Data';
					case 3:
						return 'Ready';

					default:
						return 'Unknow';
				}
			});
			return {
				globalLoading,
				currentState,
				appStateMessage,
			};
		},
	};
</script>

<style lang="scss" scoped>
	#appIndicator {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99;
	}
</style>
