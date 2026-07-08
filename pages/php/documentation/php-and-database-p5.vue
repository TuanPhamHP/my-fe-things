<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Entity thứ 2, Quan hệ &amp; Accessors / Mutators" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở
					<a href="/php/documentation/php-and-database-p3" target="_blank" rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500">phần 3</a>
					và
					<a href="/php/documentation/php-and-database-p4" target="_blank" rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500">phần 4</a>
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

				<PageHeading text="2. Migration cho bảng categories" addOnClass="text-left mt-5" markedAs="migration-categories" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo file <FilePath>App/Database/Migrations/CreateCategoriesTable.php</FilePath>:
				</p>
				<VCodeBlock :code="bMigCategories" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bảng có 4 cột: <FilePath>id</FilePath> (khoá chính), <FilePath>name</FilePath>,
					<FilePath>slug</FilePath> (URL-friendly, unique), <FilePath>created_at</FilePath>. Method
					<FilePath>down()</FilePath> làm ngược lại — xoá bảng — để khi cần bạn có thể "quay ngược" migration.
				</p>

				<PageHeading text="3. Migration sửa bảng products — foreign key" addOnClass="text-left mt-5" markedAs="migration-fk" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo file <FilePath>App/Database/Migrations/AddCategoryIdToProductsTable.php</FilePath>:
				</p>
				<VCodeBlock :code="bMigFk" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Đây là kiểu migration <b>alter table</b>:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>ADD COLUMN category_id INT NULL</FilePath> — thêm cột, cho phép NULL vì sản phẩm cũ chưa có
						category.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>FOREIGN KEY ... ON DELETE SET NULL</FilePath> — nếu xoá 1 category, các product thuộc nó có
						<FilePath>category_id</FilePath> tự chuyển về <FilePath>NULL</FilePath> (thay vì bị xoá theo — sẽ dùng
						<FilePath>ON DELETE CASCADE</FilePath>).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>down()</FilePath> phải drop foreign key <b>trước khi</b> drop column — nếu không MySQL sẽ báo
						lỗi.
					</li>
				</ul>

				<PageHeading text="4. Runner — chạy migration bằng CLI" addOnClass="text-left mt-5" markedAs="migration-runner" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo file <FilePath>migrate.php</FilePath> ở root:
				</p>
				<VCodeBlock :code="bMigRun" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Chạy:</p>
				<FakeTerminalUI textCoppy="php migrate.php" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Output mong đợi:</p>
				<VCodeBlock :code="bMigOutput" highlightjs lang="bash" theme="atom-one-dark" />
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm">
						<b>Thực tế production:</b> nên lưu tên migration đã chạy vào bảng <FilePath>migrations</FilePath> trong
						DB, để lần chạy sau bỏ qua các cái đã done. Laravel và các framework khác đều làm vậy. Ở bài luyện tập
						sẽ nâng cấp thêm.
					</p>
				</div>

				<PageHeading text="5. CategoryModel — Entity thứ 2" addOnClass="text-left mt-5" markedAs="category-model" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo <FilePath>App/Models/CategoryModel.php</FilePath> — cấu trúc y hệt
					<FilePath>ProductModel</FilePath>:
				</p>
				<VCodeBlock :code="bCategoryModel" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở đây <FilePath>$fillable</FilePath> chỉ có <FilePath>name</FilePath> và <FilePath>slug</FilePath> — nhớ lại
					p2, <FilePath>$fillable</FilePath> giúp chống mass assignment: nếu ai đó gửi thêm
					<FilePath>is_root=1</FilePath>, field lạ sẽ bị lọc.
				</p>

				<PageHeading text="6. Relations — belongsTo &amp; hasMany" addOnClass="text-left mt-5" markedAs="relations" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					2 chiều quan hệ giữa Product và Category:
				</p>
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

				<PageHeading text="belongsTo — Product → Category" addOnClass="text-left mt-3" markedAs="relation-belongs" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bổ sung method <FilePath>category()</FilePath> vào <FilePath>ProductModel</FilePath>:
				</p>
				<VCodeBlock :code="bRelBelongs" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cách dùng: sau khi lấy product ra, ta có <FilePath>$product['category_id']</FilePath> — dùng nó gọi
					<FilePath>category()</FilePath> để lấy full record category.
				</p>
				<VCodeBlock :code="bRelBelongsUsage" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="hasMany — Category → Products" addOnClass="text-left mt-3" markedAs="relation-has" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bổ sung method <FilePath>products()</FilePath> vào <FilePath>CategoryModel</FilePath>:
				</p>
				<VCodeBlock :code="bRelHas" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>ORDER BY id DESC</FilePath> để mới nhất lên đầu — quy ước thường thấy khi list.
				</p>

				<PageHeading text="7. Accessors &amp; Mutators" addOnClass="text-left mt-5" markedAs="access-mutate" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					2 khái niệm đi cặp với nhau:
				</p>
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
					<b>Cách nhớ:</b> Mutator = "đột biến" data trước khi vào DB. Accessor = "truy cập" data đã format sẵn khi lấy ra.
				</p>

				<PageHeading text="Mutator — tự sinh slug từ name" addOnClass="text-left mt-3" markedAs="mutator-slug" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nếu người dùng nhập "Điện thoại", ta muốn slug tự sinh là "dien-thoai". Thêm 2 method
					<FilePath>mutate()</FilePath> và <FilePath>makeSlug()</FilePath> vào <FilePath>CategoryModel</FilePath>:
				</p>
				<VCodeBlock :code="bMutator" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong <FilePath>create()</FilePath> và <FilePath>update()</FilePath>, luôn gọi
					<FilePath>$data = $this->mutate($data);</FilePath> ngay đầu — mọi input được chuẩn hoá trước khi build SQL.
				</p>

				<PageHeading text="Accessor — thêm field ảo price_formatted" addOnClass="text-left mt-3" markedAs="accessor-price" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Muốn View chỉ cần in <FilePath>$product['price_formatted']</FilePath> ra
					<FilePath>"1,500,000đ"</FilePath> mà không cần <FilePath>number_format()</FilePath> mỗi chỗ. Thêm method
					<FilePath>accessors()</FilePath> vào <FilePath>ProductModel</FilePath>:
				</p>
				<VCodeBlock :code="bAccessor" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>price_formatted</FilePath> là <b>field ảo</b> — không tồn tại trong DB, nhưng luôn có sẵn khi đọc
					qua Model. Đây là điểm mạnh của accessor: giữ logic hiển thị nằm trong Model, không rải rác ở View.
				</p>

				<PageHeading text="8. Ghép vào Controller &amp; View" addOnClass="text-left mt-5" markedAs="wire-mvc" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cập nhật <FilePath>ProductController::show()</FilePath> để load kèm category:
				</p>
				<VCodeBlock :code="bCtrlShow" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong View <FilePath>product_detail.php</FilePath>, in ra category name + dùng accessor:
				</p>
				<VCodeBlock :code="bViewDetail" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Câu hỏi hay gặp" addOnClass="text-left mt-5" markedAs="faq" :lvl="1" />
				<PageHeading
					text="Q1: Sao phải viết migration khi có thể chạy SQL trong phpMyAdmin?"
					addOnClass="text-left my-3"
					markedAs="faq-q1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì SQL trong phpMyAdmin chỉ chạy được trên máy bạn. Đồng đội <FilePath>git pull</FilePath> code mới sẽ không
					biết phải chạy gì để có schema tương ứng. Migration là 1 file <FilePath>.php</FilePath> — commit vào git —
					ai pull về cũng chạy được <FilePath>php migrate.php</FilePath> để đồng bộ schema.
				</p>

				<PageHeading
					text="Q2: Relation là method chứ không phải property, vì sao?"
					addOnClass="text-left my-3"
					markedAs="faq-q2"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì relation cần <b>query DB</b> mỗi lần lấy — không thể tính sẵn lúc khởi tạo Model. Thêm nữa, method cho
					phép truyền tham số (như <FilePath>$categoryId</FilePath>), còn property thì cố định. Trong Laravel Eloquent,
					relation cũng là method nhưng dùng như property — vì magic method
					<FilePath>__get()</FilePath> gọi hộ. Đây là bước nâng cao, chưa cần ở bài basic.
				</p>

				<PageHeading
					text="Q3: Accessor nên đặt trong Model hay Controller?"
					addOnClass="text-left my-3"
					markedAs="faq-q3"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong <b>Model</b>. Lý do: cùng 1 field <FilePath>price_formatted</FilePath> có thể hiển thị ở nhiều View
					(list, detail, form...). Nếu format trong Controller, mỗi Controller phải viết lại — copy-paste nhân bản.
					Đặt trong Model → <b>1 chỗ định nghĩa, dùng khắp nơi</b>.
				</p>

				<!-- ===================== LUYỆN TẬP ===================== -->
				<PageHeading text="Luyện tập" addOnClass="text-left mt-5" markedAs="practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					3 bài mở rộng dựa trên code đã có. Copy starter, hoàn thiện phần <FilePath>TODO</FilePath>.
				</p>

				<!-- Bài 1 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0">01</span>
						<p class="text-slate-900 dark:text-white font-semibold">Ghi lại lịch sử migration</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: nâng cấp runner — bỏ qua migration đã chạy.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Tạo bảng <FilePath>migrations</FilePath> có 2 cột: <FilePath>id</FilePath> và
							<FilePath>name</FilePath> (unique).
						</li>
						<li>
							Trong <FilePath>migrate.php</FilePath>: trước khi chạy 1 migration, kiểm tra tên nó đã có trong bảng
							<FilePath>migrations</FilePath> chưa — nếu có thì bỏ qua.
						</li>
						<li>
							Sau khi <FilePath>up()</FilePath> chạy thành công, insert tên vào bảng
							<FilePath>migrations</FilePath> để lần sau không chạy lại.
						</li>
					</ul>
					<VCodeBlock :code="p1" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 2 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0">02</span>
						<p class="text-slate-900 dark:text-white font-semibold">Relation many-to-many — Product ↔ Tags</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: bảng trung gian (pivot) và query 2 JOIN.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Viết 2 migration: <FilePath>CreateTagsTable</FilePath> (id, name) và
							<FilePath>CreateProductTagTable</FilePath> (bảng pivot: product_id, tag_id, PK ghép, FK cả 2 bên).
						</li>
						<li>
							Tạo <FilePath>TagModel</FilePath>.
						</li>
						<li>
							Trong <FilePath>ProductModel</FilePath>, viết
							<FilePath>tags(int $productId): array</FilePath> — JOIN
							<FilePath>tags</FilePath> với <FilePath>product_tag</FilePath> để lấy list tag của 1 product.
						</li>
						<li>
							Trong <FilePath>TagModel</FilePath>, viết ngược lại
							<FilePath>products(int $tagId): array</FilePath>.
						</li>
					</ul>
					<VCodeBlock :code="p2" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 3 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0">03</span>
						<p class="text-slate-900 dark:text-white font-semibold">Seeder — nạp dữ liệu mẫu</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: tạo class Seeder + runner riêng.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Tạo <FilePath>App/Database/Seeders/CategorySeeder.php</FilePath> với method
							<FilePath>run(): void</FilePath> — insert 3 category: "Điện thoại", "Laptop", "Phụ kiện".
						</li>
						<li>
							Tạo <FilePath>App/Database/Seeders/ProductSeeder.php</FilePath> — insert 6 product, mỗi cái gán
							<FilePath>category_id</FilePath> ngẫu nhiên (1, 2, hoặc 3).
						</li>
						<li>
							Tạo <FilePath>seed.php</FilePath> ở root, chạy cả 2 seeder theo thứ tự (categories trước — vì product
							cần <FilePath>category_id</FilePath> tồn tại).
						</li>
						<li>
							Chạy: <FilePath textCoppy="php seed.php">php seed.php</FilePath>.
						</li>
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
    │   │   └── AddCategoryIdToProductsTable.php
    │   └── Seeders/                     # ← MỚI (bonus luyện tập)
    │       ├── CategorySeeder.php
    │       └── ProductSeeder.php
    ├── Models/
    │   ├── ProductModel.php             # + relation category(), + accessors()
    │   └── CategoryModel.php            # ← MỚI: Entity thứ 2
    ├── Controllers/
    │   └── ProductController.php        # cập nhật show() để load category
    └── Views/
        ├── product_list.php
        ├── product_detail.php           # hiển thị category + price_formatted
        └── product_form.php`,
				bMigCategories: `<?php
