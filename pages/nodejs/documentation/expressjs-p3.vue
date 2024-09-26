<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Express" addOnClass="text-left" markedAs="about-express" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Express.js là một framework web nhanh và tối giản, được xây dựng trên nền tảng Node.js, giúp xây dựng các ứng
					dụng web và API dễ dàng hơn. Express cung cấp một số tính năng hữu ích, như xử lý các yêu cầu HTTP, routing,
					middleware, và tích hợp với các cơ sở dữ liệu.
					<br />
					<b>Tính năng nổi bật của Express.js:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>`Routing linh hoạt:`</b> Express giúp dễ dàng xác định các tuyến đường (routes) cho ứng dụng.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>`Hỗ trợ tạo API RESTful:`</b> Express hỗ trợ tất cả các phương thức HTTP (GET, POST, PUT,
							DELETE).</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>`Middleware:`</b> Middleware trong Express là các chức năng trung gian xử lý yêu cầu trước khi đến
							routes</span
						>
					</li>
				</ul>

				<PageHeading text="Xử lý API RESTful" addOnClass="text-left mt-5" markedAs="about-express-features" />
				<p class="text-slate-900 dark:text-white mt-0 mb-3 leading-8">
					Express cung cấp cho chúng ta các method tương ứng với tên của các method trong API RESTful, lần lượt là
					<FilePath>GET</FilePath>, <FilePath>POST</FilePath>, <FilePath>PUT</FilePath>, <FilePath>PATCH</FilePath>,
					<FilePath>DELETE</FilePath> ...
				</p>
				<VCodeBlock :code="b0" highlightjs lang="javascript" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white mt-0 mb-3 leading-8">
					khi bạn làm việc với các phương thức RESTful như trên, hai tham số quan trọng bạn luôn gặp phải là
					<FilePath>req - request</FilePath> và <FilePath>res - response</FilePath>. Hai tham số này chứa toàn bộ thông
					tin liên quan đến yêu cầu của client (request) và phản hồi từ server (response). chúng ta sẽ cùng làm rõ về
					hai tham số này và cách chúng hoạt động trong các method RESTful của Express.
				</p>

				<PageHeading text="Req - Request" addOnClass="text-left mt-5" markedAs="request" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tham số <FilePath>req - request</FilePath> là đối tượng đại diện cho yêu cầu HTTP được gửi từ client đến
					server. Nó chứa nhiều thông tin về yêu cầu, bao gồm:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>`URL và route:`</b> mà client yêu cầu. Cái này thường sử dụng để map routing.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>`Phương thức HTTP:`</b> được sử dụng (GET, POST, PUT, DELETE, v.v.) thường sẽ được định nghĩa sẵn với
							method của routes</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>`Headers:`</b> chứa các metadata của request, ví dụ như token, kiểu data yêu cầu, thông tin thiết bị
							...</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							<b>`Params, Query, và Route Parameters:`</b> Các tham số được truyền kèm theo trong URL. Ví dụ như
							<b>/products?cate=1&opt=desc</b></span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>`Body:`</b> Dữ liệu được gửi từ client (thường là trong POST hoặc PUT)</span>
					</li>
				</ul>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Phương thức</th>
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
				<div>
					<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold">Ví dụ sử dụng:</p>
					<VCodeBlock :code="b1" highlightjs lang="javascript" theme="tomorrow-night-bright" />
				</div>

				<PageHeading text="Res - Response" addOnClass="text-left mt-5" markedAs="response" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tham số <FilePath>res - request</FilePath> là đối tượng đại diện cho phản hồi mà server sẽ gửi lại cho client
					sau khi xử lý yêu cầu. Chúng ta có thể sử dụng res để:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>`Gửi dữ liệu:`</b> (dạng chuỗi, JSON, file, v.v.) về cho client.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><b>`Thiết lập mã trạng thái HTTP:`</b> (status code) như 200 (OK), 404 (Not Found), 500 (Internal Server
							Error), v.v.</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>`Thiết lập headers:`</b> trong phản hồi (ví dụ như Content-Type, Authorization, v.v.)</span>
					</li>
				</ul>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Phương thức</th>
								<th scope="col" class="px-5 py-3">Ý nghĩa</th>
								<th scope="col" class="px-5 py-3">VD:</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonMethods2"
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
				<div>
					<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold">Ví dụ sử dụng:</p>
					<VCodeBlock :code="b2" highlightjs lang="javascript" theme="tomorrow-night-bright" />
				</div>

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/nodejs/practice/e_3"
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
				b0: `// Route GET cho trang chủ
app.get('/', (req, res) => {
  res.send('Chào mừng đến với trang chủ');
});

// Route POST cho form đăng ký
app.post('/submit', (req, res) => {
  res.send('Form đã được gửi');
});
`,
				b1: `// ví dụ routes: /users/123?name=John
app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // Lấy userId từ URL
  const userName = req.query.name; // Lấy tên từ query parameter nếu có

  res.send("User ID: "+userId+", Name: "+userName);
});
`,
				b2: `//  ví dụ routes: /users/123 | POST
app.post('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.status(200).send('User ID: '+ userId + ' updated with data '+ JSON.stringify(updatedData)});
});
`,

				commonMethods: [
					{
						id: 1,
						name: 'req.method',
						desc: 'Phương thức HTTP (GET, POST, PUT, DELETE, v.v.)',
						syntax: "req.method === 'GET'",
					},
					{
						id: 2,
						name: 'req.url',
						desc: 'URL mà client yêu cầu',
						syntax: '/users/123?name=John',
					},
					{
						id: 3,
						name: 'req.headers',
						desc: 'Các headers của request',
						syntax: "req.headers['content-type']",
					},
					{
						id: 4,
						name: 'req.params',
						desc: 'Các tham số URL định tuyến (được định nghĩa trong route)',
						syntax: '/users/:id, req.params.id',
					},
					{
						id: 5,
						name: 'req.query',
						desc: 'Các tham số truy vấn (query parameters) được gửi trong URL',
						syntax: '/users?name=John, req.query.name',
					},
					{
						id: 6,
						name: 'req.body',
						desc: 'Dữ liệu body (thường được sử dụng với POST, PUT)',
						syntax: 'req.body.username',
					},
					{
						id: 7,
						name: 'req.ip',
						desc: 'Địa chỉ IP của client',
						syntax: 'req.ip',
					},
				],
				commonMethods2: [
					{
						id: 1,
						name: 'res.send()',
						desc: 'Gửi dữ liệu về cho client (có thể là chuỗi, buffer, đối tượng, v.v.)',
						syntax: "res.send('Hello World')",
					},
					{
						id: 2,
						name: 'res.json()',
						desc: 'Gửi dữ liệu dạng JSON về cho client',
						syntax: "res.json({ name: 'John', age: 30 })",
					},
					{
						id: 3,
						name: 'res.status()',
						desc: 'Thiết lập mã trạng thái HTTP',
						syntax: "res.status(404).send('Not Found')",
					},
					{
						id: 4,
						name: 'res.redirect()',
						desc: 'Chuyển hướng client đến URL khác',
						syntax: "res.redirect('/login')",
					},
					{
						id: 5,
						name: 'res.set()',
						desc: 'Thiết lập một header cho phản hồi',
						syntax: "res.set('Content-Type', 'application/json')",
					},
					{
						id: 6,
						name: 'res.end()',
						desc: 'Kết thúc phản hồi (có thể không gửi thêm dữ liệu)',
						syntax: 'res.end()',
					},
					{
						id: 7,
						name: 'res.render()',
						desc: 'Render một view (dùng khi bạn làm việc với template engine như EJS, Pug)',
						syntax: "res.render('index', { title: 'Home' })",
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
