<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="View & Xử lý Form" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Sau
					<a
						href="/php/documentation/php-and-database-p2"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>phần 2 (Model)</a
					>
					và
					<a
						href="/php/documentation/php-and-database-p3"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>phần 3 (Controller &amp; Router)</a
					>, chúng ta đã có 2 trong 3 chân của MVC. Bài này ghép nốt chân còn lại — <b>View</b> — để một request từ
					browser chạy trọn vòng: URL → Router → Controller → Model → View → HTML.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">Nội dung chính:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Tạo thư mục <FilePath>App/Views</FilePath> và viết View đầu tiên — danh sách sản phẩm.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Viết helper <FilePath>render()</FilePath> trong Controller — inject dữ liệu vào View bằng
						<FilePath>extract()</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Form <b>POST</b> — validate ở Controller, giữ dữ liệu cũ + lỗi qua <FilePath>$_SESSION</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Pattern <b>PRG (Post-Redirect-Get)</b> — chống resubmit khi user F5 sau khi POST.
					</li>
				</ul>

				<PageHeading text="1. View trong MVC" addOnClass="text-left mt-5" markedAs="view-role" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					View chỉ có 1 việc: <b>hiển thị dữ liệu Controller đã chuẩn bị sẵn</b>. Trong file View chỉ nên có 3 loại PHP:
					<FilePath>&lt;?= ... ?&gt;</FilePath> in giá trị, <FilePath>if</FilePath> rẽ nhánh hiển thị, và
					<FilePath>foreach</FilePath> duyệt list.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">3 điều <b>không</b> được làm trong View:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Query DB hay gọi Model — dữ liệu phải do Controller đưa vào.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Chứa business logic (tính giảm giá, tính điểm, gửi email…).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						In dữ liệu <b>chưa qua <FilePath>htmlspecialchars()</FilePath></b> — mọi biến do user nhập đều phải escape
						để chống XSS.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					View là file PHP thuần, không phải class → <b>không cần namespace</b>. Chúng ta chỉ đặt chúng dưới
					<FilePath>App/Views/</FilePath> cho gọn folder.
				</p>

				<PageHeading
					text="2. View đầu tiên — danh sách sản phẩm"
					addOnClass="text-left mt-5"
					markedAs="view-list"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tạo file <FilePath>App/Views/product_list.php</FilePath>:
				</p>
				<VCodeBlock :code="bViewList" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Chú ý các chi tiết:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>&lt;?= ... ?&gt;</FilePath> là short-tag của <FilePath>&lt;?php echo ... ?&gt;</FilePath> — luôn
						khả dụng từ PHP 5.4+, dùng để in giá trị ngắn gọn.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Comment <FilePath>@var array $products</FilePath> ở đầu file giúp IDE biết kiểu biến — code sẽ có
						autocomplete khi gõ <FilePath>$products[0]['name']</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Cú pháp <FilePath>foreach (...): ... endforeach;</FilePath> (dùng dấu 2 chấm) dễ đọc hơn dấu ngoặc nhọn khi
						trộn với HTML.
					</li>
				</ul>

				<PageHeading
					text="3. Controller render View"
					addOnClass="text-left mt-5"
					markedAs="controller-render"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở p3, các method Controller <FilePath>return $products</FilePath> ra ngoài. Giờ chúng ta đổi lại: Controller
					<b>tự render View</b> để trả HTML về cho browser. Thêm helper <FilePath>render()</FilePath> vào Controller:
				</p>
				<VCodeBlock :code="bCtrlRender" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Điểm mấu chốt là hàm <FilePath>extract($data)</FilePath> — nó lấy các key trong mảng và biến thành biến local.
					Ví dụ <FilePath>extract(['products' =&gt; [...]])</FilePath> sẽ tạo ra biến <FilePath>$products</FilePath> —
					chính là biến mà View đang trông chờ.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đường dẫn <FilePath>__DIR__ . "/../Views/{$view}.php"</FilePath> đi lên 1 cấp từ folder
					<FilePath>App/Controllers</FilePath> rồi vào <FilePath>App/Views</FilePath> — nhờ vậy path luôn đúng bất kể ta
					chạy PHP từ folder nào.
				</p>

				<PageHeading text="4. View chi tiết sản phẩm" addOnClass="text-left mt-5" markedAs="view-detail" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					File <FilePath>App/Views/product_detail.php</FilePath> — hiển thị 1 record đơn:
				</p>
				<VCodeBlock :code="bViewDetail" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>nl2br()</FilePath> tự động thêm <FilePath>&lt;br&gt;</FilePath> vào các dòng xuống — hữu ích khi
					<FilePath>description</FilePath> chứa nhiều đoạn. Vẫn phải escape trước bằng
					<FilePath>htmlspecialchars()</FilePath>.
				</p>

				<PageHeading text="5. Form thêm sản phẩm" addOnClass="text-left mt-5" markedAs="view-form" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					File <FilePath>App/Views/product_form.php</FilePath>:
				</p>
				<VCodeBlock :code="bViewForm" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">2 biến View nhận từ Controller:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$errors</FilePath> — mảng lỗi validate (rỗng khi form vừa mở lần đầu).
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$old</FilePath> — dữ liệu user đã nhập lần trước, để form giữ lại khi validate fail. Rỗng khi form
						mở lần đầu.
					</li>
				</ul>

				<PageHeading
					text="6. Xử lý form POST — Controller"
					addOnClass="text-left mt-5"
					markedAs="controller-post"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Bổ sung 2 action <FilePath>create()</FilePath> (hiện form — GET) và <FilePath>store()</FilePath> (nhận POST):
				</p>
				<VCodeBlock :code="bCtrlPost" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Luồng xử lý:</p>
				<ol class="pl-10 list-decimal marker:text-sky-400">
					<li class="text-slate-900 dark:text-white leading-8">
						User GET <FilePath>/products/create</FilePath> → action <FilePath>create()</FilePath> lấy
						<FilePath>$errors</FilePath> và <FilePath>$old</FilePath> từ session (nếu có), rồi xoá đi. Render form.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						User submit → POST <FilePath>/products</FilePath> → action <FilePath>store()</FilePath> lấy
						<FilePath>$_POST</FilePath>, validate.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>Nếu lỗi:</b> nhét lỗi + dữ liệu cũ vào session, redirect về <FilePath>/products/create</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8">
						<b>Nếu OK:</b> lưu bằng Model, nhét flash message vào session, redirect về danh sách
						<FilePath>/products</FilePath>.
					</li>
				</ol>

				<PageHeading
					text="7. PRG Pattern — Post / Redirect / Get"
					addOnClass="text-left mt-5"
					markedAs="prg"
					:lvl="1"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chú ý ở bước 3 và 4 phía trên: sau khi xử lý POST, chúng ta <b>không render trực tiếp</b>, mà
					<FilePath>header('Location: ...')</FilePath> để browser tự GET trang mới. Đây là pattern kinh điển
					<b>PRG (Post-Redirect-Get)</b>:
				</p>
				<VCodeBlock :code="bPrgFlow" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vì sao cần PRG? Nếu Controller render thẳng HTML sau khi POST, khi user <b>F5 (reload)</b>, browser sẽ hỏi
					"Confirm form resubmission?" và có thể tạo bản ghi trùng. Với PRG, page sau reload là 1 GET bình thường —
					reload thoải mái không tạo trùng.
				</p>

				<PageHeading text="Flash message qua $_SESSION" addOnClass="text-left mt-3" markedAs="flash" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Flash message</b> = tin nhắn xuất hiện đúng 1 lần rồi biến mất. Cơ chế cực đơn giản:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Controller <b>ghi</b>: <FilePath>$_SESSION['flash'] = 'Đã thêm sản phẩm!';</FilePath>
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						View <b>đọc + xoá</b>: kiểm tra <FilePath>$_SESSION['flash']</FilePath>, in ra rồi
						<FilePath>unset()</FilePath> ngay để lần refresh sau không hiện nữa.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>$_SESSION</FilePath> yêu cầu <FilePath>session_start()</FilePath> phải được gọi trước bất kỳ output
					nào — thường đặt ở dòng đầu <FilePath>index.php</FilePath>.
				</p>

				<PageHeading text="8. Ghép vào Router" addOnClass="text-left mt-5" markedAs="wire-router" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>index.php</FilePath> cuối cùng — thêm <FilePath>session_start()</FilePath> và đăng ký thêm 2 route:
				</p>
				<VCodeBlock :code="bFinalIndex" highlightjs lang="php" theme="atom-one-dark" />
				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm">
						<b>Lưu ý thứ tự route:</b> <FilePath>/products/create</FilePath> phải được đăng ký <b>trước</b>
						<FilePath>/products/{id}</FilePath>. Vì <FilePath>/products/{id}</FilePath> match cả URL
						<FilePath>/products/create</FilePath> (do <FilePath>create</FilePath> khớp với pattern
						<FilePath>([^/]+)</FilePath>). Router chạy theo thứ tự khai báo — cái nào cụ thể hơn nên khai báo trước.
					</p>
				</div>

				<PageHeading text="Cấu trúc thư mục hoàn chỉnh" addOnClass="text-left mt-3" markedAs="final-tree" :lvl="2" />
				<VCodeBlock :code="bTree" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chạy thử: <FilePath textCoppy="php -S localhost:8000">php -S localhost:8000</FilePath>, mở
					<FilePath>http://localhost:8000/products</FilePath> — kiểm tra danh sách, click 1 item xem chi tiết, ấn "Thêm
					mới" nhập form → submit → thấy flash message ở trang danh sách.
				</p>

				<PageHeading text="Câu hỏi hay gặp" addOnClass="text-left mt-5" markedAs="faq" :lvl="1" />
				<PageHeading
					text="Q1: Sao View phải include từ Controller mà không mở URL thẳng vào file view?"
					addOnClass="text-left my-3"
					markedAs="faq-q1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nếu user mở thẳng <FilePath>App/Views/product_list.php</FilePath>, biến <FilePath>$products</FilePath> chưa
					tồn tại — file sẽ lỗi. Ngoài ra Controller còn làm 2 việc quan trọng khác trước khi render:
					<b>lấy dữ liệu từ Model</b> và <b>kiểm tra quyền</b>. Vì vậy mọi request phải đi qua
					<FilePath>index.php</FilePath> → Router → Controller → mới đến View.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong Laravel, thư mục <FilePath>resources/views</FilePath> nằm ngoài <FilePath>public/</FilePath> nên browser
					không thể mở trực tiếp. Chúng ta cũng nên cấu hình web server chỉ trỏ vào folder chứa
					<FilePath>index.php</FilePath>, còn <FilePath>App/</FilePath> để ngoài — sẽ học ở bài Laravel.
				</p>

				<PageHeading
					text="Q2: extract() nghe nói nguy hiểm, đúng không?"
					addOnClass="text-left my-3"
					markedAs="faq-q2"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>extract()</FilePath> nguy hiểm khi dùng với dữ liệu do user gửi (ví dụ
					<FilePath>extract($_POST)</FilePath>) — user có thể ghi đè biến ngẫu nhiên. Nhưng trong helper
					<FilePath>render()</FilePath>, chúng ta chỉ extract mảng do <b>Controller tự tạo</b> — dữ liệu đã được kiểm
					soát. Đây cũng là cách Laravel, Symfony đang làm bên dưới với view engine.
				</p>

				<PageHeading
					text="Q3: Sao dùng session cho flash message thay vì query string ?msg=..."
					addOnClass="text-left my-3"
					markedAs="faq-q3"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">2 lý do:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Query string hiện trong URL — user share link là bạn share luôn message. Session ẩn.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Query string dễ bị user tay ngang bịa (mở URL <FilePath>?msg=Đã%20xoá%20DB</FilePath> để lừa). Session chỉ
						server ghi.
					</li>
				</ul>

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
						<p class="text-slate-900 dark:text-white font-semibold">Layout partial — header &amp; footer</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">Luyện: tách phần lặp lại của View ra file partial.</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Tạo 2 file <FilePath>App/Views/partials/header.php</FilePath> và
							<FilePath>App/Views/partials/footer.php</FilePath> — chứa phần
							<FilePath>&lt;html&gt;&lt;head&gt;...&lt;body&gt;</FilePath> ở header và
							<FilePath>&lt;/body&gt;&lt;/html&gt;</FilePath> ở footer.
						</li>
						<li>
							Trong <FilePath>product_list.php</FilePath>, <FilePath>product_detail.php</FilePath>,
							<FilePath>product_form.php</FilePath> — thay HTML boilerplate bằng
							<FilePath>&lt;?php require __DIR__ . '/partials/header.php'; ?&gt;</FilePath> ở đầu và tương tự cho
							footer.
						</li>
						<li>
							Header nhận biến <FilePath>$title</FilePath> để đặt <FilePath>&lt;title&gt;</FilePath> khác nhau cho mỗi
							trang.
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
						<p class="text-slate-900 dark:text-white font-semibold">Form Edit — GET và POST /products/{id}/edit</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: form update — dùng lại view form cũ + prefill dữ liệu cũ.
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Thêm 2 action Controller: <FilePath>edit(int $id)</FilePath> (GET) và <FilePath>update(int $id)</FilePath>
							(POST).
						</li>
						<li>
							<FilePath>edit()</FilePath>: lấy record theo <FilePath>find($id)</FilePath>, truyền cả
							<FilePath>$product</FilePath> và <FilePath>$errors</FilePath>, <FilePath>$old</FilePath> vào cùng 1 view
							<FilePath>product_form</FilePath> (dùng lại form). Nếu chưa có <FilePath>$old</FilePath> thì lấy giá trị
							ban đầu từ <FilePath>$product</FilePath>.
						</li>
						<li>
							Đăng ký 2 route: <FilePath>Route::get('/products/{id}/edit', ...)</FilePath> và
							<FilePath>Route::post('/products/{id}', ...)</FilePath>.
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
						<p class="text-slate-900 dark:text-white font-semibold">Helper global — hàm view() và flash()</p>
					</div>
					<p class="text-slate-900 dark:text-white text-sm mb-1">
						Luyện: helper function (kiểu Laravel <FilePath>view()</FilePath>).
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mb-3">
						<li>
							Tạo <FilePath>App/helpers.php</FilePath> chứa 2 function global:
							<FilePath>view(string $name, array $data = []): void</FilePath> và
							<FilePath>flash(string $key, ?string $msg = null): ?string</FilePath> (setter nếu
							<FilePath>$msg</FilePath> có giá trị, getter + unset nếu <FilePath>null</FilePath>).
						</li>
						<li>
							Trong <FilePath>composer.json</FilePath> thêm autoload <FilePath>files</FilePath> để load
							<FilePath>App/helpers.php</FilePath> mỗi request.
						</li>
						<li>
							Refactor Controller: thay <FilePath>$this-&gt;render(...)</FilePath> bằng <FilePath>view(...)</FilePath>,
							thay <FilePath>$_SESSION['flash'] = ...</FilePath> bằng <FilePath>flash('flash', '...')</FilePath>.
						</li>
					</ul>
					<VCodeBlock :code="p3" highlightjs lang="php" theme="atom-one-dark" />
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) Xong phần 4 — chúng ta đã có 1 web app MVC đầy đủ chức năng CRUD. Ở
					<a
						href="/php/documentation/php-and-database-p5"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500"
						>phần 5</a
					>
					chúng ta sẽ mở rộng schema — thêm bảng <FilePath>categories</FilePath> và học cách xử lý quan hệ giữa các
					bảng. See ya!
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
						title: 'PHP & Database - Phần 5',
						link: '/php/documentation/php-and-database-p5',
					},
					prev: {
						title: 'PHP & Database - Phần 3: Controller & Router',
						link: '/php/documentation/php-and-database-p3',
					},
				},
				bViewList: `<?php
// App/Views/product_list.php
/** @var list<array<string, mixed>> $products */
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Danh sách sản phẩm</title>
</head>
<body>
    <h1>Sản phẩm</h1>

    <?php if (!empty($_SESSION['flash'])): ?>
        <p style="color:green">
            <?= htmlspecialchars($_SESSION['flash']) ?>
        </p>
        <?php unset($_SESSION['flash']); ?>
    <?php endif; ?>

    <p><a href="/products/create">+ Thêm sản phẩm</a></p>

    <ul>
    <?php foreach ($products as $p): ?>
        <li>
            <a href="/products/<?= (int) $p['id'] ?>">
                <?= htmlspecialchars($p['product_name']) ?>
            </a>
            — <?= number_format((float) $p['regular_price']) ?>đ
        </li>
    <?php endforeach; ?>
    </ul>
</body>
</html>`,
				bCtrlRender: `<?php
// App/Controllers/ProductController.php


namespace App\\Controllers;

use App\\Models\\ProductModel;

class ProductController
{
    public function __construct(
        private readonly ProductModel $productModel,
    ) {}

    // Helper: render View + inject dữ liệu bằng extract()
    private function render(string $view, array $data = []): void
    {
        extract($data);   // ['products' => [...]]  →  biến $products
        require __DIR__ . "/../Views/{$view}.php";
    }

    // GET /products — danh sách
    public function index(): void
    {
        $products = $this->productModel->read();
        $this->render('product_list', ['products' => $products]);
    }

    // GET /products/{id} — chi tiết
    public function show(int $id): void
    {
        $product = $this->productModel->find($id);
        if ($product === false) {
            http_response_code(404);
            echo 'Không tìm thấy sản phẩm';
            return;
        }
        $this->render('product_detail', ['product' => $product]);
    }
}`,
				bViewDetail: `<?php
// App/Views/product_detail.php
/** @var array<string, mixed> $product */
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
    <p><b>Giá:</b> <?= number_format((float) $product['regular_price']) ?>đ</p>
    <p>
        <?= nl2br(htmlspecialchars($product['description'] ?? '')) ?>
    </p>
</body>
</html>`,
				bViewForm: `<?php
// App/Views/product_form.php
/**
 * @var array<string, string> $errors  Mảng key=field → message
 * @var array<string, mixed>  $old     Dữ liệu user đã nhập lần trước
 */
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thêm sản phẩm</title>
</head>
<body>
    <a href="/products">← Danh sách</a>
    <h1>Thêm sản phẩm</h1>

    <?php if (!empty($errors)): ?>
        <ul style="color:red">
        <?php foreach ($errors as $field => $msg): ?>
            <li><?= htmlspecialchars($msg) ?></li>
        <?php endforeach; ?>
        </ul>
    <?php endif; ?>

    <form method="POST" action="/products">
        <p>
            <label>Tên sản phẩm</label><br>
            <input name="product_name"
                   value="<?= htmlspecialchars($old['product_name'] ?? '') ?>">
        </p>
        <p>
            <label>Giá (VND)</label><br>
            <input type="number" name="regular_price"
                   value="<?= htmlspecialchars($old['regular_price'] ?? '') ?>">
        </p>
        <p>
            <label>Mô tả</label><br>
            <textarea name="description"><?= htmlspecialchars($old['description'] ?? '') ?></textarea>
        </p>
        <button type="submit">Lưu</button>
    </form>
</body>
</html>`,
				bCtrlPost: `<?php
// App/Controllers/ProductController.php — bổ sung create() và store()

// GET /products/create — hiện form
public function create(): void
{
    // Đọc lỗi & dữ liệu cũ từ session, rồi xoá đi (flash pattern)
    $errors = $_SESSION['errors'] ?? [];
    $old    = $_SESSION['old']    ?? [];
    unset($_SESSION['errors'], $_SESSION['old']);

    $this->render('product_form', ['errors' => $errors, 'old' => $old]);
}

// POST /products — xử lý submit
public function store(): void
{
    // 1. Chuẩn hoá input
    $data = [
        'product_name'  => trim((string) ($_POST['product_name']  ?? '')),
        'description'   => trim((string) ($_POST['description']   ?? '')),
        'regular_price' => (int)          ($_POST['regular_price'] ?? 0),
    ];

    // 2. Validate
    $errors = $this->validate($data);

    // 3a. Lỗi → nhét vào session, redirect về form
    if (!empty($errors)) {
        $_SESSION['errors'] = $errors;
        $_SESSION['old']    = $data;
        header('Location: /products/create');
        return;
    }

    // 3b. OK → lưu, flash, redirect về danh sách
    $this->productModel->create($data);
    $_SESSION['flash'] = 'Đã thêm sản phẩm!';
    header('Location: /products');
}

private function validate(array $data): array
{
    $errors = [];
    if ($data['product_name'] === '') {
        $errors['product_name'] = 'Tên sản phẩm không được rỗng.';
    } elseif (mb_strlen($data['product_name']) < 3) {
        $errors['product_name'] = 'Tên sản phẩm phải có ít nhất 3 ký tự.';
    }
    if ($data['regular_price'] <= 0) {
        $errors['regular_price'] = 'Giá phải lớn hơn 0.';
    }
    return $errors;
}`,
				bPrgFlow: `Browser  ──POST /products──▶  Controller::store()
                                     │
                              lưu DB xong
                                     │
Browser  ◀─302 Location: /products─  Controller
   │
   └──GET /products──▶  Controller::index()  ──▶  HTML

Khi user F5:
Browser  ──GET /products──▶  Controller::index()
                                     │
                              chỉ đọc DB, KHÔNG tạo bản ghi trùng`,
				bFinalIndex: `<?php
// index.php


session_start();                              // Bật session — flash message cần
require __DIR__ . '/vendor/autoload.php';

use App\\Core\\Route;
use App\\Models\\ProductModel;
use App\\Controllers\\ProductController;

$model = new ProductModel();
$ctrl  = new ProductController($model);

// ── Thứ tự khai báo: static trước, dynamic sau ───────────────
Route::get('/products',          fn(): mixed         => $ctrl->index());
Route::get('/products/create',   fn(): mixed         => $ctrl->create());
Route::get('/products/{id}',     fn(string $id): mixed => $ctrl->show((int) $id));
Route::post('/products',         fn(): mixed         => $ctrl->store());

Route::dispatch();`,
				bTree: `mvc-shop/
├── composer.json
├── vendor/
├── index.php                        # session_start() + Router
└── App/
    ├── Core/
    │   └── Route.php
    ├── Database/
    │   └── Database.php
    ├── Models/
    │   └── ProductModel.php
    ├── Controllers/
    │   └── ProductController.php    # có helper render()
    └── Views/
        ├── product_list.php
        ├── product_detail.php
        └── product_form.php`,
				p1: `<?php
// App/Views/partials/header.php
/** @var string $title */
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($title ?? 'Shop') ?></title>
</head>
<body>
    <nav>
        <a href="/products">Trang chủ</a>
    </nav>

// App/Views/partials/footer.php
    </body>
</html>

// App/Views/product_list.php — SAU KHI refactor
<?php
/** @var list<array<string, mixed>> $products */
$title = 'Danh sách sản phẩm';
require __DIR__ . '/partials/header.php';
?>

<h1>Sản phẩm</h1>
<!-- ... foreach hiển thị $products ... -->

<?php require __DIR__ . '/partials/footer.php'; ?>

// TODO: refactor tương tự product_detail.php và product_form.php`,
				p2: `<?php
// App/Controllers/ProductController.php
// TODO: bổ sung 2 action edit() và update()

public function edit(int $id): void
{
    $product = $this->productModel->find($id);
    if ($product === false) {
        http_response_code(404);
        return;
    }

    // Ưu tiên $old từ session (khi validate fail lần trước), fallback về $product
    $errors = $_SESSION['errors'] ?? [];
    $old    = $_SESSION['old']    ?? $product;
    unset($_SESSION['errors'], $_SESSION['old']);

    // TODO: render 'product_form' — truyền cả $errors, $old, và thêm $editingId
    //       để form biết action="/products/{id}" thay vì action="/products"
}

public function update(int $id): void
{
    $data = [
        'product_name'  => trim((string) ($_POST['product_name']  ?? '')),
        'description'   => trim((string) ($_POST['description']   ?? '')),
        'regular_price' => (int)          ($_POST['regular_price'] ?? 0),
    ];

    // TODO: validate — nếu lỗi thì nhét session, redirect về /products/{id}/edit
    // TODO: nếu OK, gọi $this->productModel->update($id, $data), flash + redirect về /products
}

// index.php — TODO đăng ký 2 route
Route::get('/products/{id}/edit', fn(string $id): mixed => $ctrl->edit((int) $id));
Route::post('/products/{id}',     fn(string $id): mixed => $ctrl->update((int) $id));`,
				p3: `<?php
// App/helpers.php — TODO viết 2 function global


/**
 * Render 1 view file, inject $data thành biến local.
 */
function view(string $name, array $data = []): void
{
    // TODO: extract($data); require path App/Views/{$name}.php;
    //       (path tuyệt đối bằng __DIR__)
}

/**
 * Setter (khi $msg có giá trị) hoặc getter+unset (khi $msg = null).
 */
function flash(string $key, ?string $msg = null): ?string
{
    // TODO:
    // if ($msg !== null) { $_SESSION[$key] = $msg; return null; }
    // else { $val = $_SESSION[$key] ?? null; unset($_SESSION[$key]); return $val; }
}

// composer.json — TODO khai báo file để autoload mỗi request
// {
//     "autoload": {
//         "psr-4": { "App\\\\": "App/" },
//         "files": [ "App/helpers.php" ]
//     }
// }
// Sau đó chạy: composer dump-autoload

// Cách dùng sau khi có helper (trong Controller):
public function index(): void
{
    $products = $this->productModel->read();
    view('product_list', ['products' => $products]);
}

public function store(): void
{
    // ...
    $this->productModel->create($data);
    flash('flash', 'Đã thêm sản phẩm!');
    header('Location: /products');
}`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-5' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
