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

				<PageHeading text="5. Flash Message — thông báo qua 1 request" addOnClass="text-left mt-3" markedAs="form-flash" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Vấn đề:</b> user submit form thành công → Controller <FilePath>redirect()</FilePath> về trang danh sách.
					Muốn hiển thị <b>"Đã tạo bánh mới!"</b> trên trang mới đó, nhưng thông báo này chỉ nên xuất hiện <b>1
					lần</b> (refresh trang thì biến mất). Không thể:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Nhồi qua URL query string — URL xấu, có giới hạn ký tự, phải encode phiền.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Lưu vào session thường — không tự xoá, refresh vẫn thấy.
					</li>
				</ul>
				<div class="mt-3 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>📝 Ví như:</b> tờ giấy nhớ dán trên bàn — người đến đọc 1 lần rồi tờ giấy tự bay đi. Không cần chủ
						động xoá, không sợ quên.
					</p>
				</div>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Flash message</b> = dữ liệu lưu trong session, chỉ tồn tại <b>1 request kế tiếp</b> rồi tự xoá. Đây là
					pattern chuẩn cho luồng <b>POST → Redirect → GET</b> (PRG).
				</p>

				<PageHeading text="Set flash trong Controller" addOnClass="text-left mt-3" markedAs="form-flash-set" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Dùng <FilePath>->with('key', $value)</FilePath> gắn vào redirect. Convention keys phổ biến:
					<FilePath>success</FilePath>, <FilePath>error</FilePath>, <FilePath>warning</FilePath>,
					<FilePath>info</FilePath> — dễ style CSS theo.
				</p>
				<ClientOnly>
					<VCodeBlock :code="bFlashSet" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Đọc flash trong Blade" addOnClass="text-left mt-3" markedAs="form-flash-read" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Trong view dùng helper <FilePath>session('key')</FilePath> — trả về giá trị flash hoặc
					<FilePath>null</FilePath> nếu không có:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bFlashRead" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Đặt trong layout để reuse" addOnClass="text-left mt-3" markedAs="form-flash-layout" :lvl="3" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Copy-paste 4 lần cho mỗi type = mệt. Loop 1 lần trong layout, mọi page tự có:
				</p>
				<ClientOnly>
					<VCodeBlock :code="bFlashLayout" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Sau đó ở controller chỉ cần <FilePath>->with('success', '...')</FilePath> là banner tự hiện lên toàn site.
				</p>

				<div class="mt-3 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>💡 Bạn đã dùng flash mà không biết:</b> <FilePath>$errors</FilePath> ở section 4 chính là flash mà
						Laravel <b>tự set</b> khi validation fail! Kèm theo là <FilePath>old('name')</FilePath> — cũng flash
						(input cũ, tồn tại 1 request để giữ giá trị đã nhập). Tương đương với gọi tay
						<FilePath>->withErrors($validator)->withInput()</FilePath>.
					</p>
				</div>

				<div class="mt-3 p-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>⚠️ Lưu ý:</b> <FilePath>->with()</FilePath> có 2 nghĩa khác nhau tuỳ object gọi nó:
						<br />• Trên <FilePath>redirect()</FilePath> → flash vào session (dùng ở đây).
						<br />• Trên <FilePath>view()</FilePath> → truyền data trực tiếp cho view (VD
						<FilePath>view('cakes.index')->with('cakes', $data)</FilePath>).
						<br />Đừng nhầm 2 cái này.
					</p>
				</div>

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

				<PageHeading text="🏋️ Luyện tập nhẹ" addOnClass="text-left mt-5" markedAs="form-practice" :lvl="1" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Sau khi đã nắm 4 bước cơ bản (View → Route → Controller → Errors) và biết cả 2 cách validate (inline +
					Form Request class), hãy tự làm 4 bài dưới đây. Mỗi bài có skeleton sẵn — bạn điền phần
					<FilePath>// TODO</FilePath>.
				</p>

				<PageHeading text="Bài 1: Form contact — validate inline" addOnClass="text-left mt-3" markedAs="form-practice-1" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu:</b> tạo form liên hệ (name, email, message), validate trực tiếp trong Controller, redirect về
					lại form với flash success.
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>name</FilePath> — bắt buộc, chuỗi, tối đa 100 ký tự.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>email</FilePath> — bắt buộc, đúng định dạng email.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>message</FilePath> — bắt buộc, tối thiểu 20 ký tự, tối đa 2000.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						Custom message tiếng Việt cho <FilePath>required</FilePath> và <FilePath>email</FilePath>.
					</li>
				</ul>
				<ClientOnly>
					<VCodeBlock :code="bPractice1" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Bài 2: Đăng ký user — Form Request class" addOnClass="text-left mt-3" markedAs="form-practice-2" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu:</b> tách validation ra class riêng bằng
					<FilePath textCoppy="php artisan make:request RegisterUserRequest">php artisan make:request RegisterUserRequest</FilePath>.
					Controller chỉ inject class — không cần gọi <FilePath>validate()</FilePath> nữa.
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>name</FilePath> — required, string, max 255.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>email</FilePath> — required, email, <b>unique</b> trong bảng <FilePath>users</FilePath>.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>password</FilePath> — required, min 8, <b>confirmed</b> (form phải có field
						<FilePath>password_confirmation</FilePath>).
					</li>
				</ul>
				<ClientOnly>
					<VCodeBlock :code="bPractice2" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Bài 3: Update Cake — authorize + rules phức tạp" addOnClass="text-left mt-3" markedAs="form-practice-3" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Yêu cầu:</b> tạo <FilePath>UpdateCakeRequest</FilePath> với method <FilePath>authorize()</FilePath> chỉ
					cho admin. Nếu <FilePath>authorize()</FilePath> return <FilePath>false</FilePath>, Laravel tự trả HTTP
					403 mà không cần code thêm.
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>name</FilePath> — required, string, max 255.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>price</FilePath> — required, numeric, tối thiểu 1000đ.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>stock</FilePath> — integer, tối thiểu 0.
					</li>
					<li class="text-slate-900 dark:text-white leading-8 list-disc marker:text-sky-400">
						<FilePath>is_active</FilePath> — boolean.
					</li>
				</ul>
				<ClientOnly>
					<VCodeBlock :code="bPractice3" highlightjs lang="php" theme="atom-one-dark" />
				</ClientOnly>

				<PageHeading text="Bài 4 (bonus): Debug 419 Page Expired" addOnClass="text-left mt-3" markedAs="form-practice-4" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					<b>Tình huống:</b> đồng nghiệp gửi PR với đoạn form dưới đây. Khi submit thì browser hiện lỗi
					<b>419 Page Expired</b>. Bạn tìm ra thiếu gì và fix bằng cách nào?
				</p>
				<ClientOnly>
					<VCodeBlock :code="bPractice4" highlightjs lang="html" theme="atom-one-dark" />
				</ClientOnly>
				<div class="mt-3 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>💡 Gợi ý:</b> so sánh với form ở phần <b>1. Tạo View</b> ở đầu bài. So sánh xem thiếu directive
						Blade nào giữa <FilePath>&lt;form&gt;</FilePath> và <FilePath>&lt;input&gt;</FilePath>. Xem lại
						section <b>CSRF</b> để biết vì sao Laravel bắt buộc directive đó với form POST/PUT/PATCH/DELETE.
					</p>
				</div>

				<div class="mt-4 p-4 rounded-lg border border-neutral-200 dark:border-gray-600 bg-neutral-50 dark:bg-gray-800">
					<p class="text-slate-900 dark:text-white text-sm leading-7">
						<b>💬 Cách test nhanh:</b> tạo route + form trong project Laravel mới, dùng
						<FilePath textCoppy="php artisan serve">php artisan serve</FilePath> rồi submit form ở browser. Nếu
						validate fail, redirect back → dùng <FilePath>old('name')</FilePath> trong Blade để giữ lại giá trị đã
						nhập:
						<FilePath>&lt;input name="name" value="&#123;&#123; old('name') &#125;&#125;"&gt;</FilePath>.
					</p>
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
    // 1. Validate dữ liệu — throw ValidationException nếu fail
    $validated = $request->validate([
        'name'        => 'required|string|max:255',
        'price'       => 'required|numeric|min:0',
        'category_id' => 'required|exists:categories,id',
    ]);

    // 2. Lưu vào DB qua model (chỉ field trong $fillable được nhận)
    Cake::create($validated);

    // 3. Redirect về trang danh sách kèm flash message
    return redirect()->route('cakes.index')->with('success', 'Đã thêm bánh mới!');
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
				b6: `// 1. Trong <head> của blade layout: gắn token vào meta
<meta name="csrf-token" content="{{ csrf_token() }}">

// 2. JS: đọc token từ meta rồi gắn vào request header
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

fetch('/cakes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': csrfToken,
  },
  body: JSON.stringify({
    name: 'Bánh su kem',
    price: 25000,
    category_id: 1,
  }),
});
`,
				b7: `<?php
use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($request->all(), [
    'name'        => 'required|string|max:255',
    'price'       => 'required|numeric|min:0',
    'category_id' => 'required|exists:categories,id',
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
				b9: `<?php
