<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">Hướng dẫn tạo ứng dụng Next</p>
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
					<p>v20.11.1</p>
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
					Note: Bạn cần phải cài đặt đầy đủ Node và Package Manager tại local để có thể tiếp tục.
					<br />
					Tại thời điểm hiện tại tôi sử dụng Nextjs - v14 đi kèm npm v20.11.1
				</p>
				<div class="py-3"></div>
				<PageHeading text="1. Create-Next-App" addOnClass="text-left" markedAs="create-next-app" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Create-Next-App được dùng để khởi tạo nhanh một NextJS Project. Recommend khi bạn muốn tạo nhanh một SPA, phù
					hợp khi bạn có một dự án nhỏ hoặc sử dụng để học thêm về core của Next
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8"><b>Note:</b> Required Node &gt;= 18.17 on local</p>
				<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
					<b>B1: Init</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Cài đặt package <b>`create-next-app`</b> một cách global vào trong máy:</b>
				</p>
				<FakeTerminalUI :textCoppy="'npm install create-next-app my-app -g'">
					<p>npm i create-next-app -g</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b
						>Sau đó tạo project thông qua package <b>`create-next-app`</b> vừa tải. Bạn có thể CHỌN 1 trong các cách cài
						sau:</b
					>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
					<b>NPX (Recommend):</b>
				</p>
				<FakeTerminalUI :textCoppy="'npx create-next-app my-app'">
					<p>npx create-next-app@latest</p>
				</FakeTerminalUI>

				<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
					<b>YARN:</b>
				</p>
				<FakeTerminalUI :textCoppy="'yarn create next-app my-app'">
					<p>yarn create-next-app@latest</p>
				</FakeTerminalUI>
				<span class="text-slate-900 dark:text-white">
					<b>Note: </b>
					yarn create chỉ dùng được với phiên bản Yarn 0.25 trở lên
				</span>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau đó bạn chỉ cần ngồi đợi project được init. <br />
					Khi trình khởi tạo hoàn tất, bạn cần lựa config cho dự án. Tôi sẽ sử dụng dấu ✅ để thể hiện lựa chọn
				</p>
				<FakeTerminalUI>
					What is your project named? my-app <br />
					Would you like to use TypeScript? No / <b>Yes</b> ✅<br />
					Would you like to use ESLint? No / <b>Yes</b> ✅<br />
					Would you like to use Tailwind CSS? No / <b>Yes</b> ✅<br />
					Would you like to use `src/` directory? <b>No</b> ✅ / Yes <br />
					Would you like to use App Router? (recommended) No / <b>Yes</b> ✅<br />
					Would you like to customize the default import alias (@/*)? <b>No</b> ✅/ Yes <br />
					What import alias would you like configured? @/* <br />
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ở bước config phía trên tôi đã chọn sử dụng <b>Typescript</b> cho dự án của mình để tăng tính maintain. Vui
					lòng lựa chọn <b>No</b> nếu bạn không muốn dùng, nhưng tôi highly recommend việc sử dụng
					<b>Typescript.</b> Với việc dựng giao diện thì tôi lựa chọn <b>TailwindCSS</b> đơn giản là vì tôi quen sử dụng
					thằng này. <b>App Router</b> được chọn để `dùng thử` tính năng mới được intro từ team NextJs
				</p>
				<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
					<b>B2: Run</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
					All done ! <br />
					Project của bạn đã được khởi tạo thành công. Để chạy project tại local, bạn run command:
				</p>
				<FakeTerminalUI :textCoppy="'npm start'">
					<p>npm start</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
					Web app của bạn sẽ được serve tại:
					<a href="http://localhost:3000" target="_blank" rel="noreferrer" class="underline text-blue-500">
						http://localhost:3000
					</a>
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
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage },
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
				this.$api.documentations
					.getPagination({ appIds: 'nextjs-basic', currentDocId: 'nextjs-1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
