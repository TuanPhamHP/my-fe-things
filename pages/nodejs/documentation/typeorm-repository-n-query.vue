<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Repository" addOnClass="text-left" markedAs="repository" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Repository</b> là một <b>class hoặc interface</b> trong TypeORM dùng để tương tác với một thực thể (entity)
					cụ thể trong cơ sở dữ liệu. Nó cung cấp các phương thức chuẩn để thực hiện các thao tác CRUD (Create, Read,
					Update, Delete) và một số truy vấn đơn giản mà không cần viết truy vấn SQL thủ công.
					<br />
					TypeORM cung cấp các loại repository:
				</p>
				<SkyList :docs="repoConcepts" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Lưu ý:</b> ở phạm vi bài giảng này chúng mình chỉ quan tâm tới loại đầu tiên là Repository cơ bản, dùng cho
					các thao tác CRUD đơn giản.
				</p>
				<PageHeading text="Cách tạo Repository" addOnClass="text-left mt-6" markedAs="create-repo" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Để tạo Repository, chúng ta cần làm các bước sau:</p>
				<SkyList :docs="repoSteps" />

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chúng ta sẽ tổ chức các repo tương ứng vào các files trong <FilePath>repositories</FilePath>. Ở đây tui sẽ tạo
					<FilePath>JobRepository.ts</FilePath>:
				</p>
				<VCodeBlock :code="jobRepo" highlightjs lang="js" theme="atom-one-dark" />

				<PageHeading text="Sử dụng Repository" addOnClass="text-left mt-6" markedAs="using" :lvl="2" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">Sử dụng repository:</p>
				<VCodeBlock :code="repoUsing" highlightjs lang="js" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đó, rất là dễ để sử dụng một repository. Nhưng Repository không phải là giải pháp cho mọi vấn đề. Nó là một
					giải pháp rất tốt nếu chúng ta chỉ làm các thao tác CRUD cơ bản. Khi cần dùng các truy vấn phức tạp như: bộ
					lọc, join các bảng với relation ... thì repository không còn đủ tốt để đáp ứng nữa, thay vào đó chúng ta sẽ
					dùng <b>Query Builder</b>.
				</p>
				<PageHeading text="Query Builder" addOnClass="text-left mt-6" markedAs="query-builder" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Query Builder</b> là công cụ của TypeORM cho phép xây dựng truy vấn SQL linh hoạt, hỗ trợ các thao tác phức
					tạp như join, subquery, hoặc tìm kiếm động. Đây là lựa chọn lý tưởng cho các chức năng tìm kiếm việc làm với
					nhiều tiêu chí.<br />
					TypeORM cung cấp các loại <b>Query Builder</b>:
				</p>
				<SkyList :docs="qbConcepts" />
				<PageHeading text="Cách tạo Query Builder" addOnClass="text-left mt-6" markedAs="create-qb" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Chúng ta có thể tạo trực tiếp query builder từ repository hoặc từ
				</p>
				<SkyList :docs="qbConcepts" />

				<VCodeBlock :code="exampleCreates" highlightjs lang="typescript" theme="atom-one-dark" />
				<PageHeading text="Sử dụng Query Builder" addOnClass="text-left mt-6" markedAs="using-qb" :lvl="2" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">Sử dụng Query Builder:</p>
				<VCodeBlock :code="qbUsing" highlightjs lang="js" theme="atom-one-dark" />

				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>

