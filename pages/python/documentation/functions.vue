<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Functions, Parameters, và Callables" addOnClass="text-left" markedAs="fpc" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Bài giảng này chúng ta tập trung vào việc tạo, sử dụng, và hiểu sâu hơn về các loại hàm khác nhau trong
					Python, bao gồm
					<b>hàm do người dùng định nghĩa</b>, <b>hàm ẩn danh (lambda)</b> và khái niệm <b>callable</b>.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Được đặt tên.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Có thể nhận input (tham số)
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Có thể trả về output
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Có thể được tái sử dụng
					</li>
				</ul>
				<PageHeading text="User-Defined Functions" addOnClass="text-left mt-3" markedAs="user-def" :lvl="2" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						Hàm được định nghĩa bằng từ khóa def.
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>def</FilePath>: Từ khóa bắt buộc để bắt đầu định nghĩa hàm.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>ten_ham</FilePath>: Tên hàm, tuân thủ quy tắc đặt tên <b>Identifier</b>.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>parameters</FilePath>: Tham số, đây là các giá trị đầu vào.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>Docstring</FilePath>: Chuỗi tài liệu mô tả hàm, rất quan trọng cho tài liệu hóa.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>return</FilePath>: Trả về một giá trị nào đó cho nơi gọi hàm (tùy chọn). Nếu không có return,
							hàm sẽ tự động trả về None.
						</li>
					</ul>
				</ul>

				<PageHeading text="Lambda Function" addOnClass="text-left mt-3" markedAs="lambda" :lvl="2" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						Hàm được định nghĩa bằng từ khóa lambda. Là các hàm nhỏ, không tên (ẩn danh), thường được sử dụng cho các
						tác vụ đơn giản, ngắn gọn.
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Cú pháp: Rất ngắn gọn và luôn chỉ chứa một biểu thức (expression).
							<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Hàm lambda luôn trả về kết quả của biểu thức.
						</li>
					</ul>
				</ul>

				<PageHeading text="Callables" addOnClass="text-left mt-3" markedAs="call" :lvl="2" />

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						Trong Python, mọi thứ có thể được gọi (executed) đều là một callable. Tức là, Một đối tượng là callable nếu
						nó có thể được gọi bằng toán tử dấu ngoặc đơn (). Từ đó ta có các loại Callables phổ biến:
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>User-defined functions</b>: Các hàm định nghĩa bằng def.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Built-in functions</b>: Các hàm tích hợp sẵn như print(), len().
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Methods</b>: Hàm thuộc về một đối tượng/lớp (ví dụ: list.append()).
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Classes</b>: Khi bạn gọi một class (ví dụ: list()), nó sẽ tạo ra một instance (đối tượng) mới.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Lambda functions
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						Kiểm tra: Sử dụng hàm callable() để kiểm tra xem một đối tượng có thể gọi được hay không.
						<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
					</li>
				</ul>

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
				b1: `def ten_ham(tham_so_1, tham_so_2, ...):
    """Docstring: Mô tả ngắn gọn chức năng của hàm."""
    # Khối lệnh của hàm
    ket_qua = expression
    return ket_qua # Tùy chọn: trả về giá trị`,
				b2: `lambda arguments: expression
# Ví dụ:
binh_phuong = lambda x: x * x
ket_qua = binh_phuong(5)
print(f"Bình phương của 5 là: {ket_qua}")`,
				b3: `def ham_test():
    pass

bien_so = 100

print(f"Hàm (def) có thể gọi: {callable(ham_test)}") # True
print(f"Biến số có thể gọi: {callable(bien_so)}") # False
print(f"Hàm len() có thể gọi: {callable(len)}") # True
print(f"Hàm lambda có thể gọi: {callable(lambda x: x + 1)}") # True`,
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
