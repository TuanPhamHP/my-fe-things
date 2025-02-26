<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="EJS (Embedded JavaScript)" addOnClass="text-left" markedAs="about-ejs" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					EJS là một template engine cho phép bạn nhúng mã JavaScript vào HTML. Nó rất phổ biến khi sử dụng với Node.js
					và Express để render nội dung động từ phía server. EJS cho phép bạn chèn các giá trị động, thực hiện lặp, điều
					kiện, và quản lý bố cục cho trang web của bạn.
					<br />
					Để sử dụng được <b>`EJS`</b> thì bạn cần cài đặt package <FilePath>ejs</FilePath> và tạo file có đuôi là
					<b>.ejs</b>. VD: <b>homepage.ejs</b>
					<br />
					<b>Các tính năng chính của EJS:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Nhúng JavaScript trực tiếp trong HTML.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Điều kiện (if-else), lặp (for, while), và các thao tác logic khác.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Hỗ trợ include, giúp tái sử dụng các phần view chung (như header, footer).</span>
					</li>
				</ul>

				<PageHeading text="Bảng danh sách các tính năng" addOnClass="text-left mt-5" markedAs="about-ejs-features" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Một số các tính năng nổi bật của EJS sẽ được tôi tổng hợp lại như sau:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tính năng</th>
								<th scope="col" class="px-5 py-3">Ý nghĩa</th>
								<th scope="col" class="px-5 py-3">VD:</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th
									v-if="item.label"
									colspan="3"
									scope="row"
									class="px-5 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
								>
									{{ item.label }}
								</th>
								<th
									v-if="!item.label"
									scope="row"
									class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
								>
									{{ item.name }}
								</th>
								<td v-if="!item.label" class="px-5 py-4">{{ item.desc }}</td>
								<td v-if="!item.label" class="px-5 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<PageHeading text="Ví dụ:" addOnClass="text-left mt-5" markedAs="example" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">Ví dụ về việc tạo view với ejs</p>
				<div>
					<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold">1. Cấu trúc file:</p>
					<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				</div>

				<div>
					<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold">2. Tạo header:</p>
					<VCodeBlock :code="b2" highlightjs lang="html" theme="tomorrow-night-bright" />
				</div>

				<div>
					<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold">3. Tạo homepage và include:</p>
					<VCodeBlock :code="b3" highlightjs lang="html" theme="tomorrow-night-bright" />
				</div>

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau khi serve thì ta sẽ có kết quả. Kết quả tự serve nha 😒👌
				</p>

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/nodejs/practice/e_2"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p>

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
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
				b1: `myapp/
│....
├── views/
│   └── partials
│   │   └── header.ejs
│   └── homepage.ejs
│
├── app.js
└── package.json
`,
				b2: `// header.js
<header>
  <h1>
    <%= pageTitle %>
  </h1>
  <nav>
    <a href="/">Trang chủ</a> |
    <a href="/about">Giới thiệu</a>
  </nav>
</header>
`,
				b3: `// homepage.js
<!DOCTYPE html>
<html lang="en">

<body>
  <%- include('partials/header', { pageTitle: 'Trang chủ' }) %>
    <p>Chào mừng đến với trang chủ!</p>
</body>

</html>
`,

				commonMethods: [
					{
						id: 1,
						name: 'Biến trong EJS',
						desc: 'Hiển thị giá trị của các biến được truyền vào từ server.',
						syntax: '<%= variable %>',
					},
					{
						id: 2,
						name: 'Thực thi mã JavaScript',
						desc: 'Chạy các đoạn mã JavaScript bên trong template mà không xuất ra màn hình.',
						syntax: '<% JavaScript code %>',
					},
					{
						id: 3,
						name: 'Điều kiện (if)',
						desc: 'Sử dụng điều kiện if-else trong EJS để xử lý logic hiển thị.',
						syntax: `
        <% if (condition) { %>
            <p>Condition is true</p>
        <% } else { %>
            <p>Condition is false</p>
        <% } %>
    `,
					},
					{
						id: 4,
						name: 'Vòng lặp (for)',
						desc: 'Sử dụng vòng lặp for để lặp qua các phần tử trong mảng và hiển thị.',
						syntax: `
        <% for (let i = 0; i < items.length; i++) { %>
            <p><%= items[i] %></p>
        <% } %>
    `,
					},
					{
						id: 5,
						name: 'Include (bao gồm)',
						desc: 'Tái sử dụng các phần của trang (như header, footer) bằng cách nhúng chúng vào các template khác.',
						syntax: '<%- include("header") %>',
					},
					{
						id: 6,
						name: 'Escape nội dung',
						desc: 'Hiển thị nội dung của biến với khả năng escape các ký tự HTML đặc biệt.',
						syntax: '<%- variable %>',
					},
					{
						id: 7,
						name: 'Comment',
						desc: 'Chèn comment vào file EJS mà không hiển thị trong kết quả render.',
						syntax: '<%# This is a comment %>',
					},
					{
						id: 8,
						name: 'Partial',
						desc: 'Sử dụng partials để chia nhỏ các phần của giao diện và tái sử dụng chúng trong các template khác.',
						syntax: '<%- include("partials/footer") %>',
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-7' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
