<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Error Handling trong SQL" addOnClass="text-left mt-5" markedAs="about" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong quá trình làm việc với cơ sở dữ liệu, có nhiều trường hợp xảy ra lỗi, chẳng hạn như:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Cố gắng chèn dữ liệu trùng khóa chính. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Thực thi câu lệnh SQL không hợp lệ. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Ràng buộc toàn vẹn dữ liệu bị vi phạm. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Lỗi trong transaction hoặc deadlock. </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Nếu không có cơ chế xử lý lỗi tốt, hệ thống có thể bị gián đoạn hoặc lưu dữ liệu không chính xác.
				</p>
				<PageHeading text="Các loại lỗi phổ biến" addOnClass="text-left mt-5" markedAs="common-errors" :lvl="1" />

				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Lỗi ràng buộc toàn vẹn (Integrity Constraint Violation):</b>
							Khi dữ liệu chèn vào vi phạm khóa chính, khóa ngoại, hoặc unique constraint.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Lỗi cú pháp SQL (Syntax Errors):</b>
							Khi truy vấn có lỗi về cú pháp.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div>
							<b>Lỗi truy cập dữ liệu (Data Access Errors):</b>Khi truy cập vào bảng không tồn tại hoặc truy vấn dữ liệu
							không hợp lệ.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<div><b>Lỗi transaction (Transaction Errors):</b>Khi xảy ra deadlock hoặc lỗi trong quá trình commit.</div>
					</li>
				</ul>
				<PageHeading text="SQLSTATE và ERROR CODE" addOnClass="text-left mt-5" markedAs="syntax" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					SQLSTATE là mã lỗi tiêu chuẩn SQL, còn ERROR CODE là mã lỗi của MySQL/MariaDB.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ thực tế: Chuyển tiền giữa 2 tài khoản.
							</p>
							<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading
					text="Xử lý lỗi trong Stored Procedure với HANDLER"
					addOnClass="text-left mt-5"
					markedAs="handler-stored-procedure"
					:lvl="1"
				/>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ thực tế: Chuyển tiền giữa 2 tài khoản.
							</p>
							<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Xử lý lỗi với SQLSTATE" addOnClass="text-left mt-5" markedAs="handler-sql-state" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sử dụng mã lỗi <b>45000</b> để định nghĩa 1 lỗi từ phía người dùng.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ thực tế: Chuyển tiền giữa 2 tài khoản.
							</p>
							<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<p class="col-span-1 text-slate-900 dark:text-white my-2">
					Chúng ta cùng tổng kết bài học:
					<br />
					<br />
					<b>Trong bài này, chúng ta đã học cách xử lý lỗi trong SQL thông qua:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Kiểm tra lỗi bằng SQLSTATE và ERROR CODE
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Sử dụng HANDLER để xử lý lỗi trong Stored Procedure
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Quản lý lỗi trong Transactions bằng ROLLBACK và SAVEPOINT
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Sử dụng SQLSTATE '45000' để báo lỗi do người dùng định nghĩa
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ghi log lỗi vào bảng error_logs để theo dõi lỗi hệ thống
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
				isolations: [
					{
						level: 'READ UNCOMMITTED',
						dirty_read: true,
						non_repeatable_read: true,
						phantom_read: true,
						use_case:
							'Dùng cho hệ thống báo cáo thời gian thực, nơi dữ liệu có thể chưa chính xác nhưng cần tốc độ cao.',
					},
					{
						level: 'READ COMMITTED',
						dirty_read: false,
						non_repeatable_read: true,
						phantom_read: true,
						use_case: 'Phù hợp cho hệ thống ngân hàng khi kiểm tra số dư tài khoản.',
					},
					{
						level: 'REPEATABLE READ',
						dirty_read: false,
						non_repeatable_read: false,
						phantom_read: true,
						use_case: 'Hữu ích cho hệ thống đặt vé máy bay để tránh việc khách hàng nhìn thấy cùng một vé nhiều lần.',
					},
					{
						level: 'SERIALIZABLE',
						dirty_read: false,
						non_repeatable_read: false,
						phantom_read: false,
						use_case: 'Sử dụng trong hệ thống đấu giá để đảm bảo không có hai người cùng đặt giá thầu một lúc.',
					},
				],
				b1: `SHOW ERRORS;
SELECT @@ERROR;  -- Lấy lỗi gần nhất
SELECT @@SQLSTATE; -- Lấy SQLSTATE gần nhất
`,
				b2: `CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);

INSERT INTO users (id, email) VALUES (1, 'user@example.com');
INSERT INTO users (id, email) VALUES (1, 'user2@example.com'); -- LỖI: Trùng ID`,
				b3: `DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
BEGIN
    -- Xử lý lỗi ở đây
END;`,
				b4: `CREATE PROCEDURE InsertAccount(IN acc_id INT, IN acc_name VARCHAR(100))
BEGIN
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        SELECT 'Lỗi xảy ra, nhưng chương trình tiếp tục chạy' AS Message;
    END;
    
    INSERT INTO accounts (id, name) VALUES (acc_id, acc_name);
END;
CALL InsertAccount(1, 'Alice'); -- Thành công
CALL InsertAccount(1, 'Bob'); -- Lỗi nhưng không dừng chương trình
`,
				b5: ` SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = message;`,
				b6: `CREATE PROCEDURE CheckAge(IN user_age INT)
BEGIN
    IF user_age < 18 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Tuổi không hợp lệ!';
    END IF;
    
    SELECT 'Tuổi hợp lệ' AS Status;
END;`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-12' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
