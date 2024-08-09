<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Ở bài này, chúng ta sẽ cùng tìm hiểu về <b>Model</b> và <b>Database</b> trong Laravel.
				</p>
				<PageHeading text="Relation - ORM" addOnClass="text-left" markedAs="database-orm" />

				<p class="text-slate-900 dark:text-white my-5">
					ORM (Object-Relational Mapping) của Laravel, giúp bạn tương tác với cơ sở dữ liệu bằng cách sử dụng các mô
					hình đối tượng và quan hệ giữa chúng.
				</p>
				<PageHeading text="Model" addOnClass="text-left" markedAs="database-create-model" />
				<p class="text-slate-900 dark:text-white my-3">
					Đã hoàn thành việc tạo bảng, tiếp theo chúng ta cùng tạo <b>Model</b> để làm việc với data.
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:model Todo'">
					<p>php artisan make:model Todo</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Todo</b> sẽ được tạo tại <b>app/Models/Todo.php</b>. Thông thường chúng ta sẽ định nghĩa các properties và
					methods của Model tại file này.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">Tại model <b>Todo</b> ta định nghĩa các loại properties như:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`$fillable`:</b>
						<span
							>Xác định danh sách các cột có thể được gán giá trị thông qua các phương thức như create() hoặc
							fill().</span
						>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`$casts`:</b>
						<span
							>Xác định các thuộc tính cần được chuyển đổi sang các kiểu dữ liệu cụ thể khi truy xuất hoặc lưu trữ trong
							cơ sở dữ liệu.</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					Ngoài ra, chúng ta nên pre-assign kiểu dữ liệu của các properties để làm việc đơn giản hơn.
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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { FilePath } from '../../../.nuxt/components';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				b1: `DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hello_laravel
DB_USERNAME=root
DB_PASSWORD=
`,
				b2: `'default' => env('DB_CONNECTION', 'mysql'),
...
'connections' => [
	'mysql' => [
					'driver' => 'mysql',
					'url' => env('DATABASE_URL'),
					'host' => env('DB_HOST', '127.0.0.1'),
					'port' => env('DB_PORT', '3306'),
					'database' => env('DB_DATABASE', 'forge'),
					'username' => env('DB_USERNAME', 'forge'),
					'password' => env('DB_PASSWORD', ''),
					...
					],
					...
	],
	...
`,
				b3: `public function up()
{
    Schema::create('todos', function (Blueprint $table) {
        $table->id();
        $table->string('content');
        $table->integer('status_id');
        $table->timestamps();
    });
}
`,
				b4: `// file:  time*update_title_to_todos_table.php
public function up(): void
{
		Schema::table('todos', function (Blueprint $table) {
				//
				$table->string('title');
		});
}
// ...down
`,
				b5: `namespace App/Models;

use Illuminate/Database/Eloquent/Factories/HasFactory;
use Illuminate/Database/Eloquent/Model;

/**
 * Class Todo
 * @package App/Models
 *
 * @property string $title
 * @property string $content
 * @property int $status_id
 *
 * Accessors
 *
 * Relations
 *
 *
 */
class Todo extends Model
{
		use HasFactory;

		protected $table;

		protected $fillable = ['title', 'content', 'status_id'];

		protected $casts = [
			'updated_at' => 'datetime',
			'created_at'=>'datetime'
    ];
}
`,
				pagePagination: {
					next: {
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-18' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
