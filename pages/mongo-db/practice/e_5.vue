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
			Giả sử bạn đang thiết kế một hệ thống Quản lý Bãi xe và Dịch vụ bảo dưỡng phương tiện (Parking & Vehicle
			Maintenance System)
		</p>
		<ul class="pl-5">
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<span> Quản lý nhân viên, chi nhánh, khách hàng và xe. </span>
			</li>
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<span> Ghi nhận các lượt check-in/check-out xe, phiếu dịch vụ bảo dưỡng. </span>
			</li>
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<span> Tổng hợp doanh thu, số lượt xe, thống kê theo tháng, chi nhánh, nhân viên. </span>
			</li>
		</ul>
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
				</ul>
			</li>
		</ul>
		<p class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
			<a href="/seed2.mongodb.js" download target="_blank" class="text-blue-500 dark:text-blue-300 underline">
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
						id: 'branches',
						name: 'Chi nhánh',
						items: [
							'Mục đích: Lưu thông tin các chi nhánh gara trên toàn hệ thống.',
							'Validator: name và address là bắt buộc, code phải unique.',
							'Ví dụ: Hà Nội, Đà Nẵng, Hồ Chí Minh.',
						],
						coding: 'validator + unique index on code',
					},
					{
						id: 'employees',
						name: 'Nhân viên',
						items: [
							'Mục đích: Lưu thông tin nhân viên làm việc tại các chi nhánh.',
							"Validator: email unique, đúng định dạng; role chỉ trong ['mechanic','receptionist','manager']; salary >= 0.",
							'Quan hệ: Tham chiếu đến branch_id (branches._id).',
						],
						coding: 'validator + unique index on email + ref branch_id',
					},
					{
						id: 'customers',
						name: 'Khách hàng',
						items: [
							'Mục đích: Lưu thông tin khách hàng có xe bảo dưỡng hoặc sửa chữa tại gara.',
							'Validator: phone unique, name không được trống, email đúng định dạng (nếu có).',
							'Quan hệ nhúng: chứa mảng vehicles [{plate_number, brand, model, year}].',
						],
						coding: 'validator + unique index on phone + embedded vehicles',
					},
					{
						id: 'service_jobs',
						name: 'Đơn dịch vụ',
						items: [
							'Mục đích: Ghi nhận công việc bảo dưỡng hoặc sửa chữa từng xe.',
							"Validator: total_cost >= 0; status chỉ trong ['pending','in_progress','completed','cancelled'].",
							'Quan hệ: Tham chiếu đến customer_id (customers._id), branch_id (branches._id), employee_id (employees._id).',
							'Quan hệ nhúng: mảng service_items [{service_name, price, duration}].',
						],
						coding: 'validator + ref customer_id, branch_id, employee_id + embedded service_items',
					},
				],
				tasks: [
					{
						id: 'basic',
						name: 'Truy vấn cơ bản:',
						items: [
							'Tìm tất cả vehicles thuộc chi nhánh "Chi nhánh Hà Nội" đang trong trạng thái in_yard, chỉ lấy plate_number, owner.name.',
							'Tìm danh sách employees thuộc chi nhánh Hồ Chí Minh, loại bỏ _id, chỉ hiện name, role.',
							'Tìm service_jobs có cost > 100000, sắp xếp giảm dần theo created_at.',
						],
					},
					{
						id: 'orders_logs',
						name: 'Thao tác dữ liệu:',
						items: [
							'Tăng budget 15% cho chi nhánh có location: "Cầu Giấy".',
							'Tạo view branch_job_summary hiển thị mỗi chi nhánh và tổng chi phí (total_cost) của tất cả job trong năm 2025.',
							'Tạo index compound trên service_jobs: { branch_id: 1, created_at: -1 }.',
						],
					},
					{
						id: 'aggregation',
						name: 'Aggregation',
						items: [
							'Đếm số lượng xe (vehicles) theo trạng thái status.',
							'Tính tổng doanh thu (sum(total_cost)) của từng chi nhánh (branch) dựa trên collection service_jobs.',
							'Liệt kê mỗi nhân viên (employees.name) và tổng số job họ đã làm (count), sắp xếp giảm dần.',
							'Top 3 chi nhánh có tổng doanh thu cao nhất trong năm 2025, cần có tên, địa chỉ.',
							'Với mỗi vehicle, tính số lượng activities theo tháng và tìm latest_activity (hoạt động mới nhất).',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
