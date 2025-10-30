<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="HTTP & Web Server" addOnClass="text-left" markedAs="about-http" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>HTTP</b> (HyperText Transfer Protocol) là giao thức giao tiếp giữa client (trình duyệt, app) và server qua
					mạng. Mỗi khi bạn nhập <FilePath>https://...</FilePath>, trình duyệt gửi một HTTP Request và nhận lại HTTP
					Response.
					<br />
					HTTP là giao thức cốt lõi cho việc truyền dữ liệu trên World Wide Web. Nó hoạt động theo mô hình client-server
					(khách-chủ), trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Client:</b>(Trình duyệt, ứng dụng di động, v.v.) gửi một Request (yêu cầu). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> <b>Server:</b>xử lý Request và gửi lại một Response (phản hồi). </span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Lưu ý: HTTP là một giao thức stateless (không trạng thái) - mỗi Request là độc lập, server không "nhớ" các
					Request trước đó, trừ khi bạn áp dụng các cơ chế quản lý trạng thái như cookies hoặc sessions.
				</p>
				<PageHeading text="Server trong Node.js" addOnClass="text-left" markedAs="about-node-server" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Node.js, thông qua module tích hợp sẵn là <FilePath>http</FilePath>, cho phép bạn tạo một máy chủ HTTP một
					cách nhanh chóng. Server này lắng nghe các Request từ client và xử lý chúng.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Các bước cơ bản để khởi tạo một server: </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span> Import module <FilePath>http</FilePath>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Sử dụng phương thức <FilePath>http.createServer()</FilePath> để tạo một server. Phương thức này nhận một
							hàm callback được gọi mỗi khi có Request đến. Hàm callback này có hai đối số quan trọng: <b>request</b> và
							<b>response</b>.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span>
							Sử dụng phương thức <FilePath>listen()</FilePath> trên đối tượng server để chỉ định <b>cổng (port)</b> và
							<b>hostname (tên máy chủ)</b> mà server sẽ lắng nghe.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">1. Khởi tạo server:</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đoạn code trên, chúng ta sử dụng <FilePath>http</FilePath> là một module có sẵn trong NodeJS, nó giúp chúng
					ta khởi tạo nhanh một webserver với giao thức HTTP để xử lý request và response.
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">
					2. Khởi tạo server và lắng nghe port từ server vừa tạo:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="atom-one-dark" />
				<div class="my-3"></div>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>res.writeHead</FilePath>: gửi headers của phản hồi HTTP từ server đến client. Nó bao gồm thông tin
					về trạng thái HTTP và các tiêu đề (headers).
					<br />
					<FilePath>res.end</FilePath>: kết thúc phản hồi và gửi dữ liệu thực tế về cho client. Nội dung được gửi cùng
					với phương thức end() sẽ là phần body của phản hồi HTTP.
				</p>
				<PageHeading text="Request" addOnClass="text-left mt-5" markedAs="about-request" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Đối tượng <b>req</b> (thường là viết tắt của request) chứa <b>tất cả thông tin về yêu cầu</b> đến từ client.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Thông số hay dùng: </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><FilePath>url</FilePath>: URL path (đường dẫn) mà client yêu cầu (sau hostname và port). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><FilePath>method</FilePath>: Phương thức HTTP được sử dụng (GET, POST, PUT, DELETE, v.v.). </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>headers</FilePath>: Một đối tượng chứa tất cả các header của Request (User-Agent, Content-Type,
							Authorization, v.v.).
						</span>
					</li>
				</ul>
				<PageHeading text="Response" addOnClass="text-left mt-5" markedAs="about-res" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Đối tượng <b>res</b> (thường là viết tắt của response) được sử dụng để gửi dữ liệu phản hồi trở lại cho
					client.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span> Thông số hay dùng: </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span><FilePath>statusCode</FilePath>: Mã trạng thái HTTP theo chuẩn. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>setHeader(name, value)</FilePath>: Thiết lập Header cho Response (Content-Type, Cache-Control,
							v.v.).
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>write(chunk)</FilePath>: Ghi dữ liệu vào thân Response. Có thể gọi nhiều lần. VD:
							res.write('Hello');
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<span
							><FilePath>end([data])</FilePath>: Gửi dữ liệu Response (tùy chọn) và kết thúc quá trình phản hồi. Phải
							được gọi một lần duy nhất.
						</span>
					</li>
				</ul>
				<!--  -->
				<PageHeading text="Mapping Request" addOnClass="text-left mt-5" markedAs="about-nodejs" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tiếp theo, chúng ta sẽ tìm hiểu về cách làm việc với một số thông tin của request được gửi lên server
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Như vậy, chúng ta có thể lấy ra các data được gửi kèm thông qua params req tại callback-listener.
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
					`Node.js cung cấp sẵn một số module để user sử dụng mà không cần khởi tạo như http, url...`,
					`Request là một object chưa các thông tin người dùng gửi lên server, bao gồm url, method, headers...`,
					`Response là một object dùng để server gửi dữ liệu phản hồi về cho client, bao gồm statusCode, headers, body...`,
				],
				b1: `import http from 'http';

const PORT = 3000;
const HOSTNAME = 'localhost'; // hoặc '127.0.0.1'

// 1. Tạo Server với hàm callback xử lý Request/Response
const server = http.createServer((req, res) => {
    // Logic xử lý Request sẽ nằm ở đây
    
    // Thiết lập Header cho Response
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Gửi dữ liệu Response và kết thúc kết nối
    res.end('Xin chào từ Node.js Server!\n');
});

// 2. Server bắt đầu lắng nghe trên cổng 3000
server.listen(PORT, HOSTNAME, () => {
    console.log('Server đã chạy và đang lắng nghe...');
})`,
				b3: `// app.js
import http from 'http';
const PORT = 3000;
const HOSTNAME = 'localhost';'
`,
				b4: `// Tạo Server với hàm callback xử lý Request/Response
const server = http.createServer((req, res) => {
    // Logic xử lý Request sẽ nằm ở đây
    
    // Thiết lập Header cho Response
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Gửi dữ liệu Response và kết thúc kết nối
    res.end('Xin chào từ Node.js Server!\n');
});
`,
				b5: `// Server bắt đầu lắng nghe trên cổng 3000
server.listen(PORT, HOSTNAME, () => {
    console.log('Server chạy tại PORT:'+ PORT);
})
`,
				b6: `import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Trang chủ</h1>');
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Giới thiệu về Node.js</h1>');
  } else if (req.url === '/data') {
    const data = { name: 'Node.js', version: 'v20.0', type: 'runtime' };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Không tìm thấy trang!');
  }
});

server.listen(3000, () => {
  console.log('Server chạy tại PORT:'+ PORT);
});
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-5' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
