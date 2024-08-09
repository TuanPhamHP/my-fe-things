<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này chúng ta sẽ cùng tìm hiểu về các loại biến trong PHP, cách khai báo cũng như tính chất của nó. Tiếp
					theo đó là các Operators thường dùng.
				</p>

				<PageHeading text="Variables" addOnClass="text-left opacity-0" markedAs="php-variables" :lvl="1" />
				<PageHeading text="Khai báo" addOnClass="text-left" markedAs="php-describe" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, ta có thể khai báo biến bằng cách sử dụng dấu <b>`$`</b> theo sau là tên biến. PHP là ngôn ngữ
					loosely typed, có nghĩa là ta không cần phải khai báo kiểu dữ liệu của biến trước khi sử dụng nó. Khi khởi tạo
					và gán dữ liệu cho biến thì PHP sẽ tự định nghĩa kiểu dữ liệu cho biến:
				</p>
				<VCodeBlock
					:code="`// syntax: $varName = value;
<?php
	$name = 'John'; // Chuỗi (string)
	$age = 30; // Số nguyên (integer)
	$height = 175.5; // Số thực (float)
	$isStudent = true; // Boolean (boolean)
	$grades = array(85, 90, 75); // Mảng (array)
	$address = null; // Null (null)
?>`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tuy nhiên, vẫn có một vài quy tắc mà chúng ta cần phải tuân theo khi khai báo biến trong PHP
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span
							>- Tên biến không được chứa khoảng trống, ký tự đặc biệt. EG:
							<div class="px-3">
								<b>$my variable' => ❌ </b>
								<br />
								<b>'$my_variable'=> ✔️</b>
							</div>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span
							>- Tên biến không được bắt đầu bằng số.EG:

							<div class="px-3">
								<b>'$1my_var' => ❌ </b>
								<br />
								<b>'$my_var1'=> ✔️</b>
							</div>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span
							>- Tên biến có phân biệt viết hoa - thường (case-sensitive).EG:
							<div class="px-3">
								<b>'$my_var' và '$My_var' là 2 biến khác nhau. </b>
							</div>
						</span>
					</li>
				</ul>
				<PageHeading text="Scope" addOnClass="text-left" markedAs="php-scope" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Các biến trong PHP được sẽ có phạm vi hoạt động (scope) khác nhau tuỳ thuộc vào cách mà nó được khai báo.
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Scope</th>
								<th scope="col" class="px-5 py-3">Def</th>
								<!-- <th scope="col" class="px-5 py-3">EG</th> -->
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in stringMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th
									v-if="item.label"
									colspan="3"
									scope="row"
									class="px-5 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
								>
									{{ item.label }}
								</th>
								<th
									v-if="!item.label"
									scope="row"
									class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
								>
									{{ item.name }}
								</th>
								<td v-if="!item.label" class="px-5 py-4">{{ item.desc }}</td>
								<!-- <td v-if="!item.label" class="px-5 py-4" v-html="item.syntax"></td> -->
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold text-underline title-lg">Biến cục bộ:</p>
				<p class="text-slate-900 dark:text-white leading-8">
					Dưới đây là ví dụ cho biến cục bộ <b>`$x`</b>, do được khởi tạo trong <b>`showX`</b> nên đây chính là scope
					của nó, khi ra ngoài scope thì ta không thể gọi được tới <b>`$x`</b> nên dẫn đến lỗi.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold text-underline title-lg">Biến toàn cục:</p>
				<p class="text-slate-900 dark:text-white leading-8">
					Dưới đây là ví dụ cho biến toàn cục <b>`$x`</b>, do được khởi tạo ngoài cùng nên đây chính là scope của nó.
					Như vậy, trong file php chúng ta có quyền gọi đến nó bất cứ khi nào cần vì vẫn nằm trong scope của nó.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 font-bold text-underline title-lg">
					Biến siêu toàn cục:
				</p>
				<p class="text-slate-900 dark:text-white leading-8">
					Dưới đây là ví dụ cho biến siêu toàn cục <b>`$_SERVER`</b>, được khởi tạo bởi PHP, chúng ta có thể trỏ tới nó
					bất cứ khi nào ta cần.
				</p>
				<VCodeBlock :code="`echo $_SERVER['HTTP_HOST']; `" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-2"></div>
				<PageHeading text="Static & Global" addOnClass="text-left" markedAs="php-static-global" :lvl="2" />
				<p class="text-slate-900 dark:text-white leading-8">
					<b>`static keyword`</b> trong PHP được sử dụng để khai báo biến hoặc phương thức liên kết với lớp mà không cần
					tạo đối tượng của lớp.
					<br />
					Biến/Phương thức static có thể được truy cập bằng cách sử dụng toán tử phạm vi :: (phạm vi lớp) thay vì ->
					(phạm vi đối tượng).
				</p>
				<VCodeBlock
					:code="`class Counter {
    public static $count = 0;

    public static function increment() {
        self::$count++;
    }

    public static function getCount() {
        return self::$count;
    }
}

