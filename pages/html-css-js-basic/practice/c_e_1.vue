<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data max-w-full">
				<PageHeading text="Đề bài" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tạo Trang Web Giới Thiệu Bản Thân
				</p>

				<div class="px-3 py-3 bg-neutral-200 rounded-xl">
					<!DOCTYPE html>
					<html lang="en">
						<head>
							<meta charset="UTF-8" />
							<title>Giới thiệu bản thân</title>
						</head>
						<body>
							<h1 class="font-bold text-leading text-4xl mb-3">Nguyễn Văn A</h1>
							<img
								src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103130.jpg"
								alt=""
								width="220px"
								title="Nguyễn Văn A"
							/>
							<p class="mb-3">
								Xin chào! Tôi là Nguyễn Văn A, hiện tại tôi đang học lập trình web. Tôi thích khám phá các công nghệ mới
								và xây dựng ứng dụng thú vị.
							</p>

							<h2 class="font-bold text-xl mb-3">Sở thích cá nhân</h2>
							<ul class="list-disc ml-5 mb-3">
								<li>Đọc sách</li>
								<li>Chơi thể thao</li>
								<li>Du lịch</li>
							</ul>

							<h2 class="font-bold text-xl mb-3">Các bước làm việc hàng ngày</h2>
							<ol class="list-decimal ml-5 mb-3">
								<li>Thức dậy lúc 6 giờ sáng</li>
								<li>Đi tập thể dục</li>
								<li>Học lập trình</li>
								<li>Giải trí với âm nhạc hoặc phim</li>
							</ol>

							<p>
								Trang web yêu thích của tôi là
								<a href="https://www.google.com" target="_blank" class="text-underline text-blue-600">Google</a>.
							</p>
							<p>
								Câu Quote của tôi là:
								<br />
								<b><em>Nếu có thể ngồi thì sẽ không đứng</em></b>
								<br />
								<b><em>Nếu có thể nằm thì nhất quyết không ngồi.</em></b>
							</p>
						</body>
					</html>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>Yêu cầu:</b> Clone lại giao diện trên với thông tin của bản thân
				</p>
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
