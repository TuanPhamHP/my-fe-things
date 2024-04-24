<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>pseudo-classes</b> và <b>pseudo-elements</b> trong CSS là cách để chọn và định dạng các phần tử trong tình
					huống cụ thể
					<br />
					<br />
					Các <b>pseudo-classes</b> thường được sử dụng để chọn các phần tử dựa trên trạng thái của chúng, ví dụ như khi
					phần tử được hover, focus v.v . Các <b>pseudo-elements</b> lại được sử dụng để chọn và định dạng các phần tử
					con cụ thể của một phần tử, như phần tử đầu tiên, phần tử cuối cùng, hoặc phần tử đầu tiên của một loại nhất
					định.
				</p>
				<PageHeading text="Pseudo Classes" addOnClass="text-left mb-3" markedAs="syntax-pseudo-classes" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>pseudo-classes</b> sẽ được bắt đầu bằng một dấu <b>`:`</b>
					<br />
					<br />
					Syntax: <b>`selector:pseudo-classes-name`</b>
					<br />
					VD: <b>`.text-red:hover`</b>
					<br />
					<br />

					Một số <b>pseudo-classes</b> thường được sử dụng:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`:hover`</b>
						<div class="grow">Chọn phần tử khi con trỏ chuột di chuyển qua phần tử đó.</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`:focus`</b>
						<div class="grow">
							Chọn phần tử khi nó có trạng thái là focus. Thường dùng với input, button hoặc các phần tử có set
							tabindex.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`:visited`</b>
						<div class="grow">
							Trạng thái của một đường link trong thẻ {{ `<a></a>` }} mà đã được lưu lại ở cache của browser.
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`:first-child`</b>
						<div class="grow">Chọn phần tử con đầu tiên của một phần tử cha.</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`:last-child`</b>
						<div class="grow">Chọn phần tử con cuối cùng của một phần tử cha.</div>
					</li>
				</ul>
				<VCodeBlock
					:code="`/* Sử dụng pseudo-class */
.my-text:hover {
  background-color: red;
}
.my-input-block:focus {
  background-color: gray;
	color:blue;
}`"
					highlightjs
					lang="CSS"
					theme="vs2015"
				/>
				<div class="py-3"></div>
				<PageHeading text="Pseudo Elements" addOnClass="text-left mb-3" markedAs="syntax-pseudo-elements" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<b>pseudo-elements</b> sẽ được bắt đầu bằng dấu <b>`::`</b>
					<br />
					Syntax: <b>`selector::pseudo-elements-name`</b>
					<br />
					<br />
					VD: <b>`.my-block::before`</b>
					<br />
					<br />

					Một số <b>pseudo-elements</b> thường được sử dụng:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`::before`</b>
						<div class="grow">
							Thêm một phần tử giả là con cấp 1 và nằm đầu tiên của phần tử đã chọn. Phần tử này bắt buộc phải có thuộc
							tính css `content`
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`::after`</b>
						<div class="grow">
							Thêm một phần tử giả là con cấp 1 và nằm cuối cùng của phần tử đã chọn. Phần tử này bắt buộc phải có thuộc
							tính css `content`
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`::first-letter`</b>
						<div class="grow">Chọn và định dạng chữ cái đầu tiên của phần tử</div>
					</li>
				</ul>
				<VCodeBlock
					:code="`/* Sử dụng pseudo-element */
.my-block::before {
  content: 'Tôi là pseudo-element before';
	display: block;
	width: 120px;
	height:120px;
	background-color: burlywood; 
}`"
					highlightjs
					lang="CSS"
					theme="vs2015"
				/>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngoài ra, ta còn có thể sử dụng kết hợp cả <b>pseudo-elements</b> và <b>pseudo-classes</b>
					cùng với nhau.
				</p>
				<VCodeBlock
					:code="`/* Sử dụng kết hợp pseudo */
.my-block:hover::after {
  content: 'Tôi là pseudo-element after';
	display: block;
	width: 120px;
	height:120px;
	background-color: cadetblue; 
}`"
					highlightjs
					lang="CSS"
					theme="vs2015"
				/>
				<div class="py-3"></div>
				<PageHeading text="Luyện tập" addOnClass="text-left mb-3" markedAs="practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Cho đoạn HTML sau:</p>
				<VCodeBlock
					:code="`<div class='my-example-block'>
	<a href='https://google.com' target='_blank'>Click để mở link</a>
	<p class='p-tag-example'>Đây là text mẫu</p>
</div>`"
					highlightjs
					lang="HTML"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Sử dụng CSS-Pseudo để:
					<br />
					<br />
					1) Khi hover vào thẻ <b>`a`</b> thì đổi màu nền của nó thành màu <b>`cadetblue`</b>
					<br />
					2) Khi hover vào thẻ có class là <b>`my-example-block`</b> thì đổi màu text của thẻ <b>`p`</b> thành màu đỏ
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 11 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
