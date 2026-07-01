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
				<p class="text-slate-900 dark:text-white my-3">Composer làm 3 việc chính cho project PHP hiện đại:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Quản lý dependency</b> — cài, cập nhật, gỡ package theo phiên bản chính xác. Toàn bộ package PHP mã
						nguồn mở được đăng ký tại <b>Packagist</b> (<FilePath>packagist.org</FilePath>) — thư viện trung tâm
						tương đương npm registry của JavaScript.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Autoload theo PSR-4</b> — không cần <FilePath>require</FilePath> từng file, Composer sinh sẵn
						autoloader chỉ cần include 1 lần.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Khoá phiên bản</b> — <FilePath>composer.lock</FilePath> đảm bảo mọi máy dev, CI, production dùng
						đúng cùng phiên bản package. Không còn tình trạng "trên máy tôi chạy được".
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
					Composer viết bằng chính PHP nên chạy được ở bất kỳ đâu có PHP. Trước khi cài, đảm bảo PHP 8.x đã có
					trong <FilePath>PATH</FilePath> (kiểm tra bằng <FilePath>php -v</FilePath>).
				</p>
				<PageHeading text="Windows" addOnClass="text-left" markedAs="install-windows" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Tải <FilePath>Composer-Setup.exe</FilePath> từ <FilePath>getcomposer.org/download</FilePath> và chạy.
					Installer tự thêm Composer vào PATH — không cần cấu hình gì thêm. Restart terminal sau khi cài xong.
				</p>
				<PageHeading text="macOS / Linux" addOnClass="text-left" markedAs="install-unix" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Chạy khối lệnh sau (copy nguyên khối từ trang chủ để có checksum mới nhất):
				</p>
				<VCodeBlock :code="b9" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Sau khi cài xong ở bất kỳ hệ điều hành nào, kiểm tra phiên bản:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Composer tự update bằng <FilePath>composer self-update</FilePath>. Muốn quay về bản trước dùng
					<FilePath>composer self-update --rollback</FilePath>.
				</p>

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
					Các trường quan trọng trong <FilePath>composer.json</FilePath> bạn sẽ gặp thường xuyên:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Trường</th>
								<th scope="col" class="px-5 py-3">Mô tả</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="row in composerFields"
								:key="row.field"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-mono text-sky-500 whitespace-nowrap">{{ row.field }}</th>
								<td class="px-5 py-4">{{ row.desc }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					Một file <FilePath>composer.json</FilePath> "đầy đủ" — dùng làm mẫu để tham khảo — trông như sau:
				</p>
				<VCodeBlock :code="b10" highlightjs lang="json" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Sau khi cập nhật <FilePath>composer.json</FilePath>, chạy lệnh này để Composer sinh ra autoloader:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="bash" theme="atom-one-dark" />

				<PageHeading text="Cơ chế phân giải PSR-4: từ class → file" addOnClass="text-left" markedAs="psr4-resolve" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi bạn viết <FilePath>new App\Service\Mailer()</FilePath>, PHP không tự biết class ở đâu. Nó gọi lần
					lượt từng autoloader đã đăng ký và đưa cho họ chuỗi <FilePath>App\Service\Mailer</FilePath>. Autoloader
					của Composer chạy đúng 5 bước sau:
				</p>
				<ol class="pl-10 list-decimal space-y-2 my-3 text-slate-900 dark:text-white leading-8">
					<li>
						Duyệt các key trong <FilePath>psr-4</FilePath> để tìm <b>prefix khớp dài nhất</b>. Ví dụ:
						<FilePath>App\Service\Mailer</FilePath> khớp với prefix <FilePath>App\</FilePath>.
					</li>
					<li>Bỏ prefix khỏi tên class → còn lại phần đuôi <FilePath>Service\Mailer</FilePath>.</li>
					<li>Thay dấu <FilePath>\</FilePath> bằng <FilePath>/</FilePath> → <FilePath>Service/Mailer</FilePath>.</li>
					<li>
						Ghép với base directory tương ứng + <FilePath>.php</FilePath> →
						<FilePath>App/Service/Mailer.php</FilePath>.
					</li>
					<li>
						Nếu file tồn tại → <FilePath>require</FilePath> nó. Nếu không → thử autoloader tiếp theo trong
						chuỗi đã đăng ký.
					</li>
				</ol>
				<p class="text-slate-900 dark:text-white my-3">
					Bảng ví dụ minh họa cách mapping thay đổi ảnh hưởng tới đường dẫn file:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tên class</th>
								<th scope="col" class="px-5 py-3">Mapping trong composer.json</th>
								<th scope="col" class="px-5 py-3">File thực tế</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="row in psr4Table"
								:key="row.class"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-mono text-emerald-500 whitespace-nowrap">{{ row.class }}</th>
								<td class="px-5 py-4 font-mono text-xs">{{ row.mapping }}</td>
								<td class="px-5 py-4 font-mono text-sky-500 whitespace-nowrap">{{ row.file }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3"><b>3 quy tắc vàng khi viết code theo PSR-4:</b></p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Tên file trùng tên class</b> + đuôi <FilePath>.php</FilePath>. Class
						<FilePath>UserRepository</FilePath> → file <FilePath>UserRepository.php</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Cấu trúc thư mục phải khớp cấu trúc namespace</b>. Linux <b>phân biệt hoa/thường</b> —
						<FilePath>app/Service</FilePath> và <FilePath>App/Service</FilePath> là 2 folder khác nhau, project
						sẽ crash khi deploy dù chạy ổn trên Windows/macOS.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<b>Một file một class</b> — không định nghĩa nhiều class trong cùng một file. Autoloader chỉ tìm
						được 1 class theo tên file.
					</li>
				</ul>

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

				<PageHeading text="Cài package từ Packagist" addOnClass="text-left" markedAs="installing-packages" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Ecosystem PHP có sẵn hàng chục nghìn package trên <FilePath>packagist.org</FilePath> — từ HTTP client
					(<FilePath>guzzlehttp/guzzle</FilePath>), logging (<FilePath>monolog/monolog</FilePath>), ORM
					(<FilePath>doctrine/orm</FilePath>) đến framework (<FilePath>laravel/framework</FilePath>). Cài chỉ với 1
					lệnh:
				</p>
				<VCodeBlock :code="b11" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Lệnh <FilePath>composer require</FilePath> làm 4 việc cùng lúc:</p>
				<ol class="pl-10 list-decimal space-y-1 my-3 text-slate-900 dark:text-white leading-7">
					<li>Tra Packagist để tìm phiên bản mới nhất tương thích với PHP + các package hiện có.</li>
					<li>Thêm entry mới vào mục <FilePath>require</FilePath> của <FilePath>composer.json</FilePath>.</li>
					<li>Download source của package (và các dependency của nó) về <FilePath>vendor/</FilePath>.</li>
					<li>
						Cập nhật <FilePath>composer.lock</FilePath> ghi lại phiên bản chính xác, và tái sinh
						<FilePath>vendor/autoload.php</FilePath>.
					</li>
				</ol>
				<p class="text-slate-900 dark:text-white my-3">Sau khi cài, <FilePath>composer.json</FilePath> có thêm dòng:</p>
				<VCodeBlock :code="b12" highlightjs lang="json" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Gỡ package: <FilePath>composer remove monolog/monolog</FilePath>. Update package (trong phạm vi constraint
					đã ghi): <FilePath>composer update monolog/monolog</FilePath>. Update tất cả:
					<FilePath>composer update</FilePath>.
				</p>

				<PageHeading text="Ràng buộc phiên bản (Version Constraints)" addOnClass="text-left" markedAs="version-constraints" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Composer dùng chuẩn <b>Semantic Versioning</b> — mỗi phiên bản gồm 3 số
					<FilePath>MAJOR.MINOR.PATCH</FilePath>:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-1 leading-7 list-disc marker:text-sky-400">
						<b>MAJOR</b> — breaking change, code cũ có thể vỡ.
					</li>
					<li class="text-slate-900 dark:text-white my-1 leading-7 list-disc marker:text-sky-400">
						<b>MINOR</b> — thêm tính năng mới, vẫn tương thích ngược.
					</li>
					<li class="text-slate-900 dark:text-white my-1 leading-7 list-disc marker:text-sky-400">
						<b>PATCH</b> — sửa bug, không đổi API.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">Các cú pháp constraint thường gặp:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Cú pháp</th>
								<th scope="col" class="px-5 py-3">Ý nghĩa</th>
								<th scope="col" class="px-5 py-3">Dịch ra range</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="row in versionTable"
								:key="row.syntax"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-mono text-sky-500 whitespace-nowrap">{{ row.syntax }}</th>
								<td class="px-5 py-4">{{ row.meaning }}</td>
								<td class="px-5 py-4 font-mono text-xs">{{ row.example }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>composer require</FilePath> mặc định thêm ràng buộc kiểu <FilePath>^</FilePath> — lựa chọn an
					toàn nhất: nhận bugfix và feature mới, nhưng không "nhảy" qua major version có thể phá code.
				</p>

				<PageHeading text="require vs require-dev" addOnClass="text-left" markedAs="require-dev" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Composer chia dependency làm 2 nhóm:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>require</FilePath> — package cần cho <b>runtime</b> (production dùng). Ví dụ: Monolog,
						Guzzle, Symfony Http.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>require-dev</FilePath> — chỉ cần khi <b>dev / test</b>. Ví dụ: PHPUnit, PHPStan, Psalm,
						Faker.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">Thêm package dev:</p>
				<VCodeBlock :code="b13" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Song song đó, PSR-4 cũng có phiên bản dev: <FilePath>autoload-dev</FilePath>. Code test không nên load ở
					production:
				</p>
				<VCodeBlock :code="b14" highlightjs lang="json" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi deploy production, luôn chạy <FilePath>composer install --no-dev</FilePath> — bỏ qua tất cả
					<FilePath>require-dev</FilePath> + <FilePath>autoload-dev</FilePath>, giảm dung lượng
					<FilePath>vendor/</FilePath> và loại code test khỏi bản deploy.
				</p>

				<PageHeading text="Các kiểu autoload khác: classmap và files" addOnClass="text-left" markedAs="other-autoload" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Ngoài <FilePath>psr-4</FilePath>, Composer còn 2 kiểu autoload:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>classmap</FilePath> — Composer quét sẵn thư mục, build một map
						<FilePath>ClassName ⇒ path</FilePath> lưu vào file tĩnh. Dùng cho code legacy không theo PSR-4 (ví
						dụ 1 file chứa nhiều class, hoặc tên file đặt tùy ý).
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>files</FilePath> — <FilePath>require</FilePath> file mỗi request. Dùng cho các helper
						function toàn cục (function không phải class nên không thể autoload theo tên).
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3">Kết hợp cả 3 kiểu trong một <FilePath>composer.json</FilePath>:</p>
				<VCodeBlock :code="b15" highlightjs lang="json" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Nhớ chạy <FilePath>composer dump-autoload</FilePath> mỗi khi thêm file mới vào
					<FilePath>classmap</FilePath> — Composer đã cache map, không tự phát hiện file mới.
				</p>

				<PageHeading text="Các lệnh Composer thường dùng" addOnClass="text-left" markedAs="common-commands" :lvl="1" />
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Lệnh</th>
								<th scope="col" class="px-5 py-3">Công dụng</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="row in commandsTable"
								:key="row.cmd"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-mono text-sky-500 whitespace-nowrap">{{ row.cmd }}</th>
								<td class="px-5 py-4">{{ row.desc }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="Ví dụ thực tế: ghi log với Monolog" addOnClass="text-left" markedAs="monolog-example" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Ghép mọi thứ lại: cài Monolog và dùng nó ghi log ra file. Chú ý: <b>không viết một dòng autoload nào</b>.
				</p>
				<VCodeBlock :code="b11" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Ở file <FilePath>index.php</FilePath>:</p>
				<VCodeBlock :code="b16" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Chạy file → log ghi vào <FilePath>app.log</FilePath>. Sau này muốn ghi log ra Slack, Redis, Elasticsearch
					chỉ cần đổi handler — logic ghi log không đổi. Đây là sức mạnh thật sự của package ecosystem: bạn tập
					trung code business logic, còn lại giao cho thư viện.
				</p>

				<PageHeading text="Tối ưu autoloader cho production" addOnClass="text-left" markedAs="production-opt" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Mặc định autoloader phải <FilePath>file_exists()</FilePath> mỗi khi load class mới → chậm. Trên production,
					chạy lệnh sau khi build:
				</p>
				<VCodeBlock :code="b17" highlightjs lang="bash" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Giải thích các cờ:</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>--no-dev</FilePath> — bỏ qua <FilePath>require-dev</FilePath> + <FilePath>autoload-dev</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>-o</FilePath> / <FilePath>--optimize-autoloader</FilePath> — quét toàn bộ file PSR-4 sinh
						classmap tĩnh, autoloader không cần <FilePath>file_exists()</FilePath> nữa.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>--classmap-authoritative</FilePath> — nếu class không có trong classmap thì báo lỗi luôn,
						KHÔNG thử tìm file. Nhanh nhất, nhưng cấm bổ sung class ở runtime.
					</li>
					<li class="text-slate-900 dark:text-white my-2 leading-8 list-disc marker:text-sky-400">
						<FilePath>--apcu-autoloader</FilePath> — cache kết quả tra cứu vào APCu (bật khi PHP có APCu
						extension).
					</li>
				</ul>

				<PageHeading text="Lỗi thường gặp & cách xử lý" addOnClass="text-left" markedAs="troubleshooting" :lvl="1" />
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Triệu chứng</th>
								<th scope="col" class="px-5 py-3">Nguyên nhân & cách xử lý</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="row in troubleTable"
								:key="row.symptom"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 dark:text-white">
									{{ row.symptom }}
								</th>
								<td class="px-5 py-4">{{ row.fix }}</td>
							</tr>
						</tbody>
					</table>
				</div>

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
							<FilePath>composer.json</FilePath> → khai báo namespace PSR-4, dependencies và metadata của
							project.
						</li>
						<li>
							<FilePath>composer require vendor/pkg</FilePath> → cài package + tự cập nhật autoloader và
							<FilePath>composer.lock</FilePath>.
						</li>
						<li>
							Autoload PSR-4 map <b>1-1</b>: namespace prefix ↔ base directory, cấu trúc thư mục = cấu trúc
							namespace, tên file = tên class.
						</li>
						<li>
							Version constraint mặc định <FilePath>^</FilePath> nhận bugfix + feature update, không nhảy
							major version.
						</li>
						<li>
							Deploy production dùng
							<FilePath>composer install --no-dev -o --classmap-authoritative</FilePath> để load nhanh nhất.
						</li>
						<li>
							Chỉ cần <FilePath>require_once 'vendor/autoload.php'</FilePath> một lần — tất cả class và
							package đều được load tự động.
						</li>
						<li>
							Commit <FilePath>composer.json</FilePath> và <FilePath>composer.lock</FilePath>, <b>không</b>
							commit <FilePath>vendor/</FilePath>.
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
				composerFields: [
					{ field: 'name', desc: 'Định danh package dạng vendor/package (bắt buộc nếu publish lên Packagist).' },
					{ field: 'description', desc: 'Mô tả ngắn 1 dòng về project/package.' },
					{ field: 'type', desc: 'library (mặc định), project, symfony-bundle, wordpress-plugin...' },
					{ field: 'license', desc: 'MIT, Apache-2.0, GPL-3.0-or-later... theo SPDX ID.' },
					{ field: 'require', desc: 'Dependency runtime + phiên bản PHP tối thiểu (ví dụ php: ^8.2).' },
					{ field: 'require-dev', desc: 'Dependency chỉ dùng khi dev / test (PHPUnit, PHPStan...).' },
					{ field: 'autoload', desc: 'Cấu hình autoload psr-4 / classmap / files cho code project.' },
					{ field: 'autoload-dev', desc: 'Autoload chỉ áp dụng khi cài kèm --dev (thường trỏ tới thư mục tests/).' },
					{ field: 'scripts', desc: 'Alias lệnh: composer test, composer lint... chạy từ CLI hoặc hook.' },
					{ field: 'config', desc: 'Tinh chỉnh Composer: platform PHP version, sort-packages, allow-plugins...' },
				],
				psr4Table: [
					{ class: 'App\\User', mapping: 'App\\ ⇒ App/', file: 'App/User.php' },
					{ class: 'App\\Service\\Mailer', mapping: 'App\\ ⇒ App/', file: 'App/Service/Mailer.php' },
					{
						class: 'App\\Http\\Controller\\HomeController',
						mapping: 'App\\ ⇒ src/',
						file: 'src/Http/Controller/HomeController.php',
					},
					{ class: 'Tests\\Unit\\UserTest', mapping: 'Tests\\ ⇒ tests/', file: 'tests/Unit/UserTest.php' },
				],
				versionTable: [
					{ syntax: '1.2.3', meaning: 'Đúng phiên bản đó, không lệch một chút.', example: '= 1.2.3' },
					{
						syntax: '^1.2.3',
						meaning: 'Cùng MAJOR — nhận minor & patch, không jump lên 2.x. (Mặc định của composer require)',
						example: '>=1.2.3, <2.0.0',
					},
					{ syntax: '~1.2.3', meaning: 'Cùng MAJOR + MINOR — chỉ nhận patch.', example: '>=1.2.3, <1.3.0' },
					{ syntax: '~1.2', meaning: 'Cùng MAJOR — nhận minor & patch.', example: '>=1.2, <2.0.0' },
					{ syntax: '1.*', meaning: 'Bất kỳ phiên bản 1.x nào.', example: '>=1.0, <2.0.0' },
					{ syntax: '>=1.0 <2.0', meaning: 'Kết hợp toán tử range tự do.', example: '>=1.0.0, <2.0.0' },
					{
						syntax: 'dev-main',
						meaning: 'Nhánh git (chưa stable). KHÔNG dùng cho production.',
						example: 'HEAD của branch main',
					},
				],
				commandsTable: [
					{ cmd: 'composer init', desc: 'Tạo composer.json bằng loạt câu hỏi tương tác.' },
					{ cmd: 'composer install', desc: 'Cài đúng phiên bản trong composer.lock (dùng khi clone project về).' },
					{ cmd: 'composer update', desc: 'Nâng cấp package tối đa trong ràng buộc composer.json, ghi lại vào lock.' },
					{ cmd: 'composer require vendor/pkg', desc: 'Thêm & cài package mới.' },
					{ cmd: 'composer require --dev vendor/pkg', desc: 'Thêm package chỉ dùng khi dev.' },
					{ cmd: 'composer remove vendor/pkg', desc: 'Gỡ package + cập nhật lock file.' },
					{ cmd: 'composer dump-autoload', desc: 'Tái sinh vendor/autoload.php khi thêm file/namespace mới.' },
					{ cmd: 'composer show', desc: 'Liệt kê package đã cài + phiên bản.' },
					{ cmd: 'composer why vendor/pkg', desc: 'Xem package nào yêu cầu package này (debug dependency conflict).' },
					{ cmd: 'composer outdated', desc: 'Liệt kê package có phiên bản mới hơn ràng buộc hiện tại.' },
					{ cmd: 'composer validate', desc: 'Kiểm tra composer.json hợp lệ chưa (dùng trong CI).' },
					{ cmd: 'composer self-update', desc: 'Nâng cấp chính Composer.' },
				],
				troubleTable: [
					{
						symptom: 'Class not found dù đã dump-autoload',
						fix: 'Kiểm tra namespace khớp cấu trúc thư mục, đúng hoa/thường. Chạy lại composer dump-autoload.',
					},
					{
						symptom: 'Class không load ở host Linux nhưng OK trên Windows',
						fix: 'Sai case đâu đó trong tên file hoặc namespace. Linux phân biệt hoa/thường — đổi cho khớp exact.',
					},
					{
						symptom: 'composer.lock conflict khi merge git',
						fix: 'Chạy composer install sau khi merge; nếu vẫn xung đột, chọn 1 bản rồi composer update để regen từ đầu.',
					},
					{
						symptom: 'Allowed memory size exhausted khi update',
						fix: 'Chạy: php -d memory_limit=-1 $(which composer) update',
					},
					{
						symptom: '"could not open input file: composer" trên Windows',
						fix: 'PATH chưa có Composer. Cài lại bằng Composer-Setup.exe và restart terminal.',
					},
					{
						symptom: 'Cài package chậm hoặc bị rate-limit',
						fix: 'Chạy composer clear-cache; kiểm tra network/proxy; hoặc cấu hình GitHub OAuth token.',
					},
					{
						symptom: 'require vendor/autoload.php không thấy file',
						fix: 'Kiểm tra đường dẫn __DIR__ . "/vendor/autoload.php" có đúng chưa (đôi khi entry point ở thư mục con).',
					},
				],
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
				b9: `# Tải installer, xác minh checksum rồi cài
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# Đưa composer.phar vào PATH toàn cục (macOS/Linux)
sudo mv composer.phar /usr/local/bin/composer`,
				b10: `{
    "name": "tuan/my-project",
    "description": "Ứng dụng demo Composer + PSR-4",
    "type": "project",
    "license": "MIT",
    "require": {
        "php": "^8.2"
    },
    "require-dev": {
        "phpunit/phpunit": "^11.0"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "App/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "test": "phpunit --colors=always"
    },
    "config": {
        "sort-packages": true
    }
}`,
				b11: `composer require monolog/monolog
# Using version ^3.7 for monolog/monolog
# ./composer.json has been updated
# Running composer update monolog/monolog
# Package operations: 3 installs, 0 updates, 0 removals`,
				b12: `"require": {
    "php": "^8.2",
    "monolog/monolog": "^3.7"
}`,
				b13: `composer require --dev phpunit/phpunit
# Ghi entry vào require-dev của composer.json`,
				b14: `{
    "autoload": {
        "psr-4": { "App\\\\": "App/" }
    },
    "autoload-dev": {
        "psr-4": { "Tests\\\\": "tests/" }
    }
}`,
				b15: `{
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        },
        "classmap": [
            "legacy/",
            "database/seeds"
        ],
        "files": [
            "src/helpers.php"
        ]
    }
}`,
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
				b17: `composer install --no-dev --optimize-autoloader --classmap-authoritative --apcu-autoloader`,
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
