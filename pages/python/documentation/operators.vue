<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Operators" addOnClass="text-left" markedAs="operator" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Operators (toán tử) là các ký hiệu hoặc từ khóa được sử dụng để thực hiện các phép toán trên các giá trị hoặc
					biến trong Python. Python hỗ trợ nhiều loại toán tử khác nhau, bao gồm toán tử số học, toán tử so sánh, toán
					tử logic, và nhiều loại khác.
				</p>
				<PageHeading text="Arithmetic Operators" addOnClass="text-left mt-3" markedAs="arith" :lvl="2" />
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dùng để thực hiện các phép tính toán học cơ bản.
						</li>
					</ul>
				</ul>
				<div class="text-md mb-3">
					<DocFactoryV2Table :headers="numericHeaders" :items="numericsItems" />
				</div>
				<PageHeading text="Comparison Operators" addOnClass="text-left mt-3" markedAs="compr" :lvl="2" />
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dùng để so sánh hai giá trị, luôn trả về kết quả là Boolean (<FilePath>True</FilePath> hoặc
							<FilePath>False</FilePath>).
						</li>
					</ul>
				</ul>
				<div class="text-md mb-3">
					<DocFactoryV2Table :headers="numericHeaders" :items="compareItems" />
				</div>
				<PageHeading text="Logical Operators" addOnClass="text-left mt-3" markedAs="logic" :lvl="2" />
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Kết hợp các biểu thức Boolean, thường được dùng trong các câu lệnh điều kiện.
						</li>
					</ul>
				</ul>
				<div class="text-md mb-3">
					<DocFactoryV2Table :headers="numericHeaders" :items="logicItems" />
				</div>
				<PageHeading text="Assignment Operators" addOnClass="text-left mt-3" markedAs="assign" :lvl="2" />
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dùng để gán giá trị cho biến. Phổ biến nhất là <FilePath>=</FilePath>, ngoài ra còn có các dạng kết hợp.
						</li>
					</ul>
				</ul>
				<div class="text-md mb-3">
					<DocFactoryV2Table :headers="numericHeaders" :items="assignmentItems" />
				</div>
				<PageHeading text="Operator Precedence" addOnClass="text-left mt-3" markedAs="predence" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">
						Trong một biểu thức phức tạp, Python tuân theo thứ tự ưu tiên của toán tử (giống như quy tắc trong toán
						học):
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dấu ngoặc đơn <FilePath>()</FilePath> có ưu tiên cao nhất.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Phép nhân <FilePath>*</FilePath>, chia <FilePath>/</FilePath>, chia lấy phần nguyên
							<FilePath>//</FilePath>, và chia lấy phần dư <FilePath>%</FilePath> có ưu tiên cao hơn phép cộng
							<FilePath>+</FilePath> và trừ <FilePath>-</FilePath>.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Phép so sánh (như <FilePath>==</FilePath>, <FilePath>!=</FilePath>, <FilePath>&gt;</FilePath>,
							<FilePath>&lt;</FilePath>) có ưu tiên thấp hơn phép toán số học.
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Lưu ý: Luôn dùng dấu ngoặc đơn <FilePath>()</FilePath> để đảm bảo thứ tự thực hiện theo ý muốn, ngay cả
							khi thứ tự ưu tiên tự nhiên đã đúng.
						</li>
					</ul>
				</ul>

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
				sequenceItems: [
					{
						name: 'list',
						useages: `cấu trúc dữ liệu biến đổi`,
					},
					{
						name: 'tuple',
						useages: `cấu trúc dữ liệu không biến đổi`,
					},
					{
						name: 'str',
						useages: `chuỗi ký tự`,
					},
					{
						name: 'range',
						useages: `vòng lặp, index sequence`,
					},
					{ name: 'bytes', useages: `dữ liệu nhị phân` },
					{ name: 'bytearray', useages: `dữ liệu nhị phân biến đổi` },
				],
				typeCastingItems: [
					{
						name: 'int()',
						useages: 'Chuyển đổi giá trị sang kiểu số nguyên (integer).',
					},
					{
						name: 'float()',
						useages: 'Chuyển đổi giá trị sang kiểu số thực (floating-point).',
					},
					{
						name: 'bool()',
						useages: 'Chuyển đổi giá trị sang kiểu boolean (True hoặc False).',
					},
					{
						name: 'str()',
						useages: 'Chuyển đổi giá trị sang kiểu chuỗi (string).',
					},
					{
						name: 'list()',
						useages: 'Chuyển đổi giá trị sang kiểu danh sách (list).',
					},
					{
						name: 'tuple()',
						useages: 'Chuyển đổi giá trị sang kiểu bộ (tuple).',
					},
				],
				numericHeaders: [
					{
						id: 1,
						name: 'Toán tử',
						key: 'operator',
					},
					{
						id: 2,
						name: 'Tên',
						key: 'name',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
					{
						id: 4,
						name: 'Kết quả',
						key: 'reasult',
					},
				],
				numericsItems: [
					{
						operator: '+',
						name: 'Cộng',
						example: '10 + 3',
						reasult: '13',
					},
					{
						operator: '-',
						name: 'Trừ',
						example: '10 - 3',
						reasult: '7',
					},
					{
						operator: '*',
						name: 'Nhân',
						example: '10 * 3',
						reasult: '30',
					},
					{
						operator: '/',
						name: 'Chia',
						example: '10 / 3',
						reasult: '3.3333...',
					},
					{
						operator: '//',
						name: 'Chia lấy phần nguyên',
						example: '10 // 3',
						reasult: '3',
					},
					{
						operator: '%',
						name: 'Chia lấy phần dư',
						example: '10 % 3',
						reasult: '1',
					},
					{
						operator: '**',
						name: 'Lũy thừa',
						example: '2 ** 3',
						reasult: '8',
					},
				],
				compareItems: [
					{
						operator: '==',
						name: 'Bằng nhau',
						example: '5 == 5',
						reasult: 'True',
					},
					{
						operator: '!=',
						name: 'Khác nhau',
						example: '5 != 3',
						reasult: 'True',
					},
					{
						operator: '>',
						name: 'Lớn hơn',
						example: '7 > 4',
						reasult: 'True',
					},
					{
						operator: '<',
						name: 'Nhỏ hơn',
						example: '2 < 5',
						reasult: 'True',
					},
					{
						operator: '>=',
						name: 'Lớn hơn hoặc bằng',
						example: '6 >= 6',
						reasult: 'True',
					},
					{
						operator: '<=',
						name: 'Nhỏ hơn hoặc bằng',
						example: '3 <= 4',
						reasult: 'True',
					},
				],
				logicItems: [
					{
						operator: 'and',
						name: 'Và',
						example: 'True and False',
						reasult: 'False',
					},
					{
						operator: 'or',
						name: 'Hoặc',
						example: 'True or False',
						reasult: 'True',
					},
					{
						operator: 'not',
						name: 'Phủ định',
						example: 'not True',
						reasult: 'False',
					},
				],
				assignmentItems: [
					{
						operator: '=',
						name: 'Gán giá trị',
						example: 'x = 10',
						reasult: 'x có giá trị 10',
					},
					{
						operator: '+=',
						name: 'Cộng và gán',
						example: 'x += 5',
						reasult: 'x = x + 5',
					},
					{
						operator: '-=',
						name: 'Trừ và gán',
						example: 'x -= 3',
						reasult: 'x = x - 3',
					},
					{
						operator: '*=',
						name: 'Nhân và gán',
						example: 'x *= 2',
						reasult: 'x = x * 2',
					},
					{
						operator: '/=',
						name: 'Chia và gán',
						example: 'x /= 4',
						reasult: 'x = x / 4',
					},
				],
				b1: `# Khai báo giá trị Pi là float
PI = 3.14159

# Bán kính là float
ban_kinh = 5.5

# Công thức tính diện tích: S = PI * r^2
dien_tich = PI * ban_kinh * ban_kinh

# In kết quả và kiểm tra kiểu dữ liệu
print(f"Diện tích: {dien_tich}") 
print(f"Kiểu dữ liệu của ban_kinh: {type(ban_kinh)}")
print(f"Kiểu dữ liệu của dien_tich: {type(dien_tich)}")`,
				b2: `# Indexing
s = 'Hello';
print(s[0])

# Slicing
print(s[1:4])

# Length
print(len(s))

# Iteration
for char in s:
		print(char)

# Membership
print('H' in s)
`,
				b3: ` so_nhap_vao = "150" # Là kiểu string
so_thue = 20 # Là kiểu int

# Ép kiểu từ str sang int để tính toán
tong_so = int(so_nhap_vao) + so_thue

# Ép kiểu kết quả sang chuỗi để in ra
ket_qua_str = str(tong_so)
print(f"Tổng số là: {ket_qua_str}") # Output: Tổng số là: 170
print(f"Kiểu dữ liệu mới: {type(ket_qua_str)}")`,
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
