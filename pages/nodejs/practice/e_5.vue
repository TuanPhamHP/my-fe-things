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
		<PageHeading text="Phần 1 - Database" addOnClass="text-left mt-5" markedAs="db-structure" />
		<ul>
			<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo một database tên là <b>light_social</b> gồm:
			</li>
		</ul>
		<ul v-for="section in docs" :key="section.id" class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Collection <FilePath>{{ section.id }}</FilePath
				>: {{ section.name }}.
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

		<PageHeading text="Yêu cầu" addOnClass="text-left" markedAs="db-query" />
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
		<p className="text-slate-900 dark:text-white mt-2 pl-5">Cấu trúc cơ bản của project như sau:</p>
		<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
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
				docs: [
					{
						id: 'users',
						name: 'Người dùng',
						items: [
							'Mục đích: Lưu thông tin người dùng của mạng xã hội.',
							'Validator: name, age, phone, password là bắt buộc, phone phải unique.',
						],
						coding: 'validator + unique index on code',
					},
					{
						id: 'posts',
						name: 'Bài viết',
						items: [
							'Mục đích: Lưu thông tin bài viết của người dùng.',
							'Validator: content tối thiểu 10 ký tự',
							'Quan hệ REF: author - users (1-n).',
							'Quan hệ EMBED: tags - tags, dạng mảng.',
						],
						coding: 'validator + unique index on email + ref branch_id',
					},
					{
						id: 'comments',
						name: 'Bình luận',
						items: [
							'Mục đích: Lưu thông tin bình luận trên bài viết.',
							'Validator: content tối thiểu 5 ký tự.',
							'Quan hệ REF: user - users (1-n), post - posts (1-n).',
						],
						coding: 'validator + unique index on phone + embedded vehicles',
					},
				],
				tasks: [
					{
						id: 'basic',
						name: 'Tạo cơ sở dữ liệu',
						items: [
							'Tạo database light_social.',
							'Tạo các collection: users, posts, comments với các validator đã nêu ở phần trên.',
						],
					},
					{
						id: 'orders_logs',
						name: 'Seed data',
						items: [
							'Chèn ít nhất 5 người dùng (users) với các thông tin khác nhau.',
							'Chèn ít nhất 10 bài viết (posts), mỗi bài viết thuộc về một người dùng khác nhau và có ít nhất 2 thẻ (tags).',
							'Chèn ít nhất 15 bình luận (comments), mỗi bình luận thuộc về một bài viết và một người dùng khác nhau.',
						],
					},
				],
			};
		},
		computed: {},
		methods: {},
	};
</script>
