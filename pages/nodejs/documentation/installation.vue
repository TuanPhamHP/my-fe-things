<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">Hướng dẫn tạo ứng dụng NodeJS</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trước khi bắt đầu cài đặt thì bạn cần đảm bảo máy tính của bạn đã có
					<a
						href="https://nodejs.org/en/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						NodeJS
					</a>
					để lập trình ở local. <br />
					Để kiểm tra máy tính của bạn đã có sẵn
					<a
						href="https://nodejs.org/en/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						NodeJS
					</a>
					hay chưa bạn có thể mở Terminal và gõ:
				</p>
				<FakeTerminalUI :textCoppy="'node --version'">
					<p>node --version</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nếu máy bạn đã cài đặt NodeJS thì CLI sẽ trả về kết quả là version hiện tại của NodeJS. Ví dụ:
				</p>
				<FakeTerminalUI>
					<p>v18.14.2</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold py-2 italic">
					Trong trường hợp máy bạn chưa cài NodeJS thì vui lòng cài đặt trước khi đọc tiếp. Ở đây tôi recommend việc cài
					bản LTS. Link cài:
					<a
						href="https://nodejs.org/en/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						NodeJS
					</a>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau khi cài đặt Node bạn cần thêm 1 <i>package manager</i> để quản lý các package tại local. <br />
					Chúng ta có thể dùng 2 loại <i>package manager</i> phổ biến là
					<a
						href="https://docs.npmjs.com/"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						NPM
					</a>
					hoặc
					<a
						href="https://v3.yarnpkg.com/getting-started/install"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						YARN
					</a>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Kiểm tra local đã cài đặt NPM hay chưa bạn có thể mở Terminal và gõ:
				</p>
				<FakeTerminalUI :textCoppy="'npm -v'">
					<p>npm -v</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Nếu máy bạn đã cài đặt NPM thì CLI sẽ trả về kết quả là version hiện tại của NPM. Ví dụ:
				</p>
				<FakeTerminalUI>
					<p>9.6.7</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 font-bold py-2 italic">
					Note: Bạn cần phải cài đặt đầy đủ Node và Package Manager tại local để có thể tiếp tục. Hiện tại tôi chỉ hướng
					đến phần basic nên trong tài liệu này sẽ chỉ đề cập đến việc khởi tạo app với "create-vite" vì nó đơn giản và
					không cần config phức tạp.
				</p>
				<PageHeading text="First App" addOnClass="text-left" markedAs="first-app" />
				<p class="text-slate-900 dark:text-white mt-5">Khởi tạo ứng dụng NodeJS của chúng ta:</p>
				<p class="text-slate-900 dark:text-white mt-5 font-bold">1 - Tạo thư mục dự án:</p>
				<FakeTerminalUI :textCoppy="'mkdir hello-nodejs cd hello-nodejs'">
					<p>mkdir hello-nodejs</p>
					<p>cd hello-nodejs</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 font-bold">2 - Tạo file app.js:</p>
				<VCodeBlock :code="`console.log('Hello, Node.js!');`" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 font-bold">3 - Chạy ứng dụng với terminal:</p>
				<FakeTerminalUI :textCoppy="'node app.js'">
					<p>node app.js</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
					All done ! <br />
					Project của bạn đã được khởi chạy thành công. 🤓👌
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
	import { apiResponde } from 'models';
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
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
