<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Migrations trong TypeORM" addOnClass="text-left" markedAs="migrations" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Migrations giúp chúng ta kiểm soát **lịch sử thay đổi database** một cách có tổ chức. Thay vì sửa tay, ta tạo
					ra các file migration chứa SQL tương ứng.
				</p>
				<SkyList :docs="migrationConcepts" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Lưu ý:</b> chúng mình phải set <FilePath>synchronize: false</FilePath> trong <b>data-source.ts</b> nha.
				</p>
				<PageHeading text="Tạo Migration" addOnClass="text-left mt-6" markedAs="create-migration" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Setup nhanh thêm scripts trong <FilePath>package.json</FilePath> để dùng ts-node chạy migration mà không cần
					pre-build
				</p>
				<VCodeBlock :code="scriptCmd" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Done, giờ chúng mình có thể chạy trực tiếp từ npm:</p>
				<VCodeBlock :code="createMigrationCmd" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					File được tạo ra nằm trong thư mục <FilePath>/src/migration</FilePath>.
				</p>

				<PageHeading text="Chạy Migration" addOnClass="text-left mt-6" markedAs="run-migration" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">sau đó chúng mình chỉ cần chạy</p>
				<VCodeBlock :code="runMigrationCmd" highlightjs lang="bash" theme="atom-one-dark" />

				<PageHeading text="RollBack Migration" addOnClass="text-left mt-6" markedAs="revert-migration" />
				<VCodeBlock :code="revertMigrationCmd" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">Dùng để quay lại migration trước nếu có lỗi xảy ra.</p>

				<PageHeading text="Ví dụ thực tế" addOnClass="text-left mt-6" markedAs="example" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">1/ Tạo mới bảng <FilePath>categories</FilePath></p>
				<FakeTerminalUI :textCoppy="'npx typeorm migration:create src/migration/CreateCategoriesTable'"
					>npx typeorm migration:create src/migration/CreateCategoriesTable</FakeTerminalUI
				>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					File migrate được tạo tại: <FilePath>src/migration/1690000000000-CreateCategoriesTable.ts</FilePath>
				</p>
				<VCodeBlock :code="exampleMigration" highlightjs lang="typescript" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					2/ Cập nhật bảng <FilePath>categories</FilePath>, thêm trường <b>preview_image</b>
				</p>
				<FakeTerminalUI :textCoppy="'npx typeorm migration:create src/migration/AddPreviewImageToCategories'"
					>npx typeorm migration:create src/migration/AddPreviewImageToCategories</FakeTerminalUI
				>
				<VCodeBlock :code="secondExampleMigration" highlightjs lang="typescript" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					3/ Cập nhật bảng <FilePath>jobs</FilePath>, thêm FK <b>categoryId</b>
				</p>
				<VCodeBlock :code="addKey" highlightjs lang="typescript" theme="atom-one-dark" />
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
				migrationConcepts: [
					{ id: 1, content: `Migration là các file mô tả thay đổi trong database.` },
					{ id: 2, content: `Giúp đồng bộ DB giữa các môi trường (dev/test/prod).` },
					{ id: 3, content: `Không cần sửa DB bằng tay hay chạy script riêng.` },
				],
				scriptCmd: `"scripts": {
		"start": "ts-node src/index.ts",
		"typeorm": "typeorm-ts-node-commonjs",
		"migration:revert": "ts-node ./node_modules/typeorm/cli.js migration:revert --dataSource src/data-source.ts",
		"migration:run": "ts-node ./node_modules/typeorm/cli.js migration:run --dataSource src/data-source.ts"
	}`,
				createMigrationCmd: `npx typeorm migration:create src/migration/CreateJobTable`,
				runMigrationCmd: `npm run migration:run`,
				revertMigrationCmd: `npm run migration:revert`,
				exampleMigration: `import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategoriesTable1690000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
`,
				secondExampleMigration: `import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPreviewImageToCategories1690000000010 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'preview_image',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'preview_image');
  }
}
`,
				addKey: `// 1. Thêm cột categoryId vào bảng jobs
		await queryRunner.addColumn(
			'jobs',
			new TableColumn({
				name: 'categoryId',
				type: 'int',
				isNullable: true, // Cho phép null nếu bạn chưa có dữ liệu - vì giờ mới thêm mà
			})
		);

		// 2. Tạo khóa ngoại từ jobs.categoryId => categories.id
		await queryRunner.createForeignKey(
			'jobs',
			new TableForeignKey({
				columnNames: ['categoryId'],
				referencedTableName: 'categories',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL', // hoặc CASCADE tùy bạn
			})
		);`,
			};
		},
	};
</script>
