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
				Tương tự với
				<a
					href="/sql/practice/e_5"
					target="_blank"
					rel="noreferrer"
					class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
				>
					Bài 05
				</a>
				thêm cột <b>salary dạng Decimal(10,2) NOT NULL</b> là lương nhân viên.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Yêu cầu:</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo một Procedure - <FilePath>View_Employee_Department</FilePath> kiểm tra số lượng nhân viên trong phòng
				ban. Gọi số lượng nhân viên là x: <br />
				($) x > 10: "Phòng ban đông nhân viên" <br />
				($) 0 {{ '<' }} x {{ '<' }} 10: "Ít nhân viên" <br />
				($) x = 0: "Không có nhân viên"
			</li>

			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo một câu SELECT: Hiển thị danh sách nhân viên kèm theo loại nhân viên dựa trên ngày vào làm. Gọi số năm
				làm việc là x: <br />
				($) x {{ '<' }} 1: "Mới tuyển" <br />
				($) 1 {{ '<=' }} x {{ '<=' }} 5: "Nhân viên chính thức" <br />
				($) x > 5: "Kinh nghiệm lâu năm"
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Tạo một Procedure - <FilePath>Update_Employee_Salaries</FilePath> nhận vào id của nhân viên và tăng lương
				nhân viên trong phòng ban dựa trên ngày vào làm. Gọi số năm làm việc là x: <br />
				($) x {{ '<' }} 1: "Không tăng" <br />
				($) 1 {{ '<=' }} x {{ '<' }} 3: "Tăng 10%." <br />
				($) x > 3: "Tăng 5%"
			</li>
		</ul>

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
			return usePagination('practice', 'sql-7', 'sql')
		},
		data() {
			return {
				seed_data: `-- Xóa dữ liệu cũ để tránh trùng lặp
DELETE FROM employee_project;
DELETE FROM employees;
DELETE FROM projects;
DELETE FROM departments;

-- Reset AUTO_INCREMENT (nếu cần)
ALTER TABLE employee_project AUTO_INCREMENT = 1;
ALTER TABLE employees AUTO_INCREMENT = 1;
ALTER TABLE projects AUTO_INCREMENT = 1;
ALTER TABLE departments AUTO_INCREMENT = 1;

-- Thêm dữ liệu vào bảng departments (6 phòng ban)
INSERT INTO departments (name) VALUES
('Phòng Nhân sự'),
('Phòng Kế toán'),
('Phòng Kinh doanh'),
('Phòng IT'),
('Phòng Marketing'),
('Phòng Sản xuất');

-- Thêm dữ liệu vào bảng employees (20 nhân viên)
INSERT INTO employees (name, email, phone, hire_date, department_id, salary) VALUES
('Nguyễn Văn Công', 'cong.nv@company.com', '0123456789', '2020-06-15', 1, 7000.00),
('Trần Thị Hạnh', 'hanh.tt@company.com', '0987654321', '2019-03-10', 2, 9000.00),
('Lê Quang Minh', 'minh.lq@company.com', '0912345678', '2021-07-20', 3, 7000.00),
('Phạm Hữu Đức', 'duc.ph@company.com', '0934567890', '2018-09-05', 4, 9000.00),
('Hoàng Thanh Tùng', 'tung.ht@company.com', '0967890123', '2017-12-22', 5, 9000.00),
('Nguyễn Thị Mai', 'mai.nt@company.com', '0971234567', '2019-11-14', 6, 9000.00),
('Đặng Văn Long', 'long.dv@company.com', '0923456789', '2022-05-30', 1, 5000.00),
('Trương Minh Hòa', 'hoa.tm@company.com', '0945678901', '2020-08-25', 2, 7000.00),
('Lý Văn Bảo', 'bao.lv@company.com', '0956789012', '2021-10-12', 3, 7000.00),
('Vũ Thị Lan', 'lan.vt@company.com', '0909876543', '2019-06-17', 4, 9000.00),
('Bùi Văn Dũng', 'dung.bv@company.com', '0981122334', '2018-02-27', 5, 9000.00),
('Đoàn Thị Thanh', 'thanh.dt@company.com', '0912233445', '2020-01-18', 6, 7000.00),
('Trịnh Quốc Việt', 'viet.tq@company.com', '0933445566', '2023-04-08', 1, 5000.00),
('Tống Văn Cường', 'cuong.tv@company.com', '0944556677', '2017-09-19', 2, 9000.00),
('Ngô Thị Hương', 'huong.nt@company.com', '0955667788', '2021-12-05', 3, 7000.00),
('Hà Văn Tài', 'tai.hv@company.com', '0966778899', '2022-07-23', 4, 5000.00),
('Lương Hoàng Sơn', 'son.lh@company.com', '0977889900', '2018-11-15', 5, 9000.00),
('Dương Minh Đức', 'duc.dm@company.com', '0988990011', '2019-08-31', 6, 9000.00),
('Trần Văn Phú', 'phu.tv@company.com', '0999001122', '2020-10-10', 1, 7000.00),
('Lê Thị Nhung', 'nhung.lt@company.com', '0911223344', '2023-02-28', 2, 5000.00);


-- Thêm dữ liệu vào bảng projects (10 dự án)
INSERT INTO projects (name, start_date, end_date) VALUES
('Hệ thống CRM', '2022-01-01', '2022-12-31'),
('Ứng dụng quản lý kho', '2021-05-15', '2022-05-15'),
('Website thương mại điện tử', '2023-03-10', '2024-03-10'),
('Hệ thống ERP', '2020-09-01', '2023-09-01'),
('Ứng dụng Mobile Banking', '2022-07-20', NULL),
('Nền tảng học trực tuyến', '2021-11-11', NULL),
('Hệ thống đặt vé máy bay', '2023-06-01', NULL),
('Website tin tức', '2022-08-18', '2023-08-18'),
('Ứng dụng chăm sóc khách hàng', '2020-12-05', '2022-12-05'),
('Hệ thống quản lý sản xuất', '2021-04-20', '2023-04-20');

-- Thêm dữ liệu vào bảng employee_project (Phân công nhân viên vào dự án)
INSERT INTO employee_project (employee_id, project_id, role) VALUES
(1, 1, 'Quản lý dự án'),
(2, 1, 'Lập trình viên'),
(3, 2, 'Kiến trúc sư phần mềm'),
(4, 3, 'Tester'),
(5, 4, 'Quản lý dự án'),
(6, 5, 'Lập trình viên Backend'),
(7, 6, 'Lập trình viên Frontend'),
(8, 7, 'Data Analyst'),
(9, 8, 'Lập trình viên'),
(10, 9, 'Quản lý dự án'),
(11, 10, 'Lập trình viên'),
(12, 1, 'Tester'),
(13, 2, 'Lập trình viên Backend'),
(14, 3, 'Business Analyst'),
(15, 4, 'Tester'),
(16, 5, 'Lập trình viên Frontend'),
(17, 6, 'Product Owner'),
(18, 7, 'Business Analyst'),
(19, 8, 'Lập trình viên'),
(20, 9, 'Quản lý dự án');
`,
				counter: 0,
			};
		},
		computed: {},
		methods: {},
	};
</script>
