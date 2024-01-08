<template>
	<div>
		<div class="punch-page-wrapper bg-white rounded-[24px]" :class="detailData?.status.id === 10 ? 'is-draft' : ''">
			<div class="w-full flex items-center -mx-3 sticky top-0 z-4 bg-white px-5 py-6">
				<div class="mb-0 flex items-center gap-3 bg-white sticky top-0 z-4 py-2">
					<NuxtLink to="/orders" class="w-10 h-10 flex items-center justify-center rounded-half hover:bg-gray-400/30">
						<Icon name="solar:arrow-left-linear" size="32px" />
					</NuxtLink>
					<span class="font-bold title-md"> Quay lại </span>
				</div>

				<div class="text-right ml-auto">
					<SepNormalButton
						size="xl"
						type="submit"
						:container-class="'block rounded-xl font-semibold'"
						color="outline-primary"
						@click="$router.push(`/orders/${detailData?.id}/edit`)"
					>
						<Icon name="solar:pen-2-linear" />
						Chỉnh sửa
					</SepNormalButton>
				</div>
			</div>
			<div v-if="detailData" class="tabs p-6">
				<div class="pb-8">
					<OrderStatuses :detail-data="detailData" />
				</div>
				<div class="flex items-center justify-between">
					<div class="pb-0 flex items-center border-b-2 border-primary-900 w-fit">
						<div
							v-for="item in listTabs"
							:key="item.id"
							class="cursor-pointer tab-wrapper"
							@click="setCurrentTab(item.id)"
						>
							<p
								class="mb-0 pb-3 pt-2 px-3 body-lg font-semibold overflow-hidden each-tab"
								:class="item.id === currentActiveTab ? 'text-white active-tab bg-primary-900' : 'text-dark normal-tab'"
							>
								{{ item.name }}
							</p>
						</div>
					</div>
					<div
						v-if="currentActiveTab === 2 && detailData?.can_be_added_delivery_logs"
						class="w-fit cursor-pointer flex items-center p-2 gap-2 rounded-lg hover:bg-neutral-200"
						@click="openAddDeliveryModal"
					>
						<Icon name="material-symbols:add-rounded" size="16px" />
						Thêm mới
					</div>
				</div>
				<OrderDetailIndex v-if="currentActiveTab === 1" :detail-data="detailData" @force-get-detail="getDetailData" />
				<OrderDetailDeliveryInfomation
					v-if="currentActiveTab === 2"
					:detail-data="detailData"
					:show-add-modal="visibleAddDelivery"
					@assign-forwarder-success="getDetailData"
					@cancel-forwarder-success="getDetailData"
					@refresh-detail="getDetailData"
				/>
				<OrderDetailJobInfomation
					v-if="currentActiveTab === 3"
					:detail-data="detailData"
					@refresh-detail="getDetailData"
				/>
				<OrderDetailDocsInfomation
					v-if="currentActiveTab === 4"
					:detail-data="detailData"
					@assign-forwarder-success="getDetailData"
					@cancel-forwarder-success="getDetailData"
				/>
			</div>
			<div v-if="detailData?.status.id === 10" class="btn-block fixed bg-white flex items-center justify-center gap-4">
				<NormalButton
					size="xxl-md"
					type="button"
					:container-class="'block rounded-xl font-normal w-40 whitespace-nowrap'"
					:color="'gradient-button'"
					:loading="loadingSubmit"
					@click="submitData"
				>
					Bắt đầu
				</NormalButton>
			</div>
		</div>

		<HandleOrderModal
			v-if="detailData"
			:visible="visibleHandleOrder"
			:detail-data="detailData"
			:close-modal="cancelHandler"
		/>
		<ConfirmModal
			:visible="visibleControlsConfirm"
			:title="confirmObj.title"
			:message="confirmObj.msg"
			:button-cancel-text="'Quay lại'"
			:button-confirm-text="confirmObj.btnConfirmText"
			:loading="loadingConfirm"
			@submit="onControlsConfirm"
			@cancel="cancelControlsConfirm"
		/>
	</div>
