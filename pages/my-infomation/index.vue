<template>
	<div class="punch-page-wrapper bg-white rounded-[24px] p-6">
		<NuxtLink to="/orders" class="w-10 h-10 flex items-center justify-center rounded-half hover:bg-gray-400/30">
			<Icon name="solar:arrow-left-linear" size="32px" />
		</NuxtLink>
		<div v-if="detailData" class="tabs pt-8">
			<div>
				<h1 class="display-xs font-semibold">Thông tin chung</h1>
				<div class="py-8 flex gap-6 items-center">
					<div class="flex">
						<UserAvatarPreview :user="user" :size="100" background="bg-primary-300" />
					</div>
					<div>
						<p class="display-xs font-bold mb-3 flex items-center gap-2">
							{{ user.name }}
							<Icon
								:name="'solar:pen-2-bold'"
								size="24px"
								title="Chỉnh sửa"
								class="text-blue-500 cursor-pointer min-w-[32px]"
								@click="$emit('on-edit')"
							/>
						</p>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">Email</p>
						<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.email || '---' }}</p>
					</div>
					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">Tỉnh / Thành phố</p>
						<p class="text-md font-semibold text-gray-900 py-3">
							{{ detailData.address?.province?.full_name || '---' }}
						</p>
					</div>
					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">CODE</p>
						<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.code || '---' }}</p>
					</div>
					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">Quận / Huyện</p>
						<p class="text-md font-semibold text-gray-900 py-3">
							{{ detailData.address?.district?.full_name || '---' }}
						</p>
					</div>

					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">Số điện thoại</p>
						<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.phone || '---' }}</p>
					</div>
					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">Phường / Xã</p>
						<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.address?.ward?.full_name || '---' }}</p>
					</div>

					<div class="col-span-1">
						<p class="text-md text-gray-900 mb-2">Địa chỉ</p>
						<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.address?.address_line || '---' }}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="flex items-center gap-2 justify-end">
			<NormalButton
				size="base"
				type="submit"
				:container-class="'block rounded-xl font-normal'"
				:color="'gradient-button'"
				@click="onEdit"
			>
				<Icon :name="'carbon:rotate-360'" size="18px" /> Cập nhật
			</NormalButton>
		</div> -->
	</div>
</template>
<script lang="ts">
	import { ref, reactive } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useAppStateStore } from '../../store/appState';
	import { useAuthStore } from '../../store/auth';
	import { Customer } from '../../models/Customer';
	import UserAvatarPreview from '../../components/Layouts/UserAvatarPreview.vue';
	import NormalButton from '../../components/Buttons/NormalButton.vue';
	import CustomerInfomationTab from '../../components/Tabs/CustomerInfomationTab.vue';
	export default {
		components: { CustomerInfomationTab, NormalButton, UserAvatarPreview },
		setup() {
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { user } = storeToRefs(useAuthStore());

			const listTabs = reactive([]);
			const currentActiveTab = ref(1);
			const setCurrentTab = (_val: number) => {
				currentActiveTab.value = _val;
			};
			useHead({
				title: 'Thông tin tài khoản',
				meta: [{ name: 'description', content: 'Thông tin tài khoản' }],
			});
			return {
				user,
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
				await this.$api.user
					.getUserInfo()
					.then(
						res => {
							this.detailData = res.data.user as Customer;
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {});
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
