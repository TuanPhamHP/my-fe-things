<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading
					text="Entity thứ 2, Quan hệ &amp; Accessors / Mutators"
					addOnClass="text-left"
					markedAs="php-intro"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở
					<a
						href="/php/documentation/php-and-database-p3"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>phần 3</a
					>
					và
					<a
						href="/php/documentation/php-and-database-p4"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>phần 4</a
					>
					chúng ta đã có 1 web app CRUD sản phẩm hoàn chỉnh. Bây giờ mở rộng schema: thêm bảng
					<FilePath>categories</FilePath>, mỗi sản phẩm thuộc 1 danh mục. Cùng lúc, tổ chức lại folder
					<FilePath>App/Database</FilePath> theo chuẩn Laravel (có Migrations / Seeders).
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Nội dung chính:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Tổ chức <b>Migrations</b> — mỗi thay đổi schema là 1 class trong
						<FilePath>App/Database/Migrations</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Tạo <b>CategoryModel</b> — Entity thứ 2, tận dụng lại pattern từ ProductModel.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Relations method</b> — <FilePath>belongsTo</FilePath> (product → category) và
						<FilePath>hasMany</FilePath> (category → products).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Accessors &amp; Mutators</b> — biến đổi dữ liệu khi ghi (mutator) và khi đọc (accessor).
					</li>
				</ul>

				<PageHeading text="Cấu trúc thư mục mở rộng" addOnClass="text-left mt-5" markedAs="folder-tree" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Sau bài này, dự án sẽ nhìn như sau:</p>
				<VCodeBlock :code="bTree" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					2 folder mới trong <FilePath>App/Database</FilePath>:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>Migrations/</FilePath> — mỗi file là 1 class thay đổi schema (tạo bảng, thêm cột…).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>Seeders/</FilePath> — nạp dữ liệu mẫu để test (bonus ở phần luyện tập).
					</li>
				</ul>

				<PageHeading text="1. Migrations là gì?" addOnClass="text-left mt-5" markedAs="what-migration" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở p1 chúng ta chạy trực tiếp 1 câu <FilePath>CREATE TABLE</FilePath> trong PHP. Cách này chạy được, nhưng:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Không biết lúc nào đã chạy, ai đã chạy — không có "lịch sử schema".
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Khi bạn <FilePath>git pull</FilePath> code mới của đồng đội có bảng mới — bạn không biết phải chạy gì.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Không có cách rollback khi migration lỗi hoặc muốn quay về schema cũ.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Migration</b> giải quyết bằng cách: mỗi thay đổi schema = 1 file. File có method
					<FilePath>up()</FilePath> (áp dụng thay đổi) và <FilePath>down()</FilePath> (undo). Runner script chạy tất cả
					theo thứ tự.
				</p>

				<PageHeading
					text="2. Migration cho bảng categories"
					addOnClass="text-left mt-5"
					markedAs="migration-categories"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo file <FilePath>App/Database/Migrations/CreateCategoriesTable.php</FilePath>:
				</p>
				<VCodeBlock :code="bMigCategories" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bảng có 4 cột: <FilePath>id</FilePath> (khoá chính), <FilePath>name</FilePath>,
					<FilePath>slug</FilePath> (URL-friendly, unique), <FilePath>created_at</FilePath>. Method
					<FilePath>down()</FilePath> làm ngược lại — xoá bảng — để khi cần bạn có thể "quay ngược" migration.
				</p>

				<PageHeading
					text="3. Migration link products → categories bằng foreign key"
					addOnClass="text-left mt-5"
					markedAs="migration-fk"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nhớ lại
					<a
						href="/php/documentation/php-and-database-p1"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>p1</a
					>
					— bảng <FilePath>products</FilePath> đã tạo sẵn cột <FilePath>category_id INT</FilePath> (nullable), và
					<a
						href="/php/documentation/php-and-database-p2"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>p2</a
					>
					đã dùng cột đó trong CRUD (<FilePath>$fillable</FilePath>, <FilePath>INSERT</FilePath>,
					<FilePath>UPDATE</FilePath>). Cái <b>còn thiếu</b> chỉ là ràng buộc khoá ngoại — thiếu FK thì DB không đảm bảo
					được <FilePath>category_id</FilePath> trỏ tới 1 category có thật. Tạo file
					<FilePath>App/Database/Migrations/AddCategoryForeignKeyToProductsTable.php</FilePath>:
				</p>
				<VCodeBlock :code="bMigFk" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì cột đã sẵn, migration này chỉ thêm/xoá 1 ràng buộc:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>ADD CONSTRAINT ... FOREIGN KEY ... ON DELETE SET NULL</FilePath> — nếu xoá 1 category, các product
						thuộc nó có <FilePath>category_id</FilePath> tự chuyển về <FilePath>NULL</FilePath> (thay vì bị xoá theo như
						<FilePath>ON DELETE CASCADE</FilePath>). Cột đã cho phép NULL từ p1 nên đúng cặp.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>down()</FilePath> chỉ <FilePath>DROP FOREIGN KEY</FilePath> — <b>không</b> drop column, vì cột
						<FilePath>category_id</FilePath> thuộc về migration khác (tạo bảng <FilePath>products</FilePath> ở p1).
						Nguyên tắc: <b>mỗi migration chỉ rollback đúng cái mình đã đổi</b>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Trước khi chạy migration này, đảm bảo mọi <FilePath>category_id</FilePath> hiện có trong
						<FilePath>products</FilePath> đều tồn tại trong <FilePath>categories</FilePath> (hoặc là
						<FilePath>NULL</FilePath>) — nếu không, <FilePath>ADD CONSTRAINT</FilePath> sẽ fail vì có row vi phạm.
					</li>
				</ul>

				<PageHeading
					text="4. Runner — chạy migration bằng CLI"
					addOnClass="text-left mt-5"
					markedAs="migration-runner"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Tạo file <FilePath>migrate.php</FilePath> ở root:</p>
				<VCodeBlock :code="bMigRun" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Chạy:</p>
				<FakeTerminalUI textCoppy="php migrate.php" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Output mong đợi:</p>
				<VCodeBlock :code="bMigOutput" highlightjs lang="bash" theme="atom-one-dark" />
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm">
						<b>Thực tế production:</b> nên lưu tên migration đã chạy vào bảng <FilePath>migrations</FilePath> trong DB,
						để lần chạy sau bỏ qua các cái đã done. Laravel và các framework khác đều làm vậy. Ở bài luyện tập sẽ nâng
						cấp thêm.
					</p>
				</div>

				<PageHeading
					text="5. CategoryModel — Entity thứ 2 (Active Record)"
					addOnClass="text-left mt-5"
					markedAs="category-model"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo <FilePath>App/Models/CategoryModel.php</FilePath>. Ngoài cấu trúc quen thuộc từ
					<FilePath>ProductModel</FilePath> (<FilePath>$table</FilePath>, <FilePath>$fillable</FilePath>,
					<FilePath>create()</FilePath>), lần này ta nâng cấp thêm 2 chi tiết để phần <b>Relations</b> ngay bên dưới gọi
					được kiểu <FilePath>$category->products()</FilePath> — sạch như Eloquent:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Thêm <FilePath>$attributes</FilePath> + factory <FilePath>hydrate()</FilePath> —
						<FilePath>find()</FilePath> trả về <b>instance đã ngậm data</b>, không phải mảng rời như p4.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Magic method <FilePath>__get()</FilePath> — expose <FilePath>$attributes</FilePath> ra ngoài dưới dạng
						property (<FilePath>$category->name</FilePath>). Đây chính là cách Eloquent làm — bên trong Model attributes
						nằm trong mảng, bên ngoài truy cập như property.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trước khi xem code, giải thích nhanh 3 khái niệm mới — sẽ xuất hiện đi xuất hiện lại từ đây trở đi:
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800 space-y-4">
					<div>
						<p class="text-slate-900 dark:text-white leading-8">
							<b><FilePath>$attributes</FilePath> — kho data nội bộ:</b> 1 mảng <FilePath>protected</FilePath> giữ
							toàn bộ data của 1 record (mọi cột của 1 row DB). <b>Vì sao không declare mỗi cột thành 1 property
							riêng?</b>
						</p>
						<ul class="pl-10 mt-2">
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								DB thêm cột không cần sửa Model — mảng linh hoạt, property cứng.
							</li>
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								Mutator/Accessor (section 7) cần 1 mảng duy nhất để xen vào giữa "data thô" và "API bên ngoài" —
								đây chính là <FilePath>$attributes</FilePath>.
							</li>
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								<FilePath>toArray()</FilePath>, mass assignment protection, dirty tracking đều dễ khi có 1 mảng
								thống nhất. Laravel Eloquent nội bộ cũng có <FilePath>protected $attributes = []</FilePath> y hệt.
							</li>
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								PHP 8.2+ đã <b>deprecate dynamic property</b> — nếu không có
								<FilePath>$attributes</FilePath>, phải bọc class bằng <FilePath>#[AllowDynamicProperties]</FilePath>,
								anti-pattern.
							</li>
						</ul>
					</div>
					<div>
						<p class="text-slate-900 dark:text-white leading-8">
							<b><FilePath>hydrate()</FilePath> — đổ data vào instance rỗng:</b> từ tiếng Anh
							<i>hydrate</i> = "cấp nước". Ẩn dụ: row từ DB là "data khô", instance mới tạo là "cốc rỗng" —
							<FilePath>hydrate($row)</FilePath> đổ data khô vào cốc, trả về instance đã ngậm data, sẵn sàng dùng.
						</p>
						<ul class="pl-10 mt-2">
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								Là <FilePath>static</FilePath> — vì lúc gọi <b>chưa có instance nào</b>, chưa có
								<FilePath>$this</FilePath>. Đây là factory chạy trước khi instance tồn tại.
							</li>
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								Là <FilePath>public</FilePath> — vì class khác cần gọi được. Ví dụ ở section 6,
								<FilePath>CategoryModel::products()</FilePath> gọi
								<FilePath>ProductModel::hydrate($row)</FilePath> để đóng gói mỗi row bên products thành
								<FilePath>ProductModel</FilePath>.
							</li>
							<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
								Trả về kiểu <FilePath>static</FilePath> (không phải <FilePath>self</FilePath>) — để khi subclass
								kế thừa, <FilePath>new static()</FilePath> tạo đúng subclass, không bị "khoá" về parent.
							</li>
						</ul>
					</div>
					<div>
						<p class="text-slate-900 dark:text-white leading-8">
							<b><FilePath>__get()</FilePath> — magic method PHP:</b> PHP tự động gọi khi ai đó đọc 1
							property <b>chưa declare</b> trên object. Ví dụ: <FilePath>$category->name</FilePath> — class không
							có property <FilePath>name</FilePath>, PHP fallback về <FilePath>__get('name')</FilePath>, ta trả về
							<FilePath>$this->attributes['name']</FilePath>. Kết quả: bên ngoài <b>dùng như property</b>, bên trong
							vẫn <b>lưu trong mảng</b> — đúng pattern Eloquent.
						</p>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Có 3 khái niệm này trong đầu rồi, đọc code bên dưới sẽ thấy rõ mạch:
				</p>
				<VCodeBlock :code="bCategoryModel" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở đây <FilePath>$fillable</FilePath> chỉ có <FilePath>name</FilePath> và <FilePath>slug</FilePath> — nhớ lại
					p2, <FilePath>$fillable</FilePath> giúp chống mass assignment: nếu ai đó gửi thêm
					<FilePath>is_root=1</FilePath>, field lạ sẽ bị lọc. Đây chính là pattern <b>Active Record</b>: 1 class vừa là
					query builder (<FilePath>find</FilePath>/<FilePath>read</FilePath>/<FilePath>create</FilePath>) vừa là "record
					object" (mỗi instance ngậm 1 row).
				</p>

				<PageHeading
					text="6. Relations — belongsTo &amp; hasMany"
					addOnClass="text-left mt-5"
					markedAs="relations"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">2 chiều quan hệ giữa Product và Category:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Từ phía</th>
								<th class="px-5 py-3">Kiểu quan hệ</th>
								<th class="px-5 py-3">Ý nghĩa</th>
								<th class="px-5 py-3">Method</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Product</th>
								<td class="px-5 py-4"><FilePath>belongsTo</FilePath></td>
								<td class="px-5 py-4">Mỗi Product thuộc <b>1</b> Category</td>
								<td class="px-5 py-4"><FilePath>$product->category()</FilePath> → 1 record</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Category</th>
								<td class="px-5 py-4"><FilePath>hasMany</FilePath></td>
								<td class="px-5 py-4">Mỗi Category có <b>nhiều</b> Products</td>
								<td class="px-5 py-4"><FilePath>$category->products()</FilePath> → mảng records</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading
					text="belongsTo — Product → Category"
					addOnClass="text-left mt-3"
					markedAs="relation-belongs"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Muốn gọi được kiểu <FilePath>$product->category()</FilePath> thì <FilePath>$product</FilePath> phải là 1
					<b>object</b> chứ không phải mảng — nghĩa là <FilePath>ProductModel</FilePath> từ p4 cũng cần refactor sang
					Active Record giống <FilePath>CategoryModel</FilePath> ở trên. Ba việc phải làm:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Thêm property <FilePath>$attributes</FilePath> + factory tĩnh <FilePath>hydrate()</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Đổi <FilePath>find()</FilePath> — trả về <FilePath>?static</FilePath> thay vì
						<FilePath>array|false</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Thêm magic method <FilePath>__get()</FilePath> — để View đọc field kiểu
						<FilePath>$product->product_name</FilePath> thay vì <FilePath>$product['product_name']</FilePath>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Xong 3 việc đó, ta gắn method <FilePath>category()</FilePath> — không tham số, tự đọc
					<FilePath>category_id</FilePath> từ chính instance:
				</p>
				<VCodeBlock :code="bRelBelongs" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cách dùng giờ đúng kiểu OOP — gọi method trực tiếp trên object, không cần "moi" id ra rồi truyền ngược lại vào
					model:
				</p>
				<VCodeBlock :code="bRelBelongsUsage" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading
					text="hasMany — Category → Products"
					addOnClass="text-left mt-3"
					markedAs="relation-has"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ngược lại, method <FilePath>products()</FilePath> trên <FilePath>CategoryModel</FilePath> cũng không tham số —
					tự đọc <FilePath>id</FilePath> của chính category instance, query bảng <FilePath>products</FilePath>, rồi
					<FilePath>hydrate()</FilePath> mỗi row thành 1 <FilePath>ProductModel</FilePath> instance:
				</p>
				<VCodeBlock :code="bRelHas" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>ORDER BY id DESC</FilePath> để mới nhất lên đầu — quy ước thường thấy khi list. Cả 2 method relation
					giờ nhìn cực kỳ giống Laravel Eloquent — chỉ khác là ở đây gọi có ngoặc
					(<FilePath>$product->category()</FilePath>) chứ chưa dùng property-style
					(<FilePath>$product->category</FilePath>) vì đó phải viết thêm <FilePath>__get()</FilePath>.
				</p>

				<PageHeading
					text="7. Accessors &amp; Mutators"
					addOnClass="text-left mt-5"
					markedAs="access-mutate"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					2 khái niệm đi cặp với nhau — cùng là "hook" để xen logic biến đổi vào giữa Model và DB. Cách cài đơn giản
					nhất: 2 method thường trong Model, gọi ở đúng thời điểm.
				</p>
				<div class="mt-3 p-3 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Ghi chú Laravel 11:</b> ở Laravel 11 thật, mutator/accessor được viết mỗi field 1 method dạng
						<FilePath>Attribute::make(get: ..., set: ...)</FilePath> — dùng closure và naming convention. Nâng cao hơn
						1 chút, học viên có thể tìm hiểu khi qua Laravel. Ở tutorial này giữ batch method cho dễ hình dung.
					</p>
				</div>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Tên</th>
								<th class="px-5 py-3">Khi nào chạy</th>
								<th class="px-5 py-3">Mục đích</th>
								<th class="px-5 py-3">Ví dụ</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Mutator</th>
								<td class="px-5 py-4">Trước khi <b>ghi</b> DB</td>
								<td class="px-5 py-4">Chuẩn hoá / biến đổi input</td>
								<td class="px-5 py-4">Trim tên, tự sinh slug, hash password</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Accessor</th>
								<td class="px-5 py-4">Sau khi <b>đọc</b> DB</td>
								<td class="px-5 py-4">Format / tính field ảo</td>
								<td class="px-5 py-4">Giá format có "đ", tên viết hoa đầu</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Cách nhớ:</b> Mutator = "đột biến" data trước khi vào DB. Accessor = "truy cập" data đã format sẵn khi lấy
					ra.
				</p>

				<PageHeading
					text="Mutator — trim tên trước khi lưu"
					addOnClass="text-left mt-3"
					markedAs="mutator-slug"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nếu user nhập <FilePath>" Điện thoại "</FilePath> (có khoảng trắng thừa), ta muốn tự động
					<FilePath>trim()</FilePath> trước khi lưu vào DB. Thêm 1 method <FilePath>mutate()</FilePath> vào
					<FilePath>CategoryModel</FilePath> — nó chỉ nhận <FilePath>$data</FilePath>, chuẩn hoá, trả về:
				</p>
				<VCodeBlock :code="bMutator" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong <FilePath>create()</FilePath> và <FilePath>update()</FilePath>, gọi
					<FilePath>$data = $this->mutate($data);</FilePath> ngay đầu — mọi input được chuẩn hoá trước khi build SQL.
					Muốn thêm rule mới (VD lowercase email, hash password), cứ thêm vào <FilePath>mutate()</FilePath> — 1 chỗ duy
					nhất, dễ đọc.
				</p>

				<PageHeading
					text="Accessor — thêm field ảo price_formatted"
					addOnClass="text-left mt-3"
					markedAs="accessor-price"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Muốn View chỉ cần in <FilePath>$product->price_formatted</FilePath> ra <FilePath>"1,500,000đ"</FilePath> mà
					không phải gọi <FilePath>number_format()</FilePath> mỗi chỗ. Thêm 1 method <FilePath>accessors()</FilePath>
					vào <FilePath>ProductModel</FilePath> — nó nhận row raw từ DB, thêm field ảo vào, trả về row đã "gia cố".
					Chạy nó trong <FilePath>find()</FilePath>/<FilePath>read()</FilePath> ngay trước khi
					<FilePath>hydrate()</FilePath>:
				</p>
				<VCodeBlock :code="bAccessor" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>price_formatted</FilePath> là <b>field ảo</b> — không tồn tại trong DB, nhưng có mặt trong
					<FilePath>$attributes</FilePath> ngay sau khi hydrate. Nhờ vậy <FilePath>$product->price_formatted</FilePath>
					(qua <FilePath>__get()</FilePath> đơn giản từ section 5) trả về đúng chuỗi format sẵn. Điểm mạnh: giữ logic
					hiển thị nằm trong Model, không rải rác ở View — cần đổi format thì sửa 1 chỗ duy nhất.
				</p>

				<PageHeading text="Câu hỏi hay gặp" addOnClass="text-left mt-5" markedAs="faq" :lvl="1" />
				<PageHeading
					text="Q1: Sao phải viết migration khi có thể chạy SQL trong phpMyAdmin?"
					addOnClass="text-left my-3"
					markedAs="faq-q1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì SQL trong phpMyAdmin chỉ chạy được trên máy bạn. Đồng đội <FilePath>git pull</FilePath> code mới sẽ không
					biết phải chạy gì để có schema tương ứng. Migration là 1 file <FilePath>.php</FilePath> — commit vào git — ai
					pull về cũng chạy được <FilePath>php migrate.php</FilePath> để đồng bộ schema.
				</p>

				<PageHeading
					text="Q2: Sao phải refactor Model sang Active Record chỉ để có $product->category()?"
					addOnClass="text-left my-3"
					markedAs="faq-q2"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì trong OOP, method thuộc về <b>object</b>. Nếu <FilePath>find()</FilePath> chỉ trả về mảng thì
					<FilePath>$product</FilePath> chỉ là dữ liệu trần — không có method nào, buộc phải gọi ngược lại kiểu
					<FilePath>$productModel->category($product['category_id'])</FilePath>. Cách đó chạy được nhưng vi phạm nguyên
					tắc "data đi kèm behavior" — behavior (relation) nằm ở class kia, còn data (record) nằm ở đây, phải tự nối lại
					bằng tay mỗi lần. Refactor sang Active Record đưa 2 thứ về cùng 1 chỗ: instance vừa là data vừa có method —
					gọi <FilePath>$product->category()</FilePath> tự nhiên như đọc câu tiếng Anh. Đây cũng là pattern Laravel
					Eloquent và Doctrine dùng — chỉ khác là Eloquent bọc thêm <FilePath>__get()</FilePath> để gọi được kiểu
					property-style (<FilePath>$product->category</FilePath> không ngoặc).
				</p>

				<PageHeading
					text="Q3: Accessor nên đặt trong Model hay Controller?"
					addOnClass="text-left my-3"
					markedAs="faq-q3"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong <b>Model</b>. Lý do: cùng 1 field <FilePath>price_formatted</FilePath> có thể hiển thị ở nhiều View
					(list, detail, form...). Nếu format trong Controller, mỗi Controller phải viết lại — copy-paste nhân bản. Đặt
					trong Model → <b>1 chỗ định nghĩa, dùng khắp nơi</b>.
				</p>

				<!-- ===================== LUYỆN TẬP ===================== -->
				<PageHeading text="Luyện tập" addOnClass="text-left mt-5" markedAs="practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					3 bài mở rộng dựa trên code đã có. Copy starter, hoàn thiện phần <FilePath>TODO</FilePath>.
				</p>

				<!-- Bài 1 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
							>01</span
						>
						<p class="text-slate-900 dark:text-white font-semibold">BrandModel — Entity thứ 3 + relations</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: lặp lại toàn bộ pattern <FilePath>CategoryModel</FilePath> cho brand — Active Record, migration FK,
						và 2 chiều quan hệ.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Viết migration <FilePath>CreateBrandsTable</FilePath> — cấu trúc y hệt
							<FilePath>CreateCategoriesTable</FilePath> (id, name, slug UNIQUE, created_at).
						</li>
						<li>
							Cột <FilePath>brand_id</FilePath> đã có sẵn từ p1 — viết migration
							<FilePath>AddBrandForeignKeyToProductsTable</FilePath> chỉ thêm FK link tới
							<FilePath>brands(id)</FilePath>, <FilePath>ON DELETE SET NULL</FilePath>. (Y hệt cách bài chính làm với
							category.)
						</li>
						<li>
							Tạo <FilePath>App/Models/BrandModel.php</FilePath> — copy pattern
							<FilePath>CategoryModel</FilePath> (Active Record: <FilePath>$attributes</FilePath>,
							<FilePath>hydrate()</FilePath>, <FilePath>find()</FilePath>, <FilePath>read()</FilePath>,
							<FilePath>create()</FilePath>, <FilePath>__get()</FilePath>).
						</li>
						<li>
							Trong <FilePath>ProductModel</FilePath>, thêm relation belongsTo: <FilePath>brand(): ?BrandModel</FilePath>
							— tự đọc <FilePath>brand_id</FilePath> từ chính instance.
						</li>
						<li>
							Trong <FilePath>BrandModel</FilePath>, thêm relation hasMany: <FilePath>products(): array</FilePath> —
							query <FilePath>products</FilePath> theo <FilePath>brand_id</FilePath> rồi hydrate về
							<FilePath>ProductModel</FilePath>.
						</li>
					</ul>
					<VCodeBlock :code="p1" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 2 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
							>02</span
						>
						<p class="text-slate-900 dark:text-white font-semibold">Trang products: filter + form tạo mới</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: query có điều kiện động, dropdown map dữ liệu qua lại giữa View — Controller — Model.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Trong <FilePath>ProductModel</FilePath>, thêm method
							<FilePath>search(array $filters = []): array</FilePath> — build SQL WHERE động theo 3 filter:
							<FilePath>name</FilePath> (LIKE <FilePath>%name%</FilePath>), <FilePath>brand_id</FilePath> (=),
							<FilePath>category_id</FilePath> (=). Nhớ dùng prepared statement.
						</li>
						<li>
							Trong <FilePath>ProductController::index()</FilePath> — lấy filter từ
							<FilePath>$_GET</FilePath>, gọi <FilePath>search()</FilePath>, load kèm
							<FilePath>brands</FilePath> + <FilePath>categories</FilePath> (cho dropdown), render
							<FilePath>product_list</FilePath> với tất cả biến đó.
						</li>
						<li>
							Trong <FilePath>App/Views/product_list.php</FilePath> — thêm form <FilePath>GET</FilePath> với 1 input
							<FilePath>name</FilePath> + 2 <FilePath>select</FilePath> (brand, category). Nhớ preserve giá trị đã
							filter (<FilePath>selected</FilePath>/<FilePath>value</FilePath>).
						</li>
						<li>
							Trong <FilePath>ProductController::create()</FilePath> — load brands + categories cho form, render
							<FilePath>product_form</FilePath> với 2 dropdown.
						</li>
						<li>
							Trong <FilePath>product_form.php</FilePath> — thêm 2 <FilePath>select</FilePath> cho
							<FilePath>brand_id</FilePath> và <FilePath>category_id</FilePath> vào form tạo product.
						</li>
					</ul>
					<VCodeBlock :code="p2" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 3 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
							>03</span
						>
						<p class="text-slate-900 dark:text-white font-semibold">Seeder — nạp dữ liệu mẫu (brand + category + product)</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: viết class Seeder + runner, hiểu thứ tự nạp dữ liệu vì có FK.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Tạo <FilePath>App/Database/Seeders/BrandSeeder.php</FilePath> với method
							<FilePath>run(): void</FilePath> — insert 3 brand: "Apple", "Samsung", "Xiaomi".
						</li>
						<li>
							Tạo <FilePath>App/Database/Seeders/CategorySeeder.php</FilePath> — insert 3 category: "Điện thoại",
							"Laptop", "Phụ kiện".
						</li>
						<li>
							Tạo <FilePath>App/Database/Seeders/ProductSeeder.php</FilePath> — insert 9 product, mỗi cái gán
							<FilePath>brand_id</FilePath> và <FilePath>category_id</FilePath> ngẫu nhiên (1..3).
						</li>
						<li>
							Tạo <FilePath>seed.php</FilePath> ở root, chạy 3 seeder theo thứ tự: <b>brands → categories → products</b>
							(products cuối cùng vì cần cả 2 FK tồn tại).
						</li>
						<li>Chạy: <FilePath textCoppy="php seed.php">php seed.php</FilePath>.</li>
					</ul>
					<VCodeBlock :code="p3" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) Xong phần 5 — chúng ta đã có 1 mini-framework có Migration, Model đa entity, Relations, và
					Accessor/Mutator cơ bản. Toàn bộ pattern đã bắt sát cách Laravel làm — sang các bài Laravel sau, bạn sẽ nhận
					ra đây chính là những concept quen thuộc, chỉ khác cái framework lo hộ nhiều thứ hơn. See ya!
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
				pagePagination: {
					next: {
						title: 'Trở về danh sách Doc',
						link: '/php/documentation',
					},
					prev: {
						title: 'PHP & Database - Phần 4: View & Form',
						link: '/php/documentation/php-and-database-p4',
					},
				},
				bTree: `mvc-shop/
├── composer.json
├── vendor/
├── index.php
├── migrate.php                          # ← MỚI: CLI chạy migration
├── seed.php                             # ← MỚI (bonus luyện tập): CLI nạp dữ liệu mẫu
└── App/
    ├── Core/
    │   └── Route.php
    ├── Database/
    │   ├── Database.php
    │   ├── Migrations/                  # ← MỚI
    │   │   ├── CreateCategoriesTable.php
    │   │   └── AddCategoryForeignKeyToProductsTable.php
    │   └── Seeders/                     # ← MỚI (bonus luyện tập)
    │       ├── CategorySeeder.php
    │       └── ProductSeeder.php
    ├── Models/
    │   ├── ProductModel.php             # + relation category(), + accessors()
    │   └── CategoryModel.php            # ← MỚI: Entity thứ 2 (Active Record + mutate())
    ├── Controllers/
    │   └── ProductController.php        # (không đổi ở bài này)
    └── Views/
        ├── product_list.php
        ├── product_detail.php
        └── product_form.php`,
				bMigCategories: `<?php
// App/Database/Migrations/CreateCategoriesTable.php


namespace App\\Database\\Migrations;

use App\\Database\\Database;

class CreateCategoriesTable
{
    public function up(): void
    {
        Database::getConnection()->exec("
            CREATE TABLE IF NOT EXISTS categories (
                id         INT AUTO_INCREMENT PRIMARY KEY,
                name       VARCHAR(255) NOT NULL,
                slug       VARCHAR(255) NOT NULL UNIQUE,
                created_at DATETIME     DEFAULT CURRENT_TIMESTAMP
            )
        ");
    }

    public function down(): void
    {
        Database::getConnection()->exec("DROP TABLE IF EXISTS categories");
    }
}`,
				bMigFk: `<?php
// App/Database/Migrations/AddCategoryForeignKeyToProductsTable.php


namespace App\\Database\\Migrations;

use App\\Database\\Database;

/**
 * Cột products.category_id đã tồn tại từ p1 (INT NULL). Migration này
 * CHỈ thêm ràng buộc khoá ngoại — không add/drop column.
 */
class AddCategoryForeignKeyToProductsTable
{
    public function up(): void
    {
        // Link category_id → categories(id).
        // Xoá category → set NULL cho các product thuộc nó (thay vì xoá theo).
        Database::getConnection()->exec("
            ALTER TABLE products
            ADD CONSTRAINT fk_products_category
            FOREIGN KEY (category_id) REFERENCES categories(id)
            ON DELETE SET NULL
        ");
    }

    public function down(): void
    {
        // Chỉ drop FK — KHÔNG drop column (cột thuộc migration cũ ở p1)
        Database::getConnection()->exec("
            ALTER TABLE products DROP FOREIGN KEY fk_products_category
        ");
    }
}`,
				bMigRun: `<?php
// migrate.php — chạy tất cả migration theo thứ tự


require __DIR__ . '/vendor/autoload.php';

use App\\Database\\Migrations\\CreateCategoriesTable;
use App\\Database\\Migrations\\AddCategoryForeignKeyToProductsTable;

$migrations = [
    new CreateCategoriesTable(),
    new AddCategoryForeignKeyToProductsTable(),
];

foreach ($migrations as $migration) {
    $name = (new ReflectionClass($migration))->getShortName();
    try {
        $migration->up();
        echo "✓ {$name}\\n";
    } catch (Throwable $e) {
        echo "✗ {$name} — {$e->getMessage()}\\n";
    }
}`,
				bMigOutput: `$ php migrate.php
✓ CreateCategoriesTable
✓ AddCategoryForeignKeyToProductsTable`,
				bCategoryModel: `<?php
// App/Models/CategoryModel.php


namespace App\\Models;

use App\\Database\\Database;
use PDO;

class CategoryModel
{
    private PDO $conn;

    protected string $table      = 'categories';
    protected string $primaryKey = 'id';

    /** @var list<string> */
    protected array $fillable = ['name', 'slug'];

    /** Data của 1 record khi instance được hydrate qua find()/read(). */
    protected array $attributes = [];

    public function __construct()
    {
        $this->conn = Database::getConnection();
    }

    /** Factory tĩnh: đóng gói 1 row (mảng) từ DB thành instance ngậm data. */
    public static function hydrate(array $row): static
    {
        $obj = new static();
        $obj->attributes = $row;
        return $obj;
    }

    /** Trả về instance đã hydrate hoặc null — không phải mảng như p4 nữa. */
    public function find(int $id): ?static
    {
        $stmt = $this->conn->prepare(
            "SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id"
        );
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch();
        return $row === false ? null : static::hydrate($row);
    }

    /** @return array<int, static> */
    public function read(): array
    {
        $rows = $this->conn->query("SELECT * FROM {$this->table}")->fetchAll();
        return array_map(fn(array $row): static => static::hydrate($row), $rows);
    }

    public function create(array $data): bool
    {
        $data = array_intersect_key($data, array_flip($this->fillable));
        $stmt = $this->conn->prepare(
            "INSERT INTO {$this->table} (name, slug) VALUES (:name, :slug)"
        );
        return $stmt->execute([
            ':name' => $data['name'],
            ':slug' => $data['slug'],
        ]);
    }

    /**
     * Magic getter — cho phép truy cập field như property: $category->name.
     * Đây chính là cách Eloquent expose attributes.
     */
    public function __get(string $key): mixed
    {
        return $this->attributes[$key] ?? null;
    }
}`,
				bRelBelongs: `<?php
// App/Models/ProductModel.php — refactor sang Active Record như CategoryModel


namespace App\\Models;

use App\\Database\\Database;
use PDO;

class ProductModel
{
    // ... các phần cũ từ p2/p4 (conn, table, primaryKey, fillable, create, update, delete) ...

    /** Data của 1 record khi được hydrate qua find(). */
    protected array $attributes = [];

    /** Factory tĩnh — đóng gói 1 row từ DB thành instance. */
    public static function hydrate(array $row): static
    {
        $obj = new static();
        $obj->attributes = $row;
        return $obj;
    }

    /** Trả về instance thay vì array — thay đổi so với p4. */
    public function find(int $id): ?static
    {
        $stmt = $this->conn->prepare(
            "SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id"
        );
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch();
        return $row === false ? null : static::hydrate($row);
    }

    /** Magic getter — expose attributes như property: $product->product_name */
    public function __get(string $key): mixed
    {
        return $this->attributes[$key] ?? null;
    }

    /**
     * Relation belongsTo — mỗi Product thuộc 1 Category.
     * Không tham số: tự đọc category_id từ chính instance ($this).
     */
    public function category(): ?CategoryModel
    {
        $categoryId = $this->attributes['category_id'] ?? null;
        return $categoryId === null
            ? null
            : (new CategoryModel())->find((int) $categoryId);
    }
}`,
				bRelBelongsUsage: `<?php
// Ở Controller — 1 dòng để load category kèm, gọi method trực tiếp trên object
$product = $productModel->find(5);          // ProductModel|null
if ($product === null) {
    throw new RuntimeException('Product không tồn tại');
}

$category = $product->category();           // CategoryModel|null — không phải truyền id gì hết

echo $product->product_name;                // "Laptop Dell"  ← property style qua __get()
echo $category->name ?? 'Chưa phân loại';   // "Điện thoại"`,
				bRelHas: `<?php
// App/Models/CategoryModel.php — thêm method products() vào cuối class

/**
 * Relation hasMany — mỗi Category có nhiều Products.
 * Không tham số: tự đọc id của chính category instance.
 * Trả về mảng các ProductModel instance (rỗng nếu chưa có product nào).
 *
 * @return array<int, ProductModel>
 */
public function products(): array
{
    $id = $this->attributes[$this->primaryKey] ?? null;
    if ($id === null) {
        return [];  // instance chưa được hydrate — chưa có id
    }

    $stmt = $this->conn->prepare(
        "SELECT * FROM products WHERE category_id = :cat ORDER BY id DESC"
    );
    $stmt->execute([':cat' => (int) $id]);

    // hydrate() là static, gọi thẳng qua tên class — mỗi row thành 1 ProductModel
    return array_map(
        fn(array $row): ProductModel => ProductModel::hydrate($row),
        $stmt->fetchAll()
    );
}

// Cách dùng — cũng gọi thẳng trên object, không cần truyền id qua lại
$category = (new CategoryModel())->find(2);
foreach ($category->products() as $product) {
    echo $product->product_name, "\\n";
}`,
				bMutator: `<?php
// App/Models/CategoryModel.php — thêm mutator

/**
 * Chuẩn hoá $data trước khi ghi DB.
 * Gọi ở đầu create() và update().
 */
protected function mutate(array $data): array
{
    // Trim khoảng trắng thừa cho 'name'
    if (isset($data['name'])) {
        $data['name'] = trim($data['name']);
    }
    return $data;
}

// Áp dụng — sửa create() cho gọi mutate() ngay đầu
public function create(array $data): bool
{
    $data = $this->mutate($data);
    $data = array_intersect_key($data, array_flip($this->fillable));
    // ...phần build SQL như cũ...
}`,
				bAccessor: `<?php
// App/Models/ProductModel.php — thêm accessor

/**
 * Bổ sung field ảo cho row đọc từ DB — chạy ngay trước khi hydrate.
 */
protected function accessors(array $row): array
{
    // Field ảo: price_formatted → "1,500,000đ"
    $row['price_formatted'] = number_format((float) $row['regular_price']) . 'đ';
    return $row;
}

// Áp dụng — sửa find() và read(): chạy accessors() trên row trước khi hydrate
public function find(int $id): ?static
{
    $stmt = $this->conn->prepare(
        "SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id"
    );
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch();
    return $row === false ? null : static::hydrate($this->accessors($row));
}

/** @return array<int, static> */
public function read(): array
{
    $rows = $this->conn->query("SELECT * FROM {$this->table}")->fetchAll();
    return array_map(
        fn(array $row): static => static::hydrate($this->accessors($row)),
        $rows
    );
}`,
				p1: `<?php
// ============================================================
// BÀI 1: BrandModel — Entity thứ 3 + relations
// ============================================================

// App/Database/Migrations/CreateBrandsTable.php — TODO
namespace App\\Database\\Migrations;
use App\\Database\\Database;

class CreateBrandsTable
{
    public function up(): void
    {
        // TODO: CREATE TABLE brands — cấu trúc y hệt categories:
        //   id INT AUTO_INCREMENT PRIMARY KEY,
        //   name VARCHAR(255) NOT NULL,
        //   slug VARCHAR(255) NOT NULL UNIQUE,
        //   created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    }
    public function down(): void { /* DROP TABLE IF EXISTS brands */ }
}

// App/Database/Migrations/AddBrandForeignKeyToProductsTable.php — TODO
// Cột brand_id đã có sẵn từ p1 (INT nullable) → chỉ thêm FK
class AddBrandForeignKeyToProductsTable
{
    public function up(): void
    {
        // TODO: ALTER TABLE products
        //       ADD CONSTRAINT fk_products_brand
        //       FOREIGN KEY (brand_id) REFERENCES brands(id)
        //       ON DELETE SET NULL
    }
    public function down(): void
    {
        // TODO: ALTER TABLE products DROP FOREIGN KEY fk_products_brand
    }
}

// App/Models/BrandModel.php — TODO
// Copy nguyên pattern CategoryModel: $attributes, hydrate(), find(): ?static,
// read(), create(), __get(). Chỉ đổi $table = 'brands', $fillable = ['name', 'slug'].

// App/Models/ProductModel.php — TODO thêm relation belongsTo
public function brand(): ?BrandModel
{
    $brandId = $this->attributes['brand_id'] ?? null;
    return $brandId === null
        ? null
        : (new BrandModel())->find((int) $brandId);
}

// App/Models/BrandModel.php — TODO thêm relation hasMany
public function products(): array
{
    $id = $this->attributes[$this->primaryKey] ?? null;
    if ($id === null) return [];

    // TODO: SELECT * FROM products WHERE brand_id = :b ORDER BY id DESC
    // → hydrate mỗi row: ProductModel::hydrate($row)
}

// Cách dùng cuối cùng:
// $product = (new ProductModel())->find(5);
// echo $product->brand()?->name;           // "Apple"
//
// $brand = (new BrandModel())->find(1);
// foreach ($brand->products() as $p) {
//     echo $p->product_name, "\\n";
// }`,
				p2: `<?php
// ============================================================
// BÀI 2: Trang products — filter + form tạo mới
// ============================================================

// App/Models/ProductModel.php — TODO thêm method search()
public function search(array $filters = []): array
{
    $where  = [];
    $params = [];

    // TODO: nếu có $filters['name'] → thêm "product_name LIKE :name"
    //       $params[':name'] = '%' . $filters['name'] . '%';

    // TODO: nếu có $filters['brand_id'] → thêm "brand_id = :brand_id"
    //       $params[':brand_id'] = (int) $filters['brand_id'];

    // TODO: nếu có $filters['category_id'] → thêm "category_id = :category_id"

    $sql = "SELECT * FROM {$this->table}";
    if (!empty($where)) {
        $sql .= ' WHERE ' . implode(' AND ', $where);
    }
    $sql .= ' ORDER BY id DESC';

    $stmt = $this->conn->prepare($sql);
    $stmt->execute($params);

    return array_map(
        fn(array $row): static => static::hydrate($this->accessors($row)),
        $stmt->fetchAll()
    );
}

// App/Controllers/ProductController.php — TODO cập nhật index()
public function index(): void
{
    $filters = [
        'name'        => $_GET['name']        ?? '',
        'brand_id'    => $_GET['brand_id']    ?? '',
        'category_id' => $_GET['category_id'] ?? '',
    ];

    // TODO:
    // $products   = $this->productModel->search($filters);
    // $brands     = (new BrandModel())->read();
    // $categories = (new CategoryModel())->read();
    // $this->render('product_list', compact('products', 'brands', 'categories', 'filters'));
}

// App/Views/product_list.php — TODO thêm form filter (GET)
// <form method="GET" action="/products">
//     <input name="name" placeholder="Tên..."
//            value="<?= htmlspecialchars($filters['name']) ?>">
//
//     <select name="brand_id">
//         <option value="">-- Tất cả brand --</option>
//         <?php foreach ($brands as $b): ?>
//             <option value="<?= $b->id ?>"
//                     <?= (string) $filters['brand_id'] === (string) $b->id ? 'selected' : '' ?>>
//                 <?= htmlspecialchars($b->name) ?>
//             </option>
//         <?php endforeach; ?>
//     </select>
//
//     <select name="category_id"> ... (tương tự) ... </select>
//
//     <button type="submit">Lọc</button>
// </form>

// App/Controllers/ProductController.php — TODO cập nhật create() để load dropdown
public function create(): void
{
    // TODO:
    // $brands     = (new BrandModel())->read();
    // $categories = (new CategoryModel())->read();
    // $this->render('product_form', [
    //     'brands' => $brands, 'categories' => $categories,
    //     'old' => [], 'errors' => [],
    // ]);
}

// App/Views/product_form.php — TODO thêm 2 dropdown
// <label>Brand:</label>
// <select name="brand_id">
//     <?php foreach ($brands as $b): ?>
//         <option value="<?= $b->id ?>"
//                 <?= ($old['brand_id'] ?? '') == $b->id ? 'selected' : '' ?>>
//             <?= htmlspecialchars($b->name) ?>
//         </option>
//     <?php endforeach; ?>
// </select>
//
// <label>Category:</label>
// <select name="category_id"> ... (tương tự) ... </select>`,
				p3: `<?php
// ============================================================
// BÀI 3: Seeder — nạp dữ liệu mẫu
// ============================================================

// App/Database/Seeders/BrandSeeder.php
namespace App\\Database\\Seeders;

use App\\Models\\BrandModel;
use App\\Models\\CategoryModel;
use App\\Models\\ProductModel;

class BrandSeeder
{
    public function run(): void
    {
        // TODO: BrandModel::create() cho 3 brand:
        // - "Apple"
        // - "Samsung"
        // - "Xiaomi"
        // (nếu Model có mutate() — tên sẽ được trim)
    }
}

// App/Database/Seeders/CategorySeeder.php
class CategorySeeder
{
    public function run(): void
    {
        // TODO: CategoryModel::create() cho 3 category:
        // - "Điện thoại"
        // - "Laptop"
        // - "Phụ kiện"
    }
}

// App/Database/Seeders/ProductSeeder.php
class ProductSeeder
{
    public function run(): void
    {
        // TODO: ProductModel::create() cho 9 product.
        // Mỗi cái gán ngẫu nhiên:
        //   - brand_id    = rand(1, 3)
        //   - category_id = rand(1, 3)
        // Còn lại (product_name, regular_price, ...) tự đặt.
    }
}

// seed.php — TODO ở root
require __DIR__ . '/vendor/autoload.php';

use App\\Database\\Seeders\\BrandSeeder;
use App\\Database\\Seeders\\CategorySeeder;
use App\\Database\\Seeders\\ProductSeeder;

// Thứ tự QUAN TRỌNG: brands + categories phải có trước products
// (vì products.brand_id + products.category_id là FK)
$seeders = [
    new BrandSeeder(),
    new CategorySeeder(),
    new ProductSeeder(),
];

foreach ($seeders as $seeder) {
    $name = (new ReflectionClass($seeder))->getShortName();
    $seeder->run();
    echo "✓ {$name}\\n";
}

// Chạy: php seed.php`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-6' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
