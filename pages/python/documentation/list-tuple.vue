<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="List" addOnClass="text-left" markedAs="list" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lists</b> là một trong những cấu trúc dữ liệu linh hoạt nhất trong Python.
					<br />
					<b>Concept:</b> List là một danh sách các phần tử <b>có thứ tự (ordered)</b> và
					<b>có thể thay đổi (mutable)</b>. List cho phép chứa các phần tử trùng lặp và các phần tử có kiểu dữ liệu khác
					nhau.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">Khai báo</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Cú pháp: Sử dụng dấu ngoặc vuông <FilePath>[]</FilePath> để khai báo list, các phần tử được phân tách bằng
							dấu phẩy <FilePath>,</FilePath>.
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Truy cập phần tử: Sử dụng chỉ số (index) để truy cập phần tử trong list. Chỉ số bắt đầu từ <b>0</b>.
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>

				<PageHeading text="Methods" addOnClass="text-left mt-3" markedAs="methods" :lvl="2" />

				<div class="text-md mb-3">
					<p class="text-slate-900 dark:text-white mt-0 leading-8">
						Python cung cấp nhiều phương thức (methods) tích hợp sẵn để thao tác với list. Dưới đây là một số phương
						thức phổ biến:
					</p>
					<DocFactoryV2Table :headers="listMethodHeaders" :items="listMethodItems" />
				</div>
				<ExpandGlobal>
					<template #header>
						<div class="text-lg font-medium text-slate-900 dark:text-white">Bài tập</div>
					</template>
					<template #body>
						<ul class="pl-5">
							<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
								Bài toán ví dụ: Quản lý tìm kiếm
							</li>
							<ul class="pl-5">
								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
								>
									Bài toán: Bạn xây dựng một ứng dụng tìm kiếm online, người dùng có thể xem danh sách lịch sử tìm kiếm,
									xoá lịch sử tìm kiếm, và tự động thêm mục tìm kiếm mới vào danh sách.
								</li>

								<li
									class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
								>
									Bài toán hiển thị dưới dạng menu trong terminal:
									<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
								</li>
							</ul>
						</ul>
					</template>
				</ExpandGlobal>
				<PageHeading text="Tuple" addOnClass="text-left" markedAs="tuple" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lists</b> là cấu trúc dữ liệu thiên về sự ổn định tuyệt đối trong Python.
					<br />
					<b>Concept:</b> Tuple là một danh sách các phần tử có thứ tự nhưng <b>KHÔNG thể thay đổi (immutable)</b>. Một
					khi đã tạo ra Tuple, bạn không thể thêm, xóa hay sửa bất kỳ phần tử nào bên trong nó.
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">Khai báo</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Cú pháp: Sử dụng dấu ngoặc tròn <FilePath>()</FilePath> để khai báo Tuple. Tốc độ truy xuất nhanh hơn
							List, an toàn dữ liệu (không sợ bị code ở nơi khác vô tình sửa đổi), và có thể dùng làm Key cho Dictionary
							(sẽ học ở buổi sau).
							<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Truy cập phần tử: Sử dụng chỉ số (index) để truy cập phần tử trong tuple. Chỉ số bắt đầu từ <b>0</b>.
							<VCodeBlock :code="b5" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<PageHeading text="Methods" addOnClass="text-left mt-3" markedAs="t-methods" :lvl="2" />

				<div class="text-md mb-3">
					<p class="text-slate-900 dark:text-white mt-0 leading-8">
						Python cung cấp nhiều phương thức (methods) tích hợp sẵn để thao tác với tuple. Dưới đây là một số phương
						thức phổ biến:
					</p>
					<DocFactoryV2Table :headers="listMethodHeaders" :items="listTupleMethodItems" />
				</div>
				<PageHeading text="List vs Tuple ?" addOnClass="text-left mt-3" markedAs="compare" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Cùng so sánh nhanh giữa List và Tuple:</p>
				<DocFactoryV2Table :headers="compareHeaders" :items="compareItems" />
				<LessonSum :sumData="lessonSum" />
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
					`List và tuple đều lưu nhiều giá trị có thứ tự, nhưng <b>list có thể thay đổi</b>, còn <b>tuple không thể thay đổi</b>.`,
					`List dùng cho dữ liệu động (thêm, xoá, sửa thường xuyên); tuple dùng cho dữ liệu cố định cần an toàn.`,
					`Tuy rằng <b>Tuple</b> nhẹ và nhanh hơn <b>List</b>, nhưng chỉ nên dùng khi đúng mục đích, không phải chỉ để tối ưu hiệu năng.`,
					`List có nhiều method thao tác mạnh (append, remove, pop, sort); tuple chỉ hỗ trợ đọc và unpacking.`,
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
				b1: `numbers = [1, 2, 3, 4]
names = ["An", "Bình", "Chi"]
mix = [1, "hello", True]
`,
				b2: `print(names[0])   # An
print(names[-1])  # Chi
`,
				b3: `===== MENU =====
1. Tìm kiếm
2. Xem lịch sử tìm kiếm
3. Xoá lịch sử tìm kiếm
4. Thoát
================
Chọn chức năng (1-4).`,
				b4: `point = (10, 20)
student = ("An", 20, 8.5)`,
				b5: `print(student[0])  # An
`,
				listMethodHeaders: [
					{
						id: 1,
						name: 'Method',
						key: 'name',
					},
					{
						id: 2,
						name: 'Mô tả ngắn gọn',
						key: 'description',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				listMethodItems: [
					{
						name: 'append(x)',
						description: 'Thêm phần tử x vào cuối list.',
						example: 'nums.append(4)',
					},
					{
						name: 'insert(i, x)',
						description: 'Chèn phần tử x vào vị trí chỉ số i.',
						example: 'nums.insert(1, 10)',
					},
					{
						name: 'extend(iterable)',
						description: 'Nối một list khác vào cuối list hiện tại.',
						example: 'nums.extend([5, 6])',
					},
					{
						name: 'remove(x)',
						description: 'Xóa phần tử đầu tiên có giá trị x được tìm thấy.',
						example: 'nums.remove(2)',
					},
					{
						name: 'pop(i)',
						description: 'Xóa và trả về phần tử tại vị trí i. Fail nếu i > length.',
						example: 'nums.pop(2)',
					},
					{
						name: 'sort()',
						description: 'Sắp xếp list tại chỗ (theo thứ tự tăng dần). param có thể là key và reverse.',
						example: 'nums.sort() # nums.sort(callable, reverse:boolean)',
					},
				],
				listTupleMethodItems: [
					{
						name: 'count(x)',
						description: 'Đếm số lần xuất hiện của.',
						example: 'nums.append(4)',
					},
					{
						name: 'index(x)',
						description: 'Trả về vị trí đầu tiên của x.',
						example: 'nums.index(x)',
					},
					{
						name: 'Unpacking',
						description: 'Là syntax giúp gán các phần tử của tuple vào các biến riêng biệt theo thứ tự.',
						example: 'a, b, c = my_tuple',
					},
				],
				compareHeaders: [
					{
						id: 1,
						name: 'Đặc điểm',
						key: 'feature',
					},
					{
						id: 2,
						name: 'List',
						key: 'list',
					},
					{
						id: 3,
						name: 'Tuple',
						key: 'tuple',
					},
				],
				compareItems: [
					{
						feature: 'Tính thay đổi (Mutability)',
						list: 'Mutable (Có thể thay đổi)',
						tuple: 'Immutable (Bất biến)',
					},
					{
						feature: 'Cú pháp',
						list: '[a, b, c]',
						tuple: '(a, b, c)',
					},
					{
						feature: 'Kích thước',
						list: 'Có thể thay đổi linh hoạt',
						tuple: 'Cố định',
					},
					{
						feature: 'Hiệu năng',
						list: 'Chậm hơn',
						tuple: 'Nhanh hơn',
					},
					{
						feature: 'Hiệu năng',
						list: 'Chậm hơn',
						tuple: 'Nhanh hơn',
					},
					{
						feature: 'Sử dụng khi nào?',
						list: 'Khi cần một danh sách có thể cập nhật.',
						tuple: 'Khi dữ liệu mang tính chất "hằng số" hoặc cấu trúc.',
					},
				],
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
