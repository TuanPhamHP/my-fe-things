<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Ở bài này, chúng ta sẽ cùng tìm hiểu về <b>Model</b> trong Laravel.
				</p>
				<PageHeading text="Model" addOnClass="text-left" markedAs="database-create-model" />
				<p class="text-slate-900 dark:text-white my-5">
					Model là lớp đại diện cho một bảng trong cơ sở dữ liệu. Laravel sử dụng Eloquent ORM để giúp làm việc với dữ
					liệu một cách dễ dàng thông qua các class thay vì câu lệnh SQL thuần.
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Mỗi Model thường sẽ đại diện cho một bảng.</p>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<p>Trong Eloquent, Model sẽ giúp chúng ta thao tác với database bằng các methods.</p>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-3">
					Đầu tiên, chúng ta cùng tạo <b>Model</b> bằng câu lệnh hỗ trợ trong Laravel (bạn hoàn toàn có thể tạo thủ công
					nha):
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:model Cake'">
					<p>php artisan make:model Cake</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					Bạn có thể generate luôn 1 file migration ứng với model bằng cách thêm flag
					<FilePath>--migration</FilePath> hoặc <FilePath>--m</FilePath> vào command á 🤗.
					<a
						class="text-blue-500 underline"
						href="https://laravel.com/docs/12.x/eloquent#generating-model-classes"
						target="_blank"
						>Đọc thêm</a
					>
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Cake</b> sẽ được tạo tại <b>app/Models/Cake.php</b>. Thông thường chúng ta sẽ định nghĩa các properties và
					methods của Model tại file này.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="Properties" addOnClass="text-left mt-3" markedAs="model-properties" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Tại model <b>Cake</b> ta định nghĩa các loại properties như:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">`$table`:</b>
						<span>Xác định tên của bảng liên quan đến Model này.</span>
					</li>
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
							factory để tạo một bản ghi Cake như sau: <FilePath>$cake = Cake::factory()->create();</FilePath>
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Lưu ý:</b>Mặc định Laravel sẽ suy ra tên bảng từ tên model (số nhiều). Ví dụ:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Model</th>
								<th scope="col" class="px-5 py-3">Table</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-5 py-4 text-black">Cake</th>
								<th scope="row" class="px-5 py-4 text-black">cakes</th>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-5 py-4 text-black">Categories</th>
								<th scope="row" class="px-5 py-4 text-black">categories</th>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					Trong trường hợp bạn có tên của bảng không theo quy tắc trên thì chúng ta chỉ cần khai báo tên bảng vào
					property <b>$table</b> trong model là được 😎. Như ở ví dụ trên thì property <b>$table = 'cakes'</b> của tôi
					là thừa.
				</p>
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
					cho một thuộc tính cụ thể.
					<br />
					🫶 Hiểu đơn giản: Tự động sửa dữ liệu khi lấy ra.
					<br />
					Ví dụ:
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="vs2015" />
				<div class="pb-3"></div>
				<PageHeading text="- Mutator method" addOnClass="text-left" markedAs="mutator-methods" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Mutator method - (phương thức định dạng) là phương thức được sử dụng để xử lý giá trị trước khi lưu vào cơ sở
					dữ liệu.
					<br />
					🫶 Hiểu đơn giản: Tự động sửa dữ liệu khi lưu vào db.
					<br />
					Ví dụ:
				</p>
				<VCodeBlock :code="b8" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="Model Methods" addOnClass="text-left mt-3" markedAs="eloquent-methods" />
				<p class="text-slate-900 dark:text-white my-3">
					Tiếp theo là một vài các methods cực kì cơ bản và thông dụng của Model, hỗ trợ cho quá trình làm bài của chúng
					mình nha.
				</p>

				<DocumentTable :operators="commonMethods" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Lưu ý:</b> Ở trên là các <b>Eloquent methods</b> KHÔNG PHẢI <b>QUERY BUILDER</b> đây là 2 khái niệm thường
					xuyên bị nhầm lẫn do tên các method khá tương đồng nhau.
				</p>
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

class Cake extends Model
{
		use HasFactory;

		protected $table= 'cakes';

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
				commonMethods: [
					{
						id: 0,
						name: 'all()',
						desc: 'Lấy toàn bộ dữ liệu từ bảng.',
						syntax: 'Cake::all();',
					},
					{
						id: 1,
						name: 'find(\$id)',
						desc: 'Tìm một bản ghi theo ID.',
						syntax: 'Cake::find(1);',
					},
					{
						id: 2,
						name: 'where()',
						desc: 'Thêm điều kiện lọc dữ liệu.',
						syntax: "Cake::where('price', '>', 50000)->get();",
					},
					{
						id: 3,
						name: 'create()',
						desc: 'Tạo một bản ghi mới.',
						syntax: "Cake::create(['name' => 'Bánh su kem', 'price' => 50000]);",
					},
					{
						id: 4,
						name: 'update()',
						desc: 'Cập nhật dữ liệu cho bản ghi.',
						syntax: "Cake::where('id', 1)->update(['price' => 60000]);",
					},
					{
						id: 5,
						name: 'delete()',
						desc: 'Xoá bản ghi.',
						syntax: 'Cake::find(1)->delete();',
					},
					{
						id: 6,
						name: 'first()',
						desc: 'Lấy bản ghi đầu tiên thoả điều kiện.',
						syntax: "Cake::where('price', '>', 30000)->first();",
					},
					{
						id: 7,
						name: 'firstOrFail()',
						desc: 'Lấy bản ghi đầu tiên, hoặc throw 404 nếu không có.',
						syntax: "Cake::where('name', 'Bánh Xèo')->firstOrFail();",
					},
					{
						id: 8,
						name: 'with()',
						desc: 'Eager load quan hệ (tối ưu performance khi truy vấn).',
						syntax: "Cake::with('category')->get();",
					},
					{
						id: 9,
						name: 'save()',
						desc: 'Lưu lại các thay đổi cho bản ghi.',
						syntax: 'Cake::find(1)->save();',
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-19' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
