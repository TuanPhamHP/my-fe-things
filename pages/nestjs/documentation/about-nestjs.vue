<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="NestJS là gì?" addOnClass="text-left" markedAs="about-nest" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>NestJS</b> là một <b>framework Node.js</b> mạnh mẽ, được xây dựng trên <b>TypeScript</b> và tận dụng các
					khái niệm hiện đại như:
				</p>
				<SkyList :docs="newFeatures" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					NestJS không chỉ để viết <b>REST API</b>, mà còn hỗ trợ:
				</p>
				<SkyList :docs="supportDbs" />

				<PageHeading
					text="NestJS sinh ra để giải quyết vấn đề gì?"
					addOnClass="text-left"
					markedAs="nestjs-avd"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Khi code với NodeJS chúng ta gặp khá nhiều vấn đề khi dự án được phát triển lớn dần như:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1 rounded border border-gray-200 shadow">
						<p class="px-2 text-slate-900 pb-1 border-b bg-red-400 leading-8 font-bold rounded-t">Code với NodeJS</p>
						<SkyList :docs="nodePros" />
					</div>
					<div class="col-span-1 rounded border border-gray-200 shadow">
						<p class="px-2 text-slate-900 pb-1 border-b bg-info-300 leading-8 font-bold rounded-t">Code với NestJS</p>
						<SkyList :docs="nestCons" />
					</div>
				</div>
				<PageHeading text="Core Concepts của NestJS" addOnClass="text-left mt-3" markedAs="nest-core-concept" />

				<DocFactoryTable :headers="nestConceptHeader" :items="nestCoreConcepts" />
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
						link: '/nestjs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nestjs/documentation',
					},
				},
				newFeatures: [
					{
						id: 1,
						content: 'Dependency Injection (DI)',
					},
					{
						id: 2,
						content: 'Modular Architecture',
					},
					{
						id: 3,
						content: 'Decorators (giống Angular)',
					},
					{
						id: 4,
						content: 'Middleware, Guards, Pipes, Interceptors',
					},
				],
				supportDbs: [
					{
						id: 1,
						content: 'GraphQL',
					},
					{
						id: 2,
						content: 'Microservices',
					},
					{
						id: 3,
						content: 'WebSockets',
					},
					{
						id: 4,
						content: 'gRPC',
					},
					{
						id: 5,
						content: 'Serverless',
					},
				],
				nestCons: [
					{
						id: 1,
						content: '<b>DI Container	</b>',
						subList: ['🔥Dễ inject service, test, tái sử dụng'],
					},
					{
						id: 2,
						content: '<b>Module System</b>',
						subList: ['🔥Chia nhỏ ứng dụng theo domain (auth, user, order...)'],
					},
					{
						id: 3,
						content: '<b>OOP + TypeScript	</b>',
						subList: ['🔥Có class, type rõ ràng → dễ bảo trì, ít bug'],
					},
					{
						id: 4,
						content: '<b>Built-in support cho test</b>',
						subList: ['🔥Unit test & E2E test dễ tích hợp với Jest'],
					},
				],
				nodePros: [
					{
						id: 1,
						content: '<b>Code lộn xộn, thiếu tổ chức (callback hell, spaghetti code)</b>',
						subList: [
							'🔻 Khó mở rộng, dễ trùng lặp code, mỗi file mỗi kiểu',
							'🔻 Người mới vào team không hiểu logic',
							'🔻 Dễ bug khi sửa chỗ này ảnh hưởng chỗ khác',
							'🔻 Không có separation of concerns (tách riêng logic & request)',
						],
					},
					{
						id: 2,
						content: '<b>Không có sẵn kiến trúc rõ ràng (Không có MVC, Module, Service...)</b>',
						subList: [
							'🔻 Mỗi dev tổ chức theo một kiểu → hỗn loạn',
							'🔻 Dự án lớn dần trở nên khó maintain',
							'🔻 Không dễ test do phụ thuộc lẫn nhau',
							'🔻 Mất thời gian refactor khi dự án phình to',
						],
					},
					{
						id: 3,
						content: '<b>Không có DI Container như các framework lớn (Laravel, Spring)</b>',
						subList: [
							'🔻 Khó tái sử dụng component',
							'🔻 Viết unit test trở nên khó khăn',
							'🔻 Phải tự quản lý việc tạo & truyền đối tượng',
							'🔻 Không có "lifecycle" rõ ràng khi khởi tạo các class/service',
						],
					},
				],
				nestConceptHeader: [
					{
						id: 1,
						name: 'Tên',
					},
					{
						id: 2,
						name: 'Mô tả ngắn gọn',
					},
				],
				nestCoreConcepts: [
					{
						name: 'Module',
						description: 'Chia ứng dụng thành các khối độc lập, dễ tổ chức và tái sử dụng.',
					},
					{
						name: 'Controller',
						description: 'Xử lý các request đến từ client, trả response tương ứng.',
					},
					{
						name: 'Service',
						description: 'Chứa logic nghiệp vụ chính, có thể được inject vào controller.',
					},
					{
						name: 'Provider',
						description: 'Mọi thứ có thể được inject – ví dụ: service, repository, factory, v.v.',
					},
					{
						name: 'Dependency Injection (DI)',
						description: 'Cơ chế tự động "tiêm" phụ thuộc giúp code dễ test, mở rộng.',
					},
					{
						name: 'Decorator',
						description: 'Cú pháp ngắn gọn định nghĩa metadata như route, module, middleware...',
					},
					{
						name: 'Pipe',
						description: 'Xử lý transform hoặc validate dữ liệu trước khi vào controller.',
					},
					{
						name: 'Middleware',
						description: 'Can thiệp vào request trước khi vào route xử lý.',
					},
					{
						name: 'Guard',
						description: 'Kiểm tra quyền truy cập – thường dùng cho Auth, Role, Permission.',
					},
					{
						name: 'Interceptor',
						description: 'Can thiệp vào trước/sau controller để logging, transform, handle timeout...',
					},
					{
						name: 'Exception Filter',
						description: 'Bắt và xử lý lỗi theo chuẩn, có thể global hoặc custom.',
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nestjs', currentDocId: 'nestjs-1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
