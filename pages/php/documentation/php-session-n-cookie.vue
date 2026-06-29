<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Giới thiệu" addOnClass="text-left" markedAs="php-sc-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					HTTP là giao thức <b>stateless</b> — mỗi request từ trình duyệt là độc lập, server không tự nhớ
					bạn là ai sau khi request kết thúc. Điều này đặt ra bài toán: làm sao lưu trạng thái đăng nhập,
					giỏ hàng, hay sở thích của người dùng qua nhiều trang?
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8">PHP cung cấp hai cơ chế chính để giải quyết vấn đề này:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Session</b> — lưu dữ liệu trên <b>server</b>. Trình duyệt chỉ giữ một Session ID nhỏ (qua cookie),
						mỗi request gửi ID đó lên để server tra cứu đúng session.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Cookie</b> — lưu dữ liệu trực tiếp trên <b>trình duyệt</b>. Có thể tồn tại qua nhiều lần đóng/mở
						trình duyệt nếu được đặt thời hạn.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Các ví dụ bên dưới viết theo cú pháp <b>PHP 8.x</b> — dùng options array cho <FilePath>setcookie()</FilePath>
					và <FilePath>session_start()</FilePath>, thuộc tính <FilePath>SameSite</FilePath> chống CSRF, và các API hash
					mật khẩu hiện đại (<FilePath>password_hash</FilePath> / <FilePath>password_verify</FilePath>).
				</p>

				<!-- SESSION -->
				<div class="py-6"></div>
				<PageHeading text="Session" addOnClass="text-left" markedAs="php-sc-session" />
				<div class="py-2"></div>
				<PageHeading text="Cách sử dụng" addOnClass="text-left" markedAs="php-sc-session-usage" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trước khi đọc hoặc ghi session, bắt buộc phải gọi
					<FilePath>session_start()</FilePath>
					ở đầu file — <b>trước mọi output HTML</b> (kể cả khoảng trắng). PHP sẽ tạo mới hoặc tiếp tục
					session đang tồn tại. Từ PHP 7+ (và là chuẩn trong PHP 8.x), hàm này nhận thêm <b>options array</b>
					để cấu hình bảo mật cho session cookie ngay tại chỗ — thay vì phải chỉnh <FilePath>php.ini</FilePath>.
				</p>
				<VCodeBlock :code="sessionBasic" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-4"></div>
				<PageHeading text="Demo 1: Visit counter" addOnClass="text-left" markedAs="php-sc-demo1" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ví dụ đơn giản nhất không cần DB: đếm số lần người dùng truy cập trang trong cùng một phiên làm việc.
					Reload trang → số tăng. Đóng trình duyệt → session mất, đếm lại từ đầu.
				</p>
				<VCodeBlock :code="visitCounter" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-4"></div>
				<PageHeading text="Demo 2: Login đơn giản (không cần DB)" addOnClass="text-left" markedAs="php-sc-demo2" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Demo kết nối thẳng với bài Form handling. Chúng ta tạo 3 file:
					<FilePath>login.php</FilePath>,
					<FilePath>dashboard.php</FilePath>,
					<FilePath>logout.php</FilePath>.
					Thông tin đăng nhập được hardcode — bài PHP Database sau sẽ thay bằng truy vấn DB thật.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8 font-semibold">login.php — xử lý form và lưu session:</p>
				<VCodeBlock :code="loginPhp" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-3 leading-8 font-semibold">
					dashboard.php — trang bảo vệ, chỉ người đã đăng nhập mới vào được:
				</p>
				<VCodeBlock :code="dashboardPhp" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-3 leading-8 font-semibold">logout.php — hủy session và chuyển hướng:</p>
				<VCodeBlock :code="logoutPhp" highlightjs lang="php" theme="tomorrow-night-bright" />

				<!-- COOKIE -->
				<div class="py-6"></div>
				<PageHeading text="Cookie" addOnClass="text-left" markedAs="php-sc-cookie" />
				<div class="py-2"></div>
				<PageHeading text="Cách sử dụng" addOnClass="text-left" markedAs="php-sc-cookie-usage" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Cookie được tạo bằng hàm <FilePath>setcookie()</FilePath>. Tương tự session, cookie phải được set
					<b>trước mọi output HTML</b>. Từ PHP 7.3 (chuẩn cho PHP 8.x), <FilePath>setcookie()</FilePath> hỗ trợ
					truyền <b>options array</b> ở tham số thứ 3 — code dễ đọc hơn và là cách <b>duy nhất</b> để khai báo
					thuộc tính <FilePath>SameSite</FilePath>.
				</p>
				<VCodeBlock :code="cookieBasic" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-2"></div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Các tham số của <b>setcookie()</b>:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tham số</th>
								<th scope="col" class="px-5 py-3">Kiểu</th>
								<th scope="col" class="px-5 py-3">Mô tả</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="param in cookieParams"
								:key="param.name"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									{{ param.name }}
								</th>
								<td class="px-5 py-4 text-sky-500 font-mono">{{ param.type }}</td>
								<td class="px-5 py-4">{{ param.desc }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="py-4"></div>
				<PageHeading text="Demo: Ghi nhớ tên người dùng" addOnClass="text-left" markedAs="php-sc-cookie-demo" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Cookie tồn tại ngay cả sau khi đóng trình duyệt (khác session). Demo dưới đây ghi nhớ tên 30 ngày.
				</p>
				<VCodeBlock :code="cookieDemo" highlightjs lang="php" theme="tomorrow-night-bright" />

				<!-- BEST PRACTICES PHP 8.x -->
				<div class="py-6"></div>
				<PageHeading text="Best practices bảo mật (PHP 8.x)" addOnClass="text-left" markedAs="php-sc-best-practices" :lvl="2" />
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Luôn cấu hình <FilePath>session_start()</FilePath> bằng options array — đừng dựa hoàn toàn vào
						<FilePath>php.ini</FilePath> vì mỗi host có default khác nhau.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Gọi <FilePath>session_regenerate_id(true)</FilePath> ngay sau khi đăng nhập, đổi mật khẩu, hoặc
						nâng quyền — chống <b>session fixation</b>.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>Không bao giờ</b> so sánh mật khẩu bằng <FilePath>===</FilePath>. Dùng cặp
						<FilePath>password_hash()</FilePath> / <FilePath>password_verify()</FilePath> — chống timing attack
						và tự động chọn thuật toán mạnh nhất (mặc định là bcrypt).
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Mọi cookie nhạy cảm cần đủ 3 cờ: <FilePath>secure</FilePath>, <FilePath>httponly</FilePath>,
						<FilePath>samesite</FilePath>. Production HTTPS bắt buộc bật <FilePath>secure</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Luôn <FilePath>htmlspecialchars()</FilePath> dữ liệu cookie / session khi đổ ra HTML — chống XSS.
						Không bao giờ tin cookie là "an toàn" chỉ vì server đã set nó.
					</li>
					<li class="text-slate-900 dark:text-white my-3 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						Khi xóa cookie phải truyền <b>cùng</b> <FilePath>path</FilePath> (và <FilePath>domain</FilePath> nếu có)
						với lúc tạo — nếu sai, trình duyệt sẽ giữ nguyên cookie cũ.
					</li>
				</ul>

				<!-- SO SÁNH -->
				<div class="py-6"></div>
				<PageHeading text="Session vs Cookie" addOnClass="text-left" markedAs="php-sc-compare" :lvl="2" />
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tiêu chí</th>
								<th scope="col" class="px-5 py-3">Session</th>
								<th scope="col" class="px-5 py-3">Cookie</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="row in compareTable"
								:key="row.criteria"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									{{ row.criteria }}
								</th>
								<td class="px-5 py-4">{{ row.session }}</td>
								<td class="px-5 py-4">{{ row.cookie }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Khi nào dùng cái gì?</b> Dùng <b>session</b> cho dữ liệu nhạy cảm (thông tin đăng nhập, giỏ hàng).
					Dùng <b>cookie</b> cho sở thích không nhạy cảm cần tồn tại lâu dài (ngôn ngữ, theme, ghi nhớ tên).
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
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			DocNextPage,
			VCodeBlock,
		},
		data() {
			return {
				pagePagination: null,
				cookieParams: [
					{ name: 'name', type: 'string', desc: 'Tên cookie' },
					{ name: 'value', type: 'string', desc: 'Giá trị lưu trong cookie' },
					{
						name: 'expires',
						type: 'int',
						desc: 'Thời điểm hết hạn (Unix timestamp). Dùng time() + số_giây. Mặc định 0 = hết khi đóng trình duyệt',
					},
					{ name: 'path', type: 'string', desc: "Đường dẫn có hiệu lực. '/' = toàn bộ domain" },
					{ name: 'domain', type: 'string', desc: "Domain có hiệu lực. '' = domain hiện tại" },
					{ name: 'secure', type: 'bool', desc: 'Chỉ gửi qua HTTPS' },
					{ name: 'httponly', type: 'bool', desc: 'Cookie không đọc được bằng JavaScript — bảo mật hơn' },
					{
						name: 'samesite',
						type: "'Lax' | 'Strict' | 'None'",
						desc: "Chống CSRF. 'Lax' (mặc định khuyên dùng), 'Strict' chặt nhất, 'None' bắt buộc đi kèm secure=true. Chỉ khai báo được qua options array (PHP 7.3+)",
					},
				],
				compareTable: [
					{ criteria: 'Nơi lưu', session: 'Server', cookie: 'Trình duyệt' },
					{ criteria: 'Dung lượng', session: 'Giới hạn bởi server', cookie: '~4 KB / cookie' },
					{ criteria: 'Thời gian tồn tại', session: 'Cho đến khi đóng trình duyệt (mặc định)', cookie: 'Tùy expires, có thể nhiều năm' },
					{ criteria: 'Bảo mật', session: 'Cao hơn (dữ liệu ở server)', cookie: 'Thấp hơn (dữ liệu ở client, dễ đọc/giả mạo)' },
					{ criteria: 'Truy cập từ JS', session: 'Không', cookie: 'Được (trừ khi httponly=true)' },
					{ criteria: 'Use case phổ biến', session: 'Đăng nhập, giỏ hàng, flash message', cookie: 'Ghi nhớ ngôn ngữ, theme, "nhớ tôi"' },
				],
				sessionBasic: `<?php
// PHP 8.x — session_start() nhận options array (chuẩn hiện đại)
session_start([
    'cookie_lifetime' => 0,        // 0 = hết khi đóng trình duyệt
    'cookie_httponly' => true,     // JS không đọc được session cookie
    'cookie_secure'   => true,     // chỉ gửi qua HTTPS (bật khi deploy production)
    'cookie_samesite' => 'Lax',    // 'Lax' | 'Strict' | 'None' — chống CSRF
    'use_strict_mode' => true,     // chỉ chấp nhận session ID do server cấp → chống session fixation
]);

// --- Ghi ---
$_SESSION['username'] = 'NguyenVanA';
$_SESSION['role']     = 'admin';

// --- Đọc với null coalescing operator ---
echo $_SESSION['username'] ?? 'Khách'; // NguyenVanA

// --- Xóa một key ---
unset($_SESSION['role']);

// --- Hủy toàn bộ session (dùng khi logout) ---
session_unset();   // Xóa tất cả biến $_SESSION
session_destroy(); // Hủy file session trên server
?>`,
				visitCounter: `<?php
session_start();

// Null coalescing assignment ??= (PHP 7.4+) — gán nếu key chưa tồn tại / null
$_SESSION['visit_count'] ??= 0;
$_SESSION['visit_count']++;

// String interpolation với cú pháp {$var}
echo "Bạn đã truy cập trang này {$_SESSION['visit_count']} lần.";
// → Reload trang: số tăng dần
// → Đóng trình duyệt: session mất, đếm lại từ 1
?>`,
				loginPhp: `<?php
// login.php
session_start([
    'cookie_httponly' => true,
    'cookie_samesite' => 'Lax',
    'use_strict_mode' => true,
]);

// Đã đăng nhập → vào thẳng dashboard
if (isset($_SESSION['user'])) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

// "Database" giả lập — bài PHP Database sẽ thay bằng truy vấn DB thật.
// Hash bên dưới được tạo từ: password_hash('123456', PASSWORD_DEFAULT)
$users = [
    'admin' => [
        'name'          => 'Admin',
        'password_hash' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    ],
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? ''; // KHÔNG trim password — khoảng trắng có thể là 1 phần mật khẩu

    $userRow = $users[$username] ?? null;

    // password_verify() so sánh hash an toàn (chống timing attack)
    if ($userRow !== null && password_verify($password, $userRow['password_hash'])) {
        // 🔒 Đổi session ID sau khi xác thực — chống session fixation
        session_regenerate_id(true);
        $_SESSION['user'] = ['name' => $userRow['name'], 'username' => $username];
        header('Location: dashboard.php');
        exit;
    }

    $error = 'Tên đăng nhập hoặc mật khẩu không đúng.';
}
?>
<!DOCTYPE html>
<html lang="vi">
<body>
    <h2>Đăng nhập</h2>
    <?php if ($error): ?>
        <p style="color: red;"><?php echo htmlspecialchars($error); ?></p>
    <?php endif; ?>
    <form method="POST">
        <input type="text" name="username" placeholder="Tên đăng nhập" required>
        <input type="password" name="password" placeholder="Mật khẩu" required>
        <button type="submit">Đăng nhập</button>
    </form>
</body>
</html>`,
				dashboardPhp: `<?php
// dashboard.php
session_start();

// Chưa đăng nhập → đá về login
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    exit;
}

$user = $_SESSION['user'];
?>
<!DOCTYPE html>
<html lang="vi">
<body>
    <h2>Xin chào, <?php echo htmlspecialchars($user['name']); ?>!</h2>
    <p>Tài khoản: <?php echo htmlspecialchars($user['username']); ?></p>
    <a href="logout.php">Đăng xuất</a>
</body>
</html>`,
				logoutPhp: `<?php
// logout.php
session_start();
session_unset();
session_destroy();
header('Location: login.php');
exit;
?>`,
				cookieBasic: `<?php
// ⚠️ setcookie() phải gọi TRƯỚC mọi output HTML
// PHP 7.3+ : truyền options dạng mảng (khuyến nghị cho PHP 8.x)

setcookie('username', 'NguyenVanA', [
    'expires'  => time() + 7 * 24 * 3600, // Hết hạn sau 7 ngày
    'path'     => '/',                    // Hiệu lực toàn bộ domain
    'domain'   => '',                     // '' = domain hiện tại
    'secure'   => true,                   // Chỉ gửi qua HTTPS
    'httponly' => true,                   // JS không đọc được
    'samesite' => 'Lax',                  // 'Lax' | 'Strict' | 'None' — chống CSRF
]);

// --- Đọc cookie ---
if (isset($_COOKIE['username'])) {
    echo "Xin chào, " . htmlspecialchars($_COOKIE['username']);
}

// --- Xóa cookie: đặt expires về quá khứ (giữ nguyên path/domain với cookie gốc) ---
setcookie('username', '', [
    'expires' => time() - 3600,
    'path'    => '/',
]);
?>`,
				cookieDemo: `<?php
// remember-me.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    if ($name !== '') {
        // Ghi nhớ 30 ngày, kể cả sau khi đóng trình duyệt
        setcookie('remembered_name', $name, [
            'expires'  => time() + 30 * 24 * 3600,
            'path'     => '/',
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        header('Location: remember-me.php');
        exit;
    }
    // Xóa cookie khi name rỗng
    setcookie('remembered_name', '', [
        'expires' => time() - 3600,
        'path'    => '/',
    ]);
    header('Location: remember-me.php');
    exit;
}

$savedName = $_COOKIE['remembered_name'] ?? '';
?>
<!DOCTYPE html>
<html lang="vi">
<body>
    <?php if ($savedName): ?>
        <p>Chào mừng trở lại, <b><?php echo htmlspecialchars($savedName); ?></b>!</p>
        <form method="POST">
            <input type="hidden" name="name" value="">
            <button type="submit">Xóa ghi nhớ</button>
        </form>
    <?php else: ?>
        <form method="POST">
            <input type="text" name="name" placeholder="Tên của bạn">
            <button type="submit">Ghi nhớ tên (30 ngày)</button>
        </form>
    <?php endif; ?>
</body>
</html>`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'php', currentDocId: 'php-12.5' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || null;
					});
			},
		},
	};
</script>
