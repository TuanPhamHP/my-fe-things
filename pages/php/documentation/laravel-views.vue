<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Trong Laravel, views là các thành phần chịu trách nhiệm hiển thị giao diện người dùng của ứng dụng. Views
					thường được viết bằng <b>`Blade`</b>, một engine template mạnh mẽ và dễ sử dụng của Laravel, giúp bạn dễ dàng
					xây dựng các giao diện web động. Ở bài này chúng ta sẽ tìm hiểu về cách thao tác với views trong Laravel.
				</p>

				<PageHeading text="Tạo View" addOnClass="text-left " markedAs="laravel-view-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Views trong Laravel thường được đặt trong thư mục <b>`resources/views`</b>. Một view có thể được tạo dưới dạng
					file Blade với đuôi file là <b>`*.blade.php`</b>.
					<br />
					Ví dụ, tạo một view đơn giản trong file <b>`resources/views/homepage.blade.php`</b>:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5">
					Còn nhớ kiến thức về mô hình MVC chứ? Sau khi tạo được View, chúng ta sẽ hiển thị ra bằng cách sử dụng
					<b>`Controller`</b>.
				</p>

				<PageHeading text="Tạo Controller" addOnClass="text-left " markedAs="laravel-controller-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Thông thường, chúng ta sẽ sử dụng các controller để xử lý logic ứng dụng và trả về một view.
					<b>Controller</b> có thể được tạo bằng lệnh Artisan:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:controller HomepageController'">
					<p>php artisan make:controller HomepageController</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-5">
					<b>`HomepageController`</b> đã được tạo tại <b>app/Http/Controller/HomepageController.php</b>. Việc này xảy ra
					là do artisan sử dụng lệnh make:controller để khởi tạo file cho chúng ta, đây là một tính năng hỗ trợ rất tối
					của <b>artisan</b>. Trong class <b>`HomepageController`</b> ta sẽ định nghĩa method <b>`index()`</b> như sau:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5">
					<b>`namespace`</b> giúp tổ chức và quản lý mã nguồn theo các nhóm có liên quan, giúp tránh xung đột tên giữa
					các lớp và tạo ra cấu trúc thư mục rõ ràng hơn. Bạn có thể hiểu các file dùng chung namespace sẽ được nhóm vào
					thành 1 nhóm. Khi cần dùng đến các file này chúng ta có thể sử dụng keyword <b>`use`</b>.
					<br />
					<br />
					Trong method <b>`index()`</b> ở trên chúng ta return ra một <b>`view()`</b>, đây là một phương thức trả ra một
					giao diện (thường là HTML) cho người dùng. Một số output thường dùng như:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Scope</th>
								<th scope="col" class="px-5 py-3">Def</th>
								<th scope="col" class="px-5 py-3">EG</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in controllerReturns"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									{{ item.name }}
								</th>
								<td class="px-5 py-4">{{ item.desc }}</td>
								<td class="px-5 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5">
					Ở đây, Laravel dựa vào quy ước đặt tên và cấu trúc thư mục để xác định file Blade cần sử dụng khi ta trả ra
					view như sau:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Cấu trúc</th>
								<th scope="col" class="px-5 py-3">Đường dẫn tương ứng</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in viewsConfig"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th scope="row" class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
									{{ item.name }}
								</th>
								<td class="px-5 py-4">{{ item.desc }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-5">
					Sau khi đã tạo <b>View</b> và <b>Controller</b>, chúng ta sẽ tạo một request (yêu cầu) với Laravel App của
					chúng ta để gửi đến <b>Controller</b> và cho <b>Controller</b> xử lý. Ở đây ta sẽ sử dụng <b>Route</b> để định
					nghĩa request.
				</p>
				<PageHeading text="Tạo Route" addOnClass="text-left " markedAs="laravel-route-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Theo đúng

					<a
						href="/php/documentation/laravel-structure-feature#routes"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						cấu trúc thư mục
					</a>
					đã học, các routes sẽ được định nghĩa tại <b>routes/web.php</b>.
				</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="php" theme="vs2015" />
					</div>
					<div class="col-span-1 px-0 py-0 rounded">
						<img src="@/assets/images/documentation/route-01.png" alt="" class="rounded-lg mt-0 block" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5">
					Route trên sẽ hoạt động như sau:
					<br />
					Khi chúng ta sử dụng method <b>get</b> với route là <b>http://127.0.0.1:8000/homepage</b> thì thì một
					<b>$callable</b>
					sẽ ngay lập tức được trigger, ở đây <b>$callable là [HomepageController::class, 'index']</b> có nghĩa Laravel
					sẽ truy cập vào class <b>`HomepageController`</b> và thực thi method <b>`index()`</b> của nó.
					<br />
					Chúng ta đã định nghĩa <b>`index()`</b> ở trên sẽ trả ra <b>view('homepage')</b>, nên
					<b>`resources/views/homepage.blade.php`</b> sẽ được trả ra.
					<br />
					(❁´◡`❁) Done, chúng ta vừa hoàn thành việc tạo và hiển thị view theo route tương ứng. Tiếp theo, chúng ta sẽ
					cùng tìm hiểu cách làm việc với file <b>blade</b>.
				</p>
				<PageHeading text="Làm việc với Blade" addOnClass="text-left hidden" markedAs="laravel-blade" :lvl="1" />

				<PageHeading text="Nhận và hiển thị data" addOnClass="text-left " markedAs="laravel-blade-data" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					Ta có thể sử dụng <b>`{{ ltr }}`</b>Hiển thị dữ liệu trong template:
				</p>
				<VCodeBlock :code="`{{ $name }}`" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="Directives" addOnClass="text-left mt-3" markedAs="laravel-blade-diretives" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5">
					Laravel cung cấp nhiều directives để giúp bạn dễ dàng làm việc với Blade.
				</p>
				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>Conditional</b>: return view theo điều kiện</p>
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
				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>Loops</b>: return view theo vòng lặp</p>
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

				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>Include</b>: nhúng một blade-view khác.</p>
				<p class="text-slate-900 dark:text-white"><b>Include</b></p>
				<VCodeBlock :code="`@include('view.name', ['some' => 'data'])`" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white"><b>IncludeIf, IncludeWhen, IncludeFirst ....</b></p>

				<p class="text-slate-900 dark:text-white mt-5 mb-2 text-xl"><b>Extending a Layout</b>: kế thừa layout.</p>
				<p class="text-slate-900 dark:text-white">Tạo layout:</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white">Kế thừa layout tại view:</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white mt-5 mb-2">
					Tại layout chúng ta sử dụng <b>@yield('name')</b> để tạo ra các view dynamic, và cho phép các blade kế thừa nó
					thay đổi data theo ý muốn thông qua <b> @section('name') và @endsection.</b>
				</p>
				<PageHeading text="Components" addOnClass="text-left mt-3" markedAs="laravel-components" :lvl="2" />
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
					Bây giờ, chúng ta có thể sử dụng Blade Component x-button trong bất kỳ view nào trong view như sau.
				</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="vs2015" />
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
    //
    public function index()
    {
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
    <title>App Name - @yield('title')</title>
</head>
<body>
    @section('sidebar')
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-16' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
