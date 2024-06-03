<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong phần này chúng ta sẽ làm quen với khái niệm <b>`Component`</b> trong ứng dụng ReactJs. Component là một
					trong những core concept của React. Chúng được coi như những viên gạch nền tảng để cấu tạo lên giao diện của
					hệ thống. Tiếp theo chúng ta sẽ đi sâu vào để hiểu rõ về Component trong React.
				</p>
				<PageHeading text="Components" addOnClass="text-left" markedAs="component" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong React, component được coi như các block UI cơ bản để ghép với nhau và tạo nên những UI lớn hơn.
					Component được khởi tạo như những khối độc lập, có thể tái sử dụng. Trong React, mỗi component được tạo lên từ
					2 thành phần là <b>logic</b> và <b>view</b>. Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`logic`:</b>
						<span>
							Là thành phần được dùng để xử lí các thao tác liên quan đến dữ liệu, định nghĩa các actions hay tạo ra các
							condition để sử dụng tại view
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`view`:</b>
						<span>
							Là thành phần được dùng để trả ra UI và hiển thị lên cho người dùng thao tác, đồng thời cũng có nhiệm vụ
							là cầu nối giao tiếp giữa người dùng và ứng dụng.
						</span>
					</li>
				</ul>
				<PageHeading text="Component types" addOnClass="text-left" markedAs="component-types" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Về cơ bản, chúng ta có thể chia Component ra làm 2 loại là <FilePath>Class Component</FilePath> và
					<FilePath>Functional Component</FilePath>. Trong đó:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="whitespace-nowrap min-w-[200px]"><FilePath>Class Component</FilePath></div>
						<div>
							Là component được khởi tạo từ <b>`Class`</b> của JS, chúng kế thừa <b>`React.Component`</b>. Đây là phương
							pháp truyền thống trước khi React Hooks được giới thiệu trong phiên bản React 16.8.
							<div class="py-1"></div>
							<VCodeBlock
								:code="`class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</div>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<div class="whitespace-nowrap min-w-[200px]"><FilePath>Functional Component</FilePath></div>
						<div>
							Là component được khởi tạo từ việc định nghĩa <b>`Function`</b> của JS, Đây là một cách tiếp cận mới được
							giới thiệu từ React 16.8 với sự ra đời của React Hooks. Từ đó chúng trở nên vô cùng phổ biến vì dễ tiếp
							cận hơn so với Class components
							<div class="py-1"></div>
							<VCodeBlock
								:code="`import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Greeting;

`"
								highlightjs
								lang="javascript"
								theme="tomorrow-night-bright"
							/>
						</div>
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy chúng ta đã hiểu components là gì, có những loại components nào trong React rồi. Tiếp theo chúng ta sẽ
					tìm cách để tạo ra và sử dụng một components trong React.
				</p>

				<PageHeading text="Khởi tạo và sử dụng" addOnClass="text-left" markedAs="component-def" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ở những ví dụ tiếp theo, tôi sẽ sử dụng <b>Functional Component</b> để thực hiện các ví dụ, do tính dễ đọc của
					nó. Về cơ bản, ta có thể tách mỗi component thành một file riêng, đồng thời sử dụng <b>module</b> của JS để có
					thể nhúng component vào nơi cần sử dụng.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-content underline font-bold text-xl">
					B1: Tạo file và định nghĩa component
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong <FilePath>src</FilePath> tạo thư mục <FilePath>components</FilePath> để chứa các component, tiếp theo
					tạo file js tên <b>MyWords</b>
					<br />
					<br />
					Path:
					<FilePath>~/src/components/MyWords.jsx</FilePath>
				</p>
				<VCodeBlock
					:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
	// logic
	console.log('Tui được tạo ra rồi nè!');
	// view
  return <h1>Hello, tôi là một component tên là MyWords</h1>;
}
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Function ở trên chính là một ví dụ cơ bản của một Functional Component, chúng được tạo ra bằng cách việt một
					function trong JS. Trong đó, <b>`MyWords`</b> bao gồm 2 phần là <b>logic</b> và <b>view</b>.
					<br />
					<br />
					Cần lưu ý rằng phần <b>view</b> ở đây trông có vẻ giống với <b>HTML</b>, nhưng thực sự thì KHÔNG, chúng là
					JSX. Như vậy, khi viết phần view của một component, chúng ta cần tuân theo quy tắc chặt chẽ của <b>JSX</b>
					nếu không sẽ xảy ra lỗi runtime.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-content underline font-bold text-xl">
					B2: Sử dụng module-syntax của JS để export component
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Sau khi khởi tạo xong, chúng ta sẽ biến nó thành một module để có thể tái sử dụng khi cần thiết.
				</p>
				<VCodeBlock
					:code="` // ~/src/components/MyWords.jsx
