<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Controller & Router" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở phần 2 chúng ta đã có <FilePath>App\Models\ProductModel</FilePath>. Bài này sẽ tạo mới
					<b>App\Controllers\ProductController</b> để làm cầu nối giữa View và Model, sau đó xây một class
					<FilePath>App\Core\Route</FilePath> để tự động điều phối URL — clone lại cách viết
					<FilePath>Route::get()</FilePath>, <FilePath>Route::post()</FilePath> quen thuộc của Laravel.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì bài trước đã học <b>namespace</b> và <b>Composer autoload (PSR-4)</b>, mọi code sample dưới đây sẽ khai báo
					<FilePath>namespace App\...;</FilePath> ở đầu file và dùng <FilePath>use</FilePath> để import class. File
					<FilePath>index.php</FilePath> chỉ cần <FilePath>require 'vendor/autoload.php'</FilePath> một lần — không còn
					phải <FilePath>require_once</FilePath> thủ công.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Nội dung chính:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Tạo Controller và viết method gọi Model (index / show / store / update / destroy).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Dependency Injection (DI)</b> — cách "đưa sẵn phụ thuộc từ ngoài vào" thay vì tự tạo bên trong.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Xây <FilePath>Route</FilePath> class có <FilePath>Route::get()</FilePath>,
						<FilePath>Route::post()</FilePath>, <FilePath>Route::dispatch()</FilePath>.
					</li>
				</ul>

				<PageHeading
					text="1. Tạo Controller — gọi Model"
					addOnClass="text-left mt-5"
					markedAs="controller-call-model"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong thư mục <FilePath>App/Controllers</FilePath>, tạo file <FilePath>ProductController.php</FilePath>.
					Controller <b>không</b> tự query DB — nó chỉ giữ 1 tham chiếu tới Model, gọi Model để lấy/lưu dữ liệu, rồi trả
					kết quả về cho View. Cấu trúc khởi đầu như sau:
				</p>
				<VCodeBlock :code="bCtrlSkeleton" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Giải thích các thành phần:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>namespace App\Controllers;</FilePath> — khai báo file này thuộc namespace
						<FilePath>App\Controllers</FilePath>, đúng chuẩn PSR-4.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>use App\Models\ProductModel;</FilePath> — import Model từ namespace khác. Nhờ có Composer
						autoload, file class sẽ được nạp tự động khi ta <FilePath>new</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$productModel</FilePath> khai báo <b>private</b> — bên ngoài Controller không được đụng vào Model
						trực tiếp, mọi thao tác đều phải đi qua method của Controller.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>__construct()</FilePath> — Controller tự <FilePath>new ProductModel()</FilePath> bên trong. Cách
						này chạy được nhưng khoá cứng Controller với Model — mục 2 (DI) sẽ refactor lại.
					</li>
				</ul>

				<PageHeading
					text="Viết 5 method CRUD"
					addOnClass="text-left mt-3"
					markedAs="controller-crud-methods"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đầy đủ Controller sẽ có 5 action tương ứng 5 thao tác REST cơ bản:
				</p>
				<VCodeBlock :code="bCtrlFull" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chú ý: mỗi method Controller đều <b>gọn dưới 10 dòng</b>. Nếu bạn thấy Controller phình ra vì logic tính giá,
					validate phức tạp — nên chuyển xuống Model. Đây là quy tắc "thin controller, fat model".
				</p>

				<PageHeading
					text="Gắn Controller vào index.php"
					addOnClass="text-left mt-3"
					markedAs="wire-controller"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>index.php</FilePath> lúc này chỉ cần <FilePath>require vendor/autoload.php</FilePath> rồi
					<FilePath>new ProductController()</FilePath> — Composer autoload lo phần nạp file:
				</p>
				<VCodeBlock :code="bWire" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Test nhanh: chạy <FilePath textCoppy="php -S localhost:8000">php -S localhost:8000</FilePath>, truy cập
					<FilePath>http://localhost:8000/</FilePath> phải thấy danh sách sản phẩm.
				</p>

				<PageHeading text="2. Dependency Injection (DI)" addOnClass="text-left mt-5" markedAs="di" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Dependency Injection</b> = "tiêm phụ thuộc vào từ ngoài". Nghe kêu vậy thôi, ý tưởng cực đơn giản:
					<b>class cần cái gì thì bên ngoài đưa vào cho, đừng tự tạo bên trong</b>.
				</p>

				<PageHeading text="Ví dụ liên tưởng" addOnClass="text-left mt-3" markedAs="di-analogy" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nghĩ về máy pha cà phê: nếu máy <b>tự trồng cà phê</b> thì bạn không đổi được loại hạt. Nhưng nếu máy
					<b>nhận hạt cà phê từ ngoài đưa vào</b> — hôm nay Arabica, mai Robusta — thoải mái. Class cũng vậy: class nào
					tự <FilePath>new</FilePath> phụ thuộc bên trong sẽ khó thay đổi và khó test.
				</p>

				<PageHeading text="Không dùng DI (khó bảo trì)" addOnClass="text-left mt-3" markedAs="di-no" :lvl="2" />
				<VCodeBlock :code="bNoDi" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Vấn đề của đoạn code trên:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Muốn dùng Model khác (ví dụ <FilePath>ProductModelFake</FilePath> để test) → phải sửa cả Controller.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Nếu <FilePath>ProductModel</FilePath> đổi tham số constructor → mọi Controller đang
						<FilePath>new</FilePath> nó đều phải sửa theo.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Controller "biết quá nhiều" về Model — trái với nguyên tắc tách lớp.
					</li>
				</ul>

				<PageHeading text="Dùng DI qua Constructor Injection" addOnClass="text-left mt-3" markedAs="di-yes" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cách phổ biến nhất là <b>Constructor Injection</b>: khai báo phụ thuộc ở constructor, ai gọi thì tự chuẩn bị
					và đưa vào.
				</p>
				<VCodeBlock :code="bWithDi" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Giờ ở <FilePath>index.php</FilePath>, bên ngoài chủ động tạo Model rồi "tiêm" vào Controller:
				</p>
				<VCodeBlock :code="bWireDi" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lợi ích ngay:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Đổi Model? Chỉ sửa 1 dòng ở <FilePath>index.php</FilePath>, Controller không đụng.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Test được: tạo <FilePath>ProductModelFake</FilePath> trả về data giả, inject vào Controller là chạy được
						ngay.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Đọc constructor là biết ngay class cần gì để chạy.
					</li>
				</ul>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm">
						<b>Ghi nhớ:</b> DI không phải "một thư viện" — nó chỉ là <b>quy tắc viết code</b>. Bạn không cần cài thêm
						gì. Trong Laravel/Symfony có "DI Container" tự động chuẩn bị và inject giúp bạn, nhưng ý tưởng gốc vẫn là:
						<b>đừng để class tự tạo phụ thuộc, hãy đưa từ ngoài vào.</b>
					</p>
				</div>

				<PageHeading
					text="3. Router — clone Route::get / Route::post của Laravel"
					addOnClass="text-left mt-5"
					markedAs="router"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Hiện tại <FilePath>index.php</FilePath> chỉ chạy được 1 route. Nếu bạn có thêm
					<FilePath>/products/create</FilePath>, <FilePath>/products/edit</FilePath>,
					<FilePath>/products/delete</FilePath>... — sẽ phải viết chuỗi <FilePath>if/elseif</FilePath> dài kinh khủng:
				</p>
				<VCodeBlock :code="bBadRouter" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Trong Laravel, bạn quen viết:</p>
				<VCodeBlock :code="bLaravelStyle" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Chúng ta sẽ tự dựng lại y hệt bằng PHP thuần.</p>

				<PageHeading text="Thiết kế class Route" addOnClass="text-left mt-3" markedAs="router-design" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ý tưởng: mỗi lần bạn gọi <FilePath>Route::get('/products', ...)</FilePath>, class lưu route vào 1 mảng static.
					Cuối cùng gọi <FilePath>Route::dispatch()</FilePath> — nó đọc URL hiện tại và HTTP method, tìm route khớp rồi
					chạy callback tương ứng.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Cấu trúc dữ liệu bên trong:</p>
				<VCodeBlock :code="bRouteShape" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Cài đặt class Route" addOnClass="text-left mt-3" markedAs="router-impl" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Tạo file <FilePath>core/Route.php</FilePath>:</p>
				<VCodeBlock :code="bRouteClass" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Giải thích nhanh:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>self::$routes</FilePath> là <b>static</b> nên tồn tại trong suốt vòng đời request, không cần khởi
						tạo object.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>get / post / put / delete</FilePath> chỉ là 4 shortcut gọi qua <FilePath>add()</FilePath> — key
						mảng chính là HTTP method.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>dispatch()</FilePath> đọc <FilePath>$_SERVER['REQUEST_METHOD']</FilePath> và
						<FilePath>REQUEST_URI</FilePath>, so khớp rồi <FilePath>call_user_func($callback)</FilePath> — tương đương
						gọi function/closure.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>parse_url</FilePath> để bỏ query string — <FilePath>/products?page=2</FilePath> vẫn khớp
						<FilePath>/products</FilePath>.
					</li>
				</ul>

				<PageHeading
					text="Route động — /products/{id}"
					addOnClass="text-left mt-3"
					markedAs="router-dynamic"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bản trên chỉ khớp URL chính xác. Muốn hỗ trợ <FilePath>/products/{id}</FilePath> (như Laravel), ta chuyển
					pattern <FilePath>{id}</FilePath> thành regex <FilePath>([^/]+)</FilePath> và truyền các giá trị match vào
					callback:
				</p>
				<VCodeBlock :code="bRouteDynamic" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Giờ khai báo <FilePath>Route::get('/products/{id}', fn($id) => $ctrl->show($id))</FilePath> là đủ — giá trị
					<FilePath>id</FilePath> trong URL sẽ được truyền vào tham số đầu tiên của callback.
				</p>

				<PageHeading
					text="4. Kết hợp DI + Router trong index.php"
					addOnClass="text-left mt-5"
					markedAs="wire-all"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Ghép tất cả lại. Cấu trúc thư mục cuối cùng:</p>
				<VCodeBlock :code="bFinalTree" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">File <FilePath>index.php</FilePath> gọn gàng:</p>
				<VCodeBlock :code="bFinalIndex" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Chạy thử các URL:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Method</th>
								<th class="px-5 py-3">URL</th>
								<th class="px-5 py-3">Kết quả</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">GET</td>
								<td class="px-5 py-4"><FilePath>/products</FilePath></td>
								<td class="px-5 py-4">Danh sách sản phẩm</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">GET</td>
								<td class="px-5 py-4"><FilePath>/products/5</FilePath></td>
								<td class="px-5 py-4">Chi tiết product id = 5</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">POST</td>
								<td class="px-5 py-4"><FilePath>/products</FilePath></td>
								<td class="px-5 py-4">Tạo product mới</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">PUT</td>
								<td class="px-5 py-4"><FilePath>/products/5</FilePath></td>
								<td class="px-5 py-4">Update product id = 5</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">DELETE</td>
								<td class="px-5 py-4"><FilePath>/products/5</FilePath></td>
								<td class="px-5 py-4">Xoá product id = 5</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm">
						<b>Lưu ý:</b> browser chỉ gửi được <FilePath>GET</FilePath> và <FilePath>POST</FilePath> qua form thường.
						Muốn test <FilePath>PUT</FilePath>/<FilePath>DELETE</FilePath> hãy dùng Postman/curl, hoặc quy ước 1 hidden
						input <FilePath>&lt;input name="_method" value="PUT"&gt;</FilePath> — Laravel làm đúng cách này.
					</p>
				</div>

				<PageHeading text="Câu hỏi hay gặp" addOnClass="text-left mt-5" markedAs="faq" :lvl="1" />
				<PageHeading
					text="Q1: Sao method Route lại khai báo static?"
					addOnClass="text-left my-3"
					markedAs="faq-q1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Để gọi được kiểu <FilePath>Route::get(...)</FilePath> mà không cần <FilePath>new Route()</FilePath>. Mảng
					route cũng phải <FilePath>static</FilePath> để mọi lời gọi cùng ghi vào 1 chỗ. Nếu không, mỗi
					<FilePath>new Route()</FilePath> sẽ có mảng riêng — dispatch không thấy route nào.
				</p>
				<PageHeading
					text="Q2: DI có bắt buộc không? Bài p2 mình đã new ProductModel bên trong Controller vẫn chạy được mà?"
					addOnClass="text-left my-3"
					markedAs="faq-q2"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Không bắt buộc, code vẫn chạy.</b> Nhưng DI giúp bạn dễ đổi Model / dễ test / đọc constructor là biết class
					cần gì. Với dự án nhỏ có thể bỏ qua, còn dự án lớn thì DI gần như là chuẩn — Laravel và mọi framework PHP hiện
					đại đều theo.
				</p>
				<PageHeading
					text="Q3: Callback trong Route::get có thể là gì?"
					addOnClass="text-left my-3"
					markedAs="faq-q3"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>call_user_func</FilePath> chấp nhận nhiều dạng:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Closure: <FilePath>fn() =&gt; $ctrl-&gt;index()</FilePath>
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Array [object, method]: <FilePath>[$ctrl, 'index']</FilePath>
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Tên function: <FilePath>'myHandler'</FilePath>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong bài dùng closure vì nó cho phép truyền tham số từ URL vào Controller một cách rõ ràng.
				</p>

				<!-- ===================== LUYỆN TẬP ===================== -->
				<PageHeading text="Luyện tập" addOnClass="text-left mt-5" markedAs="practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					3 bài dựa trên code đã có ở bài. Copy starter, hoàn thiện <FilePath>TODO</FilePath>.
				</p>

				<!-- Bài 1 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							01
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Refactor Controller sang DI</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">Luyện: Constructor Injection.</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>Chuyển Controller ở dưới sang dạng DI — nhận sẵn <FilePath>ProductModel</FilePath> từ ngoài.</li>
						<li>
							Sửa <FilePath>index.php</FilePath> để tự tạo <FilePath>ProductModel</FilePath> rồi inject vào Controller.
						</li>
						<li>
							Bonus: tạo class <FilePath>ProductModelFake</FilePath> trả về data cứng, inject để test Controller không
							cần DB.
						</li>
					</ul>
					<VCodeBlock :code="p1" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 2 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							02
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Thêm Route::put và Route::delete</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">Luyện: bổ sung shortcut method vào class Route.</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Thêm 2 static method <FilePath>put()</FilePath> và <FilePath>delete()</FilePath> tương tự
							<FilePath>get()</FilePath> / <FilePath>post()</FilePath>.
						</li>
						<li>
							Trong <FilePath>index.php</FilePath>, đăng ký <FilePath>Route::put('/products/{id}', ...)</FilePath> và
							<FilePath>Route::delete('/products/{id}', ...)</FilePath>.
						</li>
						<li>
							Dùng curl để test:
							<FilePath textCoppy="curl -X DELETE http://localhost:8000/products/1"
								>curl -X DELETE http://localhost:8000/products/1</FilePath
							>.
						</li>
					</ul>
					<VCodeBlock :code="p2" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<!-- Bài 3 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							03
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Trang 404 khi URL không khớp</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: xử lý fallback trong <FilePath>dispatch()</FilePath>.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Trong <FilePath>Route::dispatch()</FilePath>, sau khi duyệt hết mảng mà không tìm thấy route khớp — trả
							<FilePath>http_response_code(404)</FilePath> và echo <FilePath>"404 — Not Found"</FilePath>.
						</li>
						<li>
							Bonus: thêm method <FilePath>Route::fallback($callback)</FilePath> cho phép user tự chỉ định callback 404.
							Nếu có fallback thì gọi, không có mới in "404 — Not Found".
						</li>
					</ul>
					<VCodeBlock :code="p3" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Xong bài này chúng ta đã có 1 mini-framework nhỏ: Model + Controller (DI) + Router. Bài sau sẽ dựng View + xử
					lý form từ phía người dùng. See ya!
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
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
				bCtrlSkeleton: `<?php
// App/Controllers/ProductController.php


namespace App\\Controllers;

use App\\Models\\ProductModel;

class ProductController
{
    private ProductModel $productModel;

    public function __construct()
    {
        // Tạm thời tự new Model — mục 2 (DI) sẽ refactor cho gọn hơn
        $this->productModel = new ProductModel();
    }

    // Các action index / show / store / update / destroy sẽ viết ở dưới
}`,
				bCtrlFull: `<?php
// App/Controllers/ProductController.php — đầy đủ 5 action CRUD


namespace App\\Controllers;

use App\\Models\\ProductModel;

class ProductController
{
    private ProductModel $productModel;

    public function __construct()
    {
        $this->productModel = new ProductModel();
    }

    // GET /products — danh sách
    public function index(): array
    {
        return $this->productModel->read();
    }

    // GET /products/{id} — chi tiết 1 sản phẩm
    public function show(int $id): array|false
    {
        return $this->productModel->find($id);
    }

    // POST /products — tạo mới
    public function store(array $data): array
    {
        $errors = $this->validate($data);
        if (!empty($errors)) {
            return ['success' => false, 'errors' => $errors];
        }
        $this->productModel->create($data);
        return ['success' => true];
    }

    // PUT /products/{id} — cập nhật
    public function update(int $id, array $data): array
    {
        $this->productModel->update($id, $data);
        return ['success' => true];
    }

    // DELETE /products/{id}
    public function destroy(int $id): array
    {
        $this->productModel->delete($id);
        return ['success' => true];
    }

    private function validate(array $data): array
    {
        $errors = [];
        if (empty($data['product_name'])) {
            $errors['product_name'] = 'Tên sản phẩm không được để trống.';
        }
        return $errors;
    }
}`,
				bWire: `<?php
// index.php — chỉ 1 lần require vendor autoload, mọi class trong App\\ tự nạp


require __DIR__ . '/vendor/autoload.php';

use App\\Controllers\\ProductController;

$ctrl = new ProductController();

// Test nhanh — chưa có router
$products = $ctrl->index();
foreach ($products as $p) {
    echo $p['product_name'] . '<br>';
}`,
				bNoDi: `<?php
// App/Controllers/ProductController.php — KHÔNG dùng DI


namespace App\\Controllers;

use App\\Models\\ProductModel;

class ProductController
{
    private ProductModel $productModel;

    public function __construct()
    {
        // Cứng nhắc: Controller tự new — muốn đổi Model phải sửa vào đây
        $this->productModel = new ProductModel();
    }
}

// index.php
$ctrl = new ProductController();  // gọn cho người dùng, nhưng khó bảo trì`,
				bWithDi: `<?php
// App/Controllers/ProductController.php — Constructor Injection


namespace App\\Controllers;

use App\\Models\\ProductModel;

class ProductController
{
    // PHP 8: constructor property promotion + readonly
    // Type-hint giúp IDE và PHP báo lỗi ngay nếu ai truyền sai kiểu
    public function __construct(
        private readonly ProductModel $productModel,
    ) {}

    public function index(): array
    {
        return $this->productModel->read();
    }
    // ...các method khác giữ nguyên...
}`,
				bWireDi: `<?php
// index.php — bên ngoài chuẩn bị và inject


require __DIR__ . '/vendor/autoload.php';

use App\\Models\\ProductModel;
use App\\Controllers\\ProductController;

$model = new ProductModel();              // tạo phụ thuộc ở ngoài
$ctrl  = new ProductController($model);   // "tiêm" vào Controller

$products = $ctrl->index();`,
				bBadRouter: `<?php
// Kiểu if/else — chấp nhận được cho 2-3 route, sẽ vỡ trận khi có 20+
$uri    = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($uri === '/products' && $method === 'GET') {
    $ctrl->index();
} elseif ($uri === '/products' && $method === 'POST') {
    $ctrl->store($_POST);
} elseif (preg_match('#^/products/(\\d+)$#', $uri, $m) && $method === 'GET') {
    $ctrl->show((int)$m[1]);
} elseif (/* ... 15 nhánh nữa ... */) {
    // ...
}`,
				bLaravelStyle: `<?php
// routes/web.php trong Laravel — quen thuộc, ngắn gọn
Route::get('/products',       [ProductController::class, 'index']);
Route::get('/products/{id}',  [ProductController::class, 'show']);
Route::post('/products',      [ProductController::class, 'store']);
Route::put('/products/{id}',  [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);`,
				bRouteShape: `<?php
// Mảng route trông như thế này bên trong class Route:
self::$routes = [
    'GET' => [
        '/products'      => $callback1,
        '/products/{id}' => $callback2,
    ],
    'POST' => [
        '/products' => $callback3,
    ],
    // 'PUT', 'DELETE'...
];`,
				bRouteClass: `<?php
// App/Core/Route.php


namespace App\\Core;

class Route
{
    /** @var array<string, array<string, callable>>  method → (path → callback) */
    private static array $routes = [];

    // Đăng ký route
    public static function add(string $method, string $path, callable $callback): void
    {
        self::$routes[$method][$path] = $callback;
    }

    // 4 shortcut cho HTTP method thường dùng
    public static function get(string $path, callable $cb): void    { self::add('GET',    $path, $cb); }
    public static function post(string $path, callable $cb): void   { self::add('POST',   $path, $cb); }
    public static function put(string $path, callable $cb): void    { self::add('PUT',    $path, $cb); }
    public static function delete(string $path, callable $cb): void { self::add('DELETE', $path, $cb); }

    // Chạy: đọc URL hiện tại, tìm route khớp và gọi callback
    public static function dispatch(): void
    {
        $method = $_SERVER['REQUEST_METHOD'];
        // Bỏ query string: /products?page=2 → /products
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        $routes = self::$routes[$method] ?? [];
        foreach ($routes as $path => $callback) {
            if ($path === $uri) {
                call_user_func($callback);
                return;
            }
        }

        // Không khớp route nào
        http_response_code(404);
        echo '404 — Not Found';
    }
}`,
				bRouteDynamic: `<?php
// dispatch() bản hỗ trợ {param} — thay foreach cũ bằng đoạn này
public static function dispatch(): void
{
    $method = $_SERVER['REQUEST_METHOD'];
    $uri    = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $routes = self::$routes[$method] ?? [];

    foreach ($routes as $path => $callback) {
        // Đổi /products/{id} → regex #^/products/([^/]+)$#
        $pattern = '#^' . preg_replace('#\\{[^/]+\\}#', '([^/]+)', $path) . '$#';

        if (preg_match($pattern, $uri, $matches)) {
            array_shift($matches);              // bỏ phần match toàn bộ
            call_user_func_array($callback, $matches);
            return;
        }
    }

    http_response_code(404);
    echo '404 — Not Found';
}`,
				bFinalTree: `mvc-shop/
├── composer.json                    # autoload PSR-4: "App\\\\": "App/"
├── vendor/                          # do "composer install" sinh ra
├── index.php                        # Entry point + đăng ký route
└── App/
    ├── Core/
    │   └── Route.php                # namespace App\\Core
    ├── Database/
    │   └── Database.php             # namespace App\\Database  (singleton — p2)
    ├── Models/
    │   └── ProductModel.php         # namespace App\\Models    (p2)
    └── Controllers/
        └── ProductController.php    # namespace App\\Controllers (đã dùng DI)`,
				bFinalIndex: `<?php
// index.php — sạch sẽ, chỉ 1 dòng require, còn lại là use + khai báo route


require __DIR__ . '/vendor/autoload.php';

use App\\Core\\Route;
use App\\Models\\ProductModel;
use App\\Controllers\\ProductController;

// ── Chuẩn bị phụ thuộc & inject (DI) ────────────────────────────
$model = new ProductModel();
$ctrl  = new ProductController($model);

// ── Đăng ký route giống Laravel ─────────────────────────────────
Route::get('/products',         fn(): mixed        => print_r($ctrl->index()));
Route::get('/products/{id}',    fn(string $id): mixed => print_r($ctrl->show((int) $id)));
Route::post('/products',        fn(): mixed        => print_r($ctrl->store($_POST)));
Route::put('/products/{id}',    fn(string $id): mixed => print_r($ctrl->update((int) $id, $_POST)));
Route::delete('/products/{id}', fn(string $id): mixed => print_r($ctrl->destroy((int) $id)));

// ── Chạy ────────────────────────────────────────────────────────
Route::dispatch();`,
				p1: `<?php
// App/Controllers/ProductController.php — Controller còn tự new Model bên trong


namespace App\\Controllers;

use App\\Models\\ProductModel;

class ProductController
{
    private ProductModel $productModel;

    public function __construct()
    {
        // TODO: bỏ đoạn này, chuyển sang nhận ProductModel qua constructor
        //       (dùng constructor property promotion + readonly cho gọn — PHP 8)
        $this->productModel = new ProductModel();
    }

    public function index(): array
    {
        return $this->productModel->read();
    }
}

// index.php hiện tại:
require __DIR__ . '/vendor/autoload.php';

use App\\Controllers\\ProductController;

$ctrl = new ProductController();

// TODO: sửa lại — tạo ProductModel trước, inject vào ProductController.
// Bonus: tạo App/Models/ProductModelFake.php với method \`read(): array\` trả về mảng cứng,
//        rồi inject fake vào Controller để chạy không cần DB.`,
				p2: `<?php
// App/Core/Route.php — hiện có get() và post()


namespace App\\Core;

class Route
{
    /** @var array<string, array<string, callable>> */
    private static array $routes = [];

    public static function add(string $method, string $path, callable $cb): void
    {
        self::$routes[$method][$path] = $cb;
    }
    public static function get(string $path, callable $cb): void  { self::add('GET',  $path, $cb); }
    public static function post(string $path, callable $cb): void { self::add('POST', $path, $cb); }

    // TODO: thêm put(string $path, callable $cb): void và delete(...) theo pattern y hệt

    public static function dispatch(): void { /* giữ nguyên */ }
}

// index.php — TODO đăng ký thêm 2 route
use App\\Core\\Route;

Route::put('/products/{id}',    fn(string $id): mixed => $ctrl->update((int) $id, $_POST));
Route::delete('/products/{id}', fn(string $id): mixed => $ctrl->destroy((int) $id));

Route::dispatch();`,
				p3: `<?php
// App/Core/Route.php


namespace App\\Core;

class Route
{
    /** @var array<string, array<string, callable>> */
    private static array $routes = [];

    // Callback cho 404 — null nếu chưa đăng ký
    private static mixed $fallback = null;

    // ...get / post / add giữ nguyên...

    // TODO: cho phép user đăng ký handler 404
    public static function fallback(callable $cb): void
    {
        // ...
    }

    public static function dispatch(): void
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $uri    = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        foreach (self::$routes[$method] ?? [] as $path => $cb) {
            // ...logic match như bài giảng...
        }

        // TODO: không khớp route nào
        // - Nếu self::$fallback !== null  → call_user_func(self::$fallback)
        // - Nếu không → http_response_code(404) + echo "404 — Not Found"
    }
}

// Cách dùng mong muốn (trong index.php):
use App\\Core\\Route;

Route::fallback(fn(): mixed => include __DIR__ . '/views/404.php');`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-4' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
