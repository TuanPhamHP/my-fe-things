<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Như các bài trước, các bạn thấy rằng việc sử dụng require/include sẽ cực kì khó chịu khi dự án được mở rộng
					dần. Các lỗi như sai đường dẫn sẽ xảy ra liên tục. Chúng ta cần một giải pháp để giải quyết vấn đề này,
					<b>namespace & autoload</b>
					chính là giải pháp của chúng ta.
					<br />
					<b>Lưu ý:</b> chúng ta vẫn chưa học cách dùng <b>composer</b> nên về cơ bản tôi sẽ demo thông qua việc tạo một
					<b>autoload</b> cơ bản.
				</p>

				<PageHeading text="Tạo autoload" addOnClass="text-left" markedAs="create-autoload" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Chúng ta sẽ tạo một <b>autoload</b> thủ công với mục đích map các <b>namespace</b> thành các đường dẫn tương
					ứng. <FilePath>autoload.php</FilePath>:
				</p>

				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<ul class="pl-5">
						<li
							class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
						>
							<b>Mục đích:</b> Giúp PHP tự động nạp (load) các file chứa class khi bạn sử dụng chúng (ví dụ:
							<FilePath>new App\Database</FilePath>), mà không cần phải require hoặc include thủ công từng file.
						</li>

						<li
							class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
						>
							<b>Cách hoạt động:</b> Khi PHP gặp một class chưa được định nghĩa, nó sẽ gọi hàm được đăng ký bởi
							<FilePath>spl_autoload_register</FilePath> để tìm và nạp file tương ứng.
						</li>
						<li
							class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
						>
							====> Autoloader này sẽ tìm file dựa trên namespace. Ví dụ: <b>App\Database\Database</b> sẽ trỏ đến class
							<b>Database</b> tương ứng với đường dẫn <FilePath>/Database/Database.php</FilePath>.
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Lưu ý:</b> trong PHP, namespace chủ yếu được thiết kế để làm việc với class, interface, và trait, giúp tổ
					chức và tránh xung đột tên giữa các thành phần này. Tuy nhiên, nó cũng có thể áp dụng cho các hàm (function)
					và hằng số (constant) kể từ PHP 5.6, nhưng cách sử dụng phổ biến nhất vẫn là với class.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold text-2xl">Giải thích nè:</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold">1. Đăng ký autoload</p>

				<VCodeBlock
					:code="`spl_autoload_register(function ($class) {`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<FilePath>spl_autoload_register()</FilePath> sẽ đăng ký một <b>autoload function</b>. Tức là nó sẽ tự thực
						thi khi được nhúng. Đây là built-in method của PHP nha.
					</li>

					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Khi một class chưa được khai báo mà được sử dụng, PHP sẽ gọi hàm này và truyền tên class vào biến
						<FilePath>$class</FilePath>.
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold">
					2. Chuyển đổi tên class thành đường dẫn file
				</p>

				<VCodeBlock
					:code="`$file = __DIR__ . '/' . str_replace('\'', '/', $class) . '.php';`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Mục đích:</b> Tạo đường dẫn tới file chứa class dựa trên <b>tên class</b> và <b>namespace</b>.
					</li>

					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<FilePath>str_replace('\'', '/', $class)</FilePath>:
						<br />
						<ul class="pl-5">
							<li
								class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
							>
								Trong PHP, <b>namespace</b> dùng dấu <FilePath>\</FilePath> để phân tách (ví dụ: <b> App\Database</b> ),
								thay vì dùng <FilePath>/</FilePath> (như Windows) hay <FilePath>/</FilePath> (MAC, Linux) nên cần hàm
								này để đưa tất cả về 1 định dạng chung.
							</li>
							<li
								class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
							>
								Ví dụ: <FilePath>App\Database</FilePath> => <FilePath>App/Database</FilePath>.
							</li>
						</ul>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Kết quả:</b> Nếu <FilePath>$class = 'App\Database\Database'</FilePath>, thì
						<FilePath> $file = __DIR__ . /App/Database/Database.php</FilePath>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold">3. Kiểm tra và nạp file</p>

				<VCodeBlock
					:code="`if (file_exists($file)) {
    require_once $file;
} else {
    echo 'Không tìm thấy file cho class: '.$class;
}
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Nếu file tồn tại, nó sẽ được require_once.
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Nếu không, in ra lỗi để debug.
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white mb-5 leading-8"><b>Ví dụ:</b> có cây thư mục như sau</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">Khai báo namespace và sử dụng autoload</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mb-1 leading-8 font-semibold italic">
							Tạo namespace với class <FilePath>TestSpeaker</FilePath>
						</p>
						<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />
					</div>
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white mb-1 leading-8 font-semibold italic">
							Gọi đến <FilePath>TestSpeaker</FilePath> bằng <FilePath>use 'namespace'</FilePath> thay vì dùng "require";
						</p>
						<VCodeBlock :code="b5" highlightjs lang="php" theme="tomorrow-night-bright" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white mb-1 leading-8">
					<b>Không xài require nhiều, không lo đến cảnh ngồi dò đường dẫn nữa. Quá đã.</b>
					<br />
					Tiếp theo, chúng ta cùng chuyển <FilePath>database.php</FilePath>, <FilePath>migration.php</FilePath> thành
					class dùng với namepsace hé.
				</p>

				<PageHeading text="Class Database" addOnClass="text-left my-2" markedAs="db-class" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Chúng mình sẽ biến file <FilePath>database.php</FilePath> cũ thành một <b>Class</b> và sử dụng namespace để
					load thay vì dùng require như cũ nha:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Trong này tui có sử dụng <b>static</b> và <b>self</b>, để tui giải thích:
				</p>
				<ul class="pl-5">
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>static:</b> là loại methods, properties có đặc điểm là:
						<ul class="pl-5">
							<li
								class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
							>
								Thuộc về class, không phải đối tượng cụ thể.
							</li>
							<li
								class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
							>
								Có thể truy cập mà không cần khởi tạo đối tượng (new).
							</li>
							<li
								class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
							>
								Dùng từ khóa <b>self::</b> hoặc <b>static::</b> để gọi trong nội bộ class.
							</li>
							<li
								class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"
							>
								Sử dụng <b>ClassName::property</b> hoặc <b>ClassName::method()</b> để gọi từ bên ngoài class.
							</li>
						</ul>
					</li>
					<li class="marker:text-sky-400 list-disc text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Lí do sử dụng:</b> mình muốn triển khai <b>singleton pattern</b> để tạo ra một cho $conn duy nhất xuyên
						suốt app thay vì khởi tạo instance mới khi gọi đến.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Done, khi cần dùng tới $conn để thực thi sql chúng ta có thể gọi tới class <b>Database</b> là oki. Ví dụ:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Bài tập: Tiếp tục update cho các file trong <FilePath>migrations</FilePath> nhé.
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
						title: 'HTML Styles',
						link: '/html-css-js-basic/documentation/ep-2',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/html-css-js-basic/documentation',
					},
				},
				b1: `<?php
spl_autoload_register(function ($class) {
    // Thay dấu \ thành / để tạo đường dẫn file
    $file = __DIR__ . '/' . str_replace('\\'', '/', $class) . '.php';
    if (file_exists($file)) {
        require_once $file;
    } else {
        echo "Không tìm thấy file cho class: $class";
    }
});
?>
`,
				b2: `<?php

namespace Database;

use PDO;
use PDOException;

class Database
{
   private static $host = 'localhost';
   private static $port = '3306'; // Port tùy chỉnh
   private static $dbname = 'hello_php'; // Thay bằng tên database thực tế
   private static $username = 'root';
   private static $password = '';
   private static ?PDO $conn = null;

   public function __construct__() {}

   public static function getConnection()
   {
      if (self::$conn === null) {
         // connect to database - Using PDO
         try {
            self::$conn = new PDO(
               "mysql:host=" . self::$host . ";port=" . self::$port . ";dbname=" . self::$dbname,
               self::$username,
               self::$password
            );
            self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
         }
      }
      return self::$conn;
   }
}
`,
				b3: `project/
├── Service/
│   ├── TestSpeaker.php
├── autoload.php
├── index.php`,
				b4: `<?php
namespace App\\Service;

class TestSpeaker {
    public function speak() {
        echo "Alo alo 1, 2, 3, 4";
    }
}`,
				b5: `<?php
require_once __DIR__ . '/autoload.php';

use App\\Database;

$mic = new TestSpeaker();
$mic->speak(); // In ra: "Alo alo 1, 2, 3, 4"`,
				b6: `<?php
namespace Database\\Migrations;
use Database\\Database;

$db = new Database();
$conn = $db->getConnection();`,
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
