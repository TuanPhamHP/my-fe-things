<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
			
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta cùng tìm hiểu về cấu trúc câu lệnh của PHP, một số syntax basic nhất 
					trong PHP.
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="php-syntax" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tiếp theo là syntax cơ bản của <FilePath>php</FilePath>
				</p>
				<div class="py-1">
					<VCodeBlock
						:code="`<!-- hello-php/index.php -->
<?php
	echo 'My first PHP script!';
?>  `"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Rất giống với <FilePath>HTML</FilePath> nhỉ. Lưu ý là một block code của <FilePath>PHP</FilePath>
					được bắt đầu bằng <FilePath>{{ `<?php` }}</FilePath> và kết thúc với <FilePath>{{ `?>` }}</FilePath>.
					Ở giữa chúng chính là vùng cho phép chúng ta viết code PHP.
					<br>
					Ở đây chúng ta sẽ học câu lệnh đầu tiên là <FilePath>echo</FilePath>, đây là
					một câu lệnh cực kì phổ biến trong PHP, tác dụng của nó là in nội dung ra màn hình hoặc gửi nó về phía 
					client qua trình duyệt web.
					<br>
			
				</p>
				<PageHeading text="Running by Command Prompt" addOnClass="text-left" markedAs="php-command-promt"  :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Chúng ta có thể sử dụng 'Command Prompt' để chạy file <FilePath>index.php</FilePath> ở trên,
					mở terminal tại địa chỉ của folder 'hello-php' và chạy:
				</p>
				<FakeTerminalUI :textCoppy="'php index.php'">
					<p>php index.php</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Ta được kết quả:
				</p>
				<VCodeBlock
						:code="`PS C:/xampp/htdocs/hello-php> php index.php
My first PHP script!`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>

				<PageHeading text="Serve by XAMPP" addOnClass="text-left mt-5" markedAs="php-using-xampp" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Hoặc phổ biến hơn, chúng ta sẽ sử dụng XAMPP để giả lập môi trường và thực thi code php của chúng ta trên đó, 
					Xem lại bài 
					<a
						href="/php/documentation/installation"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
					PHP - Installation
					</a>
					để set-up. Truy cập <FilePath> http://localhost/hello-php/ </FilePath> để view.
					Với việc setup XAMPP ta có thể sử dụng HTML template ngay trong file PHP:
				</p>
				<div class="py-2"></div>
				<VCodeBlock
						:code="`<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
</head>
<body>
<h1>
	<?php
 	 print('Hello guys, I am PHP');
	?>
</h1>
</body>
</html>`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>

				<div class="py-2"></div>
				<PageHeading text="Comments" addOnClass="text-left mt-5" markedAs="php-comment" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Comments trong nhiều ngôn ngữ lập trình là một feature quan trọng, nó giúp chú
					thích ý nghĩa của code, note lại những logic quan trọng hoặc được coi như một phần
					document của dự án. Trong PHP ta có thể tạo ra comments bằng syntax sau:
				</p>
				<VCodeBlock
						:code="`// Đây là single-line comment
