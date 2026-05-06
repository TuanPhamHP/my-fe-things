<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p class="text-slate-900 dark:text-white mt-5 font-bold text-xl">
			Bài tập: Thống kê dữ liệu với Aggregate Function
		</p>

		<p class="text-slate-900 dark:text-white mt-2 text-lg"><b>Mô tả:</b></p>
		<p class="text-slate-900 dark:text-white mt-2 pl-5 leading-8">
			Tiếp tục với database <b>SweetCompany</b> từ bài trước. Bài này sẽ thực hành toàn bộ aggregate function trong
			MySQL: <FilePath>COUNT</FilePath>, <FilePath>SUM</FilePath>, <FilePath>AVG</FilePath>, <FilePath>MIN</FilePath>,
			<FilePath>MAX</FilePath> và <FilePath>GROUP_CONCAT</FilePath>, kết hợp với <FilePath>GROUP BY</FilePath> và
			<FilePath>HAVING</FilePath>.
		</p>
		<p class="text-slate-900 dark:text-white mt-4 pl-5 leading-8">
			Chạy seed data bên dưới trước để có dữ liệu thực hành. Seed data sử dụng lại cấu trúc bảng của
			<FilePath>SweetCompany</FilePath> với một số dòng có <FilePath>bonus = NULL</FilePath> để phục vụ các câu hỏi về
			xử lý NULL.
		</p>

		<p class="text-slate-900 dark:text-white mt-5 text-lg"><b>Yêu cầu:</b></p>
		<ul class="pl-10">
			<li
				v-for="req in requirements"
				:key="req.id"
				class="text-slate-900 dark:text-white my-4 leading-8 text-lg text-content marker:text-sky-400 list-disc"
			>
				<b>{{ req.id }}.</b> {{ req.text }}
				<span v-if="req.hint" class="block pl-4 text-base text-slate-500 dark:text-slate-400 italic">
					💡 Gợi ý: {{ req.hint }}
				</span>
			</li>
		</ul>

		<p class="text-slate-900 dark:text-white mt-6 pl-5"><b>Seed Data:</b></p>
		<FakeTerminalUI :text-coppy="seedData">
			<p>seed_aggregate.sql</p>
		</FakeTerminalUI>

		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import { usePagination } from '@/composables/usePagination';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	export default {
		components: {
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
		},
		setup() {
			return usePagination('practice', 'sql-3pro', 'sql');
		},
		data() {
			return {
				requirements: [
					{
						id: 1,
						text: 'Đếm tổng số nhân viên trong bảng Users.',
						hint: 'Dùng COUNT(*)',
					},
					{
						id: 2,
						text: 'Đếm số nhân viên thực sự có bonus (không tính dòng bonus = NULL).',
						hint: 'COUNT(*) và COUNT(column) cho kết quả khác nhau khi có NULL',
					},
					{
						id: 3,
						text: 'Tính tổng total_salary của toàn công ty.',
						hint: 'Dùng SUM()',
					},
					{
						id: 4,
						text: 'Tính lương cơ bản (base_salary) trung bình, làm tròn đến hàng đơn vị.',
						hint: 'Kết hợp ROUND() và AVG()',
					},
					{
						id: 5,
						text: 'Tìm base_salary thấp nhất và cao nhất trong toàn công ty.',
						hint: 'Dùng MIN() và MAX() trong cùng một câu SELECT',
					},
					{
						id: 6,
						text: 'Thống kê theo từng phòng ban: tên phòng ban, số nhân viên, tổng total_salary, base_salary trung bình (làm tròn). Sắp xếp theo số nhân viên giảm dần.',
						hint: 'JOIN Departments + GROUP BY d.id, d.name — nhớ đưa tất cả cột non-aggregate vào GROUP BY',
					},
					{
						id: 7,
						text: 'Tìm phòng ban có tổng quỹ lương (tổng total_salary) cao nhất.',
						hint: 'GROUP BY rồi ORDER BY SUM(total_salary) DESC LIMIT 1',
					},
					{
						id: 8,
						text: 'Lấy danh sách các phòng ban có base_salary trung bình trên 18 triệu.',
						hint: 'Dùng HAVING AVG(base_salary) > ... — không dùng WHERE',
					},
					{
						id: 9,
						text: 'So sánh hai cách tính bonus trung bình: (a) bỏ qua NULL, (b) coi NULL bằng 0. Hiển thị cả hai kết quả trong cùng một câu SELECT.',
						hint: 'Cách (a): AVG(bonus) — Cách (b): AVG(COALESCE(bonus, 0))',
					},
					{
						id: 10,
						text: '(Nâng cao) Liệt kê tên các nhân viên theo từng phòng ban, các tên cách nhau bằng dấu " | ", sắp xếp tên theo thứ tự alphabet.',
						hint: 'Dùng GROUP_CONCAT(u.name ORDER BY u.name SEPARATOR " | ")',
					},
				],
				seedData: `USE SweetCompany;

-- Xóa dữ liệu cũ để tránh trùng lặp
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE Salaries;
TRUNCATE TABLE Users;
TRUNCATE TABLE Positions;
TRUNCATE TABLE Departments;
SET FOREIGN_KEY_CHECKS = 1;

-- Departments
INSERT INTO Departments (id, name) VALUES
(1, 'Kỹ thuật'),
(2, 'Kinh doanh'),
(3, 'Nhân sự'),
(4, 'Marketing');

-- Positions
INSERT INTO Positions (id, title) VALUES
(1, 'Kỹ sư phần mềm'),
(2, 'Quản lý dự án'),
(3, 'Chuyên viên kinh doanh'),
(4, 'Chuyên viên nhân sự'),
(5, 'Chuyên viên marketing');

-- Users
INSERT INTO Users (id, name, email, department_id, position_id) VALUES
(1,  'Nguyễn Văn An',    'an.nguyen@sweet.com',    1, 1),
(2,  'Trần Thị Mai',     'mai.tran@sweet.com',     1, 1),
(3,  'Phạm Văn Hùng',   'hung.pham@sweet.com',    1, 2),
(4,  'Lê Minh Tùng',    'tung.le@sweet.com',      2, 3),
(5,  'Hoàng Thị Lan',   'lan.hoang@sweet.com',    2, 3),
(6,  'Bùi Quang Hải',   'hai.bui@sweet.com',      2, 3),
(7,  'Đinh Thị Hương',  'huong.dinh@sweet.com',   3, 4),
(8,  'Phan Thanh Sơn',  'son.phan@sweet.com',     3, 4),
(9,  'Ngô Thị Thu',     'thu.ngo@sweet.com',      4, 5),
(10, 'Vũ Đức Duy',      'duy.vu@sweet.com',       4, 5);

-- Salaries (một số dòng có bonus = NULL để thực hành xử lý NULL)
INSERT INTO Salaries (id, user_id, base_salary, bonus, total_salary) VALUES
(1,  1,  20000000, 3000000, 23000000),
(2,  2,  18000000, 2000000, 20000000),
(3,  3,  30000000, 5000000, 35000000),
(4,  4,  22000000, NULL,    22000000),
(5,  5,  20000000, 4000000, 24000000),
(6,  6,  19000000, NULL,    19000000),
(7,  7,  15000000, 1000000, 16000000),
(8,  8,  14000000, NULL,    14000000),
(9,  9,  16000000, 2000000, 18000000),
(10, 10, 15000000, 1500000, 16500000);`,
			};
		},
		methods: {},
	};
</script>
