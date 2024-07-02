<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng học về Class, Object trong PHP.
				</p>

				<PageHeading text="Class" addOnClass="text-left" markedAs="php-class" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, Lớp (Class) là một mẫu (template) cho các đối tượng. Nó định nghĩa các thuộc tính (properties) và
					phương thức (methods) mà một đối tượng cụ thể có thể có.
				</p>
				<PageHeading text="Khai báo" addOnClass="text-left" markedAs="php-class-def" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Khai báo định nghĩa Lớp</b>
					<br />
					Class được khai báo bằng từ khóa <b>`class`</b>, theo sau là tên lớp và một cặp curly braces (`{}`) chứa các
					<b>`properties`</b> và <b>`methods`</b>
					<br />
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">1. `Properties`:</b>
						<div>
							Được dùng để định nghĩa các thuộc tính của class <b>`Person`</b> như <b>name, age, address</b>. Trong đó
							ta có 3 loại property là:
							<br />
							<b>`public`</b> - các properties có thể truy cập ở ngoài class, tức là khi khởi tạo một instance từ Person
							thì ta có quyền trỏ đến name tại instance đó.
							<br />
							<b>`protected`</b> - các properties chỉ có thể truy cập từ bên trong lớp Person và các lớp kế thừa
							(subclass) nó.
							<br />
							<b>`private`</b> - các properties chỉ có thể truy cập từ bên trong lớp Person.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">2. `Methods`:</b>
						<div>
							Được dùng để định nghĩa các phương thức của class <b>`Person`</b> như
							<b>getDetails(), getAge(), getAddress()</b>. Tương tự như <b>`properties`</b> ta cũng có 3 loại là
							<b>`public , protected, private`</b>
							<br />
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b class="min-w-[150px]">3. `Constructor`:</b>
						<div>
							Được dùng để tạo ra một intance của class <b>`Person`</b> với context là các params được truyền vào.
							<br />
							Ngoài ra, các subclass có thể gọi constructor của lớp cha để khởi tạo các thuộc tính bằng syntax:
							parent::__construct(); như dưới đây:
							<div class="mt-2"></div>
							<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
						</div>
					</li>
				</ul>

				<PageHeading text="Object" addOnClass="text-left mt-5" markedAs="php-object" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Đối tượng (Object) là một thực thể cụ thể (instance) của một Class. Khi bạn tạo một đối tượng từ một Class,
					bạn cần truy cập tới Class đó, dùng từ khoá new để khởi tạo và cung cấp context tương ứng với constructor của
					class. <br />
					Dưới đây là ví dụ của việc khởi tạo một Object là instance của <b>`Person`</b>
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/php/practice/e_2"
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
				b1: `// Định nghĩa lớp
class Person {
    // Thuộc tính công khai
    public $name;
    
    // Thuộc tính bảo vệ
    protected $age;
    
    // Thuộc tính riêng tư
    private $address;
    
    // Constructor
    public function __construct($name, $age, $address) {
        $this->name = $name;
        $this->age = $age;
        $this->address = $address;
    }
    
    // Phương thức công khai
    public function getDetails() {
        return $this->name . ' năm nay ' . $this->age . ' xuân xanh. Địa chỉ hiện tại là ' . $this->address . '.';
    }
    
    // Phương thức bảo vệ
    protected function getAge() {
        return $this->age;
    }
    
    // Phương thức riêng tư
    private function getAddress() {
        return $this->address;
    }
}
`,
				b2: `// Tạo đối tượng từ lớp Person
$person = new Person('Phạm Anh Tuấn', 27, 'Hà Nội, Việt Nam');
echo $person->getDetails(); // Output: Phạm Anh Tuấn năm nay 27 xuân xanh. Địa chỉ hiện tại là Hà Nội, Việt Nam.`,
				b3: `// ... class Celeb extends từ Person
	public function __construct($name, $age, $address, $quote) {
	// Gọi constructor của lớp cha là Person
	parent::__construct($name, $age, $address);
	$this->quote = $quote;
}`,

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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-11' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
