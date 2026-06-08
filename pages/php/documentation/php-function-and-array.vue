<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng học về Function, Array trong PHP.
				</p>

				<PageHeading text="Function" addOnClass="text-left" markedAs="php-conditional" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, hàm (function) là một khối mã được đặt tên, có thể thực hiện một nhiệm vụ cụ thể và có thể được gọi
					nhiều lần từ các vị trí khác nhau trong mã. Việc sử dụng hàm giúp mã dễ đọc, bảo trì và tái sử dụng. Dưới đây
					là các khái niệm cơ bản về hàm trong PHP và cách sử dụng chúng.
				</p>
				<PageHeading text="Khai báo và gọi hàm" addOnClass="text-left" markedAs="php-fnc-decleare" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Khai báo hàm</b>
					<br />
					Hàm được khai báo bằng từ khóa <b>`function`</b>, theo sau là tên hàm và một cặp dấu ngoặc tròn chứa danh sách
					tham số (nếu có). Các tham số được ngăn cách bởi dấu <b>` , `</b>
					<br />
				</p>
				<VCodeBlock
					:code="`function functionName($a, $b) {
    // code to be executed
}
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Gọi hàm</b>
					<br />
					Để gọi hàm, chỉ cần sử dụng tên hàm kèm theo cặp dấu ngoặc tròn và cung cấp các tham trị (nếu có).
					<br />
				</p>

				<VCodeBlock
					:code="`function sayHello() {
    echo 'Hello, World!';
}

sayHello(); // Output: Hello, World!
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<PageHeading text="Arrow Functions" addOnClass="text-left mt-5" markedAs="php-fnc-arrow" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					PHP 7.4 đã giới thiệu arrow functions, một cú pháp ngắn gọn hơn cho hàm ẩn danh.
					<br />
				</p>
				<VCodeBlock
					:code="`$add = fn($a, $b) => $a + $b;

echo $add(3, 4); // Output: 7
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<PageHeading text="Array" addOnClass="text-left mt-5" markedAs="php-array" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Mảng (Array) trong PHP là một kiểu dữ liệu đặc biệt cho phép bạn lưu trữ nhiều giá trị trong một biến duy
					nhất. Mảng có thể chứa các giá trị của các kiểu dữ liệu khác nhau và có thể truy cập các phần tử của nó thông
					qua chỉ số (index). Dưới đây là một số khái niệm và ví dụ cơ bản về mảng trong PHP.
					<br />
				</p>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Mảng chỉ số (Indexed Array) </b>
					<br />
					Mảng chỉ số là mảng mà các phần tử được truy cập bằng chỉ số số nguyên.
					<br />
				</p>
				<VCodeBlock
					:code="`$fruits = array('Apple', 'Banana', 'Orange'); // sử dụng method array
$newFruits = ['Apple', 'Banana', 'Orange']; // cách khai báo mới sử dụng '[]' từ phiên bản 5.4
echo $fruits[0]; // Apple
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					PHP tự động gán chỉ số bắt đầu từ <b>0</b>. Khi thêm phần tử bằng <b>`$array[]`</b>, PHP lấy index lớn nhất hiện có cộng thêm 1. Khi dùng <b>unset()</b> để xóa, index bị <b>bỏ trống</b> chứ không tự đánh lại.
				</p>
				<VCodeBlock
					:code="`// Thêm phần tử — PHP tự gán index tiếp theo
$fruits[] = 'Mango';   // index = 3 (tự động)
$fruits[] = 'Grapes';  // index = 4

// Lấy phần tử cuối mảng
$last    = end($fruits);                  // 'Grapes'
$lastAlt = $fruits[count($fruits) - 1];  // cách khác

// Xóa phần tử — index KHÔNG được đánh lại
unset($fruits[1]);  // xóa 'Banana'
print_r($fruits);
// Array ( [0] => Apple [2] => Orange [3] => Mango [4] => Grapes )

