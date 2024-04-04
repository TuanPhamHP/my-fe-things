<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Methods / Function" addOnClass="text-left" markedAs="js-method" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong Javascript, khi một <b>function</b> thuộc về một đối tượng cụ thể thì là có thể gọi nó là
					<b>method</b> của đối tượng đó.
					<br />
					Về cơ bản, <b>method</b> cũng chính là một <b>function</b>.
					<br />
					<br />
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">Ví dụ:</p>
				<VCodeBlock
					:code="`const sayHello = ()=>{
	console.log('Xin chào tất cả mọi người');
};

const user = {
	name: 'Tuấn',
	sayHi() {
	console.log('Xin chào tất cả mọi người nha !!!');
	}
}
sayHello();
user.sayHi();`"
					highlightjs
					lang="js"
					theme="atom-one-dark"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở ví dụ trên, hàm <b>`sayHello`</b> được coi như một hàm (function) => để thực thi hàm đó ta sẽ gọi đến hàm và
					cung cấp môi trường chạy <b>`sayHello()`.</b>
					<br />
					<br />
					Trong khi đó <b>`sayHi`</b> lại được coi như một phương thức (method). => để thực thi method này ta sẽ truy
					cập vào method <b>`sayHi`</b> và cung cấp môi trường chạy. Ta thực hiện như truy cập vào 1 trường trong
					object. <b>`user.sayHi()`</b>
					<br />
				</p>

				<!-- END -->
				<p class="text-slate-900 italic dark:text-white my-5 leading-8 text-lg">
					Túm lại,
					<br /><b>function</b> không thuộc về đối tượng nào thì gọi là hàm - function <br /><b>function</b> thuộc về
					một đối tượng nào đó thì gọi là phương thức - method
				</p>
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
				this.$api.documentations.getPagination({ appIds: 'html-basic', currentDocId: 16 }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
