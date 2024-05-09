<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="title" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này chúng ta sẽ tiếp tục tìm hiểu về DOM qua các bài toán thao tác với <b>`classList`</b> ...
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trước khi tiếp tục, chúng ta cần nắm rõ cách truy vấn đến element ở bài trước, trong trường hợp bạn chưa thành
					thạo thì vui lòng quay lại bài trước và luyện tập phần này.
				</p>
				<PageHeading text="Class list" addOnClass="text-left" markedAs="dom-class-list" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Class List là một field trong Element Object, nó giúp ta đọc, chỉnh sửa hoặc xoá class của một phần tử hoặc
					kiểm tra xem phần tử đó có chứa một class cụ thể hay không. Bằng cách sử dụng các method được cung cấp sẵn của
					<b>classList</b>
				</p>
				<div class="grid grid-cols-1 gap-3 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- Thẻ p ở HTML -->
<p id='#pTest' class='text-demo text-red'>Xin chào các bạn !!!</p>
`"
							highlightjs
							lang="html"
							theme="atom-one-dark"
						/>
						<p class="text-slate-900 text-center italic dark:text-white my-5 leading-8 text-lg text-content"></p>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`// Bước 1: Truy cập vào element mà ta muốn thao tác
const myElement = document.querySelector('#pTest');
// Bước 2: Thực hiện các bài toán với classList của phần tử

// Thêm một class vào phần tử - method add
myElement.classList.add('custom-class');

// Xoá class của phần tử - method remove
myElement.classList.remove('custom-class');

// Toggle class của phần tử - method toggle
myElement.classList.toggle('custom-class');

// Kiểm tra phần tử có class 'custom-class' hay không - method contains
const isContain = myElement.classList.contains('custom-class');
`"
							highlightjs
							lang="js"
							theme="atom-one-dark"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Trong đó:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`add()`:</b>
						<span>
							Nhận vào <b>string (tạm gọi là class)</b> sau đó kiểm tra xem hiện tại <b>element.classList</b> có chứa
							class đã truyền vào hay không. Nếu:
							<br />
							<b>(+) có chứa:</b> Dừng lại và không làm gì cả.
							<br />
							<b>(-) không chứa:</b> Tại classList của element tiến hành <b>Thêm</b> class được truyền vào và render lại
							UI.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`remove()`:</b>
						<span>
							Nhận vào <b>string (tạm gọi là class)</b> sau đó kiểm tra xem hiện tại <b>element.classList</b> có chứa
							class đã truyền vào hay không. Nếu:
							<br />
							<b>(+) có chứa:</b> Tại classList của element tiến hành <b>Xoá</b> class được truyền vào và render lại UI.
							<br />
							<b>(-) không chứa:</b> Dừng lại và không làm gì cả.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`toggle()`:</b>
						<span>
							Nhận vào <b>string (tạm gọi là class)</b> sau đó kiểm tra xem hiện tại <b>element.classList</b> có chứa
							class đã truyền vào hay không. Nếu:
							<br />
							<b>(+) có chứa:</b> thực hiện method <b>remove()</b>
							<br />
							<b>(-) không chứa:</b> thực hiện method <b>add()</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`contains()`:</b>
						<span>
							Nhận vào <b>string (tạm gọi là class)</b> sau đó kiểm tra xem hiện tại <b>element.classList</b> có chứa
							class đã truyền vào hay không. Nếu:
							<br />
							<b>(+) có chứa:</b> return ra giá trị <b>true</b>
							<br />
							<b>(-) không chứa:</b> return ra giá trị <b>false</b>
						</span>
					</li>
				</ul>
				<div class="py-3"></div>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở trên là các phương thức thuờng dùng của <b>classList</b> trong element để thao tác với class.
					<br />
					Bài toán thao tác với classList thường được áp dụng khi ta muốn thay đổi CSS của phần tử thông qua các class
					<br />
					<br />
					VD: thay đổi trạng thái expand, collapse của menu, card ...
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 20 }).then((res: apiResponde) => {
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
