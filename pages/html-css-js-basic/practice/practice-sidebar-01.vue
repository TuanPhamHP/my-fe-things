<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Chào mừng anh em đến với series thực hành HTML basic.
					<br />
					Ở phần này chúng ta bắt đầu với việc thực hành tạo một khối <b>Sidebar</b> cho trang web.
				</p>

				<div class="px-3 py-3 bg-neutral-200 rounded-xl">
					<nav class="max-w-[270px] w-[270px] py-2 px-2 bg-indigo-800 rounded min-h-[100vh]">
						<ul class="space-y-2 font-medium">
							<li class="mb-10">
								<a href="#" class="flex items-center p-2 rounded-lg text-white group">
									<img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-500 group">
									<span class="ms-3">Báo cáo</span>
								</a>
							</li>
							<li>
								<a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-500 group">
									<span class="ms-3">Quản lý sản phẩm</span>
								</a>
							</li>
							<li>
								<a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-500 group">
									<span class="ms-3">Quản lý đơn hàng</span>
								</a>
							</li>
							<li>
								<a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-500 group">
									<span class="ms-3">Quản lý nhân viên</span>
								</a>
							</li>

							<li>
								<a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-500 group">
									<span class="ms-3">Cài đặt</span>
								</a>
							</li>
							<li class="list-item relative">
								<a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-indigo-500 group">
									<span class="ms-3">Trợ giúp</span>
								</a>
								<div
									class="dropdown absolute bg-white border rounded py-2 top-0 right-0"
									style="transform: translateX(100%)"
								>
									<a
										href="#"
										class="flex items-center p-2 rounded-0 text-slate-900 hover:bg-gray-100 hover:border-b border-solid group"
									>
										<span>Trợ giúp về phần mềm</span>
									</a>
									<a
										href="#"
										class="flex items-center p-2 rounded-0 text-slate-900 hover:bg-gray-100 hover:border-b border-solid group"
									>
										<span>Trợ giúp về quản lý</span>
									</a>
									<a
										href="#"
										class="flex items-center p-2 rounded-0 text-slate-900 hover:bg-gray-100 hover:border-b border-solid group"
									>
										<span>Tuỳ biến</span>
									</a>
								</div>
							</li>
						</ul>
					</nav>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Yêu cầu:</b> Clone lại giao diện trên bao gồm cả hiệu ứng, màu sắc. Khi hover vàp menu item
					<b>`Trợ giúp`</b> sẽ có khối dropdown tương ứng
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Tài nguyên:</b>
				</p>
				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Màu:</b>
					<br />
					<div class="flex">
						<span>- Màu background của cả sidebar</span>
						<div class="flex gap-1 items-center">
							: #3730a3
							<div class="w-4 h-4 rounded bg-[#3730a3]"></div>
						</div>
					</div>
					- Màu text: mặc định - #fff
					<div class="flex">
						<span> - Màu background menu item khi hover</span>
						<div class="flex gap-1 items-center">
							: #6366f1
							<div class="w-4 h-4 rounded bg-[#6366f1]"></div>
						</div>
					</div>
					<div class="flex">
						<span> - Màu background dropdown item khi hover</span>
						<div class="flex gap-1 items-center">
							: #f3f4f6
							<div class="w-4 h-4 rounded bg-[#f3f4f6]"></div>
						</div>
					</div>
				</div>

				<div class="pl-3 text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b class="">Spacing:</b>
					<br />
					<p>
						<span>- Kích thước của cả sidebar: </span>
						width - 270px | padding: 12px | radius: 4px
					</p>
					<p>
						<span>- Kích thước của mỗi item trong menu: </span>
						padding: 8px 12px | radius: 8px
					</p>
					<p>
						<span>- Kích thước của mỗi item trong dropdown: </span>
						padding: 8px 12px | radius: 0px | border: 1px màu #e5e7eb
					</p>
				</div>
				<!-- END -->

				<DocNextPage :pagination="pagePagination" />
			</div>
			<!-- <PageMarkBook /> -->
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
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
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
				this.$api.trainingTask
					.getPagination({ appIds: 'html-basic', currentDocId: 'htmle_01' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.list-item .dropdown {
		display: none;
	}
	.list-item:hover .dropdown {
		display: block;
	}
</style>
