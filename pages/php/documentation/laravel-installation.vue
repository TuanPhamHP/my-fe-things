<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Laravel — full-stack PHP framework" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Laravel</b> là framework PHP phổ biến nhất hiện nay, viết bởi <b>Taylor Otwell</b> (2011). Slogan chính
					thức: <i>"The PHP Framework for Web Artisans"</i> — nhấn mạnh vào <b>developer happiness</b>: cú pháp gọn,
					doc rõ, tooling đầy đủ, cộng đồng khổng lồ.
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">🤯 Raw PHP — tự lo mọi thứ</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							Mở connection DB, escape input chống SQL injection, viết session tay, tự route, tự template...
							1 dự án tầm trung → hàng ngàn dòng code hạ tầng.
						</p>
					</div>
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">😎 Laravel — có sẵn hết</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							Routing, ORM, auth, mail, queue, cache, validation, cron, testing, WebSocket... — <b>built-in</b>.
							Bạn chỉ viết business logic, phần còn lại framework lo.
						</p>
					</div>
				</div>

				<PageHeading text="1. Vì sao chọn Laravel?" addOnClass="text-left mt-5" markedAs="why" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					6 điểm mạnh khiến Laravel vượt trội các framework PHP khác (Symfony, CodeIgniter, Yii):
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Điểm mạnh</th>
								<th class="px-5 py-3">Ý nghĩa</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="s in strengths" :key="s.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">{{ s.title }}</th>
								<td class="px-5 py-4 text-slate-700 dark:text-neutral-300 leading-7" v-html="s.desc"></td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="2. Kiến trúc — Request Lifecycle" addOnClass="text-left mt-5" markedAs="lifecycle" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Hiểu <b>vòng đời của 1 request</b> là chìa khoá để hiểu Laravel. Khi user gõ URL trên browser, request đi
					qua đúng chuỗi này trước khi trả về response:
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800 overflow-x-auto">
					<pre class="text-xs md:text-sm text-slate-900 dark:text-white leading-6 font-mono">
