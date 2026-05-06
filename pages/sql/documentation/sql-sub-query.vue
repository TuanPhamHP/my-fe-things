<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2 pl-2">
			<div class="grow page-data">
				<!-- INTRO -->
				<PageHeading text="Sub-query trong SQL" addOnClass="text-left mt-5" markedAs="about-subquery" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Sub-query</b> (hay còn gọi là <b>nested query / inner query</b>) là một câu truy vấn SQL được lồng bên trong
					một câu truy vấn khác. Kết quả của sub-query được dùng làm điều kiện hoặc nguồn dữ liệu cho câu truy vấn bên
					ngoài (outer query).
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Sub-query có thể xuất hiện ở 3 vị trí:</p>
				<ul class="pl-10 pt-0">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Trong mệnh đề <FilePath>WHERE</FilePath> — lọc dữ liệu dựa trên kết quả của sub-query.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Trong mệnh đề <FilePath>FROM</FilePath> — dùng sub-query như một bảng tạm (derived table).
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Trong mệnh đề <FilePath>SELECT</FilePath> — trả về một giá trị đơn lẻ cho mỗi dòng (scalar subquery).
					</li>
				</ul>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- SUBQUERY IN WHERE -->
				<PageHeading text="Subquery trong WHERE" addOnClass="text-left h-0 opacity-0" markedAs="subquery-in-where" :lvl="2" />
				<PageHeading text="Subquery trong WHERE" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Đây là cách dùng phổ biến nhất. Kết quả của sub-query được dùng làm giá trị so sánh trong điều kiện
					<FilePath>WHERE</FilePath>. Sub-query trong WHERE có thể trả về một giá trị đơn (scalar) hoặc một tập giá trị
					(khi dùng với <FilePath>IN</FilePath>).
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy danh sách nhân viên có lương cao hơn mức lương trung bình toàn công ty.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Sub-query <FilePath>SELECT AVG(salary) FROM Employees</FilePath> chạy trước, trả về một con số
							(scalar).</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>Outer query dùng con số đó làm ngưỡng so sánh trong <FilePath>WHERE</FilePath>.</span>
					</li>
				</ul>

				<!-- SUBQUERY IN FROM -->
				<PageHeading text="Subquery trong FROM" addOnClass="text-left h-0 opacity-0" markedAs="subquery-in-from" :lvl="2" />
				<PageHeading text="Subquery trong FROM (Derived Table)" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi đặt sub-query vào vị trí <FilePath>FROM</FilePath>, kết quả của nó được xem như một bảng tạm thời —
					thường gọi là <b>derived table</b>. Bắt buộc phải đặt <b>alias</b> cho derived table này.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy các phòng ban có mức lương trung bình trên 50 triệu.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Sub-query bên trong tính <FilePath>AVG(salary)</FilePath> theo từng phòng ban, trả về bảng tạm
							<FilePath>dept_summary</FilePath>.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span>Outer query lọc tiếp trên bảng tạm đó với điều kiện <FilePath>avg_salary > 50000000</FilePath>.</span>
					</li>
				</ul>

				<!-- SCALAR SUBQUERY IN SELECT -->
				<PageHeading
					text="Subquery trong SELECT"
					addOnClass="text-left h-0 opacity-0"
					markedAs="subquery-in-select"
					:lvl="2"
				/>
				<PageHeading text="Subquery trong SELECT (Scalar Subquery)" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Scalar subquery đặt trong danh sách <FilePath>SELECT</FilePath> trả về đúng <b>một giá trị duy nhất</b> cho
					mỗi dòng của outer query. Nếu sub-query trả về nhiều hơn một dòng hoặc nhiều hơn một cột, SQL sẽ báo lỗi.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Hiển thị lương từng nhân viên kèm mức lương trung bình toàn công ty để so sánh.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Sub-query <FilePath>SELECT AVG(salary) FROM Employees</FilePath> chỉ chạy <b>một lần</b> và giá trị đó được
					gắn vào mỗi dòng kết quả dưới alias <FilePath>company_avg</FilePath>.
				</p>

				<!-- CORRELATED SUBQUERY -->
				<PageHeading
					text="Correlated Subquery"
					addOnClass="text-left h-0 opacity-0"
					markedAs="correlated-subquery"
					:lvl="2"
				/>
				<PageHeading text="Correlated Subquery" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Correlated subquery</b> là sub-query có <b>tham chiếu đến outer query</b> — tức là sub-query không chạy
					độc lập mà phụ thuộc vào từng dòng của outer query. Điều này khiến nó chạy lại mỗi lần outer query xử lý
					một dòng mới, nên thường chậm hơn so với sub-query thông thường trên tập dữ liệu lớn.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy nhân viên có lương cao hơn mức trung bình của chính phòng ban họ.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							><FilePath>e1</FilePath> là alias của outer query, <FilePath>e2</FilePath> là alias của sub-query — cùng
							bảng <FilePath>Employees</FilePath> nhưng đóng vai trò khác nhau.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
						<span
							>Với mỗi dòng <FilePath>e1</FilePath>, sub-query tính <FilePath>AVG(salary)</FilePath> của những nhân viên
							cùng <FilePath>department_id</FilePath> — đây chính là điểm "correlated".</span
						>
					</li>
				</ul>

				<!-- IN / NOT IN -->
				<PageHeading text="IN / NOT IN" addOnClass="text-left h-0 opacity-0" markedAs="subquery-with-in" :lvl="2" />
				<PageHeading text="Subquery với IN / NOT IN" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi sub-query trả về <b>nhiều dòng</b>, dùng <FilePath>IN</FilePath> hoặc <FilePath>NOT IN</FilePath> để kiểm
					tra xem giá trị của outer query có nằm trong tập kết quả đó không.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>IN</b> — lấy nhân viên thuộc các phòng ban đặt tại Hà Nội.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq6" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 mb-1">
					<b>NOT IN</b> — lấy nhân viên chưa tham gia bất kỳ dự án nào.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>Lưu ý quan trọng:</b> Nếu sub-query trong <FilePath>NOT IN</FilePath> trả về bất kỳ giá trị
					<FilePath>NULL</FilePath> nào, toàn bộ điều kiện sẽ cho kết quả <b>rỗng</b>. Trong trường hợp đó hãy dùng
					<FilePath>NOT EXISTS</FilePath> thay thế.
				</p>

				<!-- EXISTS / NOT EXISTS -->
				<PageHeading
					text="EXISTS / NOT EXISTS"
					addOnClass="text-left h-0 opacity-0"
					markedAs="subquery-with-exists"
					:lvl="2"
				/>
				<PageHeading text="Subquery với EXISTS / NOT EXISTS" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>EXISTS</FilePath> kiểm tra xem sub-query có trả về <b>ít nhất một dòng</b> không. SQL engine không
					quan tâm đến giá trị trả về — chỉ cần có dòng là đủ, nên thường viết
					<FilePath>SELECT 1</FilePath> trong sub-query để rõ ý định. <FilePath>EXISTS</FilePath> thường nhanh hơn
					<FilePath>IN</FilePath> trên tập dữ liệu lớn vì nó dừng lại ngay khi tìm thấy dòng đầu tiên.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>EXISTS</b> — lấy các phòng ban có ít nhất một nhân viên.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq8" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 mb-1">
					<b>NOT EXISTS</b> — lấy các phòng ban chưa có nhân viên nào.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq9" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- SUBQUERY VS JOIN -->
				<PageHeading
					text="Subquery vs JOIN"
					addOnClass="text-left h-0 opacity-0"
					markedAs="subquery-vs-join"
					:lvl="2"
				/>
				<PageHeading text="Subquery vs JOIN — Khi nào dùng cái nào?" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nhiều bài toán có thể giải bằng cả sub-query lẫn <FilePath>JOIN</FilePath>. Hai cách viết dưới đây cho cùng
					kết quả:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="sq10" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 mb-1">Nguyên tắc chọn:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dùng <FilePath>JOIN</FilePath> khi cần lấy thêm cột từ bảng liên kết hoặc khi tối ưu hiệu năng vì optimizer
						thường xử lý JOIN tốt hơn sub-query.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Dùng <b>sub-query</b> khi chỉ cần kiểm tra sự tồn tại (<FilePath>EXISTS</FilePath>), khi cần dùng aggregate
						function làm điều kiện lọc, hoặc khi logic đọc rõ ràng hơn khi tách thành sub-query.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Tránh dùng <b>correlated subquery</b> trên bảng lớn — mỗi dòng outer query sẽ trigger một lần chạy
						sub-query, dẫn đến N lần thực thi (N = số dòng outer). Cân nhắc thay bằng <FilePath>JOIN</FilePath> hoặc
						<FilePath>window function</FilePath>.
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white leading-8 mt-4">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_5"
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
				sq1: `SELECT column1
FROM table_name
WHERE column2 = (
    SELECT column2
    FROM another_table
    WHERE condition
);`,
				sq2: `SELECT name, salary
FROM Employees
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
);`,
				sq3: `SELECT dept_summary.department_id, dept_summary.avg_salary
FROM (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM Employees
    GROUP BY department_id
) AS dept_summary
WHERE dept_summary.avg_salary > 50000000;`,
				sq4: `SELECT
    name,
    salary,
    (SELECT AVG(salary) FROM Employees) AS company_avg
FROM Employees;`,
				sq5: `-- Lấy nhân viên có lương cao hơn mức trung bình của chính phòng ban họ
SELECT name, salary, department_id
FROM Employees e1
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees e2
    WHERE e2.department_id = e1.department_id  -- tham chiếu outer query
);`,
				sq6: `SELECT name
FROM Employees
WHERE department_id IN (
    SELECT id
    FROM Departments
    WHERE location = 'Hà Nội'
);`,
				sq7: `-- Lấy nhân viên chưa tham gia bất kỳ dự án nào
SELECT name
FROM Employees
WHERE id NOT IN (
    SELECT employee_id
    FROM Projects
    WHERE employee_id IS NOT NULL  -- tránh NULL làm rỗng kết quả
);`,
				sq8: `-- Lấy phòng ban có ít nhất một nhân viên
SELECT department_name
FROM Departments d
WHERE EXISTS (
    SELECT 1
    FROM Employees e
    WHERE e.department_id = d.id
);`,
				sq9: `-- Lấy phòng ban chưa có nhân viên nào
SELECT department_name
FROM Departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM Employees e
    WHERE e.department_id = d.id
);`,
				sq10: `-- Cách 1: dùng sub-query
SELECT name
FROM Employees
WHERE department_id IN (
    SELECT id FROM Departments WHERE location = 'HCM'
);

-- Cách 2: dùng JOIN (thường được optimizer xử lý tốt hơn)
SELECT e.name
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.id
WHERE d.location = 'HCM';`,
			};
		},
		setup() {
			return usePagination('documentation', 'sql-7.1', 'sql')
		},
		methods: {},
	};
</script>
