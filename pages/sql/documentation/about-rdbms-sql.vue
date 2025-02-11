<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Tổng quan về RDBMS" addOnClass="text-left" markedAs="about-rdbms" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>RDBMS - Relational Database Management System</b> là hệ quản trị cơ sỡ dữ liệu quan hệ. RDBMS là cơ sở cho
					SQL, và cho tất cả các hệ thống cơ sở dữ liệu hiện đại như MS SQL Server, IBM DB2, Oracle, MySQL và Microsoft
					Access.
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
				<PageHeading text="Các thành phần cơ bản của RDBMS" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
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
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Row (Hàng)</b> Một bản ghi trong bảng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Column (Cột)</b> Một thuộc tính của bảng. </span>
					</li>
					<!-- <li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
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
				<PageHeading text="1) Bảng - Table:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Dữ liệu trong một RDBMS được lưu trữ trong các đối tượng cơ sở dữ liệu được gọi là các <b>bảng (table)</b>.
					Bảng này về cơ bản là một bộ sưu tập các mục nhập dữ liệu có liên quan và nó bao gồm nhiều cột và hàng. Bảng
					là hình thức lưu trữ dữ liệu phổ biến và đơn giản nhất trong một cơ sở dữ liệu quan hệ:
				</p>
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img src="@/assets/images/documentation/rdbms-table.png" alt="" class="rounded-lg mt-3 block" />
				</div>

				<PageHeading text="2) Hàng - Row:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một bản ghi cũng được gọi là một hàng dữ liệu là từng mục riêng lẻ tồn tại trong một bảng. Ví dụ: có 3 bản ghi
					trong bảng KHACH_HANG trên.
				</p>
				<PageHeading text="3) Cột - Column:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Một cột là một thực thể thẳng đứng trong một bảng có chứa tất cả các thông tin liên kết với một trường cụ thể
					trong một bảng.
				</p>
				<PageHeading text="4) Ràng buộc dữ liệu - Constraints:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
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

				<PageHeading text="5) Schema:" addOnClass="text-left mt-5" markedAs="" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Schema là cấu trúc logic chứa các bảng, ràng buộc (constraints), index, views, triggers và các đối tượng khác
					trong database.
				</p>
				<PageHeading text="Tạo file SQL" addOnClass="text-left mt-5" markedAs="hello-sql" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tiếp theo, chúng ta sẽ cùng thực hành tạo và thực thi một file SQL trên máy của chúng ta.
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
