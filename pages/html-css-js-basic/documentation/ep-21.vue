<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="title" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở bài này chúng ta sẽ tiếp tục tìm hiểu về DOM qua các bài toán thao tác với <b>`Attributes`</b> ...
				</p>

				<PageHeading text="Attributes" addOnClass="text-left" markedAs="dom-attributes" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Attributes là các đặc tính được khai báo tại <b>open tag</b> của một thẻ trong HTML, thông qua việc truy cập
					attributes bằng DOM, nó giúp ta đọc, chỉnh sửa hoặc xoá attributes của một phần tử. Bằng cách sử dụng các
					method được cung cấp sẵn của
					<b>DOM</b>
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Đầu tiên chúng ta sẽ viết 1 thẻ HTML và khai báo attributes cho nó. Ở đây tôi sẽ sử dụng thẻ <b>`img`</b>.
					<br />
					Trong thẻ <b>`img`</b> này ta có 3 attributes là: <b>`id`, `src`, `alt`</b>
				</p>
				<div class="grid grid-cols-1 gap-3 items-center">
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- Thẻ img ở HTML -->
<img id='myImage' src='https://hapotravel.com/wp-content/uploads/2023/03/tong-hop-25-meme-hinh-nen-vui-nhon-va-hai-huoc_19.jpg' alt='ảnh-meme'>
`"
							highlightjs
							lang="html"
							theme="atom-one-dark"
						/>
					</div>

					<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
						Tiếp theo, sử dụng DOMQuery để trỏ vào thẻ <b>`img`</b> và gán cho biến <b>`myImageElement`</b>
						<br />
						<br />
						Từ đây trở đi ta có thể dùng biến <b>`myImageElement`</b> để đại diện cho thẻ <b>`img`</b>.
					</p>
					<div class="col-span-1">
						<VCodeBlock
							:code="`// Bước 1: Truy cập vào element mà ta muốn thao tác
const myImageElement = document.querySelector('#myImage');
`"
							highlightjs
							lang="js"
							theme="atom-one-dark"
						/>
					</div>
				</div>
				<div class="py-3"></div>
				<PageHeading text="getAttribute" addOnClass="text-left" markedAs="dom-get-attribute" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`getAttribute`</b> là method được sử dụng để trả ra giá trị của attribute. Method này nhận vào một chuỗi,
					chuỗi này sẽ được coi là tên của attribute, sau đó <b>`getAttribute`</b> tiến hành tìm kiếm attribute có tên
					tương ứng và trả ra giá trị của attribute vừa tìm được.
					<br />
					<br />
					VD: <b>myImageElement.getAttribute('alt'):</b> Sẽ tìm kiếm attribute có tên là <b>alt</b> của phần tử
					<b>myImageElement</b> và trả ra giá trị của nó là 'ảnh-meme'
				</p>
				<VCodeBlock
					:code="`// Sử dụng method getAttribute để lấy giá trị của 'alt'
const imageAltValue = myImageElement.getAttribute('alt');
console.log(imageAltValue); // output: 'ảnh-meme'
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<div class="py-3"></div>
				<PageHeading text="setAttribute" addOnClass="text-left" markedAs="dom-set-attribute" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>`setAttribute`</b> là method được sử dụng để tạo mới/cập nhật giá trị của attribute. Method này nhận vào 2
					params. <br />
					Lần lượt là <b>attribute-name</b> và <b>value</b>. Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`attribute-name`:</b>
						<span> Là tên của attribute mà ta muốn tác động đến. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`value`:</b>
						<span> Là giá trị mà ta muốn set cho attribute ở trên. </span>
					</li>
				</ul>
				<VCodeBlock
					:code="`// Sử dụng method getAttribute để lấy giá trị của 'alt'
myImageElement.setAttribute('width', '300px');
// check inspect của phần tử sẽ thấy có thêm attribute 'width' với giá trị là '300px';
myImageElement.setAttribute('alt', 'ảnh-mới');
// check inspect của phần tử sẽ thấy attribute 'alt' được update giá trị mới là 'ảnh-mới'
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 21 }).then((res: apiResponde) => {
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