/*
	Đây là 
	multi-line 
	comment
*/`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>
					<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Các comment lines sẽ được bỏ qua trong quá trình chạy của dự án.
				</p>

				<PageHeading text="Các Lệnh Phổ Biến Trong PHP" addOnClass="text-left mt-5" markedAs="php-common-commands" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Dưới đây là một số lệnh và hàm cực kì thường gặp trong PHP mà người mới bắt đầu cần nắm vững.
					Hiểu rõ chúng sẽ giúp bạn debug, in dữ liệu và kiểm soát luồng chương trình hiệu quả hơn.
				</p>

				<!-- ========== echo ========== -->
				<PageHeading text="echo" addOnClass="text-left mt-5" markedAs="php-echo" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>echo</FilePath> là một <strong>language construct</strong> (không phải function) dùng để
					<strong>in một hoặc nhiều chuỗi</strong> ra màn hình / trình duyệt. Đây là lệnh xuất dữ liệu
					phổ biến nhất trong PHP.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="echoSyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="echoDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<FilePath>echo</FilePath> có thể in nhiều giá trị cùng lúc bằng cách phân cách bằng dấu phẩy,
					và không trả về giá trị (return <FilePath>void</FilePath>). Đây là điểm khác biệt so với <FilePath>print</FilePath>.
				</p>

				<!-- ========== print ========== -->
				<PageHeading text="print" addOnClass="text-left mt-5" markedAs="php-print" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>print</FilePath> cũng là một language construct tương tự <FilePath>echo</FilePath>, dùng để
					<strong>in một chuỗi ra màn hình</strong>. Điểm khác biệt là <FilePath>print</FilePath> luôn
					<strong>trả về giá trị <FilePath>1</FilePath></strong>, vì vậy có thể dùng trong biểu thức.
					Tuy nhiên, <FilePath>print</FilePath> chỉ nhận <strong>một tham số</strong> duy nhất.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="printSyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="printDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<!-- ========== var_dump ========== -->
				<PageHeading text="var_dump()" addOnClass="text-left mt-5" markedAs="php-var-dump" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>var_dump()</FilePath> là hàm dùng để <strong>in thông tin chi tiết</strong> về một
					biến, bao gồm cả <strong>kiểu dữ liệu (type)</strong> và <strong>giá trị (value)</strong>.
					Đây là công cụ debug cực kì hữu ích khi bạn muốn kiểm tra biến đang chứa gì.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="varDumpSyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="varDumpDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Output sẽ hiển thị dạng: <FilePath>type(value)</FilePath> — ví dụ <FilePath>int(42)</FilePath>,
					<FilePath>string(5) "hello"</FilePath>, <FilePath>bool(true)</FilePath>.
					Rất hữu ích khi debug để biết chính xác biến đang có kiểu gì.
				</p>

				<!-- ========== print_r ========== -->
				<PageHeading text="print_r()" addOnClass="text-left mt-5" markedAs="php-print-r" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>print_r()</FilePath> in thông tin về một biến theo dạng <strong>dễ đọc (human-readable)</strong>,
					đặc biệt hữu ích với <strong>array</strong> và <strong>object</strong>. Khác với
					<FilePath>var_dump()</FilePath>, nó không hiển thị kiểu dữ liệu nhưng output gọn gàng và dễ nhìn hơn.
					Nếu truyền tham số thứ hai là <FilePath>true</FilePath>, hàm sẽ <strong>trả về chuỗi</strong> thay vì in ra.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="printRSyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="printRDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<!-- ========== isset ========== -->
				<PageHeading text="isset()" addOnClass="text-left mt-5" markedAs="php-isset" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>isset()</FilePath> kiểm tra xem một biến <strong>đã được khai báo</strong> và
					<strong>khác <FilePath>null</FilePath></strong> hay chưa. Trả về <FilePath>true</FilePath> nếu biến
					tồn tại và không phải null, ngược lại trả về <FilePath>false</FilePath>.
					Đây là cách phổ biến để kiểm tra dữ liệu từ form hay query string.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="issetSyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="issetDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<!-- ========== empty ========== -->
				<PageHeading text="empty()" addOnClass="text-left mt-5" markedAs="php-empty" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>empty()</FilePath> kiểm tra xem một biến có <strong>rỗng (empty)</strong> không.
					Trả về <FilePath>true</FilePath> nếu biến là một trong các giá trị: <FilePath>""</FilePath>,
					<FilePath>0</FilePath>, <FilePath>"0"</FilePath>, <FilePath>null</FilePath>,
					<FilePath>false</FilePath>, <FilePath>[]</FilePath> (array rỗng) hoặc chưa được khai báo.
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="emptySyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="emptyDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<!-- ========== die / exit ========== -->
				<PageHeading text="die() và exit()" addOnClass="text-left mt-5" markedAs="php-die-exit" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<FilePath>die()</FilePath> và <FilePath>exit()</FilePath> đều dùng để
					<strong>dừng thực thi script PHP ngay lập tức</strong>. Hai lệnh này hoàn toàn tương đương nhau.
					Bạn có thể truyền vào một chuỗi để in ra trước khi dừng, hoặc một số nguyên để làm
					<strong>exit code</strong> (thường dùng trong CLI).
				</p>
				<p class="text-slate-900 dark:text-white mt-3 leading-8 font-semibold">Syntax:</p>
				<VCodeBlock
					:code="dieSyntaxCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-4 leading-8 font-semibold">Ví dụ:</p>
				<VCodeBlock
					:code="dieDemoCode"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Lệnh <FilePath>die()</FilePath> thường được dùng kết hợp với kiểm tra lỗi kết nối database hoặc
					file — nếu có lỗi thì dừng script và thông báo ngay, tránh để chương trình chạy tiếp với
					trạng thái không hợp lệ.
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
				echoSyntaxCode: `<?php
