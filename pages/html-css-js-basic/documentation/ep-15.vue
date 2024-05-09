<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="introduction" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong Javascript, <b>Object</b> là kiểu dữ liệu dạng Reference, <b>Object</b>cũng là kiểu dữ liệu chính trong
					Javascript. Một object trong JavaScript là một tập hợp các cặp <b class="whitespace-nowrap"> key-value</b>,
					trong đó:

					<br />
					<b>`key`</b> là một chuỗi (hoặc một Symbol, một tính năng đặc biệt của JavaScript từ ES6 trở đi)

					<br />
					<b>`value`</b> có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả các object khác.
					<br />
				</p>
				<PageHeading text="Syntax" addOnClass="text-left" markedAs="object-syntax" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock
					:code="`let book = {
	name: 'Doraemon tập 1',
	price: 22000,
	available_count: 24
};			
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở ví dụ trên, một <b>object</b> được tạo ra và gán vào biến tên là <b>book</b>, object bắt đầu và kết thúc bởi
					cặp dấu: <b>{}</b>
					<br />
					Nằm trong đó là các cặp key-value. Các properties này được ngăn cách nhau bởi dấu <b>"," - phẩy</b>.
					<br />
					<br />
					Key trong Object có thể là: <b>Chuỗi (string),</b> <b>Số (number),</b> <b>Ký tự (Symbol), regex.</b>
					<br />
					Sau đây chúng ta sẽ cùng tìm hiểu bài toán CRUD với các field-trường trong Object
				</p>

				<PageHeading text="CRUD" addOnClass="text-left opacity-0" markedAs="crud" :lvl="1" />
				<PageHeading text="R | READ" addOnClass="text-left" markedAs="crud-read" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Để truy cập đến 1 key trong object ta có 2 cách: <b>(1) ObjectName.key</b> hoặc <b>(2) ObjectName['key']</b>
					<br />
					Trong đó:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`ObjectName`:</b>
						<span> Là tên của <b>object</b>, ở đây chính là tên của biến mà chúng ta gán cho object. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`key`:</b>
						<span>
							Là tên trường mà ta muốn truy cập, VD: <b>'name', 'price' ...</b> <br />Nếu key là dạng string không chứa
							các ký tự đặc biệt như: -, @, ... hoặc number thì ta có thể dùng cách (1) để truy cập vào trường.
							<br />
							Với trường hợp key là <b>number, symbol, ...</b> (1) sẽ gặp lỗi syntax, ta có thế sử dụng cách 2 là
							ObjectName['key'] để truy cập vào trường.
						</span>
					</li>
				</ul>
				<VCodeBlock
					:code="`let book = {
	name: 'Doraemon tập 1',
	price: 22000,
	available_count: 24,
	45: 'Trường đặc biệt 01'
};
// ✔️ truy cập và trả ra giá trị của trường 'name'
console.log('Cuốn sách này có tên là: ' + book.name);
// ❌ lỗi syntax
console.log(book.45) 
// ✔️ sử dụng cách (2) ObjectName[key] để truy cập các trường đặc biệt
console.log(book['45']) // hoặc book[45]
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<div class="py-3"></div>
				<PageHeading text="C | CREATE" addOnClass="text-left" markedAs="crud-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong <b>object</b> để add thêm một trường vào object thì đơn giản nhất ta sẽ truy cập vào trường đó và gán
					một giá trị cho nó
					<br />
				</p>
				<VCodeBlock
					:code="`// ở đây tôi muốn thêm trường description vào object book
book.description = 'Truyện tranh'
console.log(book)
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>

				<div class="py-2"></div>

				<PageHeading text="U | UPDATE" addOnClass="text-left" markedAs="crud-update" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Bài toán Update giá trị một trường trong object cũng tương tự với bài toán Create.
					<br />
					Trong <b>object</b> để update một trường trong object thì đơn giản nhất ta sẽ truy cập vào trường đó và gán
					một giá trị mới cho nó
				</p>
				<VCodeBlock
					:code="`book.available_count = 20
console.log(book)
`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>

				<div class="py-3"></div>

				<PageHeading text="D | DELETE" addOnClass="text-left" markedAs="crud-delete" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong <b>object</b> để delete một trường thì rất đơn giản, ta sẽ sử dụng keyword <b>delete</b>
					của JS với trường mà ta muốn xoá
				</p>
				<VCodeBlock
					:code="`delete book.available_count;
console.log(book)
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 15 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
