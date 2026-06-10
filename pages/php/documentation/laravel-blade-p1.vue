<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Blade Components" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Component giúp tái sử dụng các đoạn UI như button, card, alert... Thay vì copy-paste HTML vào từng trang, bạn
					tạo một file component một lần rồi dùng lại ở nhiều nơi — dễ bảo trì và nhất quán hơn hẳn.
				</p>

				<PageHeading text="Tạo Component" addOnClass="text-left" markedAs="component-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Tạo file component trong <FilePath>resources/views/components/</FilePath>. Ví dụ tạo component
					<FilePath>todo-card</FilePath>:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>$slot</FilePath> là nơi nhận nội dung được truyền vào từ bên ngoài. Dùng component với cú pháp
					<FilePath>{{ `<x-tên-component>` }}</FilePath>:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="html" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-2 text-sm">
					Laravel tự map tên file sang tên tag. File <FilePath>todo-card.blade.php</FilePath> tương ứng với tag
					<FilePath>{{ `<x-todo-card>` }}</FilePath>.
				</p>

				<PageHeading text="Slot — truyền nội dung" addOnClass="text-left" markedAs="component-slot" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>$slot</FilePath> là nội dung được truyền vào giữa thẻ mở và đóng của component. Có thể kết hợp với
					props để tạo component linh hoạt:
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b3" highlightjs lang="html" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b4" highlightjs lang="html" theme="atom-one-dark" />
					</div>
				</div>

				<PageHeading text="@props — khai báo Props" addOnClass="text-left" markedAs="component-props" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>@props()</FilePath> dùng để khai báo rõ ràng các props mà component nhận vào, có thể đặt giá trị
					mặc định. Props được khai báo qua <FilePath>@props</FilePath> sẽ không nằm trong
					<FilePath>$attributes</FilePath> mà trở thành biến cục bộ trong component.
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<div class="col-span-1">
						<VCodeBlock :code="b5" highlightjs lang="html" theme="atom-one-dark" />
					</div>
					<div class="col-span-1">
						<VCodeBlock :code="b6" highlightjs lang="html" theme="atom-one-dark" />
					</div>
				</div>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>Component đặt trong thư mục con sẽ có tag tương ứng: <FilePath>components/form/input.blade.php</FilePath> thành <FilePath>{{ `<x-form.input />` }}</FilePath>.</li>
						<li>Dùng <FilePath>$attributes->merge(['class' => 'base-class'])</FilePath> trong component để gộp class truyền từ ngoài vào với class mặc định.</li>
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
				b1: `<!-- resources/views/components/todo-card.blade.php -->
<div class="card">
    <p>{{ $slot }}</p>
</div>`,
				b2: `<x-todo-card>
    Mua sữa — còn 2 ngày
</x-todo-card>`,
				b3: `<!-- components/alert.blade.php -->
<div class="alert alert-{{ $type ?? 'info' }}">
    {{ $slot }}
</div>`,
				b4: `<x-alert type="success">
    Todo đã được lưu!
</x-alert>

<x-alert type="danger">
    Có lỗi xảy ra.
</x-alert>`,
				b5: `<!-- components/todo-card.blade.php -->
@props(['status' => 'pending', 'title'])

<div class="card border-{{ $status === 'done' ? 'green' : 'gray' }}-400">
    <p>{{ $title }}</p>
    <span>{{ $status }}</span>
</div>`,
				b6: `<x-todo-card title="Mua sữa" status="done" />
<x-todo-card title="Học Laravel" />`,
				pagePagination: null,
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
