<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Pipes trong NestJS là gì?" addOnClass="text-left" markedAs="about-pipes" />

				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Trong NestJS, **Pipes** (hay còn gọi là **ống dẫn**) là một tính năng mạnh mẽ và linh hoạt giúp bạn xử lý dữ
					liệu đầu vào trước khi nó được xử lý bởi các bộ điều khiển (controllers) hoặc sau khi dữ liệu được xử lý bởi
					các bộ điều khiển nhưng trước khi được gửi về client. Chúng đóng vai trò quan trọng trong việc **chuyển đổi
					(transformation)** và **kiểm định (validation)** dữ liệu.
				</p>

				<PageHeading
					text="Hai trường hợp sử dụng chính của Pipes"
					addOnClass="text-left"
					markedAs="pipe-use-cases"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Pipes có hai trường hợp sử dụng chính:</p>
				<SkyList :docs="pipeUseCases" />

				<PageHeading text="Cách hoạt động của Pipes" addOnClass="text-left" markedAs="how-pipes-work" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Mỗi Pipe phải triển khai phương thức <code>transform()</code> từ giao diện <code>PipeTransform</code>. Phương
					thức này nhận hai đối số:
				</p>
				<SkyList :docs="howPipesWork" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Lưu ý quan trọng:</b> Pipes chạy trong "exception zone". Điều này có nghĩa là khi một Pipe ném ra một ngoại
					lệ, nó sẽ được xử lý bởi tầng ngoại lệ của NestJS.
				</p>

				<PageHeading
					text="Các loại Pipes tích hợp sẵn (Built-in Pipes)"
					addOnClass="text-left"
					markedAs="builtin-pipes"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					NestJS cung cấp một số Pipe tích hợp sẵn rất hữu ích, được xuất từ gói <code>@nestjs/common</code>:
				</p>
				<SkyList :docs="builtinPipes" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Ví dụ về <code>ParseIntPipe</code>:</b>
				</p>
				<VCodeBlock :code="parseIntPipeCode" highlightjs lang="typescript" theme="tomorrow-night-bright"></VCodeBlock>

				<PageHeading
					text="Phạm vi áp dụng của Pipes (Pipe Scopes)"
					addOnClass="text-left"
					markedAs="pipe-scopes"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Bạn có thể áp dụng Pipes ở các cấp độ khác nhau trong ứng dụng NestJS:
				</p>
				<SkyList :docs="pipeScopes" />
				<Disclosure as="div" class="w-full">
					<DisclosureButton
						class="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-3"
					>
						<span>Ví dụ về Phạm vi áp dụng của Pipes</span>
						<svg
							class="w-5 h-5 text-purple-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</DisclosureButton>
					<DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
						<h4 class="text-slate-900 dark:text-white mt-3 leading-8 font-bold">
							Phạm vi Phương thức (Method-scoped):
						</h4>
						<VCodeBlock
							:code="methodScopedPipeCode"
							highlightjs
							lang="typescript"
							theme="tomorrow-night-bright"
						></VCodeBlock>
						<h4 class="text-slate-900 dark:text-white mt-3 leading-8 font-bold">
							Phạm vi Toàn cục (Global-scoped) trong <code>main.ts</code>:
						</h4>
						<VCodeBlock
							:code="globalScopedPipeMainTsCode"
							highlightjs
							lang="typescript"
							theme="tomorrow-night-bright"
						></VCodeBlock>
						<h4 class="text-slate-900 dark:text-white mt-3 leading-8 font-bold">
							Phạm vi Toàn cục (Global-scoped) trong <code>app.module.ts</code> (với DI):
						</h4>
						<VCodeBlock
							:code="globalScopedPipeAppModuleTsCode"
							highlightjs
							lang="typescript"
							theme="tomorrow-night-bright"
						></VCodeBlock>
					</DisclosurePanel>
				</Disclosure>

				<PageHeading text="Tạo Custom Pipes" addOnClass="text-left mt-3" markedAs="custom-pipes" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Bạn có thể tạo các Pipe tùy chỉnh để xử lý các logic chuyển đổi hoặc kiểm định đặc biệt cho ứng dụng của mình.
				</p>
				<SkyList :docs="customPipeSteps" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Ví dụ về Custom Validation Pipe (<code>PositiveIntPipe</code>):</b>
				</p>
				<VCodeBlock
					:code="positiveIntPipeCode"
					highlightjs
					lang="typescript"
					theme="tomorrow-night-bright"
				></VCodeBlock>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Cách sử dụng Custom Pipe:</b>
				</p>
				<VCodeBlock
					:code="usePositiveIntPipeCode"
					highlightjs
					lang="typescript"
					theme="tomorrow-night-bright"
				></VCodeBlock>

				<PageHeading
					text="Khi nào nên sử dụng Pipes?"
					addOnClass="text-left mt-3"
					markedAs="when-to-use-pipes"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Bạn nên sử dụng Pipes khi bạn cần:</p>
				<SkyList :docs="whenToUsePipes" />

				<PageHeading
					text="So sánh Pipes với Middleware, Guards, Interceptors"
					addOnClass="text-left mt-3"
					markedAs="pipes-vs-others"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Mặc dù tất cả đều là các thành phần trung gian của NestJS, chúng có các vai trò khác nhau:
				</p>
				<SkyList :docs="pipesVsOthers" />

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>

