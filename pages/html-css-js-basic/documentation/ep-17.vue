<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Array" addOnClass="text-left" markedAs="js-array" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong Javascript, <b>mảng - array</b> là kiểu dữ liệu dạng Reference, <b>array</b> thường được dùng để lưu trữ
					một danh sách dữ liệu.
					<br />
					Ta có thể xem <b>array</b> là một dạng <b>object</b> đặc biệt. Đại loại như hình vuông là dạng đặc biệt của
					hình tứ giác vậy
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="array-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock
					:code="`const arrayOfNumber = [ 1, 2, 100, 9, 44, -1 ];
const arrayOfChaos = [ 'abc', null, true, 1, {name: 'example'}, arrayOfNumber ];			
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, một <b>array</b> được bắt đầu và kết thúc bởi cặp dấu: <b>[ ]</b>
					<br />
					Nằm trong đó là các phần tử - item. Các phần tử được ngăn cách nhau bởi dấu <b>"," - phẩy</b>.
				</p>
				<PageHeading text="Item/Element, index" addOnClass="text-left" markedAs="item-index" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ta có thể nói <b>array</b> chính là một danh sách chứa các <b>item/element</b>. Mà các <b>item/element</b> này
					được quản lý thông qua <b>index - chỉ số</b> của chúng.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<img
					src="https://www.tutorialstonight.com/assets/js/javascript-array.webp"
					alt=""
					class="max-w-[100%] rounded"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Mỗi <b>item/element</b> trong mảng đều sẽ <b>tự động</b> được đánh một <b>index</b> riêng, các bạn có thể coi
					<b>index</b>
					giống như số thứ tự của phần tử, chỉ đặc biệt hơn 1 chút là chúng bắt đầu từ 0, thay vì 1.
					<br />
					Tiếp theo chúng ta sẽ học các bài toán CRUD của mảng.
				</p>
				<PageHeading text="CRUD" addOnClass="text-left opacity-0" markedAs="crud" :lvl="1" />
				<PageHeading text="C | CREATE" addOnClass="text-left" markedAs="crud-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong <b>array</b> để add thêm một phần tử vào mảng ta chỉ cần sử dụng method <b>push</b> của mảng.
					<br />
				</p>
				<VCodeBlock
					:code="`let exampleArray = [ 1, 2, 100, 9, 44, -1 ];	
// ở đây tôi muốn thêm phần tử 'Mới nè' vào trong mảng
exampleArray.push( 'Mới nè');
console.log(exampleArray) // output:  [ 1, 2, 100, 9, 44, -1, 'Mới nè' ]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>(´･ω･`)?</b> Không hiểu <b>push</b> hoạt động thế nào ???. Giải thích liền:
					<br />
					<br />
					Syntax: <b>arrayName.push(item);</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Phân tích syntax: <b>exampleArray.push( 'Mới nè');</b> Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`item`:</b>
						<span>
							Là phần tử mà bạn muốn thêm vào mảng, method <b>push</b> sẽ luôn đẩy phần tử này vào cuối của mảng.
						</span>
					</li>
				</ul>

				<PageHeading text="R | READ" addOnClass="text-left" markedAs="crud-read" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Có thể thấy nếu coi <b>array</b> cũng là một <b>object</b> thì các <b>index</b> giống như các key, còn
					<b>item</b> là value.
					<br />
					<br />
					Như vậy, truy cập đến 1 key ta có 2 cách: <b>ObjectName.key</b> hoặc <b>ObjectName['key']</b>, mà các
					<b>index</b> lại là number - một dạng key đặc biệt. Do đó ta sẽ sử dụng cách thứ 2 là <b>ObjectName['key']</b>
					<br />
					<br />
					=> Để truy cập đến phần tử thứ <b>n</b> của mảng thì ta có syntax: <b>array[n - 1]</b>
				</p>
				<VCodeBlock
					:code="`let exampleArray = [ 1, 2, 100, 9, 44, -1 ];	
console.log(exampleArray[2])
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<div class="py-2"></div>

				<PageHeading text="U | UPDATE" addOnClass="text-left" markedAs="crud-update" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong <b>array</b> để update giá trị của một phần tử thì ta cần biết được <b>index</b> của phần tử đó.
					<br />
					Sau khi biết được <b>index</b> thì ta có thể update trực tiếp bằng cách gán: <b>array[n - 1] = newValue;</b>
				</p>
				<VCodeBlock
					:code="`let exampleArray = [ 1, 2, 100, 9, 44, -1 ];	
