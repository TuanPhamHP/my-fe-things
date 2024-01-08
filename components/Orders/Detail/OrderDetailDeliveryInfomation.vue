<template>
	<div class="bg-white rounded-[24px] py-6 flex flex-col">
		<div class="table w-full h-full">
			<OrdersDeliveryLogsTable
				:list-data="listData || []"
				:loading-search="loadingSearch"
				:loading-first-data="firstLoading"
				:is-search="isSearch"
				@select-data-to-edit="selectDataToEdit"
				@view-files="viewDocs"
			/>
		</div>
		<div class="pagination">
			<Pagination :pagination="pagination" @pagination-change="paginationChange" />
		</div>
		<UpdateDeliveryLogModal
			:visible="showUpdateDeliveryModal"
			:close-modal="closeUpdateModal"
			:loading="loadingUpdateData"
			:detail-data="selectedDataToEdit"
			@submit="update"
		/>
		<FileListViewModal
			:visible="visibleListDoc"
			:listFile="listDocs"
			:closeModal="closeListDocs"
			@remove-file="selectFileToRemove"
		/>
		<ConfirmModal
			:visible="visibleRemoveFile"
			:title="'Xác nhận'"
			:message="'Xoá tệp này?'"
			:button-cancel-text="'Quay lại'"
			:button-confirm-text="'Vẫn xóa'"
			:loading="loadingRemoveFile"
			@submit="onRemoveFile"
			@cancel="cancelRemoveFile"
		/>

		<AddDeliveryLogModal
			:visible="visibleAddDelivery"
			:close-modal="closeAddDeliveryModal"
			:loading="loadingAddDelivery"
			:detail-data="detailData"
			:list-logs="listData || []"
			@submit="create"
		/>
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import OrdersDeliveryLogsTable from '../../Table/OrdersDeliveryLogsTable.vue';
	import Pagination from '../../Layouts/Pagination.vue';
	import { useAppStateStore } from '../../../store/appState';
	import { useInternalStore } from '../../../store/Internal';
	import { useNotificationStore } from '../../../store/AppNotification';
	import UpdateDeliveryLogModal from '../../Modal/UpdateDeliveryLogModal.vue';
	import AddDeliveryLogModal from '../../Modal/AddDeliveryLogModal.vue';
	import FileListViewModal from '../../Modal/FileListViewModal.vue';
	import ConfirmModal from '../../Modal/ConfirmModal.vue';
	import { DeliveryLog, OrderDetail, OrderCreateData } from '../../../models/Order';
	import { PagigationData, CustomFileRespone, FileByGroup } from '../../../models';

	export default {
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
			},
			showAddModal: {
				type: Number,
				default: 0,
			},
		},
		emits: ['refresh-detail'],
		setup() {
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { listOrderStatuses, listUsers } = storeToRefs(useInternalStore());

			useHead({
				title: 'Danh sách đơn hàng',
				meta: [{ name: 'description', content: 'Danh sách đơn hàng' }],
			});
			return {
				listOrderStatuses,
				notificationStore,
				listUsers,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: {
			Pagination,
			OrdersDeliveryLogsTable,
			UpdateDeliveryLogModal,
			FileListViewModal,
			ConfirmModal,
			AddDeliveryLogModal,
		},
		data() {
			return {
				visibleListDoc: false,
				visibleAddDelivery: false,
				loadingAddDelivery: false,
				firstSync: true,
				firstLoading: true,
				loading: false,
				loadingSearch: false,
				loadingRemoveFile: false,
				loadingUpdateData: false,
				listData: null as DeliveryLog[] | null,
				selectedDataToViewDocs: null as DeliveryLog | null,
				selectedDataToEdit: null as DeliveryLog | null,
				selectedFileToRemove: null as CustomFileRespone | null,

				refSyncUrl: 1,
				result: 0,
				search: '',
				pagination: {
					total: 1,
					total_pages: 1,
					per_page: 10,
					page: 1,
				},
			};
		},
		computed: {
			listDocs(): FileByGroup[] {
				return [
					{
						group_name: '',
						items: this.selectedDataToViewDocs?.files || [],
					},
				];
			},
			normalQuery() {
				return `${this.search}`;
			},
			instantQuery() {
				return ``;
			},
			isSearch() {
				const obj = { ...this.$route.query };
				delete obj.size;
				delete obj.page;
				return !!Object.keys(obj).length;
			},
			showUpdateDeliveryModal() {
				return !!(this.selectedDataToEdit && this.selectedDataToEdit.id);
			},
			visibleRemoveFile() {
				return !!(this.selectedFileToRemove && this.selectedFileToRemove.id);
			},
		},
		watch: {
			instantQuery: {
				deep: true,
				handler() {
					this.pagination = {
						...this.pagination,

						page: 1,
					};
					this.getListData();
				},
			},

			normalQuery() {
				if (this.firstSync) {
					return;
				}
				clearTimeout(this.refSyncUrl);
				this.refSyncUrl = window.setTimeout(() => {
					this.pagination = {
						...this.pagination,
						page: 1,
					};
					this.getListData();
				}, 700);
			},
			detailData: {
				deep: true,
				handler() {
					if (this.detailData) {
						this.getListData();
					}
				},
			},
			showAddModal() {
				this.openAddDeliveryModal();
			},
		},
		mounted() {
			this.getListData();
		},
		methods: {
			viewDocs(item: DeliveryLog) {
				this.selectedDataToViewDocs = { ...item };
				this.visibleListDoc = true;
			},
			closeListDocs() {
				this.selectedDataToViewDocs = null;
				this.visibleListDoc = false;
			},

			selectFileToRemove(file: CustomFileRespone) {
				this.selectedFileToRemove = { ...file } as CustomFileRespone;
			},
			selectDataToEdit(item: DeliveryLog) {
				this.selectedDataToEdit = item;
			},
			closeUpdateModal() {
				this.selectedDataToEdit = null;
			},
			paginationChange(val: PagigationData) {
				if (this.pagination.per_page === val.per_page && this.pagination.page === val.page) {
					return;
				}
				this.pagination = { ...this.pagination, ...val };
				this.getListData();
			},
			getListData() {
				this.loadingSearch = true;
				const query = {
					page: this.pagination.page,
					size: this.pagination.per_page,
				};
				this.$api.orders
					.getDetailDataDeliveryLogs(this.detailData.id, { ...query })
					.then(
						res => {
							this.listData = res.data.delivery_logs as DeliveryLog[];
							const pagniation = res.data.meta.pagination || {};

							this.pagination = {
								total: pagniation.total,
								total_pages: pagniation.total_pages,
								per_page: pagniation.per_page,
								page: pagniation.current_page,
							};
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.data?.message || 'Lấy danh sách đơn hàng thất bại',
								type: 'error',
							});
							console.log(err);
						}
					)
					.catch(err => {
						this.notificationStore.setSnack({
							text: 'Lỗi lấy danh sách đơn hàng: ' + err,
							type: 'error',
						});
					})
					.finally(() => {
						this.loadingSearch = false;
						this.firstLoading = false;
						this.firstSync = false;
					});
			},
			async update(payload: Record<string, any>) {
				this.loadingUpdateData = true;
				const body = { ...payload };
				delete body.id;
				await this.$api.orders
					.updateDeliveryLog(payload.id, body)
					.then(
						res => {
							this.closeListDocs();
							this.closeUpdateModal();
							this.getListData();

							this.notificationStore.setSnack({ text: 'Chỉnh sửa thông tin vận chuyển thành công!', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Chỉnh sửa thông tin vận chuyển thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingUpdateData = false;
					});
			},
			closeAddModal() {
				this.showUpdateDeliveryModal = false;
			},

			onRemoveFile() {
				if (!this.selectedFileToRemove) {
					return;
				}
				this.loadingRemoveFile = true;
				this.$api.fileHandlers
					.delete(this.selectedFileToRemove?.id as string, {})
					.then(
						res => {
							this.$globalHelpers.setSnack({
								text: 'Xóa tệp thành công',
								type: 'success',
							});
							this.selectedFileToRemove = null;
							this.visibleListDoc = false;
							this.getListData();
							this.$emit('refresh-detail');
						},
						err => {
							this.$globalHelpers.setSnack({
								text: err?.response?._data?.message || 'Xóa tệp thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingRemoveFile = false;
					});
			},
			cancelRemoveFile() {
				this.selectedFileToRemove = null;
			},
			openAddDeliveryModal() {
				this.visibleAddDelivery = true;
			},
			closeAddDeliveryModal() {
				this.visibleAddDelivery = false;
			},
			create(payload: Record<string, any>) {
				if (!this.detailData) {
					return;
				}
				this.loadingAddDelivery = true;
				const body = { ...payload };
				delete body.id;
				this.$api.orders
					.createOrderDeliveryLog(this.detailData?.id, body)
					.then(
						res => {
							this.closeAddDeliveryModal();
							this.$emit('refresh-detail');

							this.notificationStore.setSnack({ text: 'Thêm mới thông tin vận chuyển thành công!', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Thêm mới thông tin vận chuyển thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingAddDelivery = false;
					});
			},
		},
	};
</script>
