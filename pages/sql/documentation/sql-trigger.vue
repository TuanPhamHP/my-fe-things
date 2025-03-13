<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Trigger trong SQL" addOnClass="text-left mt-5" markedAs="about-trigger" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Trigger</b> là một khối lệnh SQL được tự động kích hoạt khi có một thao tác (INSERT, UPDATE, DELETE) diễn
					ra trên bảng. Triggers thường được sử dụng để đảm bảo toàn vẹn dữ liệu, đồng bộ các thay đổi và tự động thực
					thi các quy tắc nghiệp vụ trong hệ thống.
					<br />
					<b>Lợi ích của Trigger</b>
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Tự động hóa:</b> Giúp giảm bớt việc phải viết code ứng dụng để xử lý các tác vụ.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Giảm nguy cơ sai sót:</b> Đảm bảo dữ liệu được xử lý đúng quy tắc.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Bảo mật và kiểm soát dữ liệu:</b> Ngăn chặn việc xóa hoặc thay đổi sai quy tắc.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Tăng hiệu suất:</b> Giúp câu lệnh SQL ngắn gọn hơn và tự động hóa tác vụ.</span>
					</li>
				</ul>
				<PageHeading text="Trigger Types" addOnClass="text-left mt-5" markedAs="types" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Tiếp theo, chúng ta sẽ tìm hiểu thêm về các loại Trigger. Về cơ bản, chúng ta có thể phần chúng ra làm 2 loại:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p>
							<b>DML Trigger</b>: được dùng để giám sát, can thiệp vào các thao tác liên quan đến Data.
							<br />
							Trong đó chia ra làm 2 loại nhỏ hơn:
						</p>
						<ul class="pl-5 marker:text-gray-800 list-disc">
							<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
								<p><b>BEFORE Trigger</b>: Kích hoạt trước khi thao tác (INSERT, UPDATE, DELETE) được thực thi.</p>
							</li>
							<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
								<p><b>AFTER Trigger</b>: Kích hoạt sau khi thao tác hoàn thành.</p>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>DDL Trigger</b>: được dùng để giám sát các thao tác thay đổi cấu trúc bảng (CREATE, ALTER, DROP). Tuy
							nhiên, MySQL/MariaDB hiện tại chưa hỗ trợ DDL Trigger.</span
						>
					</li>
				</ul>
				<PageHeading text="Thao tác với Trigger" addOnClass="text-left mt-5" markedAs="trigger" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Cùng tìm hiểu các cách thao tác với Trigger nào:</p>
				<PageHeading text="Tạo" addOnClass="text-left mt-5" markedAs="create-trigger" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Tạo một trigger thủ công.</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
							<ul class="pl-5 marker:text-sky-400 list-disc">
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span
										><b>{BEFORE | AFTER}</b>: Chỉ ra loại Trigger mà chúng ta muốn tạo. Giá trị này sẽ quyết định
										Trigger sẽ được thực thi trước hay sau hành động.</span
									>
								</li>
								<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
									<span><b>{INSERT | UPDATE | DELETE}</b>: Chỉ ra loại hành động mà chúng ta muốn gán Trigger.</span>
								</li>
							</ul>
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">
								Ví dụ thực tế: Tự động ghi nhật ký khi thêm nhân viên mới
							</p>
							<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<PageHeading text="Xoá" addOnClass="text-left mt-5" markedAs="create-trigger" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Xoá một Trigger đã được tạo.</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<ClientOnly>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Syntax:</p>
							<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
						<div class="col-span-1">
							<p class="text-slate-900 dark:text-white mt-0 leading-8 font-bold">Ví dụ thực tế</p>
							<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
						</div>
					</ClientOnly>
				</div>

				<p class="text-slate-900 dark:text-white mt-5 mb-3 leading-8 font-bold text-xl">Tổng kết:</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content">
						<p>Có 2 loại Trigger là <b>DML</b> và <b>DDL - Hiện MySQL/MariaDB chưa hỗ trợ</b>.</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p><b>DML Trigger</b> chia làm 2 loại là <b>BEFORE | AFTER</b> .</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<p>
							Trigger là một phần quan trọng trong quản lý cơ sở dữ liệu, giúp tự động hóa các tác vụ và đảm bảo tính
							toàn vẹn dữ liệu.
						</p>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_8"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
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
				others: [
					{
						code: 'DECLARE',
						desc: 'Khai báo biến, CURSOR, HANDLER.',
						syntax: 'DECLARE var_name datatype;',
					},
					{
						code: 'CURDATE()',
						desc: 'Lấy ngày hiện tại của hệ thống.',
						syntax: 'SELECT CURDATE();',
					},
					{
						code: 'SET',
						desc: 'Gán giá trị cho biến.',
						syntax: 'SET var_name = value;',
					},
				],
				b1: `CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON table_name
FOR EACH ROW
BEGIN
    -- Logic xử lý trigger
END;
`,
				b2: `CREATE TABLE employee_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    action VARCHAR(50),
    log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_logs (employee_id, action)
    VALUES (NEW.id, 'INSERT');
END;
`,
				b3: `DROP TRIGGER IF EXISTS trigger_name;
`,
				b4: `DROP TRIGGER IF EXISTS after_employee_insert;`,
				b5: `loop_label: LOOP
    -- Hành động lặp lại
    IF condition THEN
        LEAVE loop_label; -- Thoát khỏi vòng lặp
    END IF;
END LOOP;
`,
				b6: `REPEAT
    -- Hành động lặp lại
UNTIL điều_kiện
END REPEAT;
`,
				b7: `DECLARE done BOOLEAN DEFAULT FALSE;

loop_label: LOOP
    -- Nếu điều kiện đúng, thoát khỏi vòng lặp
    IF done THEN
        LEAVE loop_label;
    END IF;
END LOOP;`,
				b8: `loop_label: LOOP
    -- Nếu điều kiện đúng, bỏ qua phần còn lại và tiếp tục vòng lặp mới
    IF điều_kiện THEN
        ITERATE loop_label;
    END IF;
END LOOP;
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'sql', currentDocId: 'sql-13' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
