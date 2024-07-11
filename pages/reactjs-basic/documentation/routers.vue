<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
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
import { BrowserRouter } from 'react-router-dom';
import listRoutes from './listRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />	
		</BrowserRouter>
	</React.StrictMode>
);
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Chúng ta dùng  <b>`BrowserRouter `</b> của <b>`react-router-dom`</b> để quản lý điều hướng trong project của chúng ta.
					<br>
				 <b>`{{ `<BrowserRouter >` }}`</b> cung cấp một container cho các child component của nó, trong trường hợp này thì chính là 
				 <b>{{ `<App />` }}</b>.

				</p>
			
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">
					B2: Tạo ra các Path và Page Component tương ứng
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Ở bước này, chúng ta sẽ tiến hành tạo ra các <b>`path`</b> và gán nó với <b>`component`</b> tương ứng 
				để đảm bảo UI được render chính xác.
				</p>
				<VCodeBlock
					:code="` // ~src/app.jsx
import {Link, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
	<div>
		<nav>
			<ul>
				<li> <Link to='/'>Home</Link> </li>
				<li> <Link to='/about-us'>About Us</Link> </li>
			</ul>
		</nav>
		<Routes>
			<Route path='/' element={<HomePage />}></Route>	
			<Route path='/about-us' element={<AboutUs />}></Route>
		</Routes>
	</div>
	)
}

export default App;
`"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Ở đây chúng ta dùng <b>`Routes, Route`</b> là các component được cung cấp bởi <b>`react-router-dom`</b>
				để tạo ra các path và liên kết chúng với các component tương ứng:
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Routes`:</b>
						<span>
							là một container component dùng để bao bọc một tập hợp các Route. Nó sẽ tìm và render thành phần Route đầu tiên mà khớp với đường dẫn hiện tại.
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Route`:</b>
						<span>
							định nghĩa mối quan hệ giữa một đường dẫn (URL path) và một component cần render khi đường dẫn đó được truy cập.
							<b>Path</b> được khai báo qua props <b>path</b>, component được khai báo qua props <b>element</b>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b>`Link`:</b>
						<span>
							giúp điều hướng url mà không cần reload lại trang như thẻ <b>{{ `<a></a>` }}</b>
						</span>
					</li>
				</ul>
				
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Ngoài ra, chúng ta có thể xử lý các lỗi tìm kiếm trang như 404, 403, 405 ... thông qua middleware.
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
						next: {
						title: 'useContext',
						link: '/reactjs-basic/documentation/context',
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