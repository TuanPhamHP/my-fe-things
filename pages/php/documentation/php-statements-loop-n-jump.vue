<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
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

				<PageHeading text="Luyện tập" addOnClass="text-left mt-6" markedAs="php-loop-practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Dùng vòng lặp với mảng $todos quen thuộc — cùng format với các bài Laravel sau này:
				</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
					<div class="bg-neutral-300 rounded px-2 py-2 col-span-1 border border-neutral-800 dark:border-neutral-100">
						<p class="text-center mb-2 font-semibold">Bài 1 — foreach</p>
						<p class="text-sm">In ra tất cả todo chưa hoàn thành.</p>
						<div class="border-t border-slate-700 my-1"></div>
						<div class="pl-2 pt-2 text-sm space-y-1">
							<p>$todos = [</p>
							<p>  ['title'=>'Học PHP','completed'=>true],</p>
							<p>  ['title'=>'Làm bài tập','completed'=>false],</p>
							<p>  ['title'=>'Đọc docs','completed'=>false],</p>
							<p>];</p>
							<p>=> "Làm bài tập", "Đọc docs"</p>
						</div>
					</div>
					<div class="bg-neutral-300 rounded px-2 py-2 col-span-1 border border-neutral-800 dark:border-neutral-100">
						<p class="text-center mb-2 font-semibold">Bài 2 — foreach + đếm</p>
						<p class="text-sm">Đếm số todo đã hoàn thành.</p>
						<div class="border-t border-slate-700 my-1"></div>
						<div class="pl-2 pt-2 text-sm space-y-1">
							<p>// Dùng $todos ở Bài 1</p>
							<p>$count = 0;</p>
							<p>// foreach + if để tăng $count</p>
							<p>=> "Hoàn thành: 1/3"</p>
						</div>
					</div>
					<div class="bg-neutral-300 rounded px-2 py-2 col-span-1 border border-neutral-800 dark:border-neutral-100">
						<p class="text-center mb-2 font-semibold">Bài 3 — foreach + break</p>
						<p class="text-sm">Tìm todo chưa xong đầu tiên rồi dừng vòng lặp.</p>
						<div class="border-t border-slate-700 my-1"></div>
						<div class="pl-2 pt-2 text-sm space-y-1">
							<p>// Dùng $todos ở Bài 1</p>
							<p>// foreach + if + break</p>
							<p>=> "Cần làm tiếp: Làm bài tập"</p>
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
				pagePagination: null,
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
