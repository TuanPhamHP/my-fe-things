<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Namespace & Autoload" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Khi project có hàng chục class, việc <FilePath>require_once</FilePath> từng file một rất dễ nhầm đường dẫn và
					cực kỳ tẻ nhạt. <b>Namespace</b> giúp tổ chức code theo nhóm, còn <b>Autoload</b> giúp PHP tự tìm và nạp file
					đúng class mà không cần require thủ công.
				</p>

				<PageHeading text="Namespace" addOnClass="text-left" markedAs="namespace" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Namespace giống như <b>thư mục cho code</b> — giúp nhóm các class liên quan lại và tránh xung đột tên. Ví dụ
					bạn có hai class đều tên <FilePath>Mailer</FilePath>, một cho email, một cho SMS — namespace sẽ phân biệt
					chúng.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					Khai báo namespace ở <b>dòng đầu tiên</b> của file, dùng <FilePath>use</FilePath> để import class từ namespace
					khác:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					Quy ước: namespace nên <b>khớp với cấu trúc thư mục</b>. File <FilePath>App/Service/Mailer.php</FilePath> khai
					báo namespace <FilePath>App\Service</FilePath>.
				</p>

				<PageHeading text="Autoload" addOnClass="text-left" markedAs="autoload" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi bạn viết <FilePath>use App\Service\Mailer</FilePath>, PHP cần biết file đó nằm ở đâu. Đây là lúc
					<b>autoloader</b> phát huy tác dụng — nó map namespace thành đường dẫn file và tự động
					<FilePath>require</FilePath> khi cần.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					Đăng ký autoloader bằng hàm built-in <FilePath>spl_autoload_register()</FilePath>:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Cơ chế hoạt động: khi PHP gặp một class chưa được load, nó gọi hàm autoloader và truyền vào tên class đầy đủ
					(bao gồm namespace). Autoloader chuyển dấu <FilePath>\</FilePath> thành <FilePath>/</FilePath> để tạo đường
					dẫn file, rồi <FilePath>require_once</FilePath> file đó.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					Ví dụ: <FilePath>App\Service\Mailer</FilePath> → <FilePath>App/Service/Mailer.php</FilePath>
				</p>

				<PageHeading text="Ví dụ hoàn chỉnh" addOnClass="text-left" markedAs="full-example" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Cấu trúc project:</p>
				<VCodeBlock :code="b4" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Tạo class <FilePath>Mailer</FilePath> với namespace:</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Trong <FilePath>index.php</FilePath>, chỉ cần require autoloader một lần duy nhất — tất cả class sẽ được load
					tự động:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Câu hỏi hay gặp" addOnClass="text-left my-3" markedAs="faq" :lvl="1" />

				<PageHeading
					text="Q1: Bỏ qua autoload.php ở index.php thì không được dùng use à?"
					addOnClass="text-left my-3"
					markedAs="faq-q1"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3"><b>Không phải vậy.</b> Cần tách 2 khái niệm:</p>
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>use</FilePath> chỉ là <b>bí danh (alias) tên class</b> — nó KHÔNG load file.
					<FilePath>use App\Service\Mailer;</FilePath> chỉ nói với PHP: "khi tôi viết <FilePath>Mailer</FilePath> thì
					hiểu là <FilePath>App\Service\Mailer</FilePath>". Cú pháp này luôn hợp lệ, dù có autoload hay không.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					Việc <b>load file class</b> là chuyện khác. PHP cần biết class <FilePath>App\Service\Mailer</FilePath>
					nằm ở file nào. Có 3 cách:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Autoload</b> (như <FilePath>autoload.php</FilePath> ở ví dụ trên) — tự động tìm file khi class được gọi.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>require</FilePath> / <FilePath>include</FilePath> thủ công — bạn tự nạp file.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Composer autoload</b> (<FilePath>vendor/autoload.php</FilePath>) — chuẩn PSR-4, bài sau sẽ học.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					Nếu bỏ <FilePath>autoload.php</FilePath>, bạn vẫn dùng được <FilePath>use</FilePath>, nhưng phải tự
					<FilePath>require</FilePath> file class trước khi <FilePath>new</FilePath>:
				</p>
				<VCodeBlock :code="faqA1" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading
					text="Q2: Đã require_once file class rồi thì cần gì use nữa?"
					addOnClass="text-left my-3"
					markedAs="faq-q2"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					Câu hỏi rất hay — đây là chỗ nhiều người nhầm lẫn. <FilePath>require</FilePath> và
					<FilePath>use</FilePath> giải quyết <b>2 vấn đề khác nhau</b>:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>require</FilePath> = <b>nạp file</b> để PHP biết class tồn tại trong bộ nhớ.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>use</FilePath> = <b>rút gọn tên class có namespace</b> để bạn khỏi viết dài.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">
					Class <FilePath>Mailer</FilePath> ở ví dụ trên nằm trong namespace <FilePath>App\Service</FilePath>, nên
					<b>tên đầy đủ</b> (Fully Qualified Class Name — FQCN) là <FilePath>App\Service\Mailer</FilePath>. Sau khi
					<FilePath>require</FilePath>, class đã có trong bộ nhớ, nhưng bạn vẫn phải gọi bằng tên đầy đủ.
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Không dùng <FilePath>use</FilePath></b> — vẫn chạy được, nhưng phải viết đầy đủ:
				</p>
				<VCodeBlock :code="faqA2a" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Dùng <FilePath>use</FilePath></b> — gọn hơn nhiều, nhất là khi class được gọi nhiều chỗ trong file:
				</p>
				<VCodeBlock :code="faqA2b" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Tóm lại:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tiêu chí</th>
								<th scope="col" class="px-5 py-3">require</th>
								<th scope="col" class="px-5 py-3">use</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Chức năng</th>
								<td class="px-5 py-4">Nạp file vào PHP</td>
								<td class="px-5 py-4">Đặt bí danh cho tên class có namespace</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Bỏ được không?</th>
								<td class="px-5 py-4">Không — không có file thì class không tồn tại</td>
								<td class="px-5 py-4">Có, nhưng phải viết <FilePath>\App\Service\Mailer</FilePath> đầy đủ</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					<b>Lưu ý:</b> nếu class <b>không có namespace</b> (chỉ khai báo <FilePath>class Mailer</FilePath> mà không kèm
					dòng <FilePath>namespace</FilePath>), thì chỉ cần <FilePath>require</FilePath> là đủ, không cần
					<FilePath>use</FilePath>. Nhưng vì file ở ví dụ trên có <FilePath>namespace App\Service;</FilePath> ở dòng
					đầu, nên bắt buộc phải gọi bằng tên đầy đủ hoặc dùng <FilePath>use</FilePath> để rút gọn.
				</p>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>
							<FilePath>use</FilePath> không phải "import file" — nó chỉ là alias ngắn. PHP vẫn dùng autoloader để thực
							sự tìm và load file khi bạn khởi tạo class lần đầu.
						</li>
						<li>
							Autoload thủ công với <FilePath>spl_autoload_register</FilePath> tốt để hiểu concept. Trong dự án thực tế,
							<b>Composer</b> lo việc này tự động theo chuẩn <b>PSR-4</b> — chỉ cần khai báo namespace trong
							<FilePath>composer.json</FilePath> là xong.
						</li>
						<li>
							Namespace dùng <FilePath>\</FilePath> làm dấu phân cách (không phải <FilePath>/</FilePath>):
							<FilePath>App\Service\Mailer</FilePath>, không phải <FilePath>App/Service/Mailer</FilePath>.
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
				b1: `<?php
// App/Service/Mailer.php
namespace App\\Service;   // khai báo namespace ở dòng đầu

class Mailer
{
    public function send(string $to): void
    {
        echo "Gửi mail đến: $to";
    }
}`,
				b2: `<?php
// index.php
use App\\Service\\Mailer;  // import class bằng namespace

$mailer = new Mailer();
$mailer->send('tuan@example.com');
// Output: Gửi mail đến: tuan@example.com`,
				b3: `<?php
// autoload.php
spl_autoload_register(function (string $class): void {
    // App\\Service\\Mailer  →  App/Service/Mailer.php
    $file = __DIR__ . '/' . str_replace('\\\\', '/', $class) . '.php';
    if (file_exists($file)) {
        require_once $file;
    }
});`,
				b4: `project/
├── App/
│   └── Service/
│       └── Mailer.php
├── autoload.php
└── index.php`,
				b5: `<?php
// App/Service/Mailer.php
namespace App\\Service;

class Mailer
{
    public function send(string $to): void
    {
        echo "Gửi mail đến: $to";
    }
}`,
				b6: `<?php
// index.php — chỉ require autoloader 1 lần, không cần require từng class
require_once __DIR__ . '/autoload.php';

use App\\Service\\Mailer;

$mailer = new Mailer();
$mailer->send('tuan@example.com');
// Output: Gửi mail đến: tuan@example.com`,
				faqA1: `<?php
// index.php — KHÔNG dùng autoload
require_once __DIR__ . '/App/Service/Mailer.php';  // tự nạp file thủ công

use App\\Service\\Mailer;                            // vẫn dùng được — chỉ là alias

$mailer = new Mailer();
$mailer->send('tuan@example.com');
// Output: Gửi mail đến: tuan@example.com`,
				faqA2a: `<?php
// KHÔNG dùng use — phải viết tên đầy đủ mỗi lần
require_once __DIR__ . '/App/Service/Mailer.php';

$mailer = new \\App\\Service\\Mailer();  // FQCN có dấu \\ ở đầu
$mailer->send('tuan@example.com');`,
				faqA2b: `<?php
// Dùng use — gọn hơn
require_once __DIR__ . '/App/Service/Mailer.php';
use App\\Service\\Mailer;

$mailer = new Mailer();
$mailer->send('tuan@example.com');`,
				pagePagination: null,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-7' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
