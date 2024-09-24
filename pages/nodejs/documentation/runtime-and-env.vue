<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Cách Node.js thực thi mã JavaScript" addOnClass="text-left" markedAs="about-nodejs" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Node.js là một môi trường chạy JavaScript dựa trên <b>`V8 Engine`</b> – một trình biên dịch JavaScript mã
					nguồn mở được phát triển bởi Google. V8 được sử dụng trong trình duyệt Chrome để thực thi JavaScript, và
					Node.js đã tận dụng sức mạnh của V8 để chạy JavaScript ở phía server.
					<br />
					vậy thực sự thì JavaScript được biên dịch và thực thi như thế nào trong Node.js?
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							- Khi chúng ta chạy một file JavaScript bằng Node.js, các đoạn code sẽ không được thực thi ngay lập tức.
							Thay vào đó, <b>`V8 Engine`</b> sẽ xử lý mã này.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							- Tiếp theo, V8 sẽ thực hiện biên dịch Just-In-Time (JIT), tức là thay vì biên dịch toàn bộ mã một lần rồi
							thực thi, V8 sẽ biên dịch mã khi cần (ngay trước khi nó được thực thi) để tối ưu hóa hiệu suất. JIT
							Compilation giúp tăng tốc độ xử lý vì mã được tối ưu hóa dần dần dựa trên cách nó được thực thi trong quá
							trình chạy.
						</span>
					</li>
				</ul>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
					<img
						src="https://media.geeksforgeeks.org/wp-content/uploads/20211002235143/workinggfg.png"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<PageHeading text="Môi trường của Node.js" addOnClass="text-left mt-5" markedAs="nodejs-env" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Dù được viết bằng Javascript nhưng Node.js sử dụng môi trường khác biệt hoàn toàn với Browser, chúng ta sẽ
					cùng so sánh 2 môi trường này:
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>`Browser: `</b> là môi trường chính của JavaScript trước khi Node.js ra đời. Trong trình duyệt,
							JavaScript thường tương tác với giao diện người dùng (DOM) và xử lý các sự kiện như click, nhập liệu, v.v.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>`Node.js: `</b> chạy JavaScript ngoài trình duyệt, vì vậy không có DOM hay các API liên quan đến giao
							diện người dùng. Thay vào đó, Node.js cung cấp các API khác để tương tác với hệ thống file, mạng, cơ sở dữ
							liệu, và các dịch vụ khác ở mức server-side.
						</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-bold text-xl">
					Làm rõ hơn về các thành phần của môi trường Node.js:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>`Global Objects: `</b> Node.js cung cấp các đối tượng toàn cục như global, process, và Buffer để truy
							cập thông tin về hệ thống và thao tác với dữ liệu hệ thống.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							<b>`CommonJS module system: `</b> Node.js sử dụng hệ thống module CommonJS, các module được định nghĩa
							bằng cách sử dụng require() và module.exports.
							<br />
							<FilePath>require()</FilePath> Được sử dụng để nạp một module bên ngoài vào trong tệp hiện tại.
							<br />
							<FilePath>module.exports</FilePath> Được sử dụng để định nghĩa những gì một module sẽ xuất ra để các tệp
							khác có thể truy cập được.
						</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mt-3 leading-8 text-2xl">Tổng kết:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span>
							Node.js thực thi JavaScript bằng V8 Engine thông qua mô hình Event Loop và các cơ chế bất đồng bộ.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>Môi trường Node.js khác với trình duyệt ở chỗ không có DOM và các Web APIs, nhưng cung cấp các công cụ
							mạnh mẽ để tương tác với hệ điều hành và hệ thống file.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<span
							>V8 Engine đảm bảo hiệu suất cao cho ứng dụng Node.js bằng cách tối ưu hóa quá trình biên dịch và thực thi
							mã.</span
						>
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
				b1: `// Sử dụng require để nạp một module
const fs = require('fs');

// Đọc một file trong hệ thống
fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-3' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
