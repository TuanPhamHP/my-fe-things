<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">
			Bài tập 1: Hiểu và tạo database theo mô hình quan hệ
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Giả sử bạn đang thiết kế một hệ thống quản lý dự án trong công ty. Hãy thực hiện các bước sau:
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo một database tên là <b>ProjectManagement</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo các bảng <FilePath>employees, projects, employee_project, departments</FilePath> theo ERD ở dưới:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>employees</FilePath>: Chứa thông tin nhân viên với các cột
						<b>id, name, email, phone, hire_date, department_id.</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>departments</FilePath>: Chứa thông tin phòng ban với các cột <b>id, name.</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>projects</FilePath>: Chứa thông tin chức vụ với các cột <b>id, name, start_date, end_date.</b>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>employee_project</FilePath>: Chứa thông tin lương của nhân viên, bao gồm
						<b>id, employee_id, project_id, role.</b>
					</li>
				</ul>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Định nghĩa các ràng buộc - Dựa theo ERD, ngoài ra:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Quan hệ <b>nhiều - nhiều</b> giữa nhân viên và dự án.
					</li>
				</ul>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Yêu cầu:</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo và chèn dữ liệu mẫu vào các bảng
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Lấy danh sách tất cả nhân viên cùng tên phòng ban
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Lấy danh sách nhân viên và các dự án họ tham gia
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				4. Tìm nhân viên tham gia nhiều dự án nhất
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				5. Tìm phòng ban có nhiều nhân viên nhất
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				6. Lấy danh sách các dự án chưa có nhân viên tham gia
			</li>
		</ul>
		<div class="bg-neutral-100 px-5 py-1 rounded">
			<img src="@/assets/images/documentation/sql-btt-3-2.png" alt="" class="rounded-lg mt-3 block" />
		</div>

		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			<b>Seed Data:</b>
		</p>
		<FakeTerminalUI :text-coppy="seed_data">
			<p>seed_data.sql</p>
		</FakeTerminalUI>
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
	import { usePagination } from '@/composables/usePagination';
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
		setup() {
			return usePagination('practice', 'sql-4', 'sql')
		},
		data() {
			return {
				seed_data: `-- Xóa dữ liệu cũ để tránh trùng lặp
DELETE FROM employee_project;
DELETE FROM employees;
DELETE FROM projects;
DELETE FROM positions;

-- Reset AUTO_INCREMENT (nếu cần)
ALTER TABLE employee_project AUTO_INCREMENT = 1;
ALTER TABLE employees AUTO_INCREMENT = 1;
ALTER TABLE projects AUTO_INCREMENT = 1;
ALTER TABLE positions AUTO_INCREMENT = 1;

-- Chèn dữ liệu vào bảng positions
INSERT INTO positions (id, title) VALUES
(1, 'kỹ sư phần mềm'),
(2, 'quản lý dự án'),
(3, 'thiết kế UI/UX'),
(4, 'chuyên viên dữ liệu'),
(5, 'kiểm thử viên');

-- Chèn dữ liệu vào bảng employees
INSERT INTO employees (id, name, email, position_id) VALUES
(1, 'Nguyễn Văn An', 'an.nguyen@example.com', 1),
(2, 'Trần Thị Mai', 'mai.tran@example.com', 1),
(3, 'Phạm Văn Hùng', 'hung.pham@example.com', 2),
(4, 'Lê Minh Tùng', 'tung.le@example.com', 2),
(5, 'Hoàng Thị Lan', 'lan.hoang@example.com', 3),
(6, 'Bùi Quang Hải', 'hai.bui@example.com', 3),
(7, 'Đinh Thị Hương', 'huong.dinh@example.com', 4),
(8, 'Phan Thanh Sơn', 'son.phan@example.com', 4),
(9, 'Ngô Thị Thu', 'thu.ngo@example.com', 5),
(10, 'Vũ Đức Duy', 'duy.vu@example.com', 5),
(11, 'Đặng Hoàng Nam', 'nam.dang@example.com', 1),
(12, 'Cao Huy Hoàng', 'hoang.cao@example.com', 2),
(13, 'Dương Thị Nhung', 'nhung.duong@example.com', 3),
(14, 'Tạ Văn Khoa', 'khoa.ta@example.com', 4),
(15, 'Lý Thị Thanh', 'thanh.ly@example.com', 5);

-- Chèn dữ liệu vào bảng projects
INSERT INTO projects (id, name, budget) VALUES
(1, 'hệ thống bán hàng trực tuyến', 100000),
(2, 'ứng dụng quản lý công việc', 150000),
(3, 'phát triển AI chatbot', 200000),
(4, 'xây dựng hệ thống dữ liệu lớn', 180000),
(5, 'kiểm thử bảo mật hệ thống', 120000);

-- Chèn dữ liệu vào bảng employee_project
INSERT INTO employee_project (id, employee_id, project_id, role) VALUES
(1, 1, 1, 'lập trình viên backend'),
(2, 2, 1, 'lập trình viên frontend'),
(3, 3, 1, 'quản lý dự án'),
(4, 4, 2, 'quản lý dự án'),
(5, 5, 2, 'thiết kế UI/UX'),
(6, 6, 3, 'thiết kế UI/UX'),
(7, 7, 3, 'chuyên viên dữ liệu'),
(8, 8, 4, 'chuyên viên dữ liệu'),
(9, 9, 4, 'kiểm thử viên'),
(10, 10, 5, 'kiểm thử viên'),
(11, 11, 2, 'lập trình viên backend'),
(12, 12, 3, 'quản lý dự án'),
(13, 13, 5, 'thiết kế UI/UX'),
(14, 14, 4, 'chuyên viên dữ liệu'),
(15, 15, 5, 'kiểm thử viên');
`,
				counter: 0,
			};
		},
		computed: {},
		methods: {},
	};
</script>
