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

				<!-- 1) Primary Index -->
				<PageHeading text="1) Primary Index" addOnClass="text-left mt-5" markedAs="clustered" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Là index mặc định khi tạo <b>PRIMARY KEY</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dữ liệu trong bảng được <b>lưu vật lý theo thứ tự index này</b> (Clustered Index)</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Mỗi bảng <b>chỉ có một</b> Clustered Index, tương ứng với khóa chính</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> <b>ProductID</b> chính là Clustered Index vì nó là khóa chính
				</p>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ thực tế:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Tìm theo <b>ProductID</b> (có Primary Index) cực nhanh dù bảng có triệu dòng. Tìm theo <b>Name</b> (chưa có
					index) buộc database phải quét từng dòng một.
				</p>

				<!-- 2) Secondary Index -->
				<PageHeading text="2) Secondary Index" addOnClass="text-left mt-5" markedAs="secondary" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Không thay đổi cách lưu trữ vật lý của bảng</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Có thể tạo nhiều Secondary Index trên một bảng</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Index lưu ở cấu trúc riêng, trỏ về vị trí dòng trong bảng chính</span>
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
					=> Câu lệnh trên tạo index giúp truy vấn theo cột <b>name</b> nhanh hơn
				</p>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">
					Ví dụ thực tế — EXPLAIN trước và sau khi có index:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Chỉ cần thêm một dòng <FilePath>CREATE INDEX</FilePath>, <b>rows</b> từ 500,000 giảm xuống còn 1 — database
					không cần quét toàn bộ bảng nữa.
				</p>

				<!-- 3) Unique Index -->
				<PageHeading text="3) Unique Index" addOnClass="text-left mt-5" markedAs="unique" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Đảm bảo giá trị trong cột là <b>duy nhất</b> (không có 2 dòng có cùng giá trị)</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Tự động tạo khi khai báo ràng buộc <b>UNIQUE</b> trên cột</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Vừa tăng tốc truy vấn vừa bảo vệ tính toàn vẹn dữ liệu</span>
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
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Index này vừa ngăn trùng lặp email, vừa tăng tốc truy vấn tìm user theo <b>email</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">
					Ví dụ thực tế — Unique constraint hoạt động như thế nào:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- 4) Composite Index -->
				<PageHeading text="4) Composite Index" addOnClass="text-left mt-5" markedAs="composite" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Index trên <b>nhiều cột</b> cùng lúc</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Thứ tự cột quan trọng — cột đầu tiên là quan trọng nhất
							<b>(Leftmost Prefix Rule)</b></span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Phù hợp khi hay query kết hợp nhiều điều kiện WHERE cùng lúc</span>
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
					=> Tăng tốc truy vấn khi tìm kiếm theo cả <b>name</b> và <b>email</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">
					Ví dụ thực tế — Leftmost Prefix Rule (cần nhớ kỹ):
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Composite index <b>chỉ phát huy tác dụng</b> khi query bắt đầu từ cột đầu tiên trong index. Bỏ qua cột đầu
					→ Full Table Scan.
				</p>

				<!-- 5) Full-Text Index -->
				<PageHeading text="5) Full-Text Index" addOnClass="text-left mt-5" markedAs="full-text" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dùng để tìm kiếm văn bản (các cột kiểu <b>TEXT</b>, <b>VARCHAR</b>)</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Thường dùng trong các hệ thống Search Engine nội bộ</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Dùng với cú pháp <b>MATCH ... AGAINST</b> thay vì <b>LIKE '%...%'</b></span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock
							:code="`CREATE FULLTEXT INDEX idx_content ON articles(title, content);`"
							highlightjs
							lang="sql"
							theme="atom-one-dark"
						/>
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Tăng tốc tìm kiếm văn bản trong bảng lưu bài viết, mô tả sản phẩm, bình luận,...
				</p>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">
					Ví dụ thực tế — MATCH AGAINST vs LIKE:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> <FilePath>LIKE '%keyword%'</FilePath> không bao giờ dùng được index. Với bảng lớn hãy luôn dùng
					<FilePath>MATCH ... AGAINST</FilePath>.
				</p>

				<!-- 6) Filtered / Partial Index -->
				<PageHeading text="6) Filtered Index" addOnClass="text-left mt-5" markedAs="Partial " :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>MySQL không có Filtered Index như PostgreSQL, nhưng có thể giả lập bằng cách tạo index trên
							<b>(status, id)</b> để tối ưu truy vấn lọc theo status</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Hữu ích khi chỉ muốn index một <b>tập con</b> nhỏ dữ liệu (ví dụ: đơn hàng chưa xử lý)</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> Index trên <b>(status, id)</b> giúp truy vấn pending orders chỉ scan đúng tập dữ liệu cần, không quét toàn
					bảng
				</p>

				<!-- Quản lý Index -->
				<PageHeading text="Quản lý Index" addOnClass="text-left mt-5" markedAs="crud-index" :lvl="1" />
				<PageHeading text="Kiểm tra Index" addOnClass="text-left mt-5" markedAs="index-check" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Kiểm tra tất cả Index đang có trong một bảng</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="`SHOW INDEX FROM orders;`" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-4 leading-8">
					Xem query plan và Index nào đang được dùng khi thực thi truy vấn
				</p>
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
				<p class="text-slate-900 dark:text-white mt-4 leading-8">
					Đọc hiểu các cột quan trọng trong kết quả <b>EXPLAIN</b>:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b8" highlightjs lang="sql" theme="atom-one-dark" />
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

				<!-- Demo: Index vs No Index -->
				<PageHeading
					text="Demo thực tế: Có Index vs Không có Index"
					addOnClass="text-left mt-5"
					markedAs="demo-index"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Phần này tạo bảng <b>orders_demo</b> với <b>1 triệu dòng</b>, rồi so sánh tốc độ truy vấn trước và sau khi
					thêm index để thấy sự khác biệt rõ ràng.
				</p>

				<PageHeading
					text="Bước 1 — Tạo bảng và seed 1 triệu dòng"
					addOnClass="text-left mt-5"
					markedAs="demo-seed"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chạy file seed <FilePath>seeds/sql/orders_demo.sql</FilePath> để tạo bảng và insert 1 triệu dòng. File dùng
					<b>batch insert 1000 dòng/lần</b> qua <FilePath>CROSS JOIN</FilePath> trên numbers table — hoàn thành trong
					~5-10 giây thay vì timeout.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bSeedCreate" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading
					text="Bước 2 — Truy vấn khi CHƯA có index"
					addOnClass="text-left mt-5"
					markedAs="demo-no-index"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chạy <b>EXPLAIN</b> để thấy database đang làm gì khi tìm theo <b>customer_id</b>:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bSeedNoIndex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					=> <FilePath>type = ALL</FilePath> là dấu hiệu xấu nhất — database phải đọc qua gần <b>1 triệu dòng</b> chỉ để
					tìm ~10 đơn hàng.
				</p>

				<PageHeading
					text="Bước 3 — Tạo index rồi truy vấn lại"
					addOnClass="text-left mt-5"
					markedAs="demo-with-index"
					:lvl="2"
				/>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bSeedAddIndex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Chạy lại đúng câu query, EXPLAIN thay đổi hoàn toàn:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="bSeedWithIndex" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Tổng kết so sánh:</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Tiêu chí</th>
							<th scope="col" class="px-5 py-3">Không có Index</th>
							<th scope="col" class="px-5 py-3">Có Index</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in demoCompare"
							:key="item.label"
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td class="px-5 py-4 font-medium text-gray-900 dark:text-white">{{ item.label }}</td>
							<td class="px-5 py-4 text-red-500">{{ item.without }}</td>
							<td class="px-5 py-4 text-green-500">{{ item.with }}</td>
						</tr>
					</tbody>
				</table>

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
				demoCompare: [
					{
						label: 'Loại scan (type)',
						without: 'ALL — Full Table Scan',
						with: 'ref — Index Scan',
					},
					{
						label: 'Index được dùng (key)',
						without: 'NULL — không dùng index nào',
						with: 'idx_customer_id',
					},
					{
						label: 'Số dòng ước tính (rows)',
						without: '~1,000,000 dòng',
						with: '~10 dòng',
					},
					{
						label: 'Thời gian thực thi (EXPLAIN ANALYZE)',
						without: '~452ms',
						with: '~0.038ms (nhanh hơn ~12,000 lần)',
					},
				],
				b1: `CREATE TABLE products (
    ProductID INT PRIMARY KEY,
    Name      VARCHAR(255),
    Price     DECIMAL(10,2)
);`,
				b2: `-- Tìm theo PRIMARY KEY → cực nhanh, dù bảng có triệu dòng
SELECT * FROM products WHERE ProductID = 999;
-- Database nhảy thẳng đến đúng vị trí dòng này (B-Tree lookup)

-- Tìm theo cột KHÔNG có index → chậm
SELECT * FROM products WHERE Name = 'Laptop Dell XPS';
-- Database phải đọc từng dòng từ đầu đến cuối (Full Table Scan)`,
				b3: `-- Giả sử bảng users có 500,000 dòng

-- TRUOC KHI có index trên email:
EXPLAIN SELECT * FROM users WHERE email = 'alice@example.com';
-- type: ALL   -> Full Table Scan (quét 500,000 dòng!)
-- key:  NULL  -> Không dùng index nào
-- rows: 498752

-- Tạo Secondary Index:
CREATE INDEX idx_user_email ON users(email);

-- SAU KHI có index:
EXPLAIN SELECT * FROM users WHERE email = 'alice@example.com';
-- type: ref          -> Dùng index, cực nhanh
-- key:  idx_user_email
-- rows: 1            -> Chỉ xét đúng 1 dòng!`,
				b4: `-- Tạo bảng với Unique Index trên email
CREATE TABLE users (
    id    INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL
);
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Lần đầu insert → thành công
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

-- Lần hai insert cùng email → LỖI ngay lập tức!
INSERT INTO users (name, email) VALUES ('Bob', 'alice@example.com');
-- ERROR 1062 (23000): Duplicate entry 'alice@example.com'
--                     for key 'idx_unique_email'

-- Tìm kiếm theo email cũng rất nhanh nhờ index:
SELECT * FROM users WHERE email = 'alice@example.com';  -- dùng idx_unique_email`,
				b5: `-- Composite Index trên (customer_id, order_date)
CREATE INDEX idx_cust_date ON orders(customer_id, order_date);

-- OK - Dùng được index (có cột đầu tiên customer_id)
SELECT * FROM orders WHERE customer_id = 5 AND order_date = '2024-01-15';
SELECT * FROM orders WHERE customer_id = 5;   -- vẫn dùng được

-- OK - Dùng được index một phần với range
SELECT * FROM orders WHERE customer_id = 5 AND order_date > '2024-01-01';

-- KHÔNG dùng được index (thiếu cột đầu tiên)
SELECT * FROM orders WHERE order_date = '2024-01-15';
-- -> Database bỏ qua idx_cust_date, phải Full Table Scan!

-- Quy tắc: index (A, B, C) hỗ trợ query theo A, (A,B), (A,B,C)
-- nhưng KHÔNG hỗ trợ query chỉ theo B hoặc C`,
				b6: `-- Tạo Full-Text Index trên cả title và content
CREATE FULLTEXT INDEX idx_articles ON articles(title, content);

-- OK - MATCH AGAINST -> dùng Full-Text Index, hỗ trợ relevance ranking
SELECT id, title,
       MATCH(title, content) AGAINST('JavaScript framework') AS score
FROM articles
WHERE MATCH(title, content) AGAINST('JavaScript framework')
ORDER BY score DESC
LIMIT 10;

-- KHÔNG dùng được index, cực kỳ chậm với bảng lớn
SELECT * FROM articles WHERE content LIKE '%JavaScript framework%';
-- Full Table Scan + đọc từng ký tự của từng dòng
-- Với 1 triệu bài viết: có thể mất vài giây!

-- Bonus: MATCH AGAINST IN BOOLEAN MODE (tìm kiếm nâng cao)
SELECT * FROM articles
WHERE MATCH(title, content) AGAINST('+JavaScript -PHP' IN BOOLEAN MODE);
-- Tìm bài có "JavaScript" và KHÔNG có "PHP"`,
				b7: `-- Tình huống: bảng orders có 1 triệu dòng
-- Chỉ ~5% đơn hàng đang ở trạng thái 'pending'

-- Tạo Composite Index trên (status, id)
-- -> tối ưu cho truy vấn lọc theo status
CREATE INDEX idx_status_id ON orders(status, id);

-- Truy vấn pending orders tận dụng index hiệu quả
SELECT * FROM orders
WHERE status = 'pending'
ORDER BY id;

-- So sánh: không có index -> quét toàn bộ 1 triệu dòng
-- Có index (status, id)   -> chỉ scan ~50,000 dòng pending

-- PostgreSQL hỗ trợ Partial Index trực tiếp (gọn hơn):
-- CREATE INDEX idx_pending ON orders(id) WHERE status = 'pending';
-- -> Index chỉ lưu dòng có status = 'pending', nhỏ gọn hơn nhiều`,
				b8: `-- Doc query plan chi tiết bang EXPLAIN
EXPLAIN SELECT * FROM orders WHERE customer_id = 5 AND order_date > '2024-01-01';

-- Cac cot quan trong trong output:
--
-- [type]  -- loai scan (quan trong nhat!)
--   const  : tim theo PK/Unique, chi 1 ket qua -> nhanh nhat
--   eq_ref : join 1-1 dung index unique
--   ref    : dung non-unique index thuong
--   range  : quet khoang index (WHERE id > 100, BETWEEN...)
--   index  : quet toan bo cay index (cham hon ref)
--   ALL    : Full Table Scan -> can them index!
--
-- [key]   -- index dang duoc dung (NULL = khong dung index nao)
--
-- [rows]  -- so dong uoc tinh phai quet, cang nho cang tot
--
-- [Extra] -- thong tin bo sung:
--   Using index     : covering index, chi can doc tu index
--   Using where     : loc them sau khi dung index
--   Using filesort  : phai sort ngoai (ton RAM, nen them index)
--   Using temporary : dung bang tam (ton kem, thuong gap voi GROUP BY)`,
				bSeedCreate: `-- Buoc 1: Tao bang demo
CREATE TABLE orders_demo (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT           NOT NULL,
    product     VARCHAR(100)  NOT NULL,
    amount      DECIMAL(10,2) NOT NULL,
    status      ENUM('pending', 'processing', 'shipped', 'delivered') NOT NULL,
    created_at  DATETIME      NOT NULL
) ENGINE=InnoDB;

-- Buoc 2: Tao Stored Procedure - batch insert 1000 dong/lan
-- insert tung dong mot -> 1,000,000 vong lap -> timeout
-- batch insert 1000 dong/lan -> chi 1,000 vong lap -> nhanh hon ~1000 lan
DELIMITER $$
CREATE PROCEDURE sp_seed_demo(IN total INT)
BEGIN
    DECLARE i INT DEFAULT 0;
    SET autocommit = 0;

    WHILE i < total DO
        -- Moi iteration insert 1000 dong bang cach SELECT tu numbers table
        INSERT INTO orders_demo (customer_id, product, amount, status, created_at)
        SELECT
            FLOOR(RAND() * 100000) + 1,
            ELT(FLOOR(RAND() * 5) + 1, 'Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'),
            ROUND(RAND() * 9900 + 100, 2),
            ELT(FLOOR(RAND() * 4) + 1, 'pending', 'processing', 'shipped', 'delivered'),
            DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 730) DAY)
        FROM (
            SELECT a.N + b.N * 10 + c.N * 100 AS n
            FROM (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                  UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a
            CROSS JOIN (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                        UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b
            CROSS JOIN (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                        UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
        ) nums;

        SET i = i + 1000;

        -- Commit moi 100,000 dong, tranh transaction qua lon
        IF MOD(i, 100000) = 0 THEN
            COMMIT;
        END IF;
    END WHILE;

    COMMIT;
    SET autocommit = 1;
END$$
DELIMITER ;

-- Buoc 3: Reset neu da seed truoc do, roi chay lai
TRUNCATE TABLE orders_demo;

-- Hoan thanh trong ~5-10 giay
CALL sp_seed_demo(1000000);

-- Kiem tra ket qua
SELECT COUNT(*) FROM orders_demo;  -- 1,000,000`,
				bSeedNoIndex: `-- CHUA CO INDEX tren customer_id
-- (chi co PRIMARY KEY tren id)
SHOW INDEX FROM orders_demo;
-- Key_name: PRIMARY   Column_name: id

-- Xem uoc tinh bang EXPLAIN
EXPLAIN SELECT * FROM orders_demo WHERE customer_id = 42;
-- type  = ALL    -> FULL TABLE SCAN
-- key   = NULL   -> Khong dung index nao
-- rows  = 996241 -> Uoc tinh quet ~1 trieu dong

-- Do thoi gian thuc te bang EXPLAIN ANALYZE (MySQL 8.0.18+)
EXPLAIN ANALYZE SELECT * FROM orders_demo WHERE customer_id = 42;
-- Ket qua:
-- -> Filter: (orders_demo.customer_id = 42)  (cost=99823.45 rows=10)
--      -> Table scan on orders_demo
--         (cost=99823.45 rows=996241)
--         (actual time=0.051..452.318 rows=1000000 loops=1)
--
-- "actual time=0.051..452.318" -> mat ~452ms de quet het bang!
--
-- Hoac don gian hon: chay query roi xem tab Output o phia duoi Workbench
-- Duration / Fetch: 0.452 sec / 0.000 sec`,
				bSeedAddIndex: `-- Them index tren customer_id
CREATE INDEX idx_customer_id ON orders_demo(customer_id);

-- Kiem tra index vua tao
SHOW INDEX FROM orders_demo;
-- Key_name: PRIMARY        Column_name: id
-- Key_name: idx_customer_id  Column_name: customer_id`,
				bSeedWithIndex: `-- SAU KHI CO INDEX

-- Xem uoc tinh bang EXPLAIN
EXPLAIN SELECT * FROM orders_demo WHERE customer_id = 42;
-- type  = ref             -> Dung Index (khong con Full Table Scan!)
-- key   = idx_customer_id -> Index dang duoc su dung
-- rows  = 10              -> Chi can xem qua ~10 dong!

-- Do thoi gian thuc te bang EXPLAIN ANALYZE (MySQL 8.0.18+)
EXPLAIN ANALYZE SELECT * FROM orders_demo WHERE customer_id = 42;
-- Ket qua:
-- -> Index lookup on orders_demo using idx_customer_id (customer_id=42)
--    (cost=3.51 rows=10)
--    (actual time=0.031..0.038 rows=10 loops=1)
--
-- "actual time=0.031..0.038" -> chi mat ~0.038ms!
-- Nhanh hon ~12,000 lan so voi khong co index (452ms vs 0.038ms)
--
-- Hoac don gian hon: chay query roi xem tab Output o phia duoi Workbench
-- Duration / Fetch: 0.000 sec / 0.000 sec`,
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
