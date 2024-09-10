<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Ở bài này, chúng ta sẽ cùng tìm hiểu về <b>Database</b> và cách làm việc cơ bản với nó trong Laravel.
				</p>

				<PageHeading text="Database" addOnClass="text-left" markedAs="laravel-database" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Laravel hỗ trợ chúng ta về việc kết nối và thao tác với database một cách đơn giản và mạnh mẽ. Hiện tại
					Laravel hỗ trợ việc tạo query, ORM với một số các databases phổ biến như:
					<br />
					<b class="px-5">- MariaDB 10.3+</b>
					<br />
					<b class="px-5">- MySQL 5.7+</b>
					<br />
					<b class="px-5">- PostgreSQL 10.0+</b>
					<br />
					<b class="px-5">- SQLite 3.35.0+</b>
					<br />
					<b class="px-5">- SQL Server 2017+</b>
				</p>

				<PageHeading text="B1 - Setup Database" addOnClass="text-left" markedAs="database-setup" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Laravel cung cấp một file cấu hình cho các kết nối database nằm trong file <b>config/database.php</b>. Tuy
					nhiên, chúng ta thường cấu hình các thông số kết nối trong file <b>.env</b>. Ở đây, chúng ta sẽ lựa chọn MySQL
					để cấu hình. File <b>.env</b> của chúng ta như sau:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="vs2015" />

				<p class="text-slate-900 dark:text-white my-3">
					Tiếp đến là cấu hình file <b>config/database.php</b> để nó đọc thông số từ file <b>.env</b> mà chúng mình vừa
					cấu hình ở trên
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">
					Về cơ bản, chúng ta làm 2 việc là điều chỉnh lại default database của app để sử dụng <b>mysql</b> thay vì
					<b>sqlite</b> bằng config <FilePath>default' => env('DB_CONNECTION', 'mysql')</FilePath>. Laravel sử dụng
					method <b>env('...', 'forge')</b> để đọc các trường tương ứng ở bên file
					<b>.env</b>
					của chúng ta.
				</p>
				<PageHeading text="B2 - Migration" addOnClass="text-left" markedAs="database-migration" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Bước thứ 2 chúng ta sẽ tạo ra các migrations để làm việc với database. Migration là cách Laravel quản lý và
					duy trì cấu trúc của database. Nó cho phép chúng ta dùng PHP để tạo và cập nhật bảng mà không cần viết SQL
					trực tiếp.
					<br />
					<br />
					Chạy lệnh migrate của artisan ở terminal để chạy tất cả các migration chưa được thực hiện:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan migrate'">
					<p>php artisan migrate</p>
				</FakeTerminalUI>
				<div class="flex gap-3">
					<div>
						<p class="text-slate-900 dark:text-white my-3">
							Trong trường hợp chúng ta chưa tạo local connection với database thì artisan migrate sẽ đưa ra yêu cầu
							khởi tạo, bạn type 'yes' để tạo ra connection với database.
							<br />
							<br />
							sau đó sử dụng các application để view database của bạn như Workbench, Navicat ... hoặc truy cập
							http://localhost/phpmyadmin của XAMPP để kiểm tra connection của chúng ta.
						</p>
					</div>
					<div>
						<img src="@/assets/images/documentation/database-1.png" alt="" class="rounded-lg w-[320px]" />
						<p class="text-slate-900 dark:text-white my-3 italic text-xs text-center">
							Connection & Database view trên http://localhost/phpmyadmin
						</p>
					</div>
				</div>
				<PageHeading text="B3 - Tạo bảng" addOnClass="text-left" markedAs="database-create-table" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Tự tạo một migration để tạo bảng <b>Todo</b> của chúng ta, Tiếp tục sử dụng <b>artisan make:migration</b> để
					tạo ra file định nghĩa cấu trúc bảng
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:migration create_todos_table'">
					<p>php artisan make:migration create_todos_table</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					Laravel sẽ tạo cho chúng ta một file migration trong <b>database/migrations</b> với tên là
					<b>*time*create_todos_table.php</b>
					<br />
					Trong file migration này là một Class chứa 2 method là <b>up()</b> và <b>down()</b> được dùng để tương tác khi
					chạy migration hoặc rollback. Trong đó <b>up()</b> là nơi để chúng ta định nghĩa bảng, thêm cột hay thực hiện
					thay đổi nói chung
				</p>
				<div class="flex gap-4">
					<div class="w-full">
						<VCodeBlock :code="b3" highlightjs lang="php" theme="vs2015" />
					</div>
					<div>
						<img src="@/assets/images/documentation/database-2.png" alt="" class="rounded-lg min-w-[450px]" />
						<p class="text-slate-900 dark:text-white my-3 italic text-xs text-center">File migration</p>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					Sau khi đã hoàn thành việc khai báo/thiết kế table thì ta sẽ phải chạy lại migrate để thực thi các file
					migration mới.
				</p>
				<FakeTerminalUI :textCoppy="'php artisan migrate'">
					<p>php artisan migrate</p>
				</FakeTerminalUI>
				<div class="py-2"></div>
				<p class="text-slate-900 dark:text-white my-3">
					<b class="text-xl">Xoá / Update bảng</b>
					<br />
					<br />
					Trong trường hợp chúng ta tạo sai bảng, và cần phải xoá đi để tạo lại thay vì update thì chúng ta cần rollback
					lần lượt bằng lệnh:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan migrate:rollback'">
					<p>php artisan migrate:rollback</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					Còn nếu chỉ thiếu cột hoặc muốn update để thêm tính năng thì ta cần tạo file migration riêng để thao tác chứ
					không được sửa các file migration đã tạo. Ví dụ, ở bảng <b>todos</b> ở trên tôi muốn có thêm một cột
					<b>title</b> thì thay vì update vào file migration cũ, tôi cần phải tạo hẳn 1 file migration mới để tránh việc
					conflict.
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:migration update_title_to_todos_table'">
					<p>php artisan make:migration update_title_to_todos_table</p>
				</FakeTerminalUI>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">Tiếp theo đương nhiên phải chạy lại migrate</p>
				<FakeTerminalUI :textCoppy="'php artisan migrate'">
					<p>php artisan migrate</p>
				</FakeTerminalUI>

				<p class="text-slate-900 dark:text-white my-3">
					Ở đây chúng ta còn cần tạo một bảng <b>`todo_statuses`</b> để chưa các trạng thái của Todo. Đây sẽ là bài tập
					cho các bạn.
				</p>
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-17' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
