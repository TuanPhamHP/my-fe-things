<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">Các lệnh artisan thường dùng</p>
				<p class="text-slate-900 dark:text-white font-bold mb-1">Artisan-Migrate Commands</p>
				<DocumentTable :operators="migrateCmd" />
				<p class="text-slate-900 dark:text-white my-3">
					Done !!! Ở trên là các thao tác cơ bản với database trong Laravel. Ở bài tiếp theo chúng ta sẽ cùng tìm hiểu
					sâu hơn về ORM và Query Database 🤓.
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
			// Quan hệ với bảng statuses
			$table->foreignId('status_id')->constrained('statuses')->onDelete('cascade');

			// Quan hệ với bảng categories
			$table->foreignId('category_id')->constrained('categories')->onDelete('cascade');

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
				migrateCmd: [
					{
						id: 0,
						label: 'Các lệnh Artisan liên quan đến Migrate',
					},
					{
						id: 1,
						name: 'php artisan migrate',
						desc: 'Thực thi tất cả các file migration chưa được chạy để tạo bảng trong database.',
						syntax: 'php artisan migrate',
					},
					{
						id: 2,
						name: 'php artisan migrate:rollback',
						desc: 'Quay lại (rollback) batch migration gần nhất.',
						syntax: 'php artisan migrate:rollback',
					},
					{
						id: 3,
						name: 'php artisan migrate:reset',
						desc: 'Reset toàn bộ migration đã chạy (xóa toàn bộ bảng đã tạo).',
						syntax: 'php artisan migrate:reset',
					},
					{
						id: 4,
						name: 'php artisan migrate:refresh',
						desc: 'Reset và chạy lại toàn bộ migration (rất tiện khi phát triển).',
						syntax: 'php artisan migrate:refresh',
					},
					{
						id: 5,
						name: 'php artisan migrate:fresh',
						desc: 'Xóa toàn bộ bảng và chạy lại migration từ đầu.',
						syntax: 'php artisan migrate:fresh',
					},
					{
						id: 6,
						label: 'Các lệnh Artisan liên quan đến Model, Controller, Factory...',
					},
					{
						id: 7,
						name: 'php artisan make:model Cake',
						desc: 'Tạo mới một Model tên là Cake.',
						syntax: 'php artisan make:model Cake',
					},
					{
						id: 8,
						name: 'php artisan make:controller CakeController',
						desc: 'Tạo một Controller tên là CakeController.',
						syntax: 'php artisan make:controller CakeController',
					},
					{
						id: 9,
						name: 'php artisan make:factory CakeFactory',
						desc: 'Tạo một Factory để generate dữ liệu mẫu cho Model Cake.',
						syntax: 'php artisan make:factory CakeFactory',
					},
					{
						id: 10,
						name: 'php artisan make:migration create_cakes_table',
						desc: 'Tạo một file migration để tạo bảng cakes.',
						syntax: 'php artisan make:migration create_cakes_table',
					},
					{
						id: 11,
						label: 'Các lệnh Artisan hỗ trợ khác',
					},
					{
						id: 12,
						name: 'php artisan route:list',
						desc: 'Hiển thị danh sách tất cả route đã định nghĩa trong ứng dụng.',
						syntax: 'php artisan route:list',
					},
					{
						id: 13,
						name: 'php artisan config:clear',
						desc: 'Xóa cache cấu hình, giúp Laravel đọc lại file .env và config.',
						syntax: 'php artisan config:clear',
					},
					{
						id: 14,
						name: 'php artisan cache:clear',
						desc: 'Xóa toàn bộ cache của ứng dụng.',
						syntax: 'php artisan cache:clear',
					},
					{
						id: 15,
						name: 'php artisan db:seed',
						desc: 'Chạy các file seeder để thêm dữ liệu mẫu vào database.',
						syntax: 'php artisan db:seed',
					},
					{
						id: 16,
						name: 'php artisan tinker',
						desc: 'Mở terminal tương tác để chạy PHP code trực tiếp với Laravel.',
						syntax: 'php artisan tinker',
					},
				],
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
