<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Controllers" addOnClass="text-left" markedAs="about-controller" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Controllers</b> là một thành phần cốt lõi chịu trách nhiệm xử lý các <b>HTTP request</b> và trả về
					<b>response</b> tương ứng cho client. Controller được sử dụng để định nghĩa các <b>route (đường dẫn)</b> và
					logic xử lý cho các yêu cầu từ phía client.
				</p>
				<div class="grid grid-cols-2 gap-3">
					<div class="col-span-2">
						<img src="https://docs.nestjs.com/assets/Controllers_1.png" alt="" class="w-fit max-w-full rounded-lg" />
					</div>
				</div>
				<PageHeading text="1/ Cấu trúc cơ bản" addOnClass="text-left" markedAs="controller-structure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Controller trong NestJS là một <b>class</b> được đánh dấu bằng decorator <FilePath>@Controller()</FilePath>.
					Decorator này chỉ định prefix (tiền tố) cho các route của controller. Mỗi phương thức trong controller được
					gắn với một decorator tương ứng với các HTTP method (như <FilePath>@Get(), @Post()</FilePath> v.v.) để xử lý
					request. Ví dụ:
				</p>
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b1" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<PageHeading text="2/ Các thành phần chính" addOnClass="text-left" markedAs="controller-main-part" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					🧩<FilePath>@Controller(prefix?)</FilePath>: Định nghĩa một controller và tiền tố route (ví dụ: /users). Nếu
					không cung cấp prefix, các route sẽ không có tiền tố.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">🧩 <b>HTTP Method Decorators</b> Bao gồm:</p>
				<SkyList :docs="httpDecor" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					🧩 <b>Parameter Decorators</b> Dùng để lấy dữ liệu từ request:
				</p>
				<SkyList :docs="paramDecor" />
				<PageHeading text="3/ Tạo controller" addOnClass="text-left" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Nest có hỗ trợ chúng ta tạo nhanh một Controller bằng command:
				</p>
				<FakeTerminalUI :textCoppy="'nest g controller  [name]'">nest g controller [name]</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Hoặc nếu bạn cần tạo một CRUD controller và có built-in validator để sử dụng thì chúng ta có thể tạo resource:
				</p>
				<FakeTerminalUI :textCoppy="'nest g resource  [name]'">nest g resource [name]</FakeTerminalUI>
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
				httpDecor: [
					{
						id: 1,
						content: '<b>@Get(path?), @Post(path?), @Put(path?) ...</b>: Xử lý các http request.',
					},
				],
				paramDecor: [
					{
						id: 1,
						content: '<b>@Body():</b> Lấy dữ liệu từ body của request.',
					},
					{
						id: 2,
						content: '<b>@Param():</b> Lấy tham số từ URL (route parameters).',
					},
					{
						id: 3,
						content: '<b>@Query():</b> Lấy query parameters từ URL.',
					},
					{
						id: 4,
						content: '<b>@Req():</b> Lấy toàn bộ request object.',
					},
					{
						id: 5,
						content:
							'<b>@Res():</b> Lấy response object (thường ít dùng vì NestJS khuyến khích trả về dữ liệu trực tiếp).',
					},
				],
				b1: `import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users') // Prefix cho tất cả route trong controller là '/users'
export class UsersController {
  @Get() // Xử lý GET /users
  getAllUsers() {
    return { message: 'Danh sách tất cả user' };
  }

  @Post() // Xử lý POST /users
  createUser(@Body() userData: any) {
    return { message: 'Tạo user mới', data: userData };
  }
}`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'nestjs', currentDocId: 'nestjs-03' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
