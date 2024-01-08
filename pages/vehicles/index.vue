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
				<Icon name="solar:add-square-outline" size="20px" /> Thêm xe
			</NormalButton>

			<SearchInput
				v-model="search"
				title=""
				placeholder="Tìm kiếm theo mã/tên/mst/cccd"
				input-class="rounded-xl"
				container-class="mb-0 min-w-[300px] ml-auto"
				size="xxl"
			/>

			<SelectNormal
				:init-data="status_id"
				placeholder="Trạng thái"
				:list-items="forwarderStatuses"
				clearable
				@selected="changeStatus"
			/>
		</div>
		<div class="table w-full h-full">
			<VehicleTable
				:list-data="listData || []"
				:loading-search="loadingSearch"
				:loading-first-data="firstLoading"
				:is-search="isSearch"
				@toggle-status="toggleStatus"
				@force-update-data="getListData"
			/>
		</div>
		<div class="pagination">
			<Pagination :pagination="pagination" @pagination-change="paginationChange" />
		</div>
		<AddNewVehicleModal
			:visible="showCreateModal"
			:close-modal="closeAddModal"
			:loading="loadingAddData"
			@submit="addNewVehicle"
		/>
	</div>
</template>
<script lang="ts">
	import { storeToRefs } from 'pinia';
	import VehicleTable from '../../components/Table/VehicleTable.vue';
	import Pagination from '../../components/Layouts/Pagination.vue';
	import { useAppStateStore } from '../../store/appState';
	import { useInternalStore } from '../../store/Internal';
	import { useNotificationStore } from '../../store/AppNotification';
	import NormalButton from '../../components/Buttons/NormalButton.vue';
	import SearchInput from '../../components/Form/SearchInput.vue';
	import SelectNormal from '../../components/Form/SelectNormal.vue';
	import AddNewVehicleModal from '../../components/Modal/AddNewVehicleModal.vue';
	import { VehicleQuery, Vehicle, VehicleCreateData } from '../../models/Vehicle';
	import { PagigationData } from '../../models';

	export default {
		setup() {
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { forwarderStatuses } = storeToRefs(useInternalStore());
			// @ts-ignore
			useHead({
				title: 'Danh sách xe',
				meta: [{ name: 'description', content: 'Danh sách xe' }],
			});
			return {
				forwarderStatuses,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: { Pagination, VehicleTable, NormalButton, SearchInput, SelectNormal, AddNewVehicleModal },
		data() {
			return {
				firstSync: true,
				firstLoading: true,
				loading: false,
				loadingSearch: false,
				loadingAddData: false,
				listData: null as Vehicle[] | null,

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
			this.setBreadCrumbWithHomePage({ title: 'Danh sách xe', route: '/nha-van-chuyen' });
			this.setCurrentViewTitle('Danh sách xe');

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
					this.$router.replace({ query: { ...currentQuery, ...currentPagination } }).catch(() => {});
				}, 80);
			},
			bindUrl() {
				// TODO: Implement this
				const currentQuery = new VehicleQuery({ ...this.$route.query });
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
				const query = new VehicleQuery({ ...this.$route.query });
				await this.$api.vehicles
					.getListData({ ...query.getQuery() })
					.then(
						res => {
							this.listData = res.data.vehicles as Vehicle[];
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
			toggleStatus(vehicle: Vehicle) {
				if (vehicle.status?.id === 1) {
					this.deactiveForwarder(vehicle.id);
				} else {
					this.activeForwarder(vehicle.id);
				}
			},
			async deactiveForwarder(id: number | string) {
				this.loading = true;
				await this.$api.vehicles
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
			async activeForwarder(id: number | string) {
				this.loading = true;
				await this.$api.vehicles
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
			async addNewVehicle(payload: VehicleCreateData) {
				this.loadingAddData = true;
				await this.$api.vehicles
					.create(payload)
					.then(
						res => {
							this.closeAddModal();
							this.getListData();
							this.notificationStore.setSnack({ text: 'Thêm mới xe thành công!', type: 'success' });
						},
						err => {
							this.notificationStore.setSnack({
								text: err?.response?._data?.message || 'Thêm mới xe thất bại',
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
