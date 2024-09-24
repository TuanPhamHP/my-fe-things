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
<style scoped>
	body {
		font-family: Arial, sans-serif;
		line-height: 1.6;
		margin: 20px;
		background-color: #f4f4f4;
	}
	h1,
	h2,
	h3 {
		color: #333;
	}
	h1 {
		text-align: center;
		font-size: 2.5rem;
		color: #0d6efd;
	}
	h2 {
		font-size: 2rem;
		margin-top: 20px;
	}
	h3 {
		font-size: 1.5rem;
		margin-top: 15px;
	}
	p {
		font-size: 1rem;
		color: #666;
	}
	ul {
		margin: 10px 0;
		padding: 0 20px;
	}
	li {
		margin-bottom: 10px;
	}
	.section {
		background-color: #fff;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>