</template>
<script lang="ts">
	import { useAppStateStore } from '../../../store/appState';
	import { useNotificationStore } from '../../../store/AppNotification';
	import NormalButton from '../../../components/Buttons/NormalButton.vue';
	import SepNormalButton from '../../../components/Buttons/SepNormalButton.vue';
	import OrderStatuses from '../../../components/Layouts/OrderStatuses.vue';
	import OrderDetailIndex from '../../../components/Orders/Detail/OrderDetailIndex.vue';
	import OrderDetailDeliveryInfomation from '../../../components/Orders/Detail/OrderDetailDeliveryInfomation.vue';
	import OrderDetailJobInfomation from '../../../components/Orders/Detail/OrderDetailJobInfomation.vue';
	import OrderDetailDocsInfomation from '../../../components/Orders/Detail/OrderDetailDocsInfomation.vue';

	import ConfirmModal from '../../../components/Modal/ConfirmModal.vue';
	import HandleOrderModal from '../../../components/Modal/HandleOrderModal.vue';
	import { OrderDetail } from '../../../models/Order';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	export default {
		components: {
			OrderDetailIndex,
			NormalButton,
			SepNormalButton,
			OrderDetailDeliveryInfomation,
			OrderDetailJobInfomation,
			OrderDetailDocsInfomation,
			Menu,
			MenuButton,
			MenuItems,
			MenuItem,
			ConfirmModal,
			HandleOrderModal,
			OrderStatuses,
		},
		setup() {
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { $api } = useNuxtApp();
			const api = $api;
			const listTabs = reactive([
				{ id: 1, name: 'Chi tiết đơn hàng' },
				{ id: 2, name: 'Thông tin vận chuyển' },
				{ id: 3, name: 'Công việc cần làm' },
				{ id: 4, name: 'Quản lý giấy tờ' },
			]);
			const currentActiveTab = ref(1);
			const setCurrentTab = (_val: number) => {
				currentActiveTab.value = _val;
			};
			useHead({
				title: 'Chi tiết đơn hàng',
				meta: [{ name: 'description', content: 'Chi tiết đơn hàng' }],
			});
			return {
				api,
				listTabs,
				currentActiveTab,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
				setCurrentTab,
			};
		},
		data() {
			return {
				detailData: null as OrderDetail | null,
				loading: false,
				loadingSubmit: false,
				loadingConfirm: false,
				loadingAddDelivery: false,
				result: 0,
				visibleCancelOrder: false,
				visibleHandleOrder: false,
				visibleControlsConfirm: false,
				visibleAddDelivery: 0,
				controlsTypeId: '',
			};
		},
		computed: {
			confirmObj() {
				switch (this.controlsTypeId) {
					case 'accept':
						return {
							title: 'Nhận đơn',
							msg: 'Hành đông này sẽ không thể hoàn tác, bạn có muốn tiếp tục huỷ không?',
							btnConfirmText: 'Nhận đơn',
						};
					case 'refuse':
						return {
							title: 'Từ chối',
							msg: 'Hành đông này sẽ không thể hoàn tác, bạn có muốn tiếp tục huỷ không?',
							btnConfirmText: 'Từ chối',
						};

					default:
						return {
							title: 'Xác nhận',
							msg: 'Xác nhận thực hiện thao tác?',
							btnConfirmText: 'Đồng ý',
						};
				}
			},
			canBeControls() {
				return true;
			},
		},
		mounted() {
			this.setBreadCrumbWithHomePage();
			this.setCurrentViewTitle('Chi tiết đơn hàng');
			this.getDetailData();
		},
		methods: {
			openConfirmCancel() {
				this.visibleCancelOrder = true;
			},
			cancelConfirmCancel() {
				this.visibleCancelOrder = false;
			},
			getDetailData() {
				this.api.orders
					.getDetailData(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.order as OrderDetail;

							this.setCurrentViewTitle(`Chi tiết đơn hàng #${res.data.order.code || '---'}`);
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {});
			},
			onEdit() {
				this.$router.push(`/orders/${this.$route.params.id}/edit`);
			},
			onAccept() {
				this.api.orders
					.accept(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.order as OrderDetail;
							this.notificationStore.setSnack({
								text: 'Xác nhận đơn hàng thành công',
								type: 'success',
							});
							this.getDetailData();
							this.cancelControlsConfirm();
						},
						err => {
							console.log(err);
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Xác nhận đơn hàng thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {});
			},
			onRefuse() {
				this.api.orders
					.refuse(this.$route.params.id as string, {})
					.then(
						res => {
							this.detailData = res.data.order as OrderDetail;
							this.notificationStore.setSnack({
								text: 'Từ chối đơn hàng thành công',
								type: 'success',
							});
							this.getDetailData();
							this.cancelControlsConfirm();
						},
						err => {
							console.log(err);
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Từ chối đơn hàng thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {});
			},
			startHandler() {
				this.visibleHandleOrder = true;
			},
			cancelHandler() {
				this.visibleHandleOrder = false;
			},
			openConfirmControls(str: 'accept' | 'refuse') {
				this.controlsTypeId = str;
				this.visibleControlsConfirm = true;
			},
			cancelControlsConfirm() {
				this.controlsTypeId = '';
				this.visibleControlsConfirm = false;
			},
			onControlsConfirm() {
				if (this.controlsTypeId === 'accept') {
					this.onAccept();
				}
				if (this.controlsTypeId === 'refuse') {
					this.onRefuse();
				}
			},

			submitData() {
				if (!this.detailData) {
					return;
				}
				this.loadingSubmit = true;
				this.api.orders
					.start(this.detailData.id)
					.then(
						res => {
							this.notificationStore.setSnack({ text: 'Bắt đầu đơn hàng thành công!', type: 'success' });
							this.$router.push(`/orders/${res.data.order.id}`);
							this.getDetailData();
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Bắt đầu đơn hàng thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingSubmit = false;
					});
			},
			openAddDeliveryModal() {
				this.visibleAddDelivery += 1;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.new-order {
		height: calc(100vh - 68px - 24px - 24px);
	}
	.btn-block {
		bottom: 0;
		right: 0;
		left: 100px;
		height: 108px;
		z-index: 4;
	}
	.tab-wrapper {
		.each-tab {
			position: relative;
			transition: 0.2s ease;
			border-radius: 8px 8px 0 0;
		}
		&:nth-of-type(2n + 1) {
		}

		.active-tab {
		}
	}
	.punch-page-wrapper {
		&.is-draft {
			height: calc(100vh - 80px - 24px - 24px - 108px);
		}
	}
	.btn-block {
		bottom: 0;
		right: 0;
		left: 100px;
		height: 108px;
		z-index: 4;
	}
</style>