// app/Http/Requests/StoreCakeRequest.php
namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class StoreCakeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;   // set false nếu cần check quyền
    }

    public function rules(): array
    {
        return [
            'name'        => 'required|string|max:255',
            'price'       => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'        => 'Bạn chưa nhập tên bánh',
            'price.required'       => 'Bạn chưa nhập giá bánh',
            'category_id.required' => 'Bạn chưa chọn danh mục bánh',
            'category_id.exists'   => 'Danh mục được chọn không đúng',
        ];
    }
}`,
				bFlashSet: `<?php
// app/Http/Controllers/CakeController.php
class CakeController extends Controller
{
    // ---- Success sau khi tạo mới ----
    public function store(Request $request)
    {
        Cake::create($request->validated());

        return redirect()
            ->route('cakes.index')
            ->with('success', 'Đã tạo bánh mới!');   // ← flash key='success'
    }

    // ---- Error khi xoá fail ----
    public function destroy(Cake $cake)
    {
        if ($cake->orders()->exists()) {
            return back()->with('error', 'Không thể xoá bánh đã có order.');
        }
        $cake->delete();
        return redirect()->route('cakes.index')->with('success', 'Đã xoá bánh.');
    }

    // ---- Nhiều flash cùng lúc — chain nhiều ->with() ----
    public function updatePrice(Cake $cake)
    {
        return redirect()->route('cakes.index')
            ->with('success', 'Đã cập nhật giá!')
            ->with('info', "Giá mới: {$cake->price}đ");
    }

