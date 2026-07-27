<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Middleware" addOnClass="text-left" markedAs="laravel-middleware" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Ở bài này, chúng ta cùng tìm hiểu về <b>Middleware</b> — một trong các trụ cột kiến trúc Laravel:
				</p>
				<SessionTarget :operators="cprs"></SessionTarget>

				<PageHeading text="1. Vì sao cần Middleware?" addOnClass="text-left mt-5" markedAs="middleware-why" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> app có 20 route. Tất cả route API cần check user đã login; tất cả route admin cần check
					role; tất cả form POST cần chống CSRF... Chẳng lẽ copy-paste code check ở đầu mỗi Controller?
					Sau này sửa 1 rule = phải mò 20 chỗ để sửa.
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>🏢 Ví như:</b> toà nhà văn phòng nhiều tầng. Nếu mỗi phòng tự thuê bảo vệ riêng → tốn kém và khó
						quản lý. <b>Giải pháp:</b> đặt bảo vệ ở <b>cửa vào toà nhà</b> (kiểm tra thẻ nhân viên chung), rồi đặt
						thêm bảo vệ riêng ở <b>cửa tầng VIP</b> (kiểm tra role admin). Muốn đổi rule? Sửa 1 chỗ, cả toà áp
						dụng.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Trong Laravel:</b> Middleware chính là "lớp bảo vệ" đó. Viết 1 lần, gắn vào nhiều route. Mỗi middleware
					có thể quyết định 1 trong 3 việc:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						✅ <b>Cho qua tiếp</b> — chuyển request sang middleware/controller kế tiếp.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						🔀 <b>Redirect</b> — VD chưa login thì đá về trang <FilePath>/login</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						🚫 <b>Trả response ngay</b> — VD abort 403 nếu không đủ quyền, không cần vào Controller.
					</li>
				</ul>

				<PageHeading text="2. Vị trí trong Request Lifecycle" addOnClass="text-left mt-5" markedAs="middleware-lifecycle" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Request đi vào phải qua <b>2 tầng middleware</b> tuần tự trước khi tới Controller, và response đi ra cũng
					chạy ngược qua đúng chuỗi đó:
				</p>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800 overflow-x-auto">
					<pre class="text-xs md:text-sm text-slate-900 dark:text-white leading-6 font-mono">
Browser
   │  Request (GET /admin/cakes)
   ▼
┌─────────────────────────────────────┐
│  Global Middleware                  │  ← chạy cho MỌI request
│  (TrustProxies, HandleCors, ...)    │
└─────────────────────────────────────┘
   │
   ▼
┌─────────────────────────────────────┐
│  Route/Group Middleware             │  ← chạy chỉ khi route match
│  (auth, throttle, EnsureAdmin...)   │
└─────────────────────────────────────┘
   │
   ▼
        Controller — CakeController@destroy
   │
   ▼ Response
┌─────────────────────────────────────┐
│  Route/Group Middleware (after)     │  ← có thể can thiệp response
└─────────────────────────────────────┘
   │
   ▼
