<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Environment" addOnClass="text-left" markedAs="env" />
				<p class="text-slate-900 dark:text-white mt-5">Hướng dẫn tạo ứng dụng React</p>
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
					đến phần basic nên trong tài liệu này sẽ chỉ đề cập đến việc khởi tạo app với "Create-React-App" vì nó đơn
					giản và không cần config phức tạp.
				</p>
				<div class="py-3"></div>
				<PageHeading text="1. Create-React-App" addOnClass="text-left" markedAs="create-react-app" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Create-React-App được dùng để khởi tạo nhanh một React SPA. Recommend khi bạn muốn tạo nhanh một SPA, phù hợp
					khi bạn có một dự án nhỏ hoặc sử dụng để học thêm về core của React
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8"><b>Note:</b> Required Node &gt;= 14 on local</p>
				<p class="text-slate-900 dark:text-white mt-5 md:text-2xl underline leading-8">
					<b>B1: Init</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Cài đặt package <b>`create-react-app`</b> một cách global vào trong máy:</b>
				</p>
				<FakeTerminalUI :textCoppy="'npm install create-react-app my-app -g'">
					<p>npm install create-react-app my-app -g</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b
						>Sau đó tạo project thông qua package <b>`create-react-app`</b> vừa tải. Bạn có thể CHỌN 1 trong các cách
						cài sau:</b
					>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
					<b>NPX (Recommend):</b>
				</p>
				<FakeTerminalUI :textCoppy="'npx create-react-app my-app'">
					<p>npx create-react-app my-app</p>
				</FakeTerminalUI>
				<span class="text-slate-900 dark:text-white">
					<b>Note: </b>
					npx chỉ dùng được với phiên bản npm 5.2 trở lên
				</span>
				<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
					<b>NPM:</b>
				</p>
				<FakeTerminalUI :textCoppy="'npm init react-app my-app'">
					<p>npm init react-app my-app</p>
				</FakeTerminalUI>
				<span class="text-slate-900 dark:text-white">
					<b>Note: </b>
					npm init initializer chỉ dùng được với phiên bản npm 6 trở lên
				</span>
				<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
					<b>YARN:</b>
				</p>
				<FakeTerminalUI :textCoppy="'yarn create react-app my-app'">
					<p>yarn create react-app my-app</p>
				</FakeTerminalUI>
				<span class="text-slate-900 dark:text-white">
					<b>Note: </b>
					yarn create chỉ dùng được với phiên bản Yarn 0.25 trở lên
				</span>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sau đó bạn chỉ cần ngồi đợi project được init. <br />
					Khi trình khởi tạo hoàn tất, bạn có thể mở project vừa tạo bằng cách gõ:
				</p>
				<FakeTerminalUI :textCoppy="'cd my-app'">
					<p>cd my-app</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 md:text-2xl underline leading-8">
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

				<div class="py-2 mt-5 border-t text-indigo-500 dark:text-white flex w-full items-center justify-between">
					<div
						class="text-indigo-500 dark:text-white cursor-pointer flex items-center gap-2 hover:bg-gray-100/25 w-fit px-2 rounded-lg"
						@click="$router.push('/documentation')"
					>
						<Icon name="solar:double-alt-arrow-left-bold" size="32px" />
						<span>Trở về danh sách Document</span>
					</div>
					<div
						class="text-indigo-500 dark:text-white cursor-pointer flex items-center gap-2 hover:bg-gray-100/25 w-fit px-2 rounded-lg"
						@click="$router.push('/documentation/hooks')"
					>
						<span>Bài tiếp theo</span>
						<Icon name="solar:double-alt-arrow-right-bold" size="32px" />
					</div>
				</div>
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '../../components/Documentation/PageMarkBook.vue';
	import PageHeading from '../../components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '../../components/FakeTerminalUI.vue';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI },
	};
</script>
