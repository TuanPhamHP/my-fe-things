<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng học về các câu lệnh (statements) cơ bản và thông dụng trong PHP.
				</p>

				<PageHeading text="Conditional" addOnClass="text-left" markedAs="php-conditional" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Conditional Statements - Câu lệnh điều kiện, thường được sử dụng để kiểm tra một hoặc nhiều điều kiện của
					logic từ đó đưa ra các kịch bản được chuẩn bị sẵn cho chương trình. Dưới đây là các loại câu lệnh điều kiện
					phổ biến và chi tiết về cách sử dụng chúng:
				</p>
				<PageHeading text="- if-else" addOnClass="text-left" markedAs="php-if-else" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh <FilePath>if</FilePath> sẽ nhận vào một điều kiện (conditional) và sẽ thực thi một khối mã nếu kết
					quả sau khi ép kiểu (conditional) là true.
					<br />
					Câu lệnh <FilePath>else</FilePath> được dùng kèm với <FilePath>if</FilePath>, nó sẽ tương ứng với các trường
					hợp còn lại khi (condition) được kiểm tra ở các <FilePath>if</FilePath> trước là false:
					<br />
				</p>
				<VCodeBlock
					:code="`$a = 3;
if ($a > 5) {
    echo 'a lớn hơn 5';
} else {
    echo 'a nhỏ hơn hoặc bằng 5';
}`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh <b>if</b> đồng thời còn có thể được sử dụng ngay sau <b>else</b> được viết thành <b>elseif</b>.
				</p>

				<VCodeBlock
					:code="`$a = 5;
if ($a > 5) {
    echo 'a lớn hơn 5';
} elseif ($a == 5) {
    echo 'a bằng 5';
} else {
    echo 'a nhỏ hơn 5';
}`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Nếu điều kiện <b>`if`</b> là false, điều kiện <b>`elseif`</b> sẽ được kiểm tra. Nếu tất cả các điều kiện đều
					false, khối mã trong else sẽ được thực thi.
				</p>
				<PageHeading text="- switch" addOnClass="text-left" markedAs="php-switch" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Câu lệnh <FilePath>switch</FilePath> là một cách khác để kiểm tra nhiều điều kiện, thường được sử dụng khi bạn
					cần kiểm tra giá trị của một biến chống lại nhiều giá trị cụ thể.
					<br />
				</p>
				<VCodeBlock
					:code="`$day = 'Monday';
switch ($day) {
    case 'Monday':
        echo 'Hôm nay là thứ Hai';
        break;
    case 'Tuesday':
        echo 'Hôm nay là thứ Ba';
        break;
    default:
        echo 'Hôm nay là một ngày khác';
}`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<div class="py-2"></div>
				<PageHeading text="- match" addOnClass="text-left" markedAs="php-match" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Được giới thiệu từ phiên bản 8.0 của PHP, <FilePath>match</FilePath> là một cải tiến của switch để giải quyết
					một số hạn chế của switch. Dưới đây là những cải tiến của nó so với switch:
					<br />
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>`Biểu thức`</b>: match là một biểu thức và có thể trả về giá trị.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>strict comparision</b>: match sử dụng so sánh nghiêm ngặt (===) thay vì (==).
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Không cần break</b>: Không cần sử dụng break để thoát khỏi câu lệnh, tránh lỗi thiếu break thường gặp
						trong switch.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						<b>Hỗ trợ biểu thức</b>:Có thể sử dụng các biểu thức để tính toán giá trị.
					</li>
				</ul>

				<VCodeBlock
					:code="`$result = match ($variable) {
    value1 => expression1,
    value2 => expression2,
    // ...
    default => default_expression,
};`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">Ví dụ:</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`$day = 'Tuesday';

switch ($day) {
    case 'Monday':
        $message = 'Hôm nay là thứ Hai';
        break;
    case 'Tuesday':
        $message = 'Hôm nay là thứ Ba';
        break;
    case 'Wednesday':
        $message = 'Hôm nay là thứ Tư';
        break;
    case 'Thursday':
        $message = 'Hôm nay là thứ Năm';
        break;
    case 'Friday':
        $message = 'Hôm nay là thứ Sáu';
        break;
    case 'Saturday':
        $message = 'Hôm nay là thứ Bảy';
        break;
    case 'Sunday':
        $message = 'Hôm nay là Chủ Nhật';
        break;
    default:
        $message = 'Không biết hôm nay là ngày gì';
}

