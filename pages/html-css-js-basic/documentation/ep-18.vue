<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="title" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này chúng ta sẽ tìm hiểu về các method thường dùng trong khi làm việc với <b>Array</b> trong thực tế.
					<br />
					Bao gồm: <b>forEach()</b>, <b>filter()</b>, <b>map()</b>.
				</p>
				<PageHeading text="forEach()" addOnClass="text-left" markedAs="array-foreach" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>forEach()</b> là một method nhận vào một <b>callback</b>, sau đó duyệt lần lượt qua từng phần tử trong mảng
					đồng thời thực thi <b>callback</b> vừa nhận vào.
				</p>
				<div class="flex items-center text-slate-900 dark:text-white text-lg text-content mb-3">
					Video giải thích về <b>`forEach`: </b>
					<LinkWithYoutube :name="'forEach()'" />
				</div>
				<VCodeBlock
					:code="`const exampleArray = ['a', 'b', 'c']
array.forEach( function(currentValue, index, array) {
  // Thực hiện một hành động nào đó với mỗi phần tử của mảng
});`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như ta có thể thấy: method <b>`forEach()`</b> đã nhận vào một <b>callback</b>, function này sẽ được thực thi
					lần lượt với từng phần tử của mảng.
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`currentValue`:</b>
						<span>
							Là giá trị của phần tử hiện tại đang được lặp qua. VD: khi lặp qua phần tử đầu tiên thì
							<b>currentValue = 'a'</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`index`:</b>
						<span>
							Là chỉ số - số thứ tự của phần tử hiện tại đang được lặp qua. VD: khi lặp qua phần tử đầu tiên thì
							<b>index = 0</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`array`:</b>
						<span> Là mảng mà phương thức <b>forEach()</b> đang được gọi. VD: ở đây <b>array = exampleArray</b> </span>
					</li>
				</ul>
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Sum: <b>forEach()</b> thường được sử dụng khi ta cần thực hiện cùng một công việc với từng phần tử trong mảng
					mà không cần trả ra giá trị mảng mới. <br />
					VD: In ra giá trị của từng phần tử trong mảng
				</p>
				<VCodeBlock
					:code="`const exampleArray = ['a', 'b', 'c']
array.forEach( function(currentValue, index, array) {
  console.log(currentValue)
});`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<div class="py-3"></div>
				<PageHeading text="map()" addOnClass="text-left" markedAs="array-map" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Gần tương tự như <b>forEach()</b>, <b>map()</b> cũng nhận vào một <b>callback</b> và thực thi với từng phần tử
					trong mảng. Nhưng <b>callback</b> này sẽ phải return ra một giá trị, giá trị được return ra sẽ lưu vào một
					mảng mới.
					<br />
					Như vậy, <b>map()</b> sẽ trả ra một mảng mới có số lượng phần tử bằng với mảng ban đầu, nhưng giá trị của từng
					phần tử ở mảng mới sẽ tuỳ thuộc vào giá trị được return ra ở <b>callback.</b>
				</p>
				<div class="flex items-center text-slate-900 dark:text-white text-lg text-content mb-3">
					Video giải thích về <b>`map`: </b>
					<LinkWithYoutube :name="'map()'" />
				</div>
				<VCodeBlock
					:code="`const exampleMapArray = ['a', 'b', 'c']
// do method map() sẽ trả ra một mảng mới, ta sẽ tạo ra một biến để lưu trữ mảng mới này.
const anotherArray = exampleMapArray.map( function(currentValue, index, array) {
 return currentValue + '-nV'
});
console.log(anotherArray);
// output: ['a-nV', 'b-nV', 'c-nV']
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Sum: <b>map()</b> thường được sử dụng khi ta cần tạo ra một mảng mới dựa trên mảng ban đầu. <br />
					Mảng mới này sẽ có số lượng phần tử bằng với mảng ban đầu nhưng giá trị của từng phần tử thì phụ thuộc vào giá
					trị return của <b>callback</b>
					<br />
					VD: Tạo ra mảng mới có giá trị các phần tử gấp đôi mảng ban đầu:
				</p>
				<VCodeBlock
					:code="`const exampleMapArray2 = [1, 2, 3]
