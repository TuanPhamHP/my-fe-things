<template>
	<div class="h-full">
		<div class="flow-root h-full">
			<div class="overflow-x-auto h-full">
				<div class="inline-block min-w-full py-2 align-middle sm:px-1 lg:px-1">
					<div class="shadow-lg relative overflow-hidden h-full ring-1 ring-black ring-opacity-5 sm:rounded-xl">
						<SearchLoaderTable v-show="isSearching" />
						<div class="table-wrapper scroll-mod-v1">
							<table class="min-w-full divide-y divide-gray-300 rounded-lg">
								<thead class="bg-gray-200 sticky top-0 z-[4] border-b-1 text-gray-300">
									<tr class="">
										<th
											scope="col"
											class="py-5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
											style="max-width: 200px; width: 200px"
										>
											Biển kiểm soát
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 240px; width: 240px"
										>
											Loại xe
										</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Số mooc</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">
											Tải trọng (tấn)
										</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Trạng thái</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 120px; width: 120px"
										>
											Ngày tạo
										</th>
										<th scope="col" class="relative" style="max-width: 60px; width: 60px">
											<span class="sr-only">Tác vụ</span>
										</th>
									</tr>
								</thead>

								<FirstLoader v-if="loadingFirstData" :rows="6" />
								<NotFoundDataTable v-if="isNotFoundData" />
								<NoDataTable v-if="isNoData" />

								<tbody class="divide-y divide-gray-200 bg-white">
									<tr
										v-for="(item, idx) in listData"
										:key="item.id"
										class="table-hover-row divide-x text-center"
										:class="[idx % 2 ? 'bg-gray-100' : 'bg-white', listData.length > 1 ? '' : '']"
									>
										<td
											class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 hover:underline cursor-pointer"
											@click="$router.push(`/vehicles/${item.id}`)"
										>
											{{ item.plate_number }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">
											{{ item.vehicle_type?.name }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{{ item.mooc_number }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">
											{{ item.vehicle_weight?.name }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm font-semibold"
											:class="[getForwarderStatusTextColor(item.status?.id)]"
										>
											{{ item.status?.name }}
										</td>

										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{{ formatDateDMY(item.created_at) }}
										</td>
										<td class="relative whitespace-nowrap text-right text-sm font-medium">
											<Menu as="div" class="relative block text-left mx-auto">
												<div>
													<MenuButton
														class="flex w-full items-center justify-center hover:bg-gray-300/50 rounded-half text-sm focus:outline-none"
													>
														<Icon class="min-w-[32px] text-primary" :name="'solar:menu-dots-bold'" size="24px" />
													</MenuButton>
												</div>

												<transition
													enter-active-class="transition duration-100 ease-out"
													enter-from-class="transform scale-95 opacity-0"
													enter-to-class="transform scale-100 opacity-100"
													leave-active-class="transition duration-75 ease-in"
													leave-from-class="transform scale-100 opacity-100"
													leave-to-class="transform scale-95 opacity-0"
												>
													<MenuItems
														class="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-[12px]"
														:class="idx > 4 ? 'bottom-0' : ''"
													>
														<div class="px-1 py-1">
															<MenuItem v-slot="{ active }">
																<button
																	:class="[
																		active ? 'bg-primary-300 text-dark' : 'text-gray-900',
																		'group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm',
																	]"
																	@click="toggleStatus(item)"
																>
																	{{ item.status?.id === 1 ? 'Ngừng hoạt động' : 'Kích hoạt lại' }}

																	<Icon
																		class="min-w-[32px] ml-1"
																		:class="item.status?.id === 1 ? 'text-red-600' : 'text-primary'"
																		:name="item.status?.id === 1 ? 'ion:ban-outline' : 'ic:baseline-check'"
																		size="24px"
																	/>
																</button>
															</MenuItem>
														</div>

														<div class="px-1 py-1">
															<MenuItem v-slot="{ active }">
																<button
																	:class="[
																		active ? 'bg-primary-300 text-dark' : 'text-gray-900',
																		'group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm',
																	]"
																	@click="onEdit(item)"
																>
																	Chỉnh sửa
																	<Icon
																		class="min-w-[32px] ml-1 text-blue-700"
																		:name="'basil:edit-outline'"
																		size="24px"
																	/>
																</button>
															</MenuItem>
														</div>
													</MenuItems>
												</transition>
											</Menu>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<UpdateVehicleModal
			:visible="showUpdateModal"
			:close-modal="closeUpdateModal"
			:loading="loadingUpdateData"
			:detail-data="selectedVehicle"
			@submit="updateVehicle"
		/>
	</div>
</template>

<script lang="ts">
	import FirstLoader from './FirstLoader.vue';
	import NotFoundDataTable from './NotFoundDataTable.vue';
	import NoDataTable from './NoDataTable.vue';
	import SearchLoaderTable from './SearchLoaderTable.vue';
	import UpdateVehicleModal from '../Modal/UpdateVehicleModal.vue';
	import { PropType } from 'vue';
	import { Vehicle, VehicleCreateData } from '../../models/Vehicle';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	import { getForwarderStatusTextColor, formatDateDMY } from '../../helpers/formatter';
	export default {
		components: {
			Menu,
			MenuButton,
			MenuItems,
			MenuItem,
			FirstLoader,
			NotFoundDataTable,
			NoDataTable,
			SearchLoaderTable,
			UpdateVehicleModal,
		},
		props: {
			listData: {
				type: Array as PropType<Vehicle[]>,
				default: [],
			},
			loadingFirstData: {
				type: Boolean,
				default: true,
			},
			loadingSearch: {
				type: Boolean,
				default: true,
			},
			isSearch: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				selectedVehicle: null as Vehicle | null,
				loadingUpdateData: false,
			};
		},
		computed: {
			showUpdateModal() {
				return Boolean(this.selectedVehicle && this.selectedVehicle.id);
			},
			isEmptyData() {
				return !this.loadingFirstData && !Boolean(this.listData.length);
			},
			isNotFoundData() {
				return this.isEmptyData && this.isSearch;
			},
			isNoData() {
				return this.isEmptyData && !this.isSearch;
			},
			isSearching() {
				return this.loadingSearch && !this.loadingFirstData;
			},
		},
		methods: {
			formatDateDMY,
			toggleStatus(item: Vehicle) {
				this.$emit('toggle-status', item);
			},
			getForwarderStatusTextColor,
			onEdit(item: Vehicle) {
				this.selectedVehicle = { ...item };
			},
			closeUpdateModal() {
				this.selectedVehicle = null;
			},
			async updateVehicle(payload: VehicleCreateData) {
				if (!this.selectedVehicle) {
					return;
				}
				this.loadingUpdateData = true;
				await this.$api.vehicles
					.update(this.selectedVehicle.id, payload)
					.then(
						res => {
							this.closeUpdateModal();
							this.$globalHelpers.setSnack({ text: 'Chỉnh sửa xe thành công!', type: 'success' });
							this.$emit('force-update-data');
						},
						err => {
							this.$globalHelpers.setSnack({
								text: err?.response?._data?.message || 'Chỉnh sửa xe thất bại',
								type: 'error',
							});
						}
					)
					.finally(() => {
						this.loadingUpdateData = false;
					});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.table-wrapper {
		max-height: calc(100vh - 324px - 16px);
		height: calc(100vh - 324px - 16px);
		min-height: 400px;
		overflow-y: scroll;
	}
</style>
