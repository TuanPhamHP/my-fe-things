<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">Hướng dẫn tạo ứng dụng PHP</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trước khi bắt đầu cài đặt thì bạn cần đảm bảo máy tính của bạn đã có
					<a
						href="https://windows.php.net/download/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						PHP
					</a>
					để lập trình ở local. Lưu ý, các hướng dẫn sau được dùng với Window, với các OS khác các bạn vui lòng search
					thêm.<br />
					Để kiểm tra máy tính của bạn đã có sẵn
					<a
						href="https://windows.php.net/download/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						PHP
					</a>
					hay chưa bạn có thể mở Terminal và gõ:
				</p>
				<FakeTerminalUI :textCoppy="'php -v'">
					<p>php -v</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nếu máy bạn đã cài đặt PHP thì CLI sẽ trả về kết quả là version hiện tại của PHP. Ví dụ:
				</p>
				<FakeTerminalUI>
					<p>
						PHP 8.2.12 (cli) (built: Oct 24 2023 21:15:15) (ZTS Visual C++ 2019 x64)
						<br />
						Copyright (c) The PHP Group
						<br />
						Zend Engine v4.2.12, Copyright (c) Zend Technologies
					</p>
				</FakeTerminalUI>
				<PageHeading text="PHP" addOnClass="text-left" markedAs="php" :lvl="2" />
				<p class="text-slate-900 dark:text-white mb-5 leading-8 font-bold py-2 italic">
					Trong trường hợp máy bạn chưa cài PHP thì vui lòng cài đặt trước khi đọc tiếp. Các bạn nên cài PHP ^v.5.x, cụ
					thể thì các bạn có thể lựa chọn ^v7.2.x hoặc ^8.2.x để sử dụng.
					<a
						href="https://windows.php.net/download/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						Link download
					</a>
				</p>
				<PageHeading text="Web Server + MySQL" addOnClass="text-left" markedAs="web-server" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau khi cài đặt PHP chúng ta sẽ cài thêm một máy chủ web trên thiết bị để thực thi các file .php của chúng ta.
					Ở đây tôi recommend 2 loại là Apache hoặc Nginx. Sau đó chúng ta sẽ config root_dir của nó để thực thi các
					file .php của chúng ta. Ngoài ra, khả năng rất cao là bạn cũng phải làm việc với dữ liệu, nên tôi recommend
					thêm <b>`MySQL`</b> để giúp bạn làm việc với dữ liệu.
					<br />
					Cài đặt:
					<a
						href="https://dev.mysql.com/downloads/mysql/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						MySQL
					</a>
					|

					<a
						href="https://httpd.apache.org/download.cgi"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						APACHE
					</a>
					hoặc
					<a
						href="https://nginx.org/en/docs/windows.html"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						NginX
					</a>
				</p>

				<Disclosure v-slot="{ open }">
					<DisclosureButton
						class="flex w-full justify-between bg-indigo-500 px-4 py-2 text-white font-bold"
						:class="open ? 'rounded-t-lg' : 'rounded-lg'"
					>
						<span>Vì sao tôi lại cần web-server như Apache | Nginx... ?</span>
					</DisclosureButton>
					<DisclosurePanel class="px-4 pb-2 pt-1 text-sm rounded-b-lg bg-indigo-100/50">
						<p class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Xử lý mã PHP</b>: PHP là một ngôn ngữ lập trình phía máy chủ, tức là là mã PHP cần được xử lý trên
							server trước khi response về client. Máy chủ web như Apache hoặc Nginx có thể được cấu hình để xử lý và
							thực thi mã PHP và trả về kết quả (thường là HTML) cho trình duyệt web của bạn.
						</p>
						<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>HTTP Response</b>: Server sẽ nhận các request từ client thông qua các giao thức HTTP, sau đó chúng cũng
							response về kết quả dựa trên giao thức đó. <FilePath>Web server</FilePath> sẽ giúp chúng ta thực hiện các
							thao tác này.
						</div>
						<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Cấu hình và quản lý</b>: <FilePath>Web server</FilePath> cung cấp các tính năng như cấu hình linh hoạt,
							bảo mật, quản lý các phiên và các vấn đề liên quan đến việc chạy một máy chủ web trong môi trường sản phẩm
							hoặc phát triển.
						</div>
						<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Environments</b>: <FilePath>Web server</FilePath> sẽ giả lập các môi trường giống như trên product, từ
							đó ta có thể debug và tránh các lỗi phát sinh khi triển khai thực tế.
						</div>
					</DisclosurePanel>
				</Disclosure>
				<div class="py-2"></div>
				<PageHeading text="XAMPP" addOnClass="text-left" markedAs="xampp" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nhiều thứ phải tải quá? Tôi có giải pháp cho bạn đây <b>`XAMPP`</b> - ứng dụng hỗ trợ chúng ta tạo ra một môi
					trường (environments) tích hợp sẵn <FilePath>MySQL</FilePath>, <FilePath>Web Server</FilePath>.
					<br />
					"XAMPP" là viết tắt của "X" (cho các hệ điều hành khác nhau), "Apache", "MySQL", "PHP", và "Perl". XAMPP cung
					cấp một môi trường phát triển web đầy đủ, bao gồm các thành phần như máy chủ web Apache, hệ quản trị cơ sở dữ
					liệu MySQL, ngôn ngữ lập trình PHP và Perl, cũng như các công cụ quản lý cơ sở dữ liệu phpMyAdmin.
					<br />
					<br />
					Như vậy, chỉ cần cài đặt XAMPP thì chúng ta sẽ có luôn combo n trong 1. Tải

					<a
						href="https://www.apachefriends.org/download.html"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						XAMPP.
					</a>
					Khi cài đặt chúng ta có thể chọn ở Disk C:/ để tiện cho các config tiếp theo.
				</p>
				<PageHeading text="Running" addOnClass="text-left" markedAs="web-server" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau khi đã có XAMPP thì chúng ta sẽ ngâm cứu 1 chút để biết cách khởi chạy những dòng PHP đầu tiên
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>`B1 - Khởi động XAMPP`</b>: Mở XAMPP Control Panel và khởi động các dịch vụ Apache và MySQL bằng cách nhấp
					vào nút "Start" bên cạnh chúng.
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>`B2 - Tạo project trong thư mục htdocs`</b>: Tìm thư mục htdocs: Thư mục htdocs nằm trong thư mục cài đặt
					XAMPP. Thường thì đường dẫn sẽ là <FilePath>C:\xampp\htdocs</FilePath> trên Windows. Tiếp theo, tôi sẽ tạo thư
					mục tên là <FilePath>hello-php</FilePath>, trong đó sẽ có 1 file là <b>`index.php`</b>
				</p>
				<div class="py-1"></div>
				<VCodeBlock
					:code="`<!-- hello-php/index.php -->