// Muốn đánh lại index từ 0:
$fruits = array_values($fruits);
// Array ( [0] => Apple [1] => Orange [2] => Mango [3] => Grapes )
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Mảng kết hợp (Associative Array) </b>
					<br />
					Mảng kết hợp là mảng mà các phần tử được truy cập bằng khóa (key) thay vì chỉ số. Gần tương tự như Object.
					<br />
				</p>
				<VCodeBlock
					:code="`$age = ['Peter' => 35, 'Ben' => 37, 'Joe' => 43];
echo $age['Peter']; // 35
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Associative Array phù hợp để mô hình hóa đối tượng có thuộc tính — tương tự <b>object literal</b> trong JavaScript. Dùng <b>isset()</b> để kiểm tra key và <b>unset()</b> để xóa.
				</p>
				<VCodeBlock
					:code="`$user = [
    'name'   => 'Nguyễn Văn A',
    'email'  => 'a@example.com',
    'age'    => 25,
    'active' => true,
];

// Cập nhật / thêm key mới
$user['age']  = 26;         // cập nhật
$user['role'] = 'editor';   // thêm key mới

// Kiểm tra key tồn tại
if (isset($user['email'])) {
    echo 'Email: ' . $user['email'];  // Email: a@example.com
}

// Kiểm tra kể cả khi giá trị là null
if (array_key_exists('role', $user)) {
    echo $user['role'];  // editor
}

// Xóa key
unset($user['active']);
print_r($user);
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>Mảng đa chiều (Multidimensional Array)</b>
					<br />
					Mảng đa chiều là mảng mà các item của nó là một mảng khác (nested).
					<br />
				</p>
				<VCodeBlock
					:code="`$contacts = [
    ['name' => 'Peter', 'email' => 'peter@example.com'],
    ['name' => 'Ben', 'email' => 'ben@example.com'],
    ['name' => 'Joe', 'email' => 'joe@example.com']
];
echo $contacts[1]['name']; // Output: Ben
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Trong thực tế, mảng đa chiều thường là <b>Indexed bên ngoài + Associative bên trong</b> — cấu trúc này phổ biến nhất khi làm việc với dữ liệu từ database hay API.
				</p>
				<VCodeBlock
					:code="`// Dạng phổ biến: danh sách (Indexed) các bản ghi (Associative)
$products = [
    ['id' => 1, 'name' => 'Laptop', 'price' => 25000000, 'stock' => 10],
    ['id' => 2, 'name' => 'Phone',  'price' => 12000000, 'stock' => 25],
    ['id' => 3, 'name' => 'Tablet', 'price' =>  8000000, 'stock' =>  5],
];

echo $products[0]['name'];   // Laptop
echo $products[2]['price'];  // 8000000

// 3 chiều: danh mục → loại → sản phẩm
$catalog = [
    'electronics' => [
        'phones'  => ['iPhone 15', 'Samsung S24', 'Xiaomi 14'],
        'laptops' => ['MacBook Pro', 'Dell XPS'],
    ],
    'clothing' => [
        'men'   => ['T-Shirt', 'Jeans'],
        'women' => ['Dress', 'Blouse'],
    ],
];

echo $catalog['electronics']['phones'][0]; // iPhone 15
echo $catalog['clothing']['men'][1];        // Jeans
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Ở trên là các loại Array ta thường xuyên gặp khi làm việc với PHP. Tiếp theo, chúng ta sẽ nói đến các method
					chuyên dụng để xử lý mảng trong PHP.
				</p>

				<PageHeading text="Ứng dụng thực tế" addOnClass="text-left mt-5" markedAs="php-array-realworld" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Dưới đây là các tình huống thực tế phổ biến mà Array PHP xử lý rất tự nhiên.
				</p>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>1. Giỏ hàng — Shopping Cart</b>
				</p>
				<VCodeBlock
					:code="`$cart = [
    ['name' => 'Laptop',   'price' => 25000000, 'qty' => 1],
    ['name' => 'Chuột',    'price' =>   350000, 'qty' => 2],
    ['name' => 'Bàn phím', 'price' =>   800000, 'qty' => 1],
];

// Tính tổng giỏ hàng
$total = array_reduce($cart, fn($carry, $item) => $carry + $item['price'] * $item['qty'], 0);
echo 'Tổng: ' . number_format($total) . ' VNĐ';  // 26,500,000 VNĐ

