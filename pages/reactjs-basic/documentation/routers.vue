<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 md:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Router" addOnClass="text-left" markedAs="react-router" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					React Router là một thư viện JavaScript được sử dụng để quản lý các định tuyến (routing) trong ứng dụng React.
					Nó cho phép bạn xây dựng các ứng dụng web đơn trang (Single Page Applications - SPAs) và phân trang cho chúng.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">B1: Install package:</p>
				<FakeTerminalUI :textCoppy="'node --version'">
					<p>npm install react-router-dom</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B2: Setup Routers cho App:
				</p>
				<VCodeBlock
					:code="` // ~src/index.js
// ...
import App from './App.js'
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';

const listRoutes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={listRoutes} />
	</React.StrictMode>
);
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trước hết, chúng ta sẽ tạo một biến <b>listRoutes</b> là mảng mà mỗi item trong này 
					là một object đại diện cho một route cơ bản gồm ít nhất 2 phần là <b>`path`</b> và <b>`Component`.</b>
					<br>
					Tiếp theo chúng ta sử dụng Built-in component <b>`{{ `<RouterProvider>` }}`</b> và truyền vào props <b>router</b> với giá trị chính là 
					mảng <b>listRoutes</b> ta vừa tạo. Component này sẽ tiến hành map các <b>path</b> và <b>Component</b> tương ứng trong từng item của <b>listRoutes</b>.
					<br>
					<br>
					Về cơ bản, chúng ta đã hoàn thành việc tạo và map các path. Để tạo thêm các route 
					thì bạn chỉ việc update thêm item vào mảng <b>listRoutes</b> với cấu trúc
					tương tự là được.
					<br>
					<br>
					Nhưng ngoài ra ta có thể tách riêng việc khai báo <b>listRoutes</b> thành một file riêng biệt để 
					tăng tính tổ chức cho project và cũng làm file <b>`index.js`</b> của chúng ta "sạch" hơn
				</p>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B2.2: Tách riêng phần khai báo `listRoutes`
				</p>
				<VCodeBlock
					:code="` // ~src/routes.js
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

const listRoutes = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/about-us',
		element: <AboutUs />,
		children: [
			{
				path: 'ppg/:id',
				element: <HomePage />,
			},
		],
	},
]);

export default listRoutes;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, chúng ta vừa khai báo cho <b>`listRoutes`</b> và export mảng này để tái sử dụng.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B2.3: Import `listRoutes` và truyền vào cho `{{ `<RouterProvider>` }}`
				</p>
				<VCodeBlock
					:code="` // ~src/index.js
// ...
import App from './App.js'
import { createBrowserRouter} from 'react-router-dom';
import listRoutes from './listRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={listRoutes} />
	</React.StrictMode>
);
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Trông 'sạch' hơn hẳn rồi nhỉ, ở bài này chúng ta đã hoàn thành việc setup router cho app của chúng ta.
				<br>
				<br>
				Tới bài sau, chúng ta sẽ tìm hiểu về <b>Auth, fallback ...</b> cho route.
				</p>
				<div class="py-2"></div>

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
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, VCodeBlock, DocNextPage },
		data() {
			return {
				pagePagination: {
					
					prev: {
						title: 'Conditional Rendering',
						link: '/reactjs-basic/documentation/conditional-rendering',
					},
				},
			};
		},
	};
</script>
<!-- 
https://blog.logrocket.com/authentication-react-router-v6/
https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
-->