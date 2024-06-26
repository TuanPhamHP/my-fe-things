<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tiếp theo bài trước, ở bài này chúng ta tìm hiểu về Loop & Jump statments trong PHP.
				</p>

				<PageHeading text="Loop Statements" addOnClass="text-left" markedAs="php-loop-statements" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh lặp (Loop Statements) trong PHP cho phép bạn thực thi một khối mã nhiều lần, dựa trên một điều kiện
					nhất định. Dưới đây là các loại câu lệnh lặp phổ biến trong PHP và cách sử dụng chúng.
				</p>
				<PageHeading text="- while" addOnClass="text-left" markedAs="php-while" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh <b>`while`</b> thực thi một khối mã khi điều kiện (condition) là true.
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`while (condition) {
    // code to be executed
}`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`$i = 1;
while ($i <= 5) {
    echo 'Số: $i </br>';
    $i++;
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<PageHeading text="- do-while" addOnClass="text-left" markedAs="php-do-while" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh <b>`do-while`</b> giống như <b>`while`</b> nhưng nó luôn thực thi khối mã ít nhất một lần, sau đó mới
					kiểm tra điều kiện.
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`do {
    // code to be executed
} while (condition);
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`$i = 1;
do {
    echo 'Số: $i' . </br>;
    $i++;
} while ($i <= 5);
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<div class="py-2"></div>
				<PageHeading text="- for" addOnClass="text-left mt-5" markedAs="php-for" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh <b>`for`</b> giúp ta thực hiện lặp với số lần lặp được xác định theo bước nhảy của bộ đếm.
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`for (initialization; condition; increment) {
    // code to be executed
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`for ($i = 1; $i <= 5; $i++) {
    echo 'Số: $i' . </br>;
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<PageHeading text="- foreach" addOnClass="text-left mt-5" markedAs="php-foreach" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Câu lệnh <b>`foreach`</b> được sử dụng để lặp qua các phần tử của một mảng.
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="`foreach ($array as $value) {
    // code to be executed
}

foreach ($array as $key => $value) {
    // code to be executed
}

`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`$colors = ['red', 'green', 'blue', 'yellow'];
foreach ($colors as $color) {
    echo 'Màu: $color'. </br>;
}
// với key-value
$age = ['Peter' => '35', 'Ben' => '37', 'Joe' => '43'];
foreach ($age as $name => $years) {
    echo '$name là $years tuổi'. </br>;
}
`"
							highlightjs
							lang="php"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<PageHeading
					text="- break, continue, return"
					addOnClass="text-left mt-5"
					markedAs="php-break-and-continue"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>`break`, `continue`</b> được sử dụng để điều khiển các vòng lặp của chúng ta.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8"><b>`break`</b>thoát khỏi vòng lặp ngay lập tức.</p>
				<VCodeBlock
					:code="`for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        break;
    }
    echo 'Số: $i'.</br>;
}
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>`continue`</b> bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục với lần lặp kế tiếp.
				</p>
				<VCodeBlock
					:code="`for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        continue;
    }
    echo 'Số: $i'.</br>;
}
`"
					highlightjs
					lang="php"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>`return`</b> thường được sử dụng để kết thúc block code tại scope và trả về giá trị
				</p>
				<VCodeBlock
					:code="`function add($a, $b) {
    return $a + $b;
}
$result = add(3, 4); // $result = 7;
}
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-9' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
