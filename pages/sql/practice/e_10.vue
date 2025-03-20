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
			Bạn được giao nhiệm vụ xây dựng hệ thống quản lý phòng gym. Hãy thực hiện các yêu cầu sau:
		</p>

		<p className="text-slate-900 dark:text-white mt-2 text-2xl">
			<b>Yêu cầu:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>1 - INIT DB (5đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Tạo cơ sở dữ liệu có tên <b>gym_management</b>.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo các bảng với cấu trúc sau:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>members</b>: (id, name, email, phone, join_date, membership_type, membership_expiry).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>trainers</b>: (id, name, specialization, phone, email).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>classes</b>: (id, name, trainer_id, schedule, max_capacity).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>registrations</b>: (id, member_id, class_id, register_date).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>payments</b>: (id, member_id, amount, payment_date, method).
					</li>
				</ul>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Thiết lập các ràng buộc:
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi hội viên có thể đăng ký nhiều lớp tập, và mỗi lớp có thể có nhiều hội viên.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi lớp tập do một huấn luyện viên phụ trách.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mỗi hội viên phải thanh toán phí tập luyện.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Số lượng học viên đăng ký không được vượt quá <b>max_capacity</b> của lớp.
					</li>
				</ul>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white my-4 text-lg">
			<b>2 - Truy vấn dữ liệu cơ bản(6đ):</b>
		</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				1. Lấy danh sách tất cả <b>tất cả hội viên (id, name, phone) kèm theo loại gói tập của họ.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Lấy danh sách <b>tất cả huấn luyện viên (id, name, phone) kèm theo số lớp họ đang dạy.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				3. Tìm <b>lớp tập có nhiều học viên đăng ký nhất.</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				4. Tìm <b>hội viên chi tiêu nhiều nhất (tổng tiền thanh toán cao nhất).</b>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				5. Tính tổng doanh thu <b>trong tháng hiện tại.</b>
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
				1. Tạo một View có tên <b>view_member_classes</b>, hiển thị danh sách mượn sách với thông tin:
				<FilePath> Tên hội viên, Tên lớp, Huấn luyện viên, Lịch tập.</FilePath>
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Tạo một Stored Procedure <b>sp_get_classes_by_trainer</b> nhận vào id huấn luyện viên (trainers) và trả về
				danh sách các lớp họ phụ trách.
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
				1. Viết một Trigger <b>tr_check_class_capacity</b>, để ngăn việc đăng ký lớp nếu đã đủ số lượng học viên.
			</li>
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				2. Viết một Trigger <b>tr_registration_logs</b>, ghi lại log khi có hội viên đăng ký lớp (bất kỳ) vào bảng
				<b>registration_logs</b> gồm <b>id, log_time, member_id, class_id, action</b>.
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
			<img src="@/assets/images/documentation/sql-e-10.png" alt="" class="rounded-lg mt-3 block" />
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

-- Xóa toàn bộ dữ liệu mà không làm thay đổi ID tự tăng
DELETE FROM registration_logs;
DELETE FROM registrations;
DELETE FROM payments;
DELETE FROM classes;
DELETE FROM trainers;
DELETE FROM members;

-- Bật lại kiểm tra khóa ngoại
SET FOREIGN_KEY_CHECKS = 1;

-- Reset AUTO_INCREMENT về 1 để ID bắt đầu lại từ đầu
ALTER TABLE registration_logs AUTO_INCREMENT = 1;
ALTER TABLE registrations AUTO_INCREMENT = 1;
ALTER TABLE payments AUTO_INCREMENT = 1;
ALTER TABLE classes AUTO_INCREMENT = 1;
ALTER TABLE trainers AUTO_INCREMENT = 1;
ALTER TABLE members AUTO_INCREMENT = 1;

-- Thêm hội viên
INSERT INTO members (name, email, phone, join_date, membership_type, membership_expiry) VALUES
('Nguyễn Văn A', 'a@example.com', '0123456789', '2024-01-10', 'VIP', '2024-12-31'),
('Trần Thị B', 'b@example.com', '0987654321', '2024-02-05', 'Standard', '2024-08-10');

-- Thêm huấn luyện viên
INSERT INTO trainers (name, specialization, phone, email) VALUES
('Lê Văn C', 'Yoga', '0933222111', 'trainer1@example.com'),
('Hoàng Minh D', 'Fitness', '0911555666', 'trainer2@example.com');

-- Thêm lớp học
INSERT INTO classes (name, trainer_id, schedule, max_capacity) VALUES
('Yoga Buổi Sáng', 1, 'Thứ 2 - 9:00 AM', 20),
('Gym Cơ Bản', 2, 'Thứ 3 - 5:00 PM', 15);

-- Đăng ký lớp học
INSERT INTO registrations (member_id, class_id, register_date) VALUES
(1, 1, '2024-03-01'),
(2, 2, '2024-03-02');

-- Thanh toán phí tập
INSERT INTO payments (member_id, amount, payment_date, method) VALUES
(1, 500000, '2024-03-01', 'Credit Card'),
(2, 300000, '2024-03-02', 'Cash');

-- Log đăng ký
INSERT INTO registration_logs (log_time, member_id, class_id, action) VALUES
(NOW(), 1, 1, 'Registered'),
(NOW(), 2, 2, 'Registered');
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
