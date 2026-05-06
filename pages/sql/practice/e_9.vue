<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Bài tập 1: Thiết kế và triển khai Database</p>

		<p className="text-slate-900 dark:text-white mt-2 text-2xl">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Bạn được giao nhiệm vụ xây dựng hệ thống quản lý thư viện. Hãy thực hiện các yêu cầu sau:
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-2xl">
			<b>Yêu cầu:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>1 - INIT DB (5đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo cơ sở dữ liệu có tên <b>LibraryManagement</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo các bảng với cấu trúc sau:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>books</b>: (id, title, author, publication_year, category_id).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>categories</b>: (id, name).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>members</b>: (id, name, email, phone, join_date).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>borrow_records</b>: (id, member_id, book_id, borrow_date, return_date).
					</li>
				</ul>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Thiết lập các ràng buộc:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi cuốn sách thuộc một danh mục <b>(books.category_id → categories.id)</b>.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi lượt mượn sách phải gắn với một thành viên và một cuốn sách <br />
						<b>(borrow_records.member_id → members.id, borrow_records.book_id → books.id)</b>.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Một thành viên có thể mượn nhiều sách, nhưng mỗi lần chỉ mượn tối đa 3 quyển.
					</li>
				</ul>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>2 - Truy vấn dữ liệu cơ bản(6đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Lấy danh sách tất cả <b>sách kèm theo tên danh mục của chúng.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Lấy danh sách tất cả <b>thành viên và số lượng sách họ đã mượn.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Tìm cuốn sách <b>được mượn nhiều nhất.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				4. Tìm thành viên <b> mượn nhiều sách nhất.</b>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg pl-5">
			<b>Lưu ý:</b> tách riêng file có tên <FilePath>query_example.sql</FilePath> Hoặc thêm comment đề bài vào trên đầu
			các lệnh
		</p>

		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>3 - View & Stored Procedure(5đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo một View có tên <b>view_borrowed_books</b>, hiển thị danh sách mượn sách với thông tin:
				<FilePath> tên sách, tên thành viên, ngày mượn, ngày trả.</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo một Stored Procedure <b>sp_get_books_by_category</b> nhận vào id của một danh mục(category) và trả ra
				danh sách các cuốn sách thuộc danh mục đó
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg pl-5">
			<b>Lưu ý:</b> tách riêng file có tên <FilePath>views_and_procedures.sql</FilePath> Hoặc thêm comment đề bài vào
			trên đầu các lệnh
		</p>

		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>4 - Trigger(4đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Viết một Trigger <b>tr_check_borrow_limit</b>, để ngăn một thành viên mượn sách nếu họ đã mượn đủ 3 quyển.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Viết một Trigger <b>tr_new_book_logs</b>, ghi lại log khi thêm một cuốn sách <b>books_logs</b> gồm
				<b>id, log_time, book_id</b>.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg pl-5">
			<b>Lưu ý:</b> tách riêng file có tên <FilePath>triggers.sql</FilePath> Hoặc thêm comment đề bài vào trên đầu các
			lệnh
		</p>

		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>ERD:</b>
		</p>
		<div class="bg-neutral-100 px-5 py-1 my-2 rounded">
			<img src="@/assets/images/documentation/sql-e-9.png" alt="" class="rounded-lg mt-3 block" />
		</div>

		<p className="text-slate-900 dark:text-white mt-2 pl-0">
			<b>Seed Data:</b>
		</p>
		<FakeTerminalUI :text-coppy="seed_data">
			<p>seed_data.sql</p>
		</FakeTerminalUI>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
	import { usePagination } from '@/composables/usePagination';
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
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		setup() {
			return usePagination('practice', 'sql-9', 'sql')
		},
		data() {
			return {
				seed_data: `-- Xóa dữ liệu cũ để tránh trùng lặp
DELETE FROM borrowings;
DELETE FROM books;
DELETE FROM categories;
DELETE FROM members;

-- Reset AUTO_INCREMENT
ALTER TABLE borrowings AUTO_INCREMENT = 1;
ALTER TABLE books AUTO_INCREMENT = 1;
ALTER TABLE categories AUTO_INCREMENT = 1;
ALTER TABLE members AUTO_INCREMENT = 1;

-- Thêm dữ liệu vào bảng categories (5 danh mục sách)
INSERT INTO categories (name) VALUES
('Khoa học'),
('Lịch sử'),
('Văn học'),
('Công nghệ'),
('Kinh tế');

-- Thêm dữ liệu vào bảng books (10 cuốn sách)
INSERT INTO books (title, author, published_year, category_id) VALUES
('Vũ trụ trong vỏ hạt dẻ', 'Stephen Hawking', 2001, 1),
('Lược sử thời gian', 'Stephen Hawking', 1988, 1),
('Sử Việt', 'Dương Trung Quốc', 2017, 2),
('Lịch sử thế giới', 'Will Durant', 1950, 2),
('Truyện Kiều', 'Nguyễn Du', 1815, 3),
('Đắc nhân tâm', 'Dale Carnegie', 1936, 3),
('Clean Code', 'Robert C. Martin', 2008, 4),
('The Pragmatic Programmer', 'Andy Hunt & Dave Thomas', 1999, 4),
('Quốc gia khởi nghiệp', 'Dan Senor', 2009, 5),
('Chiến lược đại dương xanh', 'W. Chan Kim', 2005, 5);

-- Thêm dữ liệu vào bảng members (5 thành viên)
INSERT INTO members (name, email, phone) VALUES
('Nguyễn Văn A', 'nguyenvana@example.com', '0123456789'),
('Trần Thị B', 'tranthib@example.com', '0987654321'),
('Lê Hoàng C', 'lehoangc@example.com', '0912345678'),
('Phạm Hữu D', 'phamhuud@example.com', '0934567890'),
('Hoàng Thanh E', 'hoangthanhe@example.com', '0967890123');

-- Thêm dữ liệu vào bảng borrowings (10 lượt mượn sách)
INSERT INTO borrowings (member_id, book_id, borrow_date, return_date) VALUES
(1, 1, '2024-03-01', '2024-03-15'),
(2, 3, '2024-03-02', NULL),
(3, 5, '2024-03-05', '2024-03-20'),
(4, 7, '2024-03-06', NULL),
(5, 9, '2024-03-08', '2024-03-22'),
(1, 2, '2024-03-10', NULL),
(2, 4, '2024-03-12', '2024-03-26'),
(3, 6, '2024-03-15', NULL),
(4, 8, '2024-03-17', '2024-03-31'),
(5, 10, '2024-03-20', NULL);
`,
				counter: 0,
			};
		},
		computed: {},
		methods: {},
	};
</script>
