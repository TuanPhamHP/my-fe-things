<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Làm việc với Blade" addOnClass="text-left " markedAs="laravel-blade" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Trước hết, chúng ta sẽ sử dụng lại <FilePath>HomepageController</FilePath> và
					<FilePath>homepage.blade.php</FilePath>
					đã được tạo ở bài trước để phục vụ cho việc demo:
				</p>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<div class="col-span-1">
						<VCodeBlock
							:code="`// HomepageController
class HomepageController extends Controller
{
    //
    public function index()
    {
        return view('homepage');
    }
}`"
							highlightjs
							lang="php"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`<!-- homepage.blade.php -->
<div>
    <h1>Xin chào, tui là Homepage nè.</h1>
</div>
`"
							highlightjs
							lang="html"
							theme="vs2015"
						/>
						<p class="text-slate-900 dark:text-white my-2">
							Nhớ tạo cả route để kết nối request và action của Controller nha.
						</p>
						<VCodeBlock
							:code="`// routes/web.php
Route::get('/homepage', [HomepageController::class, 'index']);
`"
							highlightjs
							lang="php"
							theme="vs2015"
						/>
					</div>
				</div>
				<PageHeading
					text="1/ Nhận và hiển thị data"
					addOnClass="text-left mt-5"
					markedAs="laravel-blade-data"
					:lvl="2"
				/>
				<p class="text-slate-900 dark:text-white my-5">
					Chúng ta có thể truyền dữ liệu vào method <b>`view()`</b> để sử dụng trong các blade-view như sau:
				</p>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<div class="col-span-1">
						<VCodeBlock
							:code="`// truyền dữ liệu vào view
return view('homepage' , ['name'=>'Tuấn']);`"
							highlightjs
							lang="php"
							theme="vs2015"
						/>
					</div>
					<div class="col-span-1">
						<VCodeBlock
							:code="`// ở trong blade-view có thể sử dụng ngay lập tức
<h1>Xin chào, {{$name}}</h1>
`"
							highlightjs
							lang="php"
							theme="vs2015"
						/>
					</div>
				</div>
				<PageHeading text="2/ Directives" addOnClass="text-left mt-3" markedAs="laravel-blade-diretives" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-3 mb-5">
					Laravel cung cấp nhiều directives để giúp bạn dễ dàng làm việc với Blade.
				</p>
				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl">
					<b>2.1/ Conditional</b>: return view theo điều kiện
				</p>
				<p class="text-slate-900 dark:text-white"><b>If Statements</b></p>
				<VCodeBlock
					:code="`@if ($condition)
    <p>View when Condition is true</p>
@else
    <p>View when Condition is false</p>
@endif
`"
					highlightjs
					lang="php"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white"><b>Switch Statements</b></p>
				<VCodeBlock
					:code="`@switch($i)
    @case(1)
        First case...
        @break
 
    @case(2)
        Second case...
        @break
 
    @default
        Default case...
@endswitch
`"
					highlightjs
					lang="php"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>2.2/ Loops</b>: return view theo vòng lặp</p>
				<p class="text-slate-900 dark:text-white"><b>For</b></p>
				<VCodeBlock
					:code="`@for ($i = 0; $i < 10; $i++)
    <p>{{ $i }}</p>
@endfor
`"
					highlightjs
					lang="php"
					theme="vs2015"
				/>
				<p class="text-slate-900 dark:text-white"><b>Foreach</b></p>
				<VCodeBlock
					:code="`@foreach ($users as $user)
    <p>{{ $user->name }}</p>
@endforeach
`"
					highlightjs
					lang="php"
					theme="vs2015"
				/>

				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>2.3/ Include</b>: nhúng một blade-view khác.</p>
				<p class="text-slate-900 dark:text-white"><b>Include</b></p>
				<VCodeBlock :code="`@include('view.name', ['some' => 'data'])`" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white"><b>IncludeIf, IncludeWhen, IncludeFirst ....</b></p>

				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>2.4/ Extending a Layout</b>: kế thừa layout.</p>
				<p class="text-slate-900 dark:text-white">Tạo layout:</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white">Kế thừa layout tại view:</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 mb-2">
					-) Tại layout chúng ta sử dụng <b>@yield('name')</b> để tạo ra một vùng view dynamic.

					<br />-) Tại các view con kế thừa nó ta sử dụng <b> @section('name') và @endsection.</b> để cho phép khai báo
					các view custom theo mong muốn. Laravel sẽ kết nối chúng thông qua 'name'.
				</p>
				<PageHeading text="3/ Components" addOnClass="text-left mt-3" markedAs="laravel-components" :lvl="2" />
				<p class="text-slate-900 dark:text-white mt-2 mb-5">
					Component là một tính năng vô cùng quen thuộc, Blade components cho phép bạn tạo các phần tử UI có thể tái sử
					dụng.
					<br />
					<br />
					<b>Tạo Component</b>
					<br />
					Tạo một component file <b>resources/views/components/button.blade.php</b>:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5">
					Bây giờ, chúng ta có thể sử dụng Blade Component với cú pháp
					<FilePath> {{ `<x-component-name> </x-component-name>` }}</FilePath>
					trong bất kỳ view nào trong view như sau:
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5">
					Ở trên là một ví dụ về cách tạo component cực kì đơn giản, chúng ta cần lưu ý rằng trong thực tế thì có nhiều
					cách khác để tạo một component với blade, và tuỳ theo bài toán cần xử lí mà chúng ta sẽ có những cách tạo
					component phù hợp riêng.
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
				ltr: `{{ }}`,
				b1: `<!-- resources/views/homepage.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Homepage</title>
</head>
<body>
    <h1>Xin chào, tui là Homepage nè.</h1>
</body>
</html>
`,
				b2: `namespace App/Http/Controllers;

use App/Http/Controllers/Controller;
use Illuminate/Http/Request;

class HomepageController extends Controller
{
	public function index()
	{
			// trả ra view có tên là homepage
			return view('homepage');
    }
}
`,
				b3: `// ~/routes/web.php
use App/Http/Controllers/HomepageController;
// ...
Route::get('/homepage', [HomepageController::class, 'index']);
`,
				b4: `<!-- resources/views/layouts/app.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    @section('header')
        This is the master sidebar.
    @show

    <div class="container">
        @yield('content')
    </div>
</body>
</html>
`,
				b5: `<!-- resources/views/child.blade.php -->
@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <p>This is my body content.</p>
@endsection
`,
				b6: `<!-- resources/views/components/button.blade.php -->
@props(['type' => 'primary', 'disabled' => false])

<button type="button" class="btn btn-{{ $type }}" {{ $disabled ? 'disabled' : '' }}>
    {{ $slot }}
</button>
`,
				b7: `<!-- Sử dụng trong view -->
<x-button type="success">
    Save Changes
</x-button>

<x-button type="danger" :disabled="true">
    Delete Item
</x-button>
`,
				b8: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Todo App')</title>
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-16-2' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
