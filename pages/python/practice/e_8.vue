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
			Xây dựng REST API quản lý đơn hàng (Order Management API).
		</p>

		<PageHeading text="Yêu cầu" addOnClass="text-left mt-5" markedAs="env" />

		<SkyList
			:docs="[
				{
					id: 0,
					content: 'Giả sử bạn đang xây dựng hệ thống quản lý đơn hàng nội bộ cho một doanh nghiệp nhỏ:',
					subList: [
						'Có khách hàng đặt đơn',
						'Mỗi đơn hàng gồm nhiều sản phẩm',
						'Theo dõi trạng thái đơn hàng (mới tạo, đang xử lý, hoàn thành)',
					],
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8 text-bold">Thiết kế cơ sở dữ liệu</p>

		<SkyList
			:docs="[
				{
					id: 1,
					content: '<b>users (khách hàng)</b>',
					subList: ['id (PK)', 'name', 'email(Unique)', 'created_at'],
				},
				{
					id: 2,
					content: '<b>products (sản phẩm)</b>',
					subList: ['id (PK)', 'name(Unique)', 'price', 'stock_qty', 'status (Enum - <b>active / deactive</b>)'],
				},
				{
					id: 3,
					content: '<b>orders (đơn hàng)</b>',
					subList: [
						'id (PK)',
						'user_id (FK -> users.id)',
						'status (Enum - <b>new / processing / completed / cancelled</b>)',
						'note (lý do hủy đơn hàng - nullable)',
						'created_at',
					],
				},
				{
					id: 4,
					content: '<b>order_items (các sản phẩm trong đơn hàng)</b>',
					subList: [
						'id (PK)',
						'order_id (FK -> orders.id)',
						'product_id (FK -> products.id)',
						'quantity',
						'snapshot_price',
					],
				},
				{
					id: 5,
					content: '<b>Relationship:</b>',
					subList: ['User 1–N Order', 'Order 1–N OrderItem', 'Product 1–N OrderItem'],
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8 text-bold">Tạo Restful API:</p>
		<SkyList
			:docs="[
				{
					id: 1,
					content: '<b>users</b>',
					subList: [
						'<b>GET | /</b>: lấy danh sách khách hàng. Có thể truyền <b>search</b> để lọc email/name',
						'<b>GET | /:id </b>: lấy thông tin một khách hàng ứng với id',
						'<b>POST | /seed </b>: Seed 10 users.',
					],
				},
				{
					id: 2,
					content: '<b>products</b>',
					subList: [
						'<b>GET | /</b>: lấy danh sách sản phẩm. Có thể truyền <b>search</b> để lọc name. Chỉ trả ra id, name.',
						'<b>GET | /:id </b>: lấy chi tiết sản phẩm ứng với id. Trả ra đầy đủ các trường.',
						'<b>POST | / </b>: Truyền body để tạo mới sản phẩm. Validate: price > 0, stock_qty > 0',
						'<b>POST | /:id/restock </b>: Truyền body để thêm số lượng mới sản phẩm. Validate: stock_qty > 0. KHÔNG UPDATE FIELD KHÁC',
						'<b>POST | /:id/update </b>: Truyền body để thay đổi tên, giá sản phẩm. Validate: name > 3 kí tự, price > 0. KHÔNG UPDATE FIELD KHÁC',
						'<b>POST | /:id/deactive </b>: Chuyển trạng thái sản phẩm thành deactive - Chỉ được chuyển các sản phẩm có quantity = 0 hoặc các sản phẩm chưa được bán.',
					],
				},
				{
					id: 3,
					content: '<b>orders</b>',
					subList: [
						'<b>GET | /</b>: lấy danh sách orders. Chỉ trả ra các orders của user_id truyền vào, không cần chi tiết items. Có thể truyền <b>status</b> để lọc trạng thái đơn hàng.',
						'<b>GET | /:id </b>: lấy chi tiết order. Trả ra đầy đủ các trường.',
						'<b>POST | / </b>: Truyền body để tạo mới đơn hàng. Validate: user_id tồn tại, các product_id trong items tồn tại và có đủ stock_qty, đơn hàng mới có status mặc định là <b>new</b>.',
						'<b>POST | /:id/update </b>: Truyền body để update status của đơn hàng. Validate: chỉ được update theo flow <b>new -> processing -> completed</b>',
						'<b>POST | /:id/cancel </b>: Update status của đơn hàng về trạng thái <b>cancelled</b>. Validate: Không huỷ đơn <b>complete</b></b> bắt buộc phải nhập lý do hủy đơn hàng <b>note</b>.',
					],
				},
			]"
		/>
		<p class="text-slate-900 dark:text-white mt-0 leading-8 text-bold">Post body mẫu khi tạo order:</p>
		<VCodeBlock :code="code" highlightjs lang="python" theme="atom-one-dark" />
		<p class="text-slate-900 dark:text-white mt-0 leading-8 text-bold">Nâng cao:</p>
		<SkyList
			:docs="[
				{
					id: 1,
					content: '<b>headers</b>',
					subList: [
						'Tạo một dependencies bắt buộc các API orders phải có header <b>x-user-id</b> để xác định user thực hiện hành động.',
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
				code: `{
  "user_id": 1,
  "items": [
    {
      "product_id": 2,
      "quantity": 100
    }
  ]
}`,
			};
		},
		computed: {},
		methods: {},
	};
</script>
