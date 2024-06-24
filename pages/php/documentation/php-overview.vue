<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ đưa ra khái niệm khái quát về PHP, đồng thời so sánh nhanh
					<FilePath>PHP 7.x</FilePath> vs
					<FilePath>PHP 8.x</FilePath>
					Đồng thời, chúng ta sẽ nói rõ hơn về các phần được nâng cấp tại PHP 8.x
				</p>
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					<b>PHP</b> - "Hypertext Preprocessor" là một ngôn ngữ lập trình phía Server (Server side), Điều này có nghĩa
					là mã PHP được thực thi trên máy chủ web (server-side) và kết quả của nó được gửi đến máy khách (client) dưới
					dạng mã HTML, CSS, JavaScript để hiển thị trên trình duyệt web của người dùng. Điều này cho phép PHP xử lý các
					yêu cầu từ người dùng, thao tác với cơ sở dữ liệu và động cơ xử lý các dữ liệu trước khi gửi kết quả cho user.
				</p>

				<p class="text-slate-900 dark:text-white mb-5 leading-8 font-bold py-2 italic">
					=> PHP là một ngôn ngữ lập trình phía server, có thể được sử dụng để tạo nên các logic phía server hay GUI cho
					phía client.
					<br />
					=> Supports nhiều loại DB như: MySQL, Oracle, MS SQL ...
					<br />
					=> Hoàn toàn miễn phí và tương thích với nhiều loại OS khác nhau như: Linux, Window, MAC OS ...
				</p>

				<div class="py-2"></div>
				<PageHeading text="Version 8.x" addOnClass="text-left" markedAs="php-version" />
				<p class="text-slate-900 dark:text-white mt-5 leading-8">
					Hiện tại chúng ta có 2 version phổ biến nhất của <FilePath>PHP</FilePath> mà đang được sử dụng đó là
					<b>`v7.x`</b> và <b>`v8.x`</b>, trong đó thì version 8.x của PHP được coi như một bản big-update với vô số cải
					tiến, dưới đây là một vài điểm quan trọng của v8.x:
				</p>
				<PageHeading text="JIT" addOnClass="text-left" markedAs="feature-jit" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>JIT</b> - PHP version 8.0 trở đi đã tích hợp JIT (Just In Time) complier vào bản thân PHP. Complier này
					giúp ta cải thiện hiệu suất của các chương trình thông dịch (interpreted). Thay vì thông dịch sang ngôn ngữ
					máy mỗi khi cần thiết, JIT sẽ biên dịch và caching mã được tối ưu hoá, từ đó nâng cao tốc độ thực thi của mã.
				</p>
				<div class="py-2"></div>
				<PageHeading
					text="Internal Functions Handler"
					addOnClass="text-left"
					markedAs="feature-internal-function-handler"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					Cải thiện xử lý các internal functions (hàm nội bộ), PHP version 8.0 trở đi đã xử lý lỗi nội bộ một cách cực
					kì chặt chẽ, thay vì chỉ warning (những phiên bản cũ) thì hiện nay PHP sẽ ngay lập tức throw ra errors. Từ đó
					giảm thiểu các lỗi không xác định khi chúng ta viết chương trình. Ví dụ:
				</p>
				<div class="py-2"></div>

				<VCodeBlock
					:code="`function multiply(int $a, int $b): int {
    return $a * $b;
};
echo multiply(5, '10'); // Lỗi: Argument 2 passed to multiply() must be of the type int, string given
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>

				<div class="py-2"></div>
				<PageHeading text="Named Arguments" addOnClass="text-left" markedAs="feature-named-argument" :lvl="2" />

				<p class="text-slate-900 dark:text-white mt-3 leading-8">
					<b>Named Arguments</b> là một feature mới trong PHP 8.0 cho phép bạn gọi các hàm và phương thức trong PHP bằng
					cách chỉ định tên của các tham số mà bạn muốn truyền, thay vì phải tuân theo thứ tự cụ thể của các tham số như
					trước đây. Ví dụ:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // trước version 8.0
