<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Module" addOnClass="text-left" markedAs="about" />
				<div class="grid grid-cols-2 gap-3">
					<div class="col-span-2">
						<img src="https://docs.nestjs.com/assets/Modules_1.png" alt="" class="w-fit max-w-full rounded-lg" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Module</b> là một <b>class</b> trong NestJS, được đánh dấu bằng decorator
					<FilePath>@Module()</FilePath> đóng vai trò như một container để nhóm các thành phần liên quan (như
					Controller, Service, Provider, hoặc các Module khác) thành một đơn vị logic. Module giúp:
				</p>
				<SkyList :docs="moduleAttributes" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Module là cách NestJS thực hiện nguyên tắc <b>Separation of Concerns (tách biệt trách nhiệm)</b> và
					<b>Modular Architecture</b>.
				</p>

				<PageHeading text="1/ Tạo module" addOnClass="text-left" markedAs="create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Nest có hỗ trợ chúng ta tạo nhanh một Module bằng command:
				</p>
				<FakeTerminalUI :textCoppy="'nest g module [name]'">nest g module [name]</FakeTerminalUI>
				<PageHeading text="2/ Cấu trúc cơ bản" addOnClass="text-left" markedAs="structure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Một Module được định nghĩa bằng decorator <FilePath>@Module()</FilePath>, nhận một object với các thuộc tính
					sau:
				</p>
				<SkyList :docs="moduleParts" />
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b1" highlightjs lang="ts" theme="atom-one-dark" />
				</div>

				<PageHeading text="3/ Các loại Module" addOnClass="text-left" markedAs="types" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Tuy rằng NestJS không định nghĩa chính thức các "loại" Module, nhưng dựa trên mục đích và cách sử dụng, chúng
					ta có thể phân loại Module như sau:
				</p>
				<div v-for="item in moduleTypes" :key="item.name">
					<p class="text-slate-900 font-bold dark:text-white my-1 leading-8">
						{{ item.name }}
					</p>
					<SkyList :docs="item.descs" />
				</div>
				<PageHeading text="4/ Cách hoạt động" addOnClass="text-left" markedAs="using" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Module trong NestJS hoạt động dựa trên <b>Dependency Injection (DI)</b> và <b>Module System</b>:
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
				sum: [
					{
						id: 1,
						content: 'Service là nơi xử lý chính, không phải controller.',
					},
					{
						id: 2,
						content: 'Nên dùng <b>@Injectable()</b> để Nest có thể inject Service vào nơi khác.',
					},
					{
						id: 3,
						content:
							'Service giúp tuân thủ nguyên tắc <b>SOLID</b>, đặc biệt là nguyên tắc tách biệt nhiệm vụ (Single Responsibility).',
					},
					{
						id: 4,
						content:
							'Sử dụng Service là bước khởi đầu để xây dựng một ứng dụng theo hướng modular, testable và maintainable.',
					},
				],
				moduleAttributes: [
					{
						id: 1,
						content:
							'<b>Tổ chức code:</b> Phân chia ứng dụng thành các khối chức năng riêng biệt (ví dụ: module cho booking, user, payment).',
					},
					{
						id: 2,
						content: '<b>Tăng tính modular:</b> Mỗi Module quản lý một tính năng cụ thể, dễ tái sử dụng hoặc thay thế.',
					},
					{
						id: 4,
						content: '<b>Tăng khả năng bảo trì:</b>Code được tổ chức rõ ràng, dễ mở rộng và debug.',
					},
				],
				moduleParts: [
					{
						id: 1,
						content: '<b>imports</b>: Các Module khác được import để sử dụng trong Module hiện tại',
					},
					{
						id: 2,
						content: '<b>exports</b>: Các Provider hoặc Module được export để Module khác sử dụng.',
					},
					{
						id: 3,
						content: '<b>controllers</b>: Các Controller xử lý HTTP request cho Module.',
					},
					{
						id: 4,
						content: '<b>providers</b>: Các Provider (như Service) cung cấp logic nghiệp vụ hoặc chức năng khác.',
					},
				],
				moduleTypes: [
					{
						name: 'a. Feature Module',
						descs: [
							{
								id: 1,
								content:
									'<b>Mô tả</b>: Module xử lý một tính năng cụ thể của ứng dụng, như quản lý booking, user, hoặc payment.',
							},
							{
								id: 2,
								content:
									'<b>Khi sử dụng</b>: Khi bạn muốn nhóm các Controller, Service, và Entity liên quan đến một tính năng.',
							},
							{
								id: 3,
								content: '<b>Ví dụ</b>: Module cho quản lý booking.',
							},
						],
					},
					{
						name: 'b. Shared Module',
						descs: [
							{
								id: 1,
								content:
									'<b>Mô tả</b>: Module chứa các <b>Provider</b> hoặc <b>Service</b> được chia sẻ trên nhiều Module, thường export các thành phần chung.',
							},
							{
								id: 2,
								content:
									'<b>Khi sử dụng</b>: Khi bạn cần tái sử dụng Service (như ConfigService, NotificationService) trong toàn ứng dụng.',
							},
							{
								id: 3,
								content: '<b>Ví dụ</b>: Module chứa NotificationService để gửi email.',
							},
						],
					},
					{
						name: 'c. Global Module',
						descs: [
							{
								id: 1,
								content:
									'<b>Mô tả</b>: Module được đánh dấu bằng <b>@Global()</b>, cho phép các Provider của nó được sử dụng mà không cần import Module.',
							},
							{
								id: 2,
								content:
									'<b>Khi sử dụng</b>: Khi bạn muốn một số Service (như ConfigService) có sẵn trên toàn ứng dụng.',
							},
							{
								id: 3,
								content: '<b>Ví dụ</b>: Module chứa cấu hình ứng dụng.',
							},
						],
					},
					{
						name: 'd. Dynamic Module',
						descs: [
							{
								id: 1,
								content:
									'<b>Mô tả</b>: Module được tạo động (thông qua hàm tĩnh như forRoot hoặc forFeature), cho phép cấu hình linh hoạt.',
							},
							{
								id: 2,
								content:
									'<b>Khi sử dụng</b>: Khi bạn cần Module có thể được cấu hình khác nhau tùy thuộc vào ngữ cảnh (ví dụ: TypeOrmModule.forRoot()).',
							},
							{
								id: 3,
								content: '<b>Ví dụ</b>: Module tích hợp TypeORM hoặc Cache.',
							},
						],
					},
				],
				b1: `import { Module } from '@nestjs/common';
import { MyController } from './my.controller';
import { MyService } from './my.service';

@Module({
  imports: [],
  controllers: [MyController],
  providers: [MyService],
  exports: [MyService],
})
export class MyModule {}`,
				b3: `import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  findAll() {
    return this.bookingService.getHello();
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
					.getPagination({ appIds: 'nestjs', currentDocId: 'nestjs-04' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
