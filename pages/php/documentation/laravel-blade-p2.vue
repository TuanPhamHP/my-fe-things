<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Blade Layouts" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Khi có nhiều trang (danh sách todo, chi tiết, tạo mới...), mỗi trang đều có navbar và footer giống nhau.
					Copy-paste HTML vào từng file là cách rất tệ — khó bảo trì, dễ lỗi khi cần sửa. Giải pháp: tạo một
					<b>layout</b> chứa phần dùng chung, các view con chỉ cần định nghĩa phần nội dung riêng của mình.
				</p>

				<PageHeading text="B1 — Tạo Layout" addOnClass="text-left" markedAs="layout-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Tạo thư mục <FilePath>resources/views/layouts/</FilePath> và file <FilePath>app.blade.php</FilePath>:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>@yield('name')</FilePath> tạo ra một "vùng trống" mà các view con sẽ điền vào.
					<FilePath>@yield('title', 'Todo App')</FilePath> có giá trị mặc định là <FilePath>Todo App</FilePath> nếu view
					con không override.
				</p>

				<PageHeading text="B2 — Kế thừa Layout" addOnClass="text-left" markedAs="layout-extend" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					View con dùng <FilePath>@extends</FilePath> để khai báo layout nào sẽ dùng, và
					<FilePath>@section</FilePath> để điền nội dung vào từng <FilePath>@yield</FilePath>:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="html" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Laravel ghép <FilePath>@section('content')</FilePath> của file con vào đúng chỗ
					<FilePath>@yield('content')</FilePath> của layout. Kết quả là trang HTML hoàn chỉnh có đầy đủ navbar, footer và
					nội dung.
				</p>

				<PageHeading text="Kết nối với Controller" addOnClass="text-left" markedAs="layout-flow" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Controller không cần biết đến layout. Nó chỉ trả về view con như bình thường — Blade tự xử lý phần ghép
					layout:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li><FilePath>@extends</FilePath> phải đặt ở dòng đầu tiên của file — không có nội dung HTML nào trước nó.</li>
						<li>Dùng <FilePath>@include</FilePath> khi muốn nhúng một partial nhỏ. Dùng layout khi muốn có bố cục chung cho toàn trang.</li>
					</ul>
				</div>

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
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock },
		data() {
			return {
				b1: `<!-- resources/views/layouts/app.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title', 'Todo App')</title>
</head>
<body>
    <nav>
        <a href="/todos">Todo List</a>
    </nav>

    <main>
        @yield('content')
    </main>

    <footer>© 2024 Todo App</footer>
</body>
</html>`,
				b2: `<!-- resources/views/todos/index.blade.php -->
@extends('layouts.app')

@section('title', 'Danh sách Todo')

@section('content')
    <h1>Todo List</h1>

    @forelse($todos as $todo)
        <p>{{ $todo->title }}</p>
    @empty
        <p>Chưa có todo nào.</p>
    @endforelse
@endsection`,
				b3: `// TodoController.php
public function index()
{
    $todos = Todo::all();
    return view('todos.index', compact('todos'));
    // Blade sẽ tự ghép todos/index.blade.php vào layouts/app.blade.php
}`,
				pagePagination: null,
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
