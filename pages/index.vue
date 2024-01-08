<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		<h1 class="text-xl text-center mt-6">Comming Soon ...</h1>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';
	import { useAuthStore } from '~/store/auth';
	import { storeToRefs } from 'pinia';

	export default {
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();

			const { isLogged } = storeToRefs(useAuthStore());

			return {
				isLogged,
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
			setTimeout(() => {
				if (this.isLogged) {
					this.$router.push('/orders');
				}
			}, 500);
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Trang chủ');
		},
		methods: {},
	};
</script>
