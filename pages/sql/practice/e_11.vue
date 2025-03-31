<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<!-- <div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div> -->
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Thiết kế và triển khai Database</p>

		<p className="text-slate-900 dark:text-white mt-2 text-2xl">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Bạn được giao nhiệm vụ xây dựng hệ thống quản lý trung tâm học lập trình. Hãy thực hiện các yêu cầu sau:
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-2xl">
			<b>Yêu cầu:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>1 - INIT DB (5đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo cơ sở dữ liệu có tên <b>coding_center_management</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo các bảng với cấu trúc sau:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>students</b>: (id, name, email, phone, join_date).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>instructors</b>: (id, name, expertise, phone, email).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>courses</b>: (id, name, instructor_id, schedule, max_students).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>enrollments</b>: (id, student_id, course_id, enroll_date).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>payments</b>: (id, student_id, amount, payment_date, method).
					</li>
				</ul>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Thiết lập các ràng buộc:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi học viên có thể đăng ký nhiều khóa học, và mỗi khóa học có thể có nhiều học viên.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi khóa học do một giảng viên phụ trách.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi hội viên phải thanh toán phí tập luyện.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Số lượng học viên đăng ký không được vượt quá <b>max_students</b> của lớp.
					</li>
				</ul>
			</li>
		</ul>
		<div class="page-break"></div>
		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>2 - Truy vấn dữ liệu cơ bản(6đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Lấy danh sách tất cả học viên gồm<b> id, tên kèm theo số lượng khoá học họ đã đăng ký.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tìm <b>khóa học có ít học viên đăng ký nhất.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Tìm <b>học viên chi tiêu nhiều nhất (tổng tiền thanh toán cao nhất).</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				4. Tính tổng doanh thu <b>trong năm 2025.</b>
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
				1. Tạo một View có tên <b>view_courses_student</b>, hiển thị danh sách khoá học gồm
				<b>id, tên_khoá_học, số_học_viên, tên_giảng_viên</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo một Stored Procedure <b>sp_get_courses_by_instructor</b> nhận vào id giảng viên (instructor) và trả về
				danh sách các khóa học mà họ giảng dạy.
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
				1. Viết một Trigger <b>tr_check_course_capacity</b>, để ngăn việc đăng ký khóa học nếu đã đủ số lượng học viên.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Viết một Trigger <b>tr_enrollment_logs</b>, ghi lại log khi có học viên đăng ký khóa học vào bảng
				<b>enrollment_logs</b> <b>registration_logs</b> gồm <b>id, log_time, student_id, course_id, action</b>.
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 text-lg pl-5">
			<b>Lưu ý:</b> tách riêng file có tên <FilePath>triggers.sql</FilePath> Hoặc thêm comment đề bài vào trên đầu các
			lệnh
		</p>
		<div class="page-break"></div>
		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>ERD:</b>
		</p>
		<div class="bg-neutral-100 px-5 py-1 my-2 rounded">
			<img src="@/assets/images/documentation/sql-e-11.png" alt="" class="rounded-lg mt-3 block" />
		</div>

		<p className="text-slate-900 dark:text-white mt-2 pl-0">
			<b>Seed Data:</b> Các bạn copy phần seed trong file <FilePath><b>seed_data.txt</b></FilePath>
		</p>
		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>Lưu ý:</b>
			<br />
			<br />
			- Đề thi bao gồm <b>04 phần</b>, tổng số điểm là: <b>20đ</b>. Nếu phát hiện sai/thiếu sót trong đề, học viên vui
			lòng báo với giám thị coi thi.
			<br />
			- Danh sách tài liệu đính kèm: <FilePath>de-thi-sql.pdf</FilePath>, <FilePath>seed_data.txt</FilePath>
			<br />
			- Tên các bảng, db BẮT BUỘC phải tuân thủ đề bài.
		</p>
		<p className="text-slate-900 dark:text-white my-4 text-lg text-center">
			Chúc các bạn làm bài thật tốt (～￣▽￣)～(❁´◡`❁)
			<br />
			<br />
			<b>KẾT THÚC</b>
		</p>
		<!-- <FakeTerminalUI :text-coppy="seed_data">
			<p>seed_data.sql</p>
		</FakeTerminalUI> -->
		<!-- <DocNextPage :pagination="pagePagination" /> -->
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
		data() {
			return {
				seed_data: `-- Tắt kiểm tra khóa ngoại để tránh lỗi khi xóa dữ liệu có liên kết
SET FOREIGN_KEY_CHECKS = 0;

-- Xóa toàn bộ dữ liệu
DELETE FROM enrollments;
DELETE FROM payments;
DELETE FROM courses;
DELETE FROM instructors;
DELETE FROM students;

-- Bật lại kiểm tra khóa ngoại
SET FOREIGN_KEY_CHECKS = 1;

-- Reset AUTO_INCREMENT về 1
ALTER TABLE enrollments AUTO_INCREMENT = 1;
ALTER TABLE payments AUTO_INCREMENT = 1;
ALTER TABLE courses AUTO_INCREMENT = 1;
ALTER TABLE instructors AUTO_INCREMENT = 1;
ALTER TABLE students AUTO_INCREMENT = 1;

-- Insert students
INSERT INTO students (id, name, email, phone, join_date) VALUES
(1, 'Nguyễn Văn A', 'vana@example.com', '0123456789', '2024-01-15'),
(2, 'Trần Thị B', 'thib@example.com', '0987654321', '2024-01-20'),
(3, 'Lê Hữu C', 'huuc@example.com', '0912345678', '2024-02-05'),
(4, 'Phạm Minh D', 'minhd@example.com', '0909123456', '2024-02-10'),
(5, 'Hoàng Ngọc E', 'ngoce@example.com', '0988123456', '2024-02-15'),
(6, 'Đỗ Quốc F', 'quocf@example.com', '0977123456', '2024-02-20'),
(7, 'Bùi Tấn G', 'tang@example.com', '0966123456', '2024-02-25'),
(8, 'Ngô Văn H', 'vanh@example.com', '0955123456', '2024-03-01'),
(9, 'Vũ Quang I', 'quangi@example.com', '0944123456', '2024-03-05'),
(10, 'Lý Thanh J', 'thanhj@example.com', '0933123456', '2024-03-10'),
(11, 'Trịnh Khắc K', 'khack@example.com', '0922123456', '2024-03-15'),
(12, 'Tô Anh L', 'anhl@example.com', '0911123456', '2024-03-20'),
(13, 'Hà Bảo M', 'baom@example.com', '0900123456', '2024-03-25'),
(14, 'Phan Văn N', 'vann@example.com', '0899123456', '2024-04-01'),
(15, 'Đinh Ngọc O', 'ngoco@example.com', '0888123456', '2024-04-05'),
(16, 'Trương Tuấn P', 'tuanp@example.com', '0877123456', '2024-04-10'),
(17, 'Lâm Hữu Q', 'huuq@example.com', '0866123456', '2024-04-15'),
(18, 'Đặng Chí R', 'chir@example.com', '0855123456', '2024-04-20'),
(19, 'Phùng Quốc S', 'quocs@example.com', '0844123456', '2024-04-25'),
(20, 'Cao Đăng T', 'dangt@example.com', '0833123456', '2024-05-01');

-- Insert instructors
INSERT INTO instructors (id, name, expertise, phone, email) VALUES
(1, 'Nguyễn Hữu An', 'Fullstack Web', '0123456789', 'an.nguyen@example.com'),
(2, 'Trần Đình Bảo', 'Data Science', '0987654321', 'bao.tran@example.com'),
(3, 'Lê Quốc Cường', 'AI & ML', '0912345678', 'cuong.le@example.com'),
(4, 'Phạm Ngọc Duy', 'Cybersecurity', '0909123456', 'duy.pham@example.com'),
(5, 'Hoàng Văn Em', 'Mobile Development', '0988123456', 'em.hoang@example.com'),
(6, 'Đỗ Minh Phát', 'Cloud Computing', '0977123456', 'phat.do@example.com'),
(7, 'Bùi Trọng Hùng', 'Blockchain', '0966123456', 'hung.bui@example.com'),
(8, 'Ngô Gia Lạc', 'Game Development', '0955123456', 'lac.ngo@example.com');

-- Insert courses
INSERT INTO courses (id, name, instructor_id, schedule, max_students) VALUES
(1, 'Web Development', 1, 'Mon-Wed-Fri 10:00-12:00', 20),
(2, 'Data Science', 2, 'Tue-Thu-Sat 14:00-16:00', 25),
(3, 'Machine Learning', 3, 'Mon-Wed-Fri 16:00-18:00', 15),
(4, 'Cybersecurity Fundamentals', 4, 'Tue-Thu 10:00-12:00', 30),
(5, 'Mobile App Development', 5, 'Sat-Sun 09:00-11:00', 20),
(6, 'Cloud Computing', 6, 'Mon-Wed 14:00-16:00', 18),
(7, 'Blockchain Basics', 7, 'Thu-Fri 18:00-20:00', 22),
(8, 'Game Development', 8, 'Sat 13:00-15:00', 25);

-- Insert enrollments
INSERT INTO enrollments (id, student_id, course_id, enroll_date) VALUES
(1, 1, 1, '2024-02-01'),
(2, 2, 1, '2024-02-02'),
(3, 3, 2, '2024-02-03'),
(4, 4, 2, '2024-02-04'),
(5, 5, 3, '2024-02-05'),
(6, 6, 3, '2024-02-06'),
(7, 7, 4, '2024-02-07'),
(8, 8, 4, '2024-02-08'),
(9, 9, 5, '2024-02-09'),
(10, 10, 5, '2024-02-10'),
(11, 11, 6, '2024-02-11'),
(12, 12, 6, '2024-02-12'),
(13, 13, 7, '2024-02-13'),
(14, 14, 7, '2024-02-14'),
(15, 15, 8, '2024-02-15'),
(16, 16, 8, '2024-02-16'),
(17, 17, 1, '2024-02-17'),
(18, 18, 2, '2024-02-18'),
(19, 19, 3, '2024-02-19'),
(20, 20, 4, '2024-02-20');

-- Insert payments
INSERT INTO payments (id, student_id, amount, payment_date, method) VALUES
(1, 1, 500, '2024-02-01', 'Credit Card'),
(2, 2, 600, '2024-02-02', 'PayPal'),
(3, 3, 700, '2024-02-03', 'Bank Transfer'),
(4, 4, 400, '2024-02-04', 'Credit Card'),
(5, 5, 500, '2024-02-05', 'Cash'),
(6, 6, 600, '2024-02-06', 'Credit Card'),
(7, 7, 550, '2024-02-07', 'PayPal'),
(8, 8, 650, '2024-02-08', 'Bank Transfer'),
(9, 9, 500, '2024-02-09', 'Credit Card'),
(10, 10, 600, '2024-02-10', 'Cash'),
(11, 11, 700, '2024-02-11', 'Credit Card'),
(12, 12, 800, '2024-02-12', 'PayPal'),
(13, 13, 900, '2024-02-13', 'Bank Transfer'),
(14, 14, 1000, '2024-02-14', 'Credit Card'),
(15, 15, 550, '2024-02-15', 'Cash');
`,
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/sql/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/sql/practice',
					},
				},
			};
		},
		computed: {},
		methods: {},
	};
</script>
<style>
	@media print {
		.page,
		.page-break {
			break-after: page;
		}
	}
</style>
