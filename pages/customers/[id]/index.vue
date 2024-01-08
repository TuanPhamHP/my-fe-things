<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		<NuxtLink to="/customers" class="w-10 h-10 flex items-center justify-center rounded-half hover:bg-gray-400/30">
			<Icon name="solar:arrow-left-linear" size="32px" />
		</NuxtLink>
		<!-- <div class="w-full flex items-center -mx-3">
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
		</div> -->
		<div v-if="detailData" class="tabs pt-8">
			<CustomerInfomationTab v-if="currentActiveTab === 1" :detail-data="detailData" @on-edit="onEdit" />
		</div>
		<div class="flex items-center gap-2 justify-end">
			<NormalButton
				size="base"
				type="submit"
				:container-class="'block rounded-xl font-normal'"
				:color="'gradient-button'"
				@click="onEdit"
			>
				<Icon :name="'carbon:rotate-360'" size="18px" /> Cập nhật
			</NormalButton>
		</div>
	</div>
</template>
<script lang="ts">
	import { ref, reactive } from 'vue';
	import { useAppStateStore } from '../../../store/appState';
	import { Customer } from '../../../models/Customer';
	import NormalButton from '../../../components/Buttons/NormalButton.vue';
	import CustomerInfomationTab from '../../../components/Tabs/CustomerInfomationTab.vue';
	export default {
		components: { CustomerInfomationTab, NormalButton },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { $api } = useNuxtApp();
			const api = $api;
			const listTabs = reactive([]);
			const currentActiveTab = ref(1);
			const setCurrentTab = (_val: number) => {
				currentActiveTab.value = _val;
			};
			useHead({
				title: 'Thông tin khách hàng',
				meta: [{ name: 'description', content: 'Thông tin khách hàng' }],
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
				detailData: null as Customer | null,
				loading: false,
				result: 0,
			};
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Thông tin khách hàng');
			this.getDetailData();
		},
		methods: {
			async getDetailData() {
				await this.api.customers
					.getDetailData(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.customer as Customer;
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {});
			},
			onEdit() {
				this.$router.push(`/customers/${this.$route.params.id}/edit`);
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
