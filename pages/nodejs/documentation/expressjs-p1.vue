<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="ExpressJS" addOnClass="text-left" markedAs="about-express-js" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>ExpressJS</b> là một framework web ứng dụng cho Node.js, được thiết kế để xây dựng các ứng dụng web và API
					một cách nhanh chóng và dễ dàng. ExpressJS cung cấp một tập hợp các tính năng mạnh mẽ giúp quản lý các yêu cầu
					HTTP, routing, middleware, và nhiều hơn nữa.
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Bắt đầu tiến hành cài đặt package <FilePath>express</FilePath> để sử dụng
				</p>
				<PageHeading
					text="1. Khởi tạo node_module và file quản lý package.json"
					addOnClass="text-left mt-5"
					markedAs="step-1"
					:lvl="2"
				/>

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					chạy lệnh sau để init module & file <b>`package.json`</b>
				</p>
				<FakeTerminalUI :textCoppy="'npm init -y'">npm init -y</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					sau khi đã có <b>`package.json`</b> thì tiến hành cài đặt <FilePath>express</FilePath>:
				</p>
				<FakeTerminalUI :textCoppy="'npm install express'">npm install express</FakeTerminalUI>

				<PageHeading text="2. Setup lại server" addOnClass="text-left mt-3" markedAs="step-2" :lvl="2" />
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ta sẽ khởi tạo server bằng <b>Express</b> và sử dụng phương thức <FilePath>app.listen()</FilePath> để lắng
					nghe các kết nối đến cổng được chỉ định.
				</p>

				<PageHeading text="Routing với ExpressJS" addOnClass="text-left mt-5" markedAs="routing-methods" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Routing trong ExpressJS là quá trình xác định cách ứng dụng của bạn phản hồi các yêu cầu từ client dựa trên
					<b>path - đường dẫn URL</b> và <b>method - phương thức HTTP</b>. Mỗi route sẽ liên kết một URL cụ thể với một
					hàm xử lý (handler function) để thực hiện các hành động như gửi dữ liệu, render trang, hoặc thực hiện các thao
					tác khác. <br />
					Như vậy, về cơ bản có thể hiểu Một route (tuyến) trong Express là quy tắc định nghĩa cách ứng dụng phản hồi
					HTTP request dựa vào:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>Path</FilePath> Đường dẫn mà client truy cập. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>Route Methods</FilePath> Phương thức HTTP (GET, POST, PUT, DELETE, …). </span>
					</li>
				</ul>
				<PageHeading text="Routing pattern" addOnClass="text-left mt-5" markedAs="routing-patterns" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tiếp theo, chúng ta sẽ tìm hiểu về các pattern thường dùng trong routing. Dưới đây là cấu trúc cơ bản của một
					route:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>METHOD</FilePath> là phương thức giúp chúng ta định tuyến các <b>method</b> ứng với
							<b>path</b> được chỉ định. VD: <FilePath>app.get('/', (req, res) =&gt; {...})</FilePath>
						</span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>
									Các methods thường dùng: <FilePath>get()</FilePath>, <FilePath>post()</FilePath>,
									<FilePath>put()</FilePath>, <FilePath>delete()</FilePath>.
								</span>
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <FilePath>PATH</FilePath> đường dẫn URL (pattern) </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>HANDLER</FilePath>callback <FilePath>(req, res) => {}</FilePath> được gọi đến nếu route match
						</span>
					</li>
				</ul>
				<PageHeading text="Parameters" addOnClass="text-left mt-5" markedAs="routing-params" :lvl="2" />
				<!--  -->
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>Route Parameters:</FilePath> Dùng để nhận giá trị động từ URL. Dùng dấu
							<FilePath>:</FilePath> để khai báo tham số động. Các thông số này được truy cập qua
							<FilePath>req.params</FilePath>
						</span>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span
									>Một tham số :<FilePath>/products/:id</FilePath> sẽ truy cập thông qua
									<FilePath>req.params.id</FilePath>
								</span>
							</li>

							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span
									>Nhiều tham số :<FilePath>/product/:productId/review/:reviewId</FilePath> sẽ truy cập thông qua
									<FilePath>req.params</FilePath> - một object chứa các params
								</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span
									>Optional Params:<FilePath>/product/:productId?</FilePath> sử dụng dấu <FilePath>?</FilePath> sau tên
									param, để biết match cho dù có tham số hay không.
								</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span
									>Wildcard:<FilePath>/product/*</FilePath> sử dụng dấu <FilePath>*</FilePath> để tạo pattern.
								</span>
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span
									>segment:<FilePath>/product/:category-:id</FilePath> sử dụng dấu <FilePath>-, _, /</FilePath> để tạo
									group/segment.
								</span>
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="Query" addOnClass="text-left mt-5" markedAs="routing-params" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Query Parameters</b> là các tham số được thêm vào cuối URL sau dấu hỏi chấm <FilePath>?</FilePath>. Chúng
					thường được sử dụng để truyền các thông tin bổ sung như lọc, sắp xếp, phân trang, v.v.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<FilePath>Query Parameters:</FilePath> Dùng cho việc gửi các thông tin (thường là lọc) lên server, các
							thông số này được truy cập qua <FilePath>req.query</FilePath></span
						>
						<ul class="pl-5">
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								<span>VD:<FilePath>/products?limit=10</FilePath> sẽ trả giá trị qua <b>req.query.limit</b>. </span>
							</li>
						</ul>
					</li>
				</ul>
				<!--  -->
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Đặc điểm</th>
								<th scope="col" class="px-5 py-3">Route Params</th>
								<th scope="col" class="px-5 py-3">Query Params</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									{{ item.name }}
								</th>

								<td class="px-5 py-4">{{ item.param }}</td>
								<td class="px-5 py-4">{{ item.query }}</td>
							</tr>
						</tbody>
					</table>
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
			LessonSum,
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
					`Express định tuyến các yêu cầu HTTP bằng cách khớp HTTP Method (GET, POST, PUT, DELETE) và Path với hàm xử lý`,
					`Route Parameters là tham số động trong URL, truy cập qua req.params`,
					`Query Parameters là tham số sau dấu ? trong URL, truy cập qua req.query`,
				],
				b3: `// app.js
const http = require('http');
const server = http.createServer();
`,
				b4: `import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Express.js!');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

`,
				b5: `app.METHOD(PATH, HANDLER)`,
				b6: `// userModel.js
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Lấy tất cả người dùng
exports.getAllUsers = () => {
  return users;
};

// Thêm người dùng mới
exports.addUser = (name) => {
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
};
`,
				b7: `// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa route để lấy danh sách người dùng
router.get('/', userController.getUsers);

// Định nghĩa route để thêm người dùng mới
router.post('/add', userController.addUser);

module.exports = router;
`,
				b8: `<!-- user.ejs --> 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh sách người dùng</title>
</head>
<body>
  <h1>Danh sách người dùng</h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user.name %></li>
    <% }) %>
  </ul>

  <h2>Thêm người dùng mới</h2>
  <form action="/users/add" method="POST">
    <input type="text" name="name" placeholder="Tên người dùng">
    <button type="submit">Thêm</button>
  </form>
</body>
</html>
`,
				commonMethods: [
					{
						id: 1,
						name: 'Vị trí',
						param: 'Trong URL pattern (/users/:id)',
						query: 'Sau dấu ? (/users?id=5)',
					},
					{
						id: 2,
						name: 'Truy cập',
						param: 'req.params',
						query: 'req.query',
					},
					{
						id: 3,
						name: 'Sử dụng với',
						param: 'ID, tài nguyên cố định',
						query: 'Lọc, tìm kiếm, phân trang',
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-6' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
