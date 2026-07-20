<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Eloquent ORM — nói chuyện với DB kiểu OOP" addOnClass="text-left" markedAs="orm-intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>ORM (Object-Relational Mapping)</b> là cách viết code CSDL bằng <b>object</b> thay vì SQL thuần. Mỗi
					<b>bảng</b> ↔ <b>1 class Model</b>, mỗi <b>row</b> ↔ <b>1 instance</b> của class đó. Laravel dùng
					<b>Eloquent</b> — ORM built-in nổi tiếng vì cú pháp cực gọn.
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">🤯 Trước ORM (SQL thuần)</p>
						<FilePath>SELECT * FROM cakes WHERE category_id = 1 ORDER BY id DESC</FilePath>
					</div>
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">😎 Với Eloquent ORM</p>
						<FilePath>Cake::where('category_id', 1)->latest()->get()</FilePath>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở bài PHP thuần <a href="/php/documentation/php-and-database-p5" target="_blank" rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500">phần 5</a>, ta đã xây tay
					pattern Active Record, relations, accessor/mutator. Ở đây Laravel làm hộ toàn bộ — bạn chỉ cần khai báo.
					Bài này đi qua 8 mục thường xài nhất khi làm dự án Laravel.
				</p>

				<PageHeading text="1. Tạo Model + Migration bằng Artisan" addOnClass="text-left mt-5" markedAs="orm-scaffold" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Laravel có CLI <FilePath>artisan</FilePath> để scaffold. 1 lệnh tạo cả Model + Migration:
				</p>
				<FakeTerminalUI textCoppy="php artisan make:model Cake -m" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Sinh ra 2 file:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>app/Models/Cake.php</FilePath> — class Model.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>database/migrations/2026_xx_xx_create_cakes_table.php</FilePath> — Migration định nghĩa schema.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mở migration, định nghĩa các cột (dùng Schema Builder — DSL của Laravel):
				</p>
				<ClientOnly>
					<VCodeBlock :code="bMigration" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chạy migrate để apply lên DB thực tế:
				</p>
				<FakeTerminalUI textCoppy="php artisan migrate" />

				<PageHeading text="2. Cấu hình Model" addOnClass="text-left mt-5" markedAs="orm-config" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Model kế thừa <FilePath>Illuminate\Database\Eloquent\Model</FilePath>. Chỉ cần khai báo vài property, còn lại
					Laravel tự infer:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bModel" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<ul class="pl-10 mt-2">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$table</FilePath> — có thể bỏ qua, Laravel tự đoán snake_case số nhiều
						(<FilePath>Cake</FilePath> → <FilePath>cakes</FilePath>).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$fillable</FilePath> — whitelist field cho phép mass assignment. Ai đó gửi thêm
						<FilePath>is_admin=1</FilePath> qua <FilePath>$request->all()</FilePath>, field lạ bị lọc.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$casts</FilePath> — tự cast type khi đọc/ghi. VD <FilePath>'is_active' => 'boolean'</FilePath>
						biến <FilePath>0/1</FilePath> từ DB thành <FilePath>true/false</FilePath> khi truy cập.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$timestamps</FilePath> — mặc định <FilePath>true</FilePath>: Laravel tự set
						<FilePath>created_at</FilePath>/<FilePath>updated_at</FilePath>. Set <FilePath>false</FilePath> nếu bảng
						không có 2 cột này.
					</li>
				</ul>

				<PageHeading text="3. CRUD với Eloquent" addOnClass="text-left mt-5" markedAs="orm-crud" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					4 thao tác CRUD phổ biến — mỗi cái vài dòng ngắn gọn, so với SQL thuần thì gọn hơn cả chục lần:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bCrud" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Lưu ý:</b> <FilePath>find()</FilePath> trả về Model instance hoặc <FilePath>null</FilePath>,
					<FilePath>findOrFail()</FilePath> throw <FilePath>ModelNotFoundException</FilePath> — Laravel tự bắt và trả
					404 nếu bạn dùng Route Model Binding.
				</p>

				<PageHeading text="4. Query Builder — where + chain" addOnClass="text-left mt-5" markedAs="orm-query" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Eloquent kế thừa toàn bộ Query Builder — nối nhiều <FilePath>where</FilePath> lại thành 1 câu SQL. Đây là
					9 method dùng gần như mỗi ngày:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bQuery" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Debug câu SQL:</b> gắn <FilePath>->toSql()</FilePath> cuối chain để xem SQL sinh ra —
						<FilePath>dd(Cake::where('id', 1)->toSql())</FilePath>. Rất tiện khi query phức tạp mà không hiểu tại
						sao ra sai kết quả.
					</p>
				</div>

				<PageHeading text="5. Relations — 3 loại phổ biến" addOnClass="text-left mt-5" markedAs="orm-relations" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Eloquent hỗ trợ tất cả loại quan hệ SQL. 90% dự án chỉ dùng 3:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Loại</th>
								<th class="px-5 py-3">Ý nghĩa</th>
								<th class="px-5 py-3">Ví dụ</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>belongsTo</FilePath></th>
								<td class="px-5 py-4">"Thuộc về 1" — có FK trong bảng hiện tại</td>
								<td class="px-5 py-4">Cake → Category</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>hasMany</FilePath></th>
								<td class="px-5 py-4">"Có nhiều" — chiều ngược lại của belongsTo</td>
								<td class="px-5 py-4">Category → nhiều Cake</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>belongsToMany</FilePath></th>
								<td class="px-5 py-4">Many-to-many qua bảng pivot</td>
								<td class="px-5 py-4">Cake ↔ Tags (bảng <FilePath>cake_tag</FilePath>)</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Định nghĩa cực gọn — 1 method trong Model, gọi hàm helper Laravel:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bRelations" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cách dùng — truy cập như property (không có ngoặc), Laravel tự query DB khi cần:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bRelationsUsage" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="6. Accessor &amp; Mutator" addOnClass="text-left mt-5" markedAs="orm-accessor" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Xen logic biến đổi vào giữa Model và DB. Ở Laravel 9+, viết bằng class-based
					<FilePath>Attribute</FilePath> — mỗi field 1 method trả về
					<FilePath>Attribute::make(get: ..., set: ...)</FilePath>:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bAccessorMutator" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>price_formatted</FilePath> là <b>field ảo</b> — không có trong DB, nhưng truy cập được. Laravel tự
					map <FilePath>snake_case</FilePath> ↔ <FilePath>camelCase</FilePath>
					(<FilePath>priceFormatted()</FilePath> ↔ <FilePath>$cake->price_formatted</FilePath>).
				</p>

				<PageHeading text="7. Eager Loading — chữa N+1 problem" addOnClass="text-left mt-5" markedAs="orm-eager" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mục <b>cực kỳ quan trọng</b> — bug phổ biến nhất khi mới dùng Eloquent. Xét code sau:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bN1Bad" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					100 cakes → chạy <b>101 queries</b>: 1 query lấy cakes + 100 query mỗi lần
					<FilePath>$cake->category</FilePath>. Đây gọi là <b>N+1 problem</b> — page chậm dần theo lượng data. Fix
					bằng <FilePath>->with('relation')</FilePath> để eager load:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bN1Good" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Giờ chỉ <b>2 queries</b>: 1 lấy cakes + 1 lấy tất cả category liên quan (<FilePath>WHERE id IN (...)</FilePath>).
					Load nhiều relation cùng lúc: <FilePath>->with(['category', 'tags'])</FilePath>. Load nested:
					<FilePath>->with('category.parent')</FilePath>.
				</p>
				<div class="mt-3 p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Dev tool khuyên dùng:</b> cài package <FilePath>barryvdh/laravel-debugbar</FilePath> hoặc dùng
						<FilePath>Laravel Telescope</FilePath> — hiển thị số query mỗi request. Thấy 1 page bắn > 20 query là dấu
						hiệu N+1, thêm <FilePath>->with()</FilePath> ngay.
					</p>
				</div>

				<PageHeading text="8. Cheat sheet" addOnClass="text-left mt-5" markedAs="orm-cheat" :lvl="1" />
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<ul class="list-disc pl-5 space-y-2 text-slate-900 dark:text-white text-sm">
						<li>
							<b>Scaffold:</b> <FilePath>php artisan make:model Cake -mfsc</FilePath> —
							<FilePath>-m</FilePath> Migration, <FilePath>-f</FilePath> Factory, <FilePath>-s</FilePath> Seeder,
							<FilePath>-c</FilePath> Controller.
						</li>
						<li>
							<b>Query cơ bản:</b> <FilePath>find()</FilePath>, <FilePath>first()</FilePath>,
							<FilePath>all()</FilePath>, <FilePath>where()->get()</FilePath>, <FilePath>paginate(15)</FilePath>.
						</li>
						<li>
							<b>Ghi:</b> <FilePath>create([...])</FilePath>, <FilePath>update([...])</FilePath>,
							<FilePath>delete()</FilePath>, <FilePath>destroy($id)</FilePath>.
						</li>
						<li>
							<b>Bảo vệ:</b> <FilePath>$fillable</FilePath> chặn mass assignment,
							<FilePath>$casts</FilePath> chuẩn hoá type.
						</li>
						<li>
							<b>Relations:</b> <FilePath>belongsTo</FilePath> / <FilePath>hasMany</FilePath> /
							<FilePath>belongsToMany</FilePath>. Truy cập như property:
							<FilePath>$cake->category</FilePath> (không ngoặc).
						</li>
						<li>
							<b>N+1 fix:</b> <FilePath>->with('relation')</FilePath> ngay từ query.
						</li>
						<li>
							<b>Debug SQL:</b> <FilePath>->toSql()</FilePath> hoặc bật
							<FilePath>DB::enableQueryLog()</FilePath> rồi <FilePath>dd(DB::getQueryLog())</FilePath>.
						</li>
						<li>
							<b>Soft delete:</b> add <FilePath>use SoftDeletes;</FilePath> vào Model + cột
							<FilePath>deleted_at</FilePath> — <FilePath>delete()</FilePath> chỉ set timestamp thay vì xoá thật.
						</li>
					</ul>
				</div>

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
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				bMigration: `<?php
// database/migrations/2026_xx_xx_create_cakes_table.php
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('cakes', function (Blueprint $table) {
            $table->id();                                             // BIGINT AUTO_INCREMENT PRIMARY KEY
            $table->foreignId('category_id')                          // BIGINT UNSIGNED
                  ->nullable()
                  ->constrained()                                     // tự tạo FK → categories(id)
                  ->nullOnDelete();                                   // ON DELETE SET NULL
            $table->string('name');                                   // VARCHAR(255)
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2);                          // DECIMAL(10, 2)
            $table->integer('stock')->default(0);                     // số lượng tồn
            $table->boolean('is_active')->default(true);
            $table->timestamps();                                     // created_at + updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cakes');
    }
};`,
				bModel: `<?php
// app/Models/Cake.php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Cake extends Model
{
    // Nếu tên bảng khác 'cakes' — override ở đây (mặc định tự đoán snake_case số nhiều).
    // protected $table = 'my_cakes';

    /** @var list<string> Field cho phép mass assignment qua create/update */
    protected $fillable = ['name', 'description', 'price', 'stock', 'category_id', 'is_active'];

    /** @var array<string, string> Tự cast type khi đọc/ghi */
    protected $casts = [
        'is_active' => 'boolean',      // 0/1 ↔ false/true
        'price'     => 'decimal:2',
        'created_at' => 'datetime',    // ↔ Carbon instance (có ->diffForHumans() ...)
    ];

    // $timestamps = true (default) — Laravel tự set created_at/updated_at
    // $primaryKey = 'id' (default) — override nếu PK khác 'id'
    // $keyType = 'int' (default) — 'string' nếu dùng UUID
    // public $incrementing = true (default)
}`,
				bCrud: `<?php
// ---- CREATE ----
$cake = Cake::create([
    'name'        => 'Bánh su kem',
    'price'       => 25000,
    'category_id' => 1,
]);
// $cake giờ đã có id, created_at, updated_at — Laravel gán tự động

// ---- READ ----
$cake = Cake::find(5);                    // Cake|null theo PK
$cake = Cake::findOrFail(5);              // throw ModelNotFoundException → 404
$first   = Cake::where('is_active', true)->first();
$all     = Cake::all();                      // Collection tất cả records

// ---- UPDATE ----
// Trên instance
$cake->name  = 'Bánh su kem đặc biệt';
$cake->price = 30000;
$cake->save();

// Hoặc mass update
$cake->update(['price' => 28000]);

// Bulk update qua query
Cake::where('category_id', 1)->update(['is_active' => false]);

// ---- DELETE ----
$cake->delete();                             // trên instance
Cake::destroy(5);                            // trực tiếp theo id
Cake::destroy([5, 6, 7]);                    // nhiều id 1 lượt
Cake::where('is_active', false)->delete();   // bulk delete qua query`,
				bQuery: `<?php
// ---- where cơ bản ----
Cake::where('price', '>', 20_000)->get();
Cake::where('category_id', 1)->where('is_active', true)->get();       // AND
Cake::where('category_id', 1)->orWhere('category_id', 2)->get();      // OR

// ---- where nâng cao ----
Cake::whereIn('category_id', [1, 2, 3])->get();
Cake::whereBetween('price', [10_000, 50_000])->get();
Cake::whereNull('category_id')->get();                    // bánh chưa phân loại
Cake::whereNotNull('description')->get();                 // bánh đã có mô tả

// ---- LIKE search ----
Cake::where('name', 'LIKE', "%{$keyword}%")->get();

// ---- Sắp xếp + giới hạn ----
Cake::orderBy('created_at', 'desc')->limit(10)->get();
Cake::latest()->take(5)->get();              // latest() = orderBy('created_at', 'desc')
Cake::oldest()->first();

// ---- Aggregate ----
$count = Cake::where('is_active', true)->count();
$max   = Cake::max('price');
$avg   = Cake::avg('price');
$sum   = Cake::where('category_id', 1)->sum('price');
$exists = Cake::where('id', 5)->exists();

// ---- Pagination — tự đọc ?page= từ URL ----
$cakes = Cake::paginate(15);              // 15 items/page, trả LengthAwarePaginator
// Ở View: {{ $cakes->links() }} để render UI phân trang có sẵn

// ---- Select cột cụ thể ----
Cake::select('id', 'name', 'price')->get();`,
				bRelations: `<?php
// app/Models/Cake.php
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsToMany;

class Cake extends Model
{
    // belongsTo — 1 Cake thuộc 1 Category (cột cakes.category_id)
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
        // Laravel tự đoán FK là 'category_id'. Nếu tên khác:
        // return $this->belongsTo(Category::class, 'cat_id');
    }

    // belongsToMany — many-to-many qua bảng pivot 'cake_tag'
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
        // Laravel tự đoán pivot: 'cake_tag' (2 tên singular ghép, sort alphabetical)
    }
}

// app/Models/Category.php
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class Category extends Model
{
    // hasMany — 1 Category có nhiều Cake
    public function cakes(): HasMany
    {
        return $this->hasMany(Cake::class);
    }
}`,
				bRelationsUsage: `<?php
// belongsTo — truy cập như property (Laravel lazy-query DB khi cần)
$cake = Cake::find(5);
echo $cake->category->name;              // "Bánh kem"
echo $cake->category?->name ?? 'Chưa phân loại';   // null-safe nếu category_id NULL

// hasMany — trả về Collection
$category = Category::find(1);
foreach ($category->cakes as $p) {
    echo $p->name;
}
echo $category->cakes->count();

// belongsToMany — cũng Collection, kèm sẵn quyền quản lý pivot
$cake = Cake::find(5);
foreach ($cake->tags as $tag) {
    echo $tag->name;
}

// Ghép / gỡ / đồng bộ pivot
$cake->tags()->attach([1, 2, 3]);         // thêm 3 tag vào cake_tag
$cake->tags()->detach(2);                 // gỡ tag id=2
$cake->tags()->sync([1, 3, 5]);           // set chính xác — xoá cái ngoài list, thêm cái thiếu

// Filter qua relation — chỉ lấy bánh thuộc danh mục "Bánh kem"
$cakes = Cake::whereHas('category', fn($q) => $q->where('name', 'Bánh kem'))->get();`,
				bAccessorMutator: `<?php
// app/Models/Cake.php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Casts\\Attribute;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Support\\Str;

class Cake extends Model
{
    protected $fillable = ['name', 'description', 'price', 'category_id'];

    /**
     * Accessor: field ảo — $cake->price_formatted → "25.000đ"
     * Không tồn tại trong DB, được tính khi truy cập.
     */
    protected function priceFormatted(): Attribute
    {
        return Attribute::make(
            get: fn(): string => number_format($this->price, 0, ',', '.') . 'đ',
        );
    }

    /**
     * Mutator: chuẩn hoá 'name' trước khi lưu vào DB.
     * Setter chạy MỖI KHI $cake->name = ... hoặc create/update có 'name'.
     */
    protected function name(): Attribute
    {
        return Attribute::make(
            set: fn(string $value): string => trim($value),
        );
    }

    /**
     * Combo — vừa accessor vừa mutator trên cùng field 'slug':
     * - Đọc: viết hoa chữ cái đầu
     * - Ghi: lowercase + strip dấu
     */
    protected function slug(): Attribute
    {
        return Attribute::make(
            get: fn(?string $value) => ucfirst($value ?? ''),
            set: fn(string $value) => Str::slug($value),
        );
    }
}

// Cách dùng
$cake = Cake::find(5);
echo $cake->price_formatted;              // "25.000đ"

$cake->name = '  Bánh mì bơ  ';           // → mutator trim → 'Bánh mì bơ'
$cake->save();`,
				bN1Bad: `<?php
// ❌ N+1 problem — 101 queries cho 100 cakes
$cakes = Cake::all();                  // Query 1: SELECT * FROM cakes

foreach ($cakes as $cake) {
    echo $cake->category->name;           // Query 2..101: mỗi lần SELECT * FROM categories WHERE id=?
}`,
				bN1Good: `<?php
// ✓ Eager loading — 2 queries bất kể có bao nhiêu cakes
$cakes = Cake::with('category')->get();
// Query 1: SELECT * FROM cakes
// Query 2: SELECT * FROM categories WHERE id IN (1, 2, 3, ...)

foreach ($cakes as $cake) {
    echo $cake->category->name;           // Không thêm query — data đã có sẵn
}

// Nhiều relation cùng lúc
Cake::with(['category', 'tags'])->get();

// Nested — Cake → Category → parent Category
Cake::with('category.parent')->get();

// Có điều kiện eager load
Cake::with(['tags' => fn($q) => $q->where('is_visible', true)])->get();`,
				pagePagination: {
					next: {
						title: 'Trở về danh sách Doc',
						link: '/php/documentation',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/php/documentation',
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
