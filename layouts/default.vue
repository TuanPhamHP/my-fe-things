<template>
	<div id="app" :class="`${currentTheme}`">
		<appLoader v-if="globalLoading" />
		<div class="mx-0 my-0" style="display: flex">
			<Sidebar v-if="isLogged" />

			<div
				class="main-app"
				:style="`background-color:#FDFBF7;flex-grow: 1; width: 100%; max-width: ${
					isLogged ? 'calc(100vw - 100px)' : '100%'
				}`"
			>
				<Header v-if="isLogged" />
				<div :class="isLogged ? 'px-0 py-3 sm:px-6 sm:py-6' : 'px-0'" class="dark:bg-slate-500 bg-[#f1f1f1]">
					<!-- <BreadCrumb v-if="isLogged" /> -->
					<slot> </slot>
				</div>
			</div>
		</div>

		<div id="snackbarWrapper"></div>
		<LogoutModal />
		<FullPageView v-if="showFullPage" />
	</div>
</template>

<script>
	import { useCounterStore } from '~/store/counter.ts';
	import { useAuthStore } from '~/store/auth';
	import { useAppStateStore } from '~/store/appState';
	import { useInternalStore } from '~/store/Internal';
	import { storeToRefs } from 'pinia';
	import LogoutModal from '~~/components/Modal/LogoutModal';
	import appLoader from '~~/components/Loaders/appLoader';
	import Header from '~~/components/Layouts/Header';
	import Sidebar from '~~/components/Layouts/Sidebar';
	import BreadCrumb from '~~/components/Layouts/BreadCrumb';
	import FullPageView from '~~/components/Layouts/FullPageView';
	export default {
		setup() {
			const router = useRouter();
			const authStore = useAuthStore();
			const appStateStore = useAppStateStore();
			const internalStore = useInternalStore();
			const store = useCounterStore();
			const count = computed(() => store.$state.count);
			const { isLogged } = storeToRefs(authStore);
			const { globalLoading, currentState, currentTheme } = storeToRefs(appStateStore);
			const { listImagePreview } = storeToRefs(internalStore);
			// const isLogged = computed(() => authStore.isLogged);
			const setAppState = appStateStore.setAppState;

			watch(isLogged, newVal => {
				if (!newVal) {
					router.push('/login');
				} else {
					// internalStore.getListUsers();
					// internalStore.getListMerchandiseTypes();
					// internalStore.getListContainerTypes();
					// internalStore.getDeliveryStatuses();
					// internalStore.getListOrderStatuses();
				}
			});
			const safeToView = computed(() => {
				return currentState.value === 3 || currentState.value === 0;
			});
			const appStateMessage = computed(() => {
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
			const showFullPage = computed(() => {
				return !!(listImagePreview.value && listImagePreview.value.length);
			});
			return {
				count,
				appStateMessage,
				safeToView,
				isLogged,
				globalLoading,
				setAppState,
				showFullPage,
				listImagePreview,
				currentTheme,
			};
		},
		created() {},
		components: { appLoader, Header, Sidebar, LogoutModal, BreadCrumb, FullPageView },
		mounted() {
			this.$api.trainingTask.syncData();
		},
		watch: {},
		methods: {},
	};
</script>

<style></style>

<style lang="scss" scoped>
	.main-cr-overview {
		display: flex;
		height: 100vh;
		width: 100vw;
		display: flex;
	}
	@media screen and (max-width: 640px) {
		.main-app {
			max-width: 100% !important;
		}
	}
</style>