<!DOCTYPE html>
<html>
<body>
	<?php
		echo 'My first PHP script!';
	?>  
</body>
</html>`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>`B3 - Truy cập local`</b>: Mở ngay ứng dụng php của bạn tại
					<FilePath> http://localhost/hello-php/ </FilePath>. Done (❁´◡`❁)
				</p>

				<p class="text-slate-900 dark:text-white mt-5 leading-8"></p>
				<Disclosure v-slot="{ open }">
					<DisclosureButton
						class="flex w-full justify-between bg-indigo-500 px-4 py-2 text-white font-bold"
						:class="open ? 'rounded-t-lg' : 'rounded-lg'"
					>
						<span>Tại sao lại phải tạo project trong <FilePath> htdocs </FilePath>?</span>
					</DisclosureButton>
					<DisclosurePanel class="px-4 pb-2 pt-1 text-sm rounded-b-lg bg-indigo-100/50">
						<div class="text-slate-900 dark:text-white mt-0 leading-8">
							Chúng ta tạo project trong
							<FilePath> htdocs </FilePath> đơn giản là vì lợi dụng cấu hình mặc định của <FilePath> Apache </FilePath>
						</div>
					</DisclosurePanel>
				</Disclosure>
				<div class="py-3"></div>
				<Disclosure v-slot="{ open }">
					<DisclosureButton
						class="flex w-full justify-between bg-indigo-500 px-4 py-2 text-white font-bold"
						:class="open ? 'rounded-t-lg' : 'rounded-lg'"
					>
						<span>Tôi có thể tạo project của tôi ở nơi khác không?</span>
					</DisclosureButton>
					<DisclosurePanel class="px-4 pb-2 pt-1 text-sm rounded-b-lg bg-indigo-100/50">
						<div class="text-slate-900 dark:text-white mt-0 leading-8">
							Đương nhiên là có, nếu muốn tạo project ở nơi khác thì bạn chỉ cần config lại
							<FilePath> Apache </FilePath> là xong.
						</div>
					</DisclosurePanel>
				</Disclosure>

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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-1' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
