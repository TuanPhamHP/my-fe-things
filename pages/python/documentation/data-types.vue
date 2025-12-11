<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Data Types" addOnClass="text-left" markedAs="types" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Python là ngôn ngữ kiểu động (Dynamically Typed), nghĩa là bạn không cần khai báo kiểu dữ liệu khi tạo biến,
					nhưng mọi giá trị đều có một kiểu dữ liệu. Tiếp theo, chúng ta sẽ tìm hiểu về các kiểu dữ liệu cơ bản trong
					Python.
				</p>
				<PageHeading text="Numeric" addOnClass="text-left mt-3" markedAs="numeric" :lvl="2" />
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Dùng để lưu trữ các giá trị số.
						</li>
					</ul>
				</ul>
				<div class="text-md mb-3">
					<DocFactoryV2Table :headers="numericHeaders" :items="numericsItems" />
				</div>
				<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-0 mb-2 leading-8">
					<b>Lưu ý</b>: Với kiểu số trong Python, chúng ta có thể dùng undescore <FilePath>_</FilePath> để phân tách các
					chữ số cho dễ đọc hơn. Ví dụ: <FilePath>1_000_000</FilePath> tương đương với <FilePath>1000000</FilePath>. Khi
					in ra hoặc sử dụng trong tính toán, Python sẽ bỏ qua các dấu gạch dưới này.
				</p>
				<PageHeading text="Sequence Types" addOnClass="text-left mt-4" markedAs="sequence" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Sequence Types trong Python là các kiểu dữ liệu có thể chứa nhiều phần tử và hỗ trợ truy cập các phần tử theo
					chỉ mục (index), đồng thời hỗ trợ các thao tác tuần tự như slicing, lặp (iteration), kiểm tra membership, v.v.
					Các sequence phổ biến bao gồm:
				</p>
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							v-for="item in sequenceItems"
							:key="item.name"
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>{{ item.name }}</FilePath> - {{ item.useages }}
						</li>
					</ul>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">Các sequence có thể chia thành:</p>
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Mutable sequences:</b> <FilePath>list</FilePath>, <FilePath>bytearray</FilePath>
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Immutable sequences:</b> <FilePath>tuple</FilePath>, <FilePath>str</FilePath>,
							<FilePath>range</FilePath>, <FilePath>bytes</FilePath>
						</li>
					</ul>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 font-bold dark:text-white my-2 leading-8 text-lg text-content">
						Các đặc tính chung của Sequence:
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Sequence hỗ trợ nhiều phương thức để truy cập và thao tác:
							<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Lưu ý</b>: Nói thêm 1 chút về str, đây là kiểu dữ liệu chuỗi ký tự trong Python. Chuỗi có thể được định
					nghĩa bằng dấu nháy đơn ('...') hoặc dấu nháy kép ("...").
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						String là immutable (bất biến), nghĩa là không thể thay đổi nội dung của nó sau khi tạo.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Ngoài ra, Python hỗ trợ chuỗi đa dòng bằng cách sử dụng dấu nháy ba ('''...''' hoặc """...""").
					</li>
				</ul>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content">Thao tác cơ bản với chuỗi:</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Nối chuỗi (Concatenation): Sử dụng toán tử <FilePath>+</FilePath>. VD:
							<FilePath>'Hello' + ' World'</FilePath>
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Lặp chuỗi (Repetition): Sử dụng toán tử <FilePath>*</FilePath>. VD: <FilePath>'Hi' * 3</FilePath>
						</li>
					</ul>
				</ul>

				<PageHeading text="Boolean Type" addOnClass="text-left mt-4" markedAs="boolean" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Chỉ có hai giá trị: <FilePath>True</FilePath> (Đúng) và <FilePath>False</FilePath> (Sai). Thường được sử dụng
					trong các câu lệnh điều kiện. <br />
					<b>Lưu ý</b>: Trong Python, <FilePath>True</FilePath> và <FilePath>False</FilePath> được viết hoa chữ cái đầu.
				</p>

				<PageHeading text="Type Casting" addOnClass="text-left mt-4" markedAs="typeCast" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Type Casting là quá trình chuyển đổi kiểu dữ liệu của một giá trị sang kiểu dữ liệu khác. Python cung cấp các
					hàm tích hợp để thực hiện việc này:
				</p>
				<ul class="pl-5">
					<ul class="pl-5">
						<li
							v-for="item in typeCastingItems"
							:key="item.name"
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<FilePath>{{ item.name }}</FilePath> - {{ item.useages }}
						</li>
					</ul>
				</ul>
				<VCodeBlock :code="b3" highlightjs lang="python" theme="atom-one-dark" />
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
					`Python sử dụng hệ thống kiểu động, nhưng mọi giá trị đều thuộc một kiểu dữ liệu cụ thể như int, float, complex hoặc các sequence như list, tuple và str.`,
					`Sequence Types hỗ trợ indexing, slicing, iteration và chia thành hai nhóm: mutable (list, bytearray) và immutable (tuple, str, range, bytes).`,
					`Chuỗi (string) là immutable, nghĩa là mọi thao tác thay đổi đều tạo ra chuỗi mới; Python hỗ trợ nối chuỗi, lặp chuỗi và định nghĩa chuỗi đa dòng.`,
					`Boolean chỉ gồm hai giá trị True và False, chủ yếu dùng trong điều kiện và logic chương trình.`,
					`Python hỗ trợ chuyển đổi kiểu dữ liệu (type casting) thông qua các hàm như int(), float(), str(), list() và tuple() để đảm bảo dữ liệu phù hợp với mục đích xử lý.`,
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
						name: 'Kiểu',
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
				numericsItems: [
					{
						name: 'int',
						description: 'Số nguyên (không có phần thập phân).',
						example: '10, -500, 0',
					},
					{
						name: 'float',
						description: 'Số thực (có phần thập phân).',
						example: '3.14, 1.5e-3',
					},
					{
						name: 'complex',
						description: 'Số phức',
						example: '2 + 3j, -1j',
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