// App/Database/Migrations/CreateCategoriesTable.php
declare(strict_types=1);

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
// App/Database/Migrations/AddCategoryIdToProductsTable.php
declare(strict_types=1);

namespace App\\Database\\Migrations;

use App\\Database\\Database;

class AddCategoryIdToProductsTable
{
    public function up(): void
    {
        $conn = Database::getConnection();

        // 1. Thêm cột — cho phép NULL vì các product cũ chưa có category
        $conn->exec("ALTER TABLE products
                     ADD COLUMN category_id INT NULL AFTER id");

        // 2. Tạo foreign key — link tới categories(id)
        $conn->exec("ALTER TABLE products
                     ADD CONSTRAINT fk_products_category
                     FOREIGN KEY (category_id) REFERENCES categories(id)
                     ON DELETE SET NULL");
    }

    public function down(): void
    {
        $conn = Database::getConnection();
        // Phải drop FK trước, mới drop được column
        $conn->exec("ALTER TABLE products DROP FOREIGN KEY fk_products_category");
        $conn->exec("ALTER TABLE products DROP COLUMN category_id");
    }
}`,
				bMigRun: `<?php
// migrate.php — chạy tất cả migration theo thứ tự
declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use App\\Database\\Migrations\\CreateCategoriesTable;
use App\\Database\\Migrations\\AddCategoryIdToProductsTable;

$migrations = [
    new CreateCategoriesTable(),
    new AddCategoryIdToProductsTable(),
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
✓ AddCategoryIdToProductsTable`,
				bCategoryModel: `<?php
// App/Models/CategoryModel.php
declare(strict_types=1);

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

    public function __construct()
    {
        $this->conn = Database::getConnection();
    }

    public function read(): array
    {
        return $this->conn->query("SELECT * FROM {$this->table}")->fetchAll();
    }

    public function find(int $id): array|false
    {
        $stmt = $this->conn->prepare(
            "SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id"
        );
        $stmt->execute([':id' => $id]);
        return $stmt->fetch();
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
}`,
				bRelBelongs: `<?php
// App/Models/ProductModel.php — bổ sung phía cuối class
use App\\Models\\CategoryModel;

/**
 * Relation belongsTo: mỗi Product thuộc 1 Category.
 * Trả về record category (mảng) hoặc null nếu không có.
 */
public function category(int|null $categoryId): array|false|null
{
    if ($categoryId === null) {
        return null;
    }
    return (new CategoryModel())->find($categoryId);
}`,
				bRelBelongsUsage: `<?php
// Ở Controller — lấy product xong, gọi tiếp category() để load category kèm
$product  = $productModel->find(5);
$category = $productModel->category((int) $product['category_id']);

// $category giờ là mảng ['id' => 2, 'name' => 'Điện thoại', 'slug' => 'dien-thoai', ...]
echo $category['name'];`,
				bRelHas: `<?php
// App/Models/CategoryModel.php — thêm method products() vào cuối class

/**
 * Relation hasMany: mỗi Category có nhiều Products.
 * Trả về mảng records product (rỗng nếu category chưa có product nào).
 */
public function products(int $categoryId): array
{
    $stmt = $this->conn->prepare(
        "SELECT * FROM products WHERE category_id = :cat ORDER BY id DESC"
    );
    $stmt->execute([':cat' => $categoryId]);
    return $stmt->fetchAll();
}`,
				bMutator: `<?php
// App/Models/CategoryModel.php — thêm mutator

/**
 * Chuẩn hoá $data trước khi vào DB.
 * Gọi ở đầu create() và update().
 */
protected function mutate(array $data): array
{
    // Trim tên
    if (isset($data['name'])) {
        $data['name'] = trim($data['name']);
    }

    // Nếu user không nhập slug — auto-gen từ name
    if (!empty($data['name']) && empty($data['slug'])) {
        $data['slug'] = $this->makeSlug($data['name']);
    }

    return $data;
}

private function makeSlug(string $name): string
{
    // Chuyển ký tự có dấu: "Điện thoại" → "dien thoai"
    $slug = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $name);
    $slug = strtolower($slug);
    // Thay mọi thứ không phải chữ/số bằng dấu -
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    return trim($slug, '-');
}

// Áp dụng — sửa create() cho gọi mutate() ngay đầu
public function create(array $data): bool
{
    $data = $this->mutate($data);
    // ...phần build SQL như cũ...
}`,
				bAccessor: `<?php
// App/Models/ProductModel.php — thêm accessor

/**
 * Bổ sung field ảo cho record đọc từ DB.
 * Gọi ở cuối find() và trên từng phần tử của read().
 */
protected function accessors(array $row): array
{
    // Field ảo: price_formatted → "1,500,000đ"
    $row['price_formatted'] = number_format((float) ($row['regular_price'] ?? 0)) . 'đ';

    // Field ảo: name_upper → "LAPTOP DELL"
    $row['name_upper'] = mb_strtoupper($row['product_name'] ?? '');

    return $row;
}

// Áp dụng — sửa find() và read()
public function find(int $id): array|false
{
    $stmt = $this->conn->prepare(
        "SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id"
    );
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch();
    return $row === false ? false : $this->accessors($row);
}

public function read(): array
{
    $rows = $this->conn->query("SELECT * FROM {$this->table}")->fetchAll();
    return array_map(fn(array $row): array => $this->accessors($row), $rows);
}`,
				bCtrlShow: `<?php
// App/Controllers/ProductController.php
public function show(int $id): void
{
    $product = $this->productModel->find($id);
    if ($product === false) {
        http_response_code(404);
        echo 'Không tìm thấy sản phẩm';
        return;
    }

    // Load category qua relation belongsTo
    $category = $this->productModel->category(
        isset($product['category_id']) ? (int) $product['category_id'] : null
    );

    $this->render('product_detail', [
        'product'  => $product,
        'category' => $category,
    ]);
}`,
				bViewDetail: `<?php
// App/Views/product_detail.php
/**
 * @var array<string, mixed>       $product
 * @var array<string, mixed>|null|false $category
 */
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($product['product_name']) ?></title>
</head>
<body>
    <a href="/products">← Danh sách</a>

    <h1><?= htmlspecialchars($product['product_name']) ?></h1>

    <?php if ($category): ?>
        <p>
            <b>Danh mục:</b> <?= htmlspecialchars($category['name']) ?>
        </p>
    <?php endif; ?>

    <!-- Dùng field ảo do accessor tạo, không cần number_format ở View -->
    <p><b>Giá:</b> <?= htmlspecialchars($product['price_formatted']) ?></p>

    <p>
        <?= nl2br(htmlspecialchars($product['description'] ?? '')) ?>
    </p>
</body>
</html>`,
				p1: `<?php
// migrate.php — TODO nâng cấp để nhớ migration đã chạy
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';

use App\\Database\\Database;
use App\\Database\\Migrations\\CreateCategoriesTable;
use App\\Database\\Migrations\\AddCategoryIdToProductsTable;

$conn = Database::getConnection();

// TODO 1: tạo bảng migrations nếu chưa có
// $conn->exec("CREATE TABLE IF NOT EXISTS migrations (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) UNIQUE NOT NULL)");

$migrations = [
    new CreateCategoriesTable(),
    new AddCategoryIdToProductsTable(),
];

foreach ($migrations as $migration) {
    $name = (new ReflectionClass($migration))->getShortName();

    // TODO 2: check tên đã có trong bảng migrations chưa
    // $stmt = $conn->prepare("SELECT id FROM migrations WHERE name = :n");
    // $stmt->execute([':n' => $name]);
    // if ($stmt->fetch()) { echo "- skip {$name}\\n"; continue; }

    try {
        $migration->up();

        // TODO 3: insert tên vào bảng migrations
        // $conn->prepare("INSERT INTO migrations (name) VALUES (:n)")->execute([':n' => $name]);

        echo "✓ {$name}\\n";
    } catch (Throwable $e) {
        echo "✗ {$name} — {$e->getMessage()}\\n";
    }
}`,
				p2: `<?php
// App/Database/Migrations/CreateTagsTable.php — TODO viết migration
declare(strict_types=1);
namespace App\\Database\\Migrations;
use App\\Database\\Database;

class CreateTagsTable
{
    public function up(): void
    {
        // TODO: CREATE TABLE tags (id INT AUTO_INCREMENT PK, name VARCHAR(100) UNIQUE)
    }
    public function down(): void { /* DROP TABLE tags */ }
}

// App/Database/Migrations/CreateProductTagTable.php — bảng pivot
class CreateProductTagTable
{
    public function up(): void
    {
        // TODO: CREATE TABLE product_tag (
        //   product_id INT, tag_id INT,
        //   PRIMARY KEY (product_id, tag_id),
        //   FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        //   FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
        // )
    }
    public function down(): void { /* DROP TABLE product_tag */ }
}

// App/Models/TagModel.php — TODO tạo Entity như CategoryModel
// (table='tags', fillable=['name'])

// App/Models/ProductModel.php — TODO thêm relation
public function tags(int $productId): array
{
    // TODO: JOIN tags với product_tag để lấy list tag của 1 product
    // SELECT tags.* FROM tags
    // JOIN product_tag ON product_tag.tag_id = tags.id
    // WHERE product_tag.product_id = :pid
}

// App/Models/TagModel.php — TODO ngược lại
public function products(int $tagId): array
{
    // TODO: SELECT products.* FROM products
    //       JOIN product_tag ON product_tag.product_id = products.id
    //       WHERE product_tag.tag_id = :tid
}`,
				p3: `<?php
// App/Database/Seeders/CategorySeeder.php
declare(strict_types=1);
namespace App\\Database\\Seeders;

use App\\Models\\CategoryModel;

class CategorySeeder
{
    public function run(): void
    {
        // TODO: dùng CategoryModel::create() để insert 3 category:
        // - "Điện thoại"
        // - "Laptop"
        // - "Phụ kiện"
        // (mutator sẽ tự sinh slug)
    }
}

// App/Database/Seeders/ProductSeeder.php
class ProductSeeder
{
    public function run(): void
    {
        // TODO: insert 6 product, mỗi cái gán category_id ngẫu nhiên (1..3).
        // Dùng ProductModel::create()
    }
}

// seed.php — TODO ở root
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';

use App\\Database\\Seeders\\CategorySeeder;
use App\\Database\\Seeders\\ProductSeeder;

$seeders = [
    new CategorySeeder(),   // categories chạy trước — product cần category_id tồn tại
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
