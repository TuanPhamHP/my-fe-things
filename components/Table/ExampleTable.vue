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
											class="py-5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											style="max-width: 200px; width: 200px"
										>
											Mã đối tác vận chuyển
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-left text-sm font-semibold text-gray-900"
											style="max-width: 240px; width: 240px"
										>
											Tên đăng nhập
										</th>
										<th scope="col" class="px-3 py-5 text-left text-sm font-semibold text-gray-900">Trạng thái</th>
										<th scope="col" class="px-3 py-5 text-left text-sm font-semibold text-gray-900">
											Tên đối tác vận chuyển
										</th>
										<th scope="col" class="px-3 py-5 text-left text-sm font-semibold text-gray-900">Số điện thoại</th>
										<th scope="col" class="px-3 py-5 text-left text-sm font-semibold text-gray-900">MST/CCCD</th>
										<th
											scope="col"
											class="px-3 py-5 text-left text-sm font-semibold text-gray-900"
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
										class="table-hover-row divide-x"
										:class="idx % 2 ? 'bg-white' : 'bg-gray-100'"
									>
										<td
											class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 hover:underline cursor-pointer"
											@click="$router.push(`/forwarders/${item.id}`)"
										>
											{{ item.code }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate"
											style="max-width: 300px; width: 300px"
										>
											{{ item.root_account?.username }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm"
											:class="[getForwarderStatusTextColor(item.root_account?.status?.id)]"
											style="max-width: 140px; width: 140px"
										>
											{{ item.root_account?.status?.name }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate"
											style="max-width: 300px; width: 300px"
										>
											{{ item.representative_name }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
											style="max-width: 120px; width: 120px"
										>
											{{ item.phone }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
											style="max-width: 170px; width: 170px"
										>
											{{ item.id_no }}
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
																	@click="toggleStatusForwarder(item)"
																>
																	{{ item.root_account?.status?.id === 1 ? 'Ngừng hoạt động' : 'Kích hoạt lại' }}

																	<Icon
																		class="min-w-[32px] ml-1"
																		:class="item.root_account?.status?.id === 1 ? 'text-red-600' : 'text-primary'"
																		:name="
																			item.root_account?.status?.id === 1 ? 'ion:ban-outline' : 'ic:baseline-check'
																		"
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
	</div>
</template>

<script lang="ts">
	import FirstLoader from './FirstLoader.vue';
	import NotFoundDataTable from './NotFoundDataTable.vue';
	import NoDataTable from './NoDataTable.vue';
	import SearchLoaderTable from './SearchLoaderTable.vue';
	import { PropType } from 'vue';
	import { Forwarder } from '../../models/Forwarder';
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
		},
		props: {
			listData: {
				type: Array as PropType<Forwarder[]>,
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
			toggleStatusForwarder(item: Forwarder) {
				this.$emit('toggle-forwarder', item);
			},
			getForwarderStatusTextColor,
			onEdit(item: Forwarder) {
				this.$router.push(`forwarders/${item.id}/edit`);
			},
		},
	};
</script>
<style lang="scss" scoped>
	.table-wrapper {
		max-height: calc(100vh - 324px - 16px);
		height: calc(100vh - 324px - 16px);
		min-height: calc(450px);
		overflow-y: scroll;
	}
</style>
