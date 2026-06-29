<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng tìm hiểu về cách để thiết lập và kết nối database trong PHP.
				</p>

				<PageHeading text="Tạo cơ sở dữ liệu MySQL & kết nối" addOnClass="text-left" markedAs="create-database" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Là một ngôn ngữ phía server nên PHP thường xuyên phải làm việc với database, khi cần kết nối với CSDL (thường
					là MySQL) và CRUD data thì các bạn có thể sử dụng 1 trong 2 cách cực kì phổ biến để kết nối với db:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>MySQLi (MySQL Improved):</b> Dùng với MySQL.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>PDO (PHP Data Objects):</b> Hỗ trợ nhiều loại CSDL khác nhau như MySQL, PostgreSQL, SQLite... 🔥🔥
					</li>
				</ul>

				<PageHeading text="B1 - Tạo file để kết nối cơ sở dữ liệu" :lvl="2" addOnClass="text-left" markedAs="pdo-01" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trước tiên, chúng ta cần tạo cơ sở dữ liệu MySQL. Bạn có thể sử dụng phpMyAdmin hoặc MySQL command line để
					thực hiện điều này. Ở đây, tôi sẽ sử dụng <b>`pdo`</b> để thực hiện kết nối DB. Tạo một folder
					<FilePath>database</FilePath> để quản lý các tác vụ liên quan đến database, trong đó tạo file
					<FilePath>Database.php</FilePath> - file này có nhiệm vụ khởi tạo và kết nối với database khi chúng ta chạy.
				</p>

				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`servername: `</b>
							<div>
								<span>
									Đây là địa chỉ của máy chủ cơ sở dữ liệu MySQL mà bạn muốn kết nối tới. Giá trị
									<b>`localhost`</b> thường được sử dụng khi MySQL đang chạy trên cùng một máy chủ với ứng dụng PHP ở
									máy cá nhân. Ngoài ra, trong thực tế thì giá trị của nó sẽ là Địa chỉ IP hoặc tên miền (ví dụ:
									"192.168.1.1" hoặc "example.com")
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`username: `</b>
							<div>
								<span>
									Tên người dùng để đăng nhập vào máy chủ cơ sở dữ liệu MySQL. Mỗi hệ thống sẽ setup một danh sách các
									username được phép truy cập vào database và mật khẩu nếu cần thiết.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`password: `</b>
							<div>
								<span> Mật khẩu tương ứng với tên người dùng được cung cấp ở biến $username. </span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`dbname: `</b>
							<div>
								<span>
									Tên của cơ sở dữ liệu mà bạn muốn kết nối đến, chúng ta có thể phải thay đổi nó thành tên cơ sở dữ
									liệu thực tế mà mình đã tạo hoặc sẽ tạo.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`port: `</b>
							<div>
								<span>
									Cổng kết nối, tuỳ thuộc vào config của chúng ta. Thông thường, giá trị mặc định sẽ là 3306.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`conn: `</b>
							<div>
								<span>
									Đây là đối tượng kết nối với cơ sở dữ liệu MySQL. Đối tượng này được tạo ra bằng cách sử dụng class
									<b>`mysqli`</b> của PHP, với các tham số là tên <b>`$servername, $username, $password, $dbname`</b> ở
									trên. Nếu kết nối thành công, đối tượng $conn sẽ được sử dụng để thực hiện các truy vấn SQL. Nếu kết
									nối thất bại, nó sẽ trả về lỗi được lưu ở key <b>`connect_error`</b>.
								</span>
							</div>
						</li>
					</ul>
				</div>
				<PageHeading
					text="B2 - Tiến hành chạy và kết nối database."
					:lvl="2"
					addOnClass="text-left"
					markedAs="pdo-02"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tiếp theo, tại file <FilePath>index.php</FilePath> chúng ta kết sẽ nhúng file
					<FilePath>Database.php</FilePath> để tạo và kết nối db.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<br />
					Mở
					<a
						href="http://localhost/phpmyadmin"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						http://localhost/phpmyadmin
					</a>
					để kiểm tra database, database của chúng ta đã xuất hiện là ta đã thành công:
				</p>
				<div>
					<img src="@/assets/images/php-laravel/database-01.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Như vậy là chúng ta vừa tạo một database có tên là <b>`hello_php`</b> và đã kết nối thành công. Tiếp theo
					chúng ta sẽ tiến hành tạo các table trong database bằng câu lệnh sql.
				</p>

				<PageHeading text="B3 - Tạo table. " :lvl="2" addOnClass="text-left" markedAs="pdo-03" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tiếp theo, chúng ta sẽ tạo bảng <b>`products`</b>, trong thư mục <FilePath>database/migrations</FilePath> ta
					tạo file <b>`create_products_table.php`</b> có mục đích là khởi tạo Table <b>`products`</b>. Trong đó,
					<FilePath>migrations</FilePath>
					là thư mục chứa các config về bảng biểu với Database của chúng ta.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ta dùng raw sql để tạo bảng <b>`products`</b>, nếu đã xuất hiện bảng này rồi thì bỏ qua. <br />
					Lưu ý: Khi tạo bảng chúng ta cần đảm bảo rằng database đã được connect trước khi tạo bảng. Do đó, tôi sẽ
					<b>require('Database.php');</b> để đảm bảo rằng database đã được connect.
					<br />
					Tiếp theo chúng ta require <b>create_products_table.php</b> tại <b>index.php</b>. Sau khi khởi tạo thành công,
					chúng ta sẽ có được bảng <b>`products`</b> và cấu trúc của nó như sau:
				</p>
				<div>
					<img src="@/assets/images/php-laravel/database-02.png" alt="" class="rounded-lg mt-3 block" />
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Giải thích 1 chút về methods và đối tượng thường dùng trong PDO nha:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>$pdo->exec($sql)</b> Dùng cho các câu lệnh trả về dữ liệu (SELECT)<br />
						Output của nó là: một đối tượng PDOStatement.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>$pdo->query($sql)</b> Dùng cho các câu lệnh không trả về dữ liệu (INSERT, UPDATE, DELETE, CREATE TABLE,
						DROP TABLE...). <br />
						Output của nó là: số dòng bị ảnh hưởng (int), hoặc false nếu lỗi.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<b>PDOException</b> là một instance chứa thông tin lỗi của PDO<br />
						có thể dùng hàm <b>getMessage()</b> để lấy message lỗi.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) xong phần 1, chúng ta đã hoàn thành việc tạo database và bảng <b>`products`</b> của nó, ở phần sau
					chúng ta sẽ cùng tạo Model, Controller cho product và xử lý bài toán CRUD với database. See ya!!
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
// Thông tin kết nối
$host = 'localhost';
$port = '3306'; // Port tùy chỉnh
$dbname = 'hello_php'; // Thay bằng tên database thực tế
$username = 'root';
$password = '';

try {
    $conn = new PDO(
        "mysql:host=$host;port=$port;dbname=$dbname",
        $username,
        $password
    );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
    exit();
}
?>
`,
				b2: `// index.php
<?php
	require_once('./database/Database.php');
?>
`,
				b3: `// database/migrations/create_products_table.php
<?php
	require_once dirname(__DIR__) . '/Database.php';
	try {
    $sql = "
    CREATE TABLE IF NOT EXISTS products (
			id INT AUTO_INCREMENT PRIMARY KEY,
			product_name VARCHAR(255) NOT NULL,
			description TEXT,
			images VARCHAR(255),
			regular_price DECIMAL(10, 2),
			sale_price DECIMAL(10, 2),
			brand_id INT,
			category_id INT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

		$conn->exec($sql);
		echo "Bảng 'products' đã được tạo thành công!";
	} catch (PDOException $e) {
		echo "Lỗi khi tạo bảng: " . $e->getMessage();
	}

?>
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
