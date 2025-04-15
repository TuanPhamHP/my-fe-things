<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Controller" addOnClass="text-left" markedAs="laravel-controller" />
				<p class="text-slate-900 dark:text-white my-3">
					Controller là nơi xử lý logic nghiệp vụ trong mô hình MVC. Nó đóng vai trò trung gian giữa
					<b>Model (dữ liệu)</b> và <b>View (giao diện người dùng)</b>.
					<br />
					Trong Laravel, chúng ta thường sẽ có 3 loại Controller cho ba mục đích khác nhau:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Loại</th>
								<th scope="col" class="px-5 py-3">Mô tả</th>
								<th scope="col" class="px-5 py-3">Lệnh tạo</th>
								<th scope="col" class="px-5 py-3">Sử dụng</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in cprs" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td class="px-5 py-4 text-black font-bold">{{ item.type }}</td>
								<td class="px-5 py-4 text-black" v-html="item.desc"></td>
								<td class="px-5 py-4 text-black">
									<FilePath>{{ item.artisan }}</FilePath>
								</td>
								<td class="px-5 py-4 text-black">{{ item.when }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-3">Thường thì chúng mình sẽ sử dụng loại 1 và 2 là nhiều nhất.</p>
				<PageHeading text="Tạo Controller" addOnClass="text-left" markedAs="controller-init" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Trước tiên, chúng ta sẽ tạo <FilePath>CakeController</FilePath> bằng artisan:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:controller CakeController'">
					<p>php artisan make:controller CakeController</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">
					Mặc định, Controller sẽ được tạo trong: <FilePath>app/Http/Controllers/</FilePath>.
				</p>
				<p class="text-slate-900 dark:text-white my-3">Trong Controller ta sẽ khai báo Model tương ứng vào:</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Tiếp theo, chúng ta sẽ cùng tạo các methods trong Controller. Ở bài này chúng ta sẽ xử lý bài toán CRUD là
					chính
				</p>
				<PageHeading text="- Read" addOnClass="text-left" markedAs="controller-read" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Lấy ra toàn bộ danh sách cake và truyền vào view thông qua <b>`compact`</b>
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="- Create" addOnClass="text-left mt-3" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Tạo mới Cake và return lại view danh sách:</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="- Update" addOnClass="text-left mt-3" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Update Cake và return lại view danh sách:</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />
				<PageHeading text="- Delete" addOnClass="text-left mt-3" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Delete Cake và return lại view danh sách:</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Done !!! Như vậy chúng ta đã hoàn thành tạm 4 methods đơn giản cho CRUD trong Controller.
				</p>
				<PageHeading text="- Return" addOnClass="text-left" markedAs="controller-return" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi làm việc với Controller, tuỳ thuộc vào việc chúng ta cần kết quả cho UI hay API mà sẽ có các output khác
					nhau, mình sẽ liệt kệ một số các hàm hay sử dụng khi trả ra kết quả từ Controller:
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
	import { FilePath } from '../../../.nuxt/components';
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
				b1: `namespace App\\Http\\Controllers;

use App\\Models\\Cake;
use Illuminate\\Http\\Request;

class CakeController extends Controller
{
    public function index()
    {
        $cakes = Cake::all();
        return view('home', compact('cakes'));
    }
}
`,
				b2: `public function index(Request $request)
	{
		$cakes = $this->cake->all();
		return view('home', compact(['cakes']));
	}
`,
				b3: `public function store(Request $request)
{
		// Tạo một Cake mới
		$cake = $this->cake;
		$cake->content = $request->input('content');
		$cake->status_id = $request->input('status_id');

		// Lưu vào cơ sở dữ liệu
		$cake->save();
		return $this->index();
}
`,
				b4: `public function update(Request $request, $id)
{
	// Tìm Cake theo ID
    $cake = $this->cake->find($id);

    // Kiểm tra nếu Cake có tồn tại
    if (!$cake) {
        // xử lý nếu không tìm thấy Cake tương ứng
    }

    // Cập nhật dữ liệu
    $cake->name = $request->input('name');
    $cake->price = $request->input('price');

    // Lưu thay đổi vào cơ sở dữ liệu
    $cake->save();
		return $this->index();
}
`,
				b5: ` public function destroy($id)
{
	// Tìm cake theo ID
	$cake = Cake::find($id);

	// Kiểm tra nếu cake không tồn tại
	if (!$cake) {
		return redirect()->route('home')->with('error', 'Cake không tồn tại!');
	}

	// Xóa cake
	$cake->delete();

	// Chuyển hướng về danh sách cakes với thông báo thành công
	return redirect()->route('home')->with('success', 'Cake đã được xóa thành công!');
}
`,
				cprs: [
					{
						id: 0,
						type: 'Basic Controller',
						desc: 'Loại controller thông thường, bạn tự định nghĩa các phương thức theo nhu cầu.',
						example: "public function index() { return view('cakes.index'); }",
						artisan: 'php artisan make:controller CakeController',
						when: 'Dùng khi bạn cần toàn quyền kiểm soát controller, không theo RESTful.',
					},
					{
						id: 1,
						type: 'Resource Controller',
						desc: 'Tạo controller theo chuẩn RESTful, Laravel tự generate sẵn 7 method cơ bản.',
						example: 'public function index() { return Cake::all(); }',
						artisan: 'php artisan make:controller CakeController --resource',
						when: 'Dùng khi xử lý CRUD đầy đủ cho 1 model (cake, category...).',
					},
					{
						id: 2,
						type: 'Single Action Controller',
						desc: 'Chỉ định nghĩa duy nhất 1 method __invoke(), thường dùng cho các hành động đặc biệt.',
						example: 'public function __invoke() { return Cake::report(); }',
						artisan: 'php artisan make:controller ReportCakeController --invokable',
						when: 'Dùng khi controller chỉ phục vụ một mục đích duy nhất như báo cáo, xử lý webhook...',
					},
				],
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-21' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
