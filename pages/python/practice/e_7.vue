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
			Giả sử xây dựng một Hệ Thống Bán Hàng, bạn đang xây dựng module <b>Sản phẩm</b>.
		</p>

		<PageHeading text="Yêu cầu" addOnClass="text-left mt-5" markedAs="env" />

		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Tạo abstract class <FilePath>BaseAPIRequest</FilePath> để chuẩn hóa hành vi của Request:
		</p>
		<SkyList
			:docs="[
				{
					id: 0,
					content: 'có method <b>validate()</b>',
					subList: ['Tự động kiểm tra tính hợp lệ của dữ liệu theo các quy tắc nghiệp vụ, ngoài type validation'],
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8">
			Tạo abstract class <FilePath>BaseAPIResponse</FilePath> để chuẩn hoá hành vi của Response:
		</p>
		<SkyList
			:docs="[
				{
					id: 1,
					content: 'có method <b>to_json()</b>',
					subList: [
						'Chuyển đổi dữ liệu response thành định dạng JSON để trả về client',
						'Quy định mọi phản hồi từ API phải có cấu trúc đồng nhất (ví dụ: luôn có status_code, message, data).',
					],
				},
				{
					id: 2,
					content: 'Tạo ra các lớp con cụ thể kế thừa từ BaseAPIResponse:',
					subList: [
						'SuccessResponse: đại diện cho phản hồi thành công, chứa dữ liệu trả về.',
						'BadRequestResponse: đại diện cho phản hồi lỗi data gửi lên, chứa mã lỗi và thông điệp lỗi.',
						'NotFoundResponse: đại diện cho phản hồi khi tài nguyên không tìm thấy, chứa mã lỗi và thông điệp lỗi.',
						'UnauthorizedResponse: đại diện cho phản hồi lỗi xác thực, chứa mã lỗi và thông điệp lỗi.',
						'InternalServerErrorResponse: đại diện cho phản hồi lỗi server, chứa mã lỗi và thông điệp lỗi.',
					],
				},
			]"
		/>

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
