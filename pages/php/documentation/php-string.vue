<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="String methods" addOnClass="text-left" markedAs="php-string-method" :lvl="2" />
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
				stringMethods: [
					{
						id: 1,
						name: 'strlen()',
						desc: 'Trả ra độ dài của chuỗi - number',
						syntax: `strlen('Hehe') // Output: 4`,
					},
					{
						id: 2,
						name: 'substr()',
						desc: 'Trả về một phần của chuỗi theo index - string',
						syntax: `substr('Hello, World', 7, 5); // Output: World`,
					},
					{
						id: 3,
						name: 'strpos() | strrpos()',
						desc: 'Trả về vị trí xuất hiện đầu tiên | cuối cùng của một chuỗi con - number',
						syntax: `strpos('Hello, World', "World"); // Output: 7`,
					},
					{
						id: 4,
						name: 'str_replace()',
						desc: 'Thay thế tất cả các lần xuất hiện của một chuỗi con bằng một chuỗi khác - number',
						syntax: `str_replace('World', "PHP", 'Hello, World'); // Output: Hello, PHP`,
					},
					{
						id: 5,
						name: 'explode()',
						desc: 'Tách chuỗi thành mảng dựa vào ký tự - array',
						syntax: `$array = explode(",", "tuan,dep,trai"); </br>
						print_r($array); </br>
						// Output: Array ( [0] => tuan [1] => dep [2] => trai )`,
					},
					{
						id: 6,
						name: 'implode()',
						desc: 'Nối các phần tử của mảng thành chuỗi - string',
						syntax: `$array = ["tuan", "dep", "trai"]; </br>
						echo implode(" ", $array); </br>
						// Output: tuan dep trai`,
					},
					{
						id: 7,
						name: 'strtolower() | strtoupper() | ucfirst() | ucwords()...',
						desc: 'Chuyển đổi chuỗi thành viết hoa, viết thường, capital ... - string',
						syntax: `echo strtoupper("hello world", $array); </br>
						// Output: HELLO WORLD`,
					},
					{
						id: 8,
						name: 'trim() | ltrim() | rtrim()',
						desc: 'Hàm kiểm tra và xử lý chuỗi - string',
						syntax: `echo ltrim("    hello world", $array); </br>
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