function greet($name, $message) {
    echo 'Hello, $name! $message';
}
// Phải gọi hàm greet theo đúng thứ tự tham số
greet('Alice', 'How are you?'); // Output: Hello, Alice! How are you?
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // version 8.0 trở đi
// Gọi hàm greet mà không cần theo thứ tự tham số, chỉ cần truyền đúng named params
echo 'Hello,'.$name.'! '.$message; // Output: Hello, Alice! How are you?
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<PageHeading
					text="Constructor Property Promotion"
					addOnClass="text-left mt-5"
					markedAs="feature-constructor-property-promotion"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Constructor Property Promotion</b> là một feature mới trong PHP 8.0 giúp đơn giản hóa và rút ngắn cú pháp
					cho việc khai báo và khởi tạo thuộc tính của lớp (class). Tính năng này cho phép bạn khai báo và khởi tạo
					thuộc tính ngay trong định nghĩa hàm khởi tạo (constructor) thay vì phải khai báo riêng các thuộc tính và sau
					đó gán giá trị cho chúng trong constructor. Ví dụ:
				</p>

				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // trước version 8.0
class User {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // version 8.0 trở đi
// Khai báo đồng thời khởi tạo thuộc tính cùng một lúc
class User {
    public function __construct(public string $name, public int $age) {}
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<PageHeading text="Null-safe Operator" addOnClass="text-left mt-5" markedAs="feature-null-safe" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Null-safe Operator - (?->)</b> là một feature mới trong PHP 8.0 giúp đơn giản hóa và rút ngắn cú pháp cho
					việc gọi hoặc truy cập một thuộc tính của đối tượng mà không cần phải kiểm tra <b>`null-able`</b>
					Ví dụ:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // trước version 8.0
if ($user !== null) {
    $name = $user->getName();
} else {
    $name = null;
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // version 8.0 trở đi
$name = $user?->getName();
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<PageHeading text="Union types" addOnClass="text-left mt-5" markedAs="feature-union-types" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Union types</b> là một feature mới trong PHP 8.0 cho phép bạn khai báo rằng một biến, tham số của hàm, hoặc
					giá trị trả về của hàm có thể thuộc nhiều kiểu dữ liệu khác nhau. Tính năng này giúp đảm bảo việc check type
					error của PHP chặt chẽ hơn nhiều. Ví dụ:
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // trước version 8.0
class Number {
    private $number;
    /**
     * @param int|float $value
     */
    public function __construct($value) {
      $this->number = $value;
    }
    public function getValue(){
      return $this->number;
    }
}
$number = new Number('NaN');
echo $number->getValue(); // 'NaN' mà không có lỗi
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // version 8.0 trở đi
class Number {
    public function __construct(private int|float $number) {
    }
    public function getValue(){
      return $this->number;
    }
}
$number = new Number('NaN');
echo $number->getValue(); // Lỗi: type error
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<PageHeading text="Match Expression" addOnClass="text-left mt-5" markedAs="feature-match-expression" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Match Expression</b> là một feature mới trong PHP 8.0 nó được coi như một bản nâng cấp mạnh mẽ của
					'switch-case'.
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Đặc điểm</th>
								<th scope="col" class="px-6 py-3">switch-case</th>
								<th scope="col" class="px-6 py-3">match</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Cần break
								</th>
								<td class="px-6 py-4">Có</td>
								<td class="px-6 py-4">Không</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Return trực tiếp giá trị
								</th>
								<td class="px-6 py-4">Không</td>
								<td class="px-6 py-4">Có</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Kiểu so sánh
								</th>
								<td class="px-6 py-4">Lỏng (loose comparison)</td>
								<td class="px-6 py-4">Chặt (strict comparison)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Operator phân tách
								</th>
								<td class="px-6 py-4">:</td>
								<td class="px-6 py-4">=></td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Hỗ trợ biểu thức (So sánh, nối logic ...)
								</th>
								<td class="px-6 py-4">Không</td>
								<td class="px-6 py-4">Có thể sử dụng trong bất kỳ biểu thức nào</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									Xử lý điều kiện phức tạp
								</th>
								<td class="px-6 py-4">Phải lồng nhiều điều kiện hoặc hàm</td>
								<td class="px-6 py-4">Hỗ trợ nhiều điều kiện phức tạp trong một dòng</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // sử dụng switch-case
switch(8){
	case '8':
		$result = 'Wrong case'; // phải khởi tạo biến trong case do không thể return trực tiếp
	break;
	case 8:
		$result = 'Right case';
	break;
	default:
		$result = 'Unknow case';
};
echo $result; // 'Wrong case' do loose comparison
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // sử dụng match
echo match (8){  // không cần khởi tạo thêm biến do có thể return trực tiếp
	'8' => 'Wrong case',
	8 => 'Right case',
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
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
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
