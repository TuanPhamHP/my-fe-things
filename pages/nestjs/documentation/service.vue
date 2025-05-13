<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Service" addOnClass="text-left" markedAs="about" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Service</b> là một <b>Provider</b> trong NestJS, được đánh dấu bằng decorator
					<FilePath>@Injectable()</FilePath> dùng để:
				</p>
				<SkyList :docs="serviceAttributes" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Service thường được sử dụng để thực hiện các tác vụ như:
				</p>
				<SkyList :docs="serviceTarget" />
				<PageHeading text="1/ Tạo service" addOnClass="text-left" markedAs="create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Nest có hỗ trợ chúng ta tạo nhanh một Service bằng command:
				</p>
				<FakeTerminalUI :textCoppy="'nest g service [name]'">nest g service [name]</FakeTerminalUI>
				<PageHeading text="2/ Cấu trúc cơ bản" addOnClass="text-left" markedAs="structure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Một Service là một class được đánh dấu bằng <FilePath>@Injectable()</FilePath>, chứa các phương thức xử lý
					logic nghiệp vụ. Service thường được inject vào Controller hoặc Service khác thông qua
					<b>Dependency Injection (DI)</b>. Ví dụ:
				</p>
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b1" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<FilePath>@Injectable()</FilePath>cho phép NestJS quản lý <FilePath>BookingService</FilePath> trong DI
					container.
				</p>
				<PageHeading text="3/ Dùng trong controller" addOnClass="text-left" markedAs="using" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Do đã dùng decorator <FilePath>@Injectable()</FilePath> nên trong controller chúng ta có thể gán trực tiếp
					Service cho property của controller đó thông qua DI
				</p>
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b3" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<p class="text-slate-900 dark:text-white my-2 leading-8 font-bold">Kết luận:</p>
				<SkyList :docs="sum" />
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
				serviceAttributes: [
					{
						id: 1,
						content: '<b>Xử lý logic nghiệp vụ:</b> Ví dụ, truy vấn database, tính toán, hoặc xử lý dữ liệu.',
					},
					{
						id: 2,
						content:
							'<b>Tách biệt logic khỏi Controller:</b> Controller chỉ nên nhận request, gọi Service, và trả response.',
					},
					{
						id: 3,
						content: '<b>Tái sử dụng code:</b> Service có thể được inject vào nhiều Controller hoặc Service khác.',
					},
					{
						id: 4,
						content: '<b>Dễ kiểm thử:</b> Vì Service thường không phụ thuộc vào HTTP, nó dễ dàng được test độc lập.',
					},
				],
				serviceTarget: [
					{
						id: 1,
						content: 'Tương tác với database (thông qua TypeORM, Prisma, Mongoose, v.v.).',
					},
					{
						id: 2,
						content: 'Gọi API bên thứ ba.',
					},
					{
						id: 3,
						content: 'Xử lý logic phức tạp (như kiểm tra, tính toán, hoặc chuyển đổi dữ liệu).',
					},
				],
				b1: `import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  getHello(): string {
    return 'Hello from BookingService!';
  }
}`,
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
