<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Bài tập: Ôn tập</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Thiết kế cơ sở dữ liệu MongoDB cho một công ty Logistics quốc gia gồm nhiều kho hàng (warehouses), nhân viên
			(employees), khách hàng (customers) và đơn vận chuyển (shipments). Mục tiêu là quản lý quy trình giao hàng, trạng
			thái vận đơn, chi phí, và thống kê hiệu suất chi nhánh.
		</p>

		<PageHeading text="Phần 1 - Database" addOnClass="text-left" markedAs="db-structure" />
		<ul>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo một database tên là <b>garage_system</b> gồm:
			</li>
		</ul>
		<ul v-for="section in docs" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Collection <FilePath>{{ section.id }}</FilePath
				>: {{ section.name }}.
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						{{ item }}
					</li>
					<div v-if="section.coding">
						<VCodeBlock :code="section.coding" highlightjs lang="js" theme="atom-one-dark" />
					</div>
				</ul>
			</li>
		</ul>
		<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
			<a href="/seed3.mongodb.js" download target="_blank" class="text-blue-500 dark:text-blue-300 underline">
				File seed!</a
			>
		</p>
		<PageHeading text="Phần 2 - Query" addOnClass="text-left" markedAs="db-query" />
		<ul v-for="section in tasks" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>{{ section.name }}</FilePath
				>:.
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						{{ item }}
					</li>
				</ul>
			</li>
		</ul>

		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
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
						link: '/mongo-db/practice/e_3',
					},
					prev: {
						title: 'Danh sách',
						link: '/mongo-db/practice',
					},
				},
				docs: [
					{
						id: 'warehouses',
						name: 'Kho hàng',
						items: [
							'Mục đích: Lưu thông tin các kho hàng trong hệ thống.',
							'Validator: name và location là bắt buộc, code phải unique.',
							'Ví dụ: Hà Nội Central, Đà Nẵng Hub, Sài Gòn Main.',
						],
					},
					{
						id: 'employees',
						name: 'Nhân viên',
						items: [
							'Mục đích: Lưu thông tin nhân viên tại mỗi kho.',
							"Validator: email unique; role chỉ trong ['driver','packer','manager','dispatcher']; salary >= 0.",
							'Quan hệ: Tham chiếu đến warehouse (warehouses._id).',
						],
					},
					{
						id: 'customers',
						name: 'Khách hàng',
						items: [
							'Mục đích: Lưu thông tin khách hàng có xe bảo dưỡng hoặc sửa chữa tại gara.',
							'Validator: phone unique, name không được trống, email.',
							'Quan hệ nhúng: chứa mảng addresses [{label, district, city, street}].',
						],
					},
					{
						id: 'shipments',
						name: 'Đơn hàng',
						items: [
							'Mục đích: Ghi nhận thông tin từng đơn hàng.',
							"Validator: total_cost >= 0; status chỉ trong ['pending','in_transit','delivered','cancelled'].",
							'Quan hệ: Tham chiếu đến người dùng sender_id (customers._id), receiver_id (customers._id), warehouse_id (warehouses._id), driver_id (employees._id).',
							'Quan hệ nhúng: mảng packages [{description, weight, value}].',
						],
						coding: `packages: [
	{ description: "Điện thoại iPhone 15", weight: 0.5, value: 25000000 },
	{ description: "Tai nghe Bluetooth", weight: 0.2, value: 2000000 }
]`,
					},
					{
						id: 'delivery_logs',
						name: 'Log hệ thống',
						items: [
							'Mục đích: Lưu nhật ký giao hàng từng ngày.',
							"Validator: status thuộc enums ['departed', 'arrived', 'in_transit', 'delivered', 'failed'], location, timestamp là bắt buộc.",
							'Quan hệ nhúng: shipment_id (shipments._id).',
						],
					},
				],
				tasks: [
					{
						id: 'basic',
						name: 'Truy vấn cơ bản:',
						items: [
							'Tìm tất cả shipments đang trong trạng thái "in_transit" và thuộc kho "Hà Nội Central", chỉ lấy tracking_number, status, sender.name.',
							'Liệt kê danh sách employees thuộc kho "Đà Nẵng Hub", bỏ _id, chỉ hiện name, role.',
							'Tìm shipments có total_cost > 10000000, sắp xếp giảm dần theo created_at.',
						],
					},
					{
						id: 'orders_logs',
						name: 'Thao tác dữ liệu:',
						items: [
							'Tăng salary 12% cho nhân viên có role: "driver".',
							'Tạo view warehouse_revenue_summary hiển thị mỗi kho và tổng doanh thu (sum(total_cost)) của tất cả shipments trong năm 2025.',
							'Tạo compound index trên shipments: { warehouse_id: 1, created_at: -1 }.',
						],
					},
					{
						id: 'aggregation',
						name: 'Aggregation',
						items: [
							'Đếm số lượng shipments theo status.',
							'Tính tổng doanh thu (sum(total_cost)) của từng kho hàng (warehouses.name).',
							'Liệt kê mỗi tài xế (employees.name) và tổng số đơn họ đã giao thành công (status="delivered"), sắp xếp giảm dần.',
							'Top 3 kho có tổng doanh thu cao nhất năm 2025, hiển thị name, location.',
							'Với mỗi shipment, xác định latest_log từ delivery_logs (log mới nhất theo timestamp).',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
