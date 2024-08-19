<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng tạo Model, Controller cho product và xử lý bài toán CRUD với database.
				</p>

				<PageHeading text="Tạo Model" addOnClass="text-left" markedAs="create-model" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Trong thư mục <FilePath>models</FilePath>, chúng ta sẽ tạo một model cho product có tên là:
					<b>`ProductModel`</b>
				</p>

				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[70px]">`conn: `</b>
							<div>
								<span>
									Là properties dùng để lưu lại database, sẽ được dùng để xử lý các lệnh RAW SQL như thêm, sửa, xoá bản
									ghi sau này. Ở đây tôi khai báo nó là <b>`private`</b> để đảm bảo nó sẽ không thể truy cập ngoài
									Model.
								</span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[70px]">`table: `</b>
							<div>
								<span>
									Là properties dùng để lưu lại tên table, tương tự như <b>`$conn`</b> sẽ được dùng để xử lý các lệnh
									RAW SQL như thêm, sửa, xoá bản ghi sau này. Nó cũng sẽ được khai báo là <b>`private`</b>
								</span>
							</div>
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Đọc lại
					<a
						href="/php/documentation/php-mvc#mvc-model"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						mô hình MVC
					</a>
					để nắm rõ Model có trách nhiệm như thế nào. Tiếp theo, chúng ta sẽ định nghĩa các methods cho model để xử lý
					bài toán CRUD.
				</p>
				<PageHeading text="Read - Đọc data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-read" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lấy ra danh sách các bản ghi trong database</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Create - Thêm data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-create" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lưu bản ghi vào database</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Update - Cập nhật data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-update" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Cập nhật bản ghi vào database</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Delete - Xoá data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-delete" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Xoá bản ghi khỏi database</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="tomorrow-night-bright" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Như vậy chúng ta đã hoàn thành tạo các methods để xử lý bài toán CRUD với product.
				</p>

				<PageHeading text="Tạo Controller" addOnClass="text-left" markedAs="create-controller" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tiếp theo, chúng ta đến với việc tạo Controller để tương tác với phần view. Trong thư mục
					<FilePath>controllers</FilePath>, chúng ta sẽ tạo một controller cho product có tên là:
					<b>`ProductController`</b>
				</p>

				<VCodeBlock :code="b6" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[150px]">`productModel: `</b>
							<div>
								<span>
									Là một instance của model chịu trách nhiệm thao tác với database, ở đây nó chính là instance của
									<b>`ProductModel`</b> chúng ta vừa tạo. <br />
									Do class __construct của <b>`ProductModel`</b> yêu cầu param là <b>`$db`</b> nên ở đây, __construct
									của <b>`ProductController`</b> cũng cần <b>`$db`</b> để tạo ra một instance của <b>`ProductModel`</b>.
								</span>
							</div>
						</li>
					</ul>
				</div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tượng tự như Model, chúng ta sẽ định nghĩa các methods cho controller để xử lý như trung gian giữa View và
					Model.
				</p>

				<PageHeading text="Read - Đọc data" :lvl="2" addOnClass="text-left mb-1" markedAs="controller-read" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lấy ra danh sách các bản ghi và trả lại view</p>
				<VCodeBlock :code="b7" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Create - Thêm data" :lvl="2" addOnClass="text-left mb-1" markedAs="controller-create" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nhận dữ liệu từ View, xử lý và lưu vào database nếu hợp lệ
				</p>
				<VCodeBlock :code="b8" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Update - Cập nhật data" :lvl="2" addOnClass="text-left mb-1" markedAs="controller-update" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Nhận dữ liệu từ View, xử lý và lưu vào database nếu hợp lệ
				</p>
				<VCodeBlock :code="b9" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Delete - Xoá data" :lvl="2" addOnClass="text-left mb-1" markedAs="controller-delete" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Nhận dữ liệu từ View, xử lý và xoá data</p>
				<VCodeBlock :code="b10" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) xong phần 2, chúng ta đã hoàn thành việc tạo <b>`Model` và `Controller`</b> ở phần sau chúng ta sẽ
					cùng tạo View và xử lý data từ phía người dùng. See ya!!
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
				b1: ` // models/ProductModel.php
<?php
class ProductModel {
    private $conn;
    private $table = 'products';

    // Constructor
    public function __construct($db) {
        $this->conn = $db;
    }
}
?>
`,
				b2: `// Lấy danh sách products
public function read() {
        $sql = "SELECT * FROM " . $this->table;
        return $this->conn->query($sql);
}`,
				b3: ` // Tạo bản ghi mới
public function create($data) {
	$sql = "INSERT INTO products (product_name, description, images, regular_price, sale_price, brand_id, category_id) 
        VALUES ('{$data['product_name']}', '{$data['description']}', '{$data['images']}', {$data['regular_price']}, {$data['sale_price']}, {$data['brand_id']}, {$data['category_id']})";
				return $this->conn->query($sql); 
}`,
				b4: ` // Update bản ghi
public function update($id,$data) {
	$sql = "UPDATE " . $this->table . " 
    SET product_name = '{$data['product_name']}', 
        description = '{$data['description']}', 
        images = '{$data['images']}', 
        regular_price = {$data['regular_price']}, 
        sale_price = {$data['sale_price']}, 
        brand_id = {$data['brand_id']}, 
        category_id = {$data['category_id']} 
    WHERE id = {$id}";
	return $this->conn->query($sql);
}`,
				b5: ` // Xoá bản ghi
public function delete($id) {
  $sql = "DELETE FROM " . $this->table . " WHERE id = {$id}";

  return $this->conn->query($sql);
}`,
				b6: ` // controllers/ProductController.php
<?php
require_once 'models/ProductModel.php';
class ProductController {
    private $productModel;

    // Constructor
    public function __construct($db) {
        $this->productModel = new ProductModel($db);
    }
}
?>
`,
				b7: `// Lấy danh sách products
public function getAll() {
	$products = $this->productModel->read();
  return $products;
}`,
				b8: `// Kiểm tra và tạo bản ghi với dữ liệu truyền từ view
public function create($data) {
	// logic kiểm tra data trước khi lưu.
	if($this->productModel->create($data)) {
		return "Product created successfully.";
	} else {
		return "Failed to create product.";
	}
}`,
				b9: `// Kiểm tra và tạo bản ghi với dữ liệu truyền từ view
public function update($data) {
	// logic kiểm tra data trước khi lưu.
	if($this->productModel->update($data['id'],$data)) {
		return "Product updated successfully.";
	} else {
		return "Failed to update product.";
	}
}`,
				b10: `// Kiểm tra và xoá bản ghi với dữ liệu truyền từ view
	public function delete($id) {
	if($this->productModel->delete($id)) {
		return "Product deleted successfully.";
	} else {
		return "Failed to delete product.";
	}
}`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-3' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
