<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
			
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta cùng tìm hiểu về cấu trúc câu lệnh của PHP, một số syntax basic nhất 
					trong PHP.
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="php-syntax" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tiếp theo là syntax cơ bản của <FilePath>php</FilePath>
				</p>
				<div class="py-1">
					<VCodeBlock
						:code="`<!-- hello-php/index.php -->
<?php
	echo 'My first PHP script!';
?>  `"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Rất giống với <FilePath>HTML</FilePath> nhỉ. Lưu ý là một block code của <FilePath>PHP</FilePath>
					được bắt đầu bằng <FilePath>{{ `<?php` }}</FilePath> và kết thúc với <FilePath>{{ `?>` }}</FilePath>.
					Ở giữa chúng chính là vùng cho phép chúng ta viết code PHP.
					<br>
					Ở đây chúng ta sẽ học câu lệnh đầu tiên là <FilePath>echo</FilePath>, đây là
					một câu lệnh cực kì phổ biến trong PHP, tác dụng của nó là in nội dung ra màn hình hoặc gửi nó về phía 
					client qua trình duyệt web.
					<br>
			
				</p>
				<PageHeading text="Running by Command Prompt" addOnClass="text-left" markedAs="php-command-promt"  :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Chúng ta có thể sử dụng 'Command Prompt' để chạy file <FilePath>index.php</FilePath> ở trên,
					mở terminal tại địa chỉ của folder 'hello-php' và chạy:
				</p>
				<FakeTerminalUI :textCoppy="'php index.php'">
					<p>php index.php</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ta được kết quả:
				</p>
				<VCodeBlock
						:code="`PS C:/xampp/htdocs/hello-php> php index.php
My first PHP script!`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>

				<PageHeading text="Serve by XAMPP" addOnClass="text-left mt-5" markedAs="php-using-xampp" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Hoặc phổ biến hơn, chúng ta sẽ sử dụng XAMPP để giả lập môi trường và thực thi code php của chúng ta trên đó, 
					Xem lại bài 
					<a
						href="/php/documentation/installation"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
					PHP - Installation
					</a>
					để set-up. Truy cập <FilePath> http://localhost/hello-php/ </FilePath> để view.
					Với việc setup XAMPP ta có thể sử dụng HTML template ngay trong file PHP:
				</p>
				<div class="py-2"></div>
				<VCodeBlock
						:code="`<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
</head>
<body>
<h1>
	<?php
 	 print('Hello guys, I am PHP');
	?>
</h1>
</body>
</html>`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>

				<div class="py-2"></div>
				<PageHeading text="Comments" addOnClass="text-left mt-5" markedAs="php-comment" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Comments trong nhiều ngôn ngữ lập trình là một feature quan trọng, nó giúp chú
					thích ý nghĩa của code, note lại những logic quan trọng hoặc được coi như một phần
					document của dự án. Trong PHP ta có thể tạo ra comments bằng syntax sau:
				</p>
				<VCodeBlock
						:code="`// Đây là single-line comment
/*
	Đây là 
	multi-line 
	comment
*/`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>
					<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Các comment lines sẽ được bỏ qua trong quá trình chạy của dự án.
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