<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';

	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	// import { apiResponde } from 'models'; // Không cần thiết cho nội dung này
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

	export default {
		components: {
			PageMarkBook,
			PageHeading,
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
						title: 'Guards trong NestJS',
						link: '/nestjs/documentation/guards', // Cập nhật link phù hợp
					},
					prev: {
						title: 'Middleware trong NestJS',
						link: '/nestjs/documentation/middleware', // Cập nhật link phù hợp
					},
				},
				pipeUseCases: [
					{
						id: 1,
						content:
							'<b>Transformation (Chuyển đổi):</b> Chuyển đổi dữ liệu đầu vào sang một dạng mong muốn. Ví dụ: chuyển đổi một chuỗi "123" thành một số nguyên 123.',
					},
					{
						id: 2,
						content:
							'<b>Validation (Kiểm định):</b> Đánh giá dữ liệu đầu vào và nếu hợp lệ, chỉ đơn giản là chuyển nó đi mà không thay đổi; nếu không hợp lệ, sẽ ném ra một ngoại lệ (exception).',
					},
				],
				howPipesWork: [
					{
						id: 1,
						content: '<code>value</code>: Giá trị hiện tại đang được xử lý bởi Pipe.',
					},
					{
						id: 2,
						content:
							'<code>metadata</code>: Một đối tượng <code>ArgumentMetadata</code> chứa siêu dữ liệu về đối số đang được xử lý.',
					},
				],
				builtinPipes: [
					{
						id: 1,
						content:
							'<b><code>ValidationPipe</code>:</b> Pipe được sử dụng phổ biến nhất để kiểm định dữ liệu đầu vào dựa trên các DTO và decorator của <code>class-validator</code>.',
					},
					{
						id: 2,
						content: '<b><code>ParseIntPipe</code>:</b> Chuyển đổi một giá trị thành số nguyên.',
					},
					{
						id: 3,
						content: '<b><code>ParseFloatPipe</code>:</b> Chuyển đổi thành số thập phân.',
					},
					{
						id: 4,
						content: '<b><code>ParseBoolPipe</code>:</b> Chuyển đổi một giá trị thành boolean.',
					},
					{
						id: 5,
						content:
							'<b><code>ParseArrayPipe</code>:</b> Chuyển đổi một chuỗi giá trị phân tách bằng dấu phẩy thành một mảng.',
					},
					{
						id: 6,
						content: '<b><code>ParseUUIDPipe</code>:</b> Kiểm định xem một chuỗi có phải là một UUID hợp lệ hay không.',
					},
					{
						id: 7,
						content:
							'<b><code>DefaultValuePipe</code>:</b> Cung cấp một giá trị mặc định cho một tham số nếu giá trị đó không được cung cấp.',
					},
				],
				parseIntPipeCode: `import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // id sẽ là một số nguyên
    return \`User with ID: \${id}\`;
  }
}`,
				pipeScopes: [
					{
						id: 1,
						content:
							"<b>Param-scoped (Phạm vi tham số):</b> Áp dụng cho một tham số cụ thể của một route handler. Ví dụ: <code>@Param('id', ParseIntPipe) id: number</code>",
					},
					{
						id: 2,
						content:
							'<b>Method-scoped (Phạm vi phương thức):</b> Áp dụng cho tất cả các tham số của một route handler. Sử dụng decorator <code>@UsePipes()</code>.',
					},
					{
						id: 3,
						content:
							'<b>Controller-scoped (Phạm vi Controller):</b> Áp dụng cho tất cả các route handler trong một Controller. Áp dụng <code>@UsePipes()</code> ở cấp độ class của Controller.',
					},
					{
						id: 4,
						content:
							'<b>Global-scoped (Phạm vi toàn cục):</b> Áp dụng cho tất cả các route handler trong toàn bộ ứng dụng. Thường được đăng ký trong <code>main.ts</code> bằng <code>app.useGlobalPipes()</code> hoặc trong module bằng <code>APP_PIPE</code> token.',
					},
				],
				methodScopedPipeCode: `import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  @UsePipes(ValidationPipe) // Áp dụng ValidationPipe cho tất cả các tham số của phương thức create
  create(@Body() createUserDto: CreateUserDto) {
    return 'User created!';
  }
}`,
				globalScopedPipeMainTsCode: `// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Áp dụng ValidationPipe cho toàn bộ ứng dụng
  await app.listen(3000);
}
bootstrap();`,
				globalScopedPipeAppModuleTsCode: `// app.module.ts
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}`,
				customPipeSteps: [
					{ id: 1, content: '<b>Tạo một lớp:</b> Tạo một lớp TypeScript.' },
					{
						id: 2,
						content:
							'<b>Đánh dấu bằng <code>@Injectable()</code>:</b> Decorator này cho phép NestJS biết rằng lớp này có thể được inject như một dependency.',
					},
					{
						id: 3,
						content:
							'<b>Triển khai <code>PipeTransform</code>:</b> Lớp của bạn phải triển khai giao diện <code>PipeTransform<T, R></code>.',
					},
					{
						id: 4,
						content:
							'<b>Triển khai phương thức <code>transform()</code>:</b> Viết logic chuyển đổi hoặc kiểm định bên trong phương thức <code>transform(value: T, metadata: ArgumentMetadata)</code>.',
					},
				],
				positiveIntPipeCode: `// src/common/pipes/positive-int.pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const num = parseInt(value, 10);

    if (isNaN(num) || num <= 0) {
      throw new BadRequestException(\`Validation failed. "\${value}" is not a positive integer.\`);
    }

    return num;
  }
}`,
				usePositiveIntPipeCode: `// src/users/users.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { PositiveIntPipe } from '../common/pipes/positive-int.pipe';

@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id', PositiveIntPipe) id: number) {
    // id đã được đảm bảo là số nguyên dương
    return \`User with positive ID: \${id}\`;
  }
}`,
				whenToUsePipes: [
					{
						id: 1,
						content:
							'<b>Kiểm định dữ liệu đầu vào:</b> Đảm bảo rằng dữ liệu nhận được từ client đáp ứng các yêu cầu định dạng, kiểu dữ liệu, hoặc các ràng buộc nghiệp vụ.',
					},
					{
						id: 2,
						content:
							'<b>Chuyển đổi dữ liệu:</b> Thay đổi định dạng hoặc kiểu dữ liệu của đầu vào để phù hợp với logic nghiệp vụ của bạn.',
					},
					{
						id: 3,
						content:
							'<b>Trích xuất hoặc biến đổi dữ liệu từ request:</b> Ví dụ, trích xuất một phần cụ thể của payload JSON.',
					},
					{
						id: 4,
						content:
							'<b>Sanitize (làm sạch) dữ liệu:</b> Loại bỏ các ký tự không mong muốn hoặc các mối đe dọa bảo mật.',
					},
				],
				pipesVsOthers: [
					{
						id: 1,
						content:
							'<b>Middleware:</b> Chạy trước Guards, Pipes, và Interceptors. Chủ yếu dùng cho các tác vụ chung như logging, authentication cơ bản.',
					},
					{
						id: 2,
						content:
							'<b>Pipes:</b> Chạy ngay trước khi phương thức handler được gọi. Dùng để chuyển đổi và kiểm định các đối số của handler.',
					},
					{
						id: 3,
						content:
							'<b>Guards:</b> Chạy sau Middleware và trước Pipes. Dùng để ủy quyền (authorization) - quyết định xem một request có được phép tiếp tục hay không.',
					},
					{
						id: 4,
						content:
							'<b>Interceptors:</b> Chạy sau Guards và Pipes (trước khi handler được gọi) và cũng có thể chạy sau handler (trước khi response được gửi đi). Dùng để biến đổi giá trị trả về của handler, xử lý ngoại lệ, hoặc thêm logic trước/sau handler.',
					},
				],
			};
		},
	};
</script>
