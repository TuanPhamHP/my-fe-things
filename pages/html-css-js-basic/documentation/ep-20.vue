<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="title" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này chúng ta sẽ tiếp tục tìm hiểu về DOM qua các bài toán thao tác với class, attributes ...
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trước khi tiếp tục, chúng ta cần nắm rõ cách truy vấn đến element ở bài trước, trong trường hợp bạn chưa thành
					thạo thì vui lòng quay lại bài trước và luyện tập phần này.
				</p>
				<PageHeading text="Class list" addOnClass="text-left" markedAs="dom-class-list" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"></p>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`



<!-- Thẻ p ở HTML -->
<p id='#pTest' class='text-demo text-red'>Xin chào các bạn !!!</p>







`"
							highlightjs
							lang="html"
							theme="atom-one-dark"
						/>
						<p class="text-slate-900 text-center italic dark:text-white my-5 leading-8 text-lg text-content">
							Thẻ 'p' trong HTML
						</p>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`// Mô hình hoá thành 1 object trong JavaScript
const p = {
	name: 'p',
	textContent:'Xin chào các bạn !!!',
	id:'pTest',
	classList:{
			value: ['text-demo', 'text-red'],
			add(){},
			remove(){}
			// ... còn nhiều thuộc tính khác
		}
		// ... v.v
}`"
							highlightjs
							lang="js"
							theme="atom-one-dark"
						/>
						<p class="text-slate-900 text-center italic dark:text-white my-5 leading-8 text-lg text-content">
							Thẻ 'p' trong JavaScript
						</p>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo chúng ta sẽ cùng làm quen một số bài toán cơ bản và quan trọng với DOM
				</p>

				<PageHeading text="DOM Query" addOnClass="text-left" markedAs="dom-query" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Query - tìm kiếm, đây là bài toán cơ bản nhất các bạn cần nắm được. Vì chỉ khi chúng ta truy cập được vào
					<b>element</b> thì ta mới có thể thực hiện tiếp các thao tác như sửa, xoá v.v.
					<br />
					<br />
					DOM đã cung cấp sẵn cho chúng ta các method để có thể tìm kiếm elements trong nó, ở đây tôi chia ra làm 2 loại
					là:
					<b>querySelector</b> và <b>getElements</b>.
				</p>
				<PageHeading text="QuerySelector" addOnClass="text-left" markedAs="dom-query-selector" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Là các phương thức sử dụng <b>CSS selector</b> để tìm kiếm phần tử tương ứng. Bao gồm 2 phương thức:
					<br />
					Các phương thức này đều thuộc về object <b>document</b>, vậy để sử dụng chúng ta sẽ phải truy cập vào document
					trước:
					<br />
					Syntax: <b>document.querySelector(selector) | document.querySelectorAll(selector)</b>, đây là kiến thức từ bài
					method trong JS.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`querySelector()`:</b>
						<span>
							Nhận vào một <b>CSS selector</b> và tìm kiếm theo selector đó, sau đó trả ra kết quả:
							<br />
							<b>Không tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>null</b>
							<br />
							<b>Tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>phần tử đầu tiên</b> thoả mãn
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`querySelectorAll()`:</b>
						<span>
							Nhận vào một <b>CSS selector</b> và tìm kiếm theo selector đó, sau đó trả ra kết quả:
							<br />
							<b>Không tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>mảng rỗng - []</b>
							<br />
							<b>Tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>Mảng phần tử thoả mãn - [e1, e2...]</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`selector`:</b>
						<span>
							Đây chính là selector trong CSS mà chúng ta đã biết.
							<br />
							VD: .abc | #myId | div ...</span
						>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"></p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- Thẻ p ở HTML -->
<p id='#pTest1' class='text-demo p-tag-01'>Tôi là thẻ p số 1</p>
<div>
	<p id='#pTest2' class='text-demo p-tag-02'>Tôi là thẻ p số 2</p>
	<p id='#pTest3' class='text-demo p-tag-03'>Tôi là thẻ p số 3</p>		
</div>



`"
							highlightjs
							lang="html"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`
const myPTag = document.querySelectorAll('.text-demo');
console.log(myPTag); // [p, p, p]
// selector ở đây là '.text-demo' tương ứng với các thẻ có chứa class là '.text-demo'
// => trả ra mảng các thẻ thoả mãn
const firstPTag = document.querySelector('.text-demo');
console.log(firstPTag);
// vẫn là selector như trên nhưng lúc này ta dùng phương thức querySelector
// => trả ra phần tử đầu tiên thoả mãn
`"
							highlightjs
							lang="js"
							theme="atom-one-dark"
						/>
					</div>
				</div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-2xl font-bold text-content">Xử lý kết quả</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, kết quả trả ra của 2 method là khác nhau.

					<br />
					<b>querySelector - trả ra Element | null</b> <br />
					<b>querySelectorAll - trả ra NodeList | mảng rỗng</b>.
					<br />
					Vậy để kiểm tra có tìm thấy phần tử nào hay không thì ta cũng sẽ phải kiểm tra theo 2 cách khác nhau
				</p>
				<VCodeBlock
					:code="`
