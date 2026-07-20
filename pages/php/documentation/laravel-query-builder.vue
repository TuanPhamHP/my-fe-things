<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Query Builder — SQL kiểu fluent trong Laravel" addOnClass="text-left" markedAs="qb-intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Query Builder (QB)</b> là API fluent trong Laravel giúp bạn viết SQL bằng cú pháp PHP — chain method
					liên tiếp, không cần ghép chuỗi <FilePath>SELECT ... WHERE ...</FilePath> tay. Truy cập qua facade
					<FilePath>DB</FilePath>, kết quả trả về <b>Collection</b> hoặc <b>stdClass</b> (không phải Model như Eloquent).
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">🤯 Raw SQL — dễ dính SQL injection</p>
						<FilePath>DB::select("SELECT * FROM cakes WHERE price &gt; {{ '$' }}min")</FilePath>
					</div>
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">😎 Query Builder — an toàn, dễ đọc</p>
						<FilePath>DB::table('cakes')-&gt;where('price', '&gt;', 20000)-&gt;get()</FilePath>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					QB tự bind param → chặn SQL injection mặc định. Bài này đi qua 9 nhóm method bạn dùng gần như mỗi ngày.
				</p>

				<PageHeading text="1. DB facade — điểm bắt đầu mọi query" addOnClass="text-left mt-5" markedAs="qb-db-facade" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mọi query đều bắt đầu bằng <FilePath>DB::table('tên_bảng')</FilePath> — trả về đối tượng
					<FilePath>Illuminate\Database\Query\Builder</FilePath>. Có thể chain nhiều method rồi kết thúc bằng
					<FilePath>get()</FilePath>, <FilePath>first()</FilePath>, <FilePath>count()</FilePath>...
				</p>
				<ClientOnly>
					<VCodeBlock :code="bDbFacade" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Ghi nhớ:</b> QB trả <FilePath>stdClass</FilePath> — truy cập field bằng
						<FilePath>$user->name</FilePath>. Nếu muốn model Eloquent (có accessor, relation...) thì dùng
						<FilePath>Cake::query()</FilePath> thay vì <FilePath>DB::table('cakes')</FilePath>.
					</p>
				</div>

				<PageHeading text="2. SELECT — lấy dữ liệu ra" addOnClass="text-left mt-5" markedAs="qb-select" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					6 cách lấy dữ liệu — chọn method đúng để tránh load thừa row:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bSelect" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Method</th>
								<th class="px-5 py-3">Trả về</th>
								<th class="px-5 py-3">Khi dùng</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>get()</FilePath></th>
								<td class="px-5 py-4">Collection&lt;stdClass&gt;</td>
								<td class="px-5 py-4">Nhiều bản ghi</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>first()</FilePath></th>
								<td class="px-5 py-4">stdClass | null</td>
								<td class="px-5 py-4">Bản ghi đầu tiên</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>find($id)</FilePath></th>
								<td class="px-5 py-4">stdClass | null</td>
								<td class="px-5 py-4">Tra theo primary key</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>value('col')</FilePath></th>
								<td class="px-5 py-4">Scalar</td>
								<td class="px-5 py-4">Chỉ 1 giá trị 1 cột (VD email của user id=5)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>pluck('col')</FilePath></th>
								<td class="px-5 py-4">Collection&lt;scalar&gt;</td>
								<td class="px-5 py-4">Danh sách 1 cột (VD tất cả email)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white"><FilePath>chunk(N, fn)</FilePath></th>
								<td class="px-5 py-4">void (callback)</td>
								<td class="px-5 py-4">Duyệt bảng cực lớn không tràn RAM</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="3. WHERE — điều kiện lọc" addOnClass="text-left mt-5" markedAs="qb-where" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nối nhiều <FilePath>where</FilePath> = AND. Đổi thành <FilePath>orWhere</FilePath> = OR. Còn có các biến thể
					cho từng dạng điều kiện phổ biến:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bWhere" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Precedence trap:</b> chain <FilePath>where().where().orWhere()</FilePath> sẽ ra
						<FilePath>(A AND B) OR C</FilePath> — thường KHÔNG phải ý bạn. Nếu cần
						<FilePath>A AND (B OR C)</FilePath>, group lại bằng closure:
						<FilePath>->where('a', 1)->where(fn($q) => $q->where('b', 2)->orWhere('c', 3))</FilePath>.
					</p>
				</div>

				<PageHeading text="4. ORDER, LIMIT, PAGINATION" addOnClass="text-left mt-5" markedAs="qb-order" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Sắp xếp và phân trang — pagination Laravel tự đọc <FilePath>?page=</FilePath> từ URL, không cần code thêm:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bOrderLimit" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="5. Aggregate — count/sum/avg/max/min" addOnClass="text-left mt-5" markedAs="qb-aggregate" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					5 hàm gộp thường dùng để làm dashboard, report. Chain sau <FilePath>where()</FilePath> nếu cần lọc trước:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bAggregate" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Mẹo:</b> dùng <FilePath>exists()</FilePath> thay vì <FilePath>count() > 0</FilePath> — nhanh hơn vì
						DB dừng ngay khi thấy row đầu tiên thay vì đếm hết bảng.
					</p>
				</div>

				<PageHeading text="6. INSERT / UPDATE / DELETE" addOnClass="text-left mt-5" markedAs="qb-write" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ghi dữ liệu — insert 1 hoặc nhiều row, update theo where, delete có/không điều kiện. Kể cả
					<FilePath>upsert</FilePath> để "insert nếu chưa có, update nếu đã có":
				</p>
				<ClientOnly>
					<VCodeBlock :code="bWrite" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Cẩn thận:</b> <FilePath>DB::table('cakes')->delete()</FilePath> KHÔNG có
						<FilePath>where()</FilePath> = xoá TẤT CẢ. Luôn <FilePath>->where(...)</FilePath> trước khi
						<FilePath>delete()</FilePath> hay <FilePath>update()</FilePath> — không có Model event nào bảo vệ ở QB.
					</p>
				</div>

				<PageHeading text="7. JOIN — nối bảng" addOnClass="text-left mt-5" markedAs="qb-join" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					QB là công cụ tốt nhất khi bạn cần <b>JOIN nhiều bảng lấy đúng cột cần</b> — Eloquent quen lấy nguyên bảng
					qua relation, không phù hợp cho report kiểu này. 3 loại join phổ biến:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bJoin" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="8. GROUP BY, HAVING, RAW" addOnClass="text-left mt-5" markedAs="qb-group" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Gộp nhóm để tính thống kê. <FilePath>having</FilePath> lọc SAU khi group (khác
					<FilePath>where</FilePath> lọc TRƯỚC). Khi cần expression phức tạp mà QB không có sẵn — dùng
					<FilePath>selectRaw / whereRaw / DB::raw()</FilePath>:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bGroup" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Raw = nguy hiểm:</b> chuỗi trong <FilePath>whereRaw</FilePath> / <FilePath>DB::raw()</FilePath>
						KHÔNG được auto-escape. Nếu có biến từ user, BẮT BUỘC pass qua param bindings:
						<FilePath>whereRaw('price &gt; ?', [$min])</FilePath>, không được nhét thẳng
						<FilePath>whereRaw("price &gt; $min")</FilePath>.
					</p>
				</div>

				<PageHeading text="9. Query Builder vs Eloquent" addOnClass="text-left mt-5" markedAs="qb-vs-eloquent" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					2 khái niệm hay bị nhầm vì tên method giống nhau (<FilePath>where</FilePath>,
					<FilePath>first</FilePath>, <FilePath>get</FilePath>...). Thực ra Eloquent <b>được build trên</b> Query
					Builder — mọi method QB đều dùng được với Eloquent. Khác biệt chính:
				</p>
				<ComparisingTable :labels="['Tính năng', 'Query Builder', 'Eloquent']" :operators="cpre" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Chọn khi nào:</b> mặc định dùng Eloquent (cho code sạch, có relation, event, accessor). Chỉ dùng QB
					khi cần: (1) báo cáo/report JOIN phức tạp không map với Model, (2) bulk insert/update hàng chục ngàn row
					(nhanh hơn 5-10 lần), (3) không có Model tương ứng (bảng pivot đơn giản, bảng log tạm).
				</p>

				<PageHeading text="10. Cheat sheet" addOnClass="text-left mt-5" markedAs="qb-cheat" :lvl="1" />
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<ul class="list-disc pl-5 space-y-2 text-slate-900 dark:text-white text-sm">
						<li>
							<b>Bắt đầu:</b> <FilePath>DB::table('cakes')</FilePath> → chain →
							<FilePath>get() / first() / find() / value() / pluck()</FilePath>.
						</li>
						<li>
							<b>Where:</b> <FilePath>where / orWhere / whereIn / whereBetween / whereNull / whereHas</FilePath>.
							Group precedence bằng closure: <FilePath>->where(fn($q) => $q->where(...)->orWhere(...))</FilePath>.
						</li>
						<li>
							<b>Sort/paginate:</b> <FilePath>orderBy('col', 'desc') / latest() / oldest() / limit(N) /
							paginate(15)</FilePath>.
						</li>
						<li>
							<b>Aggregate:</b> <FilePath>count / sum / avg / max / min / exists</FilePath> (dùng
							<FilePath>exists</FilePath> thay <FilePath>count &gt; 0</FilePath>).
						</li>
						<li>
							<b>Ghi:</b> <FilePath>insert / insertGetId / update / upsert / delete</FilePath> — luôn
							<FilePath>where</FilePath> trước khi update/delete.
						</li>
						<li>
							<b>Join:</b> <FilePath>join / leftJoin / rightJoin</FilePath> — chỉ định cột bằng
							<FilePath>select('tableA.col', 'tableB.col as alias')</FilePath> để tránh trùng.
						</li>
						<li>
							<b>Debug SQL:</b> <FilePath>->toSql()</FilePath> xem câu SQL, <FilePath>->dd()</FilePath> dump &amp; die,
							<FilePath>->dump()</FilePath> dump &amp; tiếp tục.
						</li>
						<li>
							<b>Transaction:</b>
							<FilePath>DB::transaction(fn() => { ... })</FilePath> — tự rollback nếu throw exception.
						</li>
						<li>
							<b>Doc chính thức:</b>
							<a href="https://laravel.com/docs/11.x/queries" target="_blank" rel="noreferrer"
								class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500">
								laravel.com/docs/queries
							</a>
							— toàn bộ API.
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tiếp theo chúng mình sẽ đi qua <b>Controller</b> — nơi gọi QB/Eloquent, xử lý request và trả response.
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
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				bDbFacade: `<?php
use Illuminate\\Support\\Facades\\DB;

// Lấy tất cả bánh
$cakes = DB::table('cakes')->get();
// SELECT * FROM cakes
// => Collection [ {id:1, name:'Bánh su kem', ...}, {id:2, name:'Bánh mì bơ', ...}, ... ]

// Truy cập kết quả
foreach ($cakes as $cake) {
    echo $cake->name;                     // stdClass — dùng ->
}

// Bảng khác connection (VD DB thứ 2 khai báo ở config/database.php)
DB::connection('mysql_reports')->table('orders')->get();

// Đổi sang Eloquent — cùng cú pháp chain nhưng trả về Model
Cake::query()->where('is_active', true)->get();  // Collection<Cake>`,
				bSelect: `<?php
// ---- get() — nhiều bản ghi ----
$cakes = DB::table('cakes')->get();                       // Collection tất cả row
$cakes = DB::table('cakes')->select('id', 'name', 'price')->get();  // Chỉ 3 cột

// ---- first() — bản ghi đầu tiên ----
$cake = DB::table('cakes')->where('name', 'Bánh su kem')->first();
// null nếu không tìm thấy

// ---- find(id) — theo primary key ----
$cake = DB::table('cakes')->find(5);         // WHERE id = 5 LIMIT 1

// ---- value() — 1 giá trị của 1 cột ----
$name = DB::table('cakes')->where('id', 5)->value('name');
// 'Bánh su kem' — nhanh hơn ->first()->name vì DB chỉ trả về 1 cột

// ---- pluck() — list 1 cột ----
$names = DB::table('cakes')->pluck('name');
// Collection ['Bánh su kem', 'Bánh mì bơ', 'Bánh flan', ...]

$map = DB::table('cakes')->pluck('name', 'id');
// Collection [1 => 'Bánh su kem', 2 => 'Bánh mì bơ'] — key-value map

// ---- chunk() — duyệt bảng lớn không load hết vào RAM ----
DB::table('cakes')->orderBy('id')->chunk(500, function ($cakes) {
    foreach ($cakes as $cake) {
        // xử lý từng batch 500 rows
    }
});
// Dùng cho migration data, xuất báo cáo, cleanup...`,
				bWhere: `<?php
// ---- Where cơ bản ----
DB::table('cakes')->where('price', '>', 20_000)->get();
DB::table('cakes')->where('is_active', true)->get();             // = 1

// ---- Chain AND / OR ----
DB::table('cakes')
    ->where('category_id', 1)
    ->where('is_active', true)
    ->get();                                                     // AND

DB::table('cakes')
    ->where('category_id', 1)
    ->orWhere('category_id', 2)
    ->get();                                                     // OR

// ---- whereIn / whereNotIn ----
DB::table('cakes')->whereIn('id', [1, 2, 3])->get();
DB::table('cakes')->whereNotIn('category_id', [4, 5])->get();

// ---- whereBetween ----
DB::table('cakes')->whereBetween('price', [10_000, 50_000])->get();

// ---- whereNull / whereNotNull ----
DB::table('cakes')->whereNull('category_id')->get();             // bánh chưa phân loại
DB::table('cakes')->whereNotNull('description')->get();          // bánh đã có mô tả

// ---- whereDate / whereMonth / whereYear ----
DB::table('orders')->whereDate('created_at', '2026-07-20')->get();
DB::table('orders')->whereMonth('created_at', 7)->get();

// ---- LIKE — tìm kiếm ----
DB::table('cakes')->where('name', 'LIKE', "%{$keyword}%")->get();

// ---- Group điều kiện — quan trọng để đúng precedence ----
DB::table('cakes')
    ->where('is_active', true)
    ->where(function ($q) {
        $q->where('category_id', 1)->orWhere('category_id', 2);
    })
    ->get();
// SQL: WHERE is_active = 1 AND (category_id = 1 OR category_id = 2)`,
				bOrderLimit: `<?php
// ---- Sắp xếp ----
DB::table('cakes')->orderBy('price', 'desc')->get();
DB::table('cakes')->orderBy('name')->get();                      // asc mặc định
DB::table('cakes')->orderBy('category_id')->orderBy('price', 'desc')->get();

// Shortcut theo created_at
DB::table('cakes')->latest()->get();                             // = orderBy('created_at', 'desc')
DB::table('cakes')->oldest()->first();                           // = orderBy('created_at', 'asc')

// ---- Limit + Offset ----
DB::table('cakes')->limit(10)->get();                            // 10 items đầu
DB::table('cakes')->limit(10)->offset(20)->get();                // skip 20, lấy 10
DB::table('cakes')->take(5)->skip(0)->get();                     // alias

// ---- Pagination — có sẵn UI links ----
$cakes = DB::table('cakes')->paginate(15);
// LengthAwarePaginator: 15 items/page, tự đọc ?page= từ URL
// Có count total → biết tổng số trang

// Ở blade view:
// @foreach ($cakes as $cake) ... @endforeach
// {{ $cakes->links() }}   ← render UI phân trang

// Nếu bảng cực lớn — dùng simplePaginate (không đếm total, nhanh hơn nhiều)
$rows = DB::table('logs')->simplePaginate(15);

// Cursor pagination — dùng cho infinite scroll, stable khi data đổi
$rows = DB::table('cakes')->orderBy('id')->cursorPaginate(15);`,
				bAggregate: `<?php
// ---- count() ----
$total = DB::table('cakes')->count();
$active = DB::table('cakes')->where('is_active', true)->count();

// ---- sum / avg / max / min ----
$revenue = DB::table('orders')->where('status', 'paid')->sum('total');
$avgPrice = DB::table('cakes')->avg('price');
$maxPrice = DB::table('cakes')->max('price');
$minPrice = DB::table('cakes')->where('category_id', 1)->min('price');

// ---- exists / doesntExist — check tồn tại ----
if (DB::table('cakes')->where('name', 'Bánh su kem')->exists()) {
    // Bánh này đã có trong DB
}
// Nhanh hơn count() > 0 vì DB có thể thoát sớm khi thấy 1 row.

if (DB::table('cakes')->where('category_id', 5)->doesntExist()) {
    // Chưa có bánh nào thuộc danh mục này
}`,
				bWrite: `<?php
// ---- INSERT 1 row ----
DB::table('cakes')->insert([
    'name'        => 'Bánh su kem',
    'price'       => 25000,
    'category_id' => 1,
    'created_at'  => now(),
    'updated_at'  => now(),
]);
// LƯU Ý: QB KHÔNG tự set timestamps như Eloquent — phải tự thêm.

// ---- INSERT nhiều row 1 lượt ----
DB::table('cakes')->insert([
    ['name' => 'Bánh mì bơ',       'price' => 15000,  'category_id' => 2],
    ['name' => 'Bánh flan caramel', 'price' => 20000,  'category_id' => 3],
    ['name' => 'Bánh kem dâu',     'price' => 250000, 'category_id' => 1],
]);

// ---- INSERT + lấy id vừa tạo ----
$id = DB::table('cakes')->insertGetId([
    'name' => 'Bánh tiramisu', 'price' => 180000, 'category_id' => 1,
]);

// ---- UPDATE ----
DB::table('cakes')
    ->where('id', 5)
    ->update(['price' => 30000, 'updated_at' => now()]);

// Trả về số row bị ảnh hưởng — dùng để biết có match không
$affected = DB::table('cakes')
    ->where('category_id', 1)
    ->update(['is_active' => false]);

// Increment / decrement — atomic
DB::table('cakes')->where('id', 5)->increment('stock');               // stock += 1
DB::table('cakes')->where('id', 5)->increment('stock', 10);           // nhập kho 10 cái
DB::table('cakes')->where('id', 5)->decrement('stock', 3);            // bán 3 cái

// ---- UPSERT — insert nếu chưa có, update nếu đã có ----
DB::table('cakes')->upsert(
    [
        ['name' => 'Bánh su kem', 'category_id' => 1, 'price' => 25000],
        ['name' => 'Bánh mì bơ',  'category_id' => 2, 'price' => 15000],
    ],
    ['name'],                           // unique columns để check tồn tại
    ['price']                           // cột cần update nếu đã tồn tại
);

// ---- DELETE ----
DB::table('cakes')->where('id', 5)->delete();
DB::table('logs')->where('created_at', '<', now()->subMonths(3))->delete();
// ⚠️ ->delete() không where() = XOÁ TẤT CẢ. Luôn where trước!

// TRUNCATE — xoá sạch + reset auto_increment (không thể rollback trong transaction)
DB::table('cache')->truncate();`,
				bJoin: `<?php
// ---- INNER JOIN — chỉ lấy row match cả 2 bảng ----
$rows = DB::table('cakes')
    ->join('categories', 'cakes.category_id', '=', 'categories.id')
    ->select('cakes.id', 'cakes.name', 'categories.name as category_name')
    ->get();
// SQL: SELECT ... FROM cakes JOIN categories ON cakes.category_id = categories.id

// ---- LEFT JOIN — lấy hết bảng trái, phải NULL nếu không match ----
$rows = DB::table('cakes')
    ->leftJoin('order_items', 'cakes.id', '=', 'order_items.cake_id')
    ->select('cakes.name', DB::raw('COALESCE(SUM(order_items.quantity), 0) as sold_count'))
    ->groupBy('cakes.id', 'cakes.name')
    ->get();
// Kết quả: cake chưa được bán vẫn có, với sold_count = 0

// ---- JOIN nhiều bảng ----
DB::table('order_items')
    ->join('orders', 'order_items.order_id', '=', 'orders.id')
    ->join('cakes',  'order_items.cake_id',  '=', 'cakes.id')
    ->join('users',  'orders.user_id',       '=', 'users.id')
    ->select(
        'users.name as customer',
        'cakes.name as cake',
        'order_items.quantity',
        'order_items.price'
    )
    ->where('orders.status', 'paid')
    ->get();

// ---- JOIN có nhiều điều kiện — dùng closure ----
DB::table('cakes')
    ->join('cake_tag', function ($join) {
        $join->on('cakes.id', '=', 'cake_tag.cake_id')
             ->where('cake_tag.tag_id', 1);        // chỉ lấy cake có tag id=1
    })
    ->get();

// ---- Subquery — bảng con làm nguồn dữ liệu ----
$topSelling = DB::table('order_items')
    ->select('cake_id', DB::raw('SUM(quantity) as total_sold'))
    ->groupBy('cake_id');

DB::table('cakes')
    ->joinSub($topSelling, 'ts', function ($join) {
        $join->on('cakes.id', '=', 'ts.cake_id');
    })
    ->select('cakes.name', 'ts.total_sold')
    ->orderByDesc('ts.total_sold')
    ->get();`,
				bGroup: `<?php
// ---- GROUP BY + HAVING ----
DB::table('orders')
    ->select('user_id', DB::raw('SUM(total) as total_spent'))
    ->groupBy('user_id')
    ->having('total_spent', '>', 1_000_000)      // lọc SAU khi group — chi > 1M
    ->orderByDesc('total_spent')
    ->get();
// SQL: SELECT user_id, SUM(total) as total_spent FROM orders
//      GROUP BY user_id HAVING total_spent > 1000000 ORDER BY total_spent DESC

// ---- selectRaw — SQL expression trong SELECT ----
DB::table('orders')
    ->selectRaw('YEAR(created_at) as year, SUM(total) as revenue')
    ->groupBy('year')
    ->orderBy('year')
    ->get();

// ---- whereRaw — điều kiện phức tạp ----
DB::table('cakes')
    ->whereRaw('price * stock > ?', [10_000_000])  // giá trị tồn kho > 10M
    ->get();
// ✓ Dùng ? + bindings — AN TOÀN với SQL injection

// ❌ NGUY HIỂM — nhét biến thẳng vào chuỗi
// DB::table('cakes')->whereRaw("price > {$userInput}")->get();

// ---- DB::raw() — expression trong bất cứ đâu ----
DB::table('cakes')
    ->select('name', DB::raw('LOWER(name) as name_lower'))
    ->where('is_active', true)
    ->get();

// ---- Transaction — atomic ----
DB::transaction(function () {
    // Bán 1 chiếc bánh: trừ stock + tạo order
    DB::table('cakes')->where('id', 5)->decrement('stock', 1);
    DB::table('orders')->insert([
        'user_id'    => 1,
        'total'      => 25000,
        'status'     => 'paid',
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    // Nếu throw exception ở đây → cả 2 lệnh trên rollback
});

// Retry nếu deadlock — tham số thứ 2
DB::transaction(function () { /* ... */ }, attempts: 3);`,
				cpre: [
					{ id: 0, feature: 'Viết SQL dễ, chain method', first: '✅', second: '✅' },
					{ id: 1, feature: 'Trả về Model object (Cake, Category...)', first: '❌ stdClass', second: '✅ Model' },
					{ id: 2, feature: 'Truy cập relation ($cake->category)', first: '❌', second: '✅' },
					{ id: 3, feature: 'Accessor / Mutator / Cast', first: '❌', second: '✅' },
					{ id: 4, feature: 'Tự set timestamps, softDeletes', first: '❌ (phải tự set)', second: '✅' },
					{ id: 5, feature: 'Model events (creating, updating...)', first: '❌', second: '✅' },
					{ id: 6, feature: 'Tốc độ với bulk insert/update', first: '✅ nhanh hơn 5-10x', second: '❌ chậm hơn' },
					{ id: 7, feature: 'JOIN nhiều bảng, report phức tạp', first: '✅ linh hoạt', second: '⚠️ hơi ngược cú pháp' },
				],
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-20' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
