<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Controller & Route: Kết nối MVC" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Flow đơn giản của một Laravel web app: Request từ browser đến <b>Route</b> để định tuyến, Route gọi
					<b>Controller</b> xử lý logic, Controller trả ra <b>View</b> để hiển thị. Ba thành phần này là "xương sống"
					của mọi ứng dụng Laravel web.
				</p>

				<PageHeading text="B1 — Tạo Controller" addOnClass="text-left" markedAs="controller-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">Dùng artisan để tạo controller nhanh:</p>
				<FakeTerminalUI :textCoppy="'php artisan make:controller TodoController'">
					<p>php artisan make:controller TodoController</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					Controller được tạo tại <FilePath>app/Http/Controllers/TodoController.php</FilePath>. File mới tạo có nội
					dung như sau:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="B2 — Khai báo Route" addOnClass="text-left" markedAs="route-create" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Routes được khai báo trong <FilePath>routes/web.php</FilePath>. Khi có request đến URL tương ứng, Laravel sẽ
					gọi action đã định nghĩa. Tham số 1 là URL pattern, tham số 2 là
					<FilePath>{{ `[Controller::class, 'methodName']` }}</FilePath>.
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="B3 — Trả về View" addOnClass="text-left" markedAs="return-view" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Trong method controller, dùng <FilePath>view('path.to.view')</FilePath> để trả về blade file. Dấu chấm tương
					ứng với <FilePath>/</FilePath> trong đường dẫn thư mục.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">Quy tắc mapping từ cú pháp sang đường dẫn file:</p>
				<div class="relative overflow-x-auto mt-3 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Cú pháp</th>
								<th scope="col" class="px-5 py-3">File tương ứng</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-mono text-black dark:text-white">view('todos.index')</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">resources/views/todos/index.blade.php</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-mono text-black dark:text-white">view('home')</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">resources/views/home.blade.php</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 font-mono text-black dark:text-white">view('admin.dashboard')</td>
								<td class="px-5 py-4 text-black dark:text-gray-300">resources/views/admin/dashboard.blade.php</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white font-semibold mb-2">Lưu ý</p>
					<ul class="list-disc pl-5 space-y-1 text-slate-900 dark:text-white text-sm">
						<li>Đặt tên method theo chuẩn: <FilePath>index</FilePath> (danh sách), <FilePath>show</FilePath> (chi tiết), <FilePath>store</FilePath> (tạo mới), <FilePath>update</FilePath> (cập nhật), <FilePath>destroy</FilePath> (xóa).</li>
						<li>Dùng <FilePath>Route::resource('/todos', TodoController::class)</FilePath> để tự động tạo đủ 7 routes RESTful cho một Controller.</li>
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

use Illuminate\\Http\\Request;

class TodoController extends Controller
{
    public function index()
    {
        // xử lý logic và trả về view
    }
}`,
				b2: `// routes/web.php
use App\\Http\\Controllers\\TodoController;

Route::get('/todos', [TodoController::class, 'index']);
Route::post('/todos', [TodoController::class, 'store']);`,
				b3: `public function index()
{
    $todos = Todo::all();
    return view('todos.index', compact('todos'));
}`,
				pagePagination: null,
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
