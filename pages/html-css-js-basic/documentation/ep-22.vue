<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="title" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này chúng ta sẽ thực hiện bài toán gán các function vào các sự kiện (event) của element như: click,
					hover, keyup ...
				</p>

				<PageHeading text="addEventListener" addOnClass="text-left" markedAs="dom-add-event" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`addEventListener`</b> là một phương thức trong DOM được sử dụng để gắn một sự kiện (event) với một phần tử
					HTML cụ thể, để lắng nghe và xử lý sự kiện khi nó xảy ra.
					<br />
					<br />
					Các sự kiện ở đây có thể bao gồm <b>`click`, `hover`, `keyup`....</b>.
					<br />
					<br />
					Syntax của <b>`addEventListener`</b> như sau:
				</p>
				<VCodeBlock
					:code="`myElement.addEventListener(event, function, useCapture);
`"
					highlightjs
					lang="html"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`event`:</b>
						<span> Là tên của sự kiện mà bạn muốn lắng nghe, như "click", "mouseover", "keydown", vv.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`function`:</b>
						<span>
							Một hàm JavaScript sẽ được gọi khi sự kiện được kích hoạt. Đây là nơi bạn định nghĩa hành động mà bạn muốn
							thực hiện khi sự kiện xảy ra.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`useCapture (optional)`:</b>
						<span>
							Một giá trị Boolean (true hoặc false) xác định xem sự kiện có sử dụng chế độ bắt sự kiện ở chế độ capture
							hay không. Giá trị mặc định là false.
						</span>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ví dụ, để lắng nghe sự kiện click trên một button:
				</p>
				<div class="grid grid-cols-1 gap-3 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- Thẻ button ở HTML -->
<button id='myButton'> Click me to see the magic</button>
`"
							highlightjs
							lang="html"
							theme="atom-one-dark"
						/>
					</div>

					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Tiếp theo, sử dụng DOMQuery để trỏ vào thẻ <b>`button`</b> và gán sự kiện
					</p>
					<div class="col-span-1">
						<VCodeBlock
							:code="`// trỏ vào button
const buttonTarget = document.querySelector('#myButton');
// gán hành động cho sự kiện 'click' của người dùng với button
buttonTarget.addEventListener('click', function() {
    alert('Button clicked!');
});
`"
							highlightjs
							lang="js"
							theme="atom-one-dark"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong ví dụ này, khi người dùng nhấp vào nút có id là "myButton", một cửa sổ cảnh báo sẽ hiển thị thông báo
					"Button clicked!".

					<br />
					<br />
					Bạn có thể gắn nhiều hàm xử lý cho cùng một sự kiện trên cùng một phần tử, hoặc gắn cùng một hàm xử lý cho
					nhiều sự kiện trên cùng một phần tử bằng cách sử dụng <b>`addEventListener`</b> nhiều lần.
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 22 }).then((res: apiResponde) => {
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
