<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Form" addOnClass="text-left" markedAs="laravel-form" />
				<p class="text-slate-900 dark:text-white my-3">
					Ở bài này, chúng ta cùng tìm hiểu cách tạo và xử lý <b>Form</b> trong Laravel với các đầu mục:
				</p>
				<SessionTarget :operators="cprs"></SessionTarget>

				<div class="bg-neutral-100 px-5 py-1 rounded">
					<img
						src="@/assets/images/php-laravel/request-process.png"
						alt=""
						class="rounded-lg mt-3 block max-w-[600px]"
					/>
				</div>
				<PageHeading text="1. Tạo View" addOnClass="text-left" markedAs="form-view" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Trước tiên, chúng ta sẽ tạo view cho form tạo mới chẳng hạn
					<FilePath>resources/views/cakes/create.blade.php</FilePath>:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Giải thích nhanh:</b>
				</p>
				<SessionTarget :operators="formDesc"></SessionTarget>
				<p class="text-slate-900 dark:text-white my-3">
					Như vậy, khi form này được gửi thì nó sẽ tạo 1 <FilePath>request</FilePath> gửi đến
					<FilePath>route</FilePath> tương ứng là <b>cakes.add</b>. Lúc này chúng ta cần định nghĩa cho route
					<b>cakes.add</b> tại <FilePath>routes/web.php</FilePath>
					để nhận và xử lý request
				</p>
				<PageHeading text="2. Tạo Route" addOnClass="text-left" markedAs="form-route" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Như phần trên đã đề cập, công việc tiếp theo của chúng ta là định nghĩa và xử lý route <b>cake.add</b> trong
					<FilePath>routes/web.php</FilePath>:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Ở đây chúng mình có dùng method <b>name('cakes.add')</b> để gán tên cho route này, khi đó thì method
					<b>route('cakes.add')</b> ở View sẽ tìm được chính xác route mà nó cần gọi.
				</p>
				<PageHeading text="3. Tạo Controller" addOnClass="text-left" markedAs="form-controller" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Sau đó, chúng mình cần phải xử lý request nhận từ route ở trong <b>CakeController</b>
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				<PageHeading text="4. Hiển thị lỗi" addOnClass="text-left" markedAs="form-errors" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Cuối cùng, chúng mình có thể xử lí lỗi trả ra từ <b>$validate</b> nè
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />
				<PageHeading text="Validator" addOnClass="text-left mt-3" markedAs="laravel-validator" />
				<p class="text-slate-900 dark:text-white my-3">
					Ở phần này chúng ta cùng tìm hiểu cách để validate dữ liệu từ Request nhá 😎.
					<br />
					<b>Validator</b> trong Laravel là một công cụ giúp bạn kiểm tra dữ liệu từ request (form, API, v.v) trước khi
					xử lý tiếp. Ví dụ: kiểm tra xem email đã nhập có đúng định dạng không, mật khẩu có đủ dài không...
					<br />
					<br />
					Về cơ bản, chúng ta thường có 2 kiểu dùng validator trong Laravel:
				</p>
				<SessionTarget :operators="validatorWays"></SessionTarget>
				<PageHeading text="Dùng trong Controller" addOnClass="text-left mt-3" markedAs="validator-inline" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Các bạn có thể dùng nhanh validator trong method của Controller.
				</p>
				<VCodeBlock :code="b8" highlightjs lang="php" theme="atom-one-dark" />

				<PageHeading text="Tạo Class" addOnClass="text-left mt-3" markedAs="validator-class" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Với cách này chúng mình sẽ tạo hẳn 1 Class dành riêng cho việc request input
				</p>

				<FakeTerminalUI :textCoppy="'php artisan make:request StoreCakeRequest'"
					>php artisan make:request StoreCakeRequest</FakeTerminalUI
				>
				<p class="text-slate-900 dark:text-white my-3">Sau đó khai báo vào methods: <b>rules, messages</b></p>
				<VCodeBlock :code="b9" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					Vậy khi nào thì tách validator thành Class? Khi nào thì viết luôn trong Controller?
				</p>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Tình huống</th>
							<th scope="col" class="px-5 py-3">Tách Form Request</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">Form đơn giản, ít field</td>
							<td class="px-5 py-4">❌ Có thể validate trực tiếp</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">Form dài, nhiều rules</td>
							<td class="px-5 py-4">✅ Tách ra dễ quản lý</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">Cần thêm logic như <FilePath>auth()</FilePath></td>
							<td class="px-5 py-4">✅ Nên tách riêng</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4">Dự án lớn, clean architecture</td>
							<td class="px-5 py-4">✅ Tách mạnh</td>
						</tr>
					</tbody>
				</table>
				<p class="text-slate-900 dark:text-white my-3">Dưới đây là một số các rules chúng ta hay xài nè:</p>
				<DocumentTable :operators="validatorRules" />
				<p class="text-slate-900 dark:text-white my-3">
					Đọc thêm về validators ở
					<a
						href="https://laravel.com/docs/12.x/validation#validation-quickstart"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						đây
					</a>
					nha. 🐳🐳🐳
				</p>

				<!--  -->
				<PageHeading text="CSRF" addOnClass="text-left mt-3" markedAs="form-errors" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3">
					Một chút giải thích về <b>CSRF</b> nha.
					<br />
					<b class="text-lg"> ℹ️ CSRF là gì?</b>
					<br />
					CSRF là kiểu tấn công khi một người dùng <b>đã xác thực</b> (đăng nhập) bị lừa thực hiện một hành động không
					mong muốn trên một website khác (ví dụ: gửi form, thay đổi mật khẩu...).
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					<b class="text-lg">🔐 Laravel bảo vệ CSRF như thế nào?</b>
					<br />
					Laravel tự động thêm một <b>token CSRF</b> vào mỗi form có method POST, PUT, PATCH, hoặc DELETE. Token này
					được kiểm tra khi có request gửi lên để đảm bảo request là hợp lệ và được tạo từ chính trang web của bạn.
					<br />
					Khi bạn dùng directive Blade <FilePath>@csrf</FilePath> sẽ render thành:
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b class="text-lg"> Laravel sẽ kiểm tra token khi nhận request</b>
					<br />
					Khi nhận request, Laravel sẽ kiểm tra xem:
					<br />
					Field <FilePath>_token</FilePath> có tồn tại không?
					<br />
					Token có khớp với token trong session không?
					<br />
					Nếu không hợp lệ, Laravel trả về lỗi <b> 419 Page Expired.</b>
				</p>

				<p class="text-slate-900 dark:text-white my-3">
					<b class="text-lg">Vậy xài AJAX thì sao?</b>
					<br />
					Khi dùng AJAX (fetch, axios...), bạn cần thêm token vào header:
				</p>
				<VCodeBlock :code="b6" highlightjs lang="js" theme="atom-one-dark" />
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
				b1: `<h2>Thêm bánh</h2>

<form action="{{ route('cakes.add') }}" method="POST">
		@csrf

		// ... content
		<button type="submit">Lưu bánh</button>
</form>
`,
				b2: `Route::post('/cakes', [CakeController::class, 'add'])->name('cakes.add');
`,
				b3: `public function add(Request $request)
{
		// xử lý validate dữ liệu
		$validated = $request->validate([
			'name' => 'required|string|max:255',
			'price' => 'required|numeric|min:0',
			'category_id' => 'required|exists:categories,id',
		]);
		// lưu vào db từ model

		// trả về view hoặc json tuỳ theo yêu cầu
}
`,
				b4: `@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $err)
                <li>{{ $err }}</li>
            @endforeach
        </ul>
    </div>
@endif
`,
				b5: `<input type="hidden" name="_token" value="abc123...">
`,
				b6: `// trên header của blade
<meta name="csrf-token" content="{{ csrf_token() }}">
// dùng với fetch
fetch('/your-route', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': csrfToken
  },
  body: JSON.stringify({
    name: 'Capybara',
    email: 'capy@example.com'
  })
})
`,
				b7: `$validator = Validator::make($request->all(), [
	'name' => 'required|string|max:255',
	'email' => 'required|email',
	'password' => 'required|min:6',
]);

	if ($validator->fails()) {
		return redirect()->back()
			->withErrors($validator)
			->withInput();
}`,
				b8: `$validated = $request->validate([
	'name' => 'required|string|max:255',
	'price' => 'required|numeric|min:0',
], [
    'name.required' => 'Bạn chưa nhập tên bánh!',
]);`,
				b9: `public function rules()
{
    return [
        'name' => 'required|string|max:255',
        'category_id' => 'required|exists:categories,id',
    ];

public function messages(): array
{
    return [
        'name.required' => 'Bạn chưa nhập tên bánh',
        'category_id.required' => 'Bạn chưa chọn danh mục bánh',
        'category_id.exists' => 'Danh mục được chọn không đúng',
    ];
}`,
				cprs: [
					{
						id: 1,
						content: `Biết cách gửi form từ view (Blade) lên controller.`,
					},
					{
						id: 2,
						content: `Biết tạo <b>route</b> phù hợp để xử lý form.`,
					},
					{
						id: 3,
						content: `Hiểu cách nhận dữ liệu từ <b>request</b>.`,
					},
					{
						id: 4,
						content: `Biết validate dữ liệu form đầu vào.`,
					},
				],
				formDesc: [
					{
						id: 1,
						content: `<b>action="{{ route('cakes.add') }}"</b>: định nghĩa route sẽ được gọi tới khi gửi form.`,
					},
					{
						id: 2,
						content: `<b>@csrf</b>:  bảo mật form (chống giả mạo). Nếu không có directive này, bạn sẽ gặp lỗi 419 đó.
						Vì đây là tính năng CSRF (Cross Site Request Forgery) protect của Laravel.`,
					},
				],
				validatorWays: [
					{
						id: 1,
						content: `Cách 1: Dùng trực tiếp trong controller (Quick & simple)`,
					},
					{
						id: 2,
						content: `Cách 2: Tạo Form Request class (phân tách rõ ràng)`,
					},
				],
				validatorRules: [
					{
						id: 0,
						name: 'required',
						desc: 'Bắt buộc nhập',
						syntax: `'name' => 'required'`,
					},
					{
						id: 1,
						name: 'email',
						desc: 'Kiểm tra định dạng email',
						syntax: `'email' => 'required|email'`,
					},
					{
						id: 2,
						name: 'min:6',
						desc: 'Giá trị tối thiểu (số, chuỗi, mảng...)',
						syntax: `'password' => 'min:6'`,
					},
					{
						id: 3,
						name: 'max:255',
						desc: 'Giá trị tối đa',
						syntax: `'name' => 'max:255'`,
					},
					{
						id: 4,
						name: 'numeric',
						desc: 'Là số',
						syntax: `'price' => 'numeric'`,
					},
					{
						id: 5,
						name: 'exists:table,column',
						desc: 'Tồn tại trong bảng CSDL',
						syntax: `'category_id' => 'exists:categories,id'`,
					},
					{
						id: 6,
						name: 'confirmed',
						desc: 'Xác nhận trường (phải có thêm field _confirmation)',
						syntax: `'password' => 'confirmed'`,
					},
					{
						id: 7,
						name: 'unique:table,column',
						desc: 'Không trùng với dữ liệu trong bảng',
						syntax: `'slug' => 'unique:cakes,slug'`,
					},
					{
						id: 8,
						name: 'regex:/pattern/',
						desc: 'Kiểm tra định dạng với regex',
						syntax: `'phone' => 'regex:/^[0-9]{10}$/'`,
					},
					{
						id: 9,
						name: 'sometimes',
						desc: 'Chỉ validate nếu có field đó',
						syntax: `'description' => 'sometimes|string'`,
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
