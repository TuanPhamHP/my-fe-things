<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Single quote vs Double quote" addOnClass="text-left" markedAs="single-vs-double" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP có 2 cách khai báo chuỗi: <FilePath>'single quote'</FilePath> và
					<FilePath>"double quote"</FilePath>. Nhìn giống nhau nhưng khác biệt ở 2 điểm cốt lõi:
					<b>nội suy biến</b> (có thay <FilePath>$var</FilePath> trong chuỗi thành giá trị không) và
					<b>escape sequence</b> (có hiểu <FilePath>\n</FilePath>, <FilePath>\t</FilePath> không).
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th class="px-5 py-3">Đặc điểm</th>
								<th class="px-5 py-3">Single quote <FilePath>'x'</FilePath></th>
								<th class="px-5 py-3">Double quote <FilePath>"x"</FilePath></th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Nội suy biến</th>
								<td class="px-5 py-4">✗ Không — <FilePath>$var</FilePath> in ra literal</td>
								<td class="px-5 py-4">✓ Có — <FilePath>$var</FilePath> được thay bằng giá trị</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Escape sequences</th>
								<td class="px-5 py-4">
									Chỉ <FilePath>\'</FilePath> và <FilePath>\\</FilePath>
								</td>
								<td class="px-5 py-4">
									Đầy đủ: <FilePath>\n \t \r \" \$ \\</FilePath>
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Escape ký tự nháy</th>
								<td class="px-5 py-4"><FilePath>\'</FilePath> (hoặc chuyển sang dùng <FilePath>"</FilePath>)</td>
								<td class="px-5 py-4"><FilePath>\"</FilePath> (hoặc chuyển sang dùng <FilePath>'</FilePath>)</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th class="px-5 py-4 font-semibold text-gray-900 dark:text-white">Hiệu năng</th>
								<td class="px-5 py-4">Nhanh hơn <b>rất nhẹ</b> (parser không quét biến)</td>
								<td class="px-5 py-4">Chậm hơn không đáng kể — modern PHP tối ưu tốt</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading
					text="Ví dụ đối chiếu"
					addOnClass="text-left mt-3"
					markedAs="single-vs-double-eg"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cùng 1 biến <FilePath>$name = 'Tuan';</FilePath>, so sánh output khi dùng 2 loại nháy:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bQuoteExample" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading
					text="Nội suy biến phức tạp — dùng { }"
					addOnClass="text-left mt-3"
					markedAs="curly-quote"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Khi cần nội suy array element, object property, hay biến trong context lằng nhằng, bọc trong
					<FilePath>{ }</FilePath> để PHP hiểu rõ ranh giới:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bCurlyExample" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading
					text="Heredoc &amp; Nowdoc — chuỗi nhiều dòng"
					addOnClass="text-left mt-3"
					markedAs="heredoc"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Khi cần chuỗi nhiều dòng (HTML template, SQL query dài), PHP có 2 syntax:
					<FilePath>&lt;&lt;&lt;LABEL</FilePath> (heredoc — giống double quote, có nội suy) và
					<FilePath>&lt;&lt;&lt;'LABEL'</FilePath> (nowdoc — giống single quote, literal, LABEL đặt trong nháy đơn).
				</p>
				<ClientOnly>
					<VCodeBlock :code="bHeredoc" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>Khi nào dùng cái nào?</b>
					</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm mt-2">
						<li>Chuỗi thuần literal, không có biến — dùng <b>single quote</b>. Rõ ý "đây là literal".</li>
						<li>
							Chuỗi có nội suy biến hoặc cần <FilePath>\n</FilePath>, <FilePath>\t</FilePath> — dùng
							<b>double quote</b>.
						</li>
						<li>SQL / HTML nhiều dòng có nội suy — dùng <b>heredoc</b>; nếu không có biến — <b>nowdoc</b>.</li>
						<li>
							Ưu tiên nội suy <FilePath>"Xin chào $name"</FilePath> thay vì ghép chuỗi
							<FilePath>'Xin chào ' . $name</FilePath> — dễ đọc hơn nhiều.
						</li>
					</ul>
				</div>

				<PageHeading text="String methods" addOnClass="text-left mt-5" markedAs="php-string-method" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này chúng ta sẽ tìm hiểu về String trong PHP, một số methods thường hay sử dụng và luyện tập:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-6 py-3">Function</th>
								<th scope="col" class="px-6 py-3">Def</th>
								<th scope="col" class="px-6 py-3">Eg</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in stringMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									{{ item.name }}
								</th>
								<td class="px-6 py-4">{{ item.desc }}</td>
								<td class="px-6 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white mt-5 leading-8">Thực hiện các bài sau:</p>
				<div class="grid grid-cols-3 gap-4">
					<div class="bg-neutral-300 rounded px-2 py-2 col-span-1 border border-neutral-800 dark:border-neutral-100">
						<p class="text-center mb-2 font-semibold">Bài 1</p>
						<p>
							cho chuỗi "$oldTxt", tạo chuỗi "$newTxt" mới bằng cách viết hoa các kí tự đầu của chuỗi $oldTxt và thay
							thế chuỗi "World" thành "PHP"
						</p>
						<div class="border-t border-slate-700 my-1"></div>
						<div class="pl-2 pt-2">
							<p>$oldTxt = "hello world!";</p>
							<p>=> Output: $newTxt = 'Hello PHP';</p>
						</div>
					</div>
					<div class="bg-neutral-300 rounded px-2 py-2 col-span-1 border border-neutral-800 dark:border-neutral-100">
						<p class="text-center mb-2 font-semibold">Bài 2</p>
						<p class="mb-2">viết một function để format các chuỗi dài quá 15 ký tự, phần dư thay bằng '...':</p>

						<div class="border-t border-slate-700 my-1"></div>
						<pre>