const anotherArray2 = exampleMapArray2.map( function(currentValue, index, array) {
 return currentValue * 2
});
console.log(anotherArray);
// output: [2, 4, 6]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<div class="py-2"></div>
				<PageHeading text="filter()" addOnClass="text-left" markedAs="array-filter" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>filter()</b> cũng nhận vào một <b>callback</b> và thực thi với từng phần tử trong mảng. Nhưng
					<b>callback</b> này sẽ phải return ra một giá trị, giá trị return ra sẽ được ép kiểu về dạng Boolean.
					<br />
					Nếu sau khi ép kiểu trả ra <b>true</b> thì phần tử sẽ được thêm vào mảng mới
					<br />
					Nếu sau khi ép kiểu trả ra <b>false</b> thì phần tử sẽ bị bỏ qua
					<br />
					Như vậy, <b>filter()</b> sẽ trả ra một mảng mới có số lượng phần tử có thể khác với mảng ban đầu, nhưng giá
					trị của từng phần tử ở mảng mới sẽ bằng với giá trị ở mảng ban đầu
				</p>
				<div class="flex items-center text-slate-900 dark:text-white text-lg text-content mb-3">
					Video giải thích về <b>`filter`: </b>
					<LinkWithYoutube :name="'filter()'" />
				</div>
				<VCodeBlock
					:code="`const exampleMapArray = ['a', 'b', 'c']
// do method map() sẽ trả ra một mảng mới, ta sẽ tạo ra một biến để lưu trữ mảng mới này.
const anotherArray = exampleMapArray.map( function(currentValue, index, array) {
 return currentValue + '-nV'
});
console.log(anotherArray);
// output: ['a-nV', 'b-nV', 'c-nV']
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Sum: <b>map()</b> thường được sử dụng khi ta cần tạo ra một mảng mới dựa trên mảng ban đầu. <br />
					Mảng mới này sẽ có số lượng phần tử bằng với mảng ban đầu nhưng giá trị của từng phần tử thì phụ thuộc vào giá
					trị return của <b>callback</b>
					<br />
					VD: Tạo ra mảng mới có giá trị các phần tử gấp đôi mảng ban đầu:
				</p>
				<VCodeBlock
					:code="`const exampleMapArray2 = [1, 2, 3]
const anotherArray2 = exampleMapArray2.map( function(currentValue, index, array) {
 return currentValue * 2
});
console.log(anotherArray);
// output: [2, 4, 6]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<!-- END -->

				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					So sánh <b>map()</b> và <b>filter()</b>
				</p>
				<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center mt-3">
					<div class="col-span-1">
						<img src="@/assets/images/html5-basic/map.svg" alt="" class="block w-full" />
						<p class="text-slate-900 text-center italic dark:text-white my-5 leading-8 text-lg">
							<b>map()</b>
						</p>
					</div>
					<div class="col-span-1">
						<img src="@/assets/images/html5-basic/filter.svg" alt="" class="block w-full" />
						<p class="text-slate-900 text-center italic dark:text-white my-5 leading-8 text-lg">
							<b>filter()</b>
						</p>
					</div>
				</div>
				<PageHeading text="List video trong bài" addOnClass="text-left" markedAs="array-method-youtube" />
				<div class="rounded px-2 py-2 border mt-3">
					<div class="flex items-center gap-2 mb-2">
						<p class="w-[80px] text-slate-900 dark:text-white mb-0 leading-8 text-lg font-bold">forEach():</p>
						<LinkWithYoutube :name="'forEach()'" />
					</div>
					<div class="flex items-center gap-2 mb-2">
						<p class="w-[80px] text-slate-900 dark:text-white mb-0 leading-8 text-lg font-bold">map():</p>
						<LinkWithYoutube :name="'map()'" />
					</div>
					<div class="flex items-center gap-2 mb-2">
						<p class="w-[80px] text-slate-900 dark:text-white mb-0 leading-8 text-lg font-bold">filter():</p>
						<LinkWithYoutube :name="'filter()'" />
					</div>
				</div>
				<DocNextPage :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import DocNextPage from '@/components/DocNextPage.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	import { apiResponde } from 'models';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			VCodeBlock,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
		},
		data() {
			return {
				imageTag: `<img src="https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg" alt="just vibing memes">`,
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 18 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
<!-- <style lang="scss">
	b {
		display: inline-block;
		background-color: #b5b5b5b4;
		padding: 1px 4px;
		border-radius: 3px;
	}
</style> -->
