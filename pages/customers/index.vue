<template>
	<div class="punch-page-wrapper bg-white rounded-[12px] py-4 pl-4 pr-1 flex flex-col">
		<div class="page-filter flex gap-4 mb-0">
			<NormalButton
				size="xxl-md"
				type="submit"
				:container-class="'block rounded-xl font-normal'"
				:color="'gradient-button'"
				@click="showCreateModal = true"
			>
				<Icon name="solar:add-square-outline" size="20px" /> Thêm khách hàng
			</NormalButton>

			<SearchInput
				v-model="search"
				title=""
				placeholder="Tìm kiếm theo mã/tên/mst/cccd"
				input-class="rounded-xl"
				container-class="mb-0 min-w-[300px]"
				size="xxl"
			/>

			<SelectNormal
				:init-data="status_id"
				placeholder="Trạng thái"
				:list-items="customerStatuses"
				clearable
				@selected="changeStatus"
			/>
		</div>
		<div class="table w-full h-full">
			<CustomersTable
				:list-data="listData || []"
				:loading-search="loadingSearch"
				:loading-first-data="firstLoading"
				:is-search="isSearch"
				@toggle-data="toggleStatusData"
			/>
		</div>
		<div class="pagination">
			<Pagination :pagination="pagination" @pagination-change="paginationChange" />
		</div>
		<AddNewCustomerModal
			:visible="showCreateModal"
			:close-modal="closeAddModal"
			:loading="loadingAddData"
			@submit="addNewData"
		/>
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import CustomersTable from '../../components/Table/CustomersTable.vue';
	import Pagination from '../../components/Layouts/Pagination.vue';
	import { useAppStateStore } from '../../store/appState';
	import { useInternalStore } from '../../store/Internal';
	import { useNotificationStore } from '../../store/AppNotification';
	import NormalButton from '../../components/Buttons/NormalButton.vue';
	import SearchInput from '../../components/Form/SearchInput.vue';
	import SelectNormal from '../../components/Form/SelectNormal.vue';
	import AddNewCustomerModal from '../../components/Modal/AddNewCustomerModal.vue';
	import { CustomerQuery, Customer, CustomerCreateData } from '../../models/Customer';
	import { PagigationData } from '../../models';

	export default {
		setup() {
			const { $api } = useNuxtApp();
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { customerStatuses } = storeToRefs(useInternalStore());
			const api = $api;
			useHead({
				title: 'Danh sách khách hàng',
				meta: [{ name: 'description', content: 'Danh sách khách hàng' }],
			});
			return {
				api,
				customerStatuses,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: { Pagination, CustomersTable, NormalButton, SearchInput, SelectNormal, AddNewCustomerModal },
		data() {
			return {
				firstSync: true,
				firstLoading: true,
				loading: false,
				loadingSearch: false,
				loadingAddData: false,
				listData: null as Customer[] | null,

				refSyncUrl: 1,
				result: 0,
				search: '',
				pagination: {
					total: 1,
					total_pages: 1,
					per_page: 10,
					page: 1,
				},
				showCreateModal: false,
				status_id: null as string | number | null,
			};
		},
		computed: {
			normalQuery() {
				return `${this.search}`;
			},
			instantQuery() {
				return `${this.status_id}`;
			},
			isSearch() {
				const obj = { ...this.$route.query };
				delete obj.size;
				delete obj.page;
				return !!Object.keys(obj).length;
			},
		},
		watch: {
			$route: {
				deep: true,
				handler() {
					this.getListData();
				},
			},
			instantQuery: {
				deep: true,
				handler() {
					this.pagination = {
						...this.pagination,

						page: 1,
					};
					this.syncUrl();
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
					this.syncUrl();
				}, 700);
			},
		},
		mounted() {
			this.setBreadCrumbWithHomePage({ title: 'Danh sách khách hàng', route: '/nha-van-chuyen' });
			this.setCurrentViewTitle('Danh sách khách hàng');

			if (this.firstLoading) {
				this.bindUrl();
				const $query = this.$route.query;
				if (Object.keys($query).length) {
					this.getListData();
					return;
				}
				this.syncUrl();
			}
		},
		methods: {
			setSnack() {
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'success' });
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'error' });
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'info' });
				this.notificationStore.setSnack({ text: 'Test snackbar' + new Date().getTime(), type: 'warning' });
			},
			syncUrl() {
				this.firstSync = false;
				clearTimeout(this.refSyncUrl);
				this.refSyncUrl = window.setTimeout(() => {
					const currentPagination = {
						size: this.pagination.per_page,
						page: this.pagination.page,
					};
					const currentQuery = { ...this.$route.query } as Record<string, any>;
					if (this.search) {
						currentQuery.search = this.search;
					} else {
						delete currentQuery.search;
					}
					if (this.status_id) {
						currentQuery.status_id = this.status_id;
					} else {
						delete currentQuery.status_id;
					}
					this.$router.replace({ query: { ...currentQuery, ...currentPagination } }).catch(() => {});
				}, 80);
			},
			bindUrl() {
				// TODO: Implement this
				const currentQuery = new CustomerQuery({ ...this.$route.query });
				const myQuery = currentQuery.parseFromRoute();
				for (const key in myQuery) {
					if (Object.prototype.hasOwnProperty.call(myQuery, key)) {
						if (Object.prototype.hasOwnProperty.call(this, key)) {
							// @ts-ignore
							this[key as keyof typeof this] = myQuery[key as keyof typeof myQuery];
						}
					}
				}
			},
			paginationChange(val: PagigationData) {
				if (this.pagination.per_page === val.per_page && this.pagination.page === val.page) {
					return;
				}
				this.pagination = { ...this.pagination, ...val };
				this.syncUrl();
			},
			async getListData() {
				this.loadingSearch = true;
				const query = new CustomerQuery({ ...this.$route.query });
				await this.api.customers
					.getListData({ ...query.getQuery() })
					.then(
						res => {
							this.listData = res.data.customers as Customer[];
							const pagniation = res.data.meta.pagination || {};

							this.pagination = {
								total: pagniation.total,
								total_pages: pagniation.total_pages,
								per_page: pagniation.per_page,
								page: pagniation.current_page,
							};
						},
						err => {
							console.log(err);
						}
					)
					.finally(() => {
						this.loadingSearch = false;
						this.firstLoading = false;
						this.firstSync = false;
					});
			},
			toggleStatusData(selectedData: Customer) {
				if (selectedData.status?.id === 1) {
					this.deactiveData(selectedData.id);
				} else {
					this.activeData(selectedData.id);
				}
			},
			async deactiveData(id: number | string) {
				this.loading = true;
				await this.api.customers
					.updateStatus(id, { status_id: 2 })
					.then(
						res => {
							this.getListData();
							this.notificationStore.setSnack({ text: 'Thao tác thành công', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Thao tác thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loading = false;
					});
			},
			async activeData(id: number | string) {
				this.loading = true;
				await this.api.customers
					.updateStatus(id, { status_id: 1 })
					.then(
						res => {
							this.getListData();
							this.notificationStore.setSnack({ text: 'Thao tác thành công', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Thao tác thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loading = false;
					});
			},
			async addNewData(payload: CustomerCreateData) {
				this.loadingAddData = true;
				await this.api.customers
					.create(payload)
					.then(
						res => {
							this.closeAddModal();
							this.getListData();
							this.$router.push(`/customers/${res.data.customer.id}`);
							this.notificationStore.setSnack({ text: 'Thêm mới khách hàng thành công!', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Thêm mới khách hàng thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingAddData = false;
					});
			},
			closeAddModal() {
				this.showCreateModal = false;
			},
			changeStatus(value: string | number | null) {
				this.status_id = value;
			},
		},
	};
</script>
