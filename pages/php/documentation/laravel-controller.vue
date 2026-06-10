<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Controller" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Controller là "bộ não" xử lý logic trong MVC — nhận request từ Route, gọi Model lấy data, rồi quyết định trả
					về view, JSON hay redirect. Mọi business logic nên nằm ở đây, không phải trong blade view.
				</p>

				<PageHeading text="Các loại Controller" addOnClass="text-left" markedAs="controller-types" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Laravel có 3 loại controller phổ biến:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Loại</th>
								<th scope="col" class="px-5 py-3">Mô tả</th>
								<th scope="col" class="px-5 py-3">Lệnh tạo</th>
								<th scope="col" class="px-5 py-3">Dùng khi</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in controllerTypes" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-bold text-black dark:text-white">{{ item.type }}</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">{{ item.desc }}</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">
									<FilePath>{{ item.artisan }}</FilePath>
								</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">{{ item.when }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<PageHeading text="CRUD với TodoController" addOnClass="text-left" markedAs="controller-crud" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Dưới đây là 4 method CRUD cơ bản trong <FilePath>TodoController</FilePath>. Đầu tiên khai báo Model và
					namespace:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="— index() : Danh sách" addOnClass="text-left mt-3" markedAs="controller-index" :lvl="2" />
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="— store() : Tạo mới" addOnClass="text-left mt-3" markedAs="controller-store" :lvl="2" />
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="— update() : Cập nhật" addOnClass="text-left mt-3" markedAs="controller-update" :lvl="2" />
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="— destroy() : Xóa" addOnClass="text-left mt-3" markedAs="controller-destroy" :lvl="2" />
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Return Types" addOnClass="text-left" markedAs="controller-return" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Tùy mục đích (web hay API) mà return khác nhau:
				</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Hàm</th>
								<th scope="col" class="px-5 py-3">Dùng khi</th>
								<th scope="col" class="px-5 py-3">Ví dụ</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in returnTypes" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-mono font-bold text-black dark:text-white">{{ item.fn }}</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">{{ item.when }}</td>
								<td class="px-5 py-4 font-mono text-black dark:text-gray-300">{{ item.eg }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>Dùng <FilePath>findOrFail($id)</FilePath> thay vì <FilePath>find($id)</FilePath> — tự throw 404 nếu không tìm thấy, không cần if check thủ công.</li>
						<li>Dùng <FilePath>Route::resource('/todos', TodoController::class)</FilePath> để tự động bind đủ 7 routes RESTful (index, create, store, show, edit, update, destroy).</li>
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
				b1: `// app/Http/Controllers/TodoController.php
namespace App\\Http\\Controllers;

use App\\Models\\Todo;
use Illuminate\\Http\\Request;

class TodoController extends Controller
{
    // methods bên dưới
}`,
				b2: `public function index()
{
    $todos = Todo::all();
    return view('todos.index', compact('todos'));
}`,
				b3: `public function store(Request $request)
{
    Todo::create([
        'title'     => $request->input('title'),
        'completed' => false,
    ]);
    return redirect()->route('todos.index');
}`,
				b4: `public function update(Request $request, $id)
{
    $todo = Todo::findOrFail($id);
    $todo->update(['completed' => $request->boolean('completed')]);
    return redirect()->route('todos.index');
}`,
				b5: `public function destroy($id)
{
    Todo::findOrFail($id)->delete();
    return redirect()->route('todos.index')->with('success', 'Đã xóa!');
}`,
				controllerTypes: [
					{
						id: 0,
						type: 'Basic Controller',
						desc: 'Tự định nghĩa method theo nhu cầu',
						artisan: 'php artisan make:controller TodoController',
						when: 'CRUD tùy biến, logic riêng',
					},
					{
						id: 1,
						type: 'Resource Controller',
						desc: 'Laravel gen sẵn 7 method RESTful',
						artisan: 'php artisan make:controller TodoController --resource',
						when: 'CRUD chuẩn cho 1 model',
					},
					{
						id: 2,
						type: 'Single Action Controller',
						desc: 'Chỉ 1 method __invoke()',
						artisan: 'php artisan make:controller ExportController --invokable',
						when: 'Hành động đơn (export, webhook...)',
					},
				],
				returnTypes: [
					{
						id: 0,
						fn: "view('path')",
						when: 'Trả về giao diện HTML',
						eg: "return view('todos.index', compact('todos'));",
					},
					{
						id: 1,
						fn: 'redirect()',
						when: 'Chuyển hướng sau action',
						eg: "return redirect()->route('todos.index');",
					},
					{
						id: 2,
						fn: 'response()->json()',
						when: 'API trả về JSON',
						eg: "return response()->json(['data' => $todos]);",
					},
					{
						id: 3,
						fn: 'back()',
						when: 'Quay lại trang trước',
						eg: "return back()->with('error', 'Lỗi rồi!');",
					},
				],
				pagePagination: null,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-21' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
