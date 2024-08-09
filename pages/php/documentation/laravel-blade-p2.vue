<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Layouts" addOnClass="text-left mt-3" markedAs="laravel-layout" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 mb-5">
					Layout sẽ giúp chúng ta tăng tính tái sử dụng của các components, đồng thời nó cũng giúp tăng tính quản lí và
					đơn giản hoá việc bảo trì dự án.
					<br />
					Để tạo một layout cho Blade view, bạn có thể tạo một file layout chung và sử dụng nó cho các view khác như
					sau:
					<br />
					<br />
					<b>Bước 1: Tạo layout</b>
					<br />
					Tạo thư mục <b>`resources/views/layouts`</b> và file <b>`app.blade.php`</b> trong đó:
				</p>
				<VCodeBlock :code="b8" highlightjs lang="html" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-2 mb-5">
					Lưu ý rằng, ở phần bài tập này chúng ta sử dụng Bootstrap 5 để dựng giao diện. Như vậy, chúng ta đã tạo được
					một layout, với layout vừa tạo ta sẽ tái sử dụng được phần <b>navbar, footer</b> đồng thời toàn bộ content sẽ
					được inject vào <b>`@yield('content')`</b>.
					<br />
					<br />
					<b>Bước 2: Sử dụng layout trong Blade view</b>
				</p>
				<VCodeBlock :code="b9" highlightjs lang="html" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-4 mb-5">
					<b>Bước 3: Khai báo Controller-action & route</b>
					<br />
				</p>
				<VCodeBlock
					:code="`// TodoController
function index()
{
	return view('todo-app');
}

// routes/web.php
Route::get('/app/todo', [TodoController::class,'index']);`"
					highlightjs
					lang="php"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white mt-2 mb-5">
					Done!!! Lưu ý ở phần này chúng ta sẽ làm đầy đủ các bước là:
					<br />
					1/ Tạo views
					<br />
					2/ Tạo Controller để xử lý
					<br />
					3/ Tạo route và gán với action tương ứng.
				</p>
				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/php/practice/e_4"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
				</p>
				<doc-next-page :pagination="pagePagination" />
			</div>
			<PageMarkBook />
		</div>
	</div>
</template>
<script lang="ts">
	import PageMarkBook from '@/components/Documentation/PageMarkBook.vue';
	import PageHeading from '@/components/Documentation/PageHeading.vue';
	import FakeTerminalUI from '@/components/FakeTerminalUI.vue';
	import { apiResponde } from '@/models';
	import DocNextPage from '@/components/DocNextPage.vue';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: {
			PageMarkBook,
			PageHeading,
			FakeTerminalUI,
			DocNextPage,
			Disclosure,
			DisclosureButton,
			DisclosurePanel,
			VCodeBlock,
		},
		data() {
			return {
				b8: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'My Happy App')</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="collapse navbar-collapse container">
    <a class="navbar-brand" href="#">Todo App</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/app/todo">Todo</a>
            </li>
        </ul>
    </div>
</nav>

<div class="container mt-4">
    @yield('content')
</div>

<footer class="footer mt-auto py-3 bg-light">
    <div class="container">
        <span class="text-muted">&copy; 2024 Todo App by Phạm Anh Tuấn</span>
    </div>
</footer>
</body>
`,
				b9: `@extends('layouts.app')

@section('title', 'Todo List')

@section('content')
    <div class="container">
        <h1 class="my-4">Todo List</h1>

        <!-- Danh sách to-do -->
        <table class="table mt-4">
            <thead>
            <tr>
                <th>Tiêu đề</th>
                <th>Mô tả</th>
                <th>Trạng thái</th>
            </tr>
            </thead>
            <tbody>
            @if(!empty($todos))
            @foreach($todos as $todo)
                <tr>
                    <td>{{ $todo->title }}</td>
                    <td>{{ $todo->description }}</td>
                    <td>{{ $todo->completed ? 'Hoàn thành' : 'Mới' }}</td>
                </tr>
            @endforeach
                @endif
            </tbody>
        </table>
    </div>
@endsection
`,
				controllerReturns: [
					{
						id: 1,
						name: 'view($viewName)',
						desc: 'Trả về một view để hiển thị giao diện người dùng. Đây là cách phổ biến nhất để trả về dữ liệu từ controller.',
						syntax: `return view('welcome');`,
					},
					{
						id: 2,
						name: 'response()->json($data);',
						desc: 'Trả về dữ liệu JSON, thường được sử dụng trong các API.',
						syntax: `return response()->json($data);`,
					},
					{
						id: 3,
						name: 'response()',
						desc: 'Trả về một đối tượng Response tùy chỉnh, cho phép bạn thiết lập tiêu đề, cookie, và các thuộc tính khác của phản hồi HTTP.',
						syntax: `return response()->json($data);`,
					},
					{
						id: 4,
						name: 'redirect()',
						desc: 'Chuyển hướng người dùng đến một URL khác, thường được sử dụng sau khi thực hiện một hành động như lưu dữ liệu.',
						syntax: `return redirect()->route('home')->with('status', 'User created successfully!');`,
					},
				],
				viewsConfig: [
					{
						id: 1,
						name: 'return view("homepage");',
						desc: 'resources/views/homepage.blade.php',
					},
					{
						id: 2,
						name: "return view('admin.dashboard');",
						desc: 'resources/views/admin/dashboard.blade.php',
					},
					{
						id: 3,
						name: "return view('folder.subfolder.filename');",
						desc: 'resources/views/folder/subfolder/filename.blade.php',
					},
				],
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-16-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
