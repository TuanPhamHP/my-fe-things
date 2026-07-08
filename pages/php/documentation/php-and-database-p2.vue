<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng tạo <b>class Database</b> và <b>Model</b> cho product để xử lý bài toán CRUD với
					database. Phần Controller sẽ được giới thiệu ở bài kế tiếp.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Đã học
					<a
						href="/php/documentation/php-namespace-and-autoload"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						Namespace & Autoload
					</a>
					và
					<a
						href="/php/documentation/php-composer-psr4"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						Composer PSR-4
					</a>
					ở các bài trước — từ đây chúng ta sẽ tổ chức code theo chuẩn <b>PSR-4</b> với prefix
					<b>`App\`</b> map vào folder <b>`App/`</b>:
				</p>
				<VCodeBlock :code="bProjectTree" highlightjs lang="bash" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Với cấu hình <b>`"App\\": "App/"`</b> trong <FilePath>composer.json</FilePath>, chỉ cần
					<b>`require_once 'vendor/autoload.php'`</b> một lần ở entry-point — mọi class sẽ được autoload theo namespace.
					Trong các code sample dưới đây, luôn có dòng <b>`namespace App\...;`</b> ở đầu file và <b>`use ...;`</b> để
					import các class từ namespace khác.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Toàn bộ code từ đây trở đi được viết theo chuẩn <b>PHP 8</b> — khai báo kiểu cho property, tham số và return
					type, dùng <b>union types</b> (<b>`int|string`</b>), constructor property promotion, và style PSR-12 (opening
					brace xuống dòng cho class/method).
				</p>

				<PageHeading text="Tạo class Database" addOnClass="text-left" markedAs="create-database-class" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở
					<a
						href="/php/documentation/php-and-database-p1"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						phần 1
					</a>
					, chúng ta đang khởi tạo kết nối theo kiểu thủ tục — biến <b>`$conn`</b> được tạo trực tiếp trong file
					<FilePath>Database.php</FilePath>. Cách này chạy được, nhưng khi Model/Controller cần dùng lại kết nối, ta phải
					<b>`require`</b> đi <b>`require`</b> lại và mỗi lần chạy sẽ tạo một kết nối mới — vừa lãng phí tài nguyên, vừa
					khó tái sử dụng.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Giải pháp là gói kết nối vào một <b>`class Database`</b> với method <b>`static`</b>
					<b>`getConnection()`</b> theo mô hình <b>Singleton</b> — chỉ tạo kết nối một lần duy nhất và dùng chung ở mọi
					nơi. Chuyển file cũ <FilePath>database/Database.php</FilePath> sang
					<FilePath>App/Database/Database.php</FilePath> (khớp namespace <b>`App\Database`</b>) và sửa lại như sau:
				</p>

				<VCodeBlock :code="bDatabase" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[180px]">`private static $instance:`</b>
							<div>
								<span>
									Là properties dùng để lưu lại <b>một</b> instance PDO duy nhất. Khai báo <b>`static`</b> để có thể truy
									cập trực tiếp từ class mà không cần khởi tạo object, khai báo <b>`private`</b> để bên ngoài không thể
									ghi đè trực tiếp.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[180px]">`getConnection(): `</b>
							<div>
								<span>
									Là method <b>`static`</b> — có thể gọi bằng <b>`Database::getConnection()`</b> ở bất kỳ đâu. Bên trong,
									nó kiểm tra: nếu <b>`$instance`</b> chưa tồn tại thì tạo mới, ngược lại trả lại instance đã có. Nhờ vậy
									toàn bộ ứng dụng chỉ dùng chung <b>một</b> kết nối duy nhất.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[180px]">`try / catch: `</b>
							<div>
								<span>
									Vẫn giữ nguyên như phần 1 — bắt <b>`PDOException`</b> khi kết nối lỗi và dừng chương trình để tránh
									tình trạng lỗi lan sang các layer phía trên.
								</span>
							</div>
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Sau khi đã có class <b>`Database`</b>, ở bất kỳ Model nào chúng ta chỉ cần gọi
					<b>`Database::getConnection()`</b> để lấy đối tượng PDO và thao tác với database — như bạn sẽ thấy ngay trong
					phần tạo Model bên dưới.
				</p>

				<PageHeading text="Tạo Model" addOnClass="text-left" markedAs="create-model" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong thư mục <FilePath>App/Models</FilePath> (namespace <b>`App\Models`</b>), chúng ta sẽ tạo một model
					cho product có tên là: <b>`ProductModel`</b>
				</p>

				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[70px]">conn:</b>
							<div>
								<span>
									Là properties dùng để lưu lại database, sẽ được dùng để xử lý các lệnh RAW SQL như thêm, sửa, xoá bản
									ghi sau này. Ở đây tôi khai báo nó là <b>`private`</b> để đảm bảo nó sẽ không thể truy cập ngoài
									Model.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[70px]">table:</b>
							<div>
								<span>
									Là properties dùng để lưu lại tên table, tương tự như <b>`$conn`</b> sẽ được dùng để xử lý các lệnh
									RAW SQL như thêm, sửa, xoá bản ghi sau này. Nó cũng sẽ được khai báo là <b>`private`</b>
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[70px]">$this->conn->query($sql):</b>
							<div>
								<span>
									Sẽ trả ra một <b>PDOStatement</b>, sau đó chúng ta có thể dùng method <b>fetchAll()</b> để lấy danh
									sách data. Các bạn có thể check các methods tương ứng tại:
									<a
										href="https://www.php.net/manual/en/class.pdostatement.php"
										target="_blank"
										rel="noreferrer"
										class="underline text-blue-500"
									>
										đây
									</a>
								</span>
							</div>
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Đọc lại
					<a
						href="/php/documentation/php-mvc#mvc-model"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						mô hình MVC
					</a>
					để nắm rõ Model có trách nhiệm như thế nào. Tiếp theo, chúng ta sẽ định nghĩa các methods cho model để xử lý
					bài toán CRUD.
				</p>
				<PageHeading text="Read - Đọc data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-read" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lấy ra danh sách các bản ghi trong database</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Create - Thêm data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-create" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lưu bản ghi vào database</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Update - Cập nhật data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-update" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Cập nhật bản ghi vào database</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Delete - Xoá data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-delete" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Xoá bản ghi khỏi database</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="tomorrow-night-bright" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Đến đây chúng ta đã có một Model chạy được với đầy đủ 4 method CRUD. Tuy nhiên, để chuyên nghiệp hơn và có nền
					tảng học tiếp <b>Laravel</b> ở các buổi sau, chúng ta sẽ nâng cấp Model thêm một bước nữa.
				</p>

				<PageHeading
					text="Nâng cấp Model — chuẩn hoá theo hướng Laravel"
					addOnClass="text-left"
					markedAs="upgrade-model"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở phần CRUD ở trên, code đang ở mức <b>"chạy được"</b> — dùng raw SQL và ghép trực tiếp data từ user vào chuỗi
					câu lệnh. Cách này dễ đọc nhưng ẩn chứa 2 vấn đề lớn:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Rủi ro <b>SQL Injection</b> — user có thể tiêm câu lệnh SQL độc hại vào input để phá database.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Chưa có convention chuẩn để về sau nâng cấp lên <b>Laravel Eloquent</b> — framework chúng ta sẽ học ở các
						buổi tiếp theo.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở phần này, chúng ta sẽ refactor Model theo hướng chuyên nghiệp hơn — chính là cách mà các framework như
					Laravel đang làm dưới capot.
				</p>

				<PageHeading
					text="Prepared Statements — bảo vệ Model khỏi SQL Injection"
					:lvl="2"
					addOnClass="text-left mb-1"
					markedAs="model-prepared"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nhìn lại đoạn Create phía trên:
					<b>`$sql = "INSERT INTO products (product_name) VALUES ('{$data['product_name']}')"`</b>. Nếu ai đó gửi
					<b>`product_name = abc'); DROP TABLE products; --`</b> thì database có thể bị xoá sạch. Đây là lỗ hổng
					<b>SQL Injection</b> — cực kỳ nguy hiểm và cực kỳ phổ biến.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Giải pháp: dùng <b>Prepared Statements</b> — data được truyền qua các placeholder (<b>`:name`</b>) chứ không
					ghép trực tiếp vào chuỗi SQL. Refactor lại method <b>`create`</b>:
				</p>
				<VCodeBlock :code="bPrepared" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[220px]">`$conn->prepare($sql):`</b>
							<div>
								<span>
									Trả về một <b>`PDOStatement`</b> với các placeholder (<b>`:product_name`</b>,
									<b>`:description`</b>...) — được hiểu như một template SQL chưa gắn giá trị.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[220px]">`$stmt->execute([...]):`</b>
							<div>
								<span>
									Truyền data vào các placeholder. Trước khi execute, PDO sẽ <b>tự escape</b> — mọi ký tự nguy hiểm
									được biến thành text thuần, không thể phá SQL. Đây là lá chắn tự nhiên chống SQL Injection.
								</span>
							</div>
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trên Laravel, khi bạn viết <b>`Product::create($data)`</b> hoặc <b>`DB::insert(...)`</b>, framework cũng đang
					chạy Prepared Statements phía dưới — chỉ khác là được gói vào 1 dòng code gọn gàng.
				</p>

				<PageHeading
					text="Mở rộng Model với các phương thức truy vấn thường dùng"
					:lvl="2"
					addOnClass="text-left mb-1"
					markedAs="model-methods"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Một Model thực tế không dừng lại ở 4 method CRUD. Chúng ta bổ sung thêm những method mà Laravel Eloquent hỗ
					trợ sẵn — sau này chuyển sang Eloquent bạn sẽ thấy gần như y hệt:
				</p>
				<VCodeBlock :code="bMethods" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[140px]">`find($id):`</b>
							<div>
								<span>
									Tìm 1 bản ghi theo primary key, trả về mảng data hoặc <b>`false`</b> nếu không có. Eloquent tương
									đương: <b>`Product::find($id)`</b>.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[140px]">`where(...):`</b>
							<div>
								<span>
									Filter records theo 1 điều kiện. Eloquent: <b>`Product::where('brand_id', 5)->get()`</b>.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[140px]">`count():`</b>
							<div>
								<span>
									Đếm tổng số bản ghi — dùng nhiều cho phân trang, dashboard, thống kê. Eloquent:
									<b>`Product::count()`</b>.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[140px]">`exists($id):`</b>
							<div>
								<span>
									Check xem 1 record có tồn tại không — dùng để validate trước khi update/delete, tránh chạy query thừa
									và trả về response lỗi rõ ràng cho client.
								</span>
							</div>
						</li>
					</ul>
				</div>

				<PageHeading
					text="Chuẩn hoá properties của Model (Entity)"
					:lvl="2"
					addOnClass="text-left mb-1"
					markedAs="model-entity"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nhìn lại <b>`ProductModel`</b>, chúng ta mới khai báo <b>`$conn`</b> và <b>`$table`</b>. Để tiến gần hơn tới
					Laravel Eloquent, hãy bổ sung các properties chuẩn của một <b>Entity</b>:
				</p>
				<VCodeBlock :code="bEntity" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[170px]">`$primaryKey:`</b>
							<div>
								<span>
									Tên cột khoá chính — mặc định trong Laravel là <b>`id`</b>. Tách riêng property này giúp Model có thể
									tái sử dụng cho các table có primary key khác (ví dụ <b>`user_id`</b>, <b>`slug`</b>).
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[170px]">`$fillable:`</b>
							<div>
								<span>
									Danh sách các cột được phép gán khi create/update. Trong Laravel, đây là biện pháp chống
									<b>Mass Assignment</b> — user không thể "chèn thêm" các field nhạy cảm như <b>`is_admin`</b> qua
									form.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[170px]">`$timestamps:`</b>
							<div>
								<span>
									Cờ bật/tắt tự động ghi <b>`created_at`</b> và <b>`updated_at`</b> khi insert/update. Laravel bật
									<b>`true`</b> mặc định.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[170px]">`filterFillable():`</b>
							<div>
								<span>
									Helper lọc data — chỉ giữ các cột nằm trong <b>`$fillable`</b> trước khi ghi database. Tương đương
									<b>`$request->only($fillable)`</b> bên Laravel.
								</span>
							</div>
						</li>
					</ul>
				</div>

				<PageHeading
					text="Áp dụng $fillable & $timestamps vào CRUD"
					:lvl="2"
					addOnClass="text-left mb-1"
					markedAs="model-entity-apply"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Các property vừa khai báo mới chỉ là <b>"kê khai"</b> — chưa có gì thay đổi trong hành vi thực tế. Chúng ta
					cần refactor <b>`create()`</b> và <b>`update()`</b> để <b>thực sự đọc</b> <b>`$fillable`</b>,
					<b>`$timestamps`</b> và <b>`$primaryKey`</b> ra sử dụng:
				</p>
				<VCodeBlock :code="bApplyEntity" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đoạn code trên:
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[240px]">`filterFillable($data):`</b>
							<div>
								<span>
									Chống <b>Mass Assignment</b> — user có thể gửi kèm <b>`is_admin`</b>, <b>`role`</b>,
									<b>`price_admin_override`</b>... qua form, nhưng những cột không nằm trong <b>`$fillable`</b> sẽ bị
									lọc bỏ trước khi ghi DB. Controller không cần whitelist thủ công nữa.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[240px]">`if ($this->timestamps):`</b>
							<div>
								<span>
									Tự động thêm <b>`created_at`</b> khi insert và <b>`updated_at`</b> khi update. Không phải copy-paste
									<b>`date('Y-m-d H:i:s')`</b> ở mọi Controller — Model tự lo. Muốn tắt: chỉ cần đổi
									<b>`protected $timestamps = false`</b>, không phải sửa CRUD.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[240px]">Build SQL động:</b>
							<div>
								<span>
									<b>`$columns`</b> và <b>`$placeholders`</b> được sinh từ chính key của <b>`$data`</b> đã lọc — khi
									thêm cột mới vào <b>`$fillable`</b>, không cần đụng vào <b>`create()`</b> / <b>`update()`</b>. Model
									tự thích ứng.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[240px]">`WHERE {$this->primaryKey}`:</b>
							<div>
								<span>
									Update dùng property <b>`$primaryKey`</b> thay vì hardcode <b>`id`</b>. Nếu sau này Model dùng cho
									table có khoá chính khác (<b>`slug`</b>, <b>`code`</b>...), chỉ cần đổi 1 property duy nhất.
								</span>
							</div>
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Từ Controller, giờ đây bạn có thể tự tin forward toàn bộ input mà không lo bảo mật hay ngày giờ:
				</p>
				<VCodeBlock :code="bControllerUsage" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong Laravel, <b>`Product::create($request->all())`</b> hoạt động chính xác theo cùng cơ chế — lọc
					<b>`$fillable`</b>, tự set <b>`timestamps`</b>, build SQL động. Chúng ta vừa build lại "underlying mechanism"
					đó bằng ~40 dòng PHP thuần.
				</p>

				<PageHeading
					text="Cầu nối tới Laravel Eloquent"
					:lvl="2"
					addOnClass="text-left mb-1"
					markedAs="model-eloquent-bridge"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đến đây, <b>`ProductModel`</b> của chúng ta đã có kha khá điểm tương đồng với <b>`Model`</b> của Laravel
					Eloquent. Xem bảng đối chiếu:
				</p>
				<div class="overflow-x-auto my-5">
					<table class="w-full text-left border-collapse text-slate-900 dark:text-white text-base">
						<thead>
							<tr class="border-b-2 border-slate-400 dark:border-slate-500">
								<th class="py-2 px-3">Model tự viết</th>
								<th class="py-2 px-3">Laravel Eloquent</th>
								<th class="py-2 px-3">Mục đích</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`$table`</b></td>
								<td class="py-2 px-3">`protected $table`</td>
								<td class="py-2 px-3">Tên bảng</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`$primaryKey`</b></td>
								<td class="py-2 px-3">`protected $primaryKey`</td>
								<td class="py-2 px-3">Khoá chính</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`$fillable`</b></td>
								<td class="py-2 px-3">`protected $fillable`</td>
								<td class="py-2 px-3">Chống mass assignment</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`$timestamps`</b></td>
								<td class="py-2 px-3">`public $timestamps`</td>
								<td class="py-2 px-3">Tự ghi `created_at` / `updated_at`</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`->read()`</b></td>
								<td class="py-2 px-3">`Product::all()`</td>
								<td class="py-2 px-3">Lấy tất cả</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`->find($id)`</b></td>
								<td class="py-2 px-3">`Product::find($id)`</td>
								<td class="py-2 px-3">Tìm theo primary key</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`->where($col, $val)`</b></td>
								<td class="py-2 px-3">`Product::where($col, $val)->get()`</td>
								<td class="py-2 px-3">Filter</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`->create($data)`</b></td>
								<td class="py-2 px-3">`Product::create($data)`</td>
								<td class="py-2 px-3">Thêm bản ghi</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`->update($id, $data)`</b></td>
								<td class="py-2 px-3">`Product::find($id)->update($data)`</td>
								<td class="py-2 px-3">Cập nhật</td>
							</tr>
							<tr class="border-b border-slate-300 dark:border-slate-600">
								<td class="py-2 px-3"><b>`->delete($id)`</b></td>
								<td class="py-2 px-3">`Product::find($id)->delete()`</td>
								<td class="py-2 px-3">Xoá</td>
							</tr>
							<tr>
								<td class="py-2 px-3"><b>`->count()`</b></td>
								<td class="py-2 px-3">`Product::count()`</td>
								<td class="py-2 px-3">Đếm bản ghi</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Khi lên Laravel, bạn <b>không cần</b> tự viết tất cả những thứ này — chỉ cần
					<b>`class Product extends Model`</b> là có sẵn toàn bộ method truy vấn, quan hệ (<b>`hasMany`</b>,
					<b>`belongsTo`</b>...), scope, event, cache, soft delete... Nhưng nhờ hiểu được cách nó vận hành bên dưới, bạn
					sẽ debug và tối ưu Eloquent tốt hơn rất nhiều so với những người chỉ dùng như hộp đen.
				</p>

				<PageHeading text="Seed dữ liệu để test Model" addOnClass="text-left" markedAs="seed-data" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Model đã hoàn thiện, giờ cần chút dữ liệu mẫu để test các luồng CRUD. Thay vì insert thủ công từ phpMyAdmin,
					chúng ta viết một <b>Seeder</b> theo phong cách Laravel — 1 class có method <b>`run()`</b>, gọi
					<b>`ProductModel->create()`</b> cho từng bản ghi.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tạo file <FilePath>App/Database/Seeders/ProductSeeder.php</FilePath> (namespace
					<b>`App\Database\Seeders`</b>):
				</p>
				<VCodeBlock :code="bSeeder" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Sau đó tạo file runner <FilePath>seed.php</FilePath> ở project root để invoke seeder:
				</p>
				<VCodeBlock :code="bSeedRunner" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">Chạy trong terminal:</p>
				<FakeTerminalUI textCoppy="php seed.php" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Sau vài giây, mở phpMyAdmin sẽ thấy 15 sản phẩm mẫu trong bảng <b>`products`</b> — cả cột
					<b>`created_at`</b> cũng được điền tự động do Model đã bật <b>`$timestamps`</b>. Muốn seed lại từ đầu, chạy
					<b>`TRUNCATE products`</b> rồi <b>`php seed.php`</b> là xong.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ghi chú: đây chính là pattern mà Laravel gói sẵn dưới
					<b>`php artisan make:seeder ProductSeeder`</b> + <b>`php artisan db:seed`</b> — bên dưới cũng chỉ là một class
					có method <b>`run()`</b> gọi Model để insert data. Bạn vừa build lại y hệt bằng ~30 dòng PHP thuần.
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) xong phần 2 — chúng ta đã hoàn thành một <b>`ProductModel`</b> chuẩn hoá theo hướng Laravel. Ở
					<a
						href="/php/documentation/php-and-database-p3"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						phần 3
					</a>
					chúng ta sẽ tạo <b>`ProductController`</b> để làm cầu nối giữa View và Model. See ya!!
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
						title: 'PHP & Database - Phần 3: Tạo Controller',
						link: '/php/documentation/php-and-database-p3',
					},
					prev: {
						title: 'PHP & Database - Phần 1',
						link: '/php/documentation/php-and-database-p1',
					},
				},
				bProjectTree: `project/
├── App/
│   ├── Database/
│   │   ├── Database.php            # namespace App\\Database
│   │   └── Seeders/
│   │       └── ProductSeeder.php   # namespace App\\Database\\Seeders
│   ├── Models/
│   │   └── ProductModel.php        # namespace App\\Models
│   └── Controllers/
│       └── ProductController.php   # namespace App\\Controllers (bài kế)
├── composer.json                   # "App\\\\": "App/" trong autoload.psr-4
├── vendor/                         # do composer install sinh ra
│   └── autoload.php
├── seed.php                        # runner: php seed.php
└── index.php                       # require_once 'vendor/autoload.php';
`,
				bDatabase: `// App/Database/Database.php
<?php
namespace App\\Database;

use PDO;
use PDOException;

class Database
{
    private static ?PDO $instance = null;

    // Method static — có thể gọi ở bất kỳ đâu qua Database::getConnection()
    public static function getConnection(): PDO
    {
        if (self::$instance === null) {
            $host     = 'localhost';
            $port     = '3306';
            $dbname   = 'hello_php';
            $username = 'root';
            $password = '';

            try {
                self::$instance = new PDO(
                    "mysql:host={$host};port={$port};dbname={$dbname}",
                    $username,
                    $password,
                );
                self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$instance->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                self::$instance->exec("SET NAMES 'utf8'");
            } catch (PDOException $e) {
                echo "Kết nối thất bại: " . $e->getMessage();
                exit();
            }
        }

        return self::$instance;
    }
}
`,
				b1: `// App/Models/ProductModel.php
<?php
namespace App\\Models;

use App\\Database\\Database;
use PDO;

class ProductModel
{
    private PDO $conn;
    private string $table = 'products';

    public function __construct()
    {
        $this->conn = Database::getConnection();
    }

    public function read(): array
    {
        $sql = "SELECT * FROM {$this->table}";
        return $this->conn->query($sql)->fetchAll();
    }
}
`,
				b2: `// Lấy danh sách products
public function read(): array
{
    $sql = "SELECT * FROM {$this->table}";
    return $this->conn->query($sql)->fetchAll();
}`,
				b3: `// Tạo bản ghi mới (bản chưa an toàn — sẽ refactor bằng Prepared Statements ở dưới)
public function create(array $data): bool
{
    $sql = "INSERT INTO {$this->table}
            (product_name, description, images, regular_price, sale_price, brand_id, category_id)
            VALUES
            ('{$data['product_name']}', '{$data['description']}', '{$data['images']}',
             {$data['regular_price']}, {$data['sale_price']},
             {$data['brand_id']}, {$data['category_id']})";

    return $this->conn->exec($sql) > 0;
}`,
				b4: `// Update bản ghi
public function update(int $id, array $data): bool
{
    $sql = "UPDATE {$this->table}
    SET product_name   = '{$data['product_name']}',
        description    = '{$data['description']}',
        images         = '{$data['images']}',
        regular_price  = {$data['regular_price']},
        sale_price     = {$data['sale_price']},
        brand_id       = {$data['brand_id']},
        category_id    = {$data['category_id']}
    WHERE id = {$id}";

    return $this->conn->exec($sql) > 0;
}`,
				b5: `// Xoá bản ghi
public function delete(int $id): bool
{
    $sql = "DELETE FROM {$this->table} WHERE id = {$id}";
    return $this->conn->exec($sql) > 0;
}`,
				bPrepared: `// App/Models/ProductModel.php — Create dùng Prepared Statements
// (namespace App\\Models; use App\\Database\\Database; đã khai báo ở đầu file)
public function create(array $data): bool
{
    $sql = "INSERT INTO {$this->table}
            (product_name, description, images, regular_price, sale_price, brand_id, category_id)
            VALUES
            (:product_name, :description, :images, :regular_price, :sale_price, :brand_id, :category_id)";

    $stmt = $this->conn->prepare($sql);
    return $stmt->execute([
        ':product_name'  => $data['product_name'],
        ':description'   => $data['description'],
        ':images'        => $data['images'],
        ':regular_price' => $data['regular_price'],
        ':sale_price'    => $data['sale_price'],
        ':brand_id'      => $data['brand_id'],
        ':category_id'   => $data['category_id'],
    ]);
}
`,
				bMethods: `// App/Models/ProductModel.php — Các method truy vấn thường dùng
// (đã có: namespace App\\Models; use PDO; ở đầu file)

// Tìm 1 bản ghi theo primary key — trả về mảng data hoặc false nếu không có
public function find(int|string $id): array|false
{
    $sql = "SELECT * FROM {$this->table} WHERE {$this->primaryKey} = :id LIMIT 1";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute([':id' => $id]);
    return $stmt->fetch();
}

// Filter records theo 1 điều kiện
public function where(string $column, int|string $value): array
{
    $sql = "SELECT * FROM {$this->table} WHERE {$column} = :value";
    $stmt = $this->conn->prepare($sql);
    $stmt->execute([':value' => $value]);
    return $stmt->fetchAll();
}

// Đếm tổng số bản ghi
public function count(): int
{
    $sql = "SELECT COUNT(*) FROM {$this->table}";
    return (int) $this->conn->query($sql)->fetchColumn();
}

// Kiểm tra bản ghi có tồn tại
public function exists(int|string $id): bool
{
    return $this->find($id) !== false;
}
`,
				bEntity: `// App/Models/ProductModel.php — Chuẩn Entity
<?php
namespace App\\Models;

use App\\Database\\Database;
use PDO;

class ProductModel
{
    private PDO $conn;

    protected string $table      = 'products';
    protected string $primaryKey = 'id';

    /** @var list<string> */
    protected array $fillable = [
        'product_name',
        'description',
        'images',
        'regular_price',
        'sale_price',
        'brand_id',
        'category_id',
    ];

    protected bool $timestamps = true; // Tự ghi created_at / updated_at

    public function __construct()
    {
        $this->conn = Database::getConnection();
    }

    // Lọc data — chỉ giữ các cột được phép gán
    protected function filterFillable(array $data): array
    {
        return array_intersect_key($data, array_flip($this->fillable));
    }

    // ... các method CRUD, find, where, count, exists ở dưới ...
}
`,
				bApplyEntity: `// App/Models/ProductModel.php — create() & update() tận dụng $fillable, $timestamps, $primaryKey
// (đã có: namespace App\\Models; use App\\Database\\Database; use PDO; ở đầu file)
public function create(array $data): bool
{
    // 1. Chỉ giữ các cột được phép gán
    $data = $this->filterFillable($data);

    // 2. Bật $timestamps → tự set created_at
    if ($this->timestamps) {
        $data['created_at'] = date('Y-m-d H:i:s');
    }

    // 3. Build câu SQL từ chính danh sách key đã lọc
    $columns      = implode(', ', array_keys($data));
    $placeholders = ':' . implode(', :', array_keys($data));

    $sql  = "INSERT INTO {$this->table} ({$columns}) VALUES ({$placeholders})";
    $stmt = $this->conn->prepare($sql);

    // 4. Bind — thêm prefix ':' vào từng key
    $bindings = [];
    foreach ($data as $col => $val) {
        $bindings[':' . $col] = $val;
    }

    return $stmt->execute($bindings);
}

public function update(int|string $id, array $data): bool
{
    // 1. Lọc data — chống mass assignment
    $data = $this->filterFillable($data);

    // 2. Bật $timestamps → tự set updated_at
    if ($this->timestamps) {
        $data['updated_at'] = date('Y-m-d H:i:s');
    }

    // 3. Build câu SET động: col = :col, ...
    $setParts = [];
    foreach (array_keys($data) as $col) {
        $setParts[] = "{$col} = :{$col}";
    }
    $setClause = implode(', ', $setParts);

    $sql  = "UPDATE {$this->table} SET {$setClause} WHERE {$this->primaryKey} = :id";
    $stmt = $this->conn->prepare($sql);

    // 4. Bind data + primary key
    $bindings = [':id' => $id];
    foreach ($data as $col => $val) {
        $bindings[':' . $col] = $val;
    }

    return $stmt->execute($bindings);
}
`,
				bSeeder: `// App/Database/Seeders/ProductSeeder.php
<?php
namespace App\\Database\\Seeders;

use App\\Models\\ProductModel;

class ProductSeeder
{
    public function run(): void
    {
        $model = new ProductModel();

        foreach ($this->data() as $product) {
            $model->create($product);
        }

        echo "Đã seed " . count($this->data()) . " sản phẩm.\\n";
    }

    /** @return array<int, array<string, mixed>> */
    private function data(): array
    {
        return [
            $this->row('iPhone 15 Pro',        'Chip A17 Pro, camera 48MP',       28990000, 27490000, 1, 1),
            $this->row('Galaxy S24 Ultra',     'S Pen, camera 200MP',             26990000, 25490000, 2, 1),
            $this->row('Xiaomi 14 Pro',        'Leica, Snapdragon 8 Gen 3',       22990000, 21490000, 3, 1),
            $this->row('Oppo Find X7 Ultra',   'Camera Hasselblad',               24990000, 23990000, 4, 1),
            $this->row('MacBook Pro 14 M3',    'Apple M3, RAM 16GB, SSD 512GB',   45990000, 43990000, 1, 2),
            $this->row('Dell XPS 15 9530',     'i7-13700H, RAM 32GB, RTX 4060',   52990000, 49990000, 5, 2),
            $this->row('ASUS ROG Strix G16',   'i9, RTX 4070, RAM 32GB',          42990000, 39990000, 6, 2),
            $this->row('ThinkPad X1 Carbon',   'Ultrabook, i7, RAM 16GB',         38990000, 36990000, 7, 2),
            $this->row('iPad Air M2 11 inch',  'Chip M2, Liquid Retina',          16990000, 15990000, 1, 3),
            $this->row('Galaxy Tab S9',        'AMOLED 11 inch, kèm S Pen',       19990000, 18490000, 2, 3),
            $this->row('Apple Watch Series 9', 'Chip S9, cảm biến nhịp tim',      10990000, 9990000,  1, 4),
            $this->row('Galaxy Watch 6',       'Viền xoay, đo huyết áp',          8990000,  7990000,  2, 4),
            $this->row('Sony WH-1000XM5',      'Chống ồn hàng đầu, pin 30h',      8490000,  7490000,  8, 5),
            $this->row('AirPods Pro 2',        'Chống ồn, âm thanh không gian',   6490000,  5990000,  1, 5),
            $this->row('Logitech MX Master 3S','Chuột không dây, 8000 DPI',       2790000,  2490000,  9, 5),
        ];
    }

    private function row(
        string $name,
        string $description,
        int $regularPrice,
        int $salePrice,
        int $brandId,
        int $categoryId,
    ): array {
        return [
            'product_name'  => $name,
            'description'   => $description,
            'images'        => strtolower(str_replace(' ', '-', $name)) . '.jpg',
            'regular_price' => $regularPrice,
            'sale_price'    => $salePrice,
            'brand_id'      => $brandId,
            'category_id'   => $categoryId,
        ];
    }
}
`,
				bSeedRunner: `// seed.php (project root)
<?php
require_once __DIR__ . '/vendor/autoload.php';

use App\\Database\\Seeders\\ProductSeeder;

(new ProductSeeder())->run();
`,
				bControllerUsage: `// App/Controllers/ProductController.php — dùng Model đã chuẩn hoá
// <?php
// namespace App\\Controllers;
// use App\\Models\\ProductModel;
//
// class ProductController
// {
//     // PHP 8: constructor property promotion — tự tạo private ProductModel $productModel
//     public function __construct(private ProductModel $productModel) {}
//     ...
// }

public function store(array $data): bool
{
    // $data có thể là toàn bộ $_POST — chứa cả field lạ như 'is_admin', 'role'...
    // Model sẽ tự filterFillable() để lọc, tự set created_at.
    // Controller chỉ việc forward — không cần whitelist thủ công.
    return $this->productModel->create($data);
}

public function edit(int $id, array $data): bool
{
    // Tương tự — Model tự lọc + tự set updated_at
    return $this->productModel->update($id, $data);
}
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
