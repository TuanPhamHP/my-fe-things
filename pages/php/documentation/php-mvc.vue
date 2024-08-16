<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="intro" />
				<p class="text-slate-900 dark:text-white my-5">Cùng tìm hiểu về cấu trúc cơ bản của một Laravel project.</p>

				<PageHeading text="MVC Architecture" addOnClass="text-left" markedAs="mvc-architecture" />
				<p class="text-slate-900 dark:text-white my-3">
					Laravel sử dụng mô hình MVC để xây dựng hệ thống, chúng ta sẽ cùng tìm hiểu xem:
					<b>
						<br />
						- MVC là gì?
						<br />
						- Các thành phần trong MVC?
						<br />
						- MVC hoạt động như thế nào?
					</b>
				</p>
				<p class="text-slate-900 dark:text-white my-3">
					MVC (Model-View-Controller) là một mô hình kiến trúc phần mềm phổ biến được sử dụng để tổ chức mã nguồn của
					các ứng dụng một cách rõ ràng và dễ bảo trì. Mô hình này chia ứng dụng thành ba thành phần chính:
					<b> Model, View và Controller</b>
					. Luồng hoạt động của mô hình MVC có thể được vẽ lại như sau:
				</p>
				<div class="col-span-1 bg-neutral-100 px-5 py-1 rounded">
					<img
						style="height: 500px"
						src="https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png"
						alt=""
						class="rounded-lg mt-3 block"
					/>
				</div>
				<PageHeading text="1. Model" addOnClass="text-left mt-3" markedAs="mvc-model" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Model đại diện cho dữ liệu của ứng dụng và các quy tắc nghiệp vụ. Khi định nghĩa Model, chúng ta sẽ không thao
					tác gì về giao diện người dùng hoặc cách dữ liệu được hiển thị. Thay vào đó, chúng ta chỉ quan tâm đến việc
					tương tác với DB, định nghĩa các quy tắc dữ liệu ...
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>- Quản lý dữ liệu của ứng dụng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>- Tương tác với cơ sở dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>- Thực hiện các phép xử lý dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>- Định nghĩa các quy tắc nghiệp vụ của dữ liệu. </span>
					</li>
				</ul>

				<VCodeBlock :code="b1" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="2. View" addOnClass="text-left mt-3" markedAs="mvc-view" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					View là thành phần chịu trách nhiệm hiển thị dữ liệu cho người dùng. View không chứa logic nghiệp vụ và không
					tương tác trực tiếp với Model.
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Hiển thị dữ liệu. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Xử lý giao diện người dùng.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Nhận đầu vào từ người dùng và gửi nó đến Controller. </span>
					</li>
				</ul>

				<VCodeBlock :code="b2" highlightjs lang="php" theme="vs2015" />
				<PageHeading text="3. Controller" addOnClass="text-left mt-3" markedAs="mvc-controller" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-3">
					Ta có thể thấy rằng <b>Model</b> và <b>View</b> không làm việc trực tiếp với nhau, chúng cũng không hề can
					thiệp vào logic của đối tượng còn lại. Như vậy, ta cần một đối tượng thứ 3 để làm cầu nối giữa hai bên,
					<b>Controller</b> đóng vai trò là cầu nối giữa <b>Model</b> và <b>View</b>. Controller nhận đầu vào từ người
					dùng, xử lý các yêu cầu và tương tác với Model để lấy dữ liệu, sau đó chuyển dữ liệu đó đến View để hiển thị.
					<br />
					<b>Trách nhiệm chính:</b>
				</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Nhận (từ View) và xử lý yêu cầu từ người dùng. </span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Tương tác với Model để truy xuất và lưu trữ dữ liệu.</span>
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						<span>Lấy dữ liệu sau khi xử lí và gửi dữ liệu đến View để hiển thị. </span>
					</li>
				</ul>

				<VCodeBlock :code="b3" highlightjs lang="php" theme="vs2015" />
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
				b1: `// Models/Product.php
class Product {
    public $id;
    public $name;
    public $price;

    public function __construct($id, $name, $price) {
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
    }

    // Phương thức lấy tất cả sản phẩm
    public static function all() {
        // Giả sử đây là dữ liệu từ cơ sở dữ liệu
        $products = [
            new Product(1, "Laptop", 1500),
            new Product(2, "Phone", 800),
            new Product(3, "Tablet", 600),
        ];
        return $products;
    }

    // Phương thức tìm sản phẩm theo ID
    public static function find($id) {
        $products = self::all();
        foreach ($products as $product) {
            if ($product->id == $id) {
                return $product;
            }
        }
        return null;
    }
}`,
				b2: `// views/product_list.php
foreach ($products as $product) {
    echo "<p>{$product->name} - {$product->price}</p>";
}

// views/product_detail.php
echo "<h1>{$product->name}</h1>";
echo "<p>Price: {$product->price}</p>";
`,
				b3: `// Controllers/ProductController.php
class ProductController {
    // Phương thức hiển thị danh sách sản phẩm
    public function index() {
        $products = Product::all();
        include "views/product_list.php";
    }

    // Phương thức hiển thị chi tiết sản phẩm
    public function show($id) {
        $product = Product::find($id);
        if ($product) {
            include "views/product_detail.php";
        } else {
            echo "Product not found!";
        }
    }
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-1' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
