<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="SQL VIEW" addOnClass="text-left mt-5" markedAs="about-view" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>View</b> là một bảng ảo (Virtual Table) được tạo ra từ một hoặc nhiều bảng khác trong database. Nó giúp
					trích xuất dữ liệu mà không cần truy vấn trực tiếp các bảng gốc.
				</p>

				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://miro.medium.com/v2/resize:fit:1400/0*MkqbJXTLHBSkpDI2.png"
						alt=""
						class="rounded-lg mt-3 block max-w-[800px]"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lợi ích khi sử dụng <b>View</b>:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Bảo mật dữ liệu:</b> Chỉ hiển thị một phần dữ liệu cho người dùng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Đơn giản hóa truy vấn:</b> Giúp tổ chức truy vấn phức tạp thành đơn giản.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Tái sử dụng truy vấn:</b> Không cần viết lại câu lệnh SQL nhiều lần.</span>
					</li>
				</ul>
				<PageHeading text="Tạo VIEW" addOnClass="text-left my-5" markedAs="create-view" :lvl="2" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
					Tạo một View hiển thị danh sách nhân viên và phòng ban
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mt-2">Truy vấn View:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Các bài toàn update/delete tương tự với <b>table</b>.
				</p>

				<PageHeading text="Stored Procedure" addOnClass="text-left mt-5" markedAs="about-stored-procedure" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Stored Procedure</b> là một tập hợp các câu lệnh SQL được lưu trữ trong database và có thể được gọi để thực
					thi nhiều lần.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lợi ích khi sử dụng <b>Stored Procedure</b>:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Hiệu suất cao hơn:</b> Giảm tải cho ứng dụng bằng cách xử lý logic trong database.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Tái sử dụng:</b> Có thể gọi lại nhiều lần mà không cần viết lại code.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Bảo mật:</b> Hạn chế quyền truy cập dữ liệu bằng cách chỉ cho phép gọi procedure thay vì truy vấn trực
							tiếp.</span
						>
					</li>
				</ul>
				<PageHeading text="Danh sách Procedure" addOnClass="text-left mt-5" markedAs="list-procedure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xem danh sách các Procedure đang có</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`SHOW PROCEDURE STATUS WHERE db = db_name;`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<PageHeading text="Tạo Stored Procedure" addOnClass="text-left my-5" markedAs="create-procedure" :lvl="2" />
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
						<div class="col-span-1">
							<b>MySQL</b>
							<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<b>SQL Server (T-SQL)</b>
							<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
					Tạo Procedure không có tham số: in ra danh sách nhân viên
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tạo Procedure có tham số: Lấy thông tin nhân viên theo ID
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b8" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tạo Procedure có tham số IN, OUT: Tính tổng lương của một nhân viên
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b9" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="Các thành phần" addOnClass="text-left mt-5" markedAs="create-procedure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chúng ta cùng tìm hiểu các thành phần như <FilePath>IN, OUT, INOUT</FilePath>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>IN</FilePath> Dùng để truyền giá trị vào Procedure, nhưng không thể thay đổi giá trị của nó bên
							trong Procedure.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>OUT</FilePath> Dùng để trả về kết quả từ Procedure ra ngoài, nhưng không nhận giá trị đầu vào.
							Khi gọi Procedure, bạn phải dùng biến để nhận giá trị từ tham số OUT.</span
						>
						<ClientOnly>
							<div class="col-span-1 my-2">
								<VCodeBlock :code="b10" highlightjs lang="sql" theme="atom-one-dark" />
							</div>
						</ClientOnly>
					</li>
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>INOUT</FilePath> Vừa truyền giá trị vào, vừa lấy kết quả trả về. Procedure có thể thay đổi giá
							trị của tham số INOUT.</span
						>
						<ClientOnly>
							<div class="col-span-1 my-2">
								<VCodeBlock :code="b11" highlightjs lang="sql" theme="atom-one-dark" />
							</div>
						</ClientOnly>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Tóm tắt:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Dùng</b> <FilePath>IN</FilePath> khi bạn chỉ muốn nhập giá trị vào mà không cần trả về.</span>
					</li>
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><b>Dùng</b> <FilePath>OUT</FilePath> khi bạn chỉ cần lấy kết quả từ Procedure.</span>
					</li>
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Dùng</b> <FilePath>INOUT</FilePath> khi bạn cần vừa nhập vừa thay đổi giá trị trong Procedure.</span
						>
					</li>
				</ul>

				<PageHeading text="Xóa Stored Procedure" addOnClass="text-left my-5" markedAs="drop-procedure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xóa một stored procedure nếu không cần nữa</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="`DROP PROCEDURE IF EXISTS GetAllUsers;`" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
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
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				b1: `CREATE VIEW ten_view AS
SELECT cot1, cot2, ... FROM ten_bang WHERE dieu_kien;
`,
				b2: `CREATE VIEW v_user_department AS
SELECT e.id, e.name, e.email, d.name AS department
FROM users e
LEFT JOIN departments d ON e.department_id = d.id;`,
				b3: `SELECT * FROM v_user_department;`,
				b4: `DROP VIEW v_employee_department;`,
				b5: `DELIMITER //
CREATE PROCEDURE ten_procedure (tham_so_kieu_dulieu)
BEGIN
    -- Câu lệnh SQL ở đây
END //
DELIMITER ;
`,
				b6: `CREATE PROCEDURE ten_procedure
AS
BEGIN
		-- Câu lệnh SQL ở đây
END
GO;
`,
				b7: `DELIMITER //
CREATE PROCEDURE GetAllUsers()
BEGIN
    SELECT * FROM users;
END //
DELIMITER ;

-- Gọi procedure
CALL GetAllUsers();
`,
				b8: `DELIMITER //
CREATE PROCEDURE GetUserById(IN userId INT)
BEGIN
    SELECT * FROM users WHERE id = userId;
END //
DELIMITER ;

-- Gọi procedure
CALL GetUserById(2);
`,
				b9: `DELIMITER //
CREATE PROCEDURE GetTotalSalary(IN userId INT, OUT total DECIMAL(10,2))
BEGIN
    SELECT SUM(base_salary + bonus) INTO total FROM salaries WHERE user_id = userId;
END //
DELIMITER ;

CALL GetTotalSalary(1, @total);
SELECT @total; -- Lấy giá trị biến @total
`,
				b10: `SET @total = 0;  -- Khai báo biến để nhận kết quả
CALL GetTotalEmployeesByDept(1, @total);
SELECT @total AS TotalEmployees;
`,
				b11: `SET @salary = 5000;  -- Khởi tạo mức lương ban đầu
CALL DoubleSalary(@salary);
SELECT @salary AS NewSalary;  -- Kết quả: 10000
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-8' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>

<!-- -- create
CREATE TABLE EMPLOYEE (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department_id INTEGER
);

CREATE TABLE DEPARTMENT(
 id INTEGER PRIMARY KEY,
 name TEXT
);

-- insert

INSERT INTO DEPARTMENT VALUES (1, 'IT');
INSERT INTO DEPARTMENT VALUES (2, 'SALES');

INSERT INTO EMPLOYEE VALUES (1, 'Clark', 1);
INSERT INTO EMPLOYEE VALUES (2, 'Dave', 1);
INSERT INTO EMPLOYEE VALUES (3, 'Ava', 2);

CREATE VIEW VIEW_E_D as
select e.id, e.name, e.deparment as DEPARTMENT
from EMPLOYEE e
left join DEPARTMENT on e.department_id = d.id; -->
