<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Như các bài trước, các bạn thấy rằng việc sử dụng require/include sẽ cực kì khó chịu khi dự án được mở rộng
					dần. Các lỗi như sai đường dẫn sẽ xảy ra liên tục. Chúng ta cần một giải pháp để giải quyết vấn đề này,
					<b>namespace & autoload</b>
					chính là giải pháp của chúng ta.
					<br />
					<b>Lưu ý:</b> chúng ta vẫn chưa học cách dùng <b>composer</b> nên về cơ bản tôi sẽ demo thông qua việc tạo một
					<b>autoload</b> cơ bản.
				</p>

				<PageHeading text="Tạo autoload" addOnClass="text-left" markedAs="create-autoload" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Chúng ta sẽ tạo một <b>autoload</b> thủ công với mục đích map các <b>namespace</b> thành các đường dẫn tương
					ứng. <FilePath>autoload.php</FilePath>:
				</p>

				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							<FilePath>autoload.php</FilePath> sẽ xử lý việc nạp class dựa trên namespace.
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
							Autoloader này sẽ tìm file dựa trên namespace. Ví dụ: <b>App\Model\Product</b> sẽ trỏ đến Model
							<b>Product.php</b> tương ứng với đường dẫn <FilePath>/Model/Product.php</FilePath>.
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>Lưu ý:</b> trong PHP, namespace chủ yếu được thiết kế để làm việc với class, interface, và trait, giúp tổ
					chức và tránh xung đột tên giữa các thành phần này. Tuy nhiên, nó cũng có thể áp dụng cho các hàm (function)
					và hằng số (constant) kể từ PHP 5.6, nhưng cách sử dụng phổ biến nhất vẫn là với class.
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
				b1: `<?php
spl_autoload_register(function ($class) {
    // Thay dấu \ thành / để tạo đường dẫn file
    $file = __DIR__ . '/' . str_replace('\\', '/', $class) . '.php';
    if (file_exists($file)) {
        require_once $file;
    } else {
        echo "Không tìm thấy file cho class: $class";
    }
});
?>
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-7' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
