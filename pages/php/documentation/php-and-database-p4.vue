<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-6">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Introduction" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở bài này, chúng ta sẽ cùng thực hiện ví dụ về validate dữ liệu input và sử dụng $_SESSION để trả ra kết quả.
				</p>

				<PageHeading text="Tạo View" addOnClass="text-left" markedAs="create-view" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tạo nhanh một view dùng để thêm sản phẩm với đầu vào là tên sản phẩm & mô tả như sau:
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Xử lý dữ liệu trong Controller" addOnClass="text-left mb-1" markedAs="controller-update" />
				<div class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content">
					Vừa rồi là phần view, tiếp theo chúng ta sẽ thực hiện validate dữ liệu gửi lên từ người dùng tại
					<b>`ProductController`</b> như sau:
				</div>
				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Lấy dữ liệu người dùng gửi lên" addOnClass="text-left mb-1" markedAs="user-input" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Tiếp theo, chúng ta sẽ tạo một file để xử lý logic cho form, file này sẽ lấy dữ liệu từ <b>`View`</b> (form),
					và gửi cho <b>`Controller`</b>. Sau đó nhận được response của <b>`Controller`</b> và trả lại <b>View</b>
				</p>
				<PageHeading
					text="Lấy data & submit cho controller"
					:lvl="2"
					addOnClass="text-left mb-1"
					markedAs="model-read"
				/>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>
				<PageHeading text="Nhận response từ controller" :lvl="2" addOnClass="text-left mb-1" markedAs="model-read" />
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Sau khi <b>`Controller`</b> đã xử lý xong và trả lại <b>`$reponse`</b>, chúng ta sẽ tiến hành xử lý logic tuỳ
					theo giá trị trả ra là thành công hay thất bại.
				</p>
				<VCodeBlock :code="b4" highlightjs lang="php" theme="tomorrow-night-bright" />

				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Như vậy, kết quả của form tạo mới đã được lưu lại tại superglobal $_SESSION. Bây giờ chỉ cần quay lại view của
					form và update UI theo kết quả này là được.
				</p>
				<VCodeBlock :code="b5" highlightjs lang="php" theme="tomorrow-night-bright" />
				<div class="py-3"></div>

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					(❁´◡`❁) xong phần 3, chúng ta đã hoàn thành việc đọc và ghi data, còn về bài toán Update & Delete thì các bạn
					tự làm nhé :3, tui lười lắm.
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
				b1: `// createForm.php
<form method="POST" action="index.php">
  <div class="mb-3">
    <label for="title" class="form-label">Tên sản phẩm</label>
    <input type="text" class="form-control" id="title" placeholder="Title ..." name="product_name" aria-describedby="emailHelp">
 
  </div>
  <div class=" mb-3">
    <label for="content" class="form-label">Mô tả</label>
    <textarea class="form-control" placeholder="Leave a content here" id="content" name="product_description" style="height: 100px"></textarea>

  </div>
  <button type="submit" name='product_submit' class="btn btn-primary">Submit</button>
</form>
`,
				b2: `public function create($data)
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

    // Nếu không có lỗi, lưu dữ liệu và trả về thành công
    try {
      $result = $this->productModel->create($data); // Giả sử phương thức create() trong ProductModel thực hiện việc lưu dữ liệu
      if ($result) {
        return ['success' => true];
      }
    } catch (\Throwable $th) {
      // Trường hợp không lưu được
      return ['success' => false, 'errors' => ['general' => 'Không thể lưu dữ liệu.']];
    }
  }`,

				b3: ` // formHandle.php
<?php
session_start();
require_once 'database/db_connect.php';
require_once 'controllers/ProductController.php';

$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Khởi tạo Controller
$productController = new ProductController($conn);

// Biến để lưu trữ lỗi và dữ liệu nhập
$errors = [];
$data = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data['product_name'] = trim($_POST['product_name']);
  $data['regular_price'] = trim($_POST['regular_price']);

  // Lưu tất cả các dữ liệu từ form
  foreach ($_POST as $key => $value) {
    $data[$key] = trim($value);
  }

  // Gọi phương thức create() từ Controller
  $response = $productController->create($data);
}
`,
				b4: ` if ($response['success']) {
		// Trường hợp thêm thành công
    $_SESSION['success_message'] = "Sản phẩm đã được lưu thành công!";
    // Xóa session dữ liệu và lỗi
    unset($_SESSION['form_data']);
    unset($_SESSION['form_errors']);
    header('Location: createForm.php');
    exit();
  } else {
    // Nếu có lỗi, lưu dữ liệu và lỗi vào session
    $_SESSION['form_errors'] = $response['errors'];
    $_SESSION['form_data'] = $data;

    // Chuyển hướng về form
    header('Location: createForm.php');
    exit();
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
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-13-4' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