    // ---- Flash object phức tạp (VD danh sách item vừa thêm) ----
    public function bulkCreate()
    {
        return redirect()->back()->with('created_ids', [1, 2, 3]);
    }
}`,
				bFlashRead: `{{-- resources/views/cakes/index.blade.php --}}

{{-- Cách 1: đọc trực tiếp ----}}
@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif

@if (session('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
@endif

{{-- Cách 2: with default value ----}}
<div>{{ session('info', 'Không có thông báo') }}</div>

{{-- Cách 3: check trước, dùng biến ----}}
@if ($msg = session('success'))
    <div class="alert alert-success">{{ $msg }}</div>
@endif

{{-- Đọc flash phức tạp ----}}
@if (session('created_ids'))
    <p>Vừa tạo {{ count(session('created_ids')) }} bánh mới.</p>
@endif`,
				bFlashLayout: `{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
<body>
    <nav>...</nav>

    {{-- Loop 4 type — mọi page kế thừa layout đều tự có --}}
    @foreach (['success', 'error', 'warning', 'info'] as $type)
        @if (session($type))
            <div class="alert alert-{{ $type === 'error' ? 'danger' : $type }}">
                {{ session($type) }}
            </div>
        @endif
    @endforeach

    @yield('content')
</body>
</html>`,
				bPractice1: `<?php
// routes/web.php
Route::view('/contact', 'contact.create')->name('contact.form');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

// resources/views/contact/create.blade.php
// <form action="{{ route('contact.send') }}" method="POST">
//     @csrf
//     <input name="name"    value="{{ old('name') }}">
//     <input name="email"   value="{{ old('email') }}">
//     <textarea name="message">{{ old('message') }}</textarea>
//     <button type="submit">Gửi</button>
// </form>

// app/Http/Controllers/ContactController.php
class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            // TODO: điền 3 rules cho name / email / message
        ], [
            // TODO: điền custom message tiếng Việt
            // 'name.required'    => 'Bạn chưa nhập tên',
            // ...
        ]);

        // TODO: lưu $data vào DB hoặc Mail::to(...)->send(...)

        return redirect()->route('contact.form')
            ->with('success', 'Đã gửi liên hệ, cảm ơn bạn!');
    }
}`,
				bPractice2: `<?php
