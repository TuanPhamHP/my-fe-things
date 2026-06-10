<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Blade Template" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Blade là template engine mặc định của Laravel. Các file blade có đuôi <FilePath>.blade.php</FilePath> và được
					đặt trong thư mục <FilePath>resources/views</FilePath>. Thay vì PHP thuần
					<FilePath>{{ phpEcho }}</FilePath>, Blade dùng cú pháp <FilePath>{{ bladeDblBrace }}</FilePath>
					gọn hơn và dễ đọc hơn nhiều.
				</p>

				<PageHeading text="In data ra giao diện" addOnClass="text-left" markedAs="blade-display" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Dùng <FilePath>{{ bladeDblBrace }}</FilePath> để in biến ra màn hình. Laravel tự động escape HTML nên không lo
					bị XSS. Nếu cần in HTML thô (ví dụ nội dung từ editor), dùng
					<FilePath>{{ bladeUnescaped }}</FilePath> — nhưng chỉ khi bạn chắc nội dung đó an toàn.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="atom-one-dark" />

				<PageHeading text="Truyền data từ Controller" addOnClass="text-left" markedAs="blade-pass-data" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Dùng hàm <FilePath>compact()</FilePath> để gom các biến lại và truyền vào view. Mỗi tên biến trong
					<FilePath>compact</FilePath> sẽ tương ứng với một key trong mảng truyền vào view.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="html" theme="atom-one-dark" />
					</div>
				</div>

				<PageHeading text="Directives" addOnClass="text-left" markedAs="blade-directives" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Directives là các cú pháp <FilePath>@xxx</FilePath> của Blade, thay thế cho PHP thuần bên trong template.
					Thay vì viết <FilePath>{{ `<?php foreach(...) { ?>` }}</FilePath>, bạn chỉ cần dùng
					<FilePath>@foreach</FilePath> — gọn hơn và hòa với HTML tốt hơn.
				</p>
				<LaravelBladeDirectives />

				<PageHeading text="@forelse" addOnClass="text-left mt-3" markedAs="blade-forelse" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>@forelse</FilePath> kết hợp vòng lặp và xử lý danh sách rỗng trong một block duy nhất. Dùng thay
					cho <FilePath>@if(count) + @foreach</FilePath> cho gọn hơn.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="html" theme="atom-one-dark" />

				<PageHeading text="@include — nhúng partial" addOnClass="text-left mt-3" markedAs="blade-include" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>@include</FilePath> dùng để nhúng một blade file con vào view hiện tại. Rất tiện khi bạn có các
					partial nhỏ như form, alert, hay pagination dùng lại ở nhiều chỗ.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="html" theme="atom-one-dark" />

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>Dùng <FilePath>@forelse</FilePath> thay cho <FilePath>@if + @foreach</FilePath> — ngắn hơn, rõ intent hơn.</li>
						<li>Khi deploy, nếu view không cập nhật hãy chạy <FilePath>php artisan view:clear</FilePath>.</li>
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
	import LaravelBladeDirectives from '@/components/Document/LaravelBladeDirectives.vue';
	import VCodeBlock from '@wdns/vue-code-block';
	export default {
		components: { PageMarkBook, PageHeading, FakeTerminalUI, DocNextPage, VCodeBlock, LaravelBladeDirectives },
		data() {
			return {
				bladeDblBrace: '{{ $var }}',
				bladeUnescaped: '{!! $html !!}',
				phpEcho: '<?php echo $name ?>',
				b1: `<!-- resources/views/todos/index.blade.php -->
<h1>Danh sách Todo</h1>
<p>Bạn có {{ count($todos) }} việc cần làm.</p>`,
				b2: `// TodoController.php
public function index()
{
    $todos = Todo::all();
    $name  = 'Tuấn';
    return view('todos.index', compact('todos', 'name'));
}`,
				b3: `<!-- todos/index.blade.php -->
<h1>Xin chào, {{ $name }}</h1>
@foreach($todos as $todo)
    <p>{{ $todo->title }}</p>
@endforeach`,
				b4: `@forelse($todos as $todo)
    <li>{{ $todo->title }}</li>
@empty
    <li>Chưa có todo nào.</li>
@endforelse`,
				b5: `{{-- todos/index.blade.php --}}
@include('partials.alert', ['type' => 'success', 'message' => 'Lưu thành công!'])
@include('todos.form')`,
				pagePagination: null,
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
