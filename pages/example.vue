<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		<h1 class="text-xl text-center mt-6">Comming Soon ...</h1>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';

	export default {
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { $api } = useNuxtApp();
			const api = $api;

			return {
				api,

				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},

		data() {
			return {
				listData: null,
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Trang chủ');
		},
		methods: {},
	};
</script>
