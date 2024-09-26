<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Mô hình MVC" addOnClass="text-left" markedAs="about-mvc" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở bài trước, chúng ta đã cùng tìm hiểu về mô hình MVC và cấu trúc cơ bản của một project khi tổ chức theo kiến
					trúc MVC. Ở bài này chúng ta sẽ tiến hành sử dụng một package là <FilePath>express</FilePath> để cùng tạo lên
					một app nodejs. Về cơ bản, chúng ta có thể hình dung cấu trúc thư mục của app như sau:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="vs2015" />
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
					sau khi đã có <b>`package.json`</b> thì tiến hành cài đặt <FilePath>express</FilePath> và
					<FilePath>ejs</FilePath>
				</p>
				<FakeTerminalUI :textCoppy="'npm install express ejs'">npm install express ejs</FakeTerminalUI>

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đoạn code trên, chúng ta sử dụng <FilePath>http</FilePath> là một module có sẵn trong NodeJS, nó giúp chúng
					ta khởi tạo nhanh một webserver với giao thức HTTP để xử lý request và response.
					<br />
					ta khởi tạo server và gán vào biến <b>`server`.</b>
				</p>
				<PageHeading text="2. Setup lại file `app.js`" addOnClass="text-left my-3" markedAs="step-2" :lvl="2" />
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong file <b>`app.js`</b>, ta sẽ khởi tạo server bằng <b>Express</b> và liên kết nó với các routes,
					controllers, và views theo mô hình MVC.
				</p>
				<PageHeading text="3. Tạo Model" addOnClass="text-left my-3" markedAs="step-3" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>`Model`</b> chịu trách nhiệm quản lý dữ liệu. Ở đây, dữ liệu người dùng sẽ được lưu trữ tạm thời trong một
					mảng, nhưng bạn cũng có thể kết nối với cơ sở dữ liệu (như MySQL hoặc MongoDB).
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="4. Tạo Controller" addOnClass="text-left my-3" markedAs="step-4" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>`Controller`</b> sẽ nhận các request, tương tác với Model và trả kết quả về cho View hoặc trả về response
					trực tiếp.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					Ở đây chúng ta sẽ làm quen với các method <b>`render`</b> và <b>`redirect`</b> của express. Đây đề là các
					method của <b>`response`</b>, chúng hỗ trợ định nghĩa output của app, các bạn có thể mapping với

					<a
						href="#about-res-method"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bảng
					</a>
					để xem.
				</p>
				<PageHeading text="5. Tạo Routes" addOnClass="text-left my-3" markedAs="step-5" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>`Router `</b> sẽ định nghĩa các đường dẫn (routes) cho ứng dụng và gọi đúng controller để xử lý yêu cầu.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="javascript" theme="vs2015" />
				<PageHeading text="6. Tạo View" addOnClass="text-left my-3" markedAs="step-6" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 leading-8">
					<b>`View `</b> sẽ là phần giao diện để hiển thị dữ liệu cho người dùng. Ở đây, ta sử dụng EJS để hiển thị danh
					sách người dùng.
				</p>
				<VCodeBlock :code="b8" highlightjs lang="HTML" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Gần tương tự như php, nếu các bạn muốn viết js trong file <b>`.ejs`</b> thì chúng ta sẽ sử dụng cặp dấu:
					<FilePath>
						{{ `<% %>` }}
					</FilePath>
					để đánh dấu template.
				</p>

				<PageHeading
					text="Bảng danh sách các method của response"
					addOnClass="text-left mt-5"
					markedAs="about-res-method"
				/>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tên</th>
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
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở bài tiếp theo, chúng ta sẽ tìm hiểu kỹ hơn về <FilePath>ejs</FilePath> và <FilePath>express</FilePath>
				</p>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<FilePath>express</FilePath> là một package cực kì phổ biến trong lập trình NodeJS, nó giúp chúng ta tạo
							ra một dynamic app một cách đơn giản.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<FilePath>ejs</FilePath> là một <b>`template engine`</b> cho phép chúng ta nhúng mã JavaScript vào HTML. Nó
						rất phổ biến khi sử dụng với Node.js và Express để render nội dung động từ phía server. EJS cho phép bạn
						chèn các giá trị động, thực hiện lặp, điều kiện, và quản lý bố cục cho trang web.
					</li>
				</ul>
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
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── views/
│   └── user.ejs
│
├── app.js
└── package.json
`,
				b3: `// app.js
