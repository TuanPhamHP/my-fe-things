<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Bài tập: Ôn tập</p>

		<p className="text-slate-900 dark:text-white mt-2 text-lg">
			<b>Mô tả:</b>
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			Giả sử bạn đang thiết kế một hệ thống mạng xã hội đơn giản, nơi người dùng có thể đăng bài viết, và bình luận trên
			bài viết của nhau. Hệ thống cần lưu trữ thông tin về người dùng, bài viết và bình luận.
		</p>
		<PageHeading text="Phần 2 - Query" addOnClass="text-left mt-5" markedAs="db-structure" :lvl="2" />
		<ul>
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tiếp theo bài tập trước, chúng ta sẽ thực hành <b>CRUD API & Populate nâng cao:</b>
			</li>
		</ul>

		<ul v-for="section in tasks" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>{{ section.name }}</FilePath>
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						{{ item }}
					</li>
				</ul>
			</li>
		</ul>
		<PageHeading text="Phần 3 - Nâng cao" addOnClass="text-left mt-5" markedAs="db-structure" :lvl="2" />
		<ul v-for="section in tasks2" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				<FilePath>{{ section.name }}</FilePath>
				<ul class="pl-10">
					<li
						v-for="item in section.items"
						:key="item"
						class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
					>
						{{ item }}
					</li>
				</ul>
			</li>
		</ul>
		<DocNextPage :pagination="pagePagination" />
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
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
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				counter: 0,
				pagePagination: {
					next: {
						title: 'Bài 2',
						link: '/mongo-db/practice/e_3',
					},
					prev: {
						title: 'Danh sách',
						link: '/mongo-db/practice',
					},
				},
				b1: `blog-api/
│
├── models/
│   ├── user.model.js
│   ├── category.model.js
│   ├── post.model.js
│   └── comment.model.js
├── controllers/
│   └── user.controller.js
├── config/
│   └── database.config.js
├── routes/
│   └── user.routes.js
├── seed.js
└── main.js
│
├── .env
├── package.json
└── README.md
`,

				tasks: [
					{
						id: 'user',
						name: 'Users',
						items: [
							'/api/users | GET: Lấy tất cả user, có thể filter theo name',
							'/api/users/:id | GET: Lấy chi tiết 1 user',
							'/api/users | POST: Thêm người dùng mới (validate name, phone unique, password)',
							'/api/users/:id | PUT: Cập nhật thông tin user',
							'/api/users/:id | DELETE: Xóa người dùng (và cân nhắc xóa bài viết, comment liên quan)',
						],
					},
					{
						id: 'post',
						name: 'Posts',
						items: [
							'/api/posts | GET: Lấy tất cả bài viết',
							'/api/posts/:id | GET: Lấy bài viết theo ID',
							'/api/posts | POST: Tạo bài viết mới (content ≥ 10 ký tự, tags là array)',
							'/api/posts/:id | PUT: Cập nhật nội dung hoặc tags bài viết',
							'/api/posts/:id | DELETE: Xóa bài viết (kèm comment nếu có)',
							'/api/posts?author=<id>&tag=nodejs&limit=5&sort=-createdAt | GET: Lọc nâng cao',
						],
					},
					{
						id: 'comment',
						name: 'Comments',
						items: [
							'/api/comments | GET: Lấy tất cả bình luận, populate("user", "name").populate("post", "content")',
							'/api/comments | POST: Tạo comment mới (content ≥ 5 ký tự, có ref user & post)',
							'/api/comments/:id | DELETE: Xóa comment theo ID',
						],
					},
				],
				tasks2: [
					{
						id: 'populate',
						name: 'Populate nâng cao',
						items: [
							'/api/posts/:id | GET: Lấy bài viết + user',
							'/api/posts/:id/comments | GET: Lấy comments của bài viết',
						],
					},
					{
						id: 'statistic',
						name: 'Thống kê',
						items: [
							'/api/statistic/users/posts | GET: Trả về tổng số bài viết của từng user, sắp xếp giảm dần theo số bài viết',
							'/api/statistic/users/comments | GET: Trả về tổng số bình luận của từng user, sắp xếp giảm dần theo số bình luận',
						],
					},
					{
						id: 'logger',
						name: 'Lưu log hệ thống',
						items: [
							'Khi có bất kì api nào bị lỗi (404, 500, ...), lưu log vào file logs/system-log.log với định dạng: [timestamp - type] - endpoint|method: error_message. EG: [2023-10-01T12:00:00Z - ERROR] - /api/users|GET: User not found',
							'Lưu log vào file với ngày tương ứng. EG: logs/system-log-2025-13-11.log. Trong trường hợp file không tồn tại, tự động tạo mới file.',
						],
					},
					{
						id: 'schema-methods',
						name: 'Schema Logic & Methods',
						items: [
							'UserSchema.virtual("postCount"): Trả về tổng số bài viết mà user đã đăng (dùng populate hoặc aggregate)',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
