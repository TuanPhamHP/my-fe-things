<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Type ORM" addOnClass="text-left" markedAs="about" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>- TypeORM - (Object Relational Mapper)</b> là một ORM cho TypeScript và JavaScript (ES6+), mục đích của nó
					là sử dụng kèm với JS và cung cấp các tính năng nâng cao hơn so với việc sử dụng raw SQL.
					<br />
					- Hỗ trợ nhiều cơ sở dữ liệu như PostgreSQL, MySQL, SQLite, SQL Server, v.v.
					<br />
					- Tự động ánh xạ các lớp (class) thành bảng (table)
				</p>
				<PageHeading text="Cài đặt" addOnClass="text-left" markedAs="install" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Build hẳn một project mới nhe.
					<br />
					Chúng ta sẽ cài <b>type-orm</b> qua cli
				</p>
				<FakeTerminalUI :textCoppy="'npm install reflect-metadata typeorm'">
					npm install reflect-metadata typeorm
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Sau đó cài database driver tuỳ vào loại database mà chúng ta dùng, ở đây tui sẽ xài <b>PostgreSQL</b> nhé,
					ngoài ra các bạn có thể đọc thêm các driver của db khác ở
					<a href="https://typeorm.io/#installation" target="_blank" class="text-blue-500 underline">đây</a>
				</p>
				<FakeTerminalUI :textCoppy="'npm install pg --save'"> npm install pg --save </FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ngoài ra, tui suggest việc chúng ta sẽ viết bằng typescript để "chuẩn type" hơn nha. (Bỏ qua nếu bạn không
					muốn dùng ts)
				</p>
				<FakeTerminalUI :textCoppy="'npm install -D typescript ts-node-dev @types/express'">
					npm install -D typescript ts-node-dev @types/express
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Update file <FilePath>tsconfig.json</FilePath></p>
				<VCodeBlock :code="b1" highlightjs lang="json" theme="atom-one-dark" />
				<PageHeading text="Datasource" addOnClass="text-left mt-3" markedAs="datasource" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Sau khi đã cài đặt package, việc đầu tiên của chúng ta là tạo file <FilePath>data-source</FilePath> để config
					kết nối db, khai báo entities...
				</p>
				<div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-2 leading-8 italic font-bold">Cấu trúc thư mục gợi ý:</p>
						<VCodeBlock :code="b2" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-2 leading-8 italic font-bold">File data-source.ts</p>
						<VCodeBlock :code="b3" highlightjs lang="javascript" theme="atom-one-dark" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Hoặc nếu bạn tạo dư án mới toanh, chúng ta có thể sử dụng command sau để init nhanh:
				</p>
				<FakeTerminalUI :textCoppy="'npx typeorm init'"> npx typeorm init </FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Lưu ý là lệnh này sẽ có thể overwrite cấu trúc hiện có của bạn, cân nhắc khi sử dụng. Ở các bài sau, chúng
					mình sẽ bắt đầu làm việc với các thành phần chính của ORM.
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
						link: '/nodejs/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/nodejs/documentation',
					},
				},
				entityProperties: [
					{
						id: 1,
						content: `Entity là cách bạn định nghĩa table trong cơ sở dữ liệu.`,
					},
					{
						id: 2,
						content: `Entity chứa các cột (column), khoá chính, quan hệ... như một blueprint (bản thiết kế).`,
					},
					{
						id: 3,
						content: `Không cần tạo riêng “Model” như trong Mongoose/Laravel – vì Entity chính là Model thêm decorator trong TypeORM.`,
					},
				],
				entityDecorator: [
					{
						id: 1,
						content: `<b>@Entity():</b> đánh dấu class là một bảng trong DB.`,
					},
					{
						id: 2,
						content: `<b>@PrimaryGeneratedColumn():</b> là khoá chính, tự động tăng.`,
					},
					{
						id: 3,
						content: `<b>@Column():</b> dùng để tạo cột trong bảng.`,
					},
					{
						id: 4,
						content: `<b>@ManyToOne():</b> là quan hệ (ở đây: mỗi job thuộc về 1 category).`,
					},
				],
				applicationMiddleware: [
					{
						id: 1,
						content: 'Logging',
					},
					{
						id: 2,
						content: 'Parse request (body, cookies)',
					},
					{
						id: 3,
						content: 'Kiểm tra token toàn app',
					},
				],
				routerMiddleware: [
					{
						id: 1,
						content: 'Bảo vệ một nhóm route (ví dụ: <b>/api/user</b>)',
					},
					{
						id: 2,
						content: 'Phân quyền nội bộ cho các route con',
					},
				],
				errHandlingMiddleware: [
					{
						id: 1,
						content: 'Khi cần xử lý lỗi theo dạng custom',
					},
				],
				b1: `{
	"compilerOptions": {
		"target": "es2021",
		"module": "commonjs",
		"moduleResolution": "node",
		"lib": ["es2021"],
		"outDir": "./build",
		"sourceMap": true,
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"esModuleInterop": true,
		"strict": true
	},
	"include": ["src/**/*"]
}
`,
				b2: `MyProject
├── src                   // place of your TypeScript code
│   ├── entities          // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── repositories      // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options`,
				b3: `import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: false,
	migrationsRun: true,
	logging: true,
	entities: [],
	subscribers: [],
	migrations: [],
});
`,
				b4: `// file: src/entities/Job.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  companyName: string;

  @Column()
  location: string;

  @Column({ nullable: true })
  salary: number;

  @Column()
  experienceLevel: string;

  @ManyToOne(() => Category, (category) => category.jobs)
  category: Category;
}
`,
				b5: `import { AppDataSource } from '../database/data-source';
import { Job } from '../entities/Job';
import { Category } from '../entities/Category';

export const createJobWithEntity = async () => {
  const category = await AppDataSource.manager.findOneBy(Category, { id: 3 });
  if (!category) throw new Error('Category not found');

  const job = new Job();
  job.title = 'Frontend Developer';
  job.companyName = 'OpenAI';
  job.location = 'San Francisco';
  job.salary = 200000;
  job.experienceLevel = 'Senior';
  job.category = category;

  await AppDataSource.manager.save(job);
};
`,
				b6: `import { AppDataSource } from '../database/data-source';
import { Job } from '../entities/Job';
import { Category } from '../entities/Category';

export const createJobWithRepository = async () => {
  const jobRepo = AppDataSource.getRepository(Job);
  const categoryRepo = AppDataSource.getRepository(Category);

  const category = await categoryRepo.findOneBy({ id: 3 });
  if (!category) throw new Error('Category not found');

  const job = jobRepo.create({
    title: 'Frontend Developer',
    companyName: 'OpenAI',
    location: 'San Francisco',
    salary: 200000,
    experienceLevel: 'Senior',
    category: category,
  });

  await jobRepo.save(job);
};
`,
				tableHeader: [
					{ id: 1, name: 'Tiêu chí', key: 'name' },
					{ id: 2, name: 'Manager', key: 'manager' },
					{ id: 3, name: 'Repository', key: 'repository' },
				],
				tableItems: [
					{
						name: '✅ Định nghĩa',
						manager: 'Là một DataManager toàn cục, thao tác được với mọi entity.',
						repository: 'Là Repository riêng biệt cho từng entity.',
					},
					{
						name: '📦 Truy cập',
						manager: '`AppDataSource.manager` – truy cập chung.',
						repository: '`AppDataSource.getRepository(Entity)` – truy cập theo entity cụ thể.',
					},
					{
						name: '🧱 Cách tạo bản ghi',
						manager: '`manager.save(entity)` – bạn cần tự khởi tạo entity rồi lưu.',
						repository: '`repo.create(data)` -> `repo.save()` – hỗ trợ khởi tạo nhanh.',
					},
					{
						name: '🔍 Tìm kiếm',
						manager: '`manager.find(Entity)` – cần truyền entity mỗi lần.',
						repository: '`repo.find()` – repo đã gắn entity nên code gọn hơn.',
					},
					{
						name: '🧩 Tách biệt theo entity',
						manager: '❌ Không tách biệt – dùng chung cho mọi entity.',
						repository: '✅ Tách riêng – mỗi entity có repository riêng.',
					},
					{
						name: '🧰 Hỗ trợ method nâng cao',
						manager: '❌ Không có các method đặc trưng.',
						repository: '✅ Có nhiều method tiện lợi: `create()`, `merge()`, `softDelete()`, ...',
					},
					{
						name: '🧪 Phù hợp testing/service',
						manager: '❌ Khó inject riêng lẻ, khó mock trong unit test.',
						repository: '✅ Dễ inject riêng và mock được trong testing.',
					},
					{
						name: '📁 Phù hợp kiến trúc DDD',
						manager: '❌ Không phù hợp vì thiếu tính module/domain separation.',
						repository: '✅ Rất phù hợp cho domain-driven design (JobRepository, UserRepository...).',
					},
					{
						name: '🤔 Khi nào nên dùng',
						manager: 'Khi cần thao tác nhanh nhiều entity trong file seed/test script.',
						repository: 'Khi xây hệ thống lớn, theo service layer, cần tách biệt và dễ mở rộng.',
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
					.getPagination({ appIds: 'nodejs', currentDocId: 'node-12' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
