<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Các kiểu dữ liệu trong SQL" addOnClass="text-left" markedAs="sql-data-types" />
				<div v-for="k in tables" :key="k.type">
					<PageHeading :text="k.title" addOnClass="text-left mt-5" :markedAs="k.markedAs" :lvl="2" />
					<p class="text-slate-900 dark:text-white mt-0 leading-8">{{ k.description }}</p>
					<div class="border rounded overflow-hidden my-2">
						<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
								<tr>
									<th scope="col" class="px-5 py-3">Kiểu dữ liệu</th>
									<th scope="col" class="px-5 py-3">Miêu tả</th>
									<th scope="col" class="px-5 py-3">Ví dụ</th>
									<th scope="col" class="px-5 py-3">Syntax</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(item, idx) in k.items"
									:key="idx + item.name"
									class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								>
									<td class="px-5 py-3">
										<FilePath>{{ item.name }}</FilePath>
									</td>
									<td class="px-5 py-3 text-black">
										{{ item.description }}
									</td>
									<td class="px-5 py-3 text-black">
										<b>{{ item.example }}</b>
									</td>
									<td class="px-5 py-3">
										<FilePath>{{ item.syntax }}</FilePath>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<PageHeading text="Thao tác với bảng" addOnClass="text-left" markedAs="manipulate-table" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Đầu tiên, chúng ta sẽ cùng tìm hiểu các cách cơ bản để thao tác cùng <b>bảng</b> trong DB với câu lệnh SQL.
				</p>
				<PageHeading text="Tạo bảng (CREATE TABLE)" addOnClass="text-left my-2" markedAs="create-table" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sử dụng Câu lệnh <FilePath>CREATE TABLE</FilePath> dùng để tạo một bảng mới trong cơ sở dữ liệu. Bạn cần chỉ
					định tên bảng và định nghĩa các cột trong bảng cùng kiểu dữ liệu tương ứng.
					<br />
					<b>Syntax:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b1" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b2" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white my-0 leading-8">
					<b>Trong đó:</b>
				</p>
				<ul class="pl-10 pt-0">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>id</FilePath>: Cột lưu trữ ID người dùng, kiểu INT, làm khóa chính (PRIMARY KEY).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>name</FilePath>: Cột lưu trữ tên người dùng, kiểu VARCHAR với tối đa 100 ký tự.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>email</FilePath>: Cột lưu trữ email, kiểu VARCHAR, có ràng buộc UNIQUE để đảm bảo mỗi email là duy
						nhất.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>birthdate</FilePath>: Cột lưu trữ ngày sinh của người dùng, kiểu DATE.
					</li>
				</ul>
				<br />
				<PageHeading
					text="Thay đổi cấu trúc bảng (ALTER TABLE)"
					addOnClass="text-left"
					markedAs="alter-table"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<FilePath>ALTER TABLE</FilePath>: dùng để thay đổi cấu trúc bảng đã tồn tại, sau đó chúng ta có thể thao tác
					thêm, sửa, xoá với các cột trong bảng bằng cách sử dụng các lệnh kèm theo như <FilePath>ADD COLUMN</FilePath>,
					<FilePath>DROP COLUMN</FilePath>, <FilePath>RENAME COLUMN</FilePath>,
					<FilePath>ALTER/MODIFY DATATYPE</FilePath>,

					<br />
					<b>Syntax:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b3" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b4" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<PageHeading text="Xóa bảng (DROP TABLE)" addOnClass="text-left" markedAs="drop-table" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Câu lệnh <FilePath>DROP TABLE</FilePath> dùng để xóa hoàn toàn bảng và tất cả dữ liệu trong bảng đó.
					<br />
					<b>Syntax:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b11" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b12" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<PageHeading
					text="Thao tác với dữ liệu trong bảng"
					addOnClass="text-left"
					markedAs="manipulate-tuples"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Phần tiếp theo chúng ta sẽ cùng tìm hiểu các cách cơ bản để thao tác với các
					<b>dữ liệu trong bảng (row, tuple ...)</b>
					với câu lệnh SQL.
				</p>
				<PageHeading
					text="Thêm dữ liệu vào bảng (INSERT INTO)"
					addOnClass="text-left"
					markedAs="insert-tuples"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Câu lệnh <FilePath>INSERT INTO</FilePath> dùng để chèn dữ liệu mới vào bảng.
					<br />
					<b>Syntax:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b5" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b6" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>

				<PageHeading text="Sửa dữ liệu trong bảng (UPDATE)" addOnClass="text-left" markedAs="update-tuples" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Cặp lệnh <FilePath>UPDATE</FilePath> và <FilePath>SET</FilePath> dùng để sửa đổi các giá trị đã có trong bảng.
					<br />
					<b>Syntax:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b7" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b8" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<PageHeading text="Xóa dữ liệu trong bảng (DELETE)" addOnClass="text-left" markedAs="delete-tuples" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Câu lệnh <FilePath>DELETE</FilePath> dùng để xóa các bản ghi trong bảng.
					<br />
					<b>Syntax:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b9" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Ví dụ:</b>
				</p>
				<div class="py-2">
					<ClientOnly>
						<VCodeBlock :code="b10" highlightjs lang="sql"></VCodeBlock>
					</ClientOnly>
				</div>

				<p class="col-span-1 text-slate-900 dark:text-white my-2 lg:text-3xl font-bold">Tổng kết</p>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					Chúng ta cùng tổng kết bài học:
					<br />
					<br />
					<b>Thao tác với bảng</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>CREATE TABLE</FilePath>: Tạo bảng
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>ALTER TABLE</FilePath>: Chỉnh sửa bảng
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>DROP TABLE</FilePath>: Xoá bảng
					</li>
				</ul>
				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					<b>Thao tác với dữ liệu</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>INSERT INTO</FilePath>: Chèn dữ liệu
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>UPDATE</FilePath>, <FilePath>SET</FilePath>: Chỉnh sửa dữ liệu
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>DELETE</FilePath>: Xoá dữ liệu
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
				tables: [
					{
						type: 'numeric',
						title: 'Dữ liệu dạng số',
						markedAs: 'numeric',
						description:
							'Dùng để lưu trữ các giá trị số nguyên và số thực, thường được sử dụng cho ID, số lượng, giá cả,...',
						items: [
							{
								name: 'INT',
								description: 'Số nguyên, thường dùng cho ID hoặc số lượng',
								example: '10, -5, 1000',
								syntax: 'age INT;',
							},
							{
								name: 'BIGINT',
								description: 'Số nguyên lớn, dùng cho dữ liệu lớn như số tài khoản ngân hàng',
								example: '9223372036854775807',
								syntax: 'big_number BIGINT;',
							},
							{
								name: 'DECIMAL(p,s)',
								description: 'Số thập phân có độ chính xác cao, thường dùng cho giá tiền',
								example: '10.25, 99.99',
								syntax: 'price DECIMAL(10,2);',
							},
							{
								name: 'FLOAT',
								description: 'Số thực, dùng cho dữ liệu yêu cầu dấu thập phân nhưng không cần quá chính xác',
								example: '3.14, -0.002',
								syntax: 'temperature FLOAT;',
							},
						],
					},
					{
						type: 'string',
						title: 'Dữ liệu dạng chuỗi',
						markedAs: 'string',
						description: 'Dùng để lưu trữ văn bản, tên, mô tả sản phẩm, email,...',
						items: [
							{
								name: 'VARCHAR(n)',
								description: 'Chuỗi có độ dài tối đa n, dùng cho tên, email',
								example: "'John', 'SQL'",
								syntax: 'name VARCHAR(100);',
							},
							{
								name: 'TEXT',
								description: 'Chuỗi dài (không giới hạn), dùng cho mô tả bài viết',
								example: "'Đoạn văn bản dài...'",
								syntax: 'description TEXT;',
							},
							{
								name: 'CHAR(n)',
								description: 'Chuỗi cố định n ký tự, thường dùng cho mã quốc gia, mã sản phẩm',
								example: "'ABC', 'VN'",
								syntax: 'code CHAR(3);',
							},
						],
					},
					{
						type: 'datetime',
						title: 'Dữ liệu dạng ngày tháng',
						markedAs: 'datetime',
						description: 'Dùng để lưu trữ ngày, giờ, thời gian tạo đơn hàng, thời gian đặt lịch,...',
						items: [
							{
								name: 'DATE',
								description: 'Lưu ngày (YYYY-MM-DD), thường dùng cho ngày sinh',
								example: "'2025-02-18'",
								syntax: 'birthdate DATE;',
							},
							{
								name: 'TIME',
								description: 'Lưu giờ (HH:MM:SS), dùng cho giờ làm việc, lịch hẹn',
								example: "'14:30:00'",
								syntax: 'event_time TIME;',
							},
							{
								name: 'DATETIME',
								description: 'Lưu ngày & giờ, dùng cho thời gian tạo đơn hàng, thời gian đăng nhập',
								example: "'2025-02-18 14:30:00'",
								syntax: 'created_at DATETIME DEFAULT CURRENT_TIMESTAMP;',
							},
						],
					},
				],
				b1: `CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  ...
);
`,
				b2: `CREATE TABLE Users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  birthdate DATE
);
`,
				b3: `ALTER TABLE table_name ADD COLUMN column_name datatype;
					DROP COLUMN column_name;
					RENAME COLUMN old_name to new_name;
					ALTER COLUMN column_name datatype;
					MODIFY COLUMN column_name datatype;
`,
				b4: `ALTER TABLE Users ADD COLUMN phone VARCHAR(15);`,
				b5: `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);`,
				b6: `INSERT INTO Users (id, name, email, birthdate) 
VALUES (1, 'John Doe', 'john.doe@example.com', '1990-05-15');`,
				b7: `UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;`,
				b8: `UPDATE Users SET name = 'Jane Doe' WHERE id = 1;`,
				b9: `DELETE FROM table_name WHERE condition;`,
				b10: `DELETE FROM Users WHERE id = 1;`,
				b11: `DROP TABLE table_name;`,
				b12: `DROP TABLE Users;`,
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
