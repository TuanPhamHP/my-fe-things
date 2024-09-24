<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Event driven" addOnClass="text-left" markedAs="about-nodejs" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Chúng ta sẽ thiết lập một server giả lập dựa trên mô hình hướng sự kiện <b>`event-driven`</b>
					của NodeJS và các API được cung cấp sẵn:
				</p>

				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">1. Khởi tạo server:</p>
				<VCodeBlock :code="b3" highlightjs lang="javascript" theme="vs2015" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đoạn code trên, chúng ta sử dụng <FilePath>http</FilePath> là một module có sẵn trong NodeJS, nó giúp chúng
					ta khởi tạo nhanh một webserver với giao thức HTTP để xử lý request và response.
					<br />
					ta khởi tạo server và gán vào biến <b>`server`.</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">
					2. Tạo event lắng nghe port từ server vừa tạo:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>listen</FilePath> nhận vào 2 params là <b>`port`</b> và một <b>`callback`</b> khi hàm thành công
					trong việc kết nối với port đó
				</p>

				<p class="text-slate-900 dark:text-white mt-2 leading-8 font-bold">
					3. Thiệt lập một listener cho event 'request':
				</p>
				<VCodeBlock :code="b5" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở đây, <FilePath>on</FilePath> nhận vào 2 params là <b>`event-name`</b> và một <b>`callback`</b> sẽ thực thi
					khi 'event' được kích hoạt.
					<br />
					<FilePath>res.writeHead</FilePath>: gửi headers của phản hồi HTTP từ server đến client. Nó bao gồm thông tin
					về trạng thái HTTP và các tiêu đề (headers).
					<br />
					<FilePath>res.end</FilePath>: kết thúc phản hồi và gửi dữ liệu thực tế về cho client. Nội dung được gửi cùng
					với phương thức end() sẽ là phần body của phản hồi HTTP.
				</p>
				<PageHeading text="Mapping Request" addOnClass="text-left mt-5" markedAs="about-nodejs" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tiếp theo, chúng ta sẽ tìm hiểu về cách làm việc với một số thông tin của request được gửi lên server
				</p>
				<VCodeBlock :code="b6" highlightjs lang="javascript" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Như vậy, chúng ta có thể lấy ra các data được gửi kèm thông qua params req tại callback-listener.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Node.js cung cấp sẵn một số module để user sử dụng mà không cần khởi tạo như <FilePath>http</FilePath>,
							<FilePath>url</FilePath>...
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>require() giúp bạn nhập các module, và module.exports cho phép xuất các chức năng từ module. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>Việc tổ chức mã bằng cách chia thành các module giúp ứng dụng trở nên dễ bảo trì và mở rộng.</span>
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
				b3: `// app.js
const http = require('http');
const server = http.createServer();
`,
				b4: `server.listen(9000, () => {
	console.log('Server đã hoạt động tại port: 9000');
});
`,
				b5: `server.on('request', function (req, res) {
	console.log('nhận được một request từ người dùng.');
	res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
	res.end('Oki đã nhận');
});
`,
				b6: `const http = require('http');
const server = http.createServer();

server.on('request', function (req, res) {
	console.log('nhận được một request từ người dùng.');
	if (req.url === '/hello') {
		res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
		res.end('Xin chào mọi ngườiiii ');
		return;
	}
	res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
	res.end('Oki đã nhận');
});

server.listen(9000, () => {
	console.log('Server đã hoạt động tại port: 9000');
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
