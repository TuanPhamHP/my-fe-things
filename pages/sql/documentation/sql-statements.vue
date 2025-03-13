<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading
					text="Control Flow Statements trong SQL"
					addOnClass="text-left mt-5"
					markedAs="about-cfs"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Khi làm việc với Stored Procedure, Function, Trigger hoặc Event trong SQL, chúng ta cần điều khiển luồng thực
					thi của chương trình. Điều này giúp tạo ra các logic xử lý phức tạp như kiểm tra điều kiện, lặp lại một thao
					tác nhiều lần hoặc thoát khỏi vòng lặp khi cần.
					<br />
					Bài giảng này sẽ giúp bạn hiểu và sử dụng các <b>Control Flow Statements</b> trong SQL.
				</p>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Control Flow Statements</b> là các câu lệnh giúp bạn kiểm soát luồng thực thi của chương trình SQL. Các câu
					lệnh này thường được sử dụng trong Stored Procedure, Function, Trigger hoặc Event. Chúng ta có thể chia chúng
					thành ba nhóm chính:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Cấu trúc rẽ nhánh - Conditional Statements</b> - Quyết định luồng thực thi dựa trên điều kiện.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span><b>Cấu trúc vòng lặp</b> - Thực hiện một khối lệnh nhiều lần.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							><b>Điều khiển vòng lặp</b> - Điều chỉnh hoạt động của vòng lặp, như thoát hoặc bỏ qua một lần lặp.</span
						>
					</li>
				</ul>
				<PageHeading
					text="Conditional Statements"
					addOnClass="text-left mt-5"
					markedAs="conditional-statements"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Trong nhiều tình huống, chúng ta cần kiểm tra điều kiện và thực hiện một số hành động dựa trên điều đó. Ví dụ:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu đơn hàng có giá trị trên 1 triệu, khách hàng được giảm giá.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Nếu một tài khoản bị khóa, không cho phép đăng nhập.</span>
					</li>
				</ul>
				<PageHeading
					text="1. IF ... THEN ... ELSE ... END IF"
					addOnClass="text-left mt-5"
					markedAs="conditional-if-else"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần kiểm tra <b>một hoặc nhiều điều kiện.</b></span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Chỉ sử dụng được trong <b>Stored Procedure, Function, Trigger hoặc Event.</b></span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Syntax</b>
				</p>

				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lưu ý:</b> IF không thể sử dụng trực tiếp trong câu lệnh SQL thông thường mà chỉ có thể dùng trong Stored
					Procedure hoặc Function.
				</p>

				<PageHeading
					text="2. CASE ... WHEN ... THEN ... ELSE ... END CASE"
					addOnClass="text-left mt-5"
					markedAs="conditional-case-then"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần <b>so sánh</b> một biến với nhiều giá trị khác nhau.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Có thể sử dụng trong <b>Stored Procedure, Function và cả trong câu lệnh SQL thông thường.</b></span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Syntax</b>
				</p>

				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Cấu trúc sử dụng với câu SQL thường:</p>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lưu ý:</b> IF không thể sử dụng trực tiếp trong câu lệnh SQL thông thường mà chỉ có thể dùng trong Stored
					Procedure hoặc Function.
				</p>
				<!--  -->
				<PageHeading text="Loop Statements" addOnClass="text-left mt-5" markedAs="conditional-statements" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Có những trường hợp chúng ta cần thực hiện một công việc nhiều lần. Ví dụ:
				</p>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Lặp qua danh sách sản phẩm để cập nhật giá.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Gửi email cho tất cả khách hàng có sinh nhật hôm nay.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Trong SQL, có ba loại vòng lặp chính:</p>
				<PageHeading
					text="1. WHILE ... DO ... END WHILE"
					addOnClass="text-left mt-5"
					markedAs="conditional-while-do"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần lặp lại một công việc nhiều lần với <b>điều kiện kiểm tra trước mỗi lần lặp</b>.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Syntax</b>
				</p>

				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<!--  -->
				<PageHeading text="2. LOOP ... END LOOP" addOnClass="text-left mt-5" markedAs="conditional-while-do" :lvl="2" />
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần tạo một vòng lặp vô hạn và <b>chủ động thoát</b> khỏi nó bằng LEAVE.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Syntax</b>
				</p>

				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<!--  -->
				<PageHeading
					text="3. REPEAT ... UNTIL ... END REPEAT"
					addOnClass="text-left mt-5"
					markedAs="conditional-while-do"
					:lvl="2"
				/>
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần đảm bảo <b>vòng lặp chạy ít nhất một lần</b> trước khi kiểm tra điều kiện.</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Syntax</b>
				</p>

				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<!--  -->
				<PageHeading text="Loop Control" addOnClass="text-left mt-5" markedAs="loop-control" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Là những câu lệnh có nhiệm vụ điều chỉnh vòng lặp.</p>

				<PageHeading text="LEAVE" addOnClass="text-left mt-5" markedAs="leave-control" :lvl="2" />
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi cần thoát khỏi vòng lặp <b>ngay lập tức.</b></span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>

				<PageHeading text="ITERATE" addOnClass="text-left mt-5" markedAs="ITERATE-control" :lvl="2" />
				<ul class="pl-5 marker:text-sky-400 list-disc">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Khi muốn <b>bỏ qua phần còn lại của vòng lặp hiện tại</b> và tiếp tục vòng tiếp theo.</span>
					</li>
				</ul>
				<ClientOnly>
					<div class="col-span-1">
						<VCodeBlock :code="b8" highlightjs lang="sql" theme="atom-one-dark" />
					</div>
				</ClientOnly>
				<PageHeading text="Others..." addOnClass="text-left mt-5" markedAs="others" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ngoài ra, khi làm việc với Stored Procedure trong SQL, chúng ta thường sử dụng các câu lệnh điều khiển như
					<b>DECLARE, CURDATE(), SET</b> ... để xử lý logic.
				</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Lệnh</th>
							<th scope="col" class="px-5 py-3">Chức năng</th>
							<th scope="col" class="px-5 py-3">Syntax</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in others" :key="item.code" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">
								<FilePath>{{ item.code }}</FilePath>
							</td>
							<td class="px-5 py-4">{{ item.desc }}</td>
							<td class="px-5 py-4">
								<FilePath>{{ item.syntax }}</FilePath>
							</td>
						</tr>
					</tbody>
				</table>
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/sql/practice/e_6"
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
				b1: `IF điều_kiện THEN
    -- Hành động khi điều kiện đúng
ELSEIF điều_kiện_khác THEN
    -- Hành động nếu điều kiện trước đó sai
ELSE
    -- Hành động nếu tất cả điều kiện đều sai
END IF;
`,
				b2: `CASE biến_cần_kiểm_tra
    WHEN giá_trị_1 THEN
        -- Hành động nếu biến = giá_trị_1
    WHEN giá_trị_2 THEN
        -- Hành động nếu biến = giá_trị_2
    ELSE
        -- Hành động nếu không có giá trị nào khớp
END CASE;
`,
				b3: `SELECT 
    CASE 
        WHEN age < 18 THEN 'Underage'
        WHEN age BETWEEN 18 AND 65 THEN 'Adult'
        ELSE 'Senior'
    END AS age_category
FROM users;
`,
				b4: `WHILE điều_kiện DO
    -- Hành động lặp lại
END WHILE;
`,
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
