<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Flow Statements" addOnClass="text-left" markedAs="flow-stm" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Bài giảng này sẽ giới thiệu về các cấu trúc điều khiển cơ bản: các <b>câu lệnh điều kiện</b> (if, elif, else)
					và các <b>câu lệnh lặp</b> (for, while). Đây là những công cụ không thể thiếu để xây dựng logic phức tạp.
				</p>
				<PageHeading text="Conditional Statements" addOnClass="text-left mt-3" markedAs="arith" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Conditional statements (hay Control Flow Statements) cho phép chúng ta thực thi một khối mã lệnh nhất định chỉ
					khi một điều kiện nào đó là <FilePath>True</FilePath>.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">1. Cấu trúc if</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Thực thi khối lệnh nếu điều kiện là <b>True</b>.
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						2. Cấu trúc if-else
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Cung cấp hai nhánh thực thi: nếu điều kiện là <b>True</b> thì thực thi nhánh <FilePath>if</FilePath>, nếu
							là <b>False</b> thì thực thi nhánh <FilePath>else</FilePath>.
							<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						3. Cấu trúc if-elif-else
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dùng để kiểm tra nhiều điều kiện một cách tuần tự. Ngay khi tìm thấy một điều kiện <b>True</b>, khối lệnh
							tương ứng sẽ được thực thi và chương trình sẽ thoát khỏi toàn bộ cấu trúc điều kiện này.
							<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						4. Ternary Conditional Operator
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Trong python cũng hỗ trợ toán tử điều kiện dạng ngắn gọn (ternary operator) mặc dù hơi khác so với các
							ngôn ngữ khác:
							<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>

				<PageHeading text="Looping Statements" addOnClass="text-left mt-3" markedAs="loop" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Looping statements cho phép chúng ta thực thi một khối mã lệnh nhiều lần dựa trên một điều kiện hoặc một tập
					hợp các phần tử.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">1. Vòng lặp for</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Vòng lặp for được sử dụng để lặp qua các phần tử của một chuỗi (sequence - học ở bài trước) hoặc các đối
							tượng có thể lặp (iterable) khác (như list, tuple, string, range, v.v.).
							<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ngoài ra, chúng ta cũng hay sử dụng hàm <FilePath>range()</FilePath> để tạo một dãy số nguyên trong vòng
							lặp for.
							<br />
							<FilePath>range(start, stop, step)</FilePath>: Tạo ra dãy số với bước nhảy step.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Bài toán: Viết một hàm tính tổng nhận vào <b>n</b>, tính tổng các số từ 1 đến n sử dụng vòng lặp for.
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						2. Vòng lặp while
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Vòng lặp while thực thi một khối mã lệnh miễn là điều kiện kiểm tra vẫn còn <b>True</b>.
							<VCodeBlock :code="b6" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Bài toán: Viết một hàm đếm ngược nhận vào một số nguyên dương <b>n</b> và tính tổng các số lẻ từ 0 đến n.
						</li>
					</ul>
				</ul>

				<PageHeading text="Control Statements" addOnClass="text-left mt-3" markedAs="control" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Looping statements cho phép chúng ta thay đổi luồng thực thi bình thường của vòng lặp.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">1. break</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ngay lập tức thoát khỏi vòng lặp chứa nó (cả for và while).
							<VCodeBlock :code="b7" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ngoài ra, chúng ta cũng hay sử dụng hàm <FilePath>range()</FilePath> để tạo một dãy số nguyên trong vòng
							lặp for.
							<br />
							<FilePath>range(start, stop, step)</FilePath>: Tạo ra dãy số với bước nhảy step.
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">2. continue</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Bỏ qua phần còn lại của khối lệnh hiện tại trong vòng lặp và chuyển sang lần lặp tiếp theo.
							<VCodeBlock :code="b8" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">3. pass</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Là một câu lệnh rỗng (null operation). Nó được sử dụng khi cú pháp yêu cầu một câu lệnh nhưng bạn không
							muốn thực hiện bất kỳ hành động nào.
							<VCodeBlock :code="b9" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<!-- <LessonSum :sumData="lessonSum" /> -->
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import LessonSum from '@/components/Documentation/LessonSum.vue';
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
			LessonSum,
		},
		data() {
			return {
				lessonSum: [
					`Python cung cấp nhiều nhóm toán tử bao gồm arithmetic, comparison, logical, assignment, và bitwise để thực hiện các phép tính và thao tác logic trong chương trình.`,
					`Arithmetic operators (+, -, *, /, %, //, **) dùng để xử lý các biểu thức số học, trong khi comparison operators (==, !=, >, <, >=, <=) dùng để so sánh giá trị.`,
					`Logical operators (and, or, not) cho phép kết hợp nhiều điều kiện và kiểm soát luồng thực thi trong các câu lệnh rẽ nhánh.`,
				],
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/python/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/python/documentation',
					},
				},
				b1: `if condition:
    # Khối lệnh 1: Chỉ chạy nếu 'condition' là True
    statement_1`,
				b2: `if condition:
    # Khối lệnh A: Chạy nếu True
    statement_A
else:
    # Khối lệnh B: Chạy nếu False
    statement_B
`,
				b3: `if condition_1:
    # Chạy nếu condition_1 True
    statement_1
elif condition_2:
    # Chạy nếu condition_1 False và condition_2 True
    statement_2
else:
    # Chạy nếu tất cả các điều kiện trên đều False
    statement_final`,
				b4: `result = 'value_if_true' if condition else 'value_if_false'`,
				b5: `for item in iterable:
    # Khối lệnh sẽ được thực thi cho mỗi 'item'
    statement

# Ví dụ:
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)
`,
				b6: `while condition:
    # Khối lệnh sẽ được thực thi
    statement
    # Phải có một câu lệnh làm thay đổi 'condition' để tránh vòng lặp vô tận (infinite loop)`,
				b7: `for i in range(1, 11):
		if i == 6:
				break  # Thoát khỏi vòng lặp khi i bằng 6
		print(i)`,
				b8: `for i in range(1, 11):
		if i % 2 == 0:
				continue  # Bỏ qua số chẵn	
		print(i)`,
				b9: `for i in range(5):
		if i == 2:
				pass  # Chưa có hành động cụ thể cho i bằng 2
		else:
				print(i)`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				const currentDocId = String(this.$route.path).split('/').pop() || '';

				this.$api.documentations.getPagination({ appIds: 'python', currentDocId }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