function getFormattedFileName(string $str){
	// logic 
}</pre
						>
						<div class="pl-2 pt-2">
							<p>$originName = "file_bao_cao_24.xlsx"</p>
							<p>$formatName = getFormattedFileName($originName);</p>
							<p>=> Output: $formatName = 'file_bao_cao_24...';</p>
						</div>
					</div>
					<div class="bg-neutral-300 rounded px-2 py-2 col-span-1 border border-neutral-800 dark:border-neutral-100">
						<p class="text-center mb-2 font-semibold">Bài 3</p>
						<p class="mb-2">
							viết một function để kiểm tra chuỗi truyền vào có phải email không. Nếu đúng thì in ra email, sai thì in
							ra "Email sai định dạng"
						</p>
						<div class="border-t border-slate-700 my-1"></div>
						<pre>
function isEmail(string $str){
	// logic 
}</pre
						>
						<div class="pl-2 pt-2">
							<p>$str1 = "example@gmail.com"</p>
							<p>$str2 = "uidoioi.com"</p>
							<p>$rslt1 = isEmail($str1);</p>
							<p>$rslt2 = isEmail($str2);</p>
							<p>=> Output: <br />$rslt1 => 'example@gmail.com'; <br />$rslt2 => 'Email sai định dạng';</p>
						</div>
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
				bQuoteExample: `<?php
$name = 'Tuan';

// ---- Single quote — literal, KHÔNG nội suy ----
echo 'Hello, $name';           // Output: Hello, $name    ← nguyên văn ký tự $name
echo 'Line1\\nLine2';           // Output: Line1\\nLine2   ← \\n là 2 ký tự literal

// ---- Double quote — nội suy + escape hoạt động ----
echo "Hello, $name";           // Output: Hello, Tuan
echo "Line1\\nLine2";           // Output 2 dòng:
                               //   Line1
                               //   Line2

// ---- Escape dấu nháy khi chứa trong cùng loại ----
echo 'It\\'s me';               // Output: It's me         ← \\' để literal '
echo "She said \\"hi\\"";        // Output: She said "hi"   ← \\" để literal "

// ---- Hoặc đổi loại nháy để tránh escape rối mắt ----
echo "It's me";                // Output: It's me         ← không cần escape
echo 'She said "hi"';          // Output: She said "hi"   ← không cần escape`,
				bCurlyExample: `<?php
$user = ['name' => 'Tuan', 'age' => 28];

// Biến đơn giản — không cần { } (nhưng có cũng không sai)
echo "Xin chào $name";               // OK
echo "Xin chào {$name}";             // OK — rõ ràng hơn khi có text dính liền

// Array element — RẤT NÊN dùng { }
echo "Xin chào $user[name]";         // Output: Xin chào Tuan (cú pháp cũ, không quote key)
echo "Xin chào {$user['name']}";     // Output: Xin chào Tuan ← chuẩn, quote key rõ ràng

// Object property — BẮT BUỘC { } khi có gì đó phía sau
$product = new stdClass();
$product->name = 'iPhone';
echo "Sản phẩm: {$product->name}";   // Output: Sản phẩm: iPhone
echo "Sản phẩm: $product->name";     // OK nhưng không dùng được nếu tiếp theo có ký tự chữ

// Method call — KHÔNG nội suy được trong chuỗi
// Phải ghép ngoài bằng dấu . :
echo 'Upper: ' . strtoupper($user['name']);  // Output: Upper: TUAN`,
				bHeredoc: `<?php
$name = 'Tuan';
$user = ['age' => 28];

// ---- HEREDOC — giống double quote, có nội suy ----
$html = <<<HTML
<div class="card">
    <h1>Xin chào $name</h1>
    <p>Tuổi: {$user['age']}</p>
</div>
HTML;

echo $html;
// Output:
// <div class="card">
//     <h1>Xin chào Tuan</h1>
//     <p>Tuổi: 28</p>
// </div>

// ---- NOWDOC — giống single quote, literal (LABEL trong nháy đơn) ----
$sql = <<<'SQL'
SELECT id, name
FROM users
WHERE active = 1 AND name LIKE '%$keyword%'
SQL;

echo $sql;
// $keyword giữ nguyên literal, không bị nội suy — an toàn cho template SQL/regex

// Lưu ý cú pháp:
// - LABEL (HTML, SQL...) đặt tự do, viết HOA cho dễ nhìn.
// - Dòng đóng LABEL phải ở cột 0 (không thụt đầu dòng) trên PHP 7.2 —
//   PHP 7.3+ cho phép thụt đầu dòng, sẽ tự strip indent tương ứng.`,
				stringMethods: [
					{
						id: 1,
						name: 'strlen(string)',
						desc: 'Trả ra độ dài của chuỗi - number',
						syntax: `strlen('Hehe') // Output: 4`,
					},
					{
						id: 2,
						name: 'substr(string,start,length)',
						desc: 'Trả về một phần của chuỗi theo index - string',
						syntax: `substr('Hello, World', 7, 5); // Output: World`,
					},
					{
						id: 3,
						name: 'strpos(str1, str2) | strrpos()',
						desc: 'Trả về vị trí xuất hiện đầu tiên | cuối cùng của một chuỗi con - number',
						syntax: `strpos('Hello, World', "World"); // Output: 7`,
					},
					{
						id: 4,
						name: 'str_replace(search, replacement, subject)',
						desc: 'Thay thế tất cả các lần xuất hiện của một chuỗi con bằng một chuỗi khác - number',
						syntax: `str_replace('World', "PHP", 'Hello, World'); // Output: Hello, PHP`,
					},
					{
						id: 5,
						name: 'explode(separator, string)',
						desc: 'Tách chuỗi thành mảng dựa vào ký tự - array',
						syntax: `$array = explode(",", "tuan,dep,trai"); </br>
						print_r($array); </br>
						// Output: Array ( [0] => tuan [1] => dep [2] => trai )`,
					},
					{
						id: 6,
						name: 'implode(join_separator, array)',
						desc: 'Nối các phần tử của mảng thành chuỗi - string',
						syntax: `$array = ["tuan", "dep", "trai"]; </br>
						echo implode(" ", $array); </br>
						// Output: tuan dep trai`,
					},
					{
						id: 7,
						name: 'strtolower() | strtoupper() | ucfirst() | ucwords()...',
						desc: 'Chuyển đổi chuỗi thành viết hoa, viết thường, capital ... - string',
						syntax: `echo strtoupper("hello world"); </br>
						// Output: HELLO WORLD`,
					},
					{
						id: 8,
						name: 'trim(string,charlist) | ltrim() | rtrim()',
						desc: 'Hàm xóa các ký tự tại đầu | cuối của chuỗi',
						syntax: `echo ltrim("    hello world",); </br>
						// Output: hello world`,
					},
					{
						id: 9,
						name: 'preg_match()',
						desc: 'Hàm kiểm tra biểu thức chính quy - boolean',
						syntax: `preg_match("/world/i", 'my world'); </br>
						// Output: true`,
					},
				],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-5' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
