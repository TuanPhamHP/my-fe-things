<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Database Models trong RDBMS" addOnClass="text-left" markedAs="about-rdbms-models" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trong hệ quản trị cơ sở dữ liệu quan hệ (RDBMS), dữ liệu được tổ chức theo nhiều mô hình khác nhau để đảm bảo
					tính linh hoạt và tối ưu hóa hiệu suất. Tiếp theo, chúng ta sẽ "ngó" qua các dạng database model phổ biến
					trong RDBMS:
				</p>
				<PageHeading text="Hierarchical Model" addOnClass="text-left mt-5" markedAs="hierarchical-model" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b> Mô Hình Thứ Bậc - Hierarchical Model </b> là một trong những mô hình cơ sở dữ liệu lâu đời nhất, trong đó
					dữ liệu được tổ chức theo <b>cấu trúc cây (Tree Structure)</b>.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							Gồm các thành phần chính:
							<br />
							<br />
							<FilePath>Nút gốc (Root Node)</FilePath>: Nút cao nhất trong cây, không có cha.

							<br />
							<br />
							<FilePath>Nút cha (Parent Node)</FilePath>: Nút có thể có một hoặc nhiều nút con.

							<br />
							<br />
							<FilePath>Nút con (Child Node)</FilePath>: Nút thuộc một nút cha duy nhất.
						</div>
					</li>
				</ul>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_720/https://dataintegrationinfo.com/wp-content/uploads/2020/08/image1-2.png"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ví dụ thực tế: Giả sử công ty có nhiều phòng ban, mỗi phòng ban có nhiều nhân viên.
				</p>
				<ClientOnly>
					<div class="col-span-1"><VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" /></div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Quick Notes:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Dữ liệu được tổ chức theo cấp bậc với <b>nút gốc (Root Node)</b> và các <b>nút con (Child Nodes)</b>, dưới
							dạng <b>cấu trúc cây (Tree Structure).</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Mỗi nút cha (Parent Node) có thể <b>có nhiều nút con</b>, nhưng mỗi nút con <b>chỉ có một cha</b>.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Mối quan hệ giữa các bản ghi là <b>1-N (One-to-Many), không hỗ trợ N-N</b> </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Để truy vấn với mô hình dạng này thì người dùng buộc phải nắm được cấu trúc của cây. </span>
					</li>
				</ul>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">✅ Ưu điểm</th>
							<th scope="col" class="px-5 py-3">❌ Nhược điểm</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">✅ Dễ hiểu, trực quan, phù hợp với dữ liệu có cấu trúc cây.</td>
							<td class="px-5 py-4">❌ Không hỗ trợ quan hệ N-N (Many-to-Many), chỉ hỗ trợ 1-N.</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">✅ Truy vấn nhanh khi duyệt theo cấp bậc.</td>
							<td class="px-5 py-4">❌ Khó cập nhật khi có thay đổi trong cấu trúc.</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">✅ Tốt cho tổ chức dữ liệu phân cấp, như tổ chức nhân sự, danh mục sản phẩm.</td>
							<td class="px-5 py-4">❌ JOIN phức tạp khi truy vấn nhiều cấp độ.</td>
						</tr>
					</tbody>
				</table>
				<div class="border rounded px-3 col-span-2 mt-5">
					<p class="text-slate-900 dark:text-white mt-3">
						<b>Khi nào nên dùng?</b>
					</p>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi dữ liệu có <b>cấu trúc phân cấp rõ ràng</b> (tổ chức công ty, danh mục sản phẩm, thư mục hệ thống).
						</li>
						<li
							class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Khi cần <b>truy vấn theo cấp bậc</b> (ví dụ: tìm tất cả nhân viên dưới quyền một người quản lý).
						</li>
					</ul>
				</div>

				<PageHeading text="Relation Data Model" addOnClass="text-left mt-5" markedAs="relation-data-model" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b> Mô Hình Quan hệ - Relation Data Model </b> là một mô hình cơ sở dữ liệu được phát triển bởi Edgar F. Codd
					vào những năm 1970. Đây là mô hình cơ sở dữ liệu phổ biến nhất hiện nay và cơ sở của các hệ quản trị cơ sở dữ
					liệu quan hệ (RDBMS) như MySQL, PostgreSQL, Oracle, SQL Server, v.v.
					<br />
					Đặc điểm của Mô hình Dữ liệu Quan hệ:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://raw.githubusercontent.com/gulvaibhav20/assets/master/Scaler/Relational_Model/Table.jpg"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Bảng (Table)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Mô hình quan hệ tổ chức dữ liệu trong các bảng (hay gọi là <b>Relation</b> ). Mỗi bảng bao gồm các cột (
							<b>columns | attributes</b> ) và dòng ( <b>rows | tuples</b> ).
						</p>
						<br />
						<p class="pl-5">
							- Mỗi bảng có một tên riêng biệt và mỗi cột trong bảng có tên và kiểu dữ liệu xác định.
							<br />
							<br />
							VD: Tạo relation <b>Customers</b> và các cột là <b>name: varchar</b> và <b>email: varchar</b>
						</p>
						<div class="pl-5 mt-3">
							<ClientOnly>
								<div class="col-span-1"><VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" /></div>
							</ClientOnly>
						</div>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Mối quan hệ (Relationships)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Mối quan hệ giữa các bảng trong mô hình quan hệ được xác định thông qua các khóa ngoại
							<b> (foreign keys) </b> hoặc khóa chính <b> (primary keys) </b>.
						</p>
						<br />
						<p class="pl-5">
							- Các mối quan hệ giữa các bảng có thể là <b>One-to-One</b>, <b>One-to-Many</b>, hoặc <b>Many-to-Many</b>.
						</p>
					</li>
				</ul>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/sql-db-1.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Khóa chính (Primary Key)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Mỗi bảng trong RDBMS có một cột hoặc nhóm các cột được gọi là khóa chính. Khóa chính là
							<b>duy nhất</b> đối với mỗi bản ghi trong bảng và <b>không thể có giá trị NULL</b>.
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Ví dụ, trong bảng Users, cột id là khóa chính nó <b>duy nhất - unique </b> và <b>Not NULL</b>, được dùng
							để định danh cho bản ghi
						</p>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Khóa ngoại (Foreign Key)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Khóa ngoại là một cột hoặc tập hợp các cột trong một bảng <b>tham chiếu đến khóa chính</b> của một bảng
							khác. Nó thiết lập mối quan hệ giữa hai bảng. Ví dụ:
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<ClientOnly>
							<div class="col-span-1"><VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" /></div>
						</ClientOnly>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Ở đây, user_id là khóa ngoại trong bảng Orders, tham chiếu đến cột id trong bảng Users.
						</p>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Ràng buộc (Constraints)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Các ràng buộc giúp đảm bảo tính toàn vẹn dữ liệu và hạn chế giá trị không hợp lệ. Các ràng buộc phổ biến
							trong mô hình quan hệ bao gồm:
						</p>
					</li>

					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- <b>NOT NULL</b>: Đảm bảo một cột không được chứa giá trị NULL.
							<br />
							<br />
							- <b>UNIQUE</b>: Đảm bảo giá trị trong một cột là duy nhất.
							<br />
							<br />
							- <b>CHECK</b>: Đảm bảo giá trị trong một cột thoả mãn một điều kiện nhất định.
							<br />
							<br />
							- <b>DEFAULT</b>: Cung cấp giá trị mặc định cho cột nếu không có giá trị nào được cung cấp.
						</p>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Chuẩn hóa (Normalization)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Chuẩn hóa là quá trình tổ chức dữ liệu trong các bảng sao cho dữ liệu được lưu trữ một cách hiệu quả và
							tránh sự dư thừa.
						</p>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b class="text-xl">Tính Toàn Vẹn (Integrity)</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- Mô hình quan hệ đảm bảo tính toàn vẹn dữ liệu thông qua các ràng buộc như Toàn vẹn Entity (Entity
							Integrity) và Toàn vẹn Tham chiếu (Referential Integrity).
						</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">- <b>Entity Integrity</b> đảm bảo rằng mỗi bảng có một khóa chính duy nhất, không NULL.</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p class="pl-5">
							- <b>Referential Integrity</b> đảm bảo rằng mọi giá trị trong khóa ngoại đều có một giá trị hợp lệ trong
							bảng tham chiếu.
						</p>
					</li>
				</ul>

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
				b3: `CREATE TABLE Customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
`,
				b4: `CREATE TABLE Profiles (
		id INT PRIMARY KEY,
		user_id INT,
		bio TEXT,
		FOREIGN KEY (user_id) REFERENCES Users(id)
);
`,
				b5: `create table customers (
  id int primary key,
  name varchar(50),
  email varchar(50) unique
);

create table profiles (
  id int primary key,
  bio text,
  user_id int,
  foreign key (user_id) references customers(id)
);

insert into customers (id, name, email) values (1, 'Mr A', 'mra@gmail.com');
insert into customers (id, name, email) values (2, 'Mr B', 'mrb@gmail.com');
insert into customers (id, name, email) values (3, 'Mr C', 'mrc@gmail.com');

insert into profiles (id, bio, user_id) values (1, 'Bio cua mrA', 2);

select * from customers;
select * from profiles;`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-4' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
