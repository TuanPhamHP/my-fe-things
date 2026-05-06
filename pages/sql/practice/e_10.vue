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
			return usePagination('practice', 'sql-10', 'sql')
		},
		data() {
			return {
				seed_data: `-- Tắt kiểm tra khóa ngoại để tránh lỗi khi xóa dữ liệu có liên kết
SET FOREIGN_KEY_CHECKS = 0;

-- Xóa toàn bộ dữ liệu
DELETE FROM registration_logs;
DELETE FROM registrations;
DELETE FROM payments;
DELETE FROM classes;
DELETE FROM trainers;
DELETE FROM members;

-- Bật lại kiểm tra khóa ngoại
SET FOREIGN_KEY_CHECKS = 1;

-- Reset AUTO_INCREMENT về 1
ALTER TABLE registration_logs AUTO_INCREMENT = 1;
ALTER TABLE registrations AUTO_INCREMENT = 1;
ALTER TABLE payments AUTO_INCREMENT = 1;
ALTER TABLE classes AUTO_INCREMENT = 1;
ALTER TABLE trainers AUTO_INCREMENT = 1;
ALTER TABLE members AUTO_INCREMENT = 1;

-- Thêm 30 hội viên (members)
INSERT INTO members (name, email, phone, join_date, membership_type, membership_expiry) VALUES
('Nguyễn Văn An', 'an.nguyen@example.com', '0123456781', '2024-01-10', 'VIP', '2024-12-31'),
('Trần Thị Bình', 'binh.tran@example.com', '0987654322', '2024-02-05', 'Standard', '2024-08-10'),
('Lê Minh Tuấn', 'tuan.le@example.com', '0912345678', '2024-02-15', 'Premium', '2025-02-15'),
('Phạm Thị Hằng', 'hang.pham@example.com', '0923456789', '2024-03-01', 'VIP', '2025-03-01'),
('Hoàng Văn Nam', 'nam.hoang@example.com', '0934567890', '2024-03-10', 'Standard', '2024-09-10'),
('Vũ Thị Lan', 'lan.vu@example.com', '0945678901', '2024-04-01', 'Premium', '2025-04-01'),
('Đinh Quang Huy', 'huy.dinh@example.com', '0956789012', '2024-04-15', 'VIP', '2025-04-15'),
('Bùi Thanh Hương', 'huong.bui@example.com', '0967890123', '2024-05-01', 'Standard', '2024-11-01'),
('Ngô Thị Mai', 'mai.ngo@example.com', '0978901234', '2024-05-10', 'Premium', '2025-05-10'),
('Trịnh Văn Sơn', 'son.trinh@example.com', '0989012345', '2024-06-01', 'VIP', '2025-06-01'),
('Đỗ Hoàng Long', 'long.do@example.com', '0990123456', '2024-06-15', 'Standard', '2024-12-15'),
('Cao Thị Thúy', 'thuy.cao@example.com', '0911234567', '2024-07-01', 'Premium', '2025-07-01'),
('Tạ Minh Đức', 'duc.ta@example.com', '0922345678', '2024-07-10', 'VIP', '2025-07-10'),
('Lương Thị Hòa', 'hoa.luong@example.com', '0933456789', '2024-08-01', 'Standard', '2025-02-01'),
('Dương Hoàng Phúc', 'phuc.duong@example.com', '0944567890', '2024-08-15', 'Premium', '2025-08-15'),
('Hồ Văn Tùng', 'tung.ho@example.com', '0955678901', '2024-09-01', 'VIP', '2025-09-01'),
('Đặng Thị Yến', 'yen.dang@example.com', '0966789012', '2024-09-10', 'Standard', '2025-03-10'),
('Trương Minh Hải', 'hai.truong@example.com', '0977890123', '2024-10-01', 'Premium', '2025-10-01'),
('Văn Thị Bích', 'bich.van@example.com', '0988901234', '2024-10-15', 'VIP', '2025-10-15'),
('Phan Hoàng Hưng', 'hung.phan@example.com', '0999012345', '2024-11-01', 'Standard', '2025-05-01');

-- Thêm 12 huấn luyện viên (trainers)
INSERT INTO trainers (name, specialization, phone, email) VALUES
('Lê Văn Cường', 'Yoga', '0933222111', 'trainer1@example.com'),
('Hoàng Minh Đức', 'Fitness', '0911555666', 'trainer2@example.com'),
('Nguyễn Thị Hồng', 'Zumba', '0944332211', 'trainer3@example.com'),
('Trần Văn Tuấn', 'Kickboxing', '0922113344', 'trainer4@example.com'),
('Phạm Thị Hoa', 'CrossFit', '0955332211', 'trainer5@example.com'),
('Đinh Hoàng Nam', 'Cardio', '0966443322', 'trainer6@example.com'),
('Vũ Thị Lệ', 'Bodybuilding', '0987554433', 'trainer7@example.com'),
('Ngô Minh Anh', 'Pilates', '0998665544', 'trainer8@example.com'),
('Lê Hoàng Sơn', 'Aerobic', '0909776655', 'trainer9@example.com'),
('Trịnh Thị Lan', 'Weightlifting', '0910887766', 'trainer10@example.com'),
('Đặng Minh Tuấn', 'Calisthenics', '0921998877', 'trainer11@example.com'),
('Phan Văn Kiệt', 'Endurance Training', '0932109988', 'trainer12@example.com');

-- Thêm 6 lớp học (classes)
INSERT INTO classes (name, trainer_id, schedule, max_capacity) VALUES
('Yoga Buổi Sáng', 1, 'Thứ 2 - 9:00 AM', 20),
('Gym Cơ Bản', 2, 'Thứ 3 - 5:00 PM', 15),
('Zumba Dance', 3, 'Thứ 4 - 6:00 PM', 25),
('Kickboxing Cường Độ Cao', 4, 'Thứ 5 - 7:00 PM', 10),
('Cardio Burn', 5, 'Thứ 6 - 8:00 AM', 30),
('Pilates Cải Thiện Dáng', 6, 'Thứ 7 - 9:00 AM', 18);

-- Tạo 100 bản ghi thanh toán với ngày ngẫu nhiên từ 01/12/2024 đến 15/03/2025
INSERT INTO payments (member_id, amount, payment_date, method)
SELECT 
    (SELECT id FROM members ORDER BY RAND() LIMIT 1) AS member_id,
    FLOOR(RAND() * 500 + 200) * 1000 AS amount, -- Random từ 200,000 đến 700,000
    DATE_ADD('2024-12-01', INTERVAL FLOOR(RAND() * 105) DAY) AS payment_date, 
    ELT(FLOOR(1 + RAND() * 3), 'Cash', 'Credit Card', 'Bank Transfer') AS method
FROM (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION 
      SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10) AS tmp1,
     (SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION 
      SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10) AS tmp2
LIMIT 100;
`,
				counter: 0,
			};
		},
		computed: {},
		methods: {},
	};
</script>
