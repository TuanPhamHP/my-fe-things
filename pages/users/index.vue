<template>
	<div class="punch-page-wrapper bg-white rounded-[12px] py-4 pl-4 pr-1 flex flex-col">
		<div class="page-filter flex gap-4 mb-0">
			<SearchInput
				v-model="search"
				title=""
				placeholder="Tìm kiếm theo mã/tên"
				input-class="rounded-xl"
				container-class="mb-0 min-w-[300px]"
				size="xxl"
			/>

			<SelectNormal
				:init-data="is_active"
				placeholder="Trạng thái"
				:list-items="acountUsersStatuses"
				clearable
				@selected="changeStatus"
			/>
		</div>
		<div class="table w-full h-full">
			<AccountUserTable
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
	import AccountUserTable from '../../components/Table/AccountUserTable.vue';
	import Pagination from '../../components/Layouts/Pagination.vue';
	import { useAppStateStore } from '../../store/appState';
	import { useInternalStore } from '../../store/Internal';
	import { useNotificationStore } from '../../store/AppNotification';
	import NormalButton from '../../components/Buttons/NormalButton.vue';
	import SearchInput from '../../components/Form/SearchInput.vue';
	import SelectNormal from '../../components/Form/SelectNormal.vue';
	import { AccountUserQuery, AccountUser } from '../../models/AccountUsers';
	import { PagigationData } from '../../models';

	export default {
		setup() {
			const { $api } = useNuxtApp();
			const notificationStore = useNotificationStore();
			const { setBreadCrumbWithHomePage, setCurrentViewTitle } = useAppStateStore();
			const { acountUsersStatuses } = storeToRefs(useInternalStore());
			const api = $api;
			useHead({
				title: 'Danh sách nhân viên',
				meta: [{ name: 'description', content: 'Danh sách nhân viên' }],
			});
			return {
				api,
				acountUsersStatuses,
				notificationStore,
				setBreadCrumbWithHomePage,
				setCurrentViewTitle,
			};
		},
		components: { Pagination, AccountUserTable, NormalButton, SearchInput, SelectNormal },
		data() {
			return {
				firstSync: true,
				firstLoading: true,
				loading: false,
				loadingSearch: false,
				loadingAddData: false,
				listData: null as AccountUser[] | null,

				refSyncUrl: 1,
				result: 0,
				search: '',
				pagination: {
					total: 1,
					total_pages: 1,
					per_page: 10,
					page: 1,
				},
				is_active: null as string | number | null,
			};
		},
		computed: {
			normalQuery() {
				return `${this.search}`;
			},
			instantQuery() {
				return `${this.is_active}`;
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
			this.setBreadCrumbWithHomePage({ title: 'Danh sách nhân viên', route: '/nha-van-chuyen' });
			this.setCurrentViewTitle('Danh sách nhân viên');

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
					if (this.is_active) {
						currentQuery.is_active = this.is_active;
					} else {
						delete currentQuery.is_active;
					}
					this.$router.replace({ query: { ...currentQuery, ...currentPagination } }).catch(() => {});
				}, 80);
			},
			bindUrl() {
				// TODO: Implement this
				const currentQuery = new AccountUserQuery({ ...this.$route.query });
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
				const query = new AccountUserQuery({ ...this.$route.query });
				await this.api.accountUsers
					.getListData({ ...query.getQuery() })
					.then(
						res => {
							this.listData = res.data.users as AccountUser[];
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
			toggleStatusData(selectedData: AccountUser) {
				if (selectedData.is_active) {
					this.deactiveData(selectedData.id);
				} else {
					this.activeData(selectedData.id);
				}
			},
			async deactiveData(id: number | string) {
				this.loading = true;
				await this.api.accountUsers
					.updateStatus(id, { is_active: 2 })
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
				await this.api.accountUsers
					.updateStatus(id, { is_active: 1 })
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

			changeStatus(value: string | number | null) {
				this.is_active = value;
			},
		},
	};
</script>
