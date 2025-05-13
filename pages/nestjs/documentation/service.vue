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

				<p class="text-slate-900 dark:text-white my-2 leading-8 font-bold">Nguyên tắc "SOLID"</p>
				<div v-for="item in solid" :key="item.name" class="mb-2">
					<Disclosure v-slot="{ open }">
						<DisclosureButton
							class="flex w-full justify-between bg-indigo-500 px-4 py-2 text-white font-bold"
							:class="open ? 'rounded-t-lg' : 'rounded-lg'"
						>
							<div v-html="item.name"></div>
						</DisclosureButton>
						<DisclosurePanel class="px-4 pb-2 pt-1 text-sm rounded-b-lg bg-indigo-100/50">
							<div v-html="item.desc"></div>
						</DisclosurePanel>
					</Disclosure>
				</div>
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
				solid: [
					{
						name: `<span>S – Single Responsibility Principle (Nguyên tắc trách nhiệm đơn lẻ)</span>`,
						desc: `<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Một class chỉ nên có một lý do để thay đổi.</b>
							<br />
							❤️ Hiểu đơn giản: Một class chỉ nên làm một việc duy nhất.
							<br />
							🔥 Trong NestJS: BookingService chỉ lo xử lý logic booking, còn BookingController chỉ nhận request và trả
							response.
						</div>`,
					},
					{
						name: `<span>O – Open/Closed Principle (Mở rộng nhưng đóng với thay đổi)</span>`,
						desc: `<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Class nên mở để mở rộng, nhưng đóng với sửa đổi.</b>
							<br />
							❤️ Hiểu đơn giản: Bạn nên mở rộng class bằng cách kế thừa hoặc inject, không nên chỉnh sửa trực tiếp code cũ vì dễ gây lỗi.
						</div>`,
					},
					{
						name: `<span>L – Liskov Substitution Principle (Nguyên tắc thay thế Liskov)</span>`,
						desc: `<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Khi kế thừa, subclass phải có thể thay thế class cha mà không làm hỏng chương trình.</b>
							<br />
							❤️ Hiểu đơn giản: Bạn nên mở rộng class bằng cách kế thừa hoặc inject, không nên chỉnh sửa trực tiếp code cũ vì dễ gây lỗi.
							<br />
							🔥 Bạn có thể thay NormalBookingService bằng VipBookingService mà không cần sửa BookingController — vì cả hai đều tuân theo IBookingService.
						</div>`,
					},
					{
						name: `<span> I – Interface Segregation Principle (Nguyên tắc tách giao diện)</span>`,
						desc: `<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>Không ép client dùng những interface không cần thiết.</b>
							<br />
							❤️ Hiểu đơn giản: Bạn nên tạo ra nhiều interface nhỏ, thay vì một cái to đùng.
							<br />
							🔥 ICreatable, IUpdatable, IDeletable riêng biệt thay vì một interface ICRUD.
						</div>`,
					},
					{
						name: `<span> D – Dependency Inversion Principle (Nguyên tắc đảo ngược phụ thuộc)</span>`,
						desc: `<div class="text-slate-900 dark:text-white mt-0 leading-8">
							<b>High-level modules không nên phụ thuộc vào low-level modules. Cả hai nên phụ thuộc vào abstraction.</b>
							<br />
							❤️ Hiểu đơn giản: Trong NestJS, bạn inject Service qua constructor, thay vì khởi tạo trực tiếp
							<br />
							🔥 Bạn nên:
							<br />
							❤️<b>constructor(private readonly bookingService: BookingService) {}</b> // phụ thuộc lỏng => không quan tâm đến constructor và properties của low-level
							<br />
							Thay vì:
							<br />
							❌<b>const bookingService = new BookingService(); </b>// phụ thuộc chặt => bắt buộc phải đọc constructor và properties của low-level, tạo thành ràng buộc
						</div>`,
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
					.getPagination({ appIds: 'nestjs', currentDocId: 'nestjs-04' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
