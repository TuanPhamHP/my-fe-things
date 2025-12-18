<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Giả sử xây dựng một Hệ Thống Quản Lý Kho Hàng (Inventory Management), cho phép quản lý các sản phẩm trong kho.
			<br />
			Mỗi sản phẩm có các thuộc tính sau:
		</p>
		<SkyList
			:docs="[
				{
					id: 1,
					content: 'Mã sản phẩm - Dùng làm key chính',
				},
				{
					id: 2,
					content: 'Tên sản phẩm',
				},
				{
					id: 2,
					content: 'Giá sản phẩm',
				},
				{
					id: 3,
					content: 'Số lượng sản phẩm',
				},
			]"
		/>

		<PageHeading text="Yêu cầu" addOnClass="text-left mt-5" markedAs="env" />
		<SkyList :docs="docs" />
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { FilePath } from '../../../.nuxt/components';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/nodejs/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/nodejs/practice',
					},
				},

				docs: [
					{
						id: 1,
						content:
							'Viết hàm them_san_pham(): Nhận input() từ người dùng (mã, tên, giá, số lượng) và cập nhật vào kho. Nếu mã đã tồn tại, chỉ cập nhật số lượng.',
					},
					{
						id: 2,
						content:
							'Viết hàm tinh_tong_gia_tri(): Duyệt qua toàn bộ kho hàng và tính tổng số tiền vốn đang nằm trong kho',
					},
					{
						id: 3,
						content:
							'Viết hàm tim_san_pham(): Cho người dùng nhập mã sản phẩm, in ra thông tin chi tiết. Nếu không thấy, thông báo lỗi.',
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