// Lấy danh sách tên sản phẩm
$names = array_column($cart, 'name');
// ['Laptop', 'Chuột', 'Bàn phím']
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>2. Hồ sơ người dùng — User Profile</b>
				</p>
				<VCodeBlock
					:code="`$user = [
    'id'          => 42,
    'name'        => 'Trần Thị B',
    'email'       => 'b@example.com',
    'roles'       => ['editor', 'moderator'],        // Indexed trong Associative
    'preferences' => ['theme' => 'dark', 'lang' => 'vi'],
];

// Kiểm tra quyền
if (in_array('admin', $user['roles'])) {
    echo 'Có quyền admin';
} else {
    echo 'Chỉ là: ' . implode(', ', $user['roles']);  // Chỉ là: editor, moderator
}

// Đọc preference lồng nhau
echo $user['preferences']['theme'];  // dark
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					<b>3. Cấu hình ứng dụng — App Config</b>
				</p>
				<VCodeBlock
					:code="`$config = [
    'db' => [
        'host'    => 'localhost',
        'port'    => 3306,
        'name'    => 'my_database',
        'charset' => 'utf8mb4',
    ],
    'mail' => [
        'driver' => 'smtp',
        'host'   => 'smtp.gmail.com',
        'port'   => 587,
    ],
    'debug'     => false,
    'cache_ttl' => 3600,
];

echo $config['db']['host'];    // localhost
echo $config['mail']['port'];  // 587

// Truyền sub-array vào function
function connectDB(array $db): PDO {
    $dsn = 'mysql:host=' . $db['host'] . ';dbname=' . $db['name'];
    return new PDO($dsn, 'root', '');
}
connectDB($config['db']);
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<PageHeading text="Duyệt mảng" addOnClass="text-left mt-5" markedAs="php-array-foreach" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Để duyệt qua một mảng ta có thể sử dụng hàm
					<b>
						<a
							href="/php/documentation/php-statements-loop-n-jump#php-foreach"
							target="_blank"
							rel="noreferrer"
							class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
						>
							foreach
						</a> </b
					>:
					<br />
				</p>
				<VCodeBlock
					:code="`foreach ($fruits as $fruit) {
    echo $fruit . '</br>';
}

foreach ($age as $name => $years) {
    echo '$name là $years tuổi</br>';
}

foreach ($contacts as $contact) {
    echo $contact['name'] . ': ' . $contact['email'] . '</br>';
}
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<PageHeading text="Các methods thông dụng" addOnClass="text-left mt-5" markedAs="php-methods" :lvl="2" />
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Scope</th>
								<th scope="col" class="px-5 py-3">Def</th>
								<th scope="col" class="px-5 py-3">EG</th>
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
								<td v-if="!item.label" class="px-5 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="Bài toán luyện tập" addOnClass="text-left mt-5" markedAs="php-array-exercises" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-2 leading-8 font-semibold">Bài 1 — Thống kê điểm lớp học</p>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Cho mảng điểm số, hãy: (a) tính điểm trung bình, (b) tìm điểm cao nhất, (c) đếm số sinh viên đạt (≥ 5).
				</p>
				<VCodeBlock
					:code="`$scores = [7.5, 4.0, 8.0, 5.5, 9.0, 3.5, 6.0, 8.5];

// TODO: tính trung bình, điểm cao nhất, số đạt
// Gợi ý: array_sum(), max(), array_filter(), count()
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<Disclosure v-slot="{ open }">
					<DisclosureButton
						class="flex items-center gap-2 my-2 px-3 py-1.5 rounded bg-neutral-200 dark:bg-gray-700 text-sm font-medium text-slate-800 dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-600 transition"
					>
						<span>{{ open ? 'Ẩn đáp án' : 'Xem đáp án' }}</span>
					</DisclosureButton>
					<DisclosurePanel>
						<VCodeBlock
							:code="`$avg    = array_sum($scores) / count($scores);                    // 6.5