// app/Http/Requests/RegisterUserRequest.php
namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class RegisterUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;   // ai cũng đăng ký được — không cần check quyền
    }

    public function rules(): array
    {
        return [
            // TODO: điền rules cho name / email (unique users) / password (confirmed, min 8)
        ];
    }

    public function messages(): array
    {
        return [
            // TODO: custom message VN cho các rule quan trọng
            // 'email.unique' => 'Email này đã có người dùng.',
            // 'password.confirmed' => 'Xác nhận mật khẩu không khớp.',
        ];
    }
}

// app/Http/Controllers/AuthController.php — chỉ cần type-hint, Laravel tự validate
class AuthController extends Controller
{
    public function register(RegisterUserRequest $request)
    {
        // Nếu đến được đây = validation đã PASS
        // $request->validated() = mảng chỉ chứa field đã pass rules
        $user = User::create([
            'name'     => $request->validated('name'),
            'email'    => $request->validated('email'),
            'password' => bcrypt($request->validated('password')),
        ]);

        auth()->login($user);
        return redirect()->route('home')->with('success', 'Đăng ký thành công!');
    }
}`,
				bPractice3: `<?php
// app/Http/Requests/UpdateCakeRequest.php
namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class UpdateCakeRequest extends FormRequest
{
    public function authorize(): bool
    {
        // TODO: return true nếu user hiện tại là admin
        // Hint: $this->user()?->is_admin
        return false;   // sửa lại
    }

    public function rules(): array
    {
        return [
            // TODO: điền 4 rules
            // 'name'      => ...,
            // 'price'     => ...,
            // 'stock'     => ...,
            // 'is_active' => ...,
        ];
    }

    public function messages(): array
    {
        return [
            'price.min' => 'Giá bánh phải từ 1.000đ trở lên.',
        ];
    }
}

// app/Http/Controllers/CakeController.php
class CakeController extends Controller
{
    // Route Model Binding: {cake} tự resolve sang instance Cake
    public function update(UpdateCakeRequest $request, Cake $cake)
    {
        // Đến đây = user đã là admin + data đã pass rules
        $cake->update($request->validated());
        return back()->with('success', 'Cập nhật bánh thành công!');
    }
}

// routes/web.php
// Route::put('/cakes/{cake}', [CakeController::class, 'update'])->name('cakes.update');`,
				bPractice4: `{{-- resources/views/cakes/create.blade.php --}}
<form action="{{ route('cakes.add') }}" method="POST">
    <input name="name" placeholder="Tên bánh">
    <input name="price" placeholder="Giá">
    <button type="submit">Lưu</button>
</form>

{{-- Submit → HTTP 419 Page Expired. Vì sao? Fix thế nào? --}}`,
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
						content: `Biết validate dữ liệu form đầu vào — cả inline lẫn Form Request class.`,
					},
					{
						id: 5,
						content: `Hiểu CSRF là gì và cách Laravel bảo vệ form.`,
					},
					{
						id: 6,
						content: `Hoàn thành 4 bài luyện tập tự áp dụng vào Cake Shop.`,
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
						title: 'Trở về danh sách Doc',
						link: '/php/documentation',
					},
					prev: {
						title: 'Trở về danh sách Doc',
						link: '/php/documentation',
					},
				},
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-23' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
