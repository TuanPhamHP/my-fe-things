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
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`HasFactory`:</b>
						<span
							>Là một trait được sử dụng để hỗ trợ việc tạo các factory cho mô hình (model). Ví dụ, bạn có thể sử dụng
							factory để tạo một bản ghi Todo như sau: <FilePath>$todo = Todo::factory()->create();</FilePath>
						</span>
					</li>
				</ul>
				<PageHeading text="Methods" addOnClass="text-left" markedAs="model-methods" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Tiếp theo, chúng ta sẽ cùng tạo các methods trong Model, ở bài học này chúng ta sẽ học 3 loại chính của
					methods trong model là: <FilePath>Relation</FilePath> <FilePath>Accessor</FilePath> và
					<FilePath>Mutator</FilePath>
				</p>
				<PageHeading text="- Relation method" addOnClass="text-left" markedAs="relation-methods" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Relationship method - (phương thức quan hệ) trong Laravel là loại method được sử dụng để định nghĩa mối quan
					hệ giữa các model, giúp ta truy xuất dữ liệu từ bảng khác dựa trên các khoá ngoại. Ví dụ:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="vs2015" />
				<div class="pb-3"></div>
				<PageHeading text="- Accessor method" addOnClass="text-left" markedAs="accessor-methods" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Accessor method - (phương thức định dạng) là phương thức được sử dụng để định nghĩa cách lấy giá trị (format)
					cho một thuộc tính cụ thể. Ví dụ:
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="vs2015" />
				<div class="pb-3"></div>
				<PageHeading text="- Mutator method" addOnClass="text-left" markedAs="mutator-methods" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Mutator method - (phương thức định dạng) là phương thức được sử dụng để xử lý giá trị trước khi lưu vào cơ sở
					dữ liệu. Ví dụ:
				</p>
				<VCodeBlock :code="b8" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">
					Done !!! Như vậy chúng ta đã hoàn thành Model cho bảng todos của chúng ta. Tiếp theo, chúng ta sẽ cùng khởi
					tạo Controller.
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
				b5: `namespace App/Models;

use Illuminate/Database/Eloquent/Factories/HasFactory;
use Illuminate/Database/Eloquent/Model;

/**
 * Class Todo
 * @package App/Models
 *
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

		protected $fillable = ['content', 'status_id'];

		protected $casts = [
			'updated_at' => 'datetime',
			'created_at'=>'datetime'
    ];
}
`,
				b6: `// method trong model Todo
public function status()
{
    return $this->belongsTo(TodoStatus::class, 'status_id'); // định nghĩa được mối quan hệ của Todo và TodoStatus
}
`,
				b7: `// method trong model Todo
public function getContentAttribute($value)
{
    return ucfirst($value); // Chữ cái đầu tiên viết hoa
}
`,
				b8: `// method trong model Todo
public function setContentAttribute($value)
{
    $this->attributes['content'] = strtolower($value);
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
