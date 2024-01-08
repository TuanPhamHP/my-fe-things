<template>
	<div class="h-full">
		<div class="flow-root h-full">
			<div class="overflow-x-auto h-full">
				<div class="inline-block min-w-full max-w-full py-2 align-middle sm:px-1 lg:px-1">
					<div class="shadow-lg relative overflow-hidden h-full ring-1 ring-black ring-opacity-5 sm:rounded-xl">
						<SearchLoaderTable v-show="isSearching" />
						<div class="table-wrapper scroll-mod-v1 bg-neutral-100">
							<table class="min-w-full rounded-lg divide-y divide-gray-100 divide-y-4">
								<thead class="bg-neutral-100 sticky top-0 z-[4] border-b-1 text-neutral-300">
									<tr class="text-left">
										<th
											scope="col"
											class="py-5 pl-4 pr-3 text-left text-sm font-normal text-neutral-900 sm:pl-6"
											style="max-width: 200px; width: 200px"
										>
											Mã đơn hàng
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-left truncate text-sm font-normal text-neutral-900 whitespace-nowrap"
											style="max-width: 160px; width: 160px"
										>
											Trạng thái
										</th>

										<th
											scope="col"
											class="px-3 py-5 text-left truncate text-sm font-normal text-neutral-900"
											style="max-width: 240px; width: 240px"
										>
											Người phụ trách
										</th>

										<th
											scope="col"
											class="px-3 py-5 text-left truncate text-sm font-normal text-neutral-900"
											style="max-width: 240px; width: 240px"
										>
											Số công việc hoàn thành
										</th>

										<th
											scope="col"
											class="px-3 py-5 text-left truncate text-sm font-normal text-neutral-900"
											style="max-width: 140px; width: 140px"
										>
											Số cont
										</th>

										<th
											scope="col"
											class="px-3 py-5 text-left truncate text-sm font-normal text-neutral-900"
											style="max-width: 140px; width: 140px"
										>
											Biển kiểm soát
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-left truncate text-sm font-normal text-neutral-900"
											style="max-width: 240px; width: 240px"
										>
											Thời gian dự kiến đến cửa khẩu
										</th>

										<th scope="col" class="relative" style="max-width: 60px; width: 60px">
											<span class="sr-only">Tác vụ</span>
										</th>
									</tr>
								</thead>

								<FirstLoader v-if="loadingFirstData" :rows="6" :cols="7" />
								<NotFoundDataTable v-if="isNotFoundData" />
								<NoDataTable v-if="isNoData" />

								<tbody class="divide-y divide-gray-100 divide-y-4">
									<tr v-for="(item, idx) in listData" :key="item.id" class="table-hover-row text-left">
										<td @click="$router.push(`/orders/${item.id}`)">
											<div
												class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium flex items-center text-blue-500 sm:pl-6 underline cursor-pointer"
											>
												#{{ item.code }}
											</div>
										</td>
										<td style="max-width: 120px; width: 120px">
											<div class="whitespace-nowrap px-3 py-4 text-sm font-semibold flex items-center truncate">
												{{ item.status.name }}
											</div>
										</td>

										<td style="max-width: 200px; width: 200px">
											<div
												class="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 flex items-center truncate body-md"
											>
												{{ item.person_in_charge?.name }}
											</div>
										</td>

										<td style="max-width: 120px; width: 120px">
											<div class="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 flex items-center">
												{{ item.count_finished_jobs }}/{{ item.count_jobs }}
											</div>
										</td>

										<td>
											<div class="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 flex items-center">
												{{ item.vehicle?.cont_number }}
											</div>
										</td>
										<td>
											<div class="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 flex items-center">
												{{ item.vehicle?.plate_number }}
											</div>
										</td>
										<td>
											<div class="whitespace-nowrap px-3 py-4 body-md text-neutral-900 truncate">
												<p>{{ formatDateHM(item.estimate_arrived_border_gate_at) }}</p>
												<p class="text-neutral-400">{{ formatDateDMY(item.estimate_arrived_border_gate_at) }}</p>
											</div>
										</td>

										<td>
											<div class="relative px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
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
															class="absolute z-10 right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-[12px]"
															:class="idx > 4 ? 'bottom-0' : ''"
														>
															<!-- <div class="px-1 py-1">
																<MenuItem v-slot="{ active }">
																	<button
																		:class="[
																			active ? 'bg-primary-300 text-dark' : 'text-neutral-900',
																			'group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm',
																		]"
																		@click="toggleStatusData(item)"
																	>
																		Xóa
																	</button>
																</MenuItem>
															</div> -->

															<div class="px-1 py-1">
																<MenuItem v-slot="{ active }">
																	<button
																		:class="[
																			active ? 'bg-primary-300 text-dark' : 'text-neutral-900',
																			'group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm',
																		]"
																		@click="onEdit(item)"
																	>
																		Chỉnh sửa
																	</button>
																</MenuItem>
															</div>
														</MenuItems>
													</transition>
												</Menu>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import FirstLoader from './FirstLoader.vue';
	import NotFoundDataTable from './NotFoundDataTable.vue';
	import NoDataTable from './NoDataTable.vue';
	import SearchLoaderTable from './SearchLoaderTable.vue';
	import { PropType } from 'vue';
	import { Order } from '../../models/Order';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	import { getCustomerStatusTextColor, formatDateDMY, formatDateHM } from '../../helpers/formatter';
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
		},
		props: {
			listData: {
				type: Array as PropType<Order[]>,
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
			return {};
		},
		computed: {
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
			formatDateHM,
			toggleStatusData(item: Order) {
				this.$emit('toggle-data', item);
			},
			getCustomerStatusTextColor,
			onEdit(item: Order) {
				this.$router.push(`orders/${item.id}/edit`);
			},
		},
	};
</script>
<style lang="scss" scoped>
	.table-wrapper {
		max-height: calc(100vh - 264px - 16px);
		height: calc(100vh - 264px - 16px);
		min-height: calc(450px);
		overflow-y: scroll;
		/* max-width: calc(100vw - 216px); */
		table {
			/* min-width: 1780px; */
			tr {
				td {
					padding: 0;
					height: 60px;
					& > div {
						height: 100%;
						background-color: #fff !important;
					}

					&:first-child {
						padding-left: 4px;
						& > div {
							border-radius: 8px 0 0 8px;
						}
					}
					&:last-child {
						padding-right: 4px;
						& > div {
							border-radius: 0 8px 8px 0;
						}
					}
				}
				&:hover {
					td > div {
						background-color: #fef3c7 !important;
					}
				}
			}
		}
	}
</style>
