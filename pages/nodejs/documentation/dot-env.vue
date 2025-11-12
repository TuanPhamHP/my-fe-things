<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">
					ENV - environment (Môi trường) là một tập hợp các biến cấu hình được sử dụng để thiết lập và quản lý môi
					trường hoạt động của ứng dụng Node.js. Các biến này thường được lưu trữ trong các file riêng biệt <b>.env</b>
					và sẽ không public trên mã nguồn chính thức của ứng dụng. Để giúp bảo mật thông tin nhạy cảm như khóa API,
					thông tin đăng nhập cơ sở dữ liệu, và các cấu hình khác.
				</p>

				<p class="text-slate-900 dark:text-white mt-5 font-bold">1 - Tạo file .env :</p>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 font-bold">2 - Cài đặt dotenv để đọc các biến môi trường:</p>
				<FakeTerminalUI :textCoppy="'npm install dotenv'">
					<p>npm install dotenv</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 font-bold">
					3 - Sử dụng trong các file cần load biến môi trường:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
					All done ! <br />
					Fiờ chúng ta sẽ truyền hết các biến môi trường vào .env nha. 🤓👌
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
				b1: `APP_ENV=development
APP_HOST=localhost
APP_PORT=3000`,
				b2: `// Dòng này tự động tải các biến từ .env vào process.env
import 'dotenv/config';

console.log(process.env.APP_HOST); // Output: localhost`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-9.1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
