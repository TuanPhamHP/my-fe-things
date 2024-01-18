<template>
	<button
		class="flex items-center justify-center gap-[12px] rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-slate-900 dark:text-white ml-auto sm:ml-0"
		@click="toggleTheme"
	>
		<Icon v-if="currentTheme === 'dark'" name="solar:sun-2-bold" size="24px" />
		<Icon v-if="currentTheme === 'light'" name="solar:moon-fog-bold" size="24px" />
	</button>
</template>

<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useAppStateStore } from '~/store/appState';
	export default {
		setup() {
			const appStateStore = useAppStateStore();
			const { currentTheme } = storeToRefs(appStateStore);
			const { syncCurrentTheme, toggleTheme } = appStateStore;
			syncCurrentTheme();
			return {
				currentTheme,
				syncCurrentTheme,
				toggleTheme,
			};
		},
		data() {
			return {};
		},
	};
</script>
