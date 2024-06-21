<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phần này chúng ta sẽ làm quen với khái niệm <b>`JSX`</b>. Một số đặc điểm và lưu ý trong khi viết JSX.
				</p>
				<PageHeading text="Định nghĩa" addOnClass="text-left" markedAs="component" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					JSX là một ngôn ngữ có thể xem như được mix giữa JS và HTML, tức là chúng cho phép chúng ta viết JS bên trong
					HTML, JSX có quy tắc riêng của nó như mọi ngôn ngữ khác mà người dùng buộc phải tuân thủ.
				</p>

				<PageHeading text="JSX Rules" addOnClass="text-left" markedAs="jsx-rules" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo, chúng ta sẽ nói về các quy tắc (rules) của JSX mà bắt buộc người dùng phải tuân thủ:
				</p>
				<PageHeading text="1. Return a single root element" addOnClass="text-left" markedAs="jsx-rules-01" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Khi viết JSX, bạn chỉ được phép return một và duy nhất một <b>root element</b> - tức element có cấp cao nhất.
					Vậy chuyện gì xảy ra nếu bạn return ra nhiều hơn 1 <b>root element</b>? Lỗi chứ gì nữa mà nghĩ. Vậy làm sao để
					xử lí cái tình huống này? <br />
					<b>=> Tạo ra 1 thằng root mới, bao lấy 2 thằng kia.</b>
					<br />
					<br />
					Ví dụ nè:
				</p>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock
							:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
	
// ❌ Lỗi do ở level cao nhất có nhiều hơn 1 phần tử
  return <div>div 1 nè</div>
		<div>div 2 nè</div>;
}
export default MyWords;
`"
							highlightjs
							lang="javascript"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
// ✅ success do ở level cao nhất chỉ có 1 phần tử
  return (<div>
		<div>div 1 nè</div>
		<div>div 2 nè</div>
</div>);
}
export default MyWords;
`"
							highlightjs
							lang="javascript"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Không muốn tạo ra thêm một thằng <b>`div`</b> vì sợ làm cho cấu trúc HTML bị dư thừa? React got you, react
					cung cấp cho chúng mình một cái thằng tên là <FilePath>Fragment</FilePath>, nó là một cái thẻ giả, nó sẽ đóng
					vai trò như một root element cho các bạn, và khi render ra HTML thì nó tự xoá. Đây là cách viết nó:
				</p>
				<VCodeBlock
					:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
// ✅ <></>: là fragment đó.
  return (<>
		<div>div 1 nè</div>
		<div>div 2 nè</div>
</>);
}
export default MyWords;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>

				<PageHeading text="2. Close all the tags" addOnClass="text-left mt-5" markedAs="jsx-rules-03" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					JSX Nói: "DÙNG XONG THẺ PHẢI ĐÓNG VÀO 🤬🤬🤬"  x3.
					<br>
					<br>
					 Như vậy, mọi thẻ trong JSX đều phải có phần đóng thẻ. Nếu thẻ
					của bạn ở dạng self-closing như thằng <FilePath>{{ `<img` + ' >' }}</FilePath> thì phải viết lại thành
					<FilePath>{{`<img />`}}</FilePath>. Còn những dạng thẻ có closing-tag riêng thì không được thiếu <FilePath>{{`</tag-name>`}}</FilePath>
					<br />
					<br />
					Ví dụ nè:
		
				</p>
				<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
					<div class="col-span-1">
						
						<VCodeBlock
							:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
// ❌ Lỗi do hem có thẻ đóng cho thằng input
  return <div>
		<input type='text' placeholder='Tên iem là gì' >
	</div>;
}
export default MyWords;
`"
							highlightjs
							lang="javascript"
							theme="tomorrow-night-bright"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
// ✅ Đã có phần đóng nè
  return <div>
		<input type='text' placeholder='Tên iem là gì' />
	</div>;
}
export default MyWords;
`"
							highlightjs
							lang="javascript"
							theme="tomorrow-night-bright"
						/>
					</div>
				</div>

				<PageHeading text="3. camelCase most of things!!!" addOnClass="text-left mt-5" markedAs="jsx-rules-02" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Do JSX turn to JS và các attributes được viết trong JSX cũng sẽ được object hoá vào JS nên hầu hết các
					attributes của JSX sẽ được viết dưới dạng camelCase thay vì dashed. Lí do? Vì JS không biết đọc dashed á =]]]
					<br />
					<br />
					Ngoài ra còn có 1 số attributes đặc biệt phải nhớ (giống vụ động từ bất quy tắc trong tiếng Anh á) như:
					<b>class -> className</b>, <b>for -> htmlFor</b>
					<br />
					<br />
					Thực hành nào: <button class="btn px-2 py-1 bg-green-400 rounded dark:bg-green-500" @click="$router.push('/reactjs-basic/practice/ee_1')">Click me</button>
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

	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';
	import { apiResponde } from 'models';
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
			TabGroup,
			TabList,
			Tab,
			TabPanels,
			TabPanel,
		},
		data() {
			return {
				pagePagination: {
					next: {
						title: 'Render List Data',
						link: 'reactjs-basic/documentation/render-list-data',
					},
					prev: {
						title: 'Hooks',
						link: 'reactjs-basic/documentation/hooks',
					},
				},
				number: 0,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 5 })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
			demoFnc1() {
				this.number++;
				alert(this.number - 1);
			},
		},
	};
</script>