Counter::increment(); // Truy cập vào method increment thông qua class thay vì object
echo Counter::getCount();

`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white leading-8">
					<b>`global keyword`</b> trong PHP được sử dụng để truy cập biến toàn cục từ bên trong một hàm hoặc phương
					thức.
				</p>
				<div class="py-2"></div>
				<PageHeading text="Operators" addOnClass="text-left" markedAs="php-operators" :lvl="1" />
				<p class="text-slate-900 dark:text-white leading-8">
					Trong PHP, có nhiều loại toán tử khác nhau, mỗi loại phục vụ một mục đích riêng. Tuỳ theo mục đích mà chúng ta
					phân chia các toán tử thành nhiều loại khác nhau. Dưới đây là một bảng theo nhóm và mô tả các loại toán tử phổ
					biến trong PHP:
				</p>

				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Operators</th>
								<th scope="col" class="px-5 py-3">Def</th>
								<th scope="col" class="px-5 py-3" style="min-width: 200px">EG</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in operators"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th
									v-if="item.label"
									colspan="3"
									scope="row"
									class="px-5 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
								>
									{{ item.label }}
								</th>
								<th
									v-if="!item.label"
									scope="row"
									class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
								>
									{{ item.name }}
								</th>
								<td v-if="!item.label" class="px-5 py-4">{{ item.desc }}</td>
								<td v-if="!item.label" class="px-5 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
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
				b1: `function showX(){
  $x = "100"; // $x là local variable, scope của nó là hàm showX()
  echo "<h1>Giá trị của X ở trong showX là: $x</h1>";
}
showX();
echo "<h1>Giá trị của X ở ngoài showX là: $x</h1>"; // không truy cập được $x`,
				b2: `$x = "100"; // $x là global variable, scope của nó là toàn bộ file php
function showX(){
  echo "<h1>Giá trị của X ở trong showX là: $x</h1>";
}
showX();
echo "<h1>Giá trị của X ở ngoài showX là: $x</h1>";`,
				stringMethods: [
					{
						id: 1,
						name: 'Biến cục bộ (local variables)',
						desc: 'Được khai báo và sử dụng chỉ trong phạm vi của một hàm hoặc một khối mã nhất định.',
						syntax: `function greet() { </br>
  $message = "Hello World!"; </br>
  echo $message; </br>
} </br>
greet(); // Output: Hello World!`,
					},
					{
						id: 2,
						name: 'Biến toàn cục (global variables)',
						desc: ' Được khai báo bên ngoài các hàm và khối mã, có thể được truy cập từ bất kỳ đâu trong project.',
						syntax: `$name = "Alice";</br>

function greet() {</br>
    global $name;</br>
    echo "Hello $name!";</br>
}</br>
greet(); // Output: Hello Alice!`,
					},
					{
						id: 3,
						name: 'Biến siêu toàn cục (superglobal variables)',
						desc: 'Là các biến có sẵn được PHP định nghĩa sẵn và có thể truy cập từ bất kỳ đâu trong project, bao gồm $_POST, $_GET, $_SESSION, $_SERVER, $_COOKIE',
						syntax: `echo round(3.14159, 2); // Output: 4 </br>
						echo floor(3.14159, 2); // Output: 3`,
					},
				] as { id: string | number; name: string; desc: string; syntax: string; label?: string }[],
				operators: [
					{
						id: 0,
						label: 'Toán tử số học (Arithmetic Operators)',
					},

					{
						id: 1,
						name: 'Cộng (+), Trừ (-), Nhân (*), Chia (/), Phần dư (%), Lũy thừa (**)',
						desc: 'Dùng để thực hiện tính toán giữa các value dạng number',
						syntax: `$a = 2; <br/>
$b = 3; <br/>
$result = $a ** $b;<br/> // $result = 8`,
					},
					{
						id: 2,
						label: 'Toán tử gán (Assignment Operators)',
					},
					{
						id: 3,
						name: 'Gán (=)',
						desc: 'Dùng để gán giá trị vào cho một biến khi ta khởi tạo hoặc cập nhật biến.',
						syntax: `$a = 2; <br/>
$b = 3; <br/>`,
					},
					{
						id: 4,
						name: 'Gán cộng (+=), Gán trừ (-=), Gán nhân (*=), Gán chia (/=) ....',
						desc: `Dùng để thực hiện lần lượt: tính toán giá trị mới của biến với một vế cố định là bản thân của nó.
						 Sau đó thực hiện gán giá trị mới vào biến`,
						syntax: `$a = 5; </br>
$a *= 10; </br>
//$a = 50 <=> $a = $a * 10`,
					},
					{
						id: 5,
						label: 'Toán tử so sánh (Comparison Operators)',
					},
					{
						id: 6,
						name: 'So sánh ép kiểu: Bằng (==), Khác (!=)',
						desc: 'Ép kiểu dữ liệu của 2 vế và sau đó so sánh giá trị cuối',
						syntax: `$a = 5; <br/>
$b = '5'; <br/>
var_dump($a == $b); // bool(true)`,
					},
					{
						id: 7,
						name: 'So sánh tuyệt đối: Bằng (===), Khác (!==)',
						desc: 'So sánh kiểu dữ liệu của 2 vế và sau đó so sánh giá trị nếu 2 vế cùng kiểu',
						syntax: `$a = 5; <br/>
$b = '5'; <br/>
var_dump($a !== $b); // bool(true)`,
					},
					{
						id: 8,
						name: 'Toán tử so sánh khác: >, >=, <, <=',
						desc: `So sánh giá trị của 2 vế, nếu kiểu dữ liệu là chuỗi thì so sánh theo thứ tự từ điển (lexicographical order).
						Nếu có cả number và string thì sẽ ưu tiên ép kiểu về number để so sánh.`,
						syntax: `var_dump("apple" < "banana"); // bool(true) </br>
var_dump("cherry" > "banana"); // bool(true) </br>
var_dump(10 > "20"); // bool(false)`,
					},
					{
						id: 9,
						label: 'Toán tử logic (Logical Operators)',
					},

					{
						id: 10,
						name: 'Và (&&, and)',
						desc: 'Trả về true nếu cả hai vế đều là true.',
						syntax: `$x = 40;<br/>
var_dump($x > 5 && 20 > $x);  <br/>// bool(false) <br/>
var_dump($x > "20" and $x !== 25);  <br/>// bool(true)`,
					},
					{
						id: 11,
						name: 'Hoặc (||, or)',
						desc: 'Trả về true nếu một trong hai vế là true.',
						syntax: `$x = 40;<br/>
var_dump($x > 5 || 20 > $x);  <br/>// bool(true) <br/>
var_dump($x < "20" or $x === 25);  <br/>// bool(false)`,
					},
					{
						id: 11,
						name: 'XOR  (xor)',
						desc: 'Trả về true nếu một trong hai biểu thức là true, nhưng không phải cả hai.',
						syntax: `$x = 40;<br/>
var_dump($x > 5 xor 20 > $x);  <br/>// bool(true) <br/>
var_dump($x > "20" xor $x !== 25);  <br/>// bool(false)`,
					},
					{
						id: 13,
						name: 'Đảo (!)',
						desc: 'Ép kiểu dữ liệu về boolean sau đó đảo giá trị 1 lần',
						syntax: `$x = 40;<br/>
$rslt = $x > 5; // true
var_dump(!$rslt);<br/>
// bool(false)`,
					},
					{
						id: 14,
						label: 'Toán tử tăng/giảm (Increment/Decrement Operators)',
					},

					{
						id: 15,
						name: 'Thực hiện trước: Tăng (++$var), Giảm (--$var)',
						desc: 'Tăng, giảm giá trị của biến lên 1, sau đó trả về giá trị mới.',
						syntax: `$a = 5; </br>
echo ++$a; // 6</br>
echo $a; // 6`,
					},
					{
						id: 16,
						name: 'Thực hiện sau: Tăng ($var++), Giảm ($var--)',
						desc: 'Trả về giá trị hiện tại của biến, sau đó tăng, giảm giá trị của biến lên 1.',
						syntax: `$a = 5; </br>
echo $a++; // 5 </br>
echo $a; // 6`,
					},
					{
						id: 17,
						label: 'Toán tử chuỗi (String Operators)',
					},
					{
						id: 18,
						name: 'Nối chuỗi: (.), (.=)',
						desc: 'Nối các chuỗi lại với nhau.',
						syntax: `$str1 = "Hello"; </br>
$str2 = "World"; </br>
$result = $str1 . " " . $str2; </br>
echo $result; </br>
// $result = "Hello World"`,
					},
					{
						id: 19,
						label: 'Toán tử điều kiện (Conditional Operator)',
					},
					{
						id: 20,
						name: 'Toán tử ba ngôi ($a ? $b : $c)',
						desc: 'Trả về một trong hai giá trị dựa trên điều kiện. Gần tương đương với if/else.',
						syntax: `$a = 10; </br>
$b = ($a > 5) ? "Greater" : "Less or equal"; </br>
echo $b; // "Greater"`,
					},
					{
						id: 21,
						label: ' Toán tử gán hợp nhất null (Null Coalescing Assignment Operator)',
					},
					{
						id: 22,
						name: 'Toán tử ($a ? $b : $c)',
						desc: 'Gán giá trị nếu giá trị hiện tại là null.',
						syntax: `$a = null; </br>
$a ??= 10; </br>
echo $a; // 10`,
					},
				] as { id: string | number; name: string; desc: string; syntax: string; label?: string }[],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-7' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
