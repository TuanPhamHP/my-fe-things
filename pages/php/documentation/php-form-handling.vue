<template>
	<div class="punch-page-wrapper dark:bg-slate-700 bg-white rounded-[24px] p-3 xl:p-3 3xl:p-6 pr-0">
		<div class="w-full flex gap-2">
			<div class="grow page-data">
				<PageHeading text="Intro" addOnClass="text-left" markedAs="php-intro" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					FORM là một thành phần HTML dùng để thu thập dữ liệu từ người dùng (ví dụ: thông tin đăng ký, tìm kiếm, v.v.),
					sau đó các thông tin này sẽ được xử lý và gửi lên phía Server thông qua <b>Request</b>. Ở server, PHP xử lý dữ
					liệu từ FORM bằng cách nhận dữ liệu được gửi qua các phương thức HTTP.
				</p>
				<div class="text-slate-900 dark:text-white my-5 leading-8">
					Trong PHP, xử lý form thường bao gồm các bước:
					<ul class="pl-5">
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							1) Tạo form HTML
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							2) Gửi dữ liệu từ form
						</li>
						<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
							3) Xử lý dữ liệu trong PHP.
						</li>
					</ul>
					Chúng ta sẽ làm một ví dụ đơn giản để hiểu cách làm việc với form trong PHP.
				</div>
				<PageHeading text="B1: Tạo form HTML" addOnClass="text-left" markedAs="php-form-s1" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Chúng ta sẽ tạo một form HTML đơn giản để thu thập tên và email của người dùng. Tạo
					<FilePath>home.php</FilePath>.
				</p>
				<VCodeBlock :code="b1" highlightjs lang="html" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">Trong Form trên chúng ta có:</p>
				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						Thuộc tính <b>`method="post"`</b> chỉ định rằng form sẽ gửi dữ liệu sử dụng phương thức POST.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content flex items-start gap-1">
						Thuộc tính <b>`action="handle_form.php"`</b> chỉ định rằng dữ liệu form sẽ được gửi đến file
						<b>`handle_form.php`</b>.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Ở đây, chúng ta sử dụng phương thức <b>POST</b> để gửi dữ liệu lên server, trong thực tế chúng ta có thể dùng
					các phương thức khác trong HTPP methods. Phổ biến nhất là <b>GET, POST</b>.
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content flex items-start">
						<FilePath>GET</FilePath>
						<ul class="pl-10">
							<li
								class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dữ liệu được gửi qua URL <b>(ví dụ: handle_form.php?name=John)</b>.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dễ thấy, không bảo mật, giới hạn độ dài dữ liệu.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Thích hợp cho tìm kiếm hoặc truy vấn đơn giản.
							</li>
						</ul>
					</li>
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content flex items-start">
						<FilePath>POST</FilePath>
						<ul class="pl-10">
							<li
								class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dữ liệu được gửi trong thân yêu cầu HTTP, không hiển thị trên URL.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Dễ thấy, không bảo mật, giới hạn độ dài dữ liệu.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Bảo mật hơn, không giới hạn độ dài.
							</li>
							<li
								class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc"
							>
								Thích hợp cho form chứa các thông tin nhạy cảm.
							</li>
						</ul>
					</li>
				</ul>
				<PageHeading text="B2: Xử lý dữ liệu từ form" addOnClass="text-left" markedAs="php-form-s2" :lvl="2" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tuỳ thuộc vào phương thức mà chúng ta sử dụng tại bước 1, PHP sẽ dùng hai mảng toàn cục để nhận dữ liệu từ
					FORM:
				</p>

				<ul class="pl-5">
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content flex items-start">
						<FilePath>GET</FilePath>: sẽ dùng <b>$_GET</b> để nhận dữ liệu.
					</li>
					<li class="text-slate-900 dark:text-white mb-5 leading-8 text-lg text-content flex items-start">
						<FilePath>POST</FilePath>: sẽ dùng <b>$_POST</b> để nhận dữ liệu.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Tiếp theo, viết file <FilePath> handle_form.php </FilePath> để xử lý file nào.
				</p>

				<VCodeBlock :code="b2" highlightjs lang="php" theme="tomorrow-night-bright" />
				<p class="text-slate-900 dark:text-white my-5 leading-8">
					<b>` $_SERVER["REQUEST_METHOD"] | $_POST `</b> đây chính là một biến suuper global được cung cấp sẵn bởi PHP,
					nó sẽ trả ra phương thức được yêu cầu khi truy cập vào file <b>handle_form.php</b>. Như các bạn thấy, chúng ta
					đã lấy được dữ liệu của người dùng rồi nè, nhưng phần xử lý này của chúng ta còn rất nhiều thứ cần cải thiện
					nha.
				</p>
				<PageHeading text="B3: Kiểm tra và làm sạch dữ liệu" addOnClass="text-left" markedAs="php-form-s2" :lvl="2" />

				<p class="text-slate-900 dark:text-white my-5 leading-8">
					Dữ liệu từ FORM có thể không an toàn (ví dụ: để trống, chứa mã độc). Vì vậy, cần kiểm tra và làm sạch trước
					khi xử lý. Trong php các bạn có thể dùng một số hàm sau để xử lý phần này:
				</p>
				<ul class="pl-10">
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>isset($value)</FilePath>:Kiểm tra biến có tồn tại và không phải NULL.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>empty($value)</FilePath>:Kiểm tra biến có rỗng không.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>trim($value)</FilePath>:Loại bỏ khoảng trắng thừa.
					</li>
					<li class="text-slate-900 dark:text-white my-5 leading-8 text-lg text-content marker:text-sky-400 list-disc">
						<FilePath>htmlspecialchars($value)</FilePath>:Chuyển các ký tự đặc biệt thành mã HTML để tránh tấn công XSS.
					</li>
				</ul>
				<p class="text-slate-900 dark:text-white my-3 leading-8">
					Vậy cùng update <FilePath>handle_form.php</FilePath> lên bản promax nào:
				</p>
				<VCodeBlock :code="b3" highlightjs lang="php" theme="tomorrow-night-bright" />

				<p class="text-slate-900 dark:text-white leading-8">
					Lý thuyết đủ rồi, làm
					<a
						href="/php/practice/e_3"
						target="_blank"
						rel="noreferrer"
						class="inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500"
					>
						bài tập
					</a>
					nào.
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
				b1: `<div class="container my-5 py-5">
	<h2 class="text-center mb-3">PHP Form Example</h2>
	<form method="POST" action="handle_form.php">
		<div class="mb-3">
			<label for="userEmail" class="form-label">Email:</label>
			<input type="email" name="email" class="form-control" id="userEmail" placeholder="name@example.com">
		</div>
		<div class="mb-3">
			<label for="comment" class="form-label">Bình luận</label>
			<textarea class="form-control" placeholder="Để lại bình luận của bạn" id="comment" name="comment" rows="3"></textarea>
		</div>

		<button type="submit" class="btn btn-primary">Gửi bình luận</button>
	</form>
</div>
`,
				b2: `<h2>Form Data</h2>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$email = $_POST['email'];
	$comment = $_POST['comment'];

	echo "Email: " . $email . "<br>";
	echo "comment: " . $comment . "<br>";
?>`,
				b3: `<h2>Form Data</h2>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = htmlspecialchars($_POST['email']);
  $comment = htmlspecialchars($_POST['comment']);

  if (empty($email) || empty($comment)) {
    echo "Email and comment are required.";
  } else {
    echo "Email: " . $email . "<br>";
    echo "comment: " . $comment . "<br>";
  }
} else {
  echo "Invalid request method.";
}
?>`,
			};
		},
		mounted() {
			this.getPagination();
		},
		methods: {
			getPagination() {
				this.$api.documentations.getPagination({ appIds: 'php', currentDocId: 'php-12' }).then((res: apiResponde) => {
					this.pagePagination = res?.data?.pagination || [];
				});
			},
		},
	};
</script>
z
