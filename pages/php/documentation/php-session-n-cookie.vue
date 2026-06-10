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

				<!-- SESSION -->
				<div class="py-6"></div>
				<PageHeading text="Session" addOnClass="text-left" markedAs="php-sc-session" />
				<div class="py-2"></div>
				<PageHeading text="Cách sử dụng" addOnClass="text-left" markedAs="php-sc-session-usage" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trước khi đọc hoặc ghi session, bắt buộc phải gọi
					<FilePath>session_start()</FilePath>
					ở đầu file — <b>trước mọi output HTML</b> (kể cả khoảng trắng). PHP sẽ tạo mới hoặc tiếp tục
					session đang tồn tại.
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
					<b>trước mọi output HTML</b>.
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
session_start(); // Bắt buộc gọi TRƯỚC mọi output HTML

// --- Ghi ---
$_SESSION['username'] = 'NguyenVanA';
$_SESSION['role']     = 'admin';

// --- Đọc ---
echo $_SESSION['username']; // NguyenVanA

// --- Xóa một key ---
unset($_SESSION['role']);

// --- Hủy toàn bộ session (dùng khi logout) ---
session_unset();   // Xóa tất cả biến $_SESSION
session_destroy(); // Hủy file session trên server
?>`,
				visitCounter: `<?php
session_start();

if (!isset($_SESSION['visit_count'])) {
    $_SESSION['visit_count'] = 0;
}
$_SESSION['visit_count']++;

echo "Bạn đã truy cập trang này " . $_SESSION['visit_count'] . " lần.";
// → Reload trang: số tăng dần
// → Đóng trình duyệt: session mất, đếm lại từ 1
?>`,
				loginPhp: `<?php
// login.php
session_start();

// Đã đăng nhập → vào thẳng dashboard
if (isset($_SESSION['user'])) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Hardcode để demo — bài PHP Database sẽ thay bằng truy vấn DB thật
    if ($username === 'admin' && $password === '123456') {
        $_SESSION['user'] = ['name' => 'Admin', 'username' => $username];
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

// --- Tạo cookie tồn tại 7 ngày ---
setcookie(
    'username',              // Tên
    'NguyenVanA',           // Giá trị
    time() + 7 * 24 * 3600, // Hết hạn sau 7 ngày
    '/',                     // Có hiệu lực toàn bộ domain
    '',                      // Domain ('' = domain hiện tại)
    false,                   // Secure (true = chỉ HTTPS)
    true                     // HttpOnly (true = JS không đọc được)
);

// --- Đọc cookie ---
if (isset($_COOKIE['username'])) {
    echo "Xin chào, " . htmlspecialchars($_COOKIE['username']);
}

// --- Xóa cookie: đặt expires về quá khứ ---
setcookie('username', '', time() - 3600, '/');
?>`,
				cookieDemo: `<?php
// remember-me.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    if ($name) {
        // Ghi nhớ 30 ngày, kể cả sau khi đóng trình duyệt
        setcookie('remembered_name', $name, time() + 30 * 24 * 3600, '/');
        header('Location: remember-me.php');
        exit;
    }
    // Xóa cookie khi name rỗng
    setcookie('remembered_name', '', time() - 3600, '/');
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
