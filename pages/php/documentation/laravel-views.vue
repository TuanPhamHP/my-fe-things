<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Trong Laravel, views là các thành phần chịu trách nhiệm hiển thị giao diện người dùng của ứng dụng. Views
					thường được viết bằng <b>`Blade`</b>, một engine template mạnh mẽ và dễ sử dụng của Laravel, giúp bạn dễ dàng
					xây dựng các giao diện web động. Ở bài này chúng ta sẽ tìm hiểu về cách thao tác với views trong Laravel.
				</p>

				<PageHeading text="Blade View" addOnClass="text-left " markedAs="blade-view" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Views trong Laravel thường được đặt trong thư mục <b>`resources/views`</b>. Một view có thể được tạo dưới dạng
					file Blade với đuôi file là <b>`*.blade.php`</b>.
					<br />
					Ví dụ, tạo một view đơn giản trong file <b>`resources/views/home.blade.php`</b>:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b1" highlightjs lang="html" theme="vs2015" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />
					</div>
				</div>
				<p class="text-slate-900 dark:text-white my-5">
					Done, chúng ta có thể hiển thị page bằng hàm <FilePath>view('/home')</FilePath>, tương tự chúng mình sẽ tạo ra
					các view như <b>about</b>, <b>contact</b>.
					<br />
					Bây giờ, để chuyển giữa các page chúng mình cần một <b>navbar</b> để điều hướng người dùng he.
				</p>

				<PageHeading text="Blade Component" addOnClass="text-left " markedAs="blade-component" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-5">
					Tiếp theo, giả sử như chúng ta đã tạo được 1 <b>navbar</b> rất đẹp ở bước trước đó. Nhưng vấn đề xảy ra là các
					trang như <b>about, contact ...</b> đều cần dùng <b>navbar</b> này. Như vậy, để tăng tính tái sử dụng thì mình
					sẽ nghĩ đến việc biến nó thành một component, đầu tiên tạo thư mục <FilePath>components</FilePath> để chứa nó
					đã:
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-5">
					Như vậy chúng ta đã tạo được component đầu tiên là <b>header.blade.php</b>, để sử dụng component này, chúng ta
					sẽ gọi theo quy tắc: <br /><FilePath>{{ `<x-*component_name*></x-*component_name*>` }}</FilePath>, như này nè:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="html" theme="vs2015" />
				<PageHeading text="1/ slot" addOnClass="text-left mt-3" markedAs="blade-props-slot" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi dùng component trong blade, chúng ta sẽ thường xuyên cần truyền nội dung bổ sung (cotent) vào component
					thông qua prop "slot".
					<br />
					Khi đó, Slot của component sẽ được hiển thị bằng cách in ra biến <b>$slot</b>.
					<br />
					Ví dụ tui có một component <b>alert</b> như sau:
				</p>
				<div class="grid grid-cols-1 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="html" theme="vs2015" />
					</div>
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-0">
							Chúng ta có thể truyền phần nội dung của component <b>alert</b> bằng cách truyền vào giữa thẻ mở và đóng
							của component này. Phần nội dung này sẽ được truyền vào <FilePath>$slot</FilePath>
						</p>
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b7" highlightjs lang="html" theme="vs2015" />
					</div>
				</div>
				<PageHeading text="2/ data" addOnClass="text-left mt-3" markedAs="blade-props-data" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Ngoài slot, chúng ta cũng có thể truyền <b>data props</b> vào mỗi components.
					<br />
					Ví dụ: thay vì dùng màu sắc mặc định, chúng ta có thể thay đổi màu của <b>alert</b> bằng cách biến nó thành
					props
				</p>
				<div class="grid grid-cols-1 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b8" highlightjs lang="html" theme="vs2015" />
					</div>
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-0">
							Trong component <b>alert</b> chúng ta sẽ define props và sử dụng:
						</p>
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b9" highlightjs lang="html" theme="vs2015" />
					</div>
				</div>
				<PageHeading text="3/ attribute" addOnClass="text-left mt-3" markedAs="blade-props-attribute" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Loại props cuối cùng mà mình muốn trình bày với các bạn là <b>attributes</b>.
					<br />
					Attribute props cho phép bạn truyền các HTML attribute thông thường (như class, id, data-*, ...) vào component
					mà không cần định nghĩa thủ công bằng <FilePath>@props()</FilePath>. Các giá trị props này sẽ được lưu trữ tại
					biến <b>$attributes</b> trong component
				</p>
				<div class="grid grid-cols-1 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b10" highlightjs lang="html" theme="vs2015" />
					</div>
					<div class="col-span-1">
						<p class="text-slate-900 dark:text-white my-0">
							Trong component <b>button</b> chúng ta sẽ dùng <b>$attributes</b> để lấy giá trị:
						</p>
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b11" highlightjs lang="html" theme="vs2015" />
					</div>
				</div>
				<PageHeading
					text="4/ Nhận và hiển thị data"
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
return view('home' , ['name'=>'Tuấn']);`"
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
				<PageHeading text="Directives" addOnClass="text-left mt-3" markedAs="laravel-blade-diretives" :lvl="1" />
				<p class="text-slate-900 dark:text-white mt-3 mb-5">
					Thông thường, khi chúng ta cần các <b>Control Flow Statements</b>, trong file <FilePath>php</FilePath> chúng
					ta có thể nghĩ ngay đến việc dùng các statements cơ bản của PHP như <b>foreach, if-else ...</b>, điểm yếu của
					chúng là cú pháp phải đặt trong syntax <FilePath>{{ `<?php ... ?>` }}</FilePath>, và khi kết hợp với HTML
					syntax thì trông khá là khó chịu. Đừng lo, Laravel cung cấp nhiều directives để giúp bạn dễ dàng làm việc với
					Blade mà vẫn có flow tương tự với raw PHP.
				</p>
				<LaravelBladeDirectives />
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
	import LaravelBladeDirectives from '@/components/Document/LaravelBladeDirectives.vue';
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
			LaravelBladeDirectives,
		},
		data() {
			return {
				ltr: `{{ }}`,
				b1: `<!-- resources/views/home.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
