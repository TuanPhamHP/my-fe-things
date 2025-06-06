<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading
					text="TypeORM: Relations (OneToOne, OneToMany, ManyToMany)"
					addOnClass="text-left"
					markedAs="typeorm-relations"
				/>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trong các ứng dụng thực tế, dữ liệu thường không tồn tại độc lập mà có mối quan hệ ràng buộc với nhau. TypeORM
					cung cấp các cách mạnh mẽ để định nghĩa và quản lý các mối quan hệ này trong cơ sở dữ liệu của bạn, giúp bạn
					thao tác với dữ liệu một cách trực quan và hiệu quả.
					<br />
					Chúng ta sẽ đi sâu vào ba loại mối quan hệ phổ biến nhất trong TypeORM: **OneToOne** (Một-một), **OneToMany /
					ManyToOne** (Một-nhiều / Nhiều-một), và **ManyToMany** (Nhiều-nhiều).
				</p>
				<PageHeading
					text="1. Mối quan hệ OneToOne (Một-một)"
					addOnClass="text-left mt-6"
					markedAs="one-to-one"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Mối quan hệ **OneToOne** có nghĩa là mỗi bản ghi của bảng A chỉ liên kết với duy nhất một bản ghi của bảng B,
					và ngược lại.
					<br />
					**Ví dụ trong project <FilePath>job-hive</FilePath>:** Giả sử bạn muốn thêm thông tin chi tiết không bắt buộc
					cho mỗi công việc. Một <span class="code-word">Job</span> có thể có một
					<span class="code-word">JobDetail</span> duy nhất và một <span class="code-word">JobDetail</span> chỉ thuộc về
					một <span class="code-word">Job</span> duy nhất.
				</p>

				<PageHeading text="Cấu hình Entity cho OneToOne" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Để định nghĩa mối quan hệ OneToOne, chúng ta sử dụng decorator <span class="code-word">@OneToOne()</span>.
					Đồng thời, decorator <span class="code-word">@JoinColumn()</span> sẽ được đặt ở phía sở hữu mối quan hệ
					(owning side) – nơi chứa khóa ngoại thực tế trong cơ sở dữ liệu.
				</p>
				<VCodeBlock :code="oneToOneEntitiesCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading text="Thao tác với OneToOne trong API" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trong một RESTful API, bạn sẽ nhận dữ liệu từ request body (ví dụ: <span class="code-word">req.body</span>).
					TypeORM giúp bạn dễ dàng lưu trữ và truy xuất các thực thể có quan hệ OneToOne.
				</p>
				<VCodeBlock :code="oneToOneApiExampleCode" highlightjs lang="typescript" theme="atom-one-dark" />

				---

				<PageHeading
					text="2. Mối quan hệ OneToMany / ManyToOne (Một-nhiều / Nhiều-một)"
					addOnClass="text-left mt-6"
					markedAs="one-to-many"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Mối quan hệ **OneToMany** (Một-nhiều) nghĩa là một bản ghi của bảng A có thể liên kết với nhiều bản ghi của
					bảng B. Ngược lại, **ManyToOne** (Nhiều-một) nghĩa là nhiều bản ghi của bảng B chỉ liên kết với duy nhất một
					bản ghi của bảng A.
					<br />
					Đây là hai mặt của cùng một mối quan hệ. Phía **ManyToOne** luôn là phía sở hữu (owning side) và chứa khóa
					ngoại.
					<br />
					**Ví dụ trong project <FilePath>job-hive</FilePath>:** Một <span class="code-word">Category</span> (ví dụ:
					"Phát triển Web") có thể có **nhiều** <span class="code-word">Job</span> (ví dụ: "Frontend Developer",
					"Backend Developer"). Ngược lại, nhiều <span class="code-word">Job</span> (Frontend Developer, Backend
					Developer) thuộc về **một** <span class="code-word">Category</span> ("Phát triển Web").
				</p>

				<PageHeading text="Cấu hình Entity cho OneToMany / ManyToOne" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Để định nghĩa mối quan hệ này, sử dụng <span class="code-word">@OneToMany()</span> ở phía "một" (ví dụ:
					`Category`) và <span class="code-word">@ManyToOne()</span> ở phía "nhiều" (ví dụ: `Job`).
				</p>
				<VCodeBlock :code="oneToManyEntitiesCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading text="Thao tác với OneToMany / ManyToOne trong API" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Khi xử lý dữ liệu từ request, bạn thường sẽ nhận được `categoryId` cho một `Job`. TypeORM sẽ tự động tạo khóa
					ngoại để liên kết các thực thể.
				</p>
				<VCodeBlock :code="oneToManyApiExampleCode" highlightjs lang="typescript" theme="atom-one-dark" />

				---

				<PageHeading
					text="3. Mối quan hệ ManyToMany (Nhiều-nhiều)"
					addOnClass="text-left mt-6"
					markedAs="many-to-many"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Mối quan hệ **ManyToMany** có nghĩa là một bản ghi của bảng A có thể liên kết với nhiều bản ghi của bảng B, và
					ngược lại. Để thực hiện mối quan hệ này trong cơ sở dữ liệu quan hệ, cần có một **bảng trung gian** (còn gọi
					là junction table hoặc join table) để lưu trữ các liên kết.
					<br />
					**Ví dụ trong project <FilePath>job-hive</FilePath>:** Một <span class="code-word">Job</span> (ví dụ:
					"Fullstack Developer") có thể yêu cầu nhiều <span class="code-word">Skill</span> (ví dụ: "Node.js", "React",
					"SQL"). Ngược lại, một <span class="code-word">Skill</span> (ví dụ: "Node.js") có thể được yêu cầu bởi nhiều
					<span class="code-word">Job</span> (ví dụ: "Fullstack Developer", "Backend Developer").
				</p>

				<PageHeading text="Cấu hình Entity cho ManyToMany" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Để định nghĩa mối quan hệ ManyToMany, sử dụng decorator <span class="code-word">@ManyToMany()</span>. Thêm vào
					đó, decorator <span class="code-word">@JoinTable()</span> sẽ được đặt ở một trong hai phía của mối quan hệ
					(không quan trọng phía nào), nó sẽ chỉ thị cho TypeORM tự động tạo ra bảng trung gian cần thiết.
				</p>
				<VCodeBlock :code="manyToManyEntitiesCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading text="Thao tác với ManyToMany trong API" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Với mối quan hệ ManyToMany, bạn thường sẽ nhận một mảng các ID của các thực thể liên quan từ request. TypeORM
					sẽ tự động quản lý bảng trung gian cho bạn khi bạn gán mảng các đối tượng đã được tải.
				</p>
				<VCodeBlock :code="manyToManyApiExampleCode" highlightjs lang="typescript" theme="atom-one-dark" />

				---

				<PageHeading
					text="Các thuộc tính quan trọng khác của Relations"
					addOnClass="text-left mt-6"
					markedAs="relation-options"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ngoài các decorator cơ bản, TypeORM còn cung cấp các tùy chọn mạnh mẽ để tùy chỉnh hành vi của mối quan hệ,
					giúp bạn kiểm soát chi tiết hơn cách dữ liệu được quản lý và thao tác:
				</p>
				<SkyList :docs="relationOptions" />

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
						title: 'Advanced Topics', // Có thể đổi tên trang tiếp theo
						link: '/nodejs/documentation/ep-4', // Cập nhật link nếu cần
					},
					prev: {
						title: 'Entity', // Giả sử đây là trang trước đó
						link: '/nodejs/documentation/ep-2',
					},
				},
				oneToOneEntitiesCode: `// src/entity/JobDetail.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Job } from './Job';

@Entity()
export class JobDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    requirements: string;

    // JobDetail là phía sở hữu (owning side) vì nó chứa khóa ngoại 'jobId'
    @OneToOne(() => Job, job => job.jobDetail)
    @JoinColumn() // Tự động tạo cột khóa ngoại (ví dụ: jobId) trong bảng JobDetail
    job: Job;
}

// src/entity/Job.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { JobDetail } from './JobDetail';
import { Category } from './Category';
import { Skill } from './Skill';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'int', nullable: true, default: 0 })
    salary: number;

    // cascade: true sẽ tự động lưu/xóa JobDetail khi Job được lưu/xóa
    @OneToOne(() => JobDetail, jobDetail => jobDetail.job, { cascade: true })
    jobDetail: JobDetail;

    @ManyToOne(() => Category, category => category.jobs)
    category: Category;

    @ManyToMany(() => Skill, skill => skill.jobs)
    @JoinTable()
    skills: Skill[];
}`,
				oneToOneApiExampleCode: `// Ví dụ trong một controller (ví dụ: job.controller.ts)
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Job } from '../entity/Job';
import { JobDetail } from '../entity/JobDetail';

export class JobController {
    private jobRepository = AppDataSource.getRepository(Job);
    private jobDetailRepository = AppDataSource.getRepository(JobDetail);

    async createJobWithDetail(req: Request, res: Response) {
        // Giả định req.body có dạng: { title: "...", location: "...", detail: { description: "...", requirements: "..." } }
        const { title, location, salary, description, detail } = req.body;

        const newJob = new Job();
        newJob.title = title;
        newJob.location = location;
        newJob.salary = salary;
        newJob.description = description;

        // Tạo JobDetail và liên kết với Job
        const newJobDetail = new JobDetail();
        newJobDetail.description = detail.description;
        newJobDetail.requirements = detail.requirements;
        newJobDetail.job = newJob; // Gán JobDetail cho Job

        try {
            // Do có { cascade: true } trên Job, chỉ cần save Job là đủ.
            // JobDetail sẽ tự động được lưu cùng.
            const savedJob = await this.jobRepository.save(newJob);
            return res.status(201).json(savedJob);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi tạo Job có chi tiết.' });
        }
    }

    async getJobById(req: Request, res: Response) {
        const jobId = parseInt(req.params.id);
        try {
            const job = await this.jobRepository.findOne({
                where: { id: jobId },
                relations: ['jobDetail'] // Tải thêm JobDetail
            });
            if (!job) {
                return res.status(404).json({ message: 'Không tìm thấy Job.' });
            }
            return res.json(job);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi lấy Job.' });
        }
    }

    // Các hàm update/delete khác sẽ tương tự, sử dụng .save() hoặc .remove()
    // và đảm bảo tải đúng relations nếu cần thao tác với dữ liệu liên quan.
}`,

				oneToManyEntitiesCode: `// src/entity/Category.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Job } from './Job';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Job, job => job.category)
    jobs: Job[];
}

// src/entity/Job.ts (Đã được cập nhật từ phần OneToOne)
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './Category';
import { JobDetail } from './JobDetail';
import { Skill } from './Skill';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'int', nullable: true, default: 0 })
    salary: number;

    @OneToOne(() => JobDetail, jobDetail => jobDetail.job, { cascade: true })
    jobDetail: JobDetail;

    // Phía sở hữu (owning side) và chứa khóa ngoại 'categoryId'
    @ManyToOne(() => Category, category => category.jobs, { onDelete: 'SET NULL' })
    category: Category;

    @ManyToMany(() => Skill, skill => skill.jobs)
    @JoinTable()
    skills: Skill[];
}`,
				oneToManyApiExampleCode: `// Ví dụ trong một controller (ví dụ: job.controller.ts)
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Job } from '../entity/Job';
import { Category } from '../entity/Category';

export class JobController {
    private jobRepository = AppDataSource.getRepository(Job);
    private categoryRepository = AppDataSource.getRepository(Category);

    async createJob(req: Request, res: Response) {
        // Giả định req.body có dạng: { title: "...", location: "...", categoryId: 1 }
        const { title, location, salary, description, categoryId } = req.body;

        const newJob = new Job();
        newJob.title = title;
        newJob.location = location;
        newJob.salary = salary;
        newJob.description = description;

        try {
            // Tìm Category dựa trên ID nhận được từ request
            const category = await this.categoryRepository.findOneBy({ id: categoryId });
            if (!category) {
                return res.status(400).json({ message: 'Category không tồn tại.' });
            }
            newJob.category = category; // Gán đối tượng Category đã tải

            const savedJob = await this.jobRepository.save(newJob);
            return res.status(201).json(savedJob);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi tạo Job.' });
        }
    }

    async getCategoryWithJobs(req: Request, res: Response) {
        const categoryId = parseInt(req.params.id);
        try {
            const category = await this.categoryRepository.findOne({
                where: { id: categoryId },
                relations: ['jobs'] // Tải tất cả Jobs thuộc Category này
            });
            if (!category) {
                return res.status(404).json({ message: 'Không tìm thấy Category.' });
            }
            return res.json(category);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi lấy Category và Jobs.' });
        }
    }

    async updateJobCategory(req: Request, res: Response) {
      // Giả định req.body có dạng: { newCategoryId: 2 }
      const jobId = parseInt(req.params.id);
      const { newCategoryId } = req.body;

      try {
        const jobToUpdate = await this.jobRepository.findOneBy({ id: jobId });
        if (!jobToUpdate) {
            return res.status(404).json({ message: 'Không tìm thấy Job.' });
        }
        const newCategory = await this.categoryRepository.findOneBy({ id: newCategoryId });
        if (!newCategory) {
            return res.status(400).json({ message: 'Category mới không tồn tại.' });
        }

        jobToUpdate.category = newCategory;
        const updatedJob = await this.jobRepository.save(jobToUpdate);
        return res.json(updatedJob);
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Lỗi khi cập nhật Category cho Job.' });
      }
    }
}`,

				manyToManyEntitiesCode: `// src/entity/Skill.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Job } from './Job';

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Job, job => job.skills)
    jobs: Job[];
}

// src/entity/Job.ts (Đã được cập nhật từ các phần trước)
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './Category';
import { JobDetail } from './JobDetail';
import { Skill } from './Skill';

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'int', nullable: true, default: 0 })
    salary: number;

    @OneToOne(() => JobDetail, jobDetail => jobDetail.job, { cascade: true })
    jobDetail: JobDetail;

    @ManyToOne(() => Category, category => category.jobs, { onDelete: 'SET NULL' })
    category: Category;

    // @JoinTable() sẽ tạo bảng trung gian (ví dụ: job_skills)
    @ManyToMany(() => Skill, skill => skill.jobs)
    @JoinTable()
    skills: Skill[];
}`,
				manyToManyApiExampleCode: `// Ví dụ trong một controller (ví dụ: job.controller.ts)
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Job } from '../entity/Job';
import { Skill } from '../entity/Skill';

export class JobController {
    private jobRepository = AppDataSource.getRepository(Job);
    private skillRepository = AppDataSource.getRepository(Skill);

    async createJobWithSkills(req: Request, res: Response) {
        // Giả định req.body có dạng: { title: "...", location: "...", skillIds: [1, 5, 8] }
        const { title, location, salary, description, skillIds } = req.body;

        const newJob = new Job();
        newJob.title = title;
        newJob.location = location;
        newJob.salary = salary;
        newJob.description = description;

        try {
            // Tải các Skill entities dựa trên IDs nhận được từ request
            const skills = await this.skillRepository.findByIds(skillIds);
            if (skills.length !== skillIds.length) {
                return res.status(400).json({ message: 'Một hoặc nhiều Skill ID không hợp lệ.' });
            }
            newJob.skills = skills; // Gán mảng các Skill entities

            const savedJob = await this.jobRepository.save(newJob);
            return res.status(201).json(savedJob);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi tạo Job với Skills.' });
        }
    }

    async getJobByIdWithSkills(req: Request, res: Response) {
        const jobId = parseInt(req.params.id);
        try {
            const job = await this.jobRepository.findOne({
                where: { id: jobId },
                relations: ['skills'] // Tải tất cả Skills liên quan đến Job
            });
            if (!job) {
                return res.status(404).json({ message: 'Không tìm thấy Job.' });
            }
            return res.json(job);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi lấy Job và Skills.' });
        }
    }

    async addSkillsToJob(req: Request, res: Response) {
        // Giả định req.body có dạng: { newSkillIds: [2, 7] }
        const jobId = parseInt(req.params.id);
        const { newSkillIds } = req.body;

        try {
            const jobToUpdate = await this.jobRepository.findOne({
                where: { id: jobId },
                relations: ['skills'] // PHẢI tải skills hiện tại để thêm mới
            });
            if (!jobToUpdate) {
                return res.status(404).json({ message: 'Không tìm thấy Job.' });
            }

            const skillsToAdd = await this.skillRepository.findByIds(newSkillIds);
            if (skillsToAdd.length !== newSkillIds.length) {
                return res.status(400).json({ message: 'Một hoặc nhiều Skill ID mới không hợp lệ.' });
            }

            // Gộp các skills mới vào danh sách hiện có, loại bỏ trùng lặp
            jobToUpdate.skills = [...jobToUpdate.skills, ...skillsToAdd].filter(
                (skill, index, self) => index === self.findIndex(s => s.id === skill.id)
            );

            const updatedJob = await this.jobRepository.save(jobToUpdate);
            return res.json(updatedJob);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Lỗi khi thêm Skills vào Job.' });
        }
    }
}`,

				relationOptions: [
					{
						id: 1,
						content: `<b><code>cascade</code>:</b> Cho phép các thao tác (insert, update, remove) trên entity cha tự động áp dụng lên entity con. Ví dụ: <span class="code-word"><code>{ cascade: true }</code></span> hoặc <span class="code-word"><code>{ cascade: ['insert', 'update', 'remove'] }</code></span>. <b>Cẩn trọng khi sử dụng <span class="code-word"><code>cascade: true</code></span> đặc biệt với <span class="code-word"><code>remove</code></span> để tránh mất dữ liệu không mong muốn.</b>`,
					},
					{
						id: 2,
						content: `<b><code>eager</code>:</b> Khi <span class="code-word"><code>eager: true</code></span>, mối quan hệ sẽ tự động được tải (load) cùng với entity chính mà không cần dùng <span class="code-word"><code>relations: [...]</code></span>. Tiện lợi cho các mối quan hệ luôn cần thiết nhưng có thể gây tải dữ liệu thừa nếu không cần. Ví dụ: <span class="code-word"><code>@ManyToOne(() => Category, category => category.jobs, { eager: true })</code></span>.`,
					},
					{
						id: 3,
						content: `<b><code>onDelete</code>:</b> Xác định hành vi của cơ sở dữ liệu khi entity liên quan bị xóa (ví dụ: một Category bị xóa thì các Job của Category đó sẽ ra sao). Các giá trị phổ biến: <span class="code-word"><code>'CASCADE'</code></span> (xóa luôn), <span class="code-word"><code>'SET NULL'</code></span> (đặt khóa ngoại thành NULL), <span class="code-word"><code>'RESTRICT'</code></span> (ngăn chặn xóa nếu còn liên kết). Nên kết hợp với <span class="code-word"><code>cascade</code></span> của TypeORM. Ví dụ: <span class="code-word"><code>{ onDelete: 'SET NULL' }</code></span>.`,
					},
					{
						id: 4,
						content: `<b><code>nullable</code>:</b> Cho phép khóa ngoại có giá trị NULL. Mặc định là <span class="code-word"><code>true</code></span>. Ví dụ: <span class="code-word"><code>@ManyToOne(() => Category, category => category.jobs, { nullable: false })</code></span>.`,
					},
					{
						id: 5,
						content: `<b><code>inverseSide</code>:</b> Là một hàm lambda trỏ ngược lại thuộc tính của entity đối diện. Ví dụ: <span class="code-word"><code>@OneToOne(() => Job, job => job.jobDetail)</code></span>. Nếu không có <span class="code-word"><code>inverseSide</code></span>, mối quan hệ sẽ là unidirectional (một chiều).`,
					},
				],
			};
		},
	};
</script>

<style scoped>
	/* Bạn có thể thêm CSS tùy chỉnh ở đây nếu cần */
	.code-word {
		font-family: 'Fira Code', 'JetBrains Mono', monospace;
		background-color: #f0f0f0;
		padding: 2px 4px;
		border-radius: 4px;
		color: #c7254e;
	}
	.dark .code-word {
		background-color: #3b3b3b;
		color: #f7a08b;
	}
</style>
