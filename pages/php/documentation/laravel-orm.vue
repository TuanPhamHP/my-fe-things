<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Relation - ORM" addOnClass="text-left" markedAs="database-orm" />

				<p class="text-slate-900 dark:text-white my-5">
					ORM (Object-Relational Mapping) của Laravel, giúp bạn tương tác với cơ sở dữ liệu bằng cách sử dụng các mô
					hình đối tượng và quan hệ giữa chúng. Như vậy, chúng ta có thể tương tác với cơ sở dữ liệu (CSDL) bằng object
					(đối tượng trong lập trình) thay vì viết câu lệnh SQL thủ công.
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p><b>Trước ORM</b>, chúng mình viết SQL như sau:</p>
						<FilePath>SELECT * FROM cakes WHERE status_id = 1</FilePath> 🤯🤯🤯
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p><b>Với ORM</b>, chúng mình viết</p>
						<FilePath>$cakes = Cake::where('status_id', 1)->get();</FilePath> 😎😎😎
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5">
					Đủ WOW chưa các bạn 😎, nhất là với các bạn quen với <b>OOP, Object</b>. Về cơ bản, chúng ta tạm hiểu: ORM =>
					ánh xạ giữa CSDL (bảng) và đối tượng PHP (class), thay vì viết RAW SQL thì chúng mình xài Class he. Trong ORM:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Mỗi bảng <b>(table)</b> tương ứng với <b>1 Model Class</b></p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Mỗi hàng <b>(record)</b> trong bảng tương ứng với <b>1 object</b></p>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-5">Lợi ích của việc sử dụng Eloquent ORM trong Laravel:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Dễ đọc, dễ test, dễ duy trì</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Tích hợp sẵn trong Laravel</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Tránh lỗi SQL injection</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Tự động quản lý mối quan hệ, truy vấn nhanh hơn</p>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5">
					Đã đủ cho việc giới thiệu qua về Eloquent ORM rồi nhờ, tiếp theo chúng mình cùng tiến hành tạo và sử dụng nó
					nào.
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
 * Class Cake
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
class Cake extends Model
{
		use HasFactory;

		protected $table;

		protected $fillable = ['id', 'name', 'description', 'price', 'category_id'];

		protected $casts = [
			'updated_at' => 'datetime',
			'created_at'=>'datetime'
    ];
}
`,
				b6: `// method trong model Cake
public function categories()
{
    return $this->belongsTo(Categories::class, 'category_id'); // định nghĩa được mối quan hệ của Todo và TodoStatus
}
`,
				b7: `// method trong model Cake
public function getNameAttribute($value)
{
    return ucfirst($value); // Chữ cái đầu tiên viết hoa
}
`,
				b8: `// method trong model Cake
public function setDescriptionAttribute($value)
{
    $this->attributes['description'] = strtolower($value);
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