</head>
<body>
    <h1>Xin chào, tui là home nè.</h1>
</body>
</html>
`,
				b2: `// routes/web.php
Route::get('/home', function(){
	view('home');
});`,
				b3: `// routes/web.php
Route::get('/home', view('home'));`,
				b4: `resources/
└── views/
    └── Components/
				└── header.blade.php
`,
				b5: `<!DOCTYPE html>
<html>
<head>
    <title>Home Page</title>
</head>
<body>
		<x-header></x-header>
		<h1>Xin chào, tui là home nè.</h1>
</body>
</html>`,
				b6: `<div class="alert alert-danger">
    {{ $slot }}
</div>`,
				b7: `<x-alert>
    <strong>Whoops!</strong> Something went wrong!
</x-alert>`,
				b8: `<x-alert :type=" 'error' ">
    <strong>Whoops!</strong> Something went wrong!
</x-alert>`,
				b9: `@props([
    'type'=> 'info', {{-- định nghĩa prop 'type' với giá trị mặc định là 'info' --}}
])
<div class="alert alert-{{$type}}">
    {{ $slot }}
</div>`,
				b10: `<x-button class="bg-blue-500 text-white" id="save-btn">
    Lưu lại
</x-button>
`,
				b11: `<button {{ $attributes->merge(['class' => 'px-4 py-2 rounded']) }}>
    {{ $slot }}
</button>
`,
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
				this.$api.documentations
					.getPagination({ appIds: 'php', currentDocId: 'php-15-n1' })
					.then((res: apiResponde) => {
						this.pagePagination = res?.data?.pagination || [];
					});
			},
		},
	};
</script>
