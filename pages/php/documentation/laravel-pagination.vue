<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Pagination" addOnClass="text-left" markedAs="laravel-pagination" />
				<p class="text-slate-900 dark:text-white my-3">
					Ở bài này, chúng ta cùng tìm hiểu về <b>Pagination</b> trong Laravel:
				</p>
				<SessionTarget :operators="cprs"></SessionTarget>

				<p class="text-slate-900 dark:text-white my-3">
					<b>Pagination</b> là kỹ thuật được sử dụng để giới hạn số lượng và phân vùng bản ghi trả về, từ đó sẽ giảm
					được những data không cần thiệt và tăng hiệu năng của app.
					<br />
					<br />
					Trong thực tế, khi xây dựng một website thương mại điện tử như cửa hàng bánh ngọt (Cake Shop), danh sách sản
					phẩm có thể lên tới hàng trăm hoặc hàng ngàn chiếc bánh. Nếu ta hiển thị tất cả lên một trang web thì sẽ ảnh
					hưởng đến tốc độ tải, content ... Để giải quyết, chúng ta có thể chia data ra làm nhiều phần nhỏ và trả về
					từng phần.
				</p>

				<PageHeading text="1. Data paginate()" addOnClass="text-left" markedAs="eloquent-paginate" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Khi sử dụng <b>Eloquent ORM</b> của Laravel, chúng ta đã được cung cấp sẵn method
					<FilePath>paginate()</FilePath>
					để phân trang một cách đơn giản rồi:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<FilePath>paginate(15)</FilePath>: sẽ trả về cho chúng ta 15 bản ghi đầu tiên thay vì trả về toàn bộ bản ghi
					như cũ. Nhưng vấn đề tiếp theo xảy ra, nếu bạn cần cả view cho phần phân trang này thì sao? Cover ở phần tiếp
					theo.
				</p>
				<PageHeading text="2. View paginate()" addOnClass="text-left" markedAs="middleware-register" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Các bạn hoàn toàn có thể tự custom một <b>pagination component</b> nếu muốn. Nhưng ngoài ra, Laravel cũng đã
					build sẵn một vài <b>pagination component</b> thông dụng với các UI framework khác nhau (Tailwind, Bootstrap
					...) rồi. Cùng xem các bước để dùng bọn này nha
				</p>
				<PageHeading
					text="B1: Hiển thị pagination trong view"
					addOnClass="text-left"
					markedAs="middleware-register"
					:lvl="3"
				/>
				<p class="text-slate-900 dark:text-white my-3">
					Tại page-view chúng mình chỉ cần dùng method <b>link()</b> để hiển thị ra:
				</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="atom-one-dark" />
				<p class="text-slate-900 dark:text-white my-3">
					<b>WOW</b> check UI và đã thấy, quá ảo. Nhưng trong trường hợp các bạn bị "vỡ" giao diện thì đừng lo, vì mặc
					định Laravel sẽ sử dụng Component của Tailwind, bạn có thể nhúng cdn của tailwind hoặc chọn dùng Framework
					khác như Bootstrap chẳng hạn, xem các bước sau nha.
				</p>
				<PageHeading
					text="B2: gen các component có sẵn (nếu cần custom)"
					addOnClass="text-left"
					markedAs="middleware-register"
					:lvl="3"
				/>
				<FakeTerminalUI :textCoppy="'php artisan vendor:publish --tag=laravel-pagination'"
					>php artisan vendor:publish --tag=laravel-pagination</FakeTerminalUI
				>
				<p class="text-slate-900 dark:text-white my-3">
					Toàn bộ template cho <b>pagination</b> đều được gen ra tại:
					<FilePath>resources/views/vendor/pagination</FilePath>.
					<br />
					Các bạn có thể vào chọn và custom lại theo yêu cầu.
					<br />
					Sau đó mở <FilePath>App\Providers\AppServiceProvider.php</FilePath> để đăng ký lại pagination component:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="atom-one-dark" />

				<p class="text-slate-900 dark:text-white my-3">
					Okela, Sau khi đã render pagination với View (Blade), bây giờ mình sẽ hướng dẫn bạn trả dữ liệu phân trang
					dưới dạng JSON trong API, rất cần thiết khi bạn xây SPA hoặc dùng React, Vue, Nuxt, Next, mobile app...
					<br />
					<br />
					<b>Trong Controller dùng:</b>
				</p>

				<VCodeBlock :code="b4" highlightjs lang="php" theme="atom-one-dark" />

				<!-- -->
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
				b1: `$cakes = Cake::paginate(15);`,
				b2: `{{-- Phân trang --}}
<div class="d-flex justify-content-center">
	{{ $cakes->links() }}
</div>`,
				b3: `<?php
// app/Providers/AppServiceProvider.php
namespace App\\Providers;

use Illuminate\\Pagination\\Paginator;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Dùng UI Bootstrap 5 thay cho Tailwind mặc định
        Paginator::useBootstrapFive();
    }
}`,
				b4: `<?php
// app/Http/Controllers/CakeController.php
public function list(Request $request)
{
    $perPage = (int) $request->input('per_page', 10);
    $paginator = Cake::paginate($perPage);

    return response()->json([
        'cakes' => $paginator->items(),
        'pagination' => [
            'current_page' => $paginator->currentPage(),
            'last_page'    => $paginator->lastPage(),
            'per_page'     => $paginator->perPage(),
            'total'        => $paginator->total(),
        ],
    ]);

    // Cách gọn hơn: response()->json($paginator) — Laravel tự
    // serialize LengthAwarePaginator kèm sẵn meta {data, links, meta}.
}`,

				cprs: [
					{
						id: 1,
						content: `Hiểu được <b>pagination</b> là gì và tại sao cần dùng`,
					},
					{
						id: 2,
						content: `Áp dụng được phương thức paginate() trong Laravel.`,
					},
					{
						id: 3,
						content: `Hiển thị dữ liệu được phân trang kèm view từ Bootstrap 5.`,
					},
					{
						id: 4,
						content: `Tự động sinh view phân trang bằng <b>vendor:publish</b>.`,
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-24' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
