<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng tạo View và sử dụng Model, Controller để hoàn thiện bài toán.
				</p>

				<PageHeading text="Tạo View" addOnClass="text-left" markedAs="create-model" />

				<VCodeBlock :code="b1" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Trong đó:
					<br />
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[170px]">`require_once: `</b>
							<div>
								<span> Được dùng để require các module cần thiết và tránh việc bị lặp nhiều lần. </span>
							</div>
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							<b class="min-w-[170px]">`productController : `</b>
							<div>
								<span>
									Được dùng để làm cầu nối giữa user action & Model. Ở đây chúng ta sẽ sử dụng nó để làm các thao tác
									như yêu cầu dữ liệu, yêu cầu thêm bản ghi mới ...</span
								>
							</div>
						</li>
					</ul>
				</div>

				<PageHeading text="Create - Thêm data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-create" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Lưu bản ghi vào database. Ở đây chúng ta tạm thời fake một <b>`$data`</b> để test thử tính năng của Controller
					trước, sau đó sẽ cùng tạo view để thêm data thực tế.
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<PageHeading text="Read - Đọc data" :lvl="2" addOnClass="text-left mb-1" markedAs="model-read" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">Lấy ra danh sách các bản ghi trong database</p>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) xong phần 3, chúng ta đã hoàn thành việc đọc và ghi data, còn về bài toán Update & Delete thì các bạn
					tự làm nhé :3, tui lười lắm. Ở bài tiếp theo, chúng ta sẽ cùng học cách validate dữ liệu và sử dụng
					superglobal $_SESSION để lưu kết quả
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
				b1: ` // index.php
<?php
//
require_once('./database/db_connect.php');
require_once('./database/create_products_table.php');
require_once 'controllers/ProductController.php';

$productController = new ProductController($conn);

?>
`,
				b2: `// Lấy danh sách products
$products = $productController->getAll();
foreach ($products as $product) {
	include './components/productCard.php';
};`,
				b4: `$errors = [];
if (isset($_POST['product_submit'])) {
  $data = [
    'product_name' => $_POST['product_name'],
    'product_description' => $_POST['product_description'],
  ];
  $response = $productController->create($data);
  if (!empty($response['errors'])) {
    $errors = $response['errors'];
  }
}
<!-- view -->
<div class="mb-3">
    <label for="title" class="form-label">Tên sản phẩm</label>
    <input type="text" class="form-control" id="title" placeholder="Title ..." name="product_name" aria-describedby="emailHelp">
    <span class='text-danger'>
      <?php
      echo isset($errors['product_name']) ? htmlspecialchars($errors['product_name']) : '';
      ?>
    </span>
  </div>
`,
				b3: ` // Kiểm tra và tạo bản ghi với dữ liệu truyền từ view
  public function create($data)
  {
    // logic kiểm tra data trước khi lưu.
    $errors = [];

    // Validate dữ liệu
    if (empty($data['product_name'])) {
      $errors['product_name'] = 'Tên sản phẩm không được để trống.';
    } elseif (strlen($data['product_name']) < 3) {
      $errors['product_name'] = 'Tên sản phẩm phải có ít nhất 3 ký tự.';
    }
    // Nếu có lỗi, ném ngoại lệ
    if (!empty($errors)) {
      return ['success' => false, 'errors' => $errors];
    }

    return ['success' => true];
  }`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-4' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
