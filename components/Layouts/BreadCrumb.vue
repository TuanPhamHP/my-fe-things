<template>
	<nav class="flex items-center py-4 gap-[4px]">
		<div v-for="(crumb, idx) in currentBreadCrumb" :key="crumb.title">
			<nuxt-link
				v-if="idx < currentBreadCrumb.length - 1"
				class="flex gap-[4px] text-xl text-primary font-semibold"
				:to="crumb.route"
			>
				{{ crumb.title }}
				<span v-if="idx < currentBreadCrumb.length - 1" class="block">/</span>
			</nuxt-link>
			<p v-else class="flex gap-[4px] text-lg text-grey-500 ml-3">
				{{ crumb.title }}
			</p>
		</div>
	</nav>
</template>

<script lang="ts">
	import { useAppStateStore } from '@/store/appState';
	import Notification from './Notification.vue';
	import UserInfomation from './UserInfomation.vue';
	import { storeToRefs } from 'pinia';
	export default {
		setup() {
			const { currentBreadCrumb } = storeToRefs(useAppStateStore());
			return {
				currentBreadCrumb,
			};
		},
		components: { Notification, UserInfomation },
		methods: {},
	};
</script>

<style lang="scss" scoped></style>
