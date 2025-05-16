<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Middleware" addOnClass="text-left" markedAs="about" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Middleware trong Express.js là các hàm được thực thi trong quá trình xử lý một yêu cầu HTTP (request) trước
					khi gửi phản hồi (response). Chúng hoạt động như một "lớp trung gian" giữa request và response, cho phép bạn:
				</p>
				<SkyList :docs="middlewareDocs"></SkyList>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Mỗi middleware là một hàm nhận 3 tham số:</p>
				<SkyList :docs="middlewareParams"></SkyList>
				<VCodeBlock :code="b1" highlightjs lang="javascript" theme="atom-one-dark" />
				<PageHeading text="Các loại Middleware" addOnClass="text-left" markedAs="types" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Express.js hỗ trợ nhiều loại middleware, bao gồm:</p>
				<PageHeading text="Các loại Middleware" addOnClass="text-left" markedAs="types" />
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
				middlewareDocs: [
					{
						id: 1,
						content: `Xử lý logic trước khi route xử lý yêu cầu.`,
					},
					{
						id: 2,
						content: `Sửa đổi request hoặc response.`,
					},
					{
						id: 3,
						content: `Kết thúc chu trình request-response.`,
					},
					{
						id: 4,
						content: `Chuyển tiếp yêu cầu đến middleware hoặc route tiếp theo.`,
					},
				],
				middlewareParams: [
					{
						id: 1,
						content: `<b>req:</b> Đối tượng request.`,
					},
					{
						id: 2,
						content: `<b>res:</b> Đối tượng response.`,
					},
					{
						id: 3,
						content: `<b>next:</b> Hàm callback để chuyển điều khiển sang middleware hoặc route tiếp theo.`,
					},
				],
				b1: `function myMiddleware(req, res, next) {
  console.log('Middleware được gọi!');
  next(); // Chuyển tiếp yêu cầu
}`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-10' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
