<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Collection" addOnClass="text-left" markedAs="about" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong MongoDB, một collection là một tập hợp các document cùng ngữ cảnh, chúng không có tính ép buộc về schema
					(schema-less). Điều này có nghĩa là các document trong cùng một collection có thể có cấu trúc khác nhau.
					Collection tương tự như bảng (table) trong RDBMS. Tuy nhiên chúng ta có thể dùng các tùy chọn (capped,
					validator, collation) để kiểm soát hành vi của collection.
				</p>
				<PageHeading text="Create" addOnClass="text-left mt-5" markedAs="create" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">Về cơ bản chúng ta có 2 cách để tạo collection:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Tạo ngầm (Implicitly):</b> Đây là cách đơn giản nhất. Khi bạn thêm document đầu tiên vào một
							collection chưa tồn tại, MongoDB sẽ tự động tạo collection đó cho chúng ta.</span
						>
					</li>
					<ul class="pl-5">
						<li
							class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc"
						>
							Ví dụ: Bạn chưa có collection <b>menus</b>. Khi bạn chạy lệnh
							<FilePath>db.menus.insertOne({ name: "Bánh mì", price: 20000 })</FilePath>, MongoDB sẽ tự động tạo
							collection <b>menus</b> và chèn document vào.
						</li>
					</ul>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>Tạo tường minh (Explicitly):</b> Sử dụng lệnh <FilePath>db.createCollection()</FilePath> giúp bạn có
							thể cấu hình collection trước khi chèn dữ liệu, chẳng hạn như thêm <b>validator</b> hoặc tạo
							<b>Capped Collection</b>.</span
						>
					</li>
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
					`Hiểu khái niệm Database trong MongoDB.`,
					`Database là không gian logic chứa nhiều Collection.`,
					`Tên DB nên dùng [a-z0-9_], tối đa 64 byte; chỉ xuất hiện khi có dữ liệu.`,
					`Các lệnh cơ bản: <b>use &lt;db&gt;</b> (chuyển/tạo DB), <b>show dbs</b> (liệt kê), <b>db.stats()</b> (thống kê), <b>db.dropDatabase()</b> (xóa).`,
					`Sao lưu &amp; phục hồi: dùng <b>mongodump</b> (backup) và <b>mongorestore</b> (restore); <b>db.copyDatabase()</b> đã lỗi thời.`,
					`Quản lý user: <b>db.createUser()</b> để tạo tài khoản với vai trò, <b>db.auth()</b> để xác thực.`,
				],
				headers: [
					{
						id: 1,
						name: 'Nhóm',
						key: 'group',
					},
					{
						id: 2,
						name: 'Lệnh',
						key: 'command',
					},
					{
						id: 3,
						name: 'Chức năng',
						key: 'function',
					},
					{
						id: 4,
						name: 'Cú pháp',
						key: 'syntax',
					},
					{
						id: 5,
						name: 'Ví dụ',
						key: 'example',
					},
				],
				items: [
					{
						group: 'Điều hướng',
						command: 'use <db>',
						function: 'Chuyển/tạo DB (lưới tạo)',
						syntax: 'use schoolDB',
						example: 'use schoolDB',
					},
					{
						group: 'Liệt kê',
						command: 'show dbs',
						function: 'Liệt kê DB có dữ liệu',
						syntax: 'show dbs',
						example: '-',
					},
					{
						group: 'Thông tin',
						command: 'db.getName()',
						function: 'Lấy tên DB hiện tại',
						syntax: 'db.getName()',
						example: '→ "schoolDB"',
					},
					{
						group: 'Thông tin',
						command: 'db.stats()',
						function: 'Thống kê DB',
						syntax: 'db.stats()',
						example: '→ dung lượng, số collection',
					},
					{
						group: 'Xóa',
						command: 'db.dropDatabase()',
						function: 'Xóa DB hiện tại',
						syntax: 'db.dropDatabase()',
						example: 'Xóa schoolDB nếu đang ở đó',
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
					.getPagination({ appIds: 'mongodb', currentDocId: 'mongo-4' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
