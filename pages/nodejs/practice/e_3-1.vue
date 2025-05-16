<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<PageHeading text="Bài tập" addOnClass="text-left" markedAs="env" />
		</div>
		<div class="py-2 mb-5">
			<div class="h-[1px] dark:bg-white bg-slate-900"></div>
		</div>
		<PageHeading text="Đề bài" addOnClass="text-left" markedAs="env" />
		<p className="text-slate-900 dark:text-white mt-5 font-bold text-xl">Xây dựng Server Node.js với Routes cơ bản:</p>

		<p className="text-slate-900 dark:text-white mt-5">
			xây dựng một RESTful API đơn giản để quản lý người dùng. API này sẽ gồm các route:
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5">
			<FilePath>GET /api/users:</FilePath> Danh sách user (công khai).
			<br />
			<FilePath>GET /api/users/me:</FilePath> Thông tin user hiện tại (cần xác thực gửi kèm token ở header).
			<br />
			<FilePath>POST /api/users:</FilePath> Đăng ký tài khoản với payload gửi lên: {email: string, password: string,
			username: string} .
		</p>
		<p className="text-slate-900 dark:text-white mt-2 pl-5 font-bold text-lg">Yêu cầu:</p>

		<p className="text-slate-900 dark:text-white mt-2 pl-5 font-bold ">1. Application-level Middleware</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo middleware ghi log khi người dùng đăng xác thực thành công ở api
				<FilePath>GET /api/users/me:</FilePath> theo dạng:
				<br />
				<b>"người dùng ${username} vừa đăng nhập vào hệ thống"</b>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 pl-5 font-bold ">2. Router-level Middleware</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo middleware kiểm tra header <b>Authorization</b> có kèm token hay không cho api cần xác thực:
				<FilePath>GET /api/users/me:</FilePath> theo dạng:
				<br />
				Nếu header chứa <b>Bearer demo123</b> → cho phép truy cập và trả về thông tin người dùng.
				<br />
				Ngược lại trả về lỗi <b>401 Unauthorized</b>
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 pl-5 font-bold ">3. Error-handling Middleware</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Tạo middleware bắt lỗi global trong Express (4 tham số err, req, res, next)
				<br />
				Trả về lỗi 500 kèm nội dung: { error: "Nội dung lỗi" }
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 pl-5 font-bold ">4. Third-party Middleware</p>
		<ul class="pl-10">
			<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
				Sử dụng middleware <b>cors</b> để xử lý lỗi cors khi call api
			</li>
		</ul>
		<p className="text-slate-900 dark:text-white mt-2 pl-0 font-bold ">Gợi ý cấu trúc thư mục:</p>
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
						link: '/nodejs/practice/e_2',
					},
					prev: {
						title: 'Danh sách',
						link: '/nodejs/practice',
					},
				},
				b1: `middleware-demo/
├── index.js
├── routes/
│   └── user.routes.js
├── middlewares/
│   ├── logger.middleware.js
│   ├── auth.middleware.js
│   └── error.middleware.js
│ ...
`,
			};
		},
		computed: {},
		methods: {},
	};
</script>
