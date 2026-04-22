<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="SQL" addOnClass="text-left mt-5" markedAs="hello-sql" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>SQL - Structured Query Language</b> là ngôn ngữ dùng để tương tác với cơ sở dữ liệu quan hệ. SQL giúp chúng
					ta tạo, truy vấn, cập nhật và quản lý dữ liệu trong các hệ quản trị cơ sở dữ liệu như MySQL, PostgreSQL, SQL
					Server, SQLite...
				</p>
				<PageHeading text="Các nhóm lệnh chính" addOnClass="text-left mt-5" markedAs="sql-command-groups" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi sử dụng SQL, chúng ta cần lưu ý các nhóm lệnh chính tạo lên cấu trúc của SQL và nhiệm vụ riêng của từng
					nhóm:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://cdn.hackr.io/uploads/posts/attachments/16793290212HNSqhy8tE.png"
						alt=""
						class="rounded-lg mt-3 block max-w-[800px]"
					/>
				</div>
				<PageHeading text="- DDL" addOnClass="text-left h-0 opacity-0" markedAs="ddl" :lvl="2" />
				<PageHeading
					text="1) DDL (Data Definition Language) - Ngôn ngữ định nghĩa dữ liệu"
					addOnClass="text-left mt-5"
					markedAs="DDL"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nhóm lệnh này dùng để tạo, sửa đổi hoặc xóa cấu trúc của bảng trong cơ sở dữ liệu.
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>CREATE</FilePath> Tạo bảng hoặc đối tượng trong cơ sở dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>ALTER</FilePath> Thay đổi cấu trúc bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>DROP</FilePath> Xóa bảng hoặc đối tượng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>TRUNCATE</FilePath> Xóa toàn bộ dữ liệu trong bảng nhưng giữ nguyên cấu trúc. </span>
					</li>
				</ul>
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8">
								<b>CREATE</b>
							</p>
							<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
							<p class="text-slate-900 dark:text-white mt-0 leading-8">
								<b>DROP</b>
							</p>
							<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8">
								<b>ALTER</b>
							</p>
							<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
							<p class="text-slate-900 dark:text-white mt-0 leading-8">
								<b>TRUCATE</b>
							</p>
							<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-semibold">Ví dụ thực tiễn:</p>
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 text-sm text-slate-500 dark:text-slate-400">
								Ví dụ 1: Tạo hệ thống quản lý đơn hàng
							</p>
							<VCodeBlock :code="ddlEx1" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 text-sm text-slate-500 dark:text-slate-400">
								Ví dụ 2: Nâng cấp cấu trúc bảng nhân viên
							</p>
							<VCodeBlock :code="ddlEx2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>
				<PageHeading text="- DML" addOnClass="text-left h-0 opacity-0" markedAs="dml" :lvl="2" />
				<PageHeading
					text="2) DML (Data Manipulation Language) - Ngôn ngữ thao tác dữ liệu"
					addOnClass="text-left mt-5"
					markedAs="sql-command-groups"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nhóm lệnh này dùng để chèn (thêm), sửa, xóa dữ liệu trong bảng hay còn gọi là bài toán CRUD.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>INSERT</FilePath> Thêm dữ liệu vào bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>UPDATE</FilePath> Cập nhật dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>DELETE</FilePath> Xóa dữ liệu khỏi bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>SET</FilePath> Cập nhật dữ liệu trong bảng, cũng có thể dùng để tạo biến trong SQL. </span>
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<ClientOnly>
						<div class="col-span-1">
							<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-semibold">Ví dụ thực tiễn:</p>
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 1: Thêm nhiều sản phẩm vào cửa hàng
							</p>
							<VCodeBlock :code="dmlEx1" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 2: Cập nhật giá và xóa hàng hết hạn
							</p>
							<VCodeBlock :code="dmlEx2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>
				<PageHeading text="- DQL" addOnClass="text-left h-0 opacity-0" markedAs="dql" :lvl="2" />
				<PageHeading
					text="3) DQL (Data Query Language) - Ngôn ngữ truy vấn dữ liệu"
					addOnClass="text-left mt-5"
					markedAs="sql-command-groups"
					:lvl="3"
				/>

				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					DQL chủ yếu xoay quanh lệnh SELECT để truy vấn dữ liệu.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>SELECT</FilePath> Truy vấn dữ liệu từ bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>WHERE</FilePath> Lọc dữ liệu theo điều kiện. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>ORDER BY</FilePath> Sắp xếp dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>GROUP BY</FilePath> Nhóm dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>FROM</FilePath> Xác định bảng hoặc nguồn dữ liệu để truy vấn. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>AS</FilePath> Xác định bảng hoặc nguồn dữ liệu để truy vấn. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>HAVING</FilePath> Lọc dữ liệu sau khi nhóm. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>LIMIT</FilePath> Giới hạn số dòng trả về. </span>
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<ClientOnly>
						<div class="col-span-1">
							<VCodeBlock :code="b8" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-semibold">Ví dụ thực tiễn:</p>
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 1: Báo cáo doanh thu theo danh mục sản phẩm
							</p>
							<VCodeBlock :code="dqlEx1" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 2: Tìm top 10 khách hàng VIP
							</p>
							<VCodeBlock :code="dqlEx2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>
				<PageHeading text="- TCL" addOnClass="text-left h-0 opacity-0" markedAs="tcl" :lvl="2" />
				<PageHeading
					text="4) TCL (Transaction Control Language) - Ngôn ngữ kiểm soát giao dịch"
					addOnClass="text-left mt-5"
					markedAs="sql-command-groups"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nhóm lệnh này dùng để quản lý các giao dịch trong cơ sở dữ liệu, giúp đảm bảo tính toàn vẹn dữ liệu.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>COMMIT</FilePath> Lưu thay đổi vĩnh viễn. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>ROLLBACK</FilePath> Hoàn tác các thay đổi. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>SAVEPOINT</FilePath> Đặt điểm lưu tạm để có thể quay lại khi cần. </span>
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<ClientOnly>
						<div class="col-span-1">
							<VCodeBlock :code="b9" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-semibold">Ví dụ thực tiễn:</p>
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 1: Chuyển khoản ngân hàng an toàn với SAVEPOINT
							</p>
							<VCodeBlock :code="tclEx1" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 2: Xử lý đặt hàng và trừ tồn kho
							</p>
							<VCodeBlock :code="tclEx2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>
				<PageHeading text="- DCL" addOnClass="text-left h-0 opacity-0" markedAs="dcl" :lvl="2" />
				<PageHeading
					text="5) DCL (Data Control Language) - Ngôn ngữ kiểm soát dữ liệu"
					addOnClass="text-left mt-5"
					markedAs="sql-command-groups"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					DCL được sử dụng để cấp quyền hoặc thu hồi quyền truy cập vào cơ sở dữ liệu.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>CREATE USER</FilePath> Tạo tài khoản người dùng mới cho cơ sở dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>ALTER USER</FilePath> Thay đổi thông tin tài khoản (mật khẩu, thuộc tính). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>DROP USER</FilePath> Xóa tài khoản người dùng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>GRANT</FilePath> Cấp quyền truy cập cho tài khoản. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>REVOKE</FilePath> Thu hồi quyền truy cập của tài khoản. </span>
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<ClientOnly>
						<div class="col-span-1">
							<VCodeBlock :code="b10" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-semibold">Ví dụ thực tiễn:</p>
				<ClientOnly>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 1: Tài khoản <b class="text-yellow-500">ba_ro</b> — chỉ có quyền đọc
							</p>
							<VCodeBlock :code="dclEx1" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-500 dark:text-slate-400 mt-0 leading-8 text-sm">
								Ví dụ 2: Tài khoản <b class="text-yellow-500">ceo_tuan</b> — toàn quyền
							</p>
							<VCodeBlock :code="dclEx2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</div>
				</ClientOnly>

				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ở trên là 4 nhóm lệnh chính khi thao tác với SQL, vào bài tiếp theo chúng ta sẽ cùng thực hành tạo và thực thi
					một file SQL trên máy của chúng ta.
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
				b1: `const fs = require('fs');

// Đọc tệp một cách không đồng bộ
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
	console.log('đọc file hoàn tất !!');
  console.log(data);
});

console.log('File đang được đọc...');
`,
				b2: `Company (Root)
│── Sales (Department)
│   │── Alice (Employee)
│   │── Bob (Employee)
│
│── IT (Department)
│   │── Charlie (Employee)
│   │── David (Employee)
`,
				b3: `-- company_db: tạo bảng departments và users
CREATE TABLE departments (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR(150) NOT NULL,
    email         VARCHAR(150) UNIQUE NOT NULL,
    department_id INT REFERENCES departments(id),
    joined_at     TIMESTAMP DEFAULT NOW()
);`,
				b4: `ALTER TABLE users ADD COLUMN salary DECIMAL(10,2) DEFAULT 0;
ALTER TABLE users DROP COLUMN salary;
ALTER TABLE users RENAME COLUMN full_name TO display_name;
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
`,
				b5: `DROP TABLE IF EXISTS temp_logs;`,
				b6: `TRUNCATE TABLE temp_logs;`,
				b7: `INSERT INTO users (full_name, email) VALUES ('Nguyen Van A', 'a@company.com');

UPDATE users SET salary = 15000000 WHERE id = 1;

DELETE FROM users WHERE id = 1;`,
				b8: `SELECT full_name, email FROM users WHERE email LIKE '%@company.com' ORDER BY full_name;`,
				b9: `BEGIN;
UPDATE users SET salary = 20000000 WHERE id = 2;
ROLLBACK;`,
				b10: `GRANT SELECT, INSERT ON company_db.users TO 'ba_ro'@'localhost';
REVOKE INSERT ON company_db.users FROM 'ba_ro'@'localhost';`,
				ddlEx1: `-- Khởi tạo đầy đủ CSDL company_db
CREATE TABLE departments (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR(150) NOT NULL,
    email         VARCHAR(150) UNIQUE NOT NULL,
    department_id INT REFERENCES departments(id),
    salary        DECIMAL(10,2) DEFAULT 0,
    joined_at     TIMESTAMP DEFAULT NOW()
);

CREATE TABLE temp_logs (
    id         SERIAL PRIMARY KEY,
    user_id    INT REFERENCES users(id),
    action     VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);`,
				ddlEx2: `-- Nâng cấp cấu trúc bảng users
ALTER TABLE users ADD COLUMN phone VARCHAR(15);
ALTER TABLE users ADD COLUMN is_active BOOLEAN DEFAULT TRUE;
ALTER TABLE users ADD CONSTRAINT chk_salary CHECK (salary >= 0);

-- Dọn dữ liệu log tạm và xóa bảng không còn dùng
TRUNCATE TABLE temp_logs;
DROP TABLE IF EXISTS old_sessions;`,
				dmlEx1: `-- Thêm phòng ban và nhân viên vào company_db
INSERT INTO departments (name)
VALUES ('Engineering'), ('Marketing'), ('HR');

INSERT INTO users (full_name, email, department_id, salary)
VALUES
    ('Nguyen Van A', 'a@company.com', 1, 20000000),
    ('Tran Thi B',   'b@company.com', 2, 15000000),
    ('Le Van C',     'c@company.com', 1, 18000000);`,
				dmlEx2: `-- Tăng lương 10% cho nhân viên phòng Engineering
UPDATE users
SET salary = salary * 1.1
WHERE department_id = (
    SELECT id FROM departments WHERE name = 'Engineering'
);

-- Xóa nhân viên đã nghỉ việc
DELETE FROM users WHERE is_active = FALSE;`,
				dqlEx1: `-- Thống kê số nhân viên và lương trung bình theo phòng ban
SELECT
    d.name        AS department,
    COUNT(u.id)   AS total_staff,
    AVG(u.salary) AS avg_salary
FROM departments d
JOIN users u ON u.department_id = d.id
GROUP BY d.name
HAVING COUNT(u.id) > 1
ORDER BY avg_salary DESC;`,
				dqlEx2: `-- Tìm nhân viên có lương cao nhất trong từng phòng ban
SELECT
    u.full_name,
    d.name   AS department,
    u.salary
FROM users u
JOIN departments d ON u.department_id = d.id
WHERE u.salary = (
    SELECT MAX(salary) FROM users
    WHERE department_id = u.department_id
)
ORDER BY u.salary DESC;`,
				tclEx1: `-- Chuyển nhân viên sang phòng ban khác và ghi log
BEGIN;
    UPDATE users
    SET department_id = 2
    WHERE id = 3;

    SAVEPOINT after_transfer;

    INSERT INTO temp_logs (user_id, action)
    VALUES (3, 'Transferred to Marketing');
COMMIT;
-- Nếu ghi log lỗi: ROLLBACK TO after_transfer;`,
				tclEx2: `-- Tăng lương hàng loạt và ghi nhật ký trong một transaction
BEGIN;
    UPDATE users
    SET salary = salary * 1.1
    WHERE department_id = 1;

    SAVEPOINT salary_updated;

    INSERT INTO temp_logs (user_id, action)
    SELECT id, 'Salary increased 10%'
    FROM users WHERE department_id = 1;
COMMIT;`,
				dclEx1: `-- [Admin] Tạo tài khoản ba_ro chỉ có quyền đọc
CREATE USER 'ba_ro'@'localhost' IDENTIFIED BY 'ReadOnly@123';

GRANT SELECT ON company_db.users       TO 'ba_ro'@'localhost';
GRANT SELECT ON company_db.departments TO 'ba_ro'@'localhost';

-- [Đăng nhập bằng ba_ro] ✅ SELECT thành công
SELECT id, full_name, email FROM users;
SELECT id, name FROM departments;

-- [Đăng nhập bằng ba_ro] ❌ INSERT bị từ chối
INSERT INTO users (full_name, email)
VALUES ('Nguyen Van A', 'a@company.com');
-- ERROR 1142: INSERT command denied to user 'ba_ro'@'localhost'`,
				dclEx2: `-- [Admin] Tạo tài khoản ceo_tuan với toàn quyền
CREATE USER 'ceo_tuan'@'localhost' IDENTIFIED BY 'CEO@Secure789';

GRANT ALL PRIVILEGES ON company_db.* TO 'ceo_tuan'@'localhost';
FLUSH PRIVILEGES;

-- [Đăng nhập bằng ceo_tuan] ✅ SELECT thành công
SELECT d.name AS department, COUNT(u.id) AS total_staff
FROM departments d
JOIN users u ON u.department_id = d.id
GROUP BY d.name;

-- [Đăng nhập bằng ceo_tuan] ✅ INSERT thành công
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO users (full_name, email, department_id)
VALUES ('Tran Thi B', 'b@company.com', 3);`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