const myPTag = document.querySelectorAll('.text-demo');
console.log(myPTag); 
// Vì querySelectorAll trả ra mảng kể cả có tìm thấy phần tử hay không.
// nên ta cần kiểm tra mảng rỗng hay không qua length của mảng. Mà length là dạng number
// => length = 0 sẽ ép kiểu ra FALSE
// => length # 0 sẽ ép kiểu ra TRUE
if(myPTag.length){
	console.log('Có phần tử thoả mãn điều kiện')
}else{
	console.log('Không có phần tử nào thoả mãn điều kiện')
}

const firstPTag = document.querySelector('.text-demo');
// Vì querySelector trả ra element | null.
// như vậy ta chỉ cần ép kiểu kết quả về dạng Boolean là được
// => null sẽ ép kiểu ra FALSE
// => element | object sẽ ép kiểu ra TRUE
if(firstPTag){
	console.log('Có phần tử thoả mãn điều kiện')
}else{
	console.log('Không có phần tử nào thoả mãn điều kiện')
}
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>

				<div class="py-3"></div>
				<PageHeading text="GetElement" addOnClass="text-left" markedAs="dom-get-element" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Là các phương thức tìm kiếm phần tử trong DOM, thay vì việc viết theo selector thì mỗi chúng sẽ quy định riêng
					biệt kiểu tìm kiếm qua tên của method.
					<br />
					Các phương thức này đều thuộc về object <b>document</b>, vậy để sử dụng chúng ta sẽ phải truy cập vào document
					trước:
					<br />
					Syntax:
					<b>document.getElementById() | document.getElementsByClassName() | document.getElementsByTagName() | ...</b>
					Ngoài ba phương thức này còn vài phương thức tương tự nhưng ở bài này tôi sẽ không đề cập đến.
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`getElementById()`:</b>
						<span>
							Nhận vào một <b>chuỗi - string</b> và tìm kiếm phần tử có id bằng với chuỗi, sau đó trả ra kết quả:
							<br />
							<b>Không tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>null</b>
							<br />
							<b>Tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>phần tử đầu tiên</b> thoả mãn
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`getElementsByClassName()`:</b>
						<span>
							Nhận vào một <b>chuỗi</b> tìm kiếm các phần tử có chứa class bằng với chuỗi, sau đó trả ra kết quả:
							<br />
							<b>Không tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>HTMLCollection rỗng</b>
							<br />
							<b>Tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>HTMLCollection - [e1, e2...]</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`getElementsByTagName()`:</b>
						<span>
							Nhận vào một <b>chuỗi</b> tìm kiếm các phần tử có tên thẻ - tagname với chuỗi, sau đó trả ra kết quả:
							<br />
							<b>Không tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>HTMLCollection rỗng</b>
							<br />
							<b>Tìm thấy phần tử thoả mãn:</b> Trả ra kết quả là <b>HTMLCollection - [e1, e2...]</b>
						</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content"></p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- Thẻ p ở HTML -->
<p id='#pTest1' class='text-demo p-tag-01'>Tôi là thẻ p số 1</p>
<div>
	<p id='#pTest2' class='text-demo p-tag-02'>Tôi là thẻ p số 2</p>
	<p id='#pTest3' class='text-demo p-tag-03'>Tôi là thẻ p số 3</p>		
</div>



`"
							highlightjs
							lang="html"
							theme="atom-one-dark"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`const myPTagByClassName = document.getElementsByClassName('text-demo');
console.log(myPTag); // [p, p, p]
// Do bản thân method getElementsByClassName đã chỉ rõ sẽ tìm kiếm theo ClassName
// nên 'text-demo' tương ứng với selector '.text-demo'
// => trả ra mảng các thẻ thoả mãn
const firstPTagById = document.getElementById('pTest2');
console.log(firstPTag);
// pTest2 tương ứng với selector '#pTest2'
// => trả ra phần tử đầu tiên thoả mãn
`"
							highlightjs
							lang="js"
							theme="atom-one-dark"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở trên là 2 cách tìm kiếm được sử dụng để tìm các Element trong cây DOM. Ở bài tiếp theo, chúng ta sẽ tìm hiểu
					về cách thao tác với các thuộc tính như class, content của thẻ.
				</p>

				<!-- END -->

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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 19 }).then((res: apiResponde) => {
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
