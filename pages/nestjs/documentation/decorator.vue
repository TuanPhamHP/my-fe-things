<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Decorator là gì?" addOnClass="text-left" markedAs="about-decorator" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>Decorator</b> trong NestJS là một tính năng của TypeScript (dựa trên JavaScript ES6), được sử dụng để thêm
					metadata hoặc sửa đổi hành vi của các lớp, phương thức, thuộc tính, hoặc tham số. Trong NestJS, decorator được
					sử dụng rộng rãi để:
				</p>
				<SkyList :docs="newFeatures" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Decorator trong NestJS được xây dựng dựa trên khái niệm decorator của TypeScript, vốn là một dạng hàm đặc biệt
					được gọi khi khai báo lớp, phương thức, hoặc thuộc tính. NestJS tận dụng chúng để tích hợp các tính năng như
					định tuyến (routing), dependency injection, và xử lý yêu cầu/phản hồi.
				</p>

				<PageHeading text="Cách hoạt động" addOnClass="text-left" markedAs="decorator-diving" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Chúng ta sẽ cùng làm rõ hơn về các khía cạnh quan trọng của Decorator như
					<br />
					<b>- Syntax, Cơ chế hoạt động ...</b>
				</p>
				<PageHeading text="Cú pháp cơ bản" addOnClass="text-left" markedAs="decorator-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Decorator trong TypeScript có dạng <FilePath>@TênDecorator(arg?)</FilePath>, được đặt ngay trước khai báo lớp,
					phương thức, thuộc tính, hoặc tham số. Ví dụ:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					=> <FilePath> @Controller('cats')</FilePath> là một <b>decorator</b>, đánh dấu class <b>CatsController</b> là
					một controller với prefix route <b>/cats</b>.
				</p>
				<PageHeading text="Cơ chế hoạt động" addOnClass="text-left" markedAs="decorator-syntax" :lvl="2" />
				<SkyList :docs="supportDbs" />
				<PageHeading text="Phân loại" addOnClass="text-left" markedAs="decorator-target" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Bảng các loại Decorator phổ biến trong NestJS</p>
				<!-- 
				<SkyList :docs="nestCons" /> -->
				<DocumentTable :operators="listTarget" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Ví dụ một Controller dùng Operator</p>
				<VCodeBlock :code="b2" highlightjs lang="js" theme="atom-one-dark" />
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
						content:
							'<b>Định nghĩa cấu trúc ứng dụng:</b> Ví dụ, đánh dấu một lớp là <b>controller (@Controller)</b> hoặc một phương thức là <b>endpoint GET (@Get)</b>.',
					},
					{
						id: 2,
						content:
							'<b>Tự động hóa các tác vụ:</b> Ví dụ, ánh xạ yêu cầu HTTP, xác thực dữ liệu, hoặc kiểm tra quyền truy cập.',
					},
					{
						id: 3,
						content:
							'<b>Tăng tính tường minh:</b> Decorator giúp mã dễ đọc hơn bằng cách gắn metadata trực tiếp vào các thành phần thay vì sử dụng cấu hình phức tạp.',
					},
				],
				supportDbs: [
					{
						id: 1,
						content:
							'Decorator là một hàm được gọi tại thời điểm biên dịch (compile time), thêm metadata hoặc sửa đổi hành vi của mục tiêu (target) mà nó được áp dụng.',
					},
					{
						id: 2,
						content: `NestJS sử dụng reflect-metadata (một thư viện của TypeScript) để lưu trữ và truy xuất metadata từ các decorator, từ đó tự động xử lý các tác vụ như định tuyến hoặc tiêm phụ thuộc (dependency injection).`,
					},
					{
						id: 3,
						content: `Ví dụ: Khi bạn dùng @Get(), NestJS sẽ ghi lại rằng phương thức này xử lý yêu cầu GET và ánh xạ nó với một endpoint cụ thể.`,
					},
				],
				nestCons: [
					{
						id: 1,
						content: '<b>Class</b> Ví dụ, <b>@Controller, @Module, @Injectable.</b>',
					},
					{
						id: 2,
						content: '<b>Method</b> Ví dụ, <b>@Get, @Post, @UseGuards.</b>',
					},
					{
						id: 3,
						content: '<b>Property</b> Ví dụ, <b>@Inject.</b>',
					},
				],
				listTarget: [
					{
						id: 1,
						label: 'Module',
					},
					{
						id: 2,
						name: '@Module',
						desc: 'Định nghĩa một module, chứa controllers, providers, imports, exports.',
						syntax: '@Module({ controllers: [CatsController], providers: [CatsService] })',
					},
					{
						id: 3,
						label: 'Controller',
					},
					{
						id: 4,
						name: '@Controller',
						desc: 'Đánh dấu một lớp là controller, định nghĩa prefix route.',
						syntax: "@Controller('cats')",
					},
					{
						id: 5,
						label: 'HTTP Methods',
					},
					{
						id: 6,
						name: '@Get',
						desc: 'Ánh xạ phương thức đến yêu cầu GET.',
						syntax: "@Get(':id')",
					},
					{
						id: 7,
						name: '@Post',
						desc: 'Ánh xạ phương thức đến yêu cầu POST.',
						syntax: '@Post()',
					},
					{
						id: 8,
						name: '@Put',
						desc: 'Ánh xạ phương thức đến yêu cầu PUT.',
						syntax: "@Put(':id')",
					},
					{
						id: 9,
						name: '@Delete',
						desc: 'Ánh xạ phương thức đến yêu cầu DELETE.',
						syntax: "@Delete(':id')",
					},
					{
						id: 10,
						name: '@Patch',
						desc: 'Ánh xạ phương thức đến yêu cầu PATCH.',
						syntax: "@Patch(':id')",
					},
					{
						id: 11,
						name: '@Options',
						desc: 'Ánh xạ phương thức đến yêu cầu OPTIONS.',
						syntax: '@Options()',
					},
					{
						id: 12,
						name: '@Head',
						desc: 'Ánh xạ phương thức đến yêu cầu HEAD.',
						syntax: '@Head()',
					},
					{
						id: 13,
						name: '@All',
						desc: 'Ánh xạ phương thức đến tất cả các phương thức HTTP.',
						syntax: '@All()',
					},
					{
						id: 14,
						label: 'Request Handling',
					},
					{
						id: 15,
						name: '@Param',
						desc: 'Lấy tham số từ URL.',
						syntax: "@Param('id') id: string",
					},
					{
						id: 16,
						name: '@Query',
						desc: 'Lấy query parameters từ URL.',
						syntax: "@Query('page') page: string",
					},
					{
						id: 17,
						name: '@Body',
						desc: 'Lấy dữ liệu từ body của yêu cầu (thường dùng với POST/PUT).',
						syntax: '@Body() createCatDto: CreateCatDto',
					},
					{
						id: 18,
						name: '@Headers',
						desc: 'Lấy header từ yêu cầu.',
						syntax: "@Headers('authorization') auth: string",
					},
					{
						id: 19,
						name: '@Req, @Request',
						desc: 'Lấy toàn bộ đối tượng request.',
						syntax: '@Req() req: Request',
					},
					{
						id: 20,
						name: '@Res, @Response',
						desc: 'Lấy đối tượng response (thường dùng với tùy chỉnh phản hồi).',
						syntax: '@Res() res: Response',
					},
					{
						id: 21,
						name: '@Next',
						desc: 'Lấy hàm next trong middleware.',
						syntax: '@Next() next: NextFunction',
					},
					{
						id: 22,
						label: 'Dependency Injection',
					},
					{
						id: 23,
						name: '@Injectable',
						desc: 'Đánh dấu một lớp là provider, có thể được tiêm phụ thuộc.',
						syntax: '@Injectable() class CatsService {}',
					},
					{
						id: 24,
						name: '@Inject',
						desc: 'Tiêm một provider cụ thể vào lớp.',
						syntax: "@Inject('CUSTOM_TOKEN') private customService",
					},
					{
						id: 25,
						label: 'Middleware/Guards',
					},
					{
						id: 26,
						name: '@UseGuards',
						desc: 'Áp dụng guard để kiểm tra quyền truy cập.',
						syntax: '@UseGuards(AuthGuard)',
					},
					{
						id: 27,
						name: '@UseInterceptors',
						desc: 'Áp dụng interceptor để biến đổi yêu cầu/phản hồi.',
						syntax: '@UseInterceptors(LoggingInterceptor)',
					},
					{
						id: 28,
						name: '@UsePipes',
						desc: 'Áp dụng pipe để xác thực/chuyển đổi dữ liệu.',
						syntax: '@UsePipes(new ValidationPipe())',
					},
					{
						id: 29,
						label: 'Metadata',
					},
					{
						id: 30,
						name: '@SetMetadata',
						desc: 'Gắn metadata tùy chỉnh vào phương thức hoặc lớp.',
						syntax: "@SetMetadata('roles', ['admin'])",
					},
					{
						id: 31,
						label: 'Response Status',
					},
					{
						id: 32,
						name: '@HttpCode',
						desc: 'Đặt mã trạng thái HTTP cho phản hồi.',
						syntax: '@HttpCode(201)',
					},
					{
						id: 33,
						name: '@Header',
						desc: 'Thêm header vào phản hồi.',
						syntax: "@Header('Content-Type', 'application/json')",
					},
					{
						id: 34,
						name: '@Redirect',
						desc: 'Chuyển hướng yêu cầu đến URL khác.',
						syntax: "@Redirect('/new-url', 302)",
					},
				],
				b1: `@Controller('cats')
export class CatsController {}`,
				b2: `import { Controller, Get, Post, Body, Param, HttpCode, UsePipes, ValidationPipe, SetMetadata } from '@nestjs/common';
import { CatsService } from './cats.service';

// DTO sử dụng interface
interface CreateCatDto {
  name: string;
  age: number;
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.catsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  create(@Body() createCatDto: CreateCatDto): string {
    return this.catsService.create(createCatDto);
  }

  @Get('admin')
  @SetMetadata('roles', ['admin'])
  adminRoute(): string {
    return 'Admin access only';
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
					.getPagination({ appIds: 'nestjs', currentDocId: 'nestjs-02' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
