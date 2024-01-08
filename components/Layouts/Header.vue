<template>
	<nav
		id="appVerticalNav"
		class="bg-white dark:bg-slate-700 flex items-center justify-space-between px-6 py-4 h-[80px]"
	>
		<div class="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-cicle" @click="toggleSidebar">
			<Icon :name="'simple-line-icons:menu'" class="text-slate-900 dark:text-white" size="16px" />
		</div>
		<p class="title-md font-semibold ml-4 md:ml-6 text-slate-900 dark:text-white">{{ currentViewTitle }}</p>

		<!-- <Notification /> -->
		<UserInfomation />
		<ToggleThemeButton />
	</nav>
</template>

<script lang="ts">
	import { useAppStateStore } from '@/store/appState';
	import Notification from './Notification.vue';
	import UserInfomation from './UserInfomation.vue';
	import ToggleThemeButton from '../Buttons/ToggleThemeButton.vue';
	import { storeToRefs } from 'pinia';
	export default {
		setup() {
			const { toggleSidebar } = useAppStateStore();
			const { currentViewTitle } = storeToRefs(useAppStateStore());

			return {
				toggleSidebar,
				currentViewTitle,
			};
		},
		components: { Notification, UserInfomation, ToggleThemeButton },
		methods: {},
	};
</script>

<style lang="scss" scoped>
	#appVerticalNav {
		min-height: 64px;
		max-height: 68px;
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		position: sticky;
		top: 0;
		z-index: 10;
	}
</style>
