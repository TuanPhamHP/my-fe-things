<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">
					Ở bài này, chúng ta sẽ cùng tìm hiểu và tạo <b>Controller</b> trong Laravel ứng với bảng todos.
				</p>
				<PageHeading text="Query Builder" addOnClass="text-left" markedAs="query-builder-methods" />
				<p class="text-slate-900 dark:text-white my-3">
					Laravel's Query Builder cho phép chúng ta viết các query đơn giản và thuận tiện để tương tác với cơ sở dữ liệu
					mà không cần viết câu lệnh SQL thuần bằng cách viết chúng thành các method dễ đọc cho người dùng.
					<br />
					<br />
					Tôi sẽ giới thiệu một số methods thông dụng:
				</p>
				<div class="relative overflow-x-auto mt-5 border rounded-lg">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
							<tr>
								<th scope="col" class="px-5 py-3">Tên</th>
								<th scope="col" class="px-5 py-3">Ý nghĩa</th>
								<th scope="col" class="px-5 py-3">VD:</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in commonMethods"
								:key="item.id"
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<th
									v-if="item.label"
									colspan="3"
									scope="row"
									class="px-5 py-4 text-center font-semibold text-gray-900 whitespace-nowrap bg-neutral-200"
								>
									{{ item.label }}
								</th>
								<th
									v-if="!item.label"
									scope="row"
									class="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
								>
									{{ item.name }}
								</th>
								<td v-if="!item.label" class="px-5 py-4">{{ item.desc }}</td>
								<td v-if="!item.label" class="px-5 py-4" v-html="item.syntax"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-slate-900 dark:text-white my-2 leading-8">
					Các bạn có thể tìm hiểu thêm về các methods tại
					<b>
						<a
							href="https://laravel.com/docs/11.x/queries#main-content"
							target="_blank"
							rel="noreferrer"
							class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
						>
							đây.
						</a>
					</b>
					Chúng ta sẽ ứng dụng các method này để tiến hành tạo Controller.
				</p>
				<PageHeading text="Controller" addOnClass="text-left" markedAs="laravel-controller" />
				<p class="text-slate-900 dark:text-white my-3">
					Trước tiên, chúng ta sẽ tạo <FilePath>TodoController</FilePath> bằng artisan:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:controller TodoController'">
					<p>php artisan make:controller TodoController</p>
				</FakeTerminalUI>
				<p class="text-slate-900 dark:text-white my-3">Trong Controller ta sẽ khai báo Model tương ứng vào:</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">
					Tiếp theo, chúng ta sẽ cùng tạo các methods trong Controller. Ở bài này chúng ta sẽ xử lý bài toán CRUD là
					chính
				</p>
				<PageHeading text="- Read" addOnClass="text-left" markedAs="controller-read" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Lấy ra toàn bộ danh sách todo và truyền vào view thông qua <b>`compact`</b>
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />

				<PageHeading text="- Create" addOnClass="text-left mt-3" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Tạo mới Todo và return lại view danh sách:</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="vs2015" />

				<PageHeading text="- Update" addOnClass="text-left mt-3" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Update Todo và return lại view danh sách:</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="- Delete" addOnClass="text-left mt-3" markedAs="controller-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">Delete Todo và return lại view danh sách:</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="vs2015" />
				<p class="text-slate-900 dark:text-white my-3">
					Done !!! Như vậy chúng ta đã hoàn thành tạm 4 methods đơn giản cho CRUD trong Controller.
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
				commonMethods: [
					{
						id: 4,
						name: 'get()',
						desc: 'Lấy tất cả kết quả',
						syntax: `DB::table('users')->get();`,
					},
					{
						id: 2,
						name: 'where()',
						desc: 'Thêm điều kiện WHERE vào câu query',
						syntax: `DB::table('users')->where('age', '>', 25)->get();`,
					},
					{
						id: 13,
						name: 'whereIn()',
						desc: 'Thêm điều kiện WHERE với mệnh đề IN, tìm các bản ghi có giá trị thuộc danh sách cho trước.',
						syntax: `DB::table('users')->whereIn('id', [1, 2, 3])->get();`,
					},
					{
						id: 11,
						name: 'find()',
						desc: 'Tìm và trả về một bản ghi theo khóa chính (id). Nếu không tìm thấy, trả về null.',
						syntax: `DB::table('users')->find(1);`,
					},
					{
						id: 12,
						name: 'findOrFail()',
						desc: 'Tìm và trả về một bản ghi theo khóa chính (id). Nếu không tìm thấy, trả về lỗi 404.',
						syntax: `DB::table('users')->findOrFail(1);`,
					},
					{
						id: 1,
						name: 'save()',
						desc: 'Lưu bản ghi hiện tại vào cơ sở dữ liệu, có thể là bản ghi mới hoặc cập nhật bản ghi hiện có.',
						syntax: `
            $user = new User(); </br>
            $user->name = 'Tuấn';</br>
            $user->email = 'tuanpham@example.com';</br>
            $user->save();
        `,
					},

					{
						id: 3,
						name: 'first()',
						desc: 'Lấy bản ghi đầu tiên từ kết quả',
						syntax: `DB::table('users')->where('age', '>', 25)->first();`,
					},

					{
						id: 5,
						name: 'insert()',
						desc: 'Thêm bản ghi mới vào bảng',
						syntax: `DB::table('users')->insert(['name' => 'John', 'email' => 'john@example.com']);`,
					},
					{
						id: 6,
						name: 'update()',
						desc: 'Cập nhật các bản ghi',
						syntax: `DB::table('users')->where('id', 1)->update(['name' => 'Jane']);`,
					},
					{
						id: 7,
						name: 'delete()',
						desc: 'Xóa bản ghi',
						syntax: `DB::table('users')->where('id', 1)->delete();`,
					},
					{
						id: 8,
						name: 'orderBy()',
						desc: 'Sắp xếp kết quả theo thứ tự tăng/giảm dần',
						syntax: `DB::table('users')->orderBy('name', 'asc')->get();`,
					},
					{
						id: 9,
						name: 'count()',
						desc: 'Đếm số lượng bản ghi',
						syntax: `DB::table('users')->count();`,
					},
					{
						id: 10,
						name: 'exists()',
						desc: 'Kiểm tra xem có bản ghi nào tồn tại với điều kiện cho trước',
						syntax: `DB::table('users')->where('email', 'john@example.com')->exists();`,
					},
				],
				b1: `/** @var Todo $todo */
protected $todo;

public function __construct(Todo $todo)
{
    $this->todo = $todo;
}
`,
				b2: `public function index(Request $request)
	{
		$todos = $this->todo->all();
		return view('todo-app', compact(['todos']));
	}
`,
				b3: `public function store(Request $request)
{
		// Tạo một Todo mới
		$todo = $this->todo;
		$todo->content = $request->input('content');
		$todo->status_id = $request->input('status_id');

		// Lưu vào cơ sở dữ liệu
		$todo->save();
		return $this->index();
}
`,
				b4: `public function update(Request $request, $id)
{
	// Tìm Todo theo ID
    $todo = $this->todo->find($id);

    // Kiểm tra nếu Todo có tồn tại
    if (!$todo) {
        // xử lý nếu không tìm thấy Todo tương ứng
    }

    // Cập nhật dữ liệu
    $todo->content = $request->input('content');
    $todo->status_id = $request->input('status_id');

    // Lưu thay đổi vào cơ sở dữ liệu
    $todo->save();
		return $this->index();
}
`,
				b5: ` public function destroy($id)
{
	// Tìm todo theo ID
	$todo = Todo::find($id);

	// Kiểm tra nếu todo không tồn tại
	if (!$todo) {
		return redirect()->route('todos.index')->with('error', 'Todo không tồn tại!');
	}

	// Xóa todo
	$todo->delete();

	// Chuyển hướng về danh sách todos với thông báo thành công
	return redirect()->route('todos.index')->with('success', 'Todo đã được xóa thành công!');
}
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-19' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
