<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Middleware" addOnClass="text-left" markedAs="laravel-middleware" />
				<p class="text-slate-900 dark:text-white my-3">
					Ở bài này, chúng ta cùng tìm hiểu về <b>Middleware</b> trong Laravel:
				</p>
				<SessionTarget :operators="cprs"></SessionTarget>

				<p class="text-slate-900 dark:text-white my-3">
					<b>Middleware</b> trong Laravel là một lớp trung gian, chạy trước hoặc sau khi request được xử lý bởi
					controller. Nó giống như một “người gác cổng”, giúp ta kiểm tra, thay đổi, hoặc từ chối request.
				</p>
				<PageHeading text="1. Tạo middleware" addOnClass="text-left" markedAs="middleware-create" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Trước tiên, chúng ta sẽ tạo một custom-middleware cho app bằng artisan:
				</p>
				<FakeTerminalUI :textCoppy="'php artisan make:middleware CustomMiddleware'"
					>php artisan make:middleware CustomMiddleware</FakeTerminalUI
				>
				<p class="text-slate-900 dark:text-white my-3">
					Lúc này, middleware của chúng ta sẽ được đặt trong <FilePath>App/Http/Middleware</FilePath>.
					<br />
					Sau khi đã có middleware, chúng ta sẽ viết một logic check đơn giản cho nó:
				</p>
				<PageHeading text="2. Logic" addOnClass="text-left" markedAs="middleware-logic" :lvl="2" />
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>Middleware</b> trên đơn giản là kiểm tra xem khi một request được gửi đến thì có kèm <b>`token`</b> trong
					request.headers hay không,
					<br />
					✅ Nếu có thì sẽ cho phép request đi qua và xử lý trong <b>controller</b>
					<br />
					❌ Nếu không thì sẽ <b>redirect</b> người dùng về trang <b>/login</b> mà không được vào <b>controller</b>.
				</p>
				<PageHeading text="3. Register" addOnClass="text-left" markedAs="middleware-register" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Tiếp theo, chúng ta sẽ <b>"đăng ký"</b> middleware này để sử dụng. <br />Lưu ý: Laravel 11+ dùng kiến trúc mới
					tên là <b>"Bootstrap-less"</b> hoặc <b>"Laravel Minimal"</b>, trong đó Middleware được đăng ký trực tiếp trong
					<FilePath>bootstrap/app.php</FilePath> hoặc khai báo tại <FilePath>Route, Controller</FilePath> thay vì dùng
					kernel như trước.
				</p>
				<PageHeading
					text="Cách 1: Gắn middleware trực tiếp trong route/group-route"
					addOnClass="text-left"
					markedAs="middleware-register"
					:lvl="3"
				/>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
				<PageHeading
					text="Cách 2: Gắn middleware global"
					addOnClass="text-left mt-3"
					markedAs="middleware-register"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white mb-3">
					Đăng ký trực tiếp trong
					<FilePath>bootstrap/app.php</FilePath>:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white mb-3">
					Done, giờ thử gửi một request lên <FilePath>/categories</FilePath> để check kết quả nha.
				</p>
				<PageHeading
					text="Một số ứng dụng phổ biến của Middleware"
					addOnClass="text-left"
					markedAs="middleware-register"
					:lvl="1"
				/>
				<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
						<tr>
							<th scope="col" class="px-5 py-3">Tên Middleware</th>
							<th scope="col" class="px-5 py-3">Tác dụng</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4"><FilePath>auth</FilePath></td>
							<td class="px-5 py-4">Kiểm tra người dùng đã đăng nhập chưa</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4"><FilePath>verified</FilePath></td>
							<td class="px-5 py-4">Kiểm tra tài khoản đã xác minh email chưa</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-5 py-4"><FilePath>throttle</FilePath></td>
							<td class="px-5 py-4">Giới hạn số lần gửi request (rate limiting)</td>
						</tr>
					</tbody>
				</table>
				<!--  -->
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
				b1: `public function handle(Request $request, Closure $next): Response
{
		if (empty($request->header('token'))) {
				return redirect('/login');
		}
		return $next($request);
}`,
				b2: `Route::get('/categories', [CategoryController::class, 'index'])->middleware(CustomMiddleware::class);`,
				b3: `->withMiddleware(function (Middleware $middleware) {
	CustomMiddleware::class
})`,

				cprs: [
					{
						id: 1,
						content: `Hiểu Middleware là gì và tại sao cần dùng`,
					},
					{
						id: 2,
						content: `Biết cách tạo Middleware trong Laravel.`,
					},
					{
						id: 3,
						content: `Hiểu rõ Middleware hoạt động như thế nào.`,
					},
					{
						id: 4,
						content: `Thực hành tạo Middleware.`,
					},
					{
						id: 5,
						content: `Áp dụng Middleware vào routes hoặc group routes.`,
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-23' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