Browser ──▶ public/index.php  (single entry point)
                       │
                       ▼
             bootstrap/app.php
             Application::configure()
             → withRouting() / withMiddleware() / withExceptions()
                       │
                       ▼
             Global Middleware pipeline
             (TrustProxies, HandleCors, CheckMaintenance...)
                       │
                       ▼
                   Router
             (routes/web.php, routes/api.php)
                       │
                       ▼
        Route-specific Middleware (auth, throttle, csrf...)
                       │
                       ▼
             Controller / Closure
             (gọi Model, xử lý business logic)
                       │
                       ▼
                  Response
        (view / JSON / redirect) chạy ngược qua
        toàn bộ Middleware pipeline
                       │
                       ▼
                   Browser</pre>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Điểm hay: mỗi tầng đều <b>hook được</b> — bạn có thể chèn middleware để kiểm tra token, ghi log, hoặc
					transform response. Đây là nền tảng cho các feature như auth, CORS, rate-limit, CSRF protection...
				</p>

				<PageHeading text="3. Sáu trụ cột kiến trúc" addOnClass="text-left mt-5" markedAs="pillars" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Toàn bộ Laravel xoay quanh 6 khái niệm sau. Nắm được 6 cái này = nắm được Laravel:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div v-for="p in pillars" :key="p.id"
						class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">{{ p.title }}</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7" v-html="p.desc"></p>
					</div>
				</div>

				<PageHeading text="① Service Container — 'công ty dịch vụ' của app" addOnClass="text-left mt-5" markedAs="pillar-container" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> class A cần class B, class B lại cần class C... Mỗi lần dùng A phải tự
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">new</code>
					cả chuỗi B, C — rất mệt và khó thay đổi.
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>🏠 Ví như:</b> bạn cần thợ sửa nhà. <b>Cách cũ</b> — tự đi tìm thợ điện, tự mua đồ nghề cho họ, tự
						trả tiền linh kiện. <b>Cách mới</b> — gọi 1 <b>công ty dịch vụ</b>, nói "cho tôi 1 thợ điện", công ty
						tự sắp xếp thợ + đồ nghề. Bạn không cần biết thợ đó ai.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Trong Laravel:</b> <b>Service Container</b> chính là "công ty dịch vụ" đó. Bạn chỉ khai báo
					<b>"tôi cần cái này"</b> qua kiểu dữ liệu của tham số constructor — Laravel tự new + tự chuẩn bị dependency
					và đưa cho bạn:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bContainer" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Lợi ích thực tế:</b> mai muốn đổi <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">EloquentCakeRepository</code>
					sang <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">ApiCakeRepository</code>
					(lấy data từ API thay vì DB)? Chỉ đổi 1 dòng khai báo, code Controller giữ nguyên. Test cũng dễ vì có thể
					"thay tráo" bằng fake object. Kiểu bind + inject này gọi là <b>Dependency Injection (DI)</b>.
				</p>

				<PageHeading text="② Service Provider — 'danh bạ' cho Container" addOnClass="text-left mt-5" markedAs="pillar-provider" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> Container biết cách tự new các class thông thường (đọc constructor là biết). Nhưng nếu:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Bạn khai báo cần <b>interface</b> <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">CakeRepository</code> —
						Container không tự đoán được nên dùng class cụ thể nào để hiện thực.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Class cần <b>config từ .env</b> (VD Stripe API key) — Container không biết đọc key từ đâu.
					</li>
				</ul>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>📖 Ví như:</b> công ty dịch vụ (Container) cần 1 cuốn <b>danh bạ</b> — "khi khách gọi 'thợ điện',
						điều <i>anh Tuấn</i> đến; khi khách gọi 'Stripe', dùng API key trong két sắt". <b>Service Provider</b>
						chính là cuốn danh bạ đó.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Khi app khởi động, Laravel <b>đọc hết Service Provider trước</b> để build danh bạ, sau đó Container mới
					bắt đầu phục vụ request. File
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">app/Providers/AppServiceProvider.php</code>
					là nơi bạn viết danh bạ cho project của mình:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bProvider" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Package 3rd-party (VD Stripe SDK, Sentry, Livewire) cũng đăng ký service qua Provider riêng của họ. Đó là
					lý do bạn chỉ cần <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">composer require</code>
					là dùng được ngay, không phải config gì.
				</p>

				<PageHeading text="③ Facade — 'shortcut' cho service" addOnClass="text-left mt-5" markedAs="pillar-facade" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> Container hay lắm, nhưng gọi service qua nó thì dài dòng:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bFacadeProblem" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Viết như vậy 20 chỗ trong 1 file? Mỏi tay và code khó đọc.
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>🖥️ Ví như:</b> muốn mở app trong máy tính. <b>Cách dài</b> — mở File Explorer, vào
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">C:\Program Files\App\bin\app.exe</code>,
						double-click. <b>Cách ngắn</b> — double-click <b>shortcut</b> trên Desktop. Kết quả y hệt, gõ ít hơn
						nhiều.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Facade</b> trong Laravel chính là "shortcut" đó. Cùng 1 service, cùng 1 kết quả, cú pháp ngắn gọn:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bFacade" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Thoạt nhìn <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Cache::put(...)</code>
					giống static method (gọi trực tiếp trên class). Nhưng thực chất Laravel <b>chuyển hướng</b> call đó xuống
					service <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">cache</code>
					trong Container. Bạn <b>không cần hiểu cơ chế bên dưới</b> — chỉ cần biết: gọi qua Facade = shortcut cho
					service.
				</p>
				<div class="mt-3 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Facade hay gặp nhất:</b>
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Route</code> (khai báo route),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">DB</code> (query SQL),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Cache</code> (cache dữ liệu),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Auth</code> (check user login),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Mail</code> (gửi email),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Storage</code> (upload file),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Log</code> (ghi log),
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Validator</code> (validate input).
					</p>
				</div>

				<PageHeading text="④ Middleware — 'cổng an ninh' của route" addOnClass="text-left mt-5" markedAs="pillar-middleware" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> nhiều trang cần kiểm tra chung — VD tất cả trang admin phải login trước, tất cả API endpoint
					cần giới hạn 60 request/phút. Chẳng lẽ copy-paste code check ở đầu mỗi Controller?
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>✈️ Ví như:</b> đi sân bay lên máy bay. Bạn phải qua tuần tự: (1) check-in nhận vé, (2) an ninh
						kiểm tra hành lý, (3) kiểm tra passport. Mỗi bước = 1 <b>cổng</b>. Bước nào fail = không cho đi tiếp;
						bước nào OK = chuyển sang bước sau. Cuối cùng mới lên được máy bay.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Trong Laravel:</b> mỗi request cũng đi qua 1 chuỗi <b>middleware</b> tuần tự trước khi tới Controller.
					Mỗi middleware quyết định 1 trong 3 việc: <b>cho qua tiếp</b>, <b>redirect đi chỗ khác</b>, hoặc <b>trả
					response luôn</b> để chặn.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ví dụ viết 1 middleware chặn user thường không được xoá bánh (chỉ admin OK):
				</p>
				<ClientOnly>
					<VCodeBlock :code="bMiddleware" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Middleware bạn thường gặp:</b> <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">auth</code> (chặn khách chưa login),
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">throttle:60,1</code> (giới hạn 60 req/phút),
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">csrf</code> (chống giả mạo form),
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">cors</code> (cho phép domain khác gọi API)...
					Tất cả đều built-in, không cần tự viết.
				</p>

				<PageHeading text="⑤ MVC — 'chia việc, mỗi file 1 nhiệm vụ'" addOnClass="text-left mt-5" markedAs="pillar-mvc" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> viết PHP thuần thường 1 file làm hết — nhận request, query DB, tính toán, in HTML.
					File dài 500 dòng, sửa 1 chỗ dễ hỏng chỗ khác, và không thể test riêng phần logic.
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>🍽️ Ví như:</b> nhà hàng chia việc rõ ràng — <b>bếp</b> chuẩn bị nguyên liệu và nấu (không tiếp
						khách), <b>menu + bàn ăn</b> là cái khách thấy (không nấu), <b>bồi bàn</b> nhận order từ khách, chuyển
						vào bếp, mang món ra bàn (không nấu, không thiết kế menu). Mỗi người 1 việc, không đụng chéo.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Trong Laravel</b> — mỗi feature tách rõ 3 file tương ứng:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">🍳 Model — "bếp"</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">app/Models/Cake.php</code>
							— đại diện bảng <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">cakes</code>.
							Chứa data + business rule (VD tính discount, format giá).
						</p>
					</div>
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">📄 View — "menu/bàn ăn"</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">resources/views/cakes/index.blade.php</code>
							— template render HTML để khách thấy. KHÔNG chứa logic.
						</p>
					</div>
					<div class="p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">🤵 Controller — "bồi bàn"</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7">
							<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">app/Http/Controllers/CakeController.php</code>
							— nhận request, gọi Model, mang View/JSON ra trả.
						</p>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Luồng khi user gõ</b> <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">GET /cakes</code>:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bMvc" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Lợi ích:</b> muốn đổi giao diện? Chỉ đụng View. Muốn đổi cách query DB? Chỉ đụng Model. Muốn đổi flow
					xử lý? Chỉ đụng Controller. <b>Không đụng chéo</b> = ít bug + dễ test từng phần.
				</p>

				<PageHeading text="⑥ Eloquent + Blade + Artisan — bộ 3 'vũ khí' đặc trưng" addOnClass="text-left mt-5" markedAs="pillar-trio" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ba công cụ tạo nên bản sắc Laravel — thứ khiến framework này khác biệt với Symfony hay CodeIgniter. Mỗi
					cái giải 1 vấn đề đau đầu của PHP thuần:
				</p>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>🍰 Eloquent</b> — <b>vấn đề:</b> viết SQL thuần dài dòng, phải nhớ escape input chống SQL injection,
					phải tự mở PDO connection... Eloquent thay bằng <b>chain method như tiếng Anh</b>, tự escape param, tự
					quản connection:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bEloquent" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>🎨 Blade</b> — <b>vấn đề:</b> template PHP thuần đầy
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">&lt;?= ?&gt;</code>
					rối mắt, quên escape 1 lần là dính <b>XSS</b>. Blade cho cú pháp gọn
					(<code v-pre class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">{{ }}</code>,
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">@if</code>,
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">@foreach</code>)
					và <b>auto-escape</b> mọi biến in ra HTML:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bBlade" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>⚡ Artisan</b> — <b>vấn đề:</b> mỗi lần tạo feature mới phải copy-paste 5-6 file boilerplate (model,
					migration, controller, factory...). Artisan là <b>CLI scaffold</b> — 1 lệnh sinh ra hết:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bArtisanTrio" highlightjs lang="bash" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chi tiết từng cái sẽ ở các bài sau (Eloquent ở bài 3, Blade ở bài 9, Artisan gặp xuyên suốt).
				</p>

				<PageHeading text="4. Yêu cầu môi trường" addOnClass="text-left mt-5" markedAs="env" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Laravel 11 (bản mới nhất tại thời điểm viết) yêu cầu:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>PHP 8.2+</b> — khuyên dùng 8.3 để nhanh hơn 10-15%. Check bằng
						<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php --version</code>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Composer 2.x</b> — package manager của PHP (như npm cho JS). Tải tại
						<a href="https://getcomposer.org/download/" target="_blank" rel="noreferrer"
							class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500">getcomposer.org</a>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Node.js 18+</b> — chỉ cần nếu build asset frontend (Tailwind, JS) qua Vite.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<b>Database</b> — MySQL 5.7+ / MariaDB 10.3+ / PostgreSQL 10+ / SQLite 3.35+. Nếu chưa có, Laravel
						fallback về SQLite (file <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">database/database.sqlite</code>) — dev nhanh, không cần cài gì.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Kiểm tra PHP + Composer đã cài chưa:
				</p>
				<FakeTerminalUI textCoppy="composer --version" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nếu đã cài, output kiểu:
				</p>
				<FakeTerminalUI>
					Composer version 2.7.6 2024-05-04 23:03:15<br />
					PHP version 8.3.10 (C:\Users\PC\.config\herd\bin\php.exe)
				</FakeTerminalUI>

				<PageHeading text="5. Cài đặt — 3 cách phổ biến" addOnClass="text-left mt-5" markedAs="install" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tuỳ hoàn cảnh, chọn 1 trong 3:
				</p>

				<PageHeading text="Cách 1: Herd (khuyên dùng cho Windows/Mac)" addOnClass="text-left mt-3" markedAs="install-herd" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Herd</b> là tool chính chủ Laravel — 1 lần cài, bạn có <b>PHP + Composer + nginx local + parked domain
					(*.test)</b> chạy sẵn, không cần cấu hình. Tải tại
					<a href="https://herd.laravel.com/" target="_blank" rel="noreferrer"
						class="inline-block px-1 rounded underline decoration-2 hover:text-cyan-500">herd.laravel.com</a>.
					Sau khi cài, mở terminal ở đâu cũng có <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php</code> + <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">composer</code> sẵn sàng.
				</p>

				<PageHeading text="Cách 2: Composer create-project (mọi OS)" addOnClass="text-left mt-3" markedAs="install-composer" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đã có PHP + Composer sẵn, chạy 1 lệnh:
				</p>
				<FakeTerminalUI textCoppy="composer create-project laravel/laravel hello-laravel" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong đó <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">hello-laravel</code> là tên folder + tên project. Composer tự tải toàn bộ dependency
					(vendor/) — mất khoảng 1-2 phút.
				</p>

				<PageHeading text="Cách 3: Sail (Docker)" addOnClass="text-left mt-3" markedAs="install-sail" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Laravel Sail</b> — Docker wrapper chính chủ. Không cần cài PHP local, mọi thứ trong container. Phù hợp
					khi cần đúng version PHP + MySQL + Redis giống production:
				</p>
				<FakeTerminalUI textCoppy="curl -s https://laravel.build/hello-laravel | bash" />

				<PageHeading text="6. Chạy dự án lần đầu" addOnClass="text-left mt-5" markedAs="first-run" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vào folder vừa tạo, chạy dev server built-in của PHP qua artisan:
				</p>
				<FakeTerminalUI textCoppy="cd hello-laravel && php artisan serve" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mở browser: <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">http://localhost:8000</code> → thấy welcome page Laravel = OK. 🐳
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Song song:</b> nếu có phần frontend (Tailwind/Vue/React), mở thêm terminal thứ 2:
						<FilePath textCoppy="npm install && npm run dev">npm install &amp;&amp; npm run dev</FilePath>
						— Vite dev server hot-reload asset ở port 5173, artisan serve nhúng script vào blade tự động.
					</p>
				</div>

				<PageHeading text='7. "Hello Cake" — route đầu tiên' addOnClass="text-left mt-5" markedAs="hello" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Mở file <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">routes/web.php</code>, thêm route trả về JSON danh sách bánh:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bHelloRoute" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Save file, refresh <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">http://localhost:8000/cakes</code> — bạn thấy JSON. 3 dòng code, không
					cần config web server, không cần bootstrap request — đó là "developer happiness" của Laravel.
				</p>

				<PageHeading text="8. Ecosystem — công cụ hay dùng" addOnClass="text-left mt-5" markedAs="ecosystem" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Laravel không chỉ là 1 framework — nó là cả 1 <b>ecosystem</b> với các tool phụ trợ chính chủ:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Tool</th>
								<th class="px-5 py-3">Vai trò</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="t in ecosystem" :key="t.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">{{ t.name }}</th>
								<td class="px-5 py-4 text-slate-700 dark:text-neutral-300 leading-7" v-html="t.desc"></td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="9. 10 lệnh Artisan dùng mỗi ngày" addOnClass="text-left mt-5" markedAs="artisan-cheat" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php artisan</code> là "dao Thuỵ Sĩ" của Laravel — 100+ lệnh built-in, chưa kể bạn có thể tự
					viết command riêng. 10 lệnh gặp gần như mỗi ngày:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bArtisanCheat" highlightjs lang="bash" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Mẹo:</b> <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php artisan list</code> in ra TẤT CẢ command available (kể cả từ package
						3rd-party). <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php artisan help {{ '{command}' }}</code> xem chi tiết flag của 1 command.
					</p>
				</div>

				<PageHeading text="10. Roadmap học tiếp" addOnClass="text-left mt-5" markedAs="roadmap" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Sau bài này, các bài tiếp theo trong course sẽ đi sâu vào từng trụ cột — thứ tự khuyên dùng:
				</p>
				<ol class="pl-10">
					<li v-for="r in roadmap" :key="r.id" class="text-slate-900 dark:text-white leading-8 list-decimal marker:text-sky-400">
						<a :href="r.link" class="underline decoration-2 hover:text-cyan-500">{{ r.title }}</a>
						— <span class="text-sm text-slate-700 dark:text-neutral-300">{{ r.desc }}</span>
					</li>
				</ol>

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
				strengths: [
					{
						id: 1,
						title: 'Batteries included',
						desc: 'Auth, routing, mail, queue, cache, validation, cron, WebSocket, testing... — built-in. Không phải chọn package cho từng vấn đề nhỏ.',
					},
					{
						id: 2,
						title: 'Eloquent ORM',
						desc: 'ORM đẹp nhất giới PHP. Quan hệ, eager loading, accessor/mutator, scope... cú pháp cực gọn. Không có SQL trong controller.',
					},
					{
						id: 3,
						title: 'Artisan CLI',
						desc: '100+ command để scaffold, migrate, tinker, queue worker... Tự viết command riêng chỉ 5 dòng code.',
					},
					{
						id: 4,
						title: 'Blade template',
						desc: 'Template engine gọn hơn PHP thuần: <b>@if / @foreach / @extends</b>. Auto-escape chống XSS. Có layout inheritance.',
					},
					{
						id: 5,
						title: 'Convention over configuration',
						desc: 'Model <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Cake</code> → table <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">cakes</code>. Controller <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">CakeController</code> ở <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">app/Http/Controllers/</code>. Không cần khai báo đâu — Laravel tự đoán.',
					},
					{
						id: 6,
						title: 'Cộng đồng + doc',
						desc: 'Doc chính thức được xem là chuẩn mực của framework docs. Có Laracasts (video), Laravel News, hàng ngàn package trên Packagist.',
					},
				],
				pillars: [
					{
						id: 1,
						title: '① Service Container (IoC)',
						desc: 'Trái tim Laravel — 1 registry lưu tất cả object của app. Khi 1 class cần dependency, Laravel <b>tự inject</b> qua constructor. Không có <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">new SomeClass()</code> khắp code.',
					},
					{
						id: 2,
						title: '② Service Provider',
						desc: '"Bootstrap point" — nơi bind service vào Container. VD <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">AppServiceProvider</code> chạy khi app khởi động. Package 3rd-party đăng ký service qua đây.',
					},
					{
						id: 3,
						title: '③ Facades',
						desc: 'Static-looking proxy cho service. VD <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Cache::get(\'key\')</code> thực chất gọi <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">$container->make(\'cache\')->get(\'key\')</code> nhưng cú pháp gọn hơn nhiều.',
					},
					{
						id: 4,
						title: '④ Middleware pipeline',
						desc: 'Chuỗi function chạy trước/sau mỗi request. Auth, CORS, throttle, CSRF... đều là middleware. Tự viết middleware = 5 dòng code.',
					},
					{
						id: 5,
						title: '⑤ MVC (Model-View-Controller)',
						desc: '<b>Model</b> (Eloquent) — data + business rule. <b>View</b> (Blade) — HTML. <b>Controller</b> — orchestrator, nhận request, gọi model, trả view/JSON.',
					},
					{
						id: 6,
						title: '⑥ Eloquent + Blade + Artisan',
						desc: '3 công cụ "signature" của Laravel — thứ khiến framework này khác biệt với Symfony hay CodeIgniter. Sẽ đi sâu ở các bài sau.',
					},
				],
				ecosystem: [
					{
						id: 1,
						name: 'Composer',
						desc: 'Package manager PHP. Cài package: <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">composer require laravel/breeze</code>. Autoload PSR-4.',
					},
					{
						id: 2,
						name: 'Artisan',
						desc: 'CLI của Laravel. <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php artisan {command}</code> — scaffold, migrate, tinker, queue...',
					},
					{
						id: 3,
						name: 'Tinker',
						desc: 'REPL để "chơi" với model/DB trực tiếp — <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">php artisan tinker</code> rồi gõ <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">Cake::count()</code>. Debug cực nhanh.',
					},
					{
						id: 4,
						name: 'Vite',
						desc: 'Build asset (Tailwind, JS, Vue, React) — thay thế Webpack Mix từ Laravel 9+. Hot Module Reload sẵn.',
					},
					{
						id: 5,
						name: 'Herd',
						desc: 'PHP + Composer + nginx local, all-in-one cho Win/Mac. Domain <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">*.test</code> tự parked, không cần config.',
					},
					{
						id: 6,
						name: 'Sail',
						desc: 'Docker wrapper chính chủ — <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">./vendor/bin/sail up</code> ra PHP + MySQL + Redis giống production.',
					},
					{
						id: 7,
						name: 'Forge / Vapor',
						desc: 'Deploy tool chính chủ. Forge = VPS (DigitalOcean, AWS EC2). Vapor = serverless AWS Lambda.',
					},
					{
						id: 8,
						name: 'Livewire / Inertia',
						desc: 'Xây SPA không cần tách API. Livewire = server-side reactivity, Inertia = bridge Laravel + Vue/React.',
					},
					{
						id: 9,
						name: 'Breeze / Jetstream',
						desc: 'Starter kit có sẵn auth (login/register/reset password/2FA). Cài 1 lệnh, dùng ngay.',
					},
					{
						id: 10,
						name: 'Filament / Nova',
						desc: 'Admin panel tự sinh CRUD từ Model. Filament = free/open-source, Nova = paid chính chủ.',
					},
				],
				bContainer: `<?php
// ❌ Cách cũ — phụ thuộc cứng
class CakeController extends Controller
{
    protected CakeRepository $repo;

    public function __construct()
    {
        // Consumer tự new — khó test, khó đổi implementation
        $this->repo = new EloquentCakeRepository(new DatabaseConnection($host, $user, $pass));
    }
}

// ✓ Cách Laravel — type-hint, Container tự inject
class CakeController extends Controller
{
    public function __construct(
        protected CakeRepository $repo,   // ← Laravel tự resolve từ Container
    ) {}

    public function index()
    {
        return $this->repo->getActiveCakes();
    }
}

// Bind interface → implementation ở AppServiceProvider::register()
$this->app->bind(CakeRepository::class, EloquentCakeRepository::class);

// Mai đổi sang API? Chỉ sửa 1 dòng bind — CakeController không đổi.
$this->app->bind(CakeRepository::class, ApiCakeRepository::class);`,
			bProvider: `<?php
// app/Providers/AppServiceProvider.php
namespace App\\Providers;

use App\\Repositories\\CakeRepository;
use App\\Repositories\\EloquentCakeRepository;
use Illuminate\\Support\\ServiceProvider;
use Stripe\\StripeClient;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // "Ai gọi interface CakeRepository → đưa EloquentCakeRepository"
        $this->app->bind(CakeRepository::class, EloquentCakeRepository::class);

        // "Stripe client — new 1 lần, dùng lại"
        // (singleton = 1 instance duy nhất cho cả app)
        $this->app->singleton(StripeClient::class, function () {
            return new StripeClient(env('STRIPE_SECRET_KEY'));
        });
    }
}`,
			bFacadeProblem: `<?php
// Gọi service cache qua Container — dài dòng, khó nhớ:
app('cache')->put('cakes.count', 42, 3600);

// Hoặc dài hơn nữa nếu muốn type-safe:
resolve(\\Illuminate\\Contracts\\Cache\\Repository::class)
    ->put('cakes.count', 42, 3600);`,
			bFacade: `<?php
use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\Facades\\Log;
use Illuminate\\Support\\Facades\\DB;

// ---- Cache — lưu và đọc dữ liệu tạm ----
Cache::put('cakes.count', 42, 3600);   // lưu, giữ trong 3600 giây
$count = Cache::get('cakes.count', 0); // đọc, mặc định 0 nếu chưa có
Cache::forget('cakes.count');          // xoá

// ---- Ghi log ----
Log::info('User mua bánh', ['user_id' => 1, 'cake_id' => 5]);

// ---- Query DB ----
DB::table('cakes')->where('is_active', true)->count();

// Tất cả đều: {Facade}::method() → cực gọn.`,
			bMiddleware: `<?php
// app/Http/Middleware/EnsureUserIsAdmin.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        // Chạy TRƯỚC controller
        if (! $request->user()?->is_admin) {
            abort(403, 'Chỉ admin mới được xoá bánh.');
        }

        $response = $next($request);   // → chuyển tiếp tới controller

        // Chạy SAU controller (trước khi trả về browser) — VD thêm header
        $response->headers->set('X-Handled-By', 'AdminMiddleware');

        return $response;
    }
}

// Áp dụng cho route
Route::delete('/cakes/{cake}', [CakeController::class, 'destroy'])
    ->middleware(EnsureUserIsAdmin::class);

// Chain nhiều middleware — chạy theo thứ tự khai báo
Route::post('/cakes', [CakeController::class, 'store'])
    ->middleware(['auth', 'throttle:10,1', EnsureUserIsAdmin::class]);`,
			bMvc: `<?php
// routes/web.php
Route::get('/cakes', [CakeController::class, 'index']);

// app/Http/Controllers/CakeController.php
class CakeController extends Controller
{
    public function index()
    {
        // Gọi MODEL để lấy data
        $cakes = Cake::with('category')->latest()->paginate(15);

        // Chọn VIEW để render
        return view('cakes.index', compact('cakes'));
    }
}

// resources/views/cakes/index.blade.php
// @foreach ($cakes as $cake)
//     <div>{{ $cake->name }} — {{ number_format($cake->price) }}đ</div>
// @endforeach
// {{ $cakes->links() }}

// Response HTML → Browser`,
			bEloquent: `<?php
// Thay 20 dòng SQL + PDO bằng 1 chain gọn
$cakes = Cake::where('is_active', true)
    ->with(['category', 'tags'])       // eager load — chống N+1
    ->whereBetween('price', [10_000, 100_000])
    ->orderBy('price')
    ->paginate(15);

// Tương đương SQL:
// SELECT * FROM cakes WHERE is_active = 1 AND price BETWEEN 10000 AND 100000
// ORDER BY price LIMIT 15 OFFSET ?;
// + 2 query SELECT ... WHERE id IN (...) cho eager load category & tags`,
			bBlade: `{{-- resources/views/cakes/index.blade.php --}}
@extends('layouts.app')

@section('content')
    <h1>Danh sách bánh</h1>

    @forelse ($cakes as $cake)
        <article class="cake-card">
            {{-- Auto-escape — chặn XSS mặc định --}}
            <h2>{{ $cake->name }}</h2>
            <p>{{ number_format($cake->price) }}đ</p>

            @if (! $cake->is_active)
                <span class="badge badge-danger">Hết hàng</span>
            @endif
        </article>
    @empty
        <p>Chưa có bánh nào.</p>
    @endforelse

    {{ $cakes->links() }}   {{-- pagination UI --}}
@endsection`,
			bArtisanTrio: `# Scaffold 5 file cho Cake trong 1 lệnh
php artisan make:model Cake -mfsc
# Sinh ra:
#   app/Models/Cake.php
#   database/migrations/2026_xx_xx_create_cakes_table.php
#   database/factories/CakeFactory.php
#   database/seeders/CakeSeeder.php
#   app/Http/Controllers/CakeController.php

# Chạy DB migration
php artisan migrate

# Vào REPL — chơi trực tiếp với Model
php artisan tinker
>>> Cake::factory()->count(20)->create();
>>> Cake::where('is_active', true)->count();

# Chạy background worker cho queue job
php artisan queue:work`,
			bHelloRoute: `<?php
// routes/web.php
use Illuminate\\Support\\Facades\\Route;

Route::get('/cakes', function () {
    return [
        ['id' => 1, 'name' => 'Bánh su kem',       'price' => 25000],
        ['id' => 2, 'name' => 'Bánh mì bơ',        'price' => 15000],
        ['id' => 3, 'name' => 'Bánh flan caramel', 'price' => 20000],
    ];
});`,
				bArtisanCheat: `# ---- Chạy / quan sát ----
php artisan serve                    # Dev server tại http://localhost:8000
php artisan route:list               # In tất cả route đã đăng ký
php artisan about                    # Thông tin app: PHP version, env, cache driver...

# ---- Scaffold code ----
php artisan make:model Cake -mfsc    # Model + Migration + Factory + Seeder + Controller (5 file / 1 lệnh)
php artisan make:controller CakeController --resource
php artisan make:request StoreCakeRequest
php artisan make:middleware CheckAuth

# ---- Database ----
php artisan migrate                  # Chạy tất cả migration chưa apply
php artisan migrate:fresh --seed     # Xoá sạch bảng, migrate lại từ đầu, chạy seeder
php artisan db:seed                  # Chạy DatabaseSeeder

# ---- Debug / thử nhanh ----
php artisan tinker                   # REPL — gõ Cake::factory()->create() trong terminal

# ---- Cache / optimize (production) ----
php artisan config:cache             # Cache config → nhanh hơn khi chạy prod
php artisan optimize                 # Cache config + route + view + event

# ---- Test ----
php artisan test                     # Chạy tất cả PHPUnit test`,
				roadmap: [
					{ id: 1, title: 'Laravel - Structure & Features', link: '/php/documentation/laravel-structure-feature', desc: 'cấu trúc thư mục + hiểu MVC cụ thể trong Laravel' },
					{ id: 2, title: 'Laravel - Database', link: '/php/documentation/laravel-database', desc: 'setup .env, Migration, Schema Builder' },
					{ id: 3, title: 'Laravel - Eloquent ORM', link: '/php/documentation/laravel-orm', desc: 'CRUD, relation, eager loading (chữa N+1)' },
					{ id: 4, title: 'Laravel - Model', link: '/php/documentation/laravel-model', desc: 'Model properties, accessor, mutator, Factory' },
					{ id: 5, title: 'Laravel - Query Builder', link: '/php/documentation/laravel-query-builder', desc: 'fluent SQL, khi nào dùng thay Eloquent' },
					{ id: 6, title: 'Laravel - Controller', link: '/php/documentation/laravel-controller', desc: 'CRUD controller, resource route, return types' },
					{ id: 7, title: 'Laravel - Middleware', link: '/php/documentation/laravel-middleware', desc: 'auth, throttle, tự viết middleware' },
					{ id: 8, title: 'Laravel - Form Handling', link: '/php/documentation/laravel-form', desc: 'validation, Form Request, CSRF' },
					{ id: 9, title: 'Laravel - Views (Blade)', link: '/php/documentation/laravel-views', desc: '@extends, @section, @include, layout kế thừa' },
					{ id: 10, title: 'Laravel - Pagination', link: '/php/documentation/laravel-pagination', desc: 'paginate, cursor pagination, JSON response' },
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-14' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