┌─────────────────────────────────────┐
│  Global Middleware (after)          │
└─────────────────────────────────────┘
   │
   ▼ Response tới Browser</pre>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đây là điểm mạnh: bạn có thể <b>can thiệp cả 2 chiều</b> — trước Controller (validate, auth) và sau
					Controller (thêm header, transform response, log duration).
				</p>

				<PageHeading text="3. Tạo middleware đầu tiên" addOnClass="text-left mt-5" markedAs="middleware-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Dùng artisan để scaffold — Laravel tự tạo file kèm structure sẵn:
				</p>
				<FakeTerminalUI textCoppy="php artisan make:middleware CheckToken" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					File sinh ra tại <FilePath>app/Http/Middleware/CheckToken.php</FilePath> — 1 class với method
					<FilePath>handle()</FilePath> duy nhất. Bên trong đó là toàn bộ logic của middleware:
				</p>
				<ClientOnly>
					<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Anatomy của <FilePath>handle()</FilePath>:</b>
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$request</FilePath> — object request hiện tại, dùng đọc header/body/query.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>$next</FilePath> — closure "chuyển tiếp sang middleware/controller kế tiếp". Gọi
						<FilePath>$next($request)</FilePath> = cho qua.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>Response</FilePath> — kiểu trả về (import từ
						<FilePath>Symfony\Component\HttpFoundation\Response</FilePath>). Có thể là redirect, view, JSON...
					</li>
				</ul>

				<PageHeading text="4. Before &amp; After — can thiệp 2 chiều" addOnClass="text-left mt-5" markedAs="middleware-before-after" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Code trước dòng <FilePath>$next($request)</FilePath> chạy <b>TRƯỚC Controller</b>. Code sau chạy
					<b>SAU Controller</b> nhưng trước khi response tới browser. VD middleware đo thời gian xử lý request và
					gắn vào response header:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bBeforeAfter" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong DevTools của browser, tab Network → response header sẽ thấy
					<FilePath>X-Response-Time: 42ms</FilePath>. Cực tiện để debug performance.
				</p>

				<PageHeading text="5. Ba cách áp dụng middleware" addOnClass="text-left mt-5" markedAs="middleware-apply" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Laravel 11+</b> dùng kiến trúc mới ("bootstrap-less") — middleware đăng ký trong
					<FilePath>bootstrap/app.php</FilePath> hoặc gắn thẳng ở Route, không còn HTTP Kernel như trước.
				</p>

				<PageHeading text="Cách 1: Gắn trực tiếp vào 1 route" addOnClass="text-left mt-3" markedAs="middleware-route" :lvl="3" />
				<ClientOnly>
					<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Cách 2: Gắn cho cả route group" addOnClass="text-left mt-3" markedAs="middleware-group" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Khi có 10+ route dùng chung middleware — group lại cho gọn:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bGroup" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Cách 3: Global — áp cho MỌI request" addOnClass="text-left mt-3" markedAs="middleware-global" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đăng ký trong <FilePath>bootstrap/app.php</FilePath>. Chỉ dùng khi middleware thực sự cần chạy cho MỌI
					request (VD force HTTPS, log toàn bộ traffic):
				</p>
				<ClientOnly>
					<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="6. Middleware với tham số" addOnClass="text-left mt-5" markedAs="middleware-params" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Middleware có thể nhận tham số qua cú pháp <FilePath>middleware:param1,param2</FilePath>. Laravel truyền
					các param đó vào <FilePath>handle()</FilePath> sau <FilePath>$next</FilePath>. VD built-in
					<FilePath>throttle:60,1</FilePath> giới hạn 60 request/phút:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bParams" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="7. Alias — đặt tên ngắn cho middleware" addOnClass="text-left mt-5" markedAs="middleware-alias" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Viết <FilePath>EnsureUserIsAdmin::class</FilePath> khắp nơi hơi dài. Đăng ký alias 1 lần, sau đó dùng tên
					ngắn:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bAlias" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="8. Middleware built-in phổ biến" addOnClass="text-left mt-5" markedAs="middleware-builtin" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Laravel có sẵn nhiều middleware — không cần tự viết. 8 cái hay gặp nhất:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Middleware</th>
								<th class="px-5 py-3">Tác dụng</th>
								<th class="px-5 py-3">Ví dụ dùng</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="m in builtins" :key="m.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap"><FilePath>{{ m.name }}</FilePath></th>
								<td class="px-5 py-4 text-slate-700 dark:text-neutral-300 leading-7">{{ m.desc }}</td>
								<td class="px-5 py-4 text-slate-700 dark:text-neutral-300"><FilePath>{{ m.example }}</FilePath></td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="9. Các điểm cần chú ý (⚠️ pitfalls)" addOnClass="text-left mt-5" markedAs="middleware-pitfalls" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đây là những "cạm bẫy" mà 90% người mới gặp phải khi làm việc với middleware:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
					<div v-for="p in pitfalls" :key="p.id"
						class="p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
						<p class="font-semibold mb-2 text-slate-900 dark:text-white">⚠️ {{ p.title }}</p>
						<p class="text-sm text-slate-700 dark:text-neutral-300 leading-7" v-html="p.desc"></p>
					</div>
				</div>

				<PageHeading text="10. Ví dụ thực tế: Cake Shop" addOnClass="text-left mt-5" markedAs="middleware-example" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Áp middleware vào Cake Shop cho quen — chỉ admin mới được xoá bánh:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bAdmin" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Chain 3 middleware: <FilePath>auth</FilePath> (đã login), <FilePath>throttle:10,1</FilePath> (max 10
					request/phút), <FilePath>admin</FilePath> (role admin). Ai vượt qua đủ 3 cổng mới được xoá bánh.
				</p>

				<PageHeading text="11. 🏋️ Luyện tập nhẹ" addOnClass="text-left mt-5" markedAs="middleware-practice" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tự viết 3 middleware sau để nắm vững pattern. Skeleton có sẵn, bạn điền logic phần
					<FilePath>// TODO</FilePath>:
				</p>

				<PageHeading text="Bài 1: CheckShopOpen — chỉ cho vào 8h-22h" addOnClass="text-left mt-3" markedAs="practice-1" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu:</b> chặn mọi request tới <FilePath>/cakes</FilePath> ngoài giờ mở cửa (8h-22h),
					trả HTTP 503 kèm thông báo "Cửa hàng đã đóng cửa".
				</p>
				<ClientOnly>
					<VCodeBlock :code="bPractice1" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Bài 2: LogSlowRequest — cảnh báo request chậm" addOnClass="text-left mt-3" markedAs="practice-2" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu:</b> đo thời gian xử lý mỗi request. Nếu &gt; 1000ms, ghi <FilePath>Log::warning()</FilePath>
					kèm URL + duration. Áp cho toàn bộ route.
				</p>
				<ClientOnly>
					<VCodeBlock :code="bPractice2" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Bài 3: ForceJsonResponse — API luôn trả JSON" addOnClass="text-left mt-3" markedAs="practice-3" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu:</b> với các route API, set header <FilePath>Accept: application/json</FilePath> vào request
					để Laravel biết mà trả JSON (kể cả khi client quên set header).
				</p>
				<ClientOnly>
					<VCodeBlock :code="bPractice3" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>💡 Gợi ý test:</b> dùng <FilePath textCoppy="php artisan tinker">php artisan tinker</FilePath> hoặc
						Postman/curl để gửi request kiểm tra. Đổi giờ hệ thống (hoặc mock <FilePath>Carbon::now()</FilePath>)
						để test middleware giờ mở cửa mà không cần chờ.
					</p>
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
				b1: `<?php
// app/Http/Middleware/CheckToken.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class CheckToken
{
    public function handle(Request $request, Closure $next): Response
    {
        // Kiểm tra header 'token' có tồn tại?
        if (empty($request->header('token'))) {
            return redirect('/login');   // Không có → đá về /login
        }

        return $next($request);          // Có → cho qua tới middleware/controller kế tiếp
    }
}`,
				b2: `<?php
// routes/web.php
use App\\Http\\Controllers\\CakeController;
use App\\Http\\Middleware\\CheckToken;

Route::get('/cakes', [CakeController::class, 'index'])
    ->middleware(CheckToken::class);

// Chain nhiều middleware — chạy theo THỨ TỰ khai báo
Route::post('/cakes', [CakeController::class, 'store'])
    ->middleware(['auth', CheckToken::class]);`,
				b3: `<?php
// bootstrap/app.php
use App\\Http\\Middleware\\CheckToken;
use Illuminate\\Foundation\\Application;
use Illuminate\\Foundation\\Configuration\\Exceptions;
use Illuminate\\Foundation\\Configuration\\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // append() — thêm vào cuối chuỗi global
        $middleware->append(CheckToken::class);

        // prepend() — thêm vào đầu chuỗi (chạy TRƯỚC các middleware khác)
        // $middleware->prepend(ForceHttps::class);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })
    ->create();`,
				bBeforeAfter: `<?php
// app/Http/Middleware/MeasureResponseTime.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class MeasureResponseTime
{
    public function handle(Request $request, Closure $next): Response
    {
        // ===== BEFORE — chạy trước Controller =====
        $start = microtime(true);

        // ===== Chuyển tiếp — Controller xử lý ở đây =====
        $response = $next($request);

        // ===== AFTER — chạy sau Controller, trước khi trả browser =====
        $duration = round((microtime(true) - $start) * 1000, 2);
        $response->headers->set('X-Response-Time', "{$duration}ms");

        return $response;
    }
}`,
				bGroup: `<?php
// routes/web.php
use App\\Http\\Middleware\\EnsureUserIsAdmin;

// Tất cả 4 route bên trong đều tự động có 2 middleware này
Route::middleware(['auth', EnsureUserIsAdmin::class])
    ->prefix('admin')
    ->group(function () {
        Route::get('/cakes',            [AdminCakeController::class, 'index']);
        Route::get('/cakes/create',     [AdminCakeController::class, 'create']);
        Route::post('/cakes',           [AdminCakeController::class, 'store']);
        Route::delete('/cakes/{cake}',  [AdminCakeController::class, 'destroy']);
    });`,
				bParams: `<?php
// ============================================================
// 1. Dùng built-in throttle với 2 param: 60 request / 1 phút
// ============================================================
Route::get('/api/cakes', [CakeController::class, 'index'])
    ->middleware('throttle:60,1');

// ============================================================
// 2. Tự viết middleware nhận param
// ============================================================
// File: app/Http/Middleware/EnsureRole.php
// (đầy đủ nên có: namespace App\\Http\\Middleware; + use ...)

class EnsureRole
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if ($request->user()?->role !== $role) {
            abort(403, "Cần role {$role} để truy cập.");
        }
        return $next($request);
    }
}

// ============================================================
// 3. Route dùng middleware kèm param — 'admin' truyền vào $role
// ============================================================
Route::delete('/cakes/{cake}', [CakeController::class, 'destroy'])
    ->middleware('role:admin');

Route::get('/cakes/report', [CakeController::class, 'report'])
    ->middleware('role:manager');`,
				bAlias: `<?php
// ============================================================
// bootstrap/app.php — đăng ký alias trong withMiddleware()
// ============================================================
use Illuminate\\Foundation\\Application;
use Illuminate\\Foundation\\Configuration\\Middleware;
use Illuminate\\Foundation\\Configuration\\Exceptions;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(web: __DIR__.'/../routes/web.php')
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'admin'     => \\App\\Http\\Middleware\\EnsureUserIsAdmin::class,
            'role'      => \\App\\Http\\Middleware\\EnsureRole::class,
            'shop.open' => \\App\\Http\\Middleware\\CheckShopOpen::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {})
    ->create();

// ============================================================
// routes/web.php — dùng tên ngắn thay vì FQCN dài
// ============================================================
Route::delete('/cakes/{cake}', [CakeController::class, 'destroy'])
    ->middleware('admin');
Route::get('/cakes/report', [CakeController::class, 'report'])
    ->middleware('role:manager');
Route::get('/cakes', [CakeController::class, 'index'])
    ->middleware('shop.open');`,
				bAdmin: `<?php
// app/Http/Middleware/EnsureUserIsAdmin.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()?->is_admin) {
            abort(403, 'Chỉ admin mới được xoá bánh.');
        }
        return $next($request);
    }
}

// routes/web.php — chain 3 middleware, thứ tự quan trọng!
// 1. auth        → chưa login? đá về /login
// 2. throttle    → max 10 request/phút cho endpoint delete
// 3. admin       → có login rồi nhưng không phải admin? 403
Route::delete('/cakes/{cake}', [CakeController::class, 'destroy'])
    ->middleware(['auth', 'throttle:10,1', 'admin']);`,
				bPractice1: `<?php
// app/Http/Middleware/CheckShopOpen.php
namespace App\\Http\\Middleware;

use Carbon\\Carbon;
use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class CheckShopOpen
{
    public function handle(Request $request, Closure $next): Response
    {
        $now = Carbon::now();
        $hour = $now->hour;   // 0-23

        // TODO: check 8 <= $hour < 22
        // Nếu ngoài giờ, dùng abort(503, 'Cửa hàng đã đóng cửa')

        return $next($request);
    }
}

// routes/web.php
Route::get('/cakes', [CakeController::class, 'index'])
    ->middleware(CheckShopOpen::class);`,
				bPractice2: `<?php
// app/Http/Middleware/LogSlowRequest.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Log;
use Symfony\\Component\\HttpFoundation\\Response;

class LogSlowRequest
{
    public function handle(Request $request, Closure $next): Response
    {
        $start = microtime(true);

        $response = $next($request);

        $ms = (microtime(true) - $start) * 1000;

        // TODO: nếu $ms > 1000 thì
        // Log::warning('Slow request', [
        //     'url'      => $request->fullUrl(),
        //     'method'   => $request->method(),
        //     'duration' => round($ms, 2) . 'ms',
        // ]);

        return $response;
    }
}

// Đăng ký global trong bootstrap/app.php
// $middleware->append(LogSlowRequest::class);`,
				bPractice3: `<?php
// app/Http/Middleware/ForceJsonResponse.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class ForceJsonResponse
{
    public function handle(Request $request, Closure $next): Response
    {
        // TODO: set request header
        // $request->headers->set('Accept', 'application/json');

        return $next($request);
    }
}

// Áp cho toàn bộ nhóm route API
Route::middleware([ForceJsonResponse::class])
    ->prefix('api')
    ->group(function () {
        Route::get('/cakes',        [CakeApiController::class, 'index']);
        Route::post('/cakes',       [CakeApiController::class, 'store']);
        Route::get('/cakes/{cake}', [CakeApiController::class, 'show']);
    });`,
				cprs: [
					{ id: 1, content: `Hiểu <b>Middleware là gì</b> và vì sao Laravel cần nó` },
					{ id: 2, content: `Biết vị trí Middleware trong <b>Request Lifecycle</b>` },
					{ id: 3, content: `Tự viết custom middleware — logic before + after` },
					{ id: 4, content: `Nắm 3 cách áp middleware (route / group / global)` },
					{ id: 5, content: `Dùng middleware với <b>params</b> và <b>alias</b>` },
					{ id: 6, content: `Tránh 6 pitfall phổ biến khi làm việc với middleware` },
					{ id: 7, content: `Áp dụng vào Cake Shop + hoàn thành 3 bài luyện tập` },
				],
				builtins: [
					{ id: 1, name: 'auth', desc: 'Chặn user chưa login — redirect về /login', example: "->middleware('auth')" },
					{ id: 2, name: 'auth:sanctum', desc: 'Chặn API request chưa có token Sanctum', example: "->middleware('auth:sanctum')" },
					{ id: 3, name: 'guest', desc: 'Ngược lại auth — chỉ khách (chưa login) mới vào được (VD trang /login)', example: "->middleware('guest')" },
					{ id: 4, name: 'verified', desc: 'User đã xác minh email mới cho qua', example: "->middleware(['auth', 'verified'])" },
					{ id: 5, name: 'throttle:60,1', desc: 'Rate limit: 60 request / 1 phút / IP', example: "->middleware('throttle:60,1')" },
					{ id: 6, name: 'can:action,model', desc: 'Kiểm tra Policy — user có quyền action lên model không', example: "->middleware('can:delete,cake')" },
					{ id: 7, name: 'signed', desc: 'Yêu cầu URL có chữ ký hợp lệ (tạo bằng URL::signedRoute)', example: "->middleware('signed')" },
					{ id: 8, name: 'password.confirm', desc: 'Yêu cầu user nhập lại password gần đây (bảo mật action nhạy cảm)', example: "->middleware('password.confirm')" },
				],
				pitfalls: [
					{
						id: 1,
						title: 'QUÊN return $next($request)',
						desc: 'Không có <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">return $next(...)</code> = pipeline chết, request treo hoặc 500. Đây là bug số 1 khi mới học.',
					},
					{
						id: 2,
						title: 'Thứ tự middleware quan trọng',
						desc: '<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">[throttle, auth]</code> = ai cũng bị throttle (kể cả bot chưa login). <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">[auth, throttle]</code> = throttle chỉ áp cho user đã login. Nghĩ kỹ trước khi chain.',
					},
					{
						id: 3,
						title: 'Đừng nhét business logic vào middleware',
						desc: 'Middleware chỉ nên <b>filter + transform</b>. Query DB phức tạp, gửi email, tạo order... để trong Controller/Service. Middleware chạy trên MỌI request qua route đó.',
					},
					{
						id: 4,
						title: 'Global middleware chạy cho MỌI URL',
						desc: 'Kể cả trang 404, static asset, healthcheck <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">/up</code>. Thêm DB query global = mọi request tốn 1 query. Cân nhắc kỹ trước khi <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">append()</code>.',
					},
					{
						id: 5,
						title: 'CSRF chỉ tự bảo vệ POST/PUT/PATCH/DELETE',
						desc: 'GET không cần CSRF token. Nếu form POST không có <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">@csrf</code> = <b>HTTP 419 Page Expired</b>. Khi làm API tách riêng (không dùng session), nên tách sang route group <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">routes/api.php</code> — group này auto exclude CSRF.',
					},
					{
						id: 6,
						title: 'Đừng modify response mà chưa check kiểu',
						desc: '<code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">$response->headers->set(...)</code> OK, nhưng <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">$response->getData()</code> chỉ có trên JsonResponse. Check <code class="inline-block whitespace-nowrap px-1 rounded bg-neutral-200 dark:bg-neutral-200 text-slate-900">instanceof</code> trước khi gọi method riêng của subclass.',
					},
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-22' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
