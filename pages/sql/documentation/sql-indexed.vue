<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Index trong SQL" addOnClass="text-left mt-5" markedAs="about-index" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Index</b> là một cấu trúc dữ liệu giúp tối ưu hóa hiệu suất truy vấn trong SQL. Nó hoạt động tương tự như
					mục lục của một cuốn sách, giúp tìm kiếm dữ liệu nhanh hơn mà không phải duyệt toàn bộ bảng.
					<br />
				</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">✅ Ưu điểm</th>
							<th scope="col" class="px-5 py-3">❌ Nhược điểm</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in prosAndCons"
							:key="item.pros"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td class="px-5 py-4">✅ {{ item.pros }}</td>
							<td class="px-5 py-4">❌ {{ item.cons }}</td>
						</tr>
					</tbody>
				</table>
				<PageHeading text="Các loại Index trong SQL" addOnClass="text-left mt-5" markedAs="types" :lvl="1" />
				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://media.licdn.com/dms/image/v2/D5612AQGZBPYJkXY0vQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1730280676795?e=2147483647&v=beta&t=RrJ---IXtQy6ISlvnyzV6m5WXURAKhL3JhKxxo-Z9FQ"
						alt=""
						class="rounded-lg mt-3 block max-w-[800px]"
					/>
				</div>
				<PageHeading text="1) Primary Index" addOnClass="text-left mt-5" markedAs="clustered" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Là index mặc định khi tạo <b>PRIMARY KEY</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dữ liệu trong bảng mặc định được <b>lưu theo thứ tự index này</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Tương ứng với PK, mỗi bảng <b>chỉ có một Clustered Index</b></span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> ProductID chính là Clustered Index vì nó là khóa chính
				</p>
				<PageHeading text="2) Secondary Index" addOnClass="text-left mt-5" markedAs="secondary" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Không thay đổi cách lưu trữ dữ liệu của bảng</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Có thể tạo nhiều Non-clustered Index trong một bảng</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dữ liệu được lưu trong bảng chính, còn index lưu ở một nơi khác</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`CREATE INDEX idx_product_name ON products(name);`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Câu lệnh trên tạo index giúp truy vấn theo cột <b>Name</b> nhanh hơn
				</p>
				<!--  -->
				<PageHeading text="3) Unique Index" addOnClass="text-left mt-5" markedAs="unique" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Đảm bảo giá trị trong cột là duy nhất</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Tự động tạo khi cột có UNIQUE</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`CREATE UNIQUE INDEX idx_unique_email ON users(email);`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">=> Index này giúp ngăn chặn trùng lặp email</p>
				<!--  -->
				<PageHeading text="4) Composite Index" addOnClass="text-left mt-5" markedAs="composite" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Index trên nhiều cột cùng lúc</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Tự động tạo khi cột có UNIQUE</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`CREATE INDEX idx_user_name_email ON users(name, email);`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Tăng tốc truy vấn khi tìm kiếm theo cả Name và Email
				</p>
				<!--  -->
				<PageHeading text="5) Full-Text Index" addOnClass="text-left mt-5" markedAs="full-text" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dùng để tìm kiếm văn bản (các cột kiểu TEXT, VARCHAR)</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Thường dùng trong các hệ thống Search Engine</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dùng trong tìm kiếm LIKE hoặc MATCH AGAINST.</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`CREATE FULLTEXT INDEX idx_content ON articles(content);`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Tăng tốc truy vấn khi tìm kiếm theo cả Name và Email
				</p>
				<!--  -->
				<PageHeading text="6) Filtered Index" addOnClass="text-left mt-5" markedAs="Partial " :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							MySQL không có Filtered Index như PostgreSQL, nhưng có thể giả lập bằng Partial Index bằng cách tạo index
							trên cột kết hợp với giá trị phổ biến.</span
						>
					</li>

					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dùng để tạo các index với điều kiện nhất định</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`CREATE INDEX idx_pending_orders ON orders(order_status, order_id);
							-- truy vấn
							SELECT * FROM orders WHERE order_status = 'pending';`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Tăng tốc truy vấn khi tìm kiếm theo cả Name và Email
				</p>
				<PageHeading text="Quản lý Index " addOnClass="text-left mt-5" markedAs="crud-index" :lvl="1" />
				<PageHeading text="Kiểm tra Index" addOnClass="text-left mt-5" markedAs="index-check" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Kiểm tra Index của bảng</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="`SHOW INDEX FROM orders;`" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xem Index nào đang được dùng khi chạy truy vấn</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`EXPLAIN SELECT * FROM orders WHERE order_status = 'pending';`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xem Index nào đang được dùng khi chạy truy vấn</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="`EXPLAIN --syntax... `" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="Xóa Index" addOnClass="text-left mt-5" markedAs="remove-check" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xóa Index nếu thấy không cần thiết</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`DROP INDEX idx_product_name ON products;`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
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
				prosAndCons: [
					{
						pros: 'Tăng tốc độ truy vấn với SELECT, WHERE, ORDER BY, GROUP BY',
						cons: 'Chiếm thêm không gian lưu trữ',
					},
					{
						pros: 'Cải thiện hiệu suất khi JOIN bảng lớn',
						cons: 'Làm chậm INSERT, UPDATE, DELETE do phải cập nhật index',
					},
					{
						pros: 'Giảm thời gian quét bảng (table scan)',
						cons: 'Nếu dùng quá nhiều index, có thể gây tác dụng ngược',
					},
				],
				b1: `CREATE TABLE Products (
    ProductID INT PRIMARY KEY, 
    Name VARCHAR(255),
    Price DECIMAL(10,2)
);
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-9' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