<script lang="ts">
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import DocNextPage from '@/components/DocNextPage.vue';

	export default {
		components: {
			PageHeading,
			PageMarkBook,
			VCodeBlock,
			DocNextPage,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'QueryBuilder',
						link: '/nodejs/documentation/ep-4',
					},
					prev: {
						title: 'Entity',
						link: '/nodejs/documentation/ep-2',
					},
				},
				repoConcepts: [
					{ id: 1, content: `<b>Repository:</b> Repository cơ bản, dùng cho các thao tác CRUD đơn giản.` },
					{
						id: 2,
						content: `<b>EntityRepository:</b> (Đã bị deprecated từ TypeORM 0.3.x) Dùng để tùy chỉnh repository.`,
					},
					{ id: 3, content: `<b>TreeRepository:</b> Dùng cho các thực thể có cấu trúc cây (tree-like structure).` },
					{ id: 4, content: `<b>MongoRepository:</b> Dành riêng cho MongoDB.` },
				],
				qbConcepts: [
					{ id: 1, content: `<b>SelectQueryBuilder:</b> Dùng để truy vấn dữ liệu (SELECT).` },
					{
						id: 2,
						content: `<b>InsertQueryBuilder:</b> Dùng để thêm mới bản ghi (INSERT).`,
					},
					{ id: 3, content: `<b>UpdateQueryBuilder:</b> Dùng để cập nhật bản ghi (UPDATE).` },
					{ id: 4, content: `<b>DeleteQueryBuilder:</b> Dùng để xóa bản ghi (DELETE).` },
					{
						id: 5,
						content: `<b>RelationQueryBuilder:</b> Dùng để xử lý các mối quan hệ giữa các entity (JOIN / RELATION).`,
					},
				],
				qbCreates: [
					{ id: 1, content: ` Sử dụng Repository hoặc Manager của Entity.` },
					{
						id: 2,
						content: `Dùng trực tiếp từ dataSource.createQueryBuilder().`,
					},
				],
				repoSteps: [
					{ id: 1, content: `<b>Khai báo Entity:</b> Mỗi entity đại diện cho một bảng trong cơ sở dữ liệu.` },
					{
						id: 2,
						content: `<b>Lấy Repository:</b> Sử dụng <b>getRepository</b> hoặc <b>getManager()</b>.getRepository để lấy instance của Repository cho một entity cụ thể.`,
					},
					{
						id: 3,
						content: `<b>Thực hiện thao tác:</b> Sử dụng các phương thức của Repository như <b>find, save, delete,</b> v.v.`,
					},
				],
				jobRepo:
					`import { Repository, getRepository } from 'typeorm';
import { Job } from '../entities/Job';

export class JobRepository extends Repository<Job> {
  constructor() {
    super();
    Object.setPrototypeOf(this, JobRepository.prototype);
    return getRepository(Job).extend(this);
  }

  // Tìm job theo từ khóa trong title hoặc description
  async findByKeyword(keyword: string): Promise<Job[]> {
    return this.createQueryBuilder('job')
      .where('job.title LIKE :keyword', { keyword: ` +
					'%${keyword}%' +
					` })
      .orWhere('job.description LIKE :keyword', { keyword: ` +
					'%${keyword}%' +
					` })
      .getMany();
  }

  // Tìm job theo location và experienceLevel
  async findByLocationAndExperience(location: string, experienceLevel: string): Promise<Job[]> {
    return this.find({ where: { location, experienceLevel } });
  }

  // Tìm job có lương trên một mức cụ thể
  async findByMinSalary(minSalary: number): Promise<Job[]> {
    return this.find({ where: { salary: MoreThan(minSalary) } });
  }
}`,
				repoUsing: `import { AppDataSource } from '../data-source';
import { Job } from '../entities/Job';

const jobRepository = AppDataSource.getRepository(Job);
// Lấy danh sách jobs
const jobs = await jobRepository.find();

// tìm theo id 
const job = await jobRepository.findOneBy({ id: 1 });`,
				exampleCreates: `//Using DataSource:
const user = await dataSource
.createQueryBuilder()
.select("user")
.from(User, "user")
.where("user.id = :id", { id: 1 })
.getOne()

// Using entity manager
const user = await dataSource.manager
.createQueryBuilder("user")
.where("user.id = :id", { id: 1 })
.getOne()

// Using repository
const user = await dataSource
.getRepository(User)
.createQueryBuilder("user")
.where("user.id = :id", { id: 1 })
.getOne()
`,
				qbUsing:
					`getCustomRepository(JobRepository);

// Tìm kiếm việc làm với nhiều tiêu chí
const searchCriteria = {
	keyword: 'TypeScript',
	location: 'Hà Nội',
	minSalary: 15000000,
	categoryId: 1,
};

const jobs = await connection
	.createQueryBuilder()
	.select(['job.title', 'job.companyName', 'job.salary', 'category.title'])
	.from(Job, 'job')
	.innerJoin('job.category', 'category')
	.where('job.title LIKE :keyword OR job.description LIKE :keyword', { keyword: ` +
					'`%${searchCriteria.keyword}%`' +
					` })
	.andWhere('job.location = :location', { location: searchCriteria.location })
	.andWhere('job.salary >= :minSalary', { minSalary: searchCriteria.minSalary })
	.andWhere('category.id = :categoryId', { categoryId: searchCriteria.categoryId })
	.orderBy('job.salary', 'DESC')
	.skip(0)
	.take(10)
	.getMany();

console.log('Search results:', jobs);`,
			};
		},
	};
</script>
