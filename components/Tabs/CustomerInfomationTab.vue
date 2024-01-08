<template>
	<div>
		<h1 class="display-xs font-semibold">Thông tin chung</h1>
		<div class="py-8 flex gap-6 items-center">
			<div class="flex">
				<UserAvatarPreview :user="user" :size="100" background="bg-primary-300" />
			</div>
			<div>
				<p class="display-xs font-bold mb-3 flex items-center gap-2">
					{{ detailData.representative_name }}
					<Icon
						:name="'solar:pen-2-bold'"
						size="24px"
						title="Chỉnh sửa"
						class="text-blue-500 cursor-pointer min-w-[32px]"
						@click="$emit('on-edit')"
					/>
				</p>
				<p
					class="text-md status-badge pl-8 font-semibold"
					:class="[
						getCustomerStatusTextColor(detailData.status?.id),
						detailData?.status?.id === 1 ? 'is-active' : 'is-disabled',
					]"
				>
					{{ detailData.status?.name }}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Mã khách hàng</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.code || '---' }}</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Tỉnh / Thành phố</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.address?.province?.full_name || '---' }}</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">MST / CCCD</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.id_no || '---' }}</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Quận / Huyện</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.address?.district?.full_name || '---' }}</p>
			</div>

			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Số điện thoại</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.phone || '---' }}</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Phường / Xã</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.address?.ward?.full_name || '---' }}</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Email</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.email || '---' }}</p>
			</div>
			<div class="col-span-1">
				<p class="text-md text-gray-900 mb-2">Địa chỉ</p>
				<p class="text-md font-semibold text-gray-900 py-3">{{ detailData.address?.address_line || '---' }}</p>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import UserAvatarPreview from '../../components/Layouts/UserAvatarPreview.vue';
	import { Customer } from '../../models/Customer';
	import { PropType } from 'nuxt/dist/app/compat/capi';
	import { getCustomerStatusTextColor } from '../../helpers/formatter';
	export default {
		components: { UserAvatarPreview },
		props: {
			detailData: {
				type: Object as PropType<Customer>,
				default: {},
			},
		},
		computed: {
			user() {
				return {
					avatar: '',
					name: this.detailData.representative_name || 'USER',
				};
			},
		},
		methods: {
			getCustomerStatusTextColor,
		},
	};
</script>
<style lang="scss" scoped>
	.status-badge {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0px;
			width: 20px;
			height: 20px;
			border-radius: 100%;
			background-color: #fe9705;
			z-index: 2;
			transform: translateY(-50%);
		}
		&.is-active {
			&::before {
				background-color: #22c55e;
			}
		}
	}
</style>
