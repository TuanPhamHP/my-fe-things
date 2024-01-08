<template>
	<h1 class="title-sm font-semibold text-accent-900">Thông tin đơn hàng</h1>
	<div class="pt-6 pb-4 px-0 grid grid-cols-3 gap-x-4 gap-y-4">
		<div class="col-span-2">
			<p class="text-md text-neutral-500 mb-2">Người phụ trách</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.person_in_charge?.name || '---' }}
			</p>
		</div>
		<div class="col-span-1">
			<p class="text-md text-neutral-500 mb-2">Loại hàng hóa</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.merchandise_type.name || '---' }}
			</p>
		</div>
		<div class="col-span-2">
			<p class="text-md text-neutral-500 mb-2">Địa chỉ lấy hàng</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.pickup_address || '---' }}
			</p>
		</div>
		<div class="col-span-1">
			<p class="text-md text-neutral-500 mb-2">Thời gian lấy hàng</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.pickup_time ? formatDateHMDMY(detailData.pickup_time) : '---' }}
			</p>
		</div>
		<div class="col-span-2">
			<p class="text-md text-neutral-500 mb-2">Địa chỉ giao hàng</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.deliver_address || '---' }}
			</p>
		</div>
		<div class="col-span-1">
			<p class="text-md text-neutral-500 mb-2">Thời gian giao hàng</p>
			<p class="text-md font-semibold text-gray-900 py-2">
				{{ detailData.deliver_time ? formatDateHMDMY(detailData.deliver_time) : '---' }}
			</p>
		</div>
	</div>
</template>
<script lang="ts">
	import { formatDateHMDMY } from '../../../helpers/formatter';
	import { Order } from '../../../models/Order';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	export default {
		props: {
			detailData: {
				type: Object as PropType<Order>,
				default: {},
			},
		},
		methods: {
			formatDateHMDMY,
		},
	};
</script>