const http = require('http');
const server = http.createServer();
`,
				b4: `const express = require('express');
const app = express();
const port = 3000;

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

// middleware để lấy dữ liệu từ POST request
app.use(express.urlencoded({ extended: true }));


// Import routes
const userRoutes = require('./routes/userRoutes');

// Sử dụng router cho các route liên quan đến người dùng
app.use('/users', userRoutes);

// Lắng nghe server tại cổng 3000
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

`,
				b5: `// userController.js
const User = require('../models/userModel');

// Lấy danh sách người dùng
exports.getUsers = (req, res) => {
  const users = User.getAllUsers();
  res.render('user', { users });
};

// Thêm người dùng mới
exports.addUser = (req, res) => {
  const { name } = req.body;
  User.addUser(name);
  res.redirect('/users');
};
`,
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
						name: 'send()',
						desc: 'Gửi phản hồi HTTP với nội dung body (string, object, array) đến client.',
						syntax: "res.send('Hello World!');",
					},
					{
						id: 2,
						name: 'json()',
						desc: 'Gửi phản hồi JSON đến client. Tự động thiết lập Content-Type là application/json.',
						syntax: "res.json({ message: 'Hello, World!' });",
					},
					{
						id: 3,
						name: 'status()',
						desc: 'Thiết lập mã trạng thái HTTP cho phản hồi.',
						syntax: "res.status(404).send('Not Found');",
					},
					{
						id: 4,
						name: 'sendFile()',
						desc: 'Gửi một file đến client.',
						syntax: "res.sendFile(__dirname + '/file.txt');",
					},
					{
						id: 5,
						name: 'redirect()',
						desc: 'Chuyển hướng đến một URL khác. Có thể thiết lập mã trạng thái HTTP.',
						syntax: "res.redirect('https://example.com');",
					},
					{
						id: 6,
						name: 'render()',
						desc: 'Render một view sử dụng template engine đã thiết lập (như EJS, Pug).',
						syntax: "res.render('index', { title: 'Home Page' });",
					},
					{
						id: 7,
						name: 'set()',
						desc: 'Thiết lập header HTTP cho phản hồi.',
						syntax: "res.set('Content-Type', 'text/html');",
					},
					{
						id: 8,
						name: 'cookie()',
						desc: 'Thiết lập một cookie trong phản hồi HTTP.',
						syntax: "res.cookie('username', 'John Doe', { maxAge: 900000 });",
					},
					{
						id: 9,
						name: 'clearCookie()',
						desc: 'Xóa một cookie bằng cách đặt thời gian hết hạn của nó.',
						syntax: "res.clearCookie('username');",
					},
					{
						id: 10,
						name: 'type()',
						desc: 'Thiết lập Content-Type cho phản hồi HTTP.',
						syntax: "res.type('application/json');",
					},
					{
						id: 11,
						name: 'download()',
						desc: 'Bắt đầu tải về một file. Có thể cung cấp tên file và callback.',
						syntax: "res.download('/path/to/file.zip', 'file.zip');",
					},
					{
						id: 12,
						name: 'location()',
						desc: 'Thiết lập header Location để chuyển hướng, nhưng không tự động thực hiện chuyển hướng.',
						syntax: "res.location('/new-path');",
					},
					{
						id: 13,
						name: 'end()',
						desc: 'Kết thúc phản hồi, tùy chọn gửi dữ liệu body.',
						syntax: "res.end('Response completed');",
					},
					{
						id: 14,
						name: 'format()',
						desc: 'Cho phép gửi phản hồi với các định dạng khác nhau dựa trên Accept header từ client.',
						syntax:
							"res.format({ 'text/plain': () => res.send('text response'), 'application/json': () => res.json({}) });",
					},
					{
						id: 15,
						name: 'links()',
						desc: 'Thiết lập liên kết HTTP Link cho phản hồi.',
						syntax: "res.links({ next: '/page/2', last: '/page/5' });",
					},
					{
						id: 16,
						name: 'vary()',
						desc: 'Thêm header Vary cho phản hồi, sử dụng khi muốn chỉ định các giá trị trong header cần đa dạng.',
						syntax: "res.vary('Accept-Encoding');",
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