// ... định nghĩa component ở bước trên.
export default MyWords;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Việc sử dụng <b>`export default`</b> giúp ta đánh dấu cho js biết rằng thằng <b>`MyWords`</b> này là một
					module, khi cần dùng tới nó thì nó cho phép ta gọi thông qua câu lệnh import của js.
					<br />
					<br />
					Cần lưu ý rằng mỗi một file Component BẮT BUỘC phải có 1 phần tử được <b>`export default`</b>. Bạn thử xoá
					thằng <b>`default`</b> kia coi, lỗi runtime liền á.
					<br />
					<br />
					Ngoài ra, mỗi file không nhất thiết chỉ được chứa một components, số lượng components của một file là không
					giới hạn:
				</p>
				<VCodeBlock
					:code="` // ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
	// logic
	console.log('Tui được tạo ra rồi nè!');
	// view
  return <h1>Hello, tôi là một component tên là MyWords</h1>;
}
export default MyWords;

// Component thứ 2
export function AnotherWords(props) {
	// logic

	// view
  return <h1>Hello, tôi là một component tên là AnotherWords, tui nằm chung với MyWords</h1>;
}
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-content underline font-bold text-xl">
					B3: Sử dụng Component
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Sau khi xong các bước trên, chúng ta sẽ sử dụng component <FilePath>MyWords</FilePath> bằng cách gọi tới nó
					trong component <FilePath>App</FilePath>
				</p>
				<VCodeBlock
					:code="` // ~/src/App.jsx
import React from 'react';
import MyWords from './components/MyWords.jsx';

function MyWords(props) {
	
  return (
		<>
		 // ... code block
		 	<MyWords />
		</>
	);
}
export default MyWords;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Ngon lành chứ hả (❁´◡`❁)? Như vậy, chúng ta đã biết cách tạo và sử dụng một Component trong React. Nhưng chúng
					ta cần phải lưu ý một số quy tắc sau đây.
				</p>
				<ul class="pl-5 list-disc">
					<li
						class=" text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1"
					>
						<p>
						1	- Tên của component cần được viết hoa chữ cái đầu. Ortherwise, React sẽ coi nó là một html tag chứ không
						phải component đâu nha.
						<br>
						<br>
						VD: nếu bạn xài<FilePath>{{`<myWords><myWords>`}}</FilePath> thay vì <FilePath>{{`<MyWords><MyWords>`}}</FilePath> 
						thì Component sẽ không render được.
						</p>
					</li>
					<li
						class=" text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1"
					>
						<p>
						2	- Trong phần <b>`view`</b> thì chỉ được phép có duy nhất 1 element có lvl cao nhất được return ra.
						<br>
						<br>
						VD: bạn không thể return ra 2 thằng div <FilePath>{{`<div>div 1 nè</div>`}}</FilePath> và  <FilePath>{{`<div>div 2 nè</div>`}}</FilePath>
						cùng cấp cao nhất, mà phải bao lấy nó bởi một thằng khác.
						</p>
					</li>
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
					:code="` //  ~/src/components/MyWords.jsx
import React from 'react';

function MyWords(props) {
// ✅ succes do ở level cao nhất chỉ có 1 phần tử
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
				/></div>

					</div>
				
				</ul>
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
					.getPagination({ appIds: 'reactjs-basic', currentDocId: 2 })
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