// ở đây tôi muốn update giá trị của phần tử thứ 2 => index = n - 1 = 1
exampleArray[1] = 'Giá trị mới nè';
console.log(exampleArray) // output:  [ 1, 'Giá trị mới nè', 100, 9, 44, -1 ]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Nhưng trong thực tế, cách này rất hiếm khi được sử dụng do liên quan đến định nghĩa của
					<b>sự thay đổi Reference value.</b>
					<br />
					<br />
					Thay vào đó chúng ta sẽ sử dụng method <b>`splice`</b> của <b>array</b>. Nếu quên mất <b>method</b> là gì thì
					mời đọc:
					<a class="cursor-pointer underline" href="/html-css-js-basic/documentation/ep-16" target="_blank"
						>Method là gì?</a
					>
				</p>
				<VCodeBlock
					:code="`let exampleArray = [ 1, 2, 100, 9, 44, -1 ];	
// ở đây tôi muốn update giá trị của phần tử thứ 3 => index = n - 1 = 2
exampleArray.splice(2, 1, 'Giá trị mới nè');
console.log(exampleArray) // output:  [ 1, 2, 'Giá trị mới nè', 9, 44, -1 ]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>(´･ω･`)?</b> Không hiểu <b>splice</b> hoạt động thế nào ???. Giải thích liền:
					<br />
					<br />
					Syntax: <b>arrayName.splice(index, count, newValue);</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Phân tích syntax: <b>exampleArray.splice(2, 1, 'Giá trị mới nè');</b> Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`index`:</b>
						<span>
							Là vị trí bạn muốn bắt đầu xoá. VD ở đây tôi truyền vào số 2 => bắt đầu xoá từ vị trí có index = 2 | Tương
							ứng với phần tử số 3.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`count`:</b> Là số lượng phần tử bạn muốn xoá đi. VD ở đây tôi cũng truyền vào số 1 => xoá đi 1 phần tử.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`newValue`:</b> Là giá trị mới mà bạn sẽ điền vào sau khi xoá đi các phần tử ở trên. VD ở đây tôi truyền
						vào chuỗi 'Giá trị mới nè' => sau khi xoá đi 1 phần tử nó sẽ chèn vào đó chuỗi 'Giá trị mới nè'.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Mình khuyến khích các bạn sử dụng các method của <b>array</b> để thực hiện các bài toán liên quan.
				</p>

				<PageHeading text="D | DELETE" addOnClass="text-left" markedAs="crud-delete" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong <b>array</b> để delete một phần tử thì rất đơn giản, giống đến 90% bài toán Update ở trên.
					<br />
					Ta vẫn cần biết <b>index</b> của phần tử mà ta muốn xoá. Sau đó ta lại có thể sử dụng <b>splice</b> để làm
					rồi.
					<br />
					<br />
					Syntax: <b>arrayName.splice(index, count);</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Phân tích syntax: <b>exampleArray.splice(3, 1);</b>. <br />
					Ở đây mình chỉ cần bỏ <b>`newValue`:</b> đi là xong. Giải thích đơn giản là sau khi xoá mình không chèn phần
					tử nào vào vị trí đã xoá là xong rồi.
					<br />
				</p>
				<VCodeBlock
					:code="`let exampleArray = [ 1, 2, 100, 9, 44, -1 ];	
// ở đây tôi muốn delete phần tử thứ 4 => index = n - 1 = 3
exampleArray.splice(3, 1);
console.log(exampleArray) // output:  [ 1, 2, 100, 44, -1 ]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<!-- END -->
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Túm lại,
					<br />
					<b>Thêm phần tử vào mảng:</b> dùng method <b>push</b> => arrayName.push(item);
					<br />
					<b>Truy cập phần tử trong mảng:</b> dùng <b>index</b> => arrayName[index];
					<br />
					<b>Update phần tử trong mảng:</b> dùng <b>splice</b> => arrayName.splice(index, count, newValue);
					<br />
					<b>Xoá phần tử trong mảng:</b> dùng <b>splice</b> => arrayName.splice(index, count);
				</p>

				<VCodeBlock
					:code="`let exampleArray = [ 1, 2, 100, 9, 44, -1 ];

// ở đây tôi muốn thêm phần tử 'Mới nè' vào trong mảng
exampleArray.push( 'Mới nè');
console.log(exampleArray); // output: [ 1, 2, 100, 9, 44, -1, 'Mới nè' ]

// Truy cập phần tử có index = 2 của mảng
console.log(exampleArray[2]); // output: 100

// ở đây tôi muốn update giá trị của phần tử thứ 3 => index = n - 1 = 2
exampleArray.splice(2, 1, 'Giá trị mới nè');
console.log(exampleArray); // output: [ 1, 2, 'Giá trị mới nè', 9, 44, -1, 'Mới nè' ]

// ở đây tôi muốn delete phần tử thứ 4 => index = n - 1 = 3
exampleArray.splice(3, 1);
console.log(exampleArray) // output: [ 1, 2, 'Giá trị mới nè', 44, -1, 'Mới nè' ]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 17 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
