<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
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
					đến phần basic nên trong tài liệu này sẽ chỉ đề cập đến việc khởi tạo app với "create-vite" vì nó đơn giản và
					không cần config phức tạp.
				</p>

				<PageHeading text="1. Vite + React (recommend)" addOnClass="text-left" markedAs="vite-react-app" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Sử dụng vite kèm template react được dùng để khởi tạo nhanh một React SPA. Recommend khi bạn muốn tạo nhanh
					một SPA, phù hợp khi bạn có một dự án nhỏ hoặc sử dụng để học thêm về core của React
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8"><b>Note:</b> Required Node &gt;= 14 on local</p>
				<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
					<b>B1: Init</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Cài đặt package <b>`create-vite`</b> một cách global vào trong máy:</b>
				</p>
				<FakeTerminalUI :textCoppy="'npm install vite -g'">
					<p>npm install vite -g</p>
				</FakeTerminalUI>
				<FakeTerminalUI :textCoppy="'npm install create-vite -g'">
					<p>npm install create-vite -g</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b
						>Sau đó tạo project thông qua package <b>`create-vite`</b> vừa tải. Bạn có thể CHỌN 1 trong các cách cài
						sau:</b
					>
				</p>

				<div class="py-3"></div>
				<div class="border rounded-lg">
					<Disclosure>
						<DisclosureButton
							as="div"
							class="cursor-pointer flex items-center justify-between py-2 bg-neutral-100 px-2 rounded-lg"
						>
							<PageHeading
								text="NPX"
								addOnClass="text-left dark:text-neutral-900"
								markedAs="vite-react-app-npx"
								:lvl="2"
							/>
							<Icon name="solar:round-double-alt-arrow-down-linear" size="20" />
						</DisclosureButton>

						<transition
							enter-active-class="transition duration-100 ease-out"
							enter-from-class="transform scale-95 opacity-0"
							enter-to-class="transform scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-out"
							leave-from-class="transform scale-100 opacity-100"
							leave-to-class="transform scale-95 opacity-0"
						>
							<DisclosurePanel>
								<div class="px-5 py-2">
									<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
										<b>NPX (Recommend):</b>
									</p>
									<FakeTerminalUI :textCoppy="'npx create-react-app my-app'">
										<p>npx create-vite hello-react --template react</p>
									</FakeTerminalUI>
									<span class="text-slate-900 dark:text-white">
										<b>Note: </b>
										npx chỉ dùng được với phiên bản npm 5.2 trở lên. Replace 'hello-react' bằng tên ứng dụng mà bạn muốn
									</span>

									<p class="text-slate-900 dark:text-white mt-5 leading-8">
										Sau đó bạn chỉ cần ngồi đợi project được init. <br />
										Khi trình khởi tạo hoàn tất, bạn có thể mở project vừa tạo bằng cách gõ:
									</p>
									<FakeTerminalUI :textCoppy="'cd my-app'">
										<p>cd hello-react</p>
									</FakeTerminalUI>
									<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
										<b>B2: Cài các modules</b>
									</p>
									<FakeTerminalUI :textCoppy="'cd my-app'">
										<p>npm i</p>
									</FakeTerminalUI>
									<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
										Đây là bước để các bạn cài toàn bộ modules cần có (note trong package.json) để khởi chạy dự án.
									</p>
									<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
										<b>B3: Run</b>
									</p>
									<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
										All done ! <br />
										Project của bạn đã được khởi tạo thành công. Để chạy project tại local, bạn run command:
									</p>
									<FakeTerminalUI :textCoppy="'npm run dev'">
										<p>npm run dev</p>
									</FakeTerminalUI>
									<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
										Web app của bạn sẽ được serve tại:
										<a href="http://localhost:3000" target="_blank" rel="noreferrer" class="underline text-blue-500">
											http://localhost:3000
										</a>
									</p>
								</div>
							</DisclosurePanel>
						</transition>
					</Disclosure>
				</div>

				<div class="border rounded-lg my-5">
					<Disclosure>
						<DisclosureButton
							as="div"
							class="cursor-pointer flex items-center justify-between py-2 bg-neutral-100 px-2 rounded-lg"
						>
							<PageHeading
								text="YARN"
								addOnClass="text-left dark:text-neutral-900"
								markedAs="vite-react-app-yarn"
								:lvl="2"
							/>

							<Icon name="solar:round-double-alt-arrow-down-linear" size="20" />
						</DisclosureButton>

						<transition
							enter-active-class="transition duration-100 ease-out"
							enter-from-class="transform scale-95 opacity-0"
							enter-to-class="transform scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-out"
							leave-from-class="transform scale-100 opacity-100"
							leave-to-class="transform scale-95 opacity-0"
						>
							<DisclosurePanel>
								<div class="pl-5">
									<p class="text-slate-900 dark:text-white mt-5 text-lg leading-8">
										<b>YARN:</b>
									</p>
									<FakeTerminalUI :textCoppy="'yarn create-vite hello-react --template react'">
										<p>yarn create-vite hello-react --template react</p>
									</FakeTerminalUI>
									<span class="text-slate-900 dark:text-white">
										<b>Note: </b>
										yarn create chỉ dùng được với phiên bản Yarn 0.25 trở lên
									</span>
									<p class="text-slate-900 dark:text-white mt-5 leading-8">
										Sau đó bạn chỉ cần ngồi đợi project được init. <br />
										Khi trình khởi tạo hoàn tất, bạn có thể mở project vừa tạo bằng cách gõ:
									</p>
									<FakeTerminalUI :textCoppy="'cd hello-react'">
										<p>cd hello-react</p>
									</FakeTerminalUI>
									<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
										<b>B2: Cài các modules</b>
									</p>
									<FakeTerminalUI :textCoppy="'yarn'">
										<p>yarn</p>
									</FakeTerminalUI>
									<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
										Đây là bước để các bạn cài toàn bộ modules cần có (note trong package.json) để khởi chạy dự án.
									</p>
									<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
										<b>B3: Run</b>
									</p>
									<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
										All done ! <br />
										Project của bạn đã được khởi tạo thành công. Để chạy project tại local, bạn run command:
									</p>
									<FakeTerminalUI :textCoppy="'yarn dev'">
										<p>yarn dev</p>
									</FakeTerminalUI>
									<p class="text-slate-900 dark:text-white mt-5 leading-8 text-lg">
										Web app của bạn sẽ được serve tại địa chỉ mà thằng vite hiển thị sau khi câu lệnh thành công.
									</p>
								</div>
							</DisclosurePanel>
						</transition>
					</Disclosure>
				</div>

				<div class="py-3"></div>
				<PageHeading text="2. Create-React-App (deprecate)" addOnClass="text-left" markedAs="create-react-app" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Create-React-App được dùng để khởi tạo nhanh một React SPA. Tôi không khuyến khích dùng cách này do nó đã
					outdate khá nặng kèm theo việc build của nó rất chậm.
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8"><b>Note:</b> Required Node &gt;= 14 on local</p>
				<p class="text-slate-900 dark:text-white mt-5 xl:text-2xl underline leading-8">
					<b>B1: Init</b>
				</p>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Cài đặt package <b>`create-react-app`</b> một cách global vào trong máy:</b>
				</p>
				<FakeTerminalUI :textCoppy="'npm install create-react-app my-app -g'">
					<p>npm install create-react-app -g</p>
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
					Web app của bạn sẽ được serve tại địa chỉ mà thằng vite hiển thị sau khi câu lệnh thành công.
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
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
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
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 1 })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
