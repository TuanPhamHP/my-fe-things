<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta cùng tìm hiểu về các kiểu dữ liệu trong PHP, phân biệt và sử dụng chúng.
				</p>

				<PageHeading text="Data Types" addOnClass="text-left" markedAs="php-data-types" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					PHP hỗ trợ nhiều kiểu dữ liệu khác nhau để phù hợp với nhiều nhu cầu lập trình khác nhau. Dưới đây là danh
					sách các kiểu dữ liệu chính trong PHP:
				</p>
				<PageHeading text="Scalar Types" addOnClass="text-left" markedAs="php-scalar-type" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>`Scalar Types`</b> - Hay còn gọi là kiểu dữ liệu nguyên thuỷ, bao gồm:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">1. `Interger`:</b> <span> Là kiểu số nguyên, Ví dụ: <b>`1, 2, 0`</b>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">2. `Float (Double)`:</b> <span> Là kiểu số thưc, Ví dụ: <b>`1.5, 2.2`</b>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">3. `String`:</b> <span> Là kiểu chuỗi, Ví dụ: <b>`hello anh em`</b>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">4. `Boolean`:</b>
						<span> Là kiểu logic, chỉ có <b>`true`</b> hoặc <b>`false`</b>. </span>
					</li>
				</ul>

				<PageHeading text="Compound Types" addOnClass="text-left" markedAs="php-compound-type" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>`Compound Types`</b> - Hay còn gọi là kiểu dữ liệu tổ hợp (từ scalar tpye), hay phức tạp bao gồm:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">1. `Array`:</b>
						<span> Là kiểu Mảng, có thể chứa nhiều loại dữ liệu khác nhau, ví dụ: <b>`[1, "hello", true]`</b>. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">2. `Object`:</b>
						<div class="w-full">
							<span> Đối tượng, được tạo từ các lớp (class). Ví dụ: </span>
							<VCodeBlock
								:code="`<!-- hello-php/index.php -->
<?php
	class User {
			public $name;
			public function __construct($name) {
					$this->name = $name;
			}
	}
	// $user là một object
	$user = new User('John');
	echo $user->name;
?>`"
								highlightjs
								lang="php"
								theme="tomorrow-night-bright"
							/>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>3. `Callable | Function | Anoymous Function`:</b>
						<span> Một kiểu dữ liệu đại diện cho một hàm có thể được gọi. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>4. `Mixed`:</b>
						<span>
							Một kiểu dữ liệu có thể chứa bất kỳ loại dữ liệu nào. Thường được sử dụng trong các chú thích kiểu (type
							annotations)
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>4. `Union`:</b> <span> Cho phép khai báo một biến có thể có nhiều kiểu dữ liệu khác nhau. </span>
					</li>
				</ul>
				<PageHeading text="Special Types" addOnClass="text-left" markedAs="php-special-type" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>`Special Types`</b> - là kiểu dữ liệu đặc biệt về mặt ý nghĩa, bao gồm:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">1. `Null`:</b>
						<span>
							Đại diện cho một biến không có giá trị. Một biến được gán giá trị NULL hoặc đã khởi tạo mà chưa được gán
							giá trị khởi tạo sẽ có kiểu này.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">2. `Resource`:</b>
						<span>
							Một tham chiếu đến một tài nguyên bên ngoài, như một kết nối cơ sở dữ liệu hoặc một handle file. Đây là
							một loại dữ liệu đặc biệt được sử dụng để xử lý tài nguyên bên ngoài.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">Dưới đây là ví dụ cho các kiểu dữ liệu trong PHP</p>
				<div class="py-1">
					<VCodeBlock
						:code="`<?php
// Integer
$intVar = 123;

// Float
$floatVar = 12.34;

// String
$stringVar = 'Hello, World!';

// Boolean
$boolVar = true;

// Array
$arrayVar = [1, 2, 3, 'hello', true];

// Object
class Person {
    public $name;
    public function __construct($name) {
        $this->name = $name;
    }
}
$objectVar = new Person('John');

// Callable
$callableVar = function() {
    return 'This is a callable.';
};

// Resource
$file = fopen('file.txt', 'r');

if ($file) {
		echo 'File opened successfully.';

		// Đọc nội dung của tệp
		while (($line = fgets($file)) !== false) {
				echo $line;
		}

		// Đóng tệp sau khi sử dụng
		fclose($file);
} else {
		echo 'Failed to open the file.';
}

// NULL
$nullVar = NULL;

// Union Types (PHP 8.0)
function exampleFunction(int|float $number) {
    return $number;
}
?>
`"
						highlightjs
						lang="php"
						theme="tomorrow-night-bright"
					/>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Tiếp theo, chúng ta sẽ cùng tìm hiểu về các kiểu dữ liệu này và một số methods phổ biến của chúng.
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
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-4' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