$max    = max($scores);                                             // 9.0
$passed = count(array_filter($scores, fn($s) => $s >= 5));         // 6

echo 'Trung bình: ' . $avg;
echo 'Cao nhất: '   . $max;
echo 'Số đạt: '     . $passed;
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</DisclosurePanel>
				</Disclosure>

				<p class="text-slate-900 dark:text-white my-2 leading-8 font-semibold">Bài 2 — Lọc và sắp xếp sản phẩm</p>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Từ danh sách sản phẩm: (a) lọc sản phẩm còn hàng (stock > 0), (b) sắp xếp theo giá tăng dần, (c) lấy mảng chỉ chứa tên sản phẩm.
				</p>
				<VCodeBlock
					:code="`$products = [
    ['name' => 'Laptop',  'price' => 25000000, 'stock' => 3],
    ['name' => 'Phone',   'price' => 12000000, 'stock' => 0],
    ['name' => 'Tablet',  'price' =>  8000000, 'stock' => 5],
    ['name' => 'Earbuds', 'price' =>  1200000, 'stock' => 12],
];

// TODO: lọc còn hàng → sắp xếp giá tăng dần → lấy tên
// Gợi ý: array_filter(), array_values(), usort(), array_column()
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<Disclosure v-slot="{ open }">
					<DisclosureButton
						class="flex items-center gap-2 my-2 px-3 py-1.5 rounded bg-neutral-200 dark:bg-gray-700 text-sm font-medium text-slate-800 dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-600 transition"
					>
						<span>{{ open ? 'Ẩn đáp án' : 'Xem đáp án' }}</span>
					</DisclosureButton>
					<DisclosurePanel>
						<VCodeBlock
							:code="`// (a) Lọc còn hàng, reset index
$inStock = array_values(array_filter($products, fn($p) => $p['stock'] > 0));

// (b) Sắp xếp theo giá tăng dần (spaceship operator)
usort($inStock, fn($a, $b) => $a['price'] <=> $b['price']);

// (c) Lấy cột 'name'
$names = array_column($inStock, 'name');
print_r($names);
// ['Earbuds', 'Tablet', 'Laptop']
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</DisclosurePanel>
				</Disclosure>

				<p class="text-slate-900 dark:text-white my-2 leading-8 font-semibold">Bài 3 — Danh bạ điện thoại</p>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Xây dựng danh bạ đơn giản bằng Associative Array: (a) thêm liên lạc, (b) tìm số điện thoại theo tên, (c) xóa liên lạc.
				</p>
				<VCodeBlock
					:code="`$phonebook = [
    'An'   => '0901 234 567',
    'Bình' => '0912 345 678',
    'Chi'  => '0923 456 789',
];

// TODO: hoàn thiện 3 hàm dưới
function addContact(array &$book, string $name, string $phone): void { /* ... */ }
function findContact(array $book, string $name): ?string { /* ... */ }
function removeContact(array &$book, string $name): void { /* ... */ }
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<Disclosure v-slot="{ open }">
					<DisclosureButton
						class="flex items-center gap-2 my-2 px-3 py-1.5 rounded bg-neutral-200 dark:bg-gray-700 text-sm font-medium text-slate-800 dark:text-white hover:bg-neutral-300 dark:hover:bg-gray-600 transition"
					>
						<span>{{ open ? 'Ẩn đáp án' : 'Xem đáp án' }}</span>
					</DisclosureButton>
					<DisclosurePanel>
						<VCodeBlock
							:code="`function addContact(array &$book, string $name, string $phone): void {
    $book[$name] = $phone;
}

function findContact(array $book, string $name): ?string {
    return $book[$name] ?? null;
}

function removeContact(array &$book, string $name): void {
    unset($book[$name]);
}

// Sử dụng
addContact($phonebook, 'Dũng', '0934 567 890');
echo findContact($phonebook, 'Bình');   // 0912 345 678
var_dump(findContact($phonebook, 'Hoa')); // NULL
removeContact($phonebook, 'An');
print_r($phonebook);
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</DisclosurePanel>
				</Disclosure>

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/php/practice/e_1"
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-10' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
