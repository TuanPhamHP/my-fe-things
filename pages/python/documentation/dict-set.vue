<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Dictionaries" addOnClass="text-left" markedAs="dict" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Concept:</b> Dictionary là một tập hợp các cặp Key-Value (Khóa - Giá trị). Hãy tưởng tượng nó như một cuốn
					từ điển giấy: chúng ta dùng "từ khóa" để tra cứu "nghĩa" của nó.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">
						Cú pháp: Sử dụng dấu ngoặc nhọn <FilePath>{key: value}</FilePath> để khai báo dict.
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Keys</b> phải là duy nhất và thuộc kiểu Immutable (như string, number, hoặc tuple).
						</li>
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							<b>Values</b> có thể là bất cứ thứ gì (list, function, hoặc thậm chí là một dictionary khác).
						</li>

						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Từ Python 3.7+, Dictionary giữ thứ tự các phần tử khi được thêm vào.
							<VCodeBlock :code="b1" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>

				<PageHeading text="Methods" addOnClass="text-left mt-3" markedAs="methods" :lvl="2" />

				<div class="text-md mb-3">
					<p class="text-slate-900 dark:text-white mt-0 leading-8">
						Python cung cấp nhiều phương thức (methods) tích hợp sẵn để thao tác với <b>dict</b>. Dưới đây là một số
						phương thức phổ biến:
					</p>
					<DocFactoryV2Table :headers="listMethodHeaders" :items="listMethodItems" />
				</div>
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					Ngoài ra, chúng ta có thể for qua các phần tử trong dictionary bằng cách sử dụng vòng lặp
					<FilePath>for</FilePath> để lấy cả key và value.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="python" theme="atom-one-dark" />
				<PageHeading text="Sets" addOnClass="text-left mt-3" markedAs="sets" />
				<p class="text-slate-900 dark:text-white mt-0 leading-8">
					<b>Concept:</b> Set là một tập hợp các phần tử duy nhất (unique) và không có thứ tự (unordered).
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content font-bold">Khai báo</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-2 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Cú pháp: Sử dụng dấu ngoặc nhọn <FilePath>{}</FilePath> để khai báo Tuple. Chuyên dùng để loại bỏ các phần
							tử trùng lặp trong một danh sách. Chuyên dùng trong các phép toán tập hợp như hợp, giao, hiệu.
							<VCodeBlock :code="b4" highlightjs lang="python" theme="atom-one-dark" />
						</li>
					</ul>
				</ul>
				<PageHeading text="Methods & Operator" addOnClass="text-left mt-3" markedAs="t-methods" :lvl="2" />

				<div class="text-md mb-3">
					<p class="text-slate-900 dark:text-white mt-0 leading-8">
						Python cung cấp nhiều phương thức (methods) và toán tử (operator) để xử lý với Set:
					</p>
					<DocFactoryV2Table :headers="listMethodHeaders" :items="setOperationItems" />
				</div>
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
					`Dictionary lưu dữ liệu theo cặp key–value, cho phép tra cứu rất nhanh theo key; key phải immutable để đảm bảo cơ chế hash hoạt động đúng.`,
					`Set lưu các phần tử không trùng lặp, không quan tâm thứ tự, và rất hiệu quả cho các phép toán tập hợp như hợp, giao, hiệu.`,
					`Dictionary dùng cho bài toán ánh xạ và quản lý dữ liệu có định danh; Set dùng cho bài toán loại trùng, so sánh và kiểm tra tồn tại.`,
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
				b1: `nhan_vien = {
    "id": "NV001",
    "ten": "Trần Văn B",
    "ky_nang": ["Python", "SQL", "Docker"],
    "phong_ban": "Kỹ thuật"
}
`,
				b2: `for key, value in nhan_vien.items():
    print(f"- {key}: {value}")
`,
				b3: `===== MENU =====
1. Tìm kiếm
2. Xem lịch sử tìm kiếm
3. Xoá lịch sử tìm kiếm
4. Thoát
================
Chọn chức năng (1-4).`,
				b4: `emails_raw = ["a@gmail.com", "b@yahoo.com", "a@gmail.com", "c@outlook.com"]
blacklist = {"b@yahoo.com", "d@spam.com"}

# 1. Loại bỏ trùng lặp bằng cách chuyển list thành set
emails_unique = set(emails_raw)
print(f"Emails duy nhất: {emails_unique}") 
# Kết quả: {'c@outlook.com', 'a@gmail.com', 'b@yahoo.com'}

# 2. Loại bỏ các email nằm trong blacklist (Phép hiệu)
emails_valid = emails_unique - blacklist
print(f"Emails hợp lệ để gửi: {emails_valid}")`,
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
						name: 'dict[key]',
						description: 'Truy cập hoặc gán giá trị cho key trong dictionary.',
						example: "user['name']",
					},
					{
						name: 'dict.get(key)',
						description: 'Lấy giá trị của key, trả về None nếu key không tồn tại (không gây lỗi).',
						example: "user.get('age')",
					},
					{
						name: 'dict.get(key, default)',
						description: 'Lấy giá trị của key, trả về giá trị mặc định nếu key không tồn tại.',
						example: "user.get('age', 0)",
					},
					{
						name: 'dict.keys()',
						description: 'Lấy danh sách tất cả key trong dictionary.',
						example: 'user.keys()',
					},
					{
						name: 'dict.values()',
						description: 'Lấy danh sách tất cả value trong dictionary.',
						example: 'user.values()',
					},
					{
						name: 'dict.items()',
						description: 'Lấy danh sách các cặp (key, value) dưới dạng tuple.',
						example: 'user.items()',
					},
					{
						name: 'key in dict',
						description: 'Kiểm tra key có tồn tại trong dictionary hay không.',
						example: "'email' in user",
					},
					{
						name: 'dict.pop(key)',
						description: 'Xoá key khỏi dictionary và trả về value tương ứng.',
						example: "user.pop('age')",
					},
					{
						name: 'dict.pop(key, default)',
						description: 'Xoá key và trả về default nếu key không tồn tại.',
						example: "user.pop('age', None)",
					},
					{
						name: 'del dict[key]',
						description: 'Xoá key khỏi dictionary (gây lỗi nếu key không tồn tại).',
						example: "del user['age']",
					},
					{
						name: 'dict.clear()',
						description: 'Xoá toàn bộ phần tử trong dictionary.',
						example: 'user.clear()',
					},
					{
						name: 'dict.update(other_dict)',
						description: 'Gộp dữ liệu từ dictionary khác vào dictionary hiện tại.',
						example: "user.update({'age': 20})",
					},
					{
						name: 'dict.copy()',
						description: 'Tạo bản sao nông (shallow copy) của dictionary.',
						example: 'new_user = user.copy()',
					},
					{
						name: 'dict.setdefault(key, default)',
						description: 'Lấy value của key; nếu key chưa tồn tại thì tạo key với giá trị mặc định.',
						example: "user.setdefault('role', 'guest')",
					},
				],
				setOperationItems: [
					{
						name: 'Union (|)',
						description: 'Lấy hợp của hai tập hợp, chứa tất cả phần tử không trùng nhau.',
						example: 'A | B',
					},
					{
						name: 'Union (set.union)',
						description: 'Lấy hợp của hai tập hợp bằng method union().',
						example: 'A.union(B)',
					},
					{
						name: 'Intersection (&)',
						description: 'Lấy giao của hai tập hợp, chỉ chứa phần tử xuất hiện ở cả hai.',
						example: 'A & B',
					},
					{
						name: 'Intersection (set.intersection)',
						description: 'Lấy giao của hai tập hợp bằng method intersection().',
						example: 'A.intersection(B)',
					},
					{
						name: 'Difference (-)',
						description: 'Lấy hiệu của hai tập hợp, chứa phần tử có trong A nhưng không có trong B.',
						example: 'A - B',
					},
					{
						name: 'Difference (set.difference)',
						description: 'Lấy hiệu của hai tập hợp bằng method difference().',
						example: 'A.difference(B)',
					},
					{
						name: 'Symmetric Difference (^)',
						description: 'Lấy phần tử chỉ xuất hiện ở một trong hai tập hợp.',
						example: 'A ^ B',
					},
					{
						name: 'Symmetric Difference (set.symmetric_difference)',
						description: 'Lấy phần tử chỉ xuất hiện ở một trong hai tập hợp bằng method symmetric_difference().',
						example: 'A.symmetric_difference(B)',
					},
					{
						name: 'Subset (<=)',
						description: 'Kiểm tra A có phải là tập con của B hay không.',
						example: 'A <= B',
					},
					{
						name: 'Proper Subset (<)',
						description: 'Kiểm tra A có phải là tập con thực sự của B hay không.',
						example: 'A < B',
					},
					{
						name: 'Superset (>=)',
						description: 'Kiểm tra A có phải là tập cha của B hay không.',
						example: 'A >= B',
					},
					{
						name: 'Proper Superset (>)',
						description: 'Kiểm tra A có phải là tập cha thực sự của B hay không.',
						example: 'A > B',
					},
					{
						name: 'Disjoint',
						description: 'Kiểm tra hai tập hợp có phần tử chung hay không.',
						example: 'A.isdisjoint(B)',
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
