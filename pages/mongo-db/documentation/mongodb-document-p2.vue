<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Update" addOnClass="text-left" markedAs="update" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					MongoDB hỗ trợ cập nhật document bằng nhiều phương thức:
				</p>
				<DocFactoryV2Table :headers="headers" :items="items" />
				<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content">
					<b>Trong đó:</b>
				</li>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>filter:</b> Là bộ lọc dùng để xác định các document cần cập nhật (tương tự WHERE trong SQL).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>update:</b> Là đối tượng chứa các toán tử cập nhật và giá trị mới cần áp dụng (tương tự SET trong SQL).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>options (lựa chọn):</b> Là các tùy chọn bổ sung như upsert (chèn nếu không tìm thấy), arrayFilters (lọc
							mảng)...
						</span>
					</li>
				</ul>
				<PageHeading text="Toán tử cập nhật" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Các toán tử cập nhật dùng với phương thức <b>updateOne()</b> và <b>updateMany()</b>:
				</p>
				<DocFactoryV2Table :headers="headers3" :items="items3" />
				<PageHeading text="Delete" addOnClass="text-left mt-3" markedAs="delete" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Cuối cùng, chúng ta có thể xóa document bằng các phương thức:
				</p>
				<DocFactoryV2Table :headers="headers2" :items="items2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Lưu ý: Nhấn mạnh rằng nếu không có điều kiện truy vấn, <b>deleteMany có thể xóa toàn bộ collection</b>. Cần
					cẩn thận khi sử dụng.
				</p>

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
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	export default {
		components: {
			LessonSum,
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
				lessonSum: [
					'Update: dùng updateOne(), updateMany(), replaceOne() để cập nhật/ghi đè document theo filter.',
					'Toán tử update phổ biến: $set (gán giá trị), $unset (xóa trường), $inc (tăng/giảm số), $push (thêm vào mảng), $pull (xóa khỏi mảng), $addToSet (thêm nếu chưa tồn tại).',
					'Delete: dùng deleteOne() để xóa 1 document, deleteMany() để xóa nhiều document theo filter.',
					'Cảnh báo: deleteMany() không có filter sẽ xóa toàn bộ collection.',
				],
				headers: [
					{
						id: 1,
						name: 'Hàm',
						key: 'command',
					},
					{
						id: 2,
						name: 'Cú pháp',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Mô tả',
						key: 'example',
					},
				],
				items: [
					{
						command: 'updateOne()',
						syntax: 'db.collection.updateOne(filter, update, options)',
						example: 'Cập nhật document đầu tiên khớp filter.',
					},
					{
						command: 'updateMany()',
						syntax: 'db.collection.updateMany(filter, update, options)',
						example: 'Cập nhật tất cả document khớp filter.',
					},
					{
						command: 'replaceOne()',
						syntax: 'db.collection.replaceOne(filter, replacement, options)',
						example: 'Thay thế toàn bộ document bằng document mới.',
					},
				],
				headers2: [
					{
						id: 1,
						name: 'Hàm',
						key: 'command',
					},
					{
						id: 2,
						name: 'Cú pháp',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Mô tả',
						key: 'example',
					},
				],
				items2: [
					{
						command: 'deleteOne()',
						syntax: 'db.collection.deleteOne(filter)',
						example: 'Xóa một document đầu tiên khớp với điều kiện.',
					},
					{
						command: 'deleteMany()',
						syntax: 'db.collection.deleteMany(filter)',
						example: 'Xóa tất cả các document khớp với điều kiện.',
					},
				],
				headers3: [
					{
						id: 1,
						name: 'Toán tử',
						key: 'operator',
					},
					{
						id: 2,
						name: 'Ý nghĩa',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items3: [
					{
						operator: '$set',
						syntax: 'Gán giá trị mới cho một trường. Tạo trường mới nếu chưa có.',
						example: "db.students.updateOne({ name: 'Nguyễn Văn B' }, { $set: { gpa: 3.8 } })",
					},
					{
						operator: '$unset',
						syntax: 'Xóa một trường khỏi document.',
						example: "db.students.updateOne({ name: 'Nguyễn Văn B' }, { $unset: { gpa: '' } })",
					},
					{
						operator: '$inc',
						syntax: 'Tăng/giảm giá trị của một trường số.',
						example: "db.students.updateOne({ name: 'Nguyễn Văn B' }, { $inc: { age: 1 } })",
					},
					{
						operator: '$push',
						syntax: 'Thêm một phần tử vào cuối mảng.',
						example: "db.students.updateOne({ name: 'Nguyễn Văn B' }, { $push: { skills: 'Express.js' } })",
					},
					{
						operator: '$pull',
						syntax: 'Xóa tất cả các phần tử trong mảng khớp với giá trị đã cho.',
						example: "db.students.updateOne({ name: 'Nguyễn Văn B' }, { $pull: { skills: 'Express.js' } })",
					},
					{
						operator: '$addToSet',
						syntax: 'Thêm một phần tử vào mảng, chỉ khi nó chưa tồn tại.',
						example: "db.students.updateOne({ name: 'Nguyễn Văn B' }, { $addToSet: { skills: 'Express.js' } })",
					},
				],
				headers4: [
					{
						id: 1,
						name: 'Toán tử',
						key: 'operator',
					},
					{
						id: 2,
						name: 'Ý nghĩa',
						key: 'syntax',
					},
					{
						id: 3,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items4: [
					{
						command: 'sort()',
						syntax: 'db.students.find().sort({ "name": 1 })',
						example: 'Sắp xếp kết quả theo một hoặc nhiều trường.',
					},
					{
						command: 'limit()',
						syntax: 'db.collection.find().limit(number)',
						example: 'Giới hạn số lượng document trả về.',
					},
					{
						command: 'skip()',
						syntax: 'db.collection.find().skip(number).limit(number)',
						example: 'Dùng để bỏ qua N document đầu tiên trong kết quả query.',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-6' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
