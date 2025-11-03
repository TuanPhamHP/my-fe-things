<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Request" addOnClass="text-left" markedAs="about-express-request" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Request</b> là một object đại diện cho yêu cầu HTTP được gửi từ client (trình duyệt hoặc ứng dụng) đến
					server. Nó chứa thông tin về yêu cầu, bao gồm URL, phương thức HTTP (GET, POST, v.v.), headers, body, và các
					tham số khác. Trong Node.js, khi sử dụng framework như Express.js, object request thường được truyền vào để xử
					lý các yêu cầu từ client.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Lấy dữ liệu từ Request" addOnClass="text-left mt-5" markedAs="step-1" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tuỳ thuộc vào loại Method, loại dữ liệu mà ta có thể lấy dữ liệu từ Request theo các cách khác nhau:
				</p>
				<PageHeading text="JSON body" addOnClass="text-left mt-5" markedAs="json-body" :lvl="2" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> <FilePath>POST, PUT</FilePath> Lấy data từ body </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>Chúng ta cần dùng middleware để parse data trước:</span>
						<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>Sau đó chúng ta có thể đọc được dữ liệu từ <FilePath>body</FilePath></span>
						<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />
					</li>
				</ul>

				<PageHeading text="File" addOnClass="text-left mt-5" markedAs="file" :lvl="2" />
				<!--  -->
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Để đọc được file thì chúng ta nên dùng middleware của 3rd lib như<FilePath>multer</FilePath>:</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>Tải <FilePath>multer</FilePath>:</span>
						<FakeTerminalUI :textCoppy="'npm install multer'">npm install multer</FakeTerminalUI>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>Sau đó chúng ta có thể đọc được dữ liệu từ <FilePath>body</FilePath></span>
						<VCodeBlock :code="b7" highlightjs lang="javascript" theme="atom-one-dark" />
					</li>
				</ul>
				<PageHeading text="Response" addOnClass="text-left mt-5" markedAs="response" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Response</b> là một object đại diện cho phản hồi HTTP mà server gửi về cho client sau khi xử lý yêu cầu. Nó
					chứa thông tin về phản hồi, bao gồm mã trạng thái HTTP (status code), headers, body, và các thông tin khác.
					Trong Node.js, khi sử dụng framework như Express.js, object response thường được truyền vào để gửi phản hồi
					đến client.
				</p>

				<!--  -->
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Method</th>
								<th scope="col" class="px-5 py-3">Desc</th>
								<th scope="col" class="px-5 py-3">EG</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									<FilePath>{{ item.method }}</FilePath>
								</th>

								<td class="px-5 py-4">{{ item.description }}</td>
								<td class="px-5 py-4">
									<FilePath>{{ item.example }}</FilePath>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="Set Header" addOnClass="text-left mt-5" markedAs="response-header" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Header là phần thông tin bổ sung được gửi kèm theo trong các yêu cầu (Request) và phản hồi (Response) HTTP.
					Chúng cung cấp các chi tiết về dữ liệu được truyền tải, cách xử lý yêu cầu, và các thông tin khác liên quan
					đến giao tiếp giữa client và server. Header bao gồm các cặp key-value, trong đó key là tên của header và value
					là giá trị tương ứng. Một số header phổ biến bao gồm Content-Type (loại nội dung), Authorization (xác thực),
					User-Agent (thông tin về trình duyệt hoặc ứng dụng client), và nhiều header khác.
				</p>
				<VCodeBlock :code="b8" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">Một số loại Content-Type thường dùng:</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Loại</th>
								<th scope="col" class="px-5 py-3">Ý nghĩa</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonContentType"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									<FilePath>{{ item.type }}</FilePath>
								</th>

								<td class="px-5 py-4">{{ item.desc }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<PageHeading text="HTTP status code" addOnClass="text-left mt-5" markedAs="response-header" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Mã trạng thái HTTP (HTTP status code) là các mã số được gửi từ server đến client để biểu thị kết quả của một
					yêu cầu HTTP. Chúng giúp client hiểu được tình trạng của yêu cầu đã gửi và cách xử lý tiếp theo. Mã trạng thái
					được chia thành các nhóm chính như:
				</p>

				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Range</th>
								<th scope="col" class="px-5 py-3">Title</th>
								<th scope="col" class="px-5 py-3">Description</th>
								<th scope="col" class="px-5 py-3">CodeRange</th>
								<th scope="col" class="px-5 py-3">EG:</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in httpStatusGroups"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									<FilePath>{{ item.range }}</FilePath>
								</th>

								<td class="px-5 py-4">{{ item.title }}</td>
								<td class="px-5 py-4">
									<FilePath>{{ item.meaning }}</FilePath>
								</td>
								<td class="px-5 py-4">
									<FilePath>{{ item.codeRange }}</FilePath>
								</td>
								<td class="px-5 py-4">
									{{ item.examples.join(', ') }}
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Việc tuân thủ các mã trạng thái HTTP giúp cải thiện trải nghiệm người dùng và đảm bảo rằng các ứng dụng web
					hoạt động một cách hiệu quả và đúng chuẩn, đồng thời giúp các dev dễ dàng xác định và xử lý các vấn đề phát
					sinh trong quá trình giao tiếp giữa client và server. Một số mã trạng thái HTTP phổ biến bao gồm:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Code</th>
								<th scope="col" class="px-5 py-3">Title</th>
								<th scope="col" class="px-5 py-3">Description</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonHttpStatusCodes"
								:key="item.code"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4">
									<FilePath>{{ item.code }}</FilePath>
								</th>

								<td class="px-5 py-4">{{ item.name }}</td>
								<td class="px-5 py-4">
									<FilePath>{{ item.desc }}</FilePath>
								</td>
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
				httpStatusGroups: [
					{
						id: 1,
						range: '1xx',
						title: 'Informational',
						meaning: 'Thông tin – Request đang được xử lý',
						codeRange: '100–199',
						examples: [100, 101, 102],
					},
					{
						id: 2,
						range: '2xx',
						title: 'Success',
						meaning: 'Thành công – Request hoàn tất và có phản hồi hợp lệ',
						codeRange: '200–299',
						examples: [200, 201, 204],
					},
					{
						id: 3,
						range: '3xx',
						title: 'Redirection',
						meaning: 'Chuyển hướng – Client cần thực hiện hành động khác để hoàn tất request',
						codeRange: '300–399',
						examples: [301, 302, 304],
					},
					{
						id: 4,
						range: '4xx',
						title: 'Client Error',
						meaning: 'Lỗi phía client – Request không hợp lệ hoặc thiếu quyền',
						codeRange: '400–499',
						examples: [400, 401, 403, 404],
					},
					{
						id: 5,
						range: '5xx',
						title: 'Server Error',
						meaning: 'Lỗi phía server – Xảy ra sự cố khi xử lý request hợp lệ',
						codeRange: '500–599',
						examples: [500, 502, 503],
					},
				],
				lessonSum: [
					`Request là một object đại diện cho yêu cầu HTTP được gửi từ client đến server, chứa thông tin về URL, phương thức, headers, body, v.v.`,
					`Nếu cần lấy các thông tin từ body của method (POST hoặc PUT), ta cần dùng middleware để parse dữ liệu trước.`,
					`Để xử lý file upload, ta có thể sử dụng thư viện bên thứ 3 như multer để dễ dàng quản lý file từ request.`,
					`Response là object đại diện cho phản hồi HTTP mà server gửi về cho client sau khi xử lý yêu cầu.`,
					`Có nhiều phương thức phổ biến để gửi phản hồi như res.send(), res.json(), res.status(), res.set(), res.redirect(), v.v.`,
					`Tuân thủ mã trạng thái HTTP giúp cải thiện trải nghiệm người dùng và đảm bảo ứng dụng hoạt động hiệu quả.`,
				],
				b1: `app.get('/users/:id', (req, res) => {
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Params:', req.params);
  console.log('Query:', req.query);
  console.log('Headers:', req.headers);
});
`,
				b3: `// app.js
const http = require('http');
const server = http.createServer();
`,
				b4: `import express from 'express';
import { FilePath } from '../../../.nuxt/components';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Express.js!');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

`,
				b5: `app.use(express.json());            // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form`,
				b6: `app.post('/users', (req, res) => {
  console.log(req.body);
  res.send('Đã nhận dữ liệu!');
});`,
				b7: `import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  res.send('Tải file thành công');
});
`,
				b8: `app.get('/custom', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.set('X-Custom-Header', 'Demo');
  res.send('Header tùy chỉnh đã được thiết lập');
});
`,
				commonMethods: [
					{
						id: 1,
						method: 'res.send()',
						description: 'Gửi text, HTML hoặc Buffer về client.',
						example: "res.send('Hello');",
					},
					{
						id: 2,
						method: 'res.json()',
						description: 'Gửi phản hồi dạng JSON, Express tự đặt Content-Type: application/json.',
						example: "res.json({ name: 'Tuan' });",
					},
					{
						id: 3,
						method: 'res.status()',
						description: 'Thiết lập mã trạng thái HTTP cho response.',
						example: "res.status(404).send('Not found');",
					},
					{
						id: 4,
						method: 'res.set()',
						description: 'Thiết lập một hoặc nhiều header HTTP tùy chỉnh.',
						example: "res.set('X-Powered-By', 'NodeJS');",
					},
					{
						id: 5,
						method: 'res.redirect()',
						description: 'Chuyển hướng client đến một URL khác.',
						example: "res.redirect('/login');",
					},
					{
						id: 6,
						method: 'res.sendFile()',
						description: 'Gửi file tĩnh (HTML, ảnh, PDF, ...) về client.',
						example: "res.sendFile(path.resolve('index.html'));",
					},
					{
						id: 7,
						method: 'res.end()',
						description: 'Kết thúc phản hồi mà không cần gửi thêm dữ liệu (thô).',
						example: "res.end('Done');",
					},
				],
				commonContentType: [
					{ id: 1, type: 'text/plain', desc: 'Văn bản thuần túy' },
					{ id: 2, type: 'text/html', desc: 'Trang HTML' },
					{ id: 3, type: 'application/json', desc: 'Dữ liệu JSON' },
					{ id: 4, type: 'application/x-www-form-urlencoded', desc: 'Dữ liệu form key=value' },
					{ id: 5, type: 'multipart/form-data', desc: 'Form có chứa file upload' },
					{ id: 6, type: 'application/pdf', desc: 'Tệp PDF' },
					{ id: 7, type: 'image/png', desc: 'Ảnh PNG' },
					{ id: 8, type: 'image/jpeg', desc: 'Ảnh JPEG' },
					{ id: 9, type: 'audio/mpeg', desc: 'File âm thanh MP3' },
					{ id: 10, type: 'video/mp4', desc: 'File video MP4' },
				],
				commonHttpStatusCodes: [
					{ code: 200, name: 'OK', desc: 'Request thành công' },
					{ code: 201, name: 'Created', desc: 'Tạo tài nguyên mới thành công' },
					{ code: 202, name: 'Accepted', desc: 'Request được chấp nhận, xử lý sau' },
					{ code: 204, name: 'No Content', desc: 'Thành công nhưng không có dữ liệu trả về' },
					{ code: 301, name: 'Moved Permanently', desc: 'Chuyển hướng vĩnh viễn' },
					{ code: 302, name: 'Found', desc: 'Chuyển hướng tạm thời' },
					{ code: 304, name: 'Not Modified', desc: 'Dữ liệu chưa thay đổi (cache hợp lệ)' },
					{ code: 400, name: 'Bad Request', desc: 'Request sai hoặc dữ liệu thiếu' },
					{ code: 401, name: 'Unauthorized', desc: 'Chưa xác thực (login/token)' },
					{ code: 403, name: 'Forbidden', desc: 'Không có quyền truy cập' },
					{ code: 404, name: 'Not Found', desc: 'Không tìm thấy tài nguyên' },
					{ code: 405, name: 'Method Not Allowed', desc: 'Phương thức không được hỗ trợ' },
					{ code: 409, name: 'Conflict', desc: 'Xung đột hoặc trùng dữ liệu' },
					{ code: 422, name: 'Unprocessable Entity', desc: 'Sai logic hoặc dữ liệu không hợp lệ' },
					{ code: 500, name: 'Internal Server Error', desc: 'Lỗi server nội bộ' },
					{ code: 501, name: 'Not Implemented', desc: 'Chức năng chưa được hỗ trợ' },
					{ code: 502, name: 'Bad Gateway', desc: 'Lỗi từ server trung gian' },
					{ code: 503, name: 'Service Unavailable', desc: 'Server đang bảo trì hoặc quá tải' },
					{ code: 504, name: 'Gateway Timeout', desc: 'Server trung gian chờ phản hồi quá lâu' },
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
