<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					React là thư viện tạo giao diện người dùng (UI) đơn trang (Single Page Application - SPA).
					<br>
					<br>	
					<b>Vấn đề đặt ra</b>: <br>	
					<span class="pl-3 leading-8">Làm sao để xây dựng ứng dụng có nhiều trang (Home, About, Contact...) mà không cần tải lại toàn bộ trang web?</span>
					<br>	
					<br>	
					<b>Điểm khó khăn</b>:
					<br>	
					<span class="pl-3 leading-8">Cần quản lý URL (đường dẫn).</span>
					<br>	
					<span class="pl-3 leading-8">	Chuyển đổi giao diện theo URL mà vẫn giữ được trạng thái ứng dụng.</span>
				
				</p>	
				<PageHeading text="Router" addOnClass="text-left" markedAs="react-router" />
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<FilePath>react-router-dom</FilePath> là một thư viện JavaScript được sử dụng để quản lý các định tuyến (routing) trong ứng dụng React.
					Nó cho phép bạn xây dựng các ứng dụng web đơn trang (Single Page Applications - SPAs) và phân trang cho chúng.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content font-bold">B1: Install package:</p>
				<FakeTerminalUI :textCoppy="'npm install react-router-dom'">
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
					B3: Tạo ra các Path và Page Component tương ứng
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
				Ở bước này, chúng ta sẽ tiến hành tạo ra các <b>`path`</b> và gán nó với <b>`component`</b> tương ứng 
				để đảm bảo UI được render chính xác.
				</p>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trước hết, chúng ta sẽ xây dựng cấu trúc thư mục như sau:
				</p>
				<VCodeBlock
					:code="b1"
					highlightjs
					lang="html"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b><FilePath>/pages</FilePath>:</b> <span>
							Là thư mục dùng để viết các <FilePath>Page-Component</FilePath>
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b><FilePath>/pages/Home.js</FilePath> ...:</b> <span>
							Là các <FilePath>Page-Component</FilePath>, mỗi một file này đại diện cho một path của chúng ta
						</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<b><FilePath>/pages/index.js</FilePath>:</b> <span>
							Là nơi chúng ta tổng hợp lại các <FilePath>Page-Component</FilePath> và gán nó vào path tương ứng.
						</span>
					</li>
				</ul>

				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Như vậy, <FilePath>/pages/index.js</FilePath> của chúng ta sẽ được trình bày như sau:
				</p>
				<VCodeBlock
					:code="b2"
					highlightjs
					lang="javascript"
					theme="tomorrow-night-bright"
				/>
				<p class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Mục đích là để gom các <FilePath>Page-Component</FilePath> và <b>path</b> thành từng cặp và lưu lại vào biến <b>routes</b>, cuối cùng ta sẽ export 
					<b>routes</b> để dùng.
					<br>
					<br>
					Tiếp theo, chúng ta sẽ render các pages trên tại component <b>App.js</b> bằng mảng <b>routes</b> vừa được export:
				</p>
				<VCodeBlock
					:code="b3"
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
				b1:`src/
├── components/
│   ├── App.js
├── pages/
│   ├── Home.js
│   ├── About.js 	<-- File đại diện cho 1 route
│   ├── index.js  <-- File chứa danh sách routes
├── index.js      <-- File chính để render ứng dụng
`,
b2:`import Home from './Home';
import About from './About';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
];

export default routes;
`,
b3:`// ~src/app.jsx
import {Route, Routes} from 'react-router-dom';
import Header from './components/layouts/Header';
import routes from './pages/index';

function App() {
	return (
		<div>
			<Header/>
			<Routes>
				{	
					routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
					))
				}
			</Routes>
		</div>
	)
}

export default App;`
			};
		},
	};
</script>
<!-- 
https://blog.logrocket.com/authentication-react-router-v6/
https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
-->