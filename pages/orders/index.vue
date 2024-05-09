<template>
	<div class="punch-page-wrapper bg-white rounded-[12px] py-4 pl-4 pr-1 flex flex-col">
		<div class="page-filter flex gap-4 mb-0">
			<NormalButton
				size="xxl-md"
				type="submit"
				:container-class="'block rounded-xl font-bold'"
				:color="'gradient-button'"
				@click="$router.push('/orders/new')"
			>
				<Icon name="solar:add-square-outline" size="20px" /> Thêm đơn hàng mới
			</NormalButton>

			<SearchInput
				v-model="search"
				title=""
				placeholder="Tìm kiếm theo mã đơn/BKS/số cont"
				input-class="rounded-xl"
				container-class="mb-0 min-w-[300px] xl:ml-auto"
				size="xxl"
			/>

			<SelectNormal
				:init-data="status_id"
				placeholder="Trạng thái"
				:list-items="listOrderStatuses"
				clearable
				position="bottom-right"
				@selected="changeStatus"
			/>
			<AutocompleteNormal
				:init-data="person_in_charge_id"
				placeholder="Người phụ trách"
				:list-items="listUsers"
				clearable
				size="xxl"
				position="bottom-right"
				expand-icon-name="tabler:caret-down-filled"
				iconSize="14px"
				@selected="changeWatcher"
			/>
		</div>
		<div class="table w-full h-full">
			<OrdersTable
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
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import OrdersTable from '../../components/Table/OrdersTable.vue';
	import Pagination from '../../components/Layouts/Pagination.vue';
	import { useAppStateStore } from '../../store/appState';
	import { useInternalStore } from '../../store/Internal';
	import { useNotificationStore } from '../../store/AppNotification';
	import NormalButton from '../../components/Buttons/NormalButton.vue';
	import SearchInput from '../../components/Form/SearchInput.vue';
	import SelectNormal from '../../components/Form/SelectNormal.vue';
	import AutocompleteNormal from '../../components/Form/AutocompleteNormal.vue';
	import { OrderQuery, Order, OrderCreateData } from '../../models/Order';
	import { PagigationData } from '../../models';

	export default {
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
		components: { Pagination, OrdersTable, NormalButton, SearchInput, SelectNormal, AutocompleteNormal },
		data() {
			return {
				firstSync: true,
				firstLoading: true,
				loading: false,
				loadingSearch: false,
				loadingAddData: false,
				listData: null as Order[] | null,

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
				person_in_charge_id: null as string | number | null,
				status_id: null as string | number | null,
			};
		},
		computed: {
			normalQuery() {
				return `${this.search} ${this.person_in_charge_id}`;
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
			this.setBreadCrumbWithHomePage({ title: 'Danh sách đơn hàng', route: '/nha-van-chuyen' });
			this.setCurrentViewTitle('Danh sách đơn hàng');

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
					if (this.person_in_charge_id) {
						currentQuery.person_in_charge_id = this.person_in_charge_id;
					} else {
						delete currentQuery.person_in_charge_id;
					}
					this.$router.replace({ query: { ...currentQuery, ...currentPagination } }).catch(() => {});
				}, 80);
			},
			bindUrl() {
				// TODO: Implement this
				const currentQuery = new OrderQuery({ ...this.$route.query });
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
				const query = new OrderQuery({ ...this.$route.query });
				await this.$api.orders
					.getListData({ ...query.getQuery() })
					.then(
						res => {
							this.listData = res.data.orders as Order[];
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
			toggleStatusData(selectedData: Order) {
				if (selectedData.id) {
					this.deactiveData(selectedData.id);
				} else {
					this.activeData(selectedData.id);
				}
			},
			async deactiveData(id: number | string) {
				this.loading = true;
				await this.$api.orders
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
				await this.$api.orders
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
			async addNewData(payload: OrderCreateData) {
				this.loadingAddData = true;
				await this.$api.orders
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
			changeWatcher(value: string | number | null) {
				this.person_in_charge_id = value;
			},
		},
	};
</script>
