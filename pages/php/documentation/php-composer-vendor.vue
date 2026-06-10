<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Composer - Vendor phổ biến" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Bài trước bạn đã dùng Composer để autoload class của chính mình. Ở bài này, chúng ta dùng Composer cho mục
					đích cốt lõi hơn: <b>cài và tích hợp thư viện của cộng đồng</b>. Đây chính là lý do Composer được tạo ra —
					không ai viết lại từ đầu những thứ đã có sẵn và được kiểm chứng kỹ.
				</p>

				<PageHeading text="Workflow: composer require" addOnClass="text-left" markedAs="workflow" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Một lệnh duy nhất để thêm thư viện — Composer tự tìm trên packagist.org, tải về, và cập nhật
					<FilePath>composer.json</FilePath>:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Sự khác biệt giữa <b>dependency</b> và <b>dev-dependency</b>: dependency cần thiết khi chạy trên production
					(ví dụ: thư viện gửi mail), còn dev-dependency chỉ dùng khi lập trình (test, debug). Khi deploy, chạy
					<FilePath>composer install --no-dev</FilePath> để bỏ qua dev-dependencies, giảm dung lượng server.
				</p>

				<PageHeading text="phpunit/phpunit — Unit Test" addOnClass="text-left" markedAs="phpunit" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					PHPUnit là framework test tiêu chuẩn của PHP. Đây là dev-dependency vì bạn chỉ chạy test trong môi trường
					phát triển, không cần lên production.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Viết một test case đơn giản trong thư mục <FilePath>tests/</FilePath>:</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Chạy toàn bộ test:</p>
				<VCodeBlock :code="b4" highlightjs lang="bash" theme="atom-one-dark" />

				<PageHeading text="symfony/var-dumper — Debug nhanh" addOnClass="text-left" markedAs="var-dumper" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>var_dump()</FilePath> của PHP thuần rất khó đọc. <b>symfony/var-dumper</b> thay thế bằng
					<FilePath>dump()</FilePath> và <FilePath>dd()</FilePath> với output được format rõ ràng và có màu sắc — đặc
					biệt hữu ích khi debug array lồng nhiều cấp.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="bash" theme="atom-one-dark" />
				<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="monolog/monolog — Logging" addOnClass="text-left" markedAs="monolog" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Monolog là thư viện logging phổ biến nhất trong hệ sinh thái PHP, tuân theo chuẩn <b>PSR-3</b>. Nó hỗ trợ
					ghi log ra file, database, Slack, email... và có phân cấp mức độ (debug → info → warning → error → critical).
					Laravel dùng chính Monolog bên dưới.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="bash" theme="atom-one-dark" />
				<VCodeBlock :code="b8" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="vlucas/phpdotenv — Biến môi trường" addOnClass="text-left" markedAs="phpdotenv" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Đừng hardcode thông tin nhạy cảm (mật khẩu DB, API key) trực tiếp trong code — nếu lỡ commit lên git là lộ
					hết. Thay vào đó, lưu vào file <FilePath>.env</FilePath> ở thư mục gốc và đọc qua <b>phpdotenv</b>.
				</p>
				<VCodeBlock :code="b9" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Tạo file <FilePath>.env</FilePath> (và thêm <FilePath>.env</FilePath> vào <FilePath>.gitignore</FilePath>):
				</p>
				<VCodeBlock :code="b10" highlightjs lang="bash" theme="atom-one-dark" />
				<VCodeBlock :code="b11" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Bức tranh toàn cảnh" addOnClass="text-left" markedAs="summary" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Sau khi cài cả 4 package, <FilePath>composer.json</FilePath> của bạn trông như thế này:
				</p>
				<VCodeBlock :code="b12" highlightjs lang="json" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi bắt đầu học Laravel ở bài tiếp theo, bạn sẽ nhận ra Laravel cũng build trên nền tảng này: PHPUnit cho
					test, Monolog cho logging, phpdotenv cho cấu hình môi trường. Composer không phải thứ xa lạ với Laravel —
					Laravel chỉ là một package cực lớn được cài qua chính Composer.
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
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				pagePagination: null,
				b1: `# Thêm production dependency
composer require tên-vendor/tên-package

# Thêm dev-only dependency (test, debug tool)
composer require --dev tên-vendor/tên-package`,
				b2: `composer require --dev phpunit/phpunit`,
				b3: `<?php
// tests/MathTest.php
use PHPUnit\\Framework\\TestCase;

class MathTest extends TestCase
{
    public function test_sum(): void
    {
        $this->assertEquals(5, 2 + 3);
    }

    public function test_string_upper(): void
    {
        $this->assertSame('HELLO', strtoupper('hello'));
    }
}`,
				b4: `./vendor/bin/phpunit tests/
# OK (2 tests, 2 assertions)`,
				b5: `composer require --dev symfony/var-dumper`,
				b6: `<?php
require_once __DIR__ . '/vendor/autoload.php';

$user = ['name' => 'Tuấn', 'age' => 28, 'roles' => ['admin', 'editor']];

dump($user);  // in ra rõ ràng, script tiếp tục chạy
dd($user);    // dump rồi die() — dừng script tại đây`,
				b7: `composer require monolog/monolog`,
				b8: `<?php
require_once __DIR__ . '/vendor/autoload.php';

use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;

$log = new Logger('app');
$log->pushHandler(new StreamHandler('app.log', Logger::DEBUG));

// Các mức log theo chuẩn PSR-3
$log->info('User đăng nhập', ['user_id' => 42]);
$log->warning('Thử lại kết nối DB lần 2');
$log->error('Không thể kết nối DB', ['host' => 'localhost']);`,
				b9: `composer require vlucas/phpdotenv`,
				b10: `DB_HOST=localhost
DB_NAME=my_database
DB_USER=root
DB_PASS=secret
APP_DEBUG=true`,
				b11: `<?php
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['DB_HOST'];  // localhost
$name = $_ENV['DB_NAME'];  // my_database
echo "Kết nối tới: {$host}/{$name}";`,
				b12: `{
    "autoload": {
        "psr-4": {
            "App\\\\": "App/"
        }
    },
    "require": {
        "monolog/monolog": "^3.0",
        "vlucas/phpdotenv": "^5.6"
    },
    "require-dev": {
        "phpunit/phpunit": "^11.0",
        "symfony/var-dumper": "^7.0"
    }
}`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-9' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
