<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng tìm hiểu về cách để thiết lập và kết nối database trong PHP.
				</p>

				<PageHeading text="Tạo cơ sở dữ liệu MySQL & kết nối" addOnClass="text-left" markedAs="create-database" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>B1 - Tạo file để kết nối cơ sở dữ liệu </b>
					<br />
					Trước tiên, chúng ta cần tạo cơ sở dữ liệu MySQL. Bạn có thể sử dụng phpMyAdmin hoặc MySQL command line để
					thực hiện điều này. Ở đây, tôi sẽ sử dụng <b>`mysqli`</b> để thực hiện kết nối DB. Tạo một folder
					<FilePath>database</FilePath> để quản lý các tác vụ liên quan đến database, trong đó tạo file
					<FilePath>db_connect.php</FilePath> - file này có nhiệm vụ khởi tạo và kết nối với database khi chúng ta chạy.
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
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>B2 - Tiến hành chạy và kết nối database. </b>
					<br />
					Tiếp theo, tại file <FilePath>index.php</FilePath> chúng ta kết sẽ nhúng file
					<FilePath>db_connect.php</FilePath> để tạo và kết nối db.
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
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>B3 - Tạo table. </b>
					<br />
					Tiếp theo, chúng ta sẽ tạo bảng <b>`products`</b>, trong thư mục <FilePath>database</FilePath> ta tạo file
					<b>`create_products_table.php`</b> có mục đích là khởi tạo Table <b>`products`</b>.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ta dùng raw sql để tạo bảng <b>`products`</b>, nếu đã xuất hiện bảng này rồi thì bỏ qua. <br />
					Lưu ý: Khi tạo bảng chúng ta cần đảm bảo rằng database đã được connect trước khi tạo bảng. Do đó, tôi sẽ
					<b>require('db_connect.php');</b> để đảm bảo rằng database đã được connect.
					<br />
					Tiếp theo chúng ta require <b>create_products_table.php</b>tại <b>index.php</b>. Sau khi khởi tạo thành công,
					chúng ta sẽ có được bảng <b>`products`</b> và cấu trúc của nó như sau:
				</p>
				<div>
					<img src="@/assets/images/php-laravel/database-02.png" alt="" class="rounded-lg mt-3 block" />
				</div>
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
				b1: ` // database/db_connect.php
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "hello_php";
	$port = 3306;

	// Tạo kết nối đến MySQL mà không chọn cơ sở dữ liệu
	$conn = new mysqli($servername, $username, $password, null, $port);

	// Kiểm tra kết nối
	if ($conn->connect_error) {
		die("Kết nối thất bại: " . $conn->connect_error);
	}

	// Tạo cơ sở dữ liệu nếu chưa tồn tại
	$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
	if ($conn->query($sql) === TRUE) {
		echo "Cơ sở dữ liệu '$dbname' đã được tạo hoặc đã tồn tại.<br>";
	} else {
		die("Lỗi khi tạo cơ sở dữ liệu: " . $conn->error . "<br>");
	}

	// Chọn cơ sở dữ liệu để thực hiện các truy vấn khác
	$conn->select_db($dbname);
?>
`,
				b2: `// index.php
<?php
require('./database/db_connect.php');
?>
`,
				b3: `// database/create_products_table.php
<?php
	require('db_connect.php');
	// Tạo bảng products
	$sql = "CREATE TABLE IF NOT EXISTS products (
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

	if ($conn->query($sql) !== TRUE) {
		echo "Lỗi khi tạo bảng: " . $conn->error;
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
z
