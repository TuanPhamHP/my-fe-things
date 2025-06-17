<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading
					text="Class-validator: Xác thực dữ liệu với DTOs"
					addOnClass="text-left"
					markedAs="class-validator-dtos"
				/>

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trong môi trường backend, việc xác thực dữ liệu từ người dùng là cực kỳ quan trọng để ngăn chặn các lỗi, tăng
					cường bảo mật và đảm bảo tính toàn vẹn của dữ liệu trong database. Chúng ta sẽ tìm hiểu thư viện
					<span class="code-word">class-validator</span>, một công cụ mạnh mẽ cho phép bạn dễ dàng xác thực các đối
					tượng TypeScript bằng cách sử dụng các decorators.
					<br />
					Đặc biệt, chúng ta sẽ tập trung vào việc **tách biệt Validation Logic ra khỏi Entity bằng cách sử dụng Data
					Transfer Objects (DTOs)**, một phương pháp hay được khuyến khích trong các ứng dụng Node.js/TypeScript hiện
					đại (ví dụ như với NestJS).
				</p>

				<PageHeading
					text="Tại sao nên dùng DTOs cho Validation?"
					addOnClass="text-left mt-6"
					markedAs="why-dtos"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Trước khi đi sâu vào <span class="code-word">class-validator</span>, hãy cùng tìm hiểu lý do chúng ta nên tách
					biệt validation ra DTOs thay vì viết trực tiếp vào Entity:
				</p>
				<SkyList :docs="whyUseDtos" />

				<PageHeading
					text="1. Cài đặt Class-validator và Class-transformer"
					addOnClass="text-left mt-6"
					markedAs="installation"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Để bắt đầu, bạn cần cài đặt hai thư viện này:</p>
				<ul class="list-disc list-inside text-slate-900 dark:text-white mt-3 leading-8 ml-4">
					<li>
						<span class="code-word">class-validator</span>: Cung cấp các decorators để định nghĩa quy tắc validation.
					</li>
					<li>
						<span class="code-word">class-transformer</span>: Giúp chuyển đổi plain objects (nhận từ
						<span class="code-word">req.body</span>) thành các instance của class DTO của bạn. Điều này cần thiết để
						<span class="code-word">class-validator</span> có thể hoạt động được.
					</li>
				</ul>
				<VCodeBlock :code="installationCode" highlightjs lang="bash" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ngoài ra, đảm bảo bạn đã bật các tùy chọn sau trong <span class="code-word">tsconfig.json</span> của mình, vì
					<span class="code-word">class-validator</span> sử dụng decorators:
				</p>
				<VCodeBlock :code="tsconfigCode" highlightjs lang="json" theme="atom-one-dark" />

				<PageHeading
					text="2. Tạo Data Transfer Objects (DTOs)"
					addOnClass="text-left mt-6"
					markedAs="create-dtos"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Bây giờ, chúng ta sẽ tạo các DTOs cho các Entity <span class="code-word">Job</span>,
					<span class="code-word">Category</span>, và <span class="code-word">Skill</span> trong dự án
					<span class="code-word">job-hive</span>. Hãy đặt chúng trong một thư mục riêng biệt, ví dụ:
					<FilePath>src/dto/</FilePath>.
				</p>

				<PageHeading text="Ví dụ 1: CreateJobDto (OneToOne & ManyToOne)" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Đây là DTO để tạo một <span class="code-word">Job</span> mới, có thể bao gồm cả thông tin
					<span class="code-word">JobDetail</span> và <span class="code-word">categoryId</span>.
				</p>
				<VCodeBlock :code="createJobDtoCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading text="Ví dụ 2: UpdateJobDto" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					DTO này dành cho việc cập nhật một <span class="code-word">Job</span>. Các trường đều là
					<span class="code-word">@IsOptional()</span> vì khi cập nhật, client có thể chỉ gửi một phần dữ liệu.
				</p>
				<VCodeBlock :code="updateJobDtoCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading text="Ví dụ 3: DTO cho Category và Skill" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Các DTO này đơn giản hơn, chỉ để tạo mới.</p>
				<VCodeBlock :code="createCategorySkillDtoCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading
					text="3 Tích hợp Validation vào Controller"
					addOnClass="text-left mt-6"
					markedAs="integrate-validation"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Để sử dụng các DTO này, bạn sẽ cần một middleware hoặc một hàm trợ giúp trong controller của mình để thực hiện
					việc validate.
				</p>

				<PageHeading
					text=" Cách 1 - ValidationMiddleware (Cách được khuyến nghị)"
					addOnClass="text-left mt-4"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Tạo một middleware chung để tái sử dụng logic validation sau đó áp dụng middleware validation vào các route
					của mình.
				</p>
				<PageHeading text=" Cách 2 - Sử dụng trực tiếp trong request" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Dùng như một inline validate, cách này không tận dụng điểm mạnh của middleware nhưng lại tạm thời đơn giản hơn
				</p>
				<VCodeBlock :code="plainCode" highlightjs lang="typescript" theme="atom-one-dark" />

				<!--<PageHeading text="Cập nhật Routes để sử dụng Middleware" addOnClass="text-left mt-4" :lvl="3" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Bây giờ chúng ta sẽ áp dụng middleware validation vào các route của mình.
				</p>
				<VCodeBlock :code="routesUpdateCode" highlightjs lang="typescript" theme="atom-one-dark" /> -->

				<PageHeading
					text="4. Các Decorator phổ biến trong Class-validator"
					addOnClass="text-left mt-6"
					markedAs="common-decorators"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<span class="code-word">class-validator</span> cung cấp rất nhiều decorator hữu ích. Dưới đây là một số loại
					phổ biến bạn sẽ thường dùng:
				</p>
				<SkyList :docs="commonDecorators" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Bạn có thể tìm hiểu thêm tất cả các decorator tại
					<a href="https://github.com/typestack/class-validator" target="_blank" class="text-blue-500 hover:underline"
						>Class-validator GitHub repository</a
					>.
				</p>

				<PageHeading text="Class-transformer" addOnClass="text-left mt-6" markedAs="class-transformer" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					class-transformer là một thư viện cực kỳ quan trọng khi bạn dùng class-validator trong Node.js/Express với
					TypeScript. Nó giúp chuyển đổi (transform) dữ liệu thô (plain object) từ req.body thành instance thực sự của
					class (như CreateJobDto), chuyên dùng để validate data.
				</p>
				<VCodeBlock :code="transformer" highlightjs lang="typescript" theme="atom-one-dark" />

				<PageHeading text="Tạo middleware" addOnClass="text-left mt-6" markedAs="middleware" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Lúc này, chúng ta có thể chuyển phần validate vào middleware.
				</p>
				<VCodeBlock :code="middleware" highlightjs lang="typescript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Ngoài việc hỗ trợ tạo validate, chúng ta còn thường xuyên sử dụng <FilePath>Class-transformer</FilePath> để
					tạo transformer.
				</p>
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
						link: '/nodejs/documentation/ep-5', // Cập nhật link nếu cần
					},
					prev: {
						title: 'TypeORM: Relations',
						link: '/nodejs/documentation/ep-3',
					},
				},
				whyUseDtos: [
					{
						id: 1,
						content: `<b>Tách biệt mối quan tâm (Separation of Concerns):</b>
              <ul class="list-disc list-inside ml-4 mt-2">
                <li><b>Entities</b> nên tập trung vào việc định nghĩa cấu trúc dữ liệu và mối quan hệ với database.</li>
                <li><b>DTOs</b> (Data Transfer Objects) nên tập trung vào việc định nghĩa cấu trúc dữ liệu mà API nhận hoặc trả về, bao gồm cả các quy tắc validation cho dữ liệu đầu vào.</li>
              </ul>
              Việc này giúp code sạch sẽ hơn, dễ đọc và dễ bảo trì hơn.`,
					},
					{
						id: 2,
						content: `<b>Linh hoạt trong Validation:</b> Một Entity có thể có nhiều trường hợp sử dụng (ví dụ: tạo mới, cập nhật một phần, cập nhật toàn bộ). Mỗi trường hợp có thể có các quy tắc validation khác nhau. Sử dụng DTOs cho phép bạn tạo các class DTO riêng biệt cho từng ngữ cảnh, mỗi DTO chứa các quy tắc validation phù hợp.`,
					},
					{
						id: 3,
						content: `<b>Tránh xung đột vòng lặp (Circular Dependency):</b> Nếu bạn đặt validation trực tiếp vào Entity và Entity đó có mối quan hệ với các Entity khác, việc import qua lại giữa các Entity và validator có thể dẫn đến lỗi. DTOs phá vỡ vòng lặp này bằng cách làm trung gian.`,
					},
					{
						id: 4,
						content: `<b>Tăng cường bảo mật và kiểm soát:</b> DTO giúp kiểm soát chính xác những trường nào được phép nhận từ client, tránh trường hợp client gửi các trường không mong muốn (ví dụ: <span class="code-word">isAdmin: true</span>) và làm thay đổi dữ liệu nhạy cảm.`,
					},
				],
				installationCode: `npm install class-validator class-transformer
  npm install -D @types/class-validator @types/class-transformer`,
				tsconfigCode: `{
    "compilerOptions": {
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true
    }
  }`,
				createJobDtoCode: `// src/dto/create-job.dto.ts
  import { IsString, IsNotEmpty, IsInt, IsOptional, Min, ValidateNested } from 'class-validator';
  import { Type } from 'class-transformer';
  
  // DTO cho JobDetail con
  export class CreateJobDetailDto {
      @IsOptional() // Detail có thể không bắt buộc khi tạo Job
      @IsString()
      description?: string;
  
      @IsOptional()
      @IsString()
      requirements?: string;
  }
  
  export class CreateJobDto {
      @IsNotEmpty({ message: 'Tiêu đề công việc không được để trống.' })
      @IsString({ message: 'Tiêu đề công việc phải là chuỗi.' })
      title: string;
  
      @IsNotEmpty({ message: 'Địa điểm không được để trống.' })
      @IsString({ message: 'Địa điểm phải là chuỗi.' })
      location: string;
  
      @IsOptional()
      @IsInt({ message: 'Mức lương phải là số nguyên.' })
      @Min(0, { message: 'Mức lương không được âm.' })
      salary?: number;
  
      @IsOptional()
      @IsString()
      description?: string;
  
      // Validation cho OneToOne relationship (JobDetail)
      @IsOptional()
      @ValidateNested() // Bắt buộc validate các thuộc tính bên trong CreateJobDetailDto
      @Type(() => CreateJobDetailDto) // Cần @Type để class-transformer biết cách biến đổi nested object
      detail?: CreateJobDetailDto;
  
      // Validation cho ManyToOne relationship (Category)
      @IsOptional()
      @IsInt({ message: 'ID danh mục phải là số nguyên.' })
      @Min(1, { message: 'ID danh mục phải lớn hơn 0.' })
      categoryId?: number;
  
      // Validation cho ManyToMany relationship (Skills)
      @IsOptional()
      @IsInt({ each: true, message: 'Mỗi ID kỹ năng phải là số nguyên.' })
      @Min(1, { each: true, message: 'Mỗi ID kỹ năng phải lớn hơn 0.' })
      skillIds?: number[];
  }`,
				updateJobDtoCode: `// src/dto/update-job.dto.ts
  import { IsString, IsOptional, IsInt, Min, ValidateNested } from 'class-validator';
  import { Type } from 'class-transformer';
  import { CreateJobDetailDto } from './create-job.dto'; // Có thể tái sử dụng hoặc tạo UpdateJobDetailDto
  
  export class UpdateJobDto {
      @IsOptional()
      @IsString({ message: 'Tiêu đề công việc phải là chuỗi.' })
      title?: string;
  
      @IsOptional()
      @IsString({ message: 'Địa điểm phải là chuỗi.' })
      location?: string;
  
      @IsOptional()
      @IsInt({ message: 'Mức lương phải là số nguyên.' })
      @Min(0, { message: 'Mức lương không được âm.' })
      salary?: number;
  
      @IsOptional()
      @IsString()
      description?: string;
  
      @IsOptional()
      @ValidateNested()
      @Type(() => CreateJobDetailDto) // Hoặc UpdateJobDetailDto nếu có logic cập nhật riêng cho detail
      detail?: CreateJobDetailDto;
  
      @IsOptional()
      @IsInt({ message: 'ID danh mục phải là số nguyên.' })
      @Min(1, { message: 'ID danh mục phải lớn hơn 0.' })
      categoryId?: number;
  
      @IsOptional()
      @IsInt({ each: true, message: 'Mỗi ID kỹ năng phải là số nguyên.' })
      @Min(1, { each: true, message: 'Mỗi ID kỹ năng phải lớn hơn 0.' })
      skillIds?: number[];
  }`,
				createCategorySkillDtoCode: `// src/dto/create-category.dto.ts
  import { IsString, IsNotEmpty } from 'class-validator';
  
  export class CreateCategoryDto {
      @IsNotEmpty({ message: 'Tên danh mục không được để trống.' })
      @IsString({ message: 'Tên danh mục phải là chuỗi.' })
      name: string;
  }
  
  // src/dto/create-skill.dto.ts
  import { IsString, IsNotEmpty } from 'class-validator';
  
  export class CreateSkillDto {
      @IsNotEmpty({ message: 'Tên kỹ năng không được để trống.' })
      @IsString({ message: 'Tên kỹ năng phải là chuỗi.' })
      name: string;
  }`,
				plainCode: `const dto = new CreateJobDto();
	// Gán giá trị từ req.body vào DTO
	dto.title = req.body.title;
	dto.location = req.body.location;
	dto.salary = req.body.salary;
	dto.description = req.body.description;
	dto.categoryId = req.body.categoryId;
	dto.skillIds = req.body.skillIds;
	const errors = await validate(dto, {
		whitelist: true,
		forbidNonWhitelisted: true,
	});

	if (errors.length > 0) {
		return res.status(400).json({
			errors: errors.map(e => ({
				property: e.property,
				constraints: e.constraints,
			})),
		});
	}

	// Dữ liệu hợp lệ
	res.json({ message: 'Dữ liệu hợp lệ', data: dto });`,
				validationMiddlewareCode: `// src/middleware/validation.middleware.ts
  import { Request, Response, NextFunction } from 'express';
  import { validate, ValidationError } from 'class-validator';
  import { plainToInstance } from 'class-transformer';
  
  // Hàm tiện ích để format lỗi
  function formatErrors(errors: ValidationError[]): any {
      return errors.map(error => {
          // Nếu có nested errors (cho ValidateNested)
          if (error.children && error.children.length > 0) {
              return { [error.property]: formatErrors(error.children) };
          }
          // Trả về các ràng buộc lỗi
          return { [error.property]: Object.values(error.constraints || {}) };
      });
  }
  
  export function validationMiddleware<T>(type: new () => T, skipMissingProperties = false) {
      return (req: Request, res: Response, next: NextFunction) => {
          // Chuyển đổi plain object (req.body) sang instance của class DTO
          const dtoInstance = plainToInstance(type, req.body);
  
          // Thực hiện validate
          validate(dtoInstance as object, { skipMissingProperties })
              .then((errors: ValidationError[]) => {
                  if (errors.length > 0) {
                      // Nếu có lỗi, trả về HTTP 400 Bad Request
                      const formattedErrors = formatErrors(errors);
                      res.status(400).json({
                          message: 'Validation failed',
                          errors: formattedErrors
                      });
                  } else {
                      // Nếu không có lỗi, gán lại req.body bằng dtoInstance đã được transform
                      // Điều này đảm bảo dữ liệu đúng kiểu và các decorator của class-transformer đã hoạt động
                      req.body = dtoInstance;
                      next();
                  }
              })
              .catch(error => {
                  console.error("Validation Middleware Error:", error);
                  res.status(500).json({ message: 'Internal Server Error during validation.' });
              });
      };
  }`,
				routesUpdateCode: `// src/routes/index.ts
  import { Router } from 'express';
  import { JobController } from '../controller/job.controller';
  import { validationMiddleware } from '../middleware/validation.middleware';
  import { CreateJobDto } from '../dto/create-job.dto';
  import { UpdateJobDto } = '../dto/update-job.dto';
  import { CreateCategoryDto } from '../dto/create-category.dto';
  import { CreateSkillDto } from '../dto/create-skill.dto';
  
  const router = Router();
  const jobController = new JobController();
  
  // Thêm các routes tạo Category và Skill để có thể tạo dữ liệu mẫu
  router.post('/categories', validationMiddleware(CreateCategoryDto), jobController.createCategory);
  router.post('/skills', validationMiddleware(CreateSkillDto), jobController.createSkill);
  
  // Routes cho OneToOne (Job & JobDetail)
  router.post('/jobs-with-detail', validationMiddleware(CreateJobDto), jobController.createJobWithDetail);
  router.get('/jobs/:id', jobController.getJobById); // Lấy Job kèm JobDetail
  
  // Routes cho OneToMany / ManyToOne (Job & Category)
  router.post('/jobs', validationMiddleware(CreateJobDto), jobController.createJob); // Tạo Job kèm Category
  router.put('/jobs/:id', validationMiddleware(UpdateJobDto, true), jobController.updateJobCategory); // Cập nhật Job chung
  router.get('/categories/:id/jobs', jobController.getCategoryWithJobs); // Lấy Category kèm Jobs
  
  // Routes cho ManyToMany (Job & Skill)
  router.post('/jobs-with-skills', validationMiddleware(CreateJobDto), jobController.createJobWithSkills);
  router.get('/jobs/:id/skills', jobController.getJobByIdWithSkills); // Lấy Job kèm Skills
  router.put('/jobs/:id/add-skills', validationMiddleware(UpdateJobDto, true), jobController.addSkillsToJob); // Thêm Skill vào Job
  
  export { router as jobRoutes };`,
				commonDecorators: [
					{
						id: 1,
						content: `<b>String Validation:</b> <span class="code-word">@IsString()</span>, <span class="code-word">@IsNotEmpty()</span>, <span class="code-word">@MinLength(min)</span>, <span class="code-word">@MaxLength(max)</span>, <span class="code-word">@IsEmail()</span>, <span class="code-word">@IsUrl()</span>, <span class="code-word">@IsAlpha()</span>, <span class="code-word">@IsAlphanumeric()</span>, <span class="code-word">@Matches(regex)</span>.`,
					},
					{
						id: 2,
						content: `<b>Number Validation:</b> <span class="code-word">@IsNumber()</span>, <span class="code-word">@IsInt()</span>, <span class="code-word">@Min(min)</span>, <span class="code-word">@Max(max)</span>, <span class="code-word">@IsPositive()</span>, <span class="code-word">@IsNegative()</span>.`,
					},
					{
						id: 3,
						content: `<b>Boolean Validation:</b> <span class="code-word">@IsBoolean()</span>.`,
					},
					{
						id: 4,
						content: `<b>Date Validation:</b> <span class="code-word">@IsDate()</span>, <span class="code-word">@IsDateString()</span>, <span class="code-word">@MinDate(date)</span>, <span class="code-word">@MaxDate(date)</span>.`,
					},
					{
						id: 5,
						content: `<b>Array Validation:</b> <span class="code-word">@IsArray()</span>, <span class="code-word">@ArrayMinSize(min)</span>, <span class="code-word">@ArrayMaxSize(max)</span>, <span class="code-word">@ArrayContains(values)</span>, <span class="code-word">@ArrayNotContains(values)</span>, <span class="code-word">@ArrayUnique()</span>.`,
					},
					{
						id: 6,
						content: `<b>Object Validation:</b> <span class="code-word">@ValidateNested()</span> (dùng cho các object lồng nhau), <span class="code-word">@IsObject()</span>.`,
					},
					{
						id: 7,
						content: `<b>Khác:</b> <span class="code-word">@IsOptional()</span> (trường tùy chọn), <span class="code-word">@IsIn([value1, value2])</span>, <span class="code-word">@IsNotIn([value1, value2])</span>, <span class="code-word">@Equals(value)</span>, <span class="code-word">@NotEquals(value)</span>.`,
					},
				],
				transformer: `import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateJobDto } from './dto/create-job.dto';

app.post('/jobs', async (req, res) => {
  // ⚡️ Biến object thường thành instance đúng của class
  const jobDto = plainToInstance(CreateJobDto, req.body);

  // ✅ Bây giờ validate sẽ hoạt động đúng, kể cả nested object
  const errors = await validate(jobDto);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Lúc này dữ liệu đã hợp lệ
  res.json({ job: jobDto });
});
`,
				middleware: `// middleware/validate-dto.ts
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateDto(dtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoObject);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    req.body = dtoObject; // 👈 truyền object đã transform xuống controller
    next();
  };
}
// => sử dụng
import { validateDto } from './middleware/validate-dto';
import { CreateJobDto } from './dto/create-job.dto';

app.post('/jobs', validateDto(CreateJobDto), (req, res) => {
  res.json({ job: req.body }); // Đã validate + transform
});

`,
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
