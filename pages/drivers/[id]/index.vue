<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		<NuxtLink to="/forwarders" class="w-10 h-10 flex items-center justify-center rounded-half hover:bg-gray-400/30">
			<Icon name="solar:arrow-left-linear" size="32px" />
		</NuxtLink>
		<div class="w-full flex items-center -mx-3">
			<div
				v-for="item in listTabs"
				:key="item.id"
				class="cursor-pointer hover:bg-primary/10 tab-wrapper"
				@click="setCurrentTab(item.id)"
			>
				<p
					class="mb-0 pb-3 pt-2 px-3 text-lg font-semibold overflow-hidden each-tab rounded-lg"
					:class="item.id === currentActiveTab ? 'text-primary active-tab' : 'text-gray-300 normal-tab'"
				>
					{{ item.name }}
				</p>
			</div>
		</div>
		<div v-if="detailData" class="tabs pt-8">
			<DriverInfomationTab v-if="currentActiveTab === 1" :detail-data="detailData" @on-edit="onEdit" />
		</div>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '~/store/appState';
	import { Driver } from '../../../models/Driver';
	import DriverInfomationTab from '../../../components/Tabs/DriverInfomationTab.vue';
	export default {
		components: { DriverInfomationTab },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { $api } = useNuxtApp();
			const api = $api;
			const listTabs = reactive([
				{ id: 1, name: 'Thông tin lái xe' },
				// { id: 2, name: 'Danh sách xe' },
			]);
			const currentActiveTab = ref(1);
			const setCurrentTab = (_val: number) => {
				currentActiveTab.value = _val;
			};
			useHead({
				title: 'Chi tiết lái xe',
				meta: [{ name: 'description', content: 'Chi tiết lái xe' }],
			});
			return {
				api,
				listTabs,
				currentActiveTab,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
				setCurrentTab,
			};
		},

		data() {
			return {
				detailData: null as Driver | null,
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Chi tiết lái xe');
			this.getDetailData();
		},
		methods: {
			async getDetailData() {
				await this.api.drivers
					.getDetailData(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.driver as Driver;
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {});
			},
			onEdit() {
				this.$router.push(`/drivers/${this.$route.params.id}/edit`);
			},
		},
	};
</script>
<style lang="scss">
	.tab-wrapper {
		.each-tab {
			position: relative;
			transition: 0.2s ease;
			&::before {
				content: '';
				transition: 0.2s ease;
				width: 60px;
				max-width: 40%;
				height: 4px;
				border-radius: 6px;
				background-color: #0b8e52;
				position: absolute;
				bottom: 0;
				left: -100%;
			}
		}
		&:nth-of-type(2n + 1) {
			.each-tab {
				&::before {
					transition: 0.15s ease;
					left: 100%;
				}
			}
		}

		.active-tab {
			&::before {
				bottom: 0;
				left: 12px !important;
			}
		}
	}
</style>
