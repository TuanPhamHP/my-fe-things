<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Tổng quan về RDBMS" addOnClass="text-left" markedAs="about-rdbms" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>RDBMS - Relational Database Management System</b> là hệ quản trị cơ sỡ dữ liệu quan hệ. giúp lưu trữ, quản
					lý và truy vấn dữ liệu theo mô hình bảng (table). Dữ liệu trong RDBMS được tổ chức theo hàng (row) và cột
					(column), với các bảng có thể liên kết với nhau thông qua khóa chính (Primary Key) và khóa ngoại (Foreign
					Key). RDBMS cũng là cơ sở cho các hệ quản trị CSDL hiện đại như MySQL, PostgreSQL ... Access.
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/rdbms-01.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<PageHeading text="Khái niệm và vai trò của RDBMS:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							RDBMS là hệ quản trị cơ sở dữ liệu quan hệ, lưu trữ dữ liệu dưới dạng bảng (table) có quan hệ với nhau.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Dữ liệu được tổ chức thành hàng (row) và cột (column). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Các hệ quản trị RDBMS phổ biến: MySQL, PostgreSQL, SQL Server, Oracle. </span>
					</li>
				</ul>
				<PageHeading text="Lợi ích của RDBMS:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Đảm bảo tính toàn vẹn dữ liệu và tránh trùng lặp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Cung cấp khả năng truy vấn dữ liệu mạnh mẽ với SQL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Hỗ trợ quản lý quyền truy cập và bảo mật dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Cung cấp khả năng thao tác với dữ liệu cực kì đơn giản và hiệu quả. </span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về các thành phần có trong <b>RDBMS</b> để làm rõ hơn về cấu trúc cũng
					như chức năng của chúng.
				</p>
				<PageHeading text="Các thành phần chính của RDBMS" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Entity (Thực thể)</b> là một thực thể đại diện cho một đối tượng thực tế hoặc trừu tượng có thuộc tính
							(attributes) và được lưu trữ dưới dạng bảng (table) trong CSDL.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Table (Bảng)</b> Cấu trúc dữ liệu dạng hàng và cột. </span>
					</li>
					<!--	<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Row (Hàng)</b> Một bản ghi trong bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Column (Cột)</b> Một thuộc tính của bảng. </span>
					</li>
					 <li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>PK - Primary Key (Khóa chính) | Constraints </b> Dùng để định danh duy nhất một hàng trong bảng.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>FK - Foreign Key (Khóa ngoại) | Constraints </b> Dùng để liên kết giữa các bảng. </span>
					</li> -->
				</ul>
				<PageHeading text="1) Entity - Thực thể:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Entity là một thực thể đại diện cho một đối tượng thực tế hoặc trừu tượng có thuộc tính (attributes) và được
					lưu trữ dưới dạng bảng (table) trong CSDL.
				</p>
				<PageHeading text="2) Bảng - Table:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Dữ liệu trong một RDBMS được lưu trữ trong các đối tượng cơ sở dữ liệu được gọi là các <b>bảng (table)</b>.
					Bảng này về cơ bản là một bộ sưu tập các mục nhập dữ liệu có liên quan và nó bao gồm nhiều cột và hàng. Bảng
					là hình thức lưu trữ dữ liệu phổ biến và đơn giản nhất trong một cơ sở dữ liệu quan hệ:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/rdbms-table.png" alt="" class="rounded-lg mt-3 block" />
				</div>

				<PageHeading text="3) Hàng - Row:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một bản ghi cũng được gọi là một hàng dữ liệu là từng mục riêng lẻ tồn tại trong một bảng. Ví dụ: có 3 bản ghi
					trong bảng KHACH_HANG trên.
				</p>
				<PageHeading text="4) Cột - Column:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một cột là một thực thể thẳng đứng trong một bảng có chứa tất cả các thông tin liên kết với một trường cụ thể
					trong một bảng.
				</p>
				<PageHeading text="5) Ràng buộc dữ liệu - Constraints:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Constraints giúp đảm bảo dữ liệu chính xác và toàn vẹn. Các loại constraints phổ biến:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>PRIMARY KEY</b> Khoá chính, dùng để định danh cho row. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>FOREIGN KEY</b> Khoá phụ, tạo quan hệ giữa các table. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>UNIQUE</b> Đảm bảo giá trị không trùng lặp. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>NOT NULL</b> Ngăn không cho giá trị NULL. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>CHECK</b> Kiểm tra điều kiện hợp lệ. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>DEFAULT</b> Giá trị mặc định nếu không có dữ liệu. </span>
					</li>
				</ul>

				<PageHeading text="6) Schema:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Schema là cấu trúc logic chứa các bảng, ràng buộc (constraints), index, views, triggers và các đối tượng khác
					trong database.
				</p>
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
						<span><FilePath>GRANT</FilePath> Cấp quyền. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>REVOKE</FilePath> Thu hồi quyền. </span>
					</li>
				</ul>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<ClientOnly>
						<div class="col-span-1">
							<VCodeBlock :code="b10" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

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
				b3: `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);`,
				b4: `ALTER TABLE users ADD COLUMN age INT;
ALTER TABLE users DROP COLUMN age;
ALTER TABLE users RENAME COLUMN name TO full_name;
ALTER TABLE users ALTER COLUMN email SET NOT NULL;
`,
				b5: `DROP TABLE users;`,
				b6: `TRUNCATE TABLE users;`,
				b7: `INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');

UPDATE users SET name = 'Johnny' WHERE id = 1;

DELETE FROM users WHERE id = 1;`,
				b8: `SELECT name, email FROM users WHERE email LIKE '%@gmail.com' ORDER BY name;`,
				b9: `BEGIN;
UPDATE users SET name = 'Alice' WHERE id = 2;
ROLLBACK;`,
				b10: `GRANT SELECT, INSERT ON users TO 'john';
REVOKE INSERT ON users FROM 'john';`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-1' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