echo "Chuỗi thứ nhất";
echo "Chuỗi 1", " Chuỗi 2", " Chuỗi 3"; // in nhiều giá trị cùng lúc`,
				echoDemoCode: `<?php
$name = "PHP";
$version = 8;

echo "Xin chào, tôi là " . $name . "!";
// Output: Xin chào, tôi là PHP!

echo "Phiên bản hiện tại: $version";
// Output: Phiên bản hiện tại: 8

echo "<h1>Tiêu đề HTML</h1>"; // echo có thể xuất cả HTML tag

// In nhiều giá trị, phân cách bằng dấu phẩy (không dùng được với print)
echo "Hello", " ", "World!";
// Output: Hello World!`,
				printSyntaxCode: `<?php
print "Nội dung cần in";
// hoặc
print("Nội dung cần in");`,
				printDemoCode: `<?php
$lang = "PHP";

print "Học lập trình $lang rất vui!";
// Output: Học lập trình PHP rất vui!

// print luôn trả về 1, nên có thể dùng trong biểu thức
$result = print("Hello!");
echo $result; // Output: 1`,
				varDumpSyntaxCode: `<?php
var_dump($variable);
var_dump($var1, $var2, $var3); // nhiều biến cùng lúc`,
				varDumpDemoCode: `<?php
$age     = 25;
$name    = "Alice";
$active  = true;
$score   = 9.5;
$hobbies = ["coding", "reading"];

var_dump($age);      // int(25)
var_dump($name);     // string(5) "Alice"
var_dump($active);   // bool(true)
var_dump($score);    // float(9.5)
var_dump($hobbies);
// array(2) {
//   [0] => string(6) "coding"
//   [1] => string(7) "reading"
// }`,
				printRSyntaxCode: `<?php
print_r($variable);
print_r($variable, true); // trả về string thay vì in ra`,
				printRDemoCode: `<?php
$user = [
    "name" => "Bob",
    "age"  => 30,
    "tags" => ["php", "mysql"],
];

print_r($user);
// Array
// (
//     [name] => Bob
//     [age]  => 30
//     [tags] => Array
//         (
//             [0] => php
//             [1] => mysql
//         )
// )

// Lấy output thành chuỗi để lưu hoặc xử lý tiếp
$output = print_r($user, true);
echo "<pre>" . $output . "</pre>"; // hiển thị đẹp trên trình duyệt`,
				issetSyntaxCode: `<?php
isset($variable)           // kiểm tra 1 biến
isset($var1, $var2, ...)   // kiểm tra nhiều biến, tất cả phải isset thì mới true`,
				issetDemoCode: `<?php
$username = "Alice";
$email    = null;

var_dump(isset($username));   // bool(true)  — đã khai báo và khác null
var_dump(isset($email));      // bool(false) — là null
var_dump(isset($password));   // bool(false) — chưa khai báo

// Ứng dụng thực tế: kiểm tra dữ liệu từ form
if (isset($_POST["username"])) {
    echo "Người dùng đã nhập: " . $_POST["username"];
} else {
    echo "Chưa có dữ liệu từ form.";
}`,
				emptySyntaxCode: `<?php
empty($variable) // trả về true nếu biến rỗng hoặc chưa khai báo`,
				emptyDemoCode: `<?php
var_dump(empty(""));        // bool(true)  — chuỗi rỗng
var_dump(empty(0));         // bool(true)  — số 0
var_dump(empty("0"));       // bool(true)  — chuỗi "0"
var_dump(empty(null));      // bool(true)  — null
var_dump(empty(false));     // bool(true)  — false
var_dump(empty([]));        // bool(true)  — array rỗng
var_dump(empty($noExist));  // bool(true)  — chưa khai báo

var_dump(empty("hello"));   // bool(false) — chuỗi có nội dung
var_dump(empty(42));        // bool(false) — số khác 0
var_dump(empty([1, 2]));    // bool(false) — array có phần tử

// Ứng dụng: validate input
$searchQuery = "";
if (empty($searchQuery)) {
    echo "Vui lòng nhập từ khoá tìm kiếm.";
}`,
				dieSyntaxCode: `<?php
die();            // dừng script không thông báo
die("Thông báo"); // in thông báo rồi dừng
die(1);           // dừng với exit code 1 (dùng trong CLI)

exit();           // hoàn toàn tương tự die()
exit("Thông báo");`,
				dieDemoCode: `<?php
// Ví dụ kiểm tra kết nối database
$conn = mysqli_connect("localhost", "root", "", "mydb");

if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
    // Script dừng tại đây nếu kết nối lỗi
}

echo "Kết nối thành công!";

// Ví dụ kiểm tra file tồn tại
$file = "config.php";
if (!file_exists($file)) {
    die("Lỗi: File $file không tồn tại.");
}

include $file;
echo "File đã được load thành công!";`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
