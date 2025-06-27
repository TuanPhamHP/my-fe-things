<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Controllers" addOnClass="text-left mt-3" markedAs="about-controller" />
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
				<PageHeading text="1/ Cấu trúc cơ bản" addOnClass="text-left mt-3" markedAs="controller-structure" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Controller trong NestJS là một <b>class</b> được đánh dấu bằng decorator <FilePath>@Controller()</FilePath>.
					Decorator này chỉ định prefix (tiền tố) cho các route của controller. Mỗi phương thức trong controller được
					gắn với một decorator tương ứng với các HTTP method (như <FilePath>@Get(), @Post()</FilePath> v.v.) để xử lý
					request. Ví dụ:
				</p>
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b1" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<PageHeading text="2/ Các thành phần chính" addOnClass="text-left mt-3" markedAs="main-part" :lvl="2" />
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
				<PageHeading text="3/ Tạo controller" addOnClass="text-left mt-3" markedAs="create" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Nest có hỗ trợ chúng ta tạo nhanh một Controller bằng command:
				</p>
				<FakeTerminalUI :textCoppy="'nest g controller  [name]'">nest g controller [name]</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Hoặc nếu bạn cần tạo một CRUD controller và có built-in validator để sử dụng thì chúng ta có thể tạo resource:
				</p>
				<FakeTerminalUI :textCoppy="'nest g resource  [name]'">nest g resource [name]</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Sau khi tạo, chúng mình sẽ dùng các core concepts như <b>DI, Decorator</b> để định nghĩa lên Controller:
				</p>
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b2" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<PageHeading text="4/ Status code" addOnClass="text-left mt-3" markedAs="custom-response" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					NestJS cho phép trả về dữ liệu trực tiếp từ controller, và framework sẽ tự động chuyển đổi thành JSON và gửi
					response với status code phù hợp (mặc định là 200 cho GET, 201 cho POST). Bạn cũng có thể tùy chỉnh response
					bằng cách sử dụng @Res() hoặc các decorator như @HttpCode().
				</p>
				<div class="my-4 rounded-lg">
					<VCodeBlock :code="b3" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<PageHeading text="5/ Shared State" addOnClass="text-left mt-3" markedAs="shared-state" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>State Sharing</b> đề cập đến việc quản lý và chia sẻ dữ liệu hoặc trạng thái giữa các thành phần khác nhau
					trong ứng dụng, chẳng hạn như giữa các Controller, Service, hoặc các request. <b>Service</b> là cách phổ biến
					nhất để chia sẻ trạng thái trong NestJS. Vì Service là một singleton theo mặc định (được quản lý bởi
					Dependency Injection), nó có thể lưu trữ trạng thái và chia sẻ giữa các Controller hoặc các thành phần khác.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 my-4 gap-3">
					<div class="col-span-1">
						<div class="rounded-lg">
							<p class="font-bold italic text-slate-900 dark:text-white mt-1 leading-8">Tạo Shared Service</p>
							<VCodeBlock :code="b4" highlightjs lang="ts" theme="atom-one-dark" />
						</div>
					</div>
					<div class="col-span-1">
						<div class="rounded-lg">
							<p class="font-bold italic text-slate-900 dark:text-white mt-1 leading-8">Sử dụng</p>
							<VCodeBlock :code="b5" highlightjs lang="ts" theme="atom-one-dark" />
						</div>
					</div>
				</div>
				<PageHeading text="6/ Asynchronicity" addOnClass="text-left mt-3" markedAs="asynchronicity" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					NestJS hỗ trợ xử lý bất đồng bộ rất mạnh, chỉ cần nhớ rằng khi tạo một <b>async method</b> thì chúng ta bắt
					buộc phải return ra một
					<FilePath>Promise</FilePath>
				</p>
				<div class="rounded-lg">
					<p class="font-bold italic text-slate-900 dark:text-white mt-1 leading-8">Sử dụng</p>
					<VCodeBlock :code="b6" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<PageHeading text="7/ Query Param" addOnClass="text-left mt-2 mb-1" markedAs="query-param" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Để nhận và xử lý Query Parameters trong routes, chúng ta có thể dùng
					<FilePath>@Query()</FilePath> decorator.
				</p>
				<div class="rounded-lg">
					<p class="font-bold italic text-slate-900 dark:text-white mt-1 leading-8">Sử dụng</p>
					<VCodeBlock :code="b7" highlightjs lang="ts" theme="atom-one-dark" />
				</div>
				<PageHeading text="8/ Request Payload" addOnClass="text-left mt-2 mb-1" markedAs="request-payload" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-1 leading-8">
					Để nhận và xử lý Payload gửi lên từ các method (POST, PUT ...) trong routes, chúng ta có thể dùng
					<FilePath>@Body()</FilePath> decorator.
				</p>
				<div class="rounded-lg">
					<p class="font-bold italic text-slate-900 dark:text-white mt-1 leading-8">Sử dụng</p>
					<VCodeBlock :code="b8" highlightjs lang="ts" theme="atom-one-dark" />
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
  createUser(@Body() userData: { name: string; price: number }) {
    return { message: 'Tạo user mới', data: userData };
  }
}`,
				b2: `@Get()
findAll(@Req() request: Request): string {
	console.log(request);
	return 'This action returns all users';
}

@Get(':id') // GET /users/:id
getProductById(@Param('id') id: string) {
	return { message: "Sản phẩm với ID:" + id };
}`,
				b3: `import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get()
  @HttpCode(202) // Trả về status code 202
  return { message: 'Yêu cầu đã được chấp nhận' };
}`,
				b4: `import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedStateService {
  private counter = 0;

  increment() {
    this.counter++;
    return this.counter;
  }

  getCounter() {
    return this.counter;
  }
}`,
				b5: `import { Controller, Get } from '@nestjs/common';
import { SharedStateService } from './shared-state.service';

@Controller('state')
export class StateController {
  constructor(private readonly sharedStateService: SharedStateService) {}

  @Get('increment')
  incrementCounter() {
    return { counter: this.sharedStateService.increment() };
  }

  @Get('counter')
  getCounter() {
    return { counter: this.sharedStateService.getCounter() };
  }
}`,
				b6: `@Get()
async findAll(): Promise<any[]> {
  return [];
}
`,
				b7: `@Get()
async findAll(@Query('age') age: number, @Query('breed') breed: string) {
  return "This action returns all cats filtered by age: {age} and breed: {breed}";
}
`,
				b8: `class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}


@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
`,
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
