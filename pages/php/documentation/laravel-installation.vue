<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">Hướng dẫn tạo ứng dụng Laravel</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trước khi bắt đầu cài đặt thì bạn cần đảm bảo máy tính của bạn đã có
					<a
						href="https://getcomposer.org/download/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						Composer
					</a>
					để lập trình ở local. Lưu ý, các hướng dẫn sau được dùng với Window, với các OS khác các bạn vui lòng search
					thêm.<br />
					Để kiểm tra máy tính của bạn đã có sẵn
					<a
						href="https://getcomposer.org/download/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						Composer
					</a>
					hay chưa bạn có thể mở Terminal và gõ:
				</p>
				<FakeTerminalUI :textCoppy="'composer --version'">
					<p>composer --version</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nếu máy bạn đã cài đặt PHP, Composer thì CLI sẽ trả về kết quả là version hiện tại của PHP. Ví dụ:
				</p>
				<FakeTerminalUI>
					<p>
						Composer version 2.7.6 2024-05-04 23:03:15 <br />
						PHP version 8.2.12 (C:\xampp\php\php.exe) <br />
						Run the "diagnose" command to get more detailed diagnostics output.
					</p>
				</FakeTerminalUI>
				<PageHeading text="Init Laravel Project" addOnClass="text-left" markedAs="php" :lvl="2" />
				<p class="text-slate-900 dark:text-white mb-5 leading-8 font-bold py-2 italic">
					Sau khi đã cài đặt xong composer, chúng ta sẽ khởi tạo ứng dụng Laravel với phiên bản mới nhất thông qua
					composer bằng cách chạy câu lệnh sau ở terminal.
				</p>
				<FakeTerminalUI :textCoppy="'composer create-project laravel/laravel hello-laravel'">
					<p>composer create-project laravel/laravel hello-laravel</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mb-5 leading-8 font-bold py-2 italic">
					Trong đó <b>`hello-laravel`</b> là tên của project.
					<br />
					Tiếp theo sử dụng artisan để serve project của chúng ta.
				</p>
				<FakeTerminalUI>
					<p>
						cd hello-laravel
						<br />
						php artisan serve
					</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mb-5 leading-8 font-bold py-2 italic">
					Done! Dự án của chúng ta sẽ được serve tại host mặc định là http://localhost:8000. 🐳
					<br />
					Bài tiếp theo, chúng ta sẽ cùng học cách làm việc với laravel.
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-14' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
