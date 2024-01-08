<template>
	<div class="bg-white rounded-[24px] py-6 flex flex-col">
		<div class="table w-full h-full">
			<OrdersDocumentsTable
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
		<FileListViewModal
			:visible="visibleListDoc"
			:listFile="listDocs"
			:closeModal="closeListDocs"
			:title="`Tài liệu ${selectedDataToViewDocs?.title.name}`"
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
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import OrdersDocumentsTable from '../../Table/OrdersDocumentsTable.vue';
	import Pagination from '../../Layouts/Pagination.vue';
	import { useAppStateStore } from '../../../store/appState';
	import { useInternalStore } from '../../../store/Internal';
	import { useNotificationStore } from '../../../store/AppNotification';
	import FileListViewModal from '../../Modal/FileListViewModal.vue';
	import ConfirmModal from '../../Modal/ConfirmModal.vue';
	import { OrderDetail } from '../../../models/Order';
	import { Document, DocumentDetail } from '../../../models/Documents';
	import { PagigationData, CustomFileRespone, FileByGroup } from '../../../models';

	export default {
		props: {
			detailData: {
				type: Object as PropType<OrderDetail>,
				default: {},
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
		components: { Pagination, OrdersDocumentsTable, FileListViewModal, ConfirmModal },
		data() {
			return {
				visibleListDoc: false,
				firstSync: true,
				firstLoading: true,
				loadingDetail: true,
				loading: false,
				loadingSearch: false,
				loadingRemoveFile: false,
				loadingUpdateData: false,
				listData: null as Document[] | null,
				selectedDataToViewDocs: null as Document | null,
				selectedDataToEdit: null as DocumentDetail | null,
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
						group_name: this.selectedDataToViewDocs?.title.name || 'Không rõ',
						items: [...(this.selectedDataToViewDocs?.files || [])],
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
		},
		mounted() {
			this.getListData();
		},
		methods: {
			viewDocs(item: Document) {
				this.loadingDetail = true;
				this.selectedDataToViewDocs = item;
				//
				this.visibleListDoc = true;
			},
			selectDataToEdit(item: Document) {
				this.loadingDetail = true;
				this.$api.orders
					.getDetailJob(item.id)
					.then(
						res => {
							console.log(res.data.job);
							this.selectedDataToEdit = { ...res.data.job } as DocumentDetail;
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Không lấy được chi tiết công việc. Vui lòng thử lại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingDetail = false;
					});
				//
				// this.visibleListDoc = true;
			},
			closeListDocs() {
				this.selectedDataToViewDocs = null;
				this.visibleListDoc = false;
			},

			selectFileToRemove(file: CustomFileRespone) {
				this.selectedFileToRemove = { ...file } as CustomFileRespone;
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

				this.$api.orders
					.getDetailDataDocs(this.detailData.id)
					.then(
						res => {
							this.listData = res.data.documents as Document[];
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.data?.message || 'Lấy danh sách giấy tờ thất bại',
								type: 'error',
							});
							console.log(err);
						}
					)
					.catch(err => {
						this.notificationStore.setSnack({
							text: 'Lỗi lấy danh sách giấy tờ: ' + err,
							type: 'error',
						});
					})
					.finally(() => {
						this.loadingSearch = false;
						this.firstLoading = false;
						this.firstSync = false;
					});
			},
			update(payload: Record<string, any>) {
				if (!this.selectedDataToEdit) {
					this.notificationStore.setSnack({
						text: 'Chỉnh sửa thông tin công việc thất bại. Không lấy được id bản ghi',
						type: 'error',
					});
					return;
				}
				this.loadingUpdateData = true;
				const body = { ...payload };
				this.$api.orders
					.submitOrderJob(this.selectedDataToEdit.id, body)
					.then(
						res => {
							this.closeListDocs();
							this.closeUpdateModal();

							this.notificationStore.setSnack({ text: 'Chỉnh sửa thông tin công việc thành công!', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Chỉnh sửa thông tin công việc thất bại',
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
		},
	};
</script>
