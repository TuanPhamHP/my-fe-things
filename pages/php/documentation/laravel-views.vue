<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Blade — template engine của Laravel" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Blade là template engine mặc định trong Laravel. File view đặt trong
					<FilePath>resources/views/</FilePath>, đuôi <FilePath>.blade.php</FilePath>. Thay vì PHP thuần
					<FilePath>&lt;?= $var ?&gt;</FilePath>, Blade cho cú pháp gọn hơn nhiều —
					<FilePath>{{ bladeDblBrace }}</FilePath>.
				</p>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Cả bài này chúng ta xây 1 page <b>"Danh sách bánh"</b> đơn giản qua 5 bước. Đủ để cover 90% cách dùng
					Blade thực tế — layout, condition, loop, partial.
				</p>

				<PageHeading text="1. In biến ra giao diện" addOnClass="text-left mt-5" markedAs="output" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<FilePath>{{ bladeDblBrace }}</FilePath> in giá trị ra HTML và <b>tự động escape</b> — kể cả khi biến chứa
					<FilePath>&lt;script&gt;</FilePath>, output vẫn an toàn (chống XSS). Cần in HTML thô (nội dung từ WYSIWYG
					editor), dùng <FilePath>{{ bladeUnescaped }}</FilePath> — chỉ khi bạn chắc chắn nguồn dữ liệu tin cậy.
				</p>
				<ClientOnly>
					<VCodeBlock :code="b1" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="2. Truyền data từ Controller" addOnClass="text-left mt-5" markedAs="controller" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Controller gọi <FilePath>view('folder.file', $data)</FilePath>. Tên view viết dạng <b>dot-notation</b> —
					<FilePath>cakes.index</FilePath> map tới file <FilePath>resources/views/cakes/index.blade.php</FilePath>.
					Dùng <FilePath>compact()</FilePath> gom nhiều biến cho gọn thay vì viết mảng đầy đủ.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<ClientOnly>
							<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
						</ClientOnly>
					</div>
					<div class="col-span-1">
						<ClientOnly>
							<VCodeBlock :code="b3" highlightjs lang="html" theme="atom-one-dark" />
						</ClientOnly>
					</div>
				</div>

				<PageHeading text="3. Điều kiện và vòng lặp" addOnClass="text-left mt-5" markedAs="control-flow" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Blade có kha khá directive, nhưng thực tế 90% code chỉ dùng <b>3 cái</b>:
					<FilePath>@if</FilePath>, <FilePath>@foreach</FilePath>, và <FilePath>@forelse</FilePath> (foreach kèm xử lý
					danh sách rỗng). Các cái khác như <FilePath>@unless</FilePath>, <FilePath>@while</FilePath>,
					<FilePath>@for</FilePath> có tồn tại, nhưng gặp lúc nào tra tài liệu lúc đó.
				</p>
				<ClientOnly>
					<VCodeBlock :code="b4" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Mẹo:</b> nếu chỉ cần list + xử lý rỗng, dùng <FilePath>@forelse</FilePath> thay vì viết
					<FilePath>@if (count) ... @else ... @endif</FilePath> bọc quanh <FilePath>@foreach</FilePath> — vừa gọn vừa
					rõ ý.
				</p>

				<PageHeading text="4. Layout & @extends — hết lặp code" addOnClass="text-left mt-5" markedAs="layout" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đây là <b>điểm mạnh nhất của Blade</b>. Thay vì mỗi page phải viết lại
					<FilePath>&lt;html&gt;</FilePath>, <FilePath>&lt;head&gt;</FilePath>, nav, footer, script... ta định nghĩa
					<b>1 layout gốc</b>, các page chỉ điền vào chỗ trống. 3 keyword cần nhớ:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>@yield('name')</FilePath> — <b>trong layout</b>, đánh dấu chỗ trống chờ page con điền.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>@extends('layouts.app')</FilePath> — <b>trong page con</b>, khai báo kế thừa layout nào.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>@section('name') ... @endsection</FilePath> — <b>trong page con</b>, điền nội dung vào chỗ
						<FilePath>@yield</FilePath> tương ứng.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Layout <FilePath>resources/views/layouts/app.blade.php</FilePath>:
				</p>
				<ClientOnly>
					<VCodeBlock :code="b5" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Page con <FilePath>resources/views/cakes/index.blade.php</FilePath> — chỉ viết phần nội dung riêng:
				</p>
				<ClientOnly>
					<VCodeBlock :code="b6" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Kết quả: page cakes đầy đủ HTML skeleton (head, nav, footer, script) mà file chỉ có nội dung của riêng nó.
					Thêm 100 page nữa cũng dùng chung 1 layout — sửa nav 1 lần, tất cả page cập nhật theo.
				</p>

				<PageHeading text="5. Chia nhỏ với @include" addOnClass="text-left mt-5" markedAs="partial" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Đoạn HTML dùng lại ở nhiều page (alert, form field, card, pagination), tách thành 1
					<b>partial</b> rồi <FilePath>@include</FilePath>. Truyền data qua tham số thứ 2 kiểu mảng:
				</p>
				<ClientOnly>
					<VCodeBlock :code="b7" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Cheat sheet nhớ nhanh</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>
							In biến: <FilePath>{{ bladeDblBrace }}</FilePath> (auto-escape) /
							<FilePath>{{ bladeUnescaped }}</FilePath> (raw HTML — cẩn thận XSS).
						</li>
						<li>
							Loop: <FilePath>@foreach</FilePath>, hoặc <FilePath>@forelse ... @empty ... @endforelse</FilePath> khi
							cần xử lý danh sách rỗng.
						</li>
						<li>
							Layout: <b>cha định nghĩa <FilePath>@yield</FilePath></b>, <b>con dùng <FilePath>@extends</FilePath> +
							<FilePath>@section</FilePath></b>.
						</li>
						<li>
							Comment Blade: <FilePath>{{ bladeComment }}</FilePath> — <b>không</b> lộ ra HTML output như comment
							<FilePath>&lt;!-- --&gt;</FilePath> của HTML.
						</li>
						<li>
							View cache: khi sửa file không thấy đổi trên browser, chạy
							<FilePath textCoppy="php artisan view:clear">php artisan view:clear</FilePath>.
						</li>
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
				bladeDblBrace: '{{ $var }}',
				bladeUnescaped: '{!! $html !!}',
				bladeComment: '{{-- comment --}}',
				b1: `{{-- resources/views/cakes/index.blade.php --}}
<h1>Danh sách bánh</h1>

{{-- Tự động escape — kể cả $name = "<script>alert(1)<\/script>" vẫn hiển thị an toàn --}}
<p>Xin chào, {{ $name }}</p>
<p>Cửa hàng đang có {{ count($cakes) }} loại bánh.</p>

{{-- Chỉ dùng khi CHẮC CHẮN nội dung an toàn (VD mô tả bánh từ WYSIWYG đã sanitize) --}}
<div class="cake-description">{!! $cake->description_html !!}</div>`,
				b2: `<?php
// app/Http/Controllers/CakeController.php
namespace App\\Http\\Controllers;

use App\\Models\\Cake;

class CakeController extends Controller
{
    public function index()
    {
        $cakes = Cake::latest()->get();
        $name  = auth()->user()->name;

        // 'cakes.index' → resources/views/cakes/index.blade.php
        return view('cakes.index', compact('cakes', 'name'));
        //                          ↑ compact('a','b') = ['a' => $a, 'b' => $b]
    }
}`,
				b3: `{{-- resources/views/cakes/index.blade.php --}}
<h1>Xin chào, {{ $name }}</h1>
<p>Cửa hàng có {{ $cakes->count() }} loại bánh.</p>

@foreach ($cakes as $cake)
    <p>{{ $cake->name }} — {{ number_format($cake->price) }}đ</p>
@endforeach`,
				b4: `{{-- @if — rẽ nhánh cơ bản --}}
@if ($cakes->isEmpty())
    <p>Chưa có bánh nào.</p>
@else
    <p>Cửa hàng có {{ $cakes->count() }} loại bánh.</p>
@endif

{{-- @foreach — duyệt collection/array --}}
@foreach ($cakes as $cake)
    <p>{{ $cake->name }}</p>
@endforeach

{{-- @forelse — @foreach + xử lý danh sách rỗng, gộp 2 thành 1 --}}
@forelse ($cakes as $cake)
    <li>
        {{ $cake->name }} — {{ number_format($cake->price) }}đ
        @if (! $cake->is_active)
            <span class="badge">Hết hàng</span>
        @endif
    </li>
@empty
    <li>Chưa có bánh nào.</li>
@endforelse`,
				b5: `{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Cake Shop')</title>  {{-- 'Cake Shop' là default nếu con không set --}}
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/cakes">Danh sách bánh</a>
    </nav>

    <main>
        @yield('content')   {{-- ← chỗ trống chờ page con điền --}}
    </main>

    <footer>© 2026 Cake Shop</footer>
</body>
</html>`,
				b6: `{{-- resources/views/cakes/index.blade.php --}}
@extends('layouts.app')

@section('title', 'Danh sách bánh')   {{-- điền @yield('title') --}}

@section('content')                    {{-- điền @yield('content') --}}
    <h1>Xin chào, {{ $name }}</h1>

    @forelse ($cakes as $cake)
        <p>{{ $cake->name }} — {{ number_format($cake->price) }}đ</p>
    @empty
        <p>Chưa có bánh nào.</p>
    @endforelse
@endsection`,
				b7: `{{-- resources/views/partials/alert.blade.php --}}
<div class="alert alert-{{ $type }}">
    {{ $message }}
</div>

{{-- Cách dùng ở page bất kỳ — truyền data qua param thứ 2 --}}
@include('partials.alert', ['type' => 'success', 'message' => 'Lưu thành công!'])
@include('partials.alert', ['type' => 'error',   'message' => 'Có lỗi xảy ra.'])`,
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
