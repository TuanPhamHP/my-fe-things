<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="MVC Architecture" addOnClass="text-left" markedAs="mvc-architecture" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>MVC (Model-View-Controller)</b> là một mẫu kiến trúc phần mềm — tức là cách <b>chia dự án thành nhiều
					lớp</b> để code không bị trộn lẫn giữa "lấy dữ liệu", "xử lý logic" và "hiển thị ra HTML". Đây là mô hình
					gần như <b>tiêu chuẩn</b> cho web app hiện đại (Laravel, Symfony, Ruby on Rails, ASP.NET MVC, Spring MVC,
					NestJS… đều theo mô hình này).
				</p>
				<p class="text-slate-900 dark:text-white my-3">Trong bài này chúng ta sẽ trả lời 3 câu hỏi:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">MVC là gì và giải quyết vấn đề gì?</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">3 thành phần Model, View, Controller làm những gì?</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">Một request đi qua MVC như thế nào?</li>
				</ul>

				<PageHeading text="Trước khi có MVC" addOnClass="text-left mt-5" markedAs="mvc-before" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Nhớ lại thời code PHP "trộn tất cả vào một file" — kết nối DB, query, xử lý form, in HTML dồn hết lên
					<FilePath>index.php</FilePath>:
				</p>
				<VCodeBlock :code="bBefore" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					File này chỉ ~15 dòng đã khó đọc. Khi dự án lớn lên: 500 dòng SQL trộn với <FilePath>&lt;table&gt;</FilePath>,
					sửa 1 chỗ vỡ 3 chỗ khác, không ai dám refactor. <b>MVC ra đời để tách 3 mối lo này ra 3 nơi riêng.</b>
				</p>

				<PageHeading text="Ví dụ liên tưởng: nhà hàng" addOnClass="text-left mt-5" markedAs="mvc-analogy" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Hình dung một nhà hàng phục vụ khách — mỗi vai trò trong nhà hàng ứng với 1 thành phần MVC:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Nhà hàng</th>
								<th class="px-5 py-3">MVC</th>
								<th class="px-5 py-3">Trách nhiệm</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Khách</th>
								<td class="px-5 py-4">Người dùng (Browser)</td>
								<td class="px-5 py-4">Gọi món, nhận đồ ăn</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Phục vụ</th>
								<td class="px-5 py-4"><b>Controller</b></td>
								<td class="px-5 py-4">Nhận order, xuống bếp, mang đồ ra bàn</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Bếp</th>
								<td class="px-5 py-4"><b>Model</b></td>
								<td class="px-5 py-4">Chế biến (logic), lấy nguyên liệu từ kho (DB)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Bàn ăn / Đĩa đồ ăn</th>
								<td class="px-5 py-4"><b>View</b></td>
								<td class="px-5 py-4">Cách trình bày đồ ăn cho khách</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					Điểm mấu chốt: <b>bếp không tự bưng đồ cho khách</b>, và <b>khách không đi thẳng xuống bếp</b>. Mọi thứ đi qua
					phục vụ (Controller). Trong code cũng vậy — View không được tự query DB, Model không được biết đến HTML.
				</p>

				<PageHeading text="1. Model" addOnClass="text-left mt-5" markedAs="mvc-model" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Model là nơi <b>chứa dữ liệu và logic nghiệp vụ</b>. Bất kỳ code nào liên quan đến "lấy / lưu / kiểm tra dữ
					liệu" đều nằm ở đây — SQL query, validate, tính giảm giá, tính điểm tích lũy...
				</p>
				<p class="text-slate-900 dark:text-white my-3"><b>Trách nhiệm chính:</b></p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Tương tác với DB (SELECT, INSERT, UPDATE, DELETE).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Chứa quy tắc nghiệp vụ (ví dụ: đơn hàng ≥ 500k được freeship, tuổi &lt; 18 không mua rượu…).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Không biết gì về HTML, HTTP hay request/response.</b>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					Quy tắc kiểm tra nhanh: nếu bạn <FilePath>echo</FilePath> ra HTML trong Model, hoặc đọc
					<FilePath>$_POST</FilePath> trong Model — <b>đó là code sai vị trí</b>.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="2. View" addOnClass="text-left mt-5" markedAs="mvc-view" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					View là <b>lớp hiển thị</b> — chỉ nhận dữ liệu đã được xử lý sẵn và in ra HTML. Trong View chỉ nên có 3 loại
					PHP: <FilePath>echo</FilePath>, vòng <FilePath>foreach</FilePath> để duyệt list, và <FilePath>if</FilePath> đơn
					giản để rẽ nhánh hiển thị.
				</p>
				<p class="text-slate-900 dark:text-white my-3"><b>Trách nhiệm chính:</b></p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Nhận dữ liệu từ Controller và hiển thị.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Đảm bảo <FilePath>htmlspecialchars()</FilePath> khi in dữ liệu do user nhập, tránh XSS.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Không</b> query DB, <b>không</b> gọi API bên thứ ba, <b>không</b> chứa logic nghiệp vụ.
					</li>
				</ul>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="3. Controller" addOnClass="text-left mt-5" markedAs="mvc-controller" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Controller là <b>cầu nối giữa Model và View</b>. Nó nhận request, quyết định gọi Model nào, lấy dữ liệu về rồi
					truyền cho View phù hợp. Coi Controller như "người phục vụ": không tự nấu, không tự pha đồ uống, chỉ điều
					phối.
				</p>
				<p class="text-slate-900 dark:text-white my-3"><b>Trách nhiệm chính:</b></p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Đọc input từ HTTP (<FilePath>$_GET</FilePath>, <FilePath>$_POST</FilePath>, route params).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Gọi Model để lấy / lưu dữ liệu.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Chọn View để render, redirect, hoặc trả JSON.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Quy tắc "thin controller":</b> mỗi action nên gọn dưới ~15 dòng. Nếu Controller phình to, hầu như chắc chắn
					bạn đang nhét logic của Model vào đó.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Luồng 1 request đi qua MVC" addOnClass="text-left mt-5" markedAs="mvc-flow" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Giả sử user vào <FilePath>/products/2</FilePath> để xem chi tiết sản phẩm ID = 2. Đây là 6 bước diễn ra:
				</p>
				<ol class="pl-10 list-decimal marker:text-sky-400">
					<li class="text-slate-900 dark:text-white leading-8">
						Browser gửi request <FilePath>GET /products/2</FilePath> đến server.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>Router</b> (file <FilePath>index.php</FilePath>) phân tích URL, xác định phải gọi
						<FilePath>ProductController::show(2)</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>Controller</b> gọi <FilePath>Product::find(2)</FilePath> để yêu cầu Model tìm sản phẩm.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>Model</b> query DB → trả về object <FilePath>Product</FilePath> hoặc <FilePath>null</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>Controller</b> nhận data, chọn View <FilePath>product_detail.php</FilePath>, truyền
						<FilePath>$product</FilePath> vào.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>View</b> render HTML → server trả về browser → user thấy trang chi tiết.
					</li>
				</ol>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded mt-4">
					<img src="@/assets/images/php-laravel/mvc-02.png" style="height: 500px" alt="" class="rounded-lg mt-3 block" />
				</div>

				<PageHeading text="Ví dụ hoàn chỉnh: mini app 3 file" addOnClass="text-left mt-5" markedAs="mvc-full-example" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Bây giờ nối 3 phần lại thành 1 app thật, có <b>router</b> để phân biệt URL. Cấu trúc thư mục:
				</p>
				<VCodeBlock :code="bTree" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>File <FilePath>index.php</FilePath></b> — điểm vào duy nhất, đóng vai trò Router:
				</p>
				<VCodeBlock :code="bRouter" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Model <FilePath>Models/Product.php</FilePath></b>:
				</p>
				<VCodeBlock :code="bModel" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Controller <FilePath>Controllers/ProductController.php</FilePath></b>:
				</p>
				<VCodeBlock :code="bController" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>View <FilePath>Views/product_list.php</FilePath></b>:
				</p>
				<VCodeBlock :code="bViewList" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>View <FilePath>Views/product_detail.php</FilePath></b>:
				</p>
				<VCodeBlock :code="bViewDetail" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Chạy thử: mở terminal ở thư mục project → <FilePath textCoppy="php -S localhost:8000">php -S localhost:8000</FilePath>
					→ mở browser vào <FilePath>http://localhost:8000/</FilePath> (danh sách) và
					<FilePath>http://localhost:8000/?id=2</FilePath> (chi tiết).
				</p>

				<PageHeading text="Ưu &amp; nhược điểm" addOnClass="text-left mt-5" markedAs="mvc-pros-cons" :lvl="1" />
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Ưu điểm</th>
								<th class="px-5 py-3">Nhược điểm</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">Tách bạch 3 mối lo — dễ đọc, dễ bảo trì.</td>
								<td class="px-5 py-4">Cần setup nhiều file/thư mục hơn — hơi rườm rà cho app tí hon.</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">Dễ chia việc nhóm: BE tập trung Model/Controller, FE lo View.</td>
								<td class="px-5 py-4">Dễ "fat controller" nếu lười tách Service/Repository.</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">Dễ test — Model là class thuần, không dính HTTP.</td>
								<td class="px-5 py-4">Newbie hay nhét SQL vào View hoặc HTML vào Model, phá vỡ mô hình.</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4">Đổi View (web → JSON API) không cần đụng Model.</td>
								<td class="px-5 py-4">Với SPA hiện đại (Vue/React), View thường chuyển thành API + FE riêng.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="Những sai lầm thường gặp" addOnClass="text-left mt-5" markedAs="mvc-antipatterns" :lvl="1" />
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">1. Query DB trong View</p>
					<p class="text-slate-900 dark:text-white text-sm mb-2">
						View chỉ nên nhận data đã được chuẩn bị sẵn. Query trong <FilePath>foreach</FilePath> hiển thị dễ dẫn đến bug
						N+1 query và không thể test.
					</p>
					<VCodeBlock :code="antiPattern1" highlightjs lang="php" theme="atom-one-dark" />
				</div>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">2. Echo HTML trong Model</p>
					<p class="text-slate-900 dark:text-white text-sm mb-2">
						Model phải "câm" — chỉ trả về dữ liệu. Nếu Model tự in HTML, sau này muốn dùng cho API JSON hay CLI là bị
						khóa cứng.
					</p>
					<VCodeBlock :code="antiPattern2" highlightjs lang="php" theme="atom-one-dark" />
				</div>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">3. Fat Controller</p>
					<p class="text-slate-900 dark:text-white text-sm mb-2">
						Controller phình 200 dòng vì nhét tất cả logic vào. Cách sửa: chuyển business rule sang Model (hoặc lớp
						Service), Controller chỉ điều phối.
					</p>
					<VCodeBlock :code="antiPattern3" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<PageHeading text="Câu hỏi hay gặp" addOnClass="text-left mt-5" markedAs="mvc-faq" :lvl="1" />
				<PageHeading text="Q1: MVC và MVVM khác gì?" addOnClass="text-left my-3" markedAs="mvc-faq-q1" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					MVVM (Model-View-ViewModel) thường dùng cho app có 2 chiều dữ liệu (Vue, Angular, WPF) — <b>ViewModel</b> giữ
					state UI và tự đồng bộ với View. MVC dùng cho web truyền thống: request đi 1 chiều từ browser → server → HTML.
					Bản chất giống nhau ở chỗ "tách data khỏi UI".
				</p>
				<PageHeading text="Q2: Trong Laravel, Model có phải chỗ chứa SQL không?" addOnClass="text-left my-3" markedAs="mvc-faq-q2" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Laravel dùng <b>Eloquent ORM</b>, nên bạn thường không viết SQL trực tiếp. Model kế thừa
					<FilePath>Illuminate\Database\Eloquent\Model</FilePath> — mỗi class map 1-1 với 1 bảng. Logic phức tạp hơn (ví
					dụ: gộp 3 model, gửi mail sau khi lưu) nên tách ra <b>Service</b> để Model không quá to.
				</p>
				<PageHeading text="Q3: MVC có phù hợp với REST API không?" addOnClass="text-left my-3" markedAs="mvc-faq-q3" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Có.</b> Chỉ khác 1 chỗ: View không render HTML mà trả JSON. Cấu trúc Model + Controller giữ nguyên. Controller
					thay <FilePath>include 'view.php'</FilePath> bằng <FilePath>echo json_encode($data)</FilePath>.
				</p>

				<!-- ===================== LUYỆN TẬP ===================== -->
				<PageHeading text="Luyện tập" addOnClass="text-left mt-5" markedAs="mvc-practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					3 bài tăng dần độ khó. Copy starter code, tự hoàn thiện phần <FilePath>TODO</FilePath>, chạy bằng
					<FilePath>php -S localhost:8000</FilePath> để kiểm tra.
				</p>

				<!-- Bài 1 -->
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600">
					<div class="flex items-center gap-2 mb-3">
						<span
							class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-bold text-xs shrink-0"
						>
							01
						</span>
						<p class="text-slate-900 dark:text-white font-semibold">Tách 1 file dài thành 3 lớp MVC — Users</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: xác định đâu là Model, View, Controller.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>Đọc file <FilePath>legacy.php</FilePath> đã trộn 3 lớp lộn xộn ở dưới.</li>
						<li>Tách thành 3 file: <FilePath>Models/User.php</FilePath>, <FilePath>Controllers/UserController.php</FilePath>,
							<FilePath>Views/user_list.php</FilePath>.
						</li>
						<li>
							Model chỉ có class + method <FilePath>all()</FilePath>. Controller gọi <FilePath>User::all()</FilePath> rồi
							<FilePath>include</FilePath> View. View chỉ in HTML.
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
						<p class="text-slate-900 dark:text-white font-semibold">Thêm action mới — filter sản phẩm theo giá</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: thêm method Model, thêm action Controller, thêm View — không phá cấu trúc.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Trong <FilePath>Product</FilePath>, thêm method
							<FilePath>findByPriceRange(int $min, int $max): array</FilePath> — lọc từ danh sách trong bộ nhớ.
						</li>
						<li>
							Trong <FilePath>ProductController</FilePath>, thêm action
							<FilePath>filter()</FilePath> — đọc <FilePath>$_GET['min']</FilePath> và <FilePath>$_GET['max']</FilePath>, gọi
							Model, truyền vào View.
						</li>
						<li>
							Trong <FilePath>index.php</FilePath> (router), map URL <FilePath>?action=filter</FilePath> vào action mới.
						</li>
						<li>
							Test: <FilePath>http://localhost:8000/?action=filter&amp;min=500&amp;max=1000</FilePath> phải hiển thị 1
							sản phẩm.
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
						<p class="text-slate-900 dark:text-white font-semibold">Form thêm sản phẩm — POST + validate</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: xử lý POST trong Controller, validate ở Model, hiển thị lỗi ở View.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Thêm method <FilePath>Product::validate(array $data): array</FilePath> — trả về mảng lỗi (rỗng nếu OK).
							Rule: <FilePath>name</FilePath> không rỗng, <FilePath>price</FilePath> phải &gt; 0.
						</li>
						<li>
							Thêm method <FilePath>Product::create(array $data): Product</FilePath> — push vào bộ nhớ và trả object
							mới.
						</li>
						<li>
							Controller action <FilePath>create()</FilePath>: nếu <FilePath>GET</FilePath> → render form; nếu
							<FilePath>POST</FilePath> → validate, thất bại thì render lại form kèm lỗi, thành công thì redirect về
							<FilePath>index</FilePath>.
						</li>
						<li>
							View <FilePath>product_form.php</FilePath>: form với 2 input <FilePath>name</FilePath>,
							<FilePath>price</FilePath>; hiển thị lỗi (nếu có) phía trên form; dùng
							<FilePath>htmlspecialchars()</FilePath> khi in lại giá trị đã nhập.
						</li>
					</ul>
					<VCodeBlock :code="p3" highlightjs lang="php" theme="atom-one-dark" />
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
				bBefore: `<?php
// index.php — kiểu "spaghetti", trộn tất cả vào 1 file
$conn = new mysqli('localhost', 'root', '', 'shop');
$rows = $conn->query("SELECT * FROM products WHERE price < 1000");

echo "<html><body><table>";
while ($p = $rows->fetch_assoc()) {
    // logic giảm giá lẫn với HTML
    $sale = $p['price'] > 500 ? $p['price'] * 0.9 : $p['price'];
    echo "<tr><td>{$p['name']}</td><td>{$sale}</td></tr>";
}
echo "</table></body></html>";`,
				b1: `<?php
// Models/Product.php — Model thuần: chỉ dữ liệu + logic, KHÔNG in HTML
class Product
{
    public function __construct(
        public int $id,
        public string $name,
        public float $price,
    ) {}

    // Giả lập DB — trong thực tế method này sẽ query mysqli/PDO
    public static function all(): array
    {
        return [
            new Product(1, 'Laptop', 1500),
            new Product(2, 'Phone',  800),
            new Product(3, 'Tablet', 600),
        ];
    }

    public static function find(int $id): ?Product
    {
        foreach (self::all() as $p) {
            if ($p->id === $id) return $p;
        }
        return null;
    }

    // Logic nghiệp vụ — thuộc về Model, không phải View
    public function getDiscountedPrice(): float
    {
        return $this->price > 1000 ? $this->price * 0.9 : $this->price;
    }
}`,
				b2: `<?php
// Views/product_list.php — chỉ hiển thị, dữ liệu nhận từ Controller qua biến $products
?>
<h1>Danh sách sản phẩm</h1>
<ul>
<?php foreach ($products as $product): ?>
    <li>
        <a href="/?id=<?= $product->id ?>">
            <?= htmlspecialchars($product->name) ?>
        </a>
        — <?= number_format($product->getDiscountedPrice()) ?>đ
    </li>
<?php endforeach; ?>
</ul>`,
				b3: `<?php
// Controllers/ProductController.php — điều phối, KHÔNG viết SQL, KHÔNG in HTML
class ProductController
{
    public function index(): void
    {
        $products = Product::all();          // gọi Model
        include __DIR__ . '/../Views/product_list.php';  // gắn View
    }

    public function show(int $id): void
    {
        $product = Product::find($id);
        if (!$product) {
            http_response_code(404);
            echo '404 — Product not found';
            return;
        }
        include __DIR__ . '/../Views/product_detail.php';
    }
}`,
				bTree: `mvc-demo/
├── index.php                    # Router (entry point)
├── Models/
│   └── Product.php
├── Controllers/
│   └── ProductController.php
└── Views/
    ├── product_list.php
    └── product_detail.php`,
				bRouter: `<?php
// index.php — điểm vào duy nhất, ai muốn xem gì cũng đi qua đây
require_once __DIR__ . '/Models/Product.php';
require_once __DIR__ . '/Controllers/ProductController.php';

$controller = new ProductController();

// Router siêu đơn giản: nếu có ?id thì show, không thì list
if (isset($_GET['id'])) {
    $controller->show((int)$_GET['id']);
} else {
    $controller->index();
}`,
				bModel: `<?php
// Models/Product.php
class Product
{
    public function __construct(
        public int $id,
        public string $name,
        public float $price,
    ) {}

    public static function all(): array
    {
        return [
            new Product(1, 'Laptop', 1500),
            new Product(2, 'Phone',  800),
            new Product(3, 'Tablet', 600),
        ];
    }

    public static function find(int $id): ?Product
    {
        foreach (self::all() as $p) {
            if ($p->id === $id) return $p;
        }
        return null;
    }
}`,
				bController: `<?php
// Controllers/ProductController.php
class ProductController
{
    public function index(): void
    {
        $products = Product::all();
        include __DIR__ . '/../Views/product_list.php';
    }

    public function show(int $id): void
    {
        $product = Product::find($id);
        if (!$product) {
            http_response_code(404);
            echo '404 — Product not found';
            return;
        }
        include __DIR__ . '/../Views/product_detail.php';
    }
}`,
				bViewList: `<!-- Views/product_list.php -->
<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"><title>Sản phẩm</title></head>
<body>
    <h1>Danh sách sản phẩm</h1>
    <ul>
    <?php foreach ($products as $p): ?>
        <li>
            <a href="/?id=<?= $p->id ?>"><?= htmlspecialchars($p->name) ?></a>
            — <?= number_format($p->price) ?>đ
        </li>
    <?php endforeach; ?>
    </ul>
</body>
</html>`,
				bViewDetail: `<!-- Views/product_detail.php -->
<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"><title><?= htmlspecialchars($product->name) ?></title></head>
<body>
    <h1><?= htmlspecialchars($product->name) ?></h1>
    <p>Giá: <?= number_format($product->price) ?>đ</p>
    <a href="/">← Quay lại danh sách</a>
</body>
</html>`,
				antiPattern1: `<!-- Views/bad.php — SAI: query DB ngay trong View -->
<?php $conn = new mysqli(...); ?>
<ul>
<?php while ($u = $conn->query("SELECT * FROM users")->fetch_assoc()): ?>
    <li><?= $u['name'] ?></li>
<?php endwhile; ?>
</ul>

<!-- ĐÚNG: Controller đã chuẩn bị $users, View chỉ in -->
<ul>
<?php foreach ($users as $u): ?>
    <li><?= htmlspecialchars($u->name) ?></li>
<?php endforeach; ?>
</ul>`,
				antiPattern2: `<?php
// SAI: Model tự echo HTML
class User {
    public static function all(): void {
        foreach (self::query() as $u) {
            echo "<li>{$u['name']}</li>";  // ❌ không tái sử dụng được
        }
    }
}

// ĐÚNG: Model trả dữ liệu, để View lo hiển thị
class User {
    public static function all(): array {
        return self::query();  // ✅ dùng được cho HTML, JSON, CLI...
    }
}`,
				antiPattern3: `<?php
// SAI: Fat controller — 60 dòng logic tính điểm nhét vào action
class OrderController {
    public function checkout() {
        $items = $_POST['items'];
        $total = 0;
        foreach ($items as $it) { $total += $it['price'] * $it['qty']; }
        if ($total > 500000) $total *= 0.95;      // giảm giá
        $points = floor($total / 10000);           // tích điểm
        // ...còn 40 dòng nữa...
    }
}

// ĐÚNG: chuyển logic sang Model / Service
class OrderController {
    public function checkout() {
        $order = Order::createFrom($_POST['items']);  // logic ở đây
        include __DIR__ . '/../Views/order_success.php';
    }
}`,
				p1: `<?php
// legacy.php — HÃY TÁCH FILE NÀY THÀNH 3 LỚP MVC
$users = [
    ['id' => 1, 'name' => 'Tuấn', 'email' => 'tuan@example.com'],
    ['id' => 2, 'name' => 'An',   'email' => 'an@example.com'],
    ['id' => 3, 'name' => 'Bình', 'email' => 'binh@example.com'],
];

echo "<h1>Danh sách user</h1><ul>";
foreach ($users as $u) {
    echo "<li>{$u['name']} — {$u['email']}</li>";
}
echo "</ul>";

// TODO: tách thành:
//   Models/User.php          → class User + method all()
//   Controllers/UserController.php → action index() gọi Model + include View
//   Views/user_list.php      → chỉ HTML + foreach
//   index.php                → require 3 file + new UserController()->index()`,
				p2: `<?php
// Models/Product.php — thêm method findByPriceRange
class Product
{
    public function __construct(public int $id, public string $name, public float $price) {}

    public static function all(): array
    {
        return [
            new Product(1, 'Laptop', 1500),
            new Product(2, 'Phone',  800),
            new Product(3, 'Tablet', 600),
        ];
    }

    // TODO: trả về các product có $min <= price <= $max
    public static function findByPriceRange(int $min, int $max): array
    {
        // ...
    }
}

// Controllers/ProductController.php
class ProductController
{
    public function index(): void { /* đã có */ }

    // TODO: đọc $_GET['min'], $_GET['max'] (mặc định 0 và PHP_INT_MAX),
    //       gọi Product::findByPriceRange(), include Views/product_list.php
    public function filter(): void
    {
        // ...
    }
}

// index.php (router) — thêm nhánh cho action=filter
$controller = new ProductController();
match ($_GET['action'] ?? 'index') {
    'filter' => $controller->filter(),
    default  => $controller->index(),
};`,
				p3: `<?php
// Models/Product.php
class Product
{
    // ...phần cũ giữ nguyên...

    // TODO: trả về mảng lỗi. Rỗng nghĩa là hợp lệ.
    // Rule: name không rỗng, price phải là số > 0
    public static function validate(array $data): array
    {
        // return ['name' => 'Tên không được rỗng', ...];
    }

    // TODO: push $data vào danh sách và trả về Product mới
    public static function create(array $data): Product
    {
        // ...
    }
}

// Controllers/ProductController.php
class ProductController
{
    public function create(): void
    {
        $errors = [];
        $old    = ['name' => '', 'price' => ''];

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $old    = $_POST;
            $errors = Product::validate($_POST);
            if (empty($errors)) {
                Product::create($_POST);
                header('Location: /');   // redirect sau khi tạo thành công
                return;
            }
        }
        include __DIR__ . '/../Views/product_form.php';
    }
}

// Views/product_form.php — hiển thị lỗi + giữ giá trị cũ
?>
<form method="POST">
    <?php if ($errors): ?>
        <ul style="color:red">
        <?php foreach ($errors as $e): ?><li><?= htmlspecialchars($e) ?></li><?php endforeach; ?>
        </ul>
    <?php endif; ?>

    <input name="name"  value="<?= htmlspecialchars($old['name']  ?? '') ?>" placeholder="Tên">
    <input name="price" value="<?= htmlspecialchars($old['price'] ?? '') ?>" placeholder="Giá">
    <button type="submit">Thêm</button>
</form>`,
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-1' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
