<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2 pl-2">
			<div class="grow page-data">
				<!-- INTRO -->
				<PageHeading
					text="Aggregate Function trong MySQL"
					addOnClass="text-left mt-5"
					markedAs="about-aggregate"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Aggregate function</b> (hàm tổng hợp) là nhóm hàm tính toán trên <b>tập nhiều dòng</b> và trả về một giá
					trị duy nhất. Chúng thường được dùng kết hợp với <FilePath>GROUP BY</FilePath> để tính toán theo từng nhóm.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">MySQL cung cấp 5 aggregate function cốt lõi:</p>
				<ul class="pl-10 pt-0">
					<li
						v-for="fn in aggregateFunctions"
						:key="fn.name"
						class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc flex items-baseline gap-2 flex-wrap"
					>
						<FilePath>{{ fn.name }}</FilePath>
						<span>{{ fn.desc }}</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ngoài ra MySQL còn có <FilePath>GROUP_CONCAT()</FilePath> để nối chuỗi theo nhóm — sẽ được đề cập ở cuối bài.
				</p>

				<!-- COUNT -->
				<PageHeading text="COUNT" addOnClass="text-left h-0 opacity-0" markedAs="agg-count" :lvl="2" />
				<PageHeading text="COUNT() — Đếm số dòng" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>COUNT</FilePath> có 3 biến thể với hành vi khác nhau, dễ nhầm lẫn:
				</p>
				<ul class="pl-5">
					<li
						v-for="item in countVariants"
						:key="item.syntax"
						class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content flex items-baseline gap-2 flex-wrap"
					>
						<FilePath>{{ item.syntax }}</FilePath>
						<span class="text-slate-400 dark:text-slate-500 text-sm">—</span>
						<span>{{ item.desc }}</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- SUM -->
				<PageHeading text="SUM" addOnClass="text-left h-0 opacity-0" markedAs="agg-sum" :lvl="2" />
				<PageHeading text="SUM() — Tính tổng" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>SUM()</FilePath> tính tổng tất cả giá trị của một cột số. Các dòng có giá trị
					<FilePath>NULL</FilePath> bị bỏ qua hoàn toàn. Nếu tất cả dòng đều là <FilePath>NULL</FilePath>, kết quả trả
					về là <FilePath>NULL</FilePath> (không phải 0).
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Tổng lương toàn công ty và theo từng điều kiện lọc.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- AVG -->
				<PageHeading text="AVG" addOnClass="text-left h-0 opacity-0" markedAs="agg-avg" :lvl="2" />
				<PageHeading text="AVG() — Tính trung bình" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>AVG()</FilePath> tính trung bình cộng. Quan trọng: <FilePath>NULL</FilePath> bị loại khỏi
					<b>cả tử số lẫn mẫu số</b> — tức là nó không tính vào số dòng mẫu. Nếu muốn tính trung bình kể cả
					<FilePath>NULL</FilePath> như giá trị 0, dùng <FilePath>COALESCE()</FilePath> để thay thế trước.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Kết quả <FilePath>AVG()</FilePath> thường có nhiều chữ số thập phân — dùng <FilePath>ROUND()</FilePath> để làm
					tròn.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- MIN / MAX -->
				<PageHeading text="MIN / MAX" addOnClass="text-left h-0 opacity-0" markedAs="agg-min-max" :lvl="2" />
				<PageHeading text="MIN() / MAX() — Giá trị nhỏ nhất / lớn nhất" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>MIN()</FilePath> và <FilePath>MAX()</FilePath> hoạt động trên cả số, chuỗi (theo thứ tự
					alphabetical) và ngày tháng. Cả hai đều bỏ qua <FilePath>NULL</FilePath>.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lương thấp nhất, cao nhất và khoảng chênh lệch.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- COMBINE -->
				<PageHeading text="Kết hợp nhiều hàm" addOnClass="text-left h-0 opacity-0" markedAs="agg-combine" :lvl="2" />
				<PageHeading text="Kết hợp nhiều aggregate function" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Có thể dùng nhiều aggregate function trong cùng một câu <FilePath>SELECT</FilePath> để lấy toàn bộ thống kê
					trong một lần truy vấn.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- GROUP BY -->
				<PageHeading
					text="Kết hợp GROUP BY"
					addOnClass="text-left h-0 opacity-0"
					markedAs="agg-with-group-by"
					:lvl="2"
				/>
				<PageHeading text="Kết hợp GROUP BY — Tính theo nhóm" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi dùng aggregate function với <FilePath>GROUP BY</FilePath>, MySQL tính toán riêng cho từng nhóm. Lưu ý: mọi
					cột trong <FilePath>SELECT</FilePath> mà <b>không</b> nằm trong aggregate function thì
					<b>bắt buộc phải có mặt</b> trong <FilePath>GROUP BY</FilePath>.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Thống kê nhân viên và lương theo từng phòng ban, join để hiển thị tên phòng ban.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af6" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						Dùng <FilePath>LEFT JOIN</FilePath> để giữ lại cả phòng ban chưa có nhân viên nào (<FilePath
							>COUNT</FilePath
						>
						sẽ trả về <b>0</b>).
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<FilePath>GROUP BY d.id, d.department_name</FilePath> — MySQL yêu cầu tất cả cột non-aggregate trong SELECT
						phải nằm trong GROUP BY. Đưa cả <FilePath>d.id</FilePath> và <FilePath>d.department_name</FilePath> vào để
						tránh lỗi trong chế độ <FilePath>ONLY_FULL_GROUP_BY</FilePath> (mặc định bật từ MySQL 5.7.5).
					</li>
				</ul>

				<!-- HAVING -->
				<PageHeading text="Kết hợp HAVING" addOnClass="text-left h-0 opacity-0" markedAs="agg-with-having" :lvl="2" />
				<PageHeading text="Kết hợp HAVING — Lọc sau khi nhóm" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>HAVING</FilePath> hoạt động giống <FilePath>WHERE</FilePath> nhưng chạy <b>sau</b>
					<FilePath>GROUP BY</FilePath>, do đó có thể lọc theo kết quả của aggregate function.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Chỉ lấy những phòng ban có từ 3 nhân viên trở lên và lương trung bình trên 20 triệu.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Lưu ý:</b> Không được dùng alias đặt trong <FilePath>SELECT</FilePath> làm điều kiện trong
					<FilePath>HAVING</FilePath> — vì <FilePath>SELECT</FilePath> thực thi <i>sau</i> <FilePath>HAVING</FilePath>.
					Phải lặp lại biểu thức aggregate trong <FilePath>HAVING</FilePath>.
				</p>

				<!-- NULL BEHAVIOR -->
				<PageHeading text="Xử lý NULL" addOnClass="text-left h-0 opacity-0" markedAs="agg-null" :lvl="2" />
				<PageHeading text="Hành vi với NULL" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Hầu hết aggregate function trong MySQL <b>bỏ qua NULL</b> — trừ <FilePath>COUNT(*)</FilePath>. Đây là nguồn
					gốc của nhiều bug khó phát hiện.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af8" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li
						v-for="item in nullBehaviors"
						:key="item.fn"
						class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content flex items-baseline gap-2 flex-wrap"
					>
						<FilePath>{{ item.fn }}</FilePath>
						<span class="text-slate-400 dark:text-slate-500 text-sm">—</span>
						<span>{{ item.behavior }}</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Để tính aggregate kể cả <FilePath>NULL</FilePath> như giá trị 0, dùng
					<FilePath>COALESCE(column, 0)</FilePath> để thay thế NULL trước khi truyền vào hàm.
				</p>

				<!-- GROUP_CONCAT -->
				<PageHeading text="GROUP_CONCAT" addOnClass="text-left h-0 opacity-0" markedAs="agg-group-concat" :lvl="2" />
				<PageHeading text="GROUP_CONCAT() — Nối chuỗi theo nhóm" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>GROUP_CONCAT()</FilePath> là aggregate function đặc thù của MySQL, dùng để nối các giá trị trong một
					nhóm thành một chuỗi duy nhất. Hữu ích khi muốn hiển thị danh sách item theo nhóm trên một dòng.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Liệt kê tên nhân viên theo từng phòng ban.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="af9" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<FilePath>ORDER BY name</FilePath> bên trong <FilePath>GROUP_CONCAT</FilePath> sắp xếp các phần tử trong
						chuỗi kết quả, không ảnh hưởng đến thứ tự dòng của outer query.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<FilePath>SEPARATOR ', '</FilePath> định nghĩa ký tự ngăn cách. Mặc định là dấu phẩy <FilePath>,</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						Độ dài tối đa của chuỗi kết quả được giới hạn bởi biến hệ thống
						<FilePath>group_concat_max_len</FilePath> (mặc định 1024 bytes). Có thể tăng lên trong session:
						<FilePath>SET SESSION group_concat_max_len = 10000;</FilePath>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white leading-8 mt-4">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_6"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p>
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { usePagination } from '@/composables/usePagination';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			VCodeBlock,
			DocNextPage,
		},
		data() {
			return {
				pagePagination: {
					next: { title: '', link: '' },
					prev: { title: '', link: '' },
				},
				aggregateFunctions: [
					{ name: 'COUNT()', desc: 'Đếm số dòng' },
					{ name: 'SUM()', desc: 'Tính tổng' },
					{ name: 'AVG()', desc: 'Tính trung bình cộng' },
					{ name: 'MIN()', desc: 'Lấy giá trị nhỏ nhất' },
					{ name: 'MAX()', desc: 'Lấy giá trị lớn nhất' },
				],
				countVariants: [
					{ syntax: 'COUNT(*)', desc: 'Đếm tất cả dòng kể cả dòng có giá trị NULL' },
					{ syntax: 'COUNT(column)', desc: 'Chỉ đếm dòng có giá trị khác NULL ở cột đó' },
					{ syntax: 'COUNT(DISTINCT column)', desc: 'Đếm số giá trị duy nhất (khác NULL)' },
				],
				nullBehaviors: [
					{ fn: 'COUNT(*)', behavior: 'Đếm cả dòng NULL — không bỏ qua' },
					{ fn: 'COUNT(col)', behavior: 'Bỏ qua dòng NULL' },
					{ fn: 'SUM(col)', behavior: 'Bỏ qua NULL, trả về NULL nếu tất cả dòng đều NULL' },
					{ fn: 'AVG(col)', behavior: 'Bỏ qua NULL ở cả tử và mẫu số' },
					{ fn: 'MIN(col) / MAX(col)', behavior: 'Bỏ qua NULL' },
				],
				af1: `-- COUNT(*): đếm tất cả dòng kể cả NULL
SELECT COUNT(*) AS total_rows FROM Employees;

-- COUNT(column): chỉ đếm dòng có giá trị khác NULL
SELECT COUNT(salary) AS rows_with_salary FROM Employees;

-- COUNT(DISTINCT column): đếm giá trị không trùng lặp
SELECT COUNT(DISTINCT department_id) AS total_departments FROM Employees;`,
				af2: `-- Tổng lương toàn công ty
SELECT SUM(salary) AS total_salary FROM Employees;

-- Tổng lương của một phòng ban cụ thể
SELECT SUM(salary) AS total_salary
FROM Employees
WHERE department_id = 1;`,
				af3: `-- Lương trung bình (kết quả có thể nhiều chữ số thập phân)
SELECT AVG(salary) AS avg_salary FROM Employees;

-- Làm tròn 2 chữ số thập phân
SELECT ROUND(AVG(salary), 2) AS avg_salary FROM Employees;

-- Tính trung bình kể cả dòng NULL (xem như 0)
SELECT AVG(COALESCE(bonus, 0)) AS avg_bonus FROM Employees;`,
				af4: `SELECT
    MIN(salary)             AS min_salary,
    MAX(salary)             AS max_salary,
    MAX(salary) - MIN(salary) AS salary_range
FROM Employees;`,
				af5: `SELECT
    COUNT(*)               AS total_employees,
    SUM(salary)            AS total_salary,
    ROUND(AVG(salary), 0)  AS avg_salary,
    MIN(salary)            AS min_salary,
    MAX(salary)            AS max_salary
FROM Employees;`,
				af6: `-- Thống kê theo phòng ban, hiển thị tên phòng ban
SELECT
    d.department_name,
    COUNT(e.id)            AS headcount,
    ROUND(AVG(e.salary), 0) AS avg_salary,
    SUM(e.salary)          AS total_salary
FROM Departments d
LEFT JOIN Employees e ON e.department_id = d.id
GROUP BY d.id, d.department_name
ORDER BY headcount DESC;`,
				af7: `SELECT
    department_id,
    COUNT(*)               AS headcount,
    ROUND(AVG(salary), 0)  AS avg_salary
FROM Employees
GROUP BY department_id
HAVING COUNT(*) >= 3
   AND AVG(salary) > 20000000;`,
				af8: `-- Giả sử bảng Employees có một số dòng với bonus = NULL
SELECT
    COUNT(*)      AS total_rows,       -- đếm cả dòng bonus = NULL
    COUNT(bonus)  AS rows_with_bonus,  -- chỉ đếm dòng bonus khác NULL
    SUM(bonus)    AS sum_bonus,        -- NULL bị bỏ qua
    AVG(bonus)    AS avg_bonus         -- NULL bị bỏ qua ở cả tử lẫn mẫu số
FROM Employees;`,
				af9: `SELECT
    d.department_name,
    GROUP_CONCAT(e.name ORDER BY e.name SEPARATOR ', ') AS employee_list
FROM Departments d
LEFT JOIN Employees e ON e.department_id = d.id
GROUP BY d.id, d.department_name;`,
			};
		},
		setup() {
			return usePagination('documentation', 'sql-7.2', 'sql')
		},
		methods: {},
	};
</script>
