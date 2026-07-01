<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Composer & Autoload PSR-4" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Bài trước bạn đã tự tay viết hàm <FilePath>spl_autoload_register()</FilePath> để map namespace → đường dẫn
					file. Cách đó hoạt động tốt trong project nhỏ, nhưng khi cần dùng thêm thư viện bên thứ ba bạn lại phải tự lo
					việc load chúng. <b>Composer</b> ra đời để giải quyết đúng vấn đề này — và nó làm mọi thứ bạn vừa viết tay,
					chỉ cần một dòng cấu hình.
				</p>
				<p class="text-slate-900 dark:text-white my-3">Composer làm 2 việc chính cho project PHP:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Autoload theo PSR-4</b> — không cần <FilePath>require</FilePath> từng file, chỉ khai báo namespace
						một lần trong <FilePath>composer.json</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Quản lý thư viện bên thứ ba</b> — cài package từ <FilePath>packagist.org</FilePath> (giống npm của
						JavaScript) chỉ với 1 lệnh.
					</li>
				</ul>

				<PageHeading text="Nhắc lại bài trước" addOnClass="text-left" markedAs="recap" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Hàm autoload bạn đã viết tay:</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Cách này hoạt động tốt, nhưng có điểm bất tiện: nó chỉ biết về class của bạn. Nếu bạn muốn dùng thêm thư
					viện từ bên ngoài (gửi mail, kết nối database, logging...), bạn phải tự tay download và load chúng — không
					có cơ chế nào quản lý phiên bản hay dependency. Đó là lúc <b>Composer</b> xuất hiện.
				</p>

				<PageHeading text="Cài đặt Composer" addOnClass="text-left" markedAs="install" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Composer viết bằng chính PHP nên chạy được ở bất kỳ đâu có PHP. Trên <b>Windows</b>, tải
					<FilePath>Composer-Setup.exe</FilePath> từ <FilePath>getcomposer.org/download</FilePath> và chạy — installer
					tự thêm Composer vào PATH. Trên <b>macOS/Linux</b>, chạy khối lệnh có sẵn ở cùng trang tải. Sau khi cài,
					kiểm tra:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="bash" theme="atom-one-dark" />

				<PageHeading text="composer.json và PSR-4" addOnClass="text-left" markedAs="composer-json" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Trong thư mục project, chạy lệnh sau để tạo file cấu hình:</p>
				<VCodeBlock :code="b3" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Sau đó chỉnh sửa (hoặc tạo trực tiếp) file <FilePath>composer.json</FilePath> để khai báo namespace theo
					chuẩn <b>PSR-4</b>:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="json" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Dòng <FilePath>"App\\": "App/"</FilePath> có nghĩa: mọi class bắt đầu bằng namespace
					<FilePath>App\</FilePath> sẽ được tìm trong thư mục <FilePath>App/</FilePath>. Đây chính xác là quy ước bạn
					đã tự implement trong bài trước — Composer chỉ làm đúng cái bạn vừa viết tay.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					Sau khi cập nhật <FilePath>composer.json</FilePath>, chạy lệnh này để Composer sinh ra autoloader:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="bash" theme="atom-one-dark" />

				<PageHeading text="Refactor sang Composer" addOnClass="text-left" markedAs="refactor" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Cấu trúc project sau khi dùng Composer:</p>
				<VCodeBlock :code="b6" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					File <FilePath>App/Service/Mailer.php</FilePath> giữ nguyên như bài trước. Chỉ cần thay đổi
					<FilePath>index.php</FilePath>:
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Kết quả y hệt bài trước, nhưng bây giờ Composer tự quản lý toàn bộ autoloading — cả class của bạn lẫn các
					thư viện bên thứ ba.
				</p>

				<PageHeading text="Cài thư viện: ví dụ với Monolog" addOnClass="text-left" markedAs="install-package" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Ecosystem PHP có sẵn hàng chục nghìn package trên <FilePath>packagist.org</FilePath>. Cài chỉ với 1 lệnh —
					thử với <b>Monolog</b> (thư viện ghi log phổ biến nhất của PHP):
				</p>
				<VCodeBlock :code="b11" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Composer tự thêm entry vào <FilePath>composer.json</FilePath>, download source về
					<FilePath>vendor/monolog/monolog</FilePath>, và cập nhật autoloader. Dùng luôn ở
					<FilePath>index.php</FilePath> — <b>không cần require một file nào của thư viện</b>:
				</p>
				<VCodeBlock :code="b16" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Muốn gỡ package: <FilePath>composer remove monolog/monolog</FilePath>. Khi clone project của người khác về:
					chạy <FilePath>composer install</FilePath> — Composer tự cài đúng các package đã ghi trong
					<FilePath>composer.lock</FilePath>.
				</p>

				<PageHeading text="vendor/, composer.lock và .gitignore" addOnClass="text-left" markedAs="vendor-lock" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Sau khi chạy <FilePath>composer dump-autoload</FilePath> hoặc <FilePath>composer install</FilePath>, Composer
					tạo ra thư mục <FilePath>vendor/</FilePath> chứa autoloader và tất cả thư viện bên thứ ba.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3">
					<div class="col-span-1 p-3 rounded-lg border border-neutral-200 dark:border-gray-600">
						<p class="text-slate-900 dark:text-white font-semibold mb-2">composer.lock</p>
						<p class="text-slate-900 dark:text-white text-sm">
							Ghi lại phiên bản chính xác của từng package. <b>Commit file này vào git</b> để đảm bảo mọi người trong
							team dùng đúng cùng một phiên bản.
						</p>
					</div>
					<div class="col-span-1 p-3 rounded-lg border border-neutral-200 dark:border-gray-600">
						<p class="text-slate-900 dark:text-white font-semibold mb-2">vendor/</p>
						<p class="text-slate-900 dark:text-white text-sm">
							Chứa code của tất cả thư viện — nặng và không cần commit vào git. Thêm vào
							<FilePath>.gitignore</FilePath>:
						</p>
					</div>
				</div>
				<VCodeBlock :code="b8" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi clone project về, chỉ cần chạy <FilePath>composer install</FilePath> — Composer tự đọc
					<FilePath>composer.lock</FilePath> và cài đúng phiên bản.
				</p>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Tóm tắt</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>
							<FilePath>composer.json</FilePath> → khai báo namespace PSR-4 và dependencies.
						</li>
						<li>
							<FilePath>composer require vendor/pkg</FilePath> → cài package + tự cập nhật autoloader.
						</li>
						<li>
							<FilePath>composer dump-autoload</FilePath> → tái sinh <FilePath>vendor/autoload.php</FilePath> khi
							thêm file/namespace mới.
						</li>
						<li>
							Chỉ cần <FilePath>require_once 'vendor/autoload.php'</FilePath> một lần — tất cả class và package đều
							được load tự động.
						</li>
						<li>
							Commit <FilePath>composer.json</FilePath> và <FilePath>composer.lock</FilePath>, <b>không</b> commit
							<FilePath>vendor/</FilePath>.
						</li>
					</ul>
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
				pagePagination: null,
				b1: `<?php
// autoload.php — viết tay ở bài trước
spl_autoload_register(function (string $class): void {
    $file = __DIR__ . '/' . str_replace('\\\\', '/', $class) . '.php';
    if (file_exists($file)) {
        require_once $file;
    }
});
// Chỉ biết về class của bạn, không biết về thư viện bên thứ ba`,
				b2: `composer --version
# Composer version 2.x.x`,
				b3: `cd my-project
composer init
# Trả lời các câu hỏi (có thể Enter để bỏ qua)
# File composer.json được tạo ra`,
				b4: `{
    "name": "tuan/my-project",
    "autoload": {
        "psr-4": {
            "App\\\\": "App/"
        }
    },
    "require": {}
}`,
				b5: `composer dump-autoload
# Generating autoload files
# Generated autoload files`,
				b6: `my-project/
├── App/
│   └── Service/
│       └── Mailer.php
├── vendor/
│   └── autoload.php   ← Composer tạo ra
├── composer.json
├── composer.lock
└── index.php`,
				b7: `<?php
// index.php
// TRƯỚC: require_once __DIR__ . '/autoload.php';  ← file bạn tự viết
// SAU: dùng autoloader do Composer sinh ra
require_once __DIR__ . '/vendor/autoload.php';

use App\\Service\\Mailer;

$mailer = new Mailer();
$mailer->send('tuan@example.com');
// Output: Gửi mail đến: tuan@example.com`,
				b8: `/vendor/`,
				b11: `composer require monolog/monolog
# Using version ^3.7 for monolog/monolog
# ./composer.json has been updated
# Package operations: 3 installs, 0 updates, 0 removals`,
				b16: `<?php
require_once __DIR__ . '/vendor/autoload.php';

use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;
use Monolog\\Level;

$log = new Logger('app');
$log->pushHandler(new StreamHandler(__DIR__ . '/app.log', Level::Debug));

$log->info('User đăng nhập', ['user_id' => 42]);
$log->warning('Session sắp hết hạn');
$log->error('Kết nối DB thất bại');
// → File app.log có 3 dòng JSON tương ứng`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-8' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