echo $message; // Hôm nay là thứ Ba
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`$day = 'Tuesday';

$message = match ($day) {
    'Monday' => 'Hôm nay là thứ Hai',
    'Tuesday' => 'Hôm nay là thứ Ba',
    'Wednesday' => 'Hôm nay là thứ Tư',
    'Thursday' => 'Hôm nay là thứ Năm',
    'Friday' => 'Hôm nay là thứ Sáu',
    'Saturday' => 'Hôm nay là thứ Bảy',
    'Sunday' => 'Hôm nay là Chủ Nhật',
    default => 'Không biết hôm nay là ngày gì',
};

echo $message; // Hôm nay là thứ Ba
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<p class="text-slate-900 dark:text-white my-2 leading-8">
						So với <b>switch</b>, <b>match</b> được viết gọn gàng, dễ đọc hơn. Ngoài ra do sử dụng strict comparision và
						không dùng break nên có thể giảm thiểu khả năng bị lỗi logic so sánh, lỗi fall-through của switch.
					</p>
				</div>
				<PageHeading text="- ternary operator" addOnClass="text-left mt-5" markedAs="php-ternary-operator" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Toán tử điều kiện là một cách ngắn gọn để viết câu lệnh if-else ngắn. Cấu trúc rất đơn giản:
				</p>
				<VCodeBlock
					:code="`// syntax: (condition) ? value_if_true : value_if_false;
$a = 10;
$result = ($a > 5) ? 'a lớn hơn 5' : 'a nhỏ hơn hoặc bằng 5';
echo $result;
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Tuy tiện lợi nhưng <b>`ternary operator`</b> cũng có điểm yếu:
					<br />
					Không thích hợp cho điều kiện phức tạp => Khả năng mở rộng rất kém và không linh hoạt
					<br />
					Do đó <b>`ternary operator`</b> không thể thay thế <b>if - else</b>.
				</p>
				<PageHeading
					text="- null coalescing operator"
					addOnClass="text-left mt-5"
					markedAs="php-null-coalescing"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Toán tử Null Coalescing (??) được sử dụng để kiểm tra một biến có tồn tại và không null. Nếu điều kiện đúng,
					giá trị của biến sẽ được trả về, nếu không, giá trị mặc định sẽ được trả về.
				</p>
				<VCodeBlock
					:code="`// $a ? $b : $c
$a;
$result = $a ?? '100';
echo $result; // 100
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
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
						name: 'abs($number)',
						desc: 'Trả về giá trị tuyệt đối của số. - number',
						syntax: `echo abs(-5); // Output: 5`,
					},
					{
						id: 2,
						name: 'round($number, $precision)',
						desc: 'Làm tròn số tới số chữ số thập phân được chỉ định. - number',
						syntax: `echo round(3.14159, 2); // Output: 3.14`,
					},
					{
						id: 3,
						name: 'ceil($number) | floor($number)',
						desc: 'Làm tròn số lên | xuống đến số nguyên gần nhất. - number',
						syntax: `echo round(3.14159, 2); // Output: 4 </br>
						echo floor(3.14159, 2); // Output: 3`,
					},
					{
						id: 4,
						name: 'min($values) | max($values)',
						desc: 'Trả về giá trị nhỏ nhất | lớn nhất trong một mảng hoặc danh sách các params. - number',
						syntax: `echo min(2, 3, 1, 6, 7); // Output: 1; </br>
						echo max(2, 3, 1, 6, 7); // Output: 7`,
					},
					{
						id: 5,
						name: 'sqrt($number) | pow($base, $exp)',
						desc: 'Trả về căn bậc | luỹ thừa - array',
						syntax: `echo sqrt(16); // Output: 4; </br>
						echo pow(2, 3); // Output: 8`,
					},
				] as { id: string | number; name: string; desc: string; syntax: string; label?: string }[],
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-8' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
