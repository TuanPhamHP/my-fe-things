<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng học về Include, Require trong PHP.
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, <b>`include`</b> và <b>`require`</b> đều được sử dụng để chèn nội dung của một file PHP khác vào
					trong file hiện tại. Mặc dù cả hai đều thực hiện công việc tương tự, nhưng chúng có những sự khác biệt quan
					trọng về cách thức xử lý lỗi.
				</p>
				<PageHeading text="Include" addOnClass="text-left" markedAs="php-include-def" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Include</b> sẽ chèn nội dung của file được chỉ định vào file hiện tại tại <b>`vị trí mà nó được gọi`</b>.
					<br />
					Nếu file không tồn tại hoặc gặp lỗi, PHP sẽ tạo ra một cảnh báo (warning), nhưng sẽ tiếp tục thực thi các đoạn
					mã còn lại.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Như vậy, <b>Include</b> thường được sử dụng khi file không chứa các core module của chương trình, nghĩa là
					chương trình vẫn có thể tiếp tục chạy ngay cả khi file đó không thể được tải. Ngoài ra, người ta thường sử
					dụng include để nhúng các phần view được tách ra làm components riêng.
					<br />
					Ví dụ, sử dụng include để nhúng header hoặc footer trong một trang web thay vi phải viết lại.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<PageHeading text="Require" addOnClass="text-left mt-5" markedAs="php-require-def" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Require</b> cũng chèn nội dung của file được chỉ định vào file hiện tại tại vị trí mà nó được gọi.

					<br />
					Tuy nhiên, nếu file không tồn tại hoặc gặp lỗi, PHP sẽ tạo ra một lỗi nghiêm trọng (fatal error) và sẽ ngừng
					toàn bộ chương trình
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Như vậy, <b>Require</b> thường được sử dụng khi file là các core module của chương trình, nghĩa là chương
					trình sẽ không được phép chạy nếu không có module này.
					<br />
					Ví dụ, sử dụng require cho các module quan trọng như 'giỏ hàng', 'thanh toán' ....
				</p>
				<PageHeading text="Passing Data" addOnClass="text-left mt-5" markedAs="php-passing-data" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Chúng ta có thể truyền dữ liệu vào file được nhúng bằng include hoặc require trong PHP thông qua nhiều cách
					khác nhau như:
				</p>
				<PageHeading text="Biến toàn cục" addOnClass="text-left mt-5" markedAs="php-global-var" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Khi bạn include hoặc require một file, các biến đã được định nghĩa trước đó trong file hiện tại vẫn có sẵn
					trong file được nhúng.
				</p>

				<div class="grid grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="jsx" theme="tomorrow-night-bright" />
					</div>
				</div>

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/php/practice/e_2_1"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
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
				b1: `// dùng include để chèn file a.php
include 'a.php';
`,
				b2: `// Dùng include để nhúng header.
<body>
<?php
include './components/header.php';
?>
<div class="container">
	<h1>Hello, world!</h1>
</div>
</body>`,
				b3: `// dùng require để chèn file a.php
require 'a.php';
`,
				b4: ` // define data tại file gốc
<?php
$tasks = [
	['title' => 'Công việc 1', 'content' => 'Lorem ispum'],
	['title' => 'Công việc 2', 'content' => 'is a nom nom'],
];
foreach ($tasks as $task) {
	# code...
	$me = 'Tuấn';
	include './components/task.php';
};
`,
				b5: `// task.php
<div class="alert alert-primary mb-2" role="alert">
  <?php
  echo $me . '</br>';
  echo $task['title'];  // $task và $me có thể được sử dụng do tính chất của scope
  ?>
</div>
`,
				stringMethods: [
					{
						id: 1,
						name: 'count($array)',
						desc: 'Trả về số phần tử trong mảng. - number',
						syntax: `echo count($fruits); // Output: 3`,
					},
					{
						id: 2,
						name: 'array_push($array, $item1, $item2)',
						desc: 'Thêm một hoặc nhiều phần tử vào cuối mảng. - number',
						syntax: `$lg= array_push($fruits, "Mango", "Pineapple"); </br>
print_r($fruits);`,
					},
					{
						id: 3,
						name: 'array_filter($array, callback:boolean) ',
						desc: 'Lọc ra các phần tử mà tại đó callback return ra "true" trong mảng ban đầu. - array',
						syntax: `$numbers = [1, 2, 3, 4, 5, 6]; </br>
						$evenNumbers = array_filter($numbers, fn($num) => $num % 2 === 0); </br>
print_r($evenNumbers); // Output: [2, 4, 6]`,
					},
					{
						id: 4,
						name: 'array_map(callback:$any, $array) ',
						desc: 'Map mảng mới từ mảng ban đầu. Giá trị phần tử phụ thuộc vào callback-return - array',
						syntax: `$numbers = [1, 2, 3, 4, 5, 6]; </br>
						$evenNumbers = array_filter($numbers, fn($num) => $num % 2 === 0); </br>
print_r($evenNumbers); // Output: [2, 4, 6]`,
					},
					{
						id: 5,
						name: 'array_reduce($array, callback, $initNumber) ',
						desc: 'Gom toàn bộ mảng vào thành 1 giá trị, thường dùng để tính tổng mảng number, gộp mảng string ... - array',
						syntax: `$sum = array_reduce($numbers, fn($carry, $item) => $carry + $item, 0); </br>
echo $sum; // Output: 21`,
					},
					{
						id: 6,
						name: 'array_merge($array)',
						desc: 'Gộp hai hoặc nhiều mảng lại với nhau. - array',
						syntax: `$merged = array_merge($fruits, $age); </br>
print_r($merged);`,
					},
					{
						id: 7,
						name: 'array_keys($array) | array_values($array)',
						desc: 'Trả về tất cả các keys | value của mảng. - array',
						syntax: `$keys = array_keys($age); </br>
$values = array_values($age); </br>
print_r($keys);`,
					},
					{
						id: 8,
						name: 'in_array($item ,$array, $is_strict?:boolean)',
						desc: `Kiểm tra xem một giá trị có tồn tại trong mảng hay không. 
						Hoạt động với cả compound value, nhưng không hoạt động với nested value 
						$is_strict là một optional params để toggle chế độ strict-comparision - boolean`,
						syntax: `if (in_array("Banana", $fruits)) { </br>
    echo "Banana is in the array."; </br>
}`,
					},
					{
						id: 9,
						name: 'array_search($item ,$array, $is_strict?:boolean)',
						desc: 'Tìm kiếm một giá trị trong mảng và trả về khóa tương ứng. - number',
						syntax: `$key = array_search("Orange", $fruits);</br>
if ($key !== false) {</br>
    echo "Orange is at index $key.";</br>
}`,
					},
				] as { id: string | number; name: string; desc: string; syntax: string; label?: string }[],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-11.2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
