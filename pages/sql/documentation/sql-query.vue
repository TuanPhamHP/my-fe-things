<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2 pl-2">
			<div class="grow page-data">
				<PageHeading text="Truy vấn SQL" addOnClass="text-left mt-5" markedAs="about-quuery" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					SQL (Structured Query Language) là ngôn ngữ chuẩn dùng để thao tác và truy vấn dữ liệu trong cơ sở dữ liệu
					quan hệ (RDBMS). SQL giúp người dùng có thể:
				</p>
				<ul class="pl-10 pt-0">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Lấy dữ liệu từ bảng.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Lọc, tính toán, nhóm và sắp xếp dữ liệu.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Kết hợp nhiều bảng dữ liệu và tổng hợp thông tin.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Giới hạn số dòng kết quả trả về....
					</li>
				</ul>
				<PageHeading text="Câu lệnh SELECT" addOnClass="text-left mt-5" markedAs="about-select" :lvl="1" />

				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>SELECT</b> là câu lệnh thuộc nhóm DQL, đây cũng là câu lệnh quan trọng nhất trong SQL, giúp lấy dữ liệu từ
					bảng. Chúng ta cũng có thể kết hợp các câu subquery các với SELECT để truy vấn dữ liệu theo mong muốn.
				</p>

				<PageHeading text="Basic" addOnClass="text-left h-0 opacity-0" markedAs="basic" :lvl="2" />
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>table_name</FilePath> Tên bảng chứa dữ liệu.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Truy vấn dữ liệu từ bảng <FilePath>Users</FilePath>
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<!-- DISTINCT  -->
				<PageHeading text="DISTINCT" addOnClass="text-left h-0 opacity-0" markedAs="with-distinct" :lvl="2" />
				<PageHeading text="DISTINCT - Loại bỏ dữ liệu trùng lặp" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>DISTINCT</b> là câu lệnh dùng để lấy các giá trị duy nhất trong một cột.
				</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>table_name</FilePath> Tên bảng chứa dữ liệu.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy danh sách các 'name' không trùng nhau từ bảng <FilePath>Users</FilePath>
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- WHERE  -->
				<PageHeading text="WHERE" addOnClass="text-left h-0 opacity-0" markedAs="with-where" :lvl="2" />
				<PageHeading text="WHERE - Loại bỏ dữ liệu trùng lặp" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>WHERE</b> giúp lọc dữ liệu dựa trên một hoặc nhiều điều kiện.
				</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>table_name</FilePath> Tên bảng chứa dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>condition</FilePath> Câu điều kiện.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy nhân viên có tuổi trên 30 từ bảng <FilePath>Users</FilePath>
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Như vậy, tuỳ vào cách viết <FilePath>condition</FilePath> mà chúng ta sẽ được các truy vấn khác nhau, chúng ta
					sẽ cùng liệt kê một số các toán tử dùng với <FilePath>WHERE</FilePath>:
				</p>
				<ul class="pl-5">
					<li
						v-for="item in whereConditions"
						:key="item.symbol"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
					>
						<span
							><FilePath>{{ item.symbol }}</FilePath> {{ item.desc }}.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1"><b>Advanced</b>: Giải thích đoạn query sau</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- ORDER BY  -->
				<PageHeading text="ORDER BY" addOnClass="text-left h-0 opacity-0" markedAs="with-order-by" :lvl="2" />
				<PageHeading text="ORDER BY - Sắp xếp dữ liệu" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>ORDER BY</b> giúp sắp xếp dữ liệu theo thứ tự tăng dần (ASC) hoặc giảm dần (DESC).
				</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b8" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>table_name</FilePath> Tên bảng chứa dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>[ASC | DESC]</FilePath> thứ tự muốn sắp xếp.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Sắp xếp nhân viên theo tuổi tăng dần.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b9" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- GROUP BY  -->
				<PageHeading text="GROUP BY" addOnClass="text-left h-0 opacity-0" markedAs="with-group-by" :lvl="2" />
				<PageHeading text="GROUP BY - Nhóm dữ liệu" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>GROUP BY</b> giúp nhóm dữ liệu theo một hoặc nhiều cột.
				</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b10" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>table_name</FilePath> Tên bảng chứa dữ liệu.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> sử dụng COUNT(*) để đếm số lượng bản ghi trong từng nhóm được tạo bởi GROUP BY.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b11" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- LIMIT  -->
				<PageHeading text="LIMIT" addOnClass="text-left h-0 opacity-0" markedAs="with-limit" :lvl="2" />
				<PageHeading text="LIMIT - Giới hạn số lượng kết quả" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8"><b>LIMIT</b> giúp giới hạn số dòng kết quả trả về.</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b12" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>LIMIT number</FilePath> số lượng bản ghi giới hạn trả về.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy 5 nhân viên có lương cao nhất
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b13" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- HAVING   -->
				<PageHeading text="HAVING" addOnClass="text-left h-0 opacity-0" markedAs="with-having" :lvl="2" />
				<PageHeading text="HAVING -  Lọc dữ liệu sau khi nhóm" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>HAVING</b> giúp lọc dữ liệu sau khi đã dùng GROUP BY.
				</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b14" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>column1, column2</FilePath> Tên các cột muốn lấy dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>condition</FilePath> Câu điều kiện.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy 5 nhân viên có lương cao nhất
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b15" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- UNION  -->
				<PageHeading text="UNION" addOnClass="text-left h-0 opacity-0" markedAs="with-union" :lvl="2" />
				<PageHeading text="UNION - Kết hợp nhiều truy vấn" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>UNION</b> giúp kết hợp kết quả từ nhiều câu truy vấn SELECT, với điều kiện các cột có cùng kiểu dữ liệu.
				</p>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />

				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b> Lấy danh sách khách hàng và nhân viên với cùng định dạng:
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b16" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Sử dụng <FilePath>UNION ALL</FilePath> để giữ lại các dữ liệu trùng lặp.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b17" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<!-- JOIN  -->
				<PageHeading text="JOIN" addOnClass="text-left h-0 opacity-0" markedAs="with-join" :lvl="2" />
				<PageHeading text="JOIN - Kết hợp nhiều truy vấn" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>JOIN</b> giúp kết hợp dữ liệu từ hai hoặc nhiều bảng dựa trên mối quan hệ giữa các cột. Chúng ta có 4 loại
					Join hay dùng:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>INNER JOIN</FilePath> Chỉ lấy những bản ghi có dữ liệu khớp ở cả hai bảng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><FilePath>LEFT JOIN</FilePath> Lấy tất cả bản ghi từ bảng bên trái, nếu bảng bên phải không có dữ liệu
							thì nhận <b>NULL</b>.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><FilePath>RIGHT JOIN</FilePath> Lấy tất cả bản ghi từ bảng bên phải, nếu bảng bên trái không có dữ liệu
							thì nhận <b>NULL</b>.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><FilePath>FULL JOIN</FilePath> Lấy tất cả bản ghi từ cả hai bảng.
							<br />
							<b>Lưu ý:</b> MySQL không hỗ trợ trực tiếp FULL JOIN. Nếu chúng ta đang dùng MySQL thì sẽ gặp lỗi khi chạy
							truy vấn với FULL JOIN. Cách thay thế trong MySQL là dùng LEFT JOIN kết hợp với RIGHT JOIN và UNION.</span
						>
					</li>
				</ul>
				<PageHeading text="Syntax cơ bản" addOnClass="text-left mt-5 text-lg" :lvl="3" />
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b18" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><FilePath>column_name(s)</FilePath> là tên các cột muốn lấy, nếu trong trường hợp 2 bảng của bạn có các
							cột trùng tên với nhau bạn có thể sử dụng phép gán <b>AS</b>.
							<br />
							VD: bạn muốn lấy cột <FilePath>id, name</FilePath> từ 2 bảng <FilePath>Employees</FilePath> và bảng
							<FilePath>Departments</FilePath> thì bạn có thể viết:
						</span>
						<div class="col-span-1">
							<VCodeBlock :code="b24" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>table1, table2</FilePath> là hai bảng muốn kết hợp.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>JOIN_TYPE</FilePath> là loại JOIN.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><FilePath>common_column</FilePath> là cột chung giữa hai bảng để kết hợp.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					<b>Ví dụ:</b>
				</p>
				<PageHeading text="INNER JOIN" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Lấy danh sách nhân viên và phòng ban tương ứng.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b19" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="LEFT JOIN" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Lấy danh sách nhân viên, kể cả khi họ chưa thuộc phòng ban nào.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b20" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="RIGHT JOIN" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Lấy danh sách tất cả phòng ban, kể cả khi chưa có nhân viên.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b21" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="FULL JOIN" addOnClass="text-left mt-5" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8 mb-1">
					Lấy tất cả nhân viên và tất cả phòng ban, kể cả khi không có dữ liệu tương ứng.
				</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b22" highlightjs lang="sql" theme="atom-one-dark" />
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
				whereConditions: [
					{ symbol: '=', desc: 'Bằng' },
					{ symbol: '<>', desc: 'Khác' },
					{ symbol: '!=', desc: 'Khác' },
					{ symbol: '>', desc: 'Lớn hơn' },
					{ symbol: '<', desc: 'Nhỏ hơn' },
					{ symbol: '>=', desc: 'Lớn hơn hoặc bằng' },
					{ symbol: '<=', desc: 'Nhỏ hơn hoặc bằng' },
					{ symbol: 'AND', desc: 'Kết hợp nhiều điều kiện' },
					{ symbol: 'OR', desc: 'Một trong các điều kiện đúng' },
					{ symbol: 'IN', desc: 'Kiểm tra giá trị thuộc danh sách' },
					{ symbol: 'LIKE', desc: 'Tìm kiếm theo mẫu' },
					{ symbol: 'BETWEEN', desc: 'Kiểm tra giá trị trong khoảng' },
				],
				b1: `SELECT column1, column2, ... 
FROM table_name;
`,
				b2: `
-- chỉ lấy name, email từ bảng Users
SELECT name, email FROM Users;
--  dấu * có nghĩa là lấy tất cả cột từ bảng
SELECT * FROM Users;
`,
				b3: `SELECT DISTINCT column_name FROM table_name;`,
				b4: `SELECT DISTINCT name FROM Users;`,
				b5: `SELECT column1, column2
FROM table_name
WHERE condition;`,
				b6: `SELECT * FROM Users WHERE age > 30;`,
				b7: `SELECT * FROM Users
WHERE (age BETWEEN 25 AND 40) 
AND department = 'Marketing' 
AND (name LIKE 'A%' OR name LIKE '%Nguyen');`,
				b8: `SELECT column1, column2 
FROM table_name
ORDER BY column_name [ASC | DESC];
`,
				b9: `SELECT * FROM Users ORDER BY age ASC;`,
				b10: `SELECT column_name, COUNT(*) 
FROM table_name
GROUP BY column_name;
`,
				b11: `SELECT age, COUNT(*) FROM Users GROUP BY age;`,
				b12: `SELECT column1, column2 FROM table_name LIMIT number;`,
				b13: `SELECT * FROM Users ORDER BY salary DESC LIMIT 5;`,
				b14: `SELECT column_name, aggregate_function
FROM table_name
GROUP BY column_name
HAVING condition;
`,
				b15: `SELECT department, COUNT(*) 
FROM Employees
GROUP BY department
HAVING COUNT(*) > 5;
`,
				b16: `SELECT name, email FROM Customers
UNION
SELECT name, email FROM Employees;
`,
				b17: `SELECT name, email FROM Customers
UNION ALL
SELECT name, email FROM Employees;
`,
				b18: `SELECT column_name(s)
FROM table1
JOIN_TYPE table2
ON table1.common_column = table2.common_column;
`,
				b19: `SELECT e.id, e.name, d.department_name
FROM Employees e
INNER JOIN Departments d
ON e.department_id = d.id;
`,
				b20: `SELECT e.id, e.name, d.department_name
FROM Employees e
LEFT JOIN Departments d
ON e.department_id = d.id;
`,
				b21: `SELECT e.id, e.name, d.department_name
FROM Employees e
RIGHT JOIN Departments d
ON e.department_id = d.id;
`,
				b22: `SELECT e.id, e.name, d.department_name
FROM Employees e
FULL JOIN Departments d
ON e.department_id = d.id;
`,
				b24: `SELECT e.id AS employee_id, e.name AS employee_name,
d.id AS department_id, d.name AS department_name
FROM Employees e
LEFT JOIN Departments d
ON e.department_id = d.id;
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-7' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
