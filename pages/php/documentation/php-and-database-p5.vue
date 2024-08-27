<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng tạo thêm table và ràng buộc quan hệ của các bảng với nhau.
				</p>

				<PageHeading text="Tạo bảng categories" addOnClass="text-left" :lvl="2" markedAs="create-categories-table" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tạo bảng <b>`categories`</b> để lưu lại các thông tin về danh mục:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Update bảng products" addOnClass="text-left" :lvl="2" markedAs="update-products-table" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Tiếp theo, chúng ta sẽ update bảng <b>`products`</b> để tạo ra khoá ngoại rồi liên kết với bảng
					<b>`categories`</b> ở trên:
				</div>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Như vậy chúng ta đã tạo ra bảng <b>`categories`</b> và kết nối với bảng <b>`products`</b> qua khoá ngoại là
					<b>`category_id`</b> link đến cột <b>`id`</b>.
				</p>
				<div class="py-3"></div>
				<PageHeading text="Update các method liên quan" addOnClass="text-left mb-1" markedAs="update-method" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tiếp theo chúng ta cần update lại các method liên quan như tạo mới, chỉnh sửa của products để đảm bảo các
					category_id trong các bản ghi là thực.
				</p>
				<PageHeading text="Thêm mới" :lvl="2" addOnClass="text-left mb-1" markedAs="model-create" />
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Lấy danh sách" :lvl="2" addOnClass="text-left mb-1" markedAs="model-read" />
				<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) xong phần 5. Về cơ bản chúng ta đã hoàn thành phần CRUD. Các bạn có thể làm một pj mới để luyện tập
					lại nha.
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
				b1: `// create_categories_table.php
<?php
require('db_connect.php');
// Tạo bảng categories
$sql = "CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) !== TRUE) {
  echo "Lỗi khi tạo bảng: " . $conn->error;
};

`,
				b2: `// create_products_table.php
FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE`,

				b3: ` // create
// Kiểm tra xem category_id có tồn tại trong bảng categories không
$category_id = $data['category_id'];
$checkCategorySql = "SELECT id FROM categories WHERE id = {$category_id}";
$result = $this->conn->query($checkCategorySql);

if ($result->num_rows > 0) {
  // Nếu category_id tồn tại, tiến hành thêm sản phẩm
}else{
	// Lỗi xảy ra
}
`,
				b4: `// Lấy danh sách products kèm theo thông tin của category và lọc theo category_id
public function read($query = null)
{
    // Câu lệnh SQL cơ bản để lấy danh sách sản phẩm kèm theo thông tin của danh mục
    $sql = "SELECT products.*, categories.name as category_name, categories.description as category_description 
            FROM " . $this->table . " 
            JOIN categories ON products.category_id = categories.id";
    
    // Nếu có category_id trong $query, thêm điều kiện lọc vào câu lệnh SQL
    if (isset($query['category_id'])) {
        $category_id = $query['category_id'];
        $sql .= " WHERE products.category_id = {$category_id}";
    }

    // Thực hiện truy vấn và trả về kết quả
    return $this->conn->query($sql);
}

`,
				b5: `
<!-- Hiển thị thông báo thành công nếu có -->
    <?php if (isset($_SESSION['success_message'])) : ?>
        <p style="color: green;"><?php echo htmlspecialchars($_SESSION['success_message']); ?></p>
        <?php unset($_SESSION['success_message']); ?>
    <?php endif; ?>

<!-- ...... -->
<!-- Hiển thị lỗi nếu có -->
<div class="mb-3">
    <label for="title" class="form-label">Tên sản phẩm</label>
    <input type="text" class="form-control" id="title" placeholder="Title ..." name="product_name" aria-describedby="emailHelp">
		<span style="color: red;">
            <?php echo htmlspecialchars($_SESSION['form_errors']['product_name'] ?? ''); ?>
        </span>
  </div>
`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-6' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
