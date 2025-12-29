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
			Giả sử xây dựng một Hệ Thống Bán Hàng, bạn đang xây dựng module thanh toán cho đơn hàng. Business logic không quan
			tâm chi tiết thanh toán, chỉ cần biết "Thanh toán được hay không".
		</p>

		<PageHeading text="Yêu cầu" addOnClass="text-left mt-5" markedAs="env" />

		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Tạo abstract class <FilePath>PaymentGateway</FilePath> để chuẩn hóa hành vi thanh toán:
		</p>
		<SkyList
			:docs="[
				{
					id: 0,
					content: 'có method <b>pay(amount: int)</b>',
					subList: [
						'Nhận vào amount (số tiền cần thanh toán) là int',
						'Trả về True nếu thanh toán thành công, False nếu thất bại',
					],
				},
				{
					id: 1,
					content: 'Cài đặt 2 cổng thanh toán cụ thể',
					subList: [
						'<b>CashGateway</b>: Thanh toán tiền mặt, luôn trả về True. In ra `Thanh toán số tiền {amount} thành công bằng tiền mặt`',
						'<b>CardGateway</b>: Thanh toán thẻ, giả lập thanh toán thất bại: chỉ cho phép thẻ bắt đầu bằng  04154. <br><b>__card_number</b> (private): Thuộc tính lưu số thẻ, khởi tạo qua constructor. <br> In ra `Thanh toán số tiền {amount} thành công bằng thẻ ***{last_four_digit} ` hoặc `Thanh toán số tiền {amount} thất bại bằng thẻ ***{last_four_digit}`',
					],
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Tạo abstract class <FilePath>OrderService</FilePath> để xử lý nghiệp vụ đơn hàng:
		</p>
		<SkyList
			:docs="[
				{
					id: 0,
					content: 'nhận một cổng thanh toán qua constructor (không quan tâm chi tiết cổng thanh toán)',
				},
				{
					id: 1,
					content: 'có method <b>checkout(amount: int)</b>',
					subList: [
						'Sử dụng tính đa hình để gọi method pay() của cổng thanh toán được truyền vào',
						'Trả về kết quả thanh toán, Ví dụ: Paid 200000 by cash Order completed',
					],
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8">Sơ đồ kiến trúc:</p>
		<img src="@/assets/images/py-oop-e_5.svg" alt="" class="max-w-[500px]" />
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
				b1: `+--------------------+
|   OrderService     |
|--------------------|
| - gateway          |
| - max_retry        |
|--------------------|
| + checkout(amount) |
+---------+----------+
          |
          | uses (Dependency Injection)
          v
+---------------------------+
|     PaymentGateway        |   <<abstract>>
|---------------------------|
| + pay(amount) : bool      |
+-------------+-------------+
              |
   --------------------------------
   |                              |
   v                              v
+-------------------+    +----------------------+
|   CashGateway     |    |    CardGateway       |
|-------------------|    |----------------------|
| + pay(amount)     |    | - __card_number      |
|					|    | + pay(amount)        |
+-------------------+    +----------------------+
`,
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
					{
						id: 4,
						content: 'Viết hàm danh_muc(): Trả ra danh sách danh mục sản phẩm (không trùng).',
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
