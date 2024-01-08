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
											Mã phiếu giao
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 200px; width: 200px"
										>
											Mã đơn hàng
										</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Trạng thái</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Tài xế</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Loại xe</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Số điểm lấy</th>
										<th scope="col" class="px-3 py-5 text-center text-sm font-semibold text-gray-900">Số điểm giao</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 140px; width: 140px"
										>
											Ngày lấy hàng dự kiến
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 140px; width: 140px"
										>
											Ngày lấy hàng thực tế
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 140px; width: 140px"
										>
											Ngày giao hàng dự kiến
										</th>
										<th
											scope="col"
											class="px-3 py-5 text-center text-sm font-semibold text-gray-900"
											style="max-width: 140px; width: 140px"
										>
											Ngày giao hàng thực tế
										</th>
									</tr>
								</thead>

								<FirstLoader v-if="loadingFirstData" :rows="6" :cols="12" />
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
											class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-blue-500 sm:pl-6 hover:underline cursor-pointer"
											@click="$router.push(`/delivery-orders/${item.id}`)"
										>
											#{{ item.code }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900 truncate">#{{ item.order?.code }}</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm font-semibold"
											:class="[getForwarderStatusTextColor(item.status?.id)]"
											style="max-width: 140px; width: 140px"
										>
											{{ item.status?.name }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate"
											style="max-width: 300px; width: 300px"
										>
											{{ item.driver?.name }}
										</td>

										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate"
											style="max-width: 300px; width: 300px"
										>
											{{ item.vehicle?.manufacturer }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
											style="max-width: 140px; width: 140px"
										>
											{{ item.num_of_pickup_address }}
										</td>
										<td
											class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
											style="max-width: 140px; width: 140px"
										>
											{{ item.num_of_deliver_address }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{{ formatDateDMY(item.order?.estimate_pickup_time) }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{{ formatDateDMY(item.order?.picked_up_at) }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{{ formatDateDMY(item.order?.estimate_deliver_time) }}
										</td>
										<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{{ formatDateDMY(item.order?.delivered_at) }}
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
	import { DeliveryOrder } from 'models/DeliveryOrder';
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
				type: Array as PropType<DeliveryOrder[]>,
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
				this.$router.push(`/delivery-orders/${item.id}/edit`);
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
